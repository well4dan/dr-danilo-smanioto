#!/usr/bin/env python3
"""Servidor local que devolve os MESMOS cabecalhos da producao.

Serve para conferir CSP, cache e preload antes do deploy. Le o arquivo
`_headers` (formato Netlify / Cloudflare Pages) para nao duplicar regra.

    python3 tools/devserver.py 4173
    python3 tools/devserver.py 4173 --cache   (liga tambem o cache longo)

Sem --cache, o Cache-Control de ano inteiro fica de fora: durante o
desenvolvimento ele faria o navegador segurar CSS e JS antigos.
"""
import gzip
import http.server
import io
import pathlib
import re
import sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
import build_css  # noqa: E402

ROOT = pathlib.Path(__file__).resolve().parent.parent
PRIVATE = ("/docs/", "/tools/", "/.git")
COMPRESSIBLE = (".html", ".css", ".js", ".json", ".svg", ".txt", ".xml", ".webmanifest")


def load_headers():
    """Extrai de _headers os cabecalhos do bloco /* e dos blocos de pasta."""
    text = (ROOT / "_headers").read_text(encoding="utf-8")
    blocks, current = {}, None
    for raw in text.splitlines():
        if not raw.strip() or raw.lstrip().startswith("#"):
            continue
        if not raw.startswith((" ", "\t")):
            current = raw.strip()
            blocks[current] = []
        elif current:
            key, _, value = raw.strip().partition(":")
            blocks[current].append((key.strip(), value.strip()))
    return blocks


HEADERS = load_headers()
WITH_CACHE = "--cache" in sys.argv
FOLDER_RULES = [(re.compile(p.replace("*", ".*")), h)
                for p, h in HEADERS.items() if p != "/*"] if WITH_CACHE else []


class Handler(http.server.SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        for key, value in HEADERS.get("/*", []):
            self.send_header(key, value)
        for pattern, extra in FOLDER_RULES:
            if pattern.match(self.path):
                for key, value in extra:
                    self.send_header(key, value)
                break
        if not WITH_CACHE:
            self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_GET(self):
        if any(self.path.startswith(p) for p in PRIVATE):
            self.send_error(404, "Not Found")
            return

        # O bundle e gerado: refaz a cada pedido para nunca servir CSS velho.
        if self.path.startswith("/css/site.css"):
            build_css.build()
        if self.path.rstrip("/") in ("", "/index"):
            self.path = "/index.html"

        # Hospedagens estaticas comprimem texto por padrao. Sem isso aqui,
        # qualquer medicao local superestima o peso da pagina.
        path = self.translate_path(self.path)
        accepts_gzip = "gzip" in self.headers.get("Accept-Encoding", "")
        if accepts_gzip and path.endswith(COMPRESSIBLE) and pathlib.Path(path).is_file():
            raw = pathlib.Path(path).read_bytes()
            body = gzip.compress(raw, 6)
            self.send_response(200)
            self.send_header("Content-Type", self.guess_type(path))
            self.send_header("Content-Encoding", "gzip")
            self.send_header("Content-Length", str(len(body)))
            self.send_header("Vary", "Accept-Encoding")
            self.end_headers()
            self.wfile.write(body)
            return

        super().do_GET()

    def log_message(self, fmt, *args):
        sys.stderr.write("%s %s\n" % (self.address_string(), fmt % args))


if __name__ == "__main__":
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    port = int(args[0]) if args else 4173
    with http.server.ThreadingHTTPServer(("127.0.0.1", port), Handler) as httpd:
        cache = "com" if WITH_CACHE else "sem"
        print(f"servindo {ROOT} em http://127.0.0.1:{port}, cabecalhos de producao, {cache} cache longo")
        httpd.serve_forever()
