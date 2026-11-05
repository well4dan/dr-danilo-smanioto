# Arquitetura - Site Dr. Danilo Smanioto

Perfil **S2** · Data 2026-11-05

---

## 1. Direcao de design

**Design read:** site de negocio local em saude animal, para tutores em crise aguda e para veterinarios que encaminham casos, com linguagem de autoridade clinica calma, apoiado em `high-end-visual-design` traduzido para HTML + CSS + JS puro.

**Direcao:** `high-end-visual-design`
**Arquetipo de vibe:** Soft Structuralism (o proprio arquetipo indicado pela skill para saude e consumo). Fundo cinza-prata frio, tipografia grotesca grande, componentes flutuantes com sombra ambiente muito difusa.
**Arquetipo de layout:** The Editorial Split como familia dominante. A secao de atendimento usa cinco cards de tamanho identico, tres na primeira fileira e dois centrados na segunda, por pedido do cliente.
**Dials:** `DESIGN_VARIANCE 6` · `MOTION_INTENSITY 6` · `VISUAL_DENSITY 3`

Justificativa dos dials: a tabela de saude da skill pede V5/M5/D3, mas o pedido inclui "precisa impressionar". Subir variance e motion em um ponto mantem o site memoravel sem virar portfolio de agencia. Density fica em 3 porque o publico A le pouco e com pressa.

**Tema:** claro, travado e declarado. Nenhuma secao inverte no meio da pagina. O rodape escuro e o fechamento convencional do documento, nao uma troca de tema, e concentra o CTA final.

### Paleta (um acento, travado na pagina inteira)

| Token | Hex | Uso | Contraste |
|---|---|---|---|
| `--surface-0` | `#F2F3F2` | fundo da pagina (bone frio) | - |
| `--surface-1` | `#FFFFFF` | cards flutuantes | - |
| `--surface-2` | `#E6E9E7` | blocos com tinta leve | - |
| `--ink-950` | `#0B1013` | rodape e bloco de fechamento | - |
| `--ink-900` | `#10161A` | titulos | 16:1 sobre `--surface-0` |
| `--ink-600` | `#414B49` | corpo de texto | 7,9:1 sobre `--surface-0` |
| `--ink-400` | `#5F6A66` | legendas | 4,9:1 sobre `--surface-0`, AA em 13 px |
| `--accent-700` | `#11574F` | botao primario, links, numeros | branco sobre ele: 8,4:1 |
| `--accent-500` | `#16776B` | hover e detalhes | - |
| `--accent-300` | `#6FC2B4` | links sobre fundo escuro | 9,4:1 sobre `--ink-950` |
| `--accent-050` | `#E3EEEB` | tinta de apoio em cards | - |

Teal profundo em vez do azul-clinico generico e do roxo de IA. Um acento so, usado identicamente do cabecalho ao rodape.

### Tipografia

Duas familias, quatro arquivos woff2, subset latin, auto-hospedadas.

| Papel | Fonte | Licenca | Pesos |
|---|---|---|---|
| Display | **Clash Display** (Fontshare) | ITF Free Font License, uso comercial liberado | 600 |
| Texto e interface | **Geist** (Google Fonts) | SIL OFL 1.1 | 400, 500, 600 |

Inter, Roboto, Arial, Open Sans e Helvetica estao fora por regra da direcao. Nenhuma serifada: o briefing nao e editorial nem heritage, e a skill trata serifada como padrao desaconselhado.

Escala fluida com `clamp()`, `text-wrap: balance` nos titulos, corpo limitado a 65ch.

### Forma e profundidade

Raio unico travado: `--radius-lg: 20px` para cards, `--radius-md: 12px` para elementos internos, `--radius-pill: 999px` para botoes e pills. Regra documentada e seguida em toda a pagina.

Arquitetura de borda dupla (Doppelrand) nos cards principais: casca externa com fundo levemente tingido, hairline de 1px e `padding: 6px`; nucleo interno com fundo proprio, brilho interno sutil e raio calculado (`calc(20px - 6px)`) para curvas concentricas.

Sombras tingidas com o tom do fundo, nunca preto puro:
`--shadow-soft: 0 24px 60px -32px rgba(11,16,19,.18)`
`--shadow-lift: 0 40px 90px -40px rgba(11,16,19,.26)`

Grao fixo em pseudo-elemento `position: fixed; inset: 0; pointer-events: none; opacity: .035`, nunca em container que rola.

---

## 2. Stack

