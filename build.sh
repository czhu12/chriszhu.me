#!/usr/bin/env bash
# Cloudflare build: fetch a pinned Hugo release, then build into public/.
set -euo pipefail
HUGO_VERSION="${HUGO_VERSION:-0.168.0}"
curl -fsSL "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_linux-amd64.tar.gz" | tar -xz hugo
./hugo --gc --minify
