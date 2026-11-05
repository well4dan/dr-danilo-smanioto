#!/usr/bin/env bash
# Troca o domínio em todos os arquivos do site.
#   bash tools/trocar-dominio.sh novodominio.com.br
set -euo pipefail

ANTIGO="danilosmaniotovet.com.br"
NOVO="${1:-}"

if [ -z "$NOVO" ]; then
  echo "uso: bash tools/trocar-dominio.sh novodominio.com.br" >&2
  exit 1
fi

cd "$(dirname "$0")/.."

ALVOS=$(grep -rl "$ANTIGO" \
  --include='*.html' --include='*.txt' --include='*.xml' \
  --include='*.json' --include='*.webmanifest' \
  . 2>/dev/null || true)

if [ -z "$ALVOS" ]; then
  echo "nada encontrado com $ANTIGO"
  exit 0
fi

echo "$ALVOS" | while read -r arquivo; do
  sed -i "s|$ANTIGO|$NOVO|g" "$arquivo"
  echo "  trocado: $arquivo"
done

echo
echo "pronto. confira também:"
echo "  - .well-known/security.txt"
echo "  - o domínio canônico configurado na hospedagem"