| Camada | Escolha | Por que |
|---|---|---|
| Marcacao | HTML5 semantico, sem framework | vitrine local, SEO e peso mandam |
| Estilo | CSS puro com custom properties, `clamp()`, `:has()`, container queries | zero build, zero Tailwind CDN em producao |
| Interacao | ES modules, sem framework | nada a hidratar |
| Motion | CSS (animacao do hero, pilha sticky, scroll-driven) + IntersectionObserver. Lenis 1.3.27 auto-hospedado, so no desktop e sob demanda | GSAP saiu depois da medicao: custava cerca de 1 s de thread principal no celular sem entregar nada que o CSS nao faca |
| Imagens | WebP + JPG de fallback, `<picture>` com `srcset` | AVIF entra na pos-producao com squoosh ou sharp |
| Fontes | woff2 auto-hospedado | `font-src 'self'` |
| Formulario | **nenhum** | contato por WhatsApp, telefone e e-mail. Sem backend, sem spam, sem dado pessoal trafegando |
| Mapa | imagem estatica propria (tiles do OpenStreetMap costurados, com atribuicao) + botao que abre o Google Maps em nova aba | zero iframe, `frame-src 'none'` |
| Analytics | nenhum na entrega inicial | sem cookie, sem banner. Cloudflare Web Analytics fica como opcao |
| Hospedagem | Cloudflare Pages, Netlify ou Vercel | HTTPS, CDN e cabecalhos prontos. Os tres arquivos de config vao na entrega |

Nenhuma dependencia de build. Nenhum pacote npm no site publicado.

---

## 3. Estrutura de pastas

```
site/
|- index.html
|- politica-de-privacidade.html
|- 404.html
|- robots.txt
|- sitemap.xml
|- llms.txt
|- site.webmanifest
|- favicon.ico  favicon.svg  apple-touch-icon.png
|- icon-192.png  icon-512.png  icon-512-maskable.png
|- og-image.jpg
|- .well-known/security.txt
|- css/
|  |- tokens.css        cor, tipografia, espaco, raio, sombra, motion
|  |- base.css          reset, tipografia base, foco, grao, utilitarios
|  |- layout.css        container, grid, ritmo vertical das secoes
|  |- components.css    header, botoes, cards, acordeao, rodape
|- js/
|  |- config.js         telefone, WhatsApp, CRMV, dominio em um lugar so
|  |- main.js           entrada (type="module")
|  |- motion.js         reveals, botao magnetico, Lenis sob demanda
|  |- cards.js          spotlight e estados de foco
|  |- ui.js             header no scroll, acordeao, carrossel, ano do rodape
|  |- vendor/           lenis.min.js
|- fonts/               clash-display-600.woff2, geist-400/500/600.woff2
|- img/                 nomes exatos do script-imagens.md
|- docs/                briefing, arquitetura, plano, scripts de midia (NAO publicar)
|- vercel.json  _headers  .htaccess
|- README.md
```

---

## 4. Plano de motion (secao a secao)

Motor: **CSS primeiro**. A unica biblioteca que sobrou e o Lenis 1.3.27, para scroll
suave, carregado sob demanda e apenas no desktop com ponteiro fino.

> **Mudanca em relacao ao plano original.** A ideia era GSAP + ScrollTrigger para o
> painel horizontal pinado. A medicao com Lighthouse mostrou GSAP custando cerca de
> 1 s e Lenis outro 1,1 s de thread principal no celular. Como `position: sticky` e
> `animation-timeline: view()` dao o mesmo resultado sem biblioteca, o GSAP saiu do
> projeto. O efeito da secao de sinais passou a ser **sticky scroll** em vez de
> painel horizontal, por pedido do cliente e com o ganho de performance junto.

