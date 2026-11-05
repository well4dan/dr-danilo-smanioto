#!/usr/bin/env python3
"""Junta os arquivos de CSS em um unico css/site.css.

Os arquivos de origem continuam separados para dar manutencao. O site publicado
carrega so um, o que corta seis requisicoes que bloqueiam a renderizacao.

    python3 tools/build_css.py
"""
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
CSS = ROOT / "css"
BUNDLE = CSS / "site.css"

# A ordem importa: tokens primeiro, header depois de components.
ORDER = ["tokens.css", "base.css", "layout.css", "components.css",
         "header.css", "sections.css", "content.css", "pages.css"]


def minify(text: str) -> str:
    text = re.sub(r"/\*.*?\*/", "", text, flags=re.S)
    text = re.sub(r"\s*\n\s*", "\n", text)
    text = re.sub(r"\n{2,}", "\n", text)
    text = re.sub(r"\s*([{};:,>])\s*", r"\1", text)
    text = re.sub(r";}", "}", text)
    return text.strip()


def build() -> int:
    parts = ["/* Gerado por tools/build_css.py. Edite os arquivos em css/, nunca este. */"]
    for name in ORDER:
        path = CSS / name
        if not path.exists():
            print(f"aviso: {name} nao existe, pulando", file=sys.stderr)
            continue
        parts.append(minify(path.read_text(encoding="utf-8")))
    BUNDLE.write_text("\n".join(parts) + "\n", encoding="utf-8")
    return BUNDLE.stat().st_size


if __name__ == "__main__":
    size = build()
    print(f"css/site.css gerado: {size / 1024:.1f} KB")
