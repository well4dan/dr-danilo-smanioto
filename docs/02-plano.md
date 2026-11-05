# Plano de Implementacao - Site Dr. Danilo Smanioto

**Perfil:** S2, negocio local em saude animal, entregue como one-page + 2 paginas de apoio
**Direcao de design:** `high-end-visual-design` · Soft Structuralism · Editorial Split · Dials V6/M6/D3
**Hospedagem alvo:** Cloudflare Pages, Netlify ou Vercel (os tres arquivos de cabecalho saem na entrega)

## Resumo

Transformar quem busca "neurologista veterinario Londrina" ou digita o sintoma do proprio cao em uma conversa no WhatsApp. Publico principal: tutor em crise aguda, no celular. Acao principal: botao de WhatsApp com mensagem pre-preenchida. Metrica: cliques no WhatsApp e no telefone.

## Etapas

| # | Etapa | Objetivo | Arquivos | Depende de | Pronto quando | Risco | Reverter |
|---|---|---|---|---|---|---|---|
| 1 | Base, seguranca e raiz de SEO | Esqueleto do projeto, `<head>` completo, pacote de descoberta e cabecalhos | `index.html`, `robots.txt`, `sitemap.xml`, `llms.txt`, `site.webmanifest`, `.well-known/security.txt`, `vercel.json`, `_headers`, `.htaccess` | - | HTML valido, hash sha256 do inline calculado e na CSP, 9 itens de raiz presentes | baixo | apagar a pasta |
| 2 | Ativos locais | Fontes, motion, icones e imagens servidos do proprio dominio | `fonts/*.woff2`, `js/vendor/*.js`, `favicon.*`, `icon-*.png`, `img/*.webp`, `og-image.jpg` | 1 | nenhuma requisicao externa; GSAP 3.15.1 e Lenis 1.3.27 fixados; retrato real otimizado; mapa gerado | medio (licenca e peso) | voltar para a versao anterior dos arquivos |
| 3 | Sistema de design | Tokens e base visual | `css/tokens.css`, `css/base.css` | 2 | paleta, tipografia, raio unico, sombras e curvas aplicadas; foco visivel; grao fixo | baixo | reverter os dois arquivos |
| 4 | Cabecalho e rodape | Navegacao em uma linha e fechamento escuro com CTA | `css/layout.css`, `css/components.css`, `js/ui.js` | 3 | nav em 1 linha ate 1024 px, altura <= 72 px, menu mobile com morph do hamburguer | baixo | reverter componentes |
| 5 | Hero | Reconhecimento + autoridade + acao em uma tela | `index.html`, `css/components.css` | 4 | checklist do hero cumprido: titulo <= 2 linhas, subtexto <= 20 palavras, CTA visivel sem rolar em 360 px | medio | reverter a secao |
| 6 | Credibilidade e Sinais de alerta | Prova real + autoidentificacao do sintoma | `index.html`, `css/sections.css` | 5 | **pilha com sticky scroll** em CSS puro, sem travar o scroll e sem biblioteca | baixo | trocar `position: sticky` por `static` e vira lista comum |
| 7 | Atendimento e Sobre | O que e feito + quem faz | `index.html`, `css/components.css`, `js/cards.js` | 6 | bento com 5 celulas para 5 conteudos, spotlight com equivalente no foco de teclado | medio | trocar bento por grade simples |
| 8 | Consulta, Depoimentos e FAQ | Reduzir medo, provar e derrubar objecao | `index.html`, `css/components.css`, `js/ui.js` | 7 | 4 passos sem rotulo "Etapa 1", 3 depoimentos reais com origem citada, FAQ com `<details>` nativo e `FAQPage` valido | baixo | reverter secoes |
| 9 | Contato e localizacao | NAP, horario, rota e canais | `index.html`, `css/components.css` | 8 | NAP identico ao Google, mapa estatico com atribuicao, `wa.me` com texto pre-preenchido, sem iframe | baixo | reverter secao |
| 10 | Motion e interacoes | Coreografia completa | `js/motion.js`, `js/cards.js`, `js/main.js` | 9 | so `transform` e `opacity`, cada reveal dispara uma vez, `prefers-reduced-motion` testado, nenhuma biblioteca no celular | medio | `main.js` sem `initMotion()` |
| 11 | Paginas de apoio | Privacidade e 404 com marca | `politica-de-privacidade.html`, `404.html` | 4 | title e description proprios, 404 com `noindex` e saida para a home | baixo | apagar os arquivos |
| 12 | Otimizacao e auditoria | Bater as metas e fechar o relatorio | todos, `README.md`, `docs/03-auditoria.md` | 1 a 11 | Score >= 85, zero veto, validador W3C limpo, console limpo, 360/768/1280/1920 ok | medio | rollback do deploy |

## Midia (em paralelo, do seu lado)

- **Script de imagens:** `docs/script-imagens.md` - 11 imagens, cada prompt em bloco proprio para copiar. Gere na ordem IMG-01 a IMG-OG.
- **Script de video Flow:** `docs/script-video-flow.md` - 3 cenas e 4 frames de referencia, para quando quiser hero em video. **Nao entra nesta rodada.**
- Enquanto as imagens definitivas nao chegam, o site roda com o retrato real enviado, imagens CC0 otimizadas e o mapa gerado dos tiles do OpenStreetMap. Os nomes de arquivo ja sao os definitivos, entao a troca e sobrescrever e pronto.

## O que preciso de voce antes de publicar (nao antes de comecar)

1. **Numero do CRMV-PR.** Exigido na publicidade pela Resolucao CFMV 1071/2014. Fica em um unico lugar, `js/config.js`.
2. **Horario real da semana.** Hoje assumi seg a sex, 8h as 19h, a partir do "Fecha 19:00" do Google.
3. **Dominio.** Assumi `danilosmaniotovet.com.br`. Trocar e um comando.
4. **Foto em alta resolucao** do Dr. Danilo. A que tenho tem 295x290 px.
5. Confirmacao de **quais exames de imagem sao feitos na propria estrutura**.

Nada disso bloqueia o desenvolvimento. Bloqueia apenas o deploy em producao.

## Fora desta rodada

- Paginas proprias por condicao (hernia de disco, epilepsia, sindrome vestibular). Sao a melhor evolucao de SEO depois que a home estiver no ar.
- Blog ou area de artigos.
- Agendamento online e area do cliente. Isso sai do escopo de site estatico e passa para a skill `arquitetura-blindada`.
- Hero em video.
- Versao em ingles ou espanhol.

## Checkpoints com voce

- Depois da Etapa 5 (hero pronto): voce ve a primeira tela antes de eu seguir.
- Depois da Etapa 9 (pagina inteira montada): revisao de texto.
- Antes do deploy: relatorio de auditoria com score.

**Aguardando sua aprovacao para iniciar a Etapa 1.**