| # | Secao | O que anima | Gatilho | Duracao | Fallback reduced-motion |
|---|---|---|---|---|---|
| 1 | Cabecalho | pill flutuante encolhe e some ao descer, volta ao subir | IntersectionObserver em uma sentinela + direcao lida dentro de rAF | 420 ms | troca instantanea |
| 2 | Hero | titulo em mask reveal por linha, subtitulo e CTAs em fade-up, imagem com `scale` 1,05 para 1. **CSS puro, sem JS** | load | 1,1 s | animacao desligada por media query |
| 3 | Credibilidade | fade-up em stagger | IntersectionObserver | 0,9 s | aparece direto |
| 4 | Sinais de alerta | **pilha com sticky scroll**: cada card gruda 16 px abaixo do anterior; quem fica para tras recua com `scale` 0,955 e opacidade 0,72 via `animation-timeline: view()` | `position: sticky`, sem JS | continua | pilha vira lista comum |
| 5 | Atendimento | bento em fade-up stagger + spotlight que segue o cursor | IntersectionObserver / pointermove | 0,9 s | sem spotlight |
| 6 | Sobre | retrato e texto em fade-up | IntersectionObserver | 0,9 s | aparece direto |
| 7 | Como e a consulta | passos em stagger | IntersectionObserver | 0,9 s | aparece direto |
| 8 | Depoimentos | fade-up em stagger | IntersectionObserver | 0,9 s | aparece direto |
| 9 | FAQ | chevron gira em `rotate`, resposta entra em `opacity` | clique | 180 ms | giro instantaneo |
| 10 | Contato | fade-up em stagger | IntersectionObserver | 0,9 s | aparece direto |
| 11 | CTA primario | **botao magnetico**, deslocamento maximo 12 px, apenas `pointer: fine` | pointermove dentro de rAF | 450 ms | desligado |
| 12 | Pagina inteira | scroll suave (Lenis), so no desktop, carregado depois de `load` + idle | - | - | nao carrega |

Curvas: `--ease-out: cubic-bezier(.16,1,.3,1)` nas entradas, `--ease-in-out: cubic-bezier(.65,0,.35,1)` nas trocas de estado. `linear` e `ease-in-out` padrao proibidos.

Regras fechadas: so `transform` e `opacity`; cada revelacao dispara uma vez e o
observador para de observar o elemento; nenhum `addEventListener('scroll')` que
rode trabalho direto (o unico usa rAF e `passive: true`); o conteudo existe no HTML
e os estados iniciais ocultos vivem apenas sob a classe `.js`, adicionada por um
script inline de uma linha com hash na CSP. Se o JS falhar, a pagina aparece inteira
(testado: 44 elementos animados, zero ocultos).

## 5. Plano de SEO

### Titulos e descricoes

**index.html - 3 opcoes de title**
1. `Neurologia veterinaria em Londrina | Dr. Danilo Smanioto` (56)
2. `Neurologista veterinario em Londrina | Dr. Danilo` (49)
3. `Cirurgia de coluna para caes e gatos em Londrina` (48)

Recomendada: **opcao 1**. Tem o termo buscado nos primeiros 60 caracteres, nomeia o profissional e cabe sem corte.

**index.html - 3 opcoes de description**
1. `Seu cao parou de andar ou teve convulsao? Consulta e cirurgia de coluna para caes e gatos em Londrina, com mestrado em neurologia pela UEL.` (138)
2. `Atendimento em neurologia e neurocirurgia de caes e gatos em Londrina. Residencia em cirurgia e mestrado pela UEL. Fale agora pelo WhatsApp.` (139)
3. `Cao que nao anda, convulsao ou dor na coluna? Atendimento em neurologia veterinaria em Londrina, com mestrado pela UEL. Chame no WhatsApp.` (137)

Recomendada: **opcao 3**. Abre com o sintoma que o tutor digita, entrega o diferencial verificavel e fecha com verbo de acao.

**politica-de-privacidade.html**
Title: `Politica de privacidade | Dr. Danilo Smanioto` · Description propria, unica.

### Palavras-chave

Principal: `neurologista veterinario Londrina`.
Apoio: `neurologia veterinaria Londrina`, `cirurgia de coluna cachorro Londrina`, `cachorro nao anda patas traseiras`, `hernia de disco em cachorro`, `convulsao em cachorro Londrina`, `neurologista para gatos Londrina`.

### URLs

`/` · `/politica-de-privacidade` · `/404` (noindex). Ancoras internas: `#sinais`, `#atendimento`, `#sobre`, `#consulta`, `#depoimentos`, `#faq`, `#contato`.

### JSON-LD (`@graph` em `index.html`)

- `WebSite`
- `Person` - Danilo Smanioto, `jobTitle` medico-veterinario, `alumniOf` UEL, `memberOf` ABNV, `sameAs` Instagram e Perfil do Google
- `VeterinaryCare` - subtipo oficial de `LocalBusiness` no schema.org, com `address`, `geo`, `telephone`, `openingHoursSpecification`, `areaServed`, `priceRange`
- `MedicalBusiness` -> `availableService` com os servicos descritos na pagina
- `FAQPage` - somente com as perguntas visiveis na pagina

Nenhuma marcacao de `aggregateRating`: a nota 4,8 vive no Perfil do Google e aparece no site como citacao com link, nao como dado estruturado proprio. Marcar avaliacao propria e justamente o que o Google penaliza.

### Pacote de raiz

`robots.txt` (produção, com Allow para GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot e Google-Extended), `sitemap.xml` com 2 URLs, `llms.txt`, `site.webmanifest`, `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, `icon-192/512/512-maskable`, `og-image.jpg` 1200x630, `404.html`, `.well-known/security.txt`.

---

## 6. Plano de midia

| Slot | Arquivo final | Origem na entrega | Substituir por |
|---|---|---|---|
| Retrato do hero (cartao de credencial) | `img/danilo-retrato.webp` | **foto real enviada**, 295x290, usada em 140 px de diametro | original em alta do proprio Dr. Danilo |
| Retrato da secao Sobre | `img/danilo-sobre.webp` | mesma foto, recorte vertical | foto nova, IMG-05 do script |
| Hero (ambiente) | `img/hero-desktop.webp` / `hero-mobile.webp` | imagem CC0 otimizada localmente | IMG-01 e IMG-02 do script |
| Cards de atendimento (3) | `img/atend-consulta.webp`, `img/atend-cirurgia.webp`, `img/atend-reabilitacao.webp` | imagens CC0 | IMG-03, IMG-04, IMG-06 |
| Mapa | `img/mapa-londrina.webp` | tiles do OpenStreetMap costurados e dessaturados, com atribuicao | opcional: mapa estatico com a marca |
| Open Graph | `og-image.jpg` | composto localmente com PIL a partir do retrato + tipografia | IMG-OG do script |
| Icones e favicon | `favicon.svg` e derivados | monograma tipografico "DS" em Clash Display | logo oficial, se o cliente tiver |

Regra: **todo nome de arquivo no HTML ja e o nome final do script de imagens.** Quando as imagens definitivas chegarem, e so sobrescrever os arquivos. Nenhuma marcacao de placeholder fica no codigo.

Creditos das imagens CC0 ficam em `docs/creditos-imagens.md`.

**Video:** nao entra nesta rodada. O `docs/script-video-flow.md` e entregue pronto para quando o cliente quiser hero em video, com os frames necessarios ja descritos.

---

## 7. Threat model

| Superficie | Risco | Tratamento |
|---|---|---|
| Formulario | spam, injecao, vazamento de dado pessoal | **nao existe formulario.** Contato por `wa.me` com mensagem pre-preenchida via `encodeURIComponent`, `tel:` e `mailto:` |
| Scripts de terceiros | CDN comprometido, versao movel | GSAP 3.15.1 e Lenis 1.3.27 baixados e servidos do proprio dominio. `script-src 'self'` |
| Embeds | iframe de mapa carregando no load, cookie de terceiro | sem iframe. Imagem estatica + link externo. `frame-src 'none'` |
| Links externos | tabnabbing | `rel="noopener noreferrer"` em todo `target="_blank"` |
| Parametros de URL | XSS refletido | nenhum parametro lido pelo JS. Zero `innerHTML` com dado externo |
| Clickjacking | enquadramento do site | `X-Frame-Options: DENY` + `frame-ancestors 'none'` |
| E-mail exposto | spam | `mailto:` montado por JS a partir de partes, com fallback em texto para quem esta sem JS |
| Homologacao indexada | preview no Google | `X-Robots-Tag: noindex` no preview, nunca `Disallow: /` |
| Arquivos privados | `docs/` publicado | `docs/` fora da pasta publicada + `Disallow: /docs/` no robots |

### CSP final

```
default-src 'self'; script-src 'self' 'sha256-HASH_DO_INLINE'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; media-src 'self'; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'none'; frame-ancestors 'none'; upgrade-insecure-requests
```

Sem `unsafe-eval`, sem `unsafe-inline`, sem curinga. O unico script inline e a linha que adiciona a classe `.js`, liberada por hash sha256 calculado na Etapa 1.

Demais cabecalhos: `Strict-Transport-Security`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options`, `Cross-Origin-Opener-Policy`. Templates para Vercel, Netlify/Cloudflare e Apache saem os tres.

---

## Gate 2

- [x] Skill de design declarada (`high-end-visual-design`, Soft Structuralism, Editorial Split) com dials V6/M6/D3
- [x] Tokens de cor, tipografia, espaco, raio, sombra e motion definidos
- [x] Toda secao tem plano de motion com gatilho, duracao e fallback
- [x] Toda pagina tem title e description unicos, com 3 opcoes e recomendacao
- [x] Nenhum script de terceiro remoto. Os dois usados sao locais e com versao fixa
