# Site do Dr. Danilo Smanioto, Neurologia Veterinária

Site estático, sem build e sem dependência externa em tempo de execução.
HTML, CSS e JavaScript puros. Fontes, biblioteca de animação e ícones são
servidos do próprio domínio.

---

## Antes de publicar

Cinco pendências. Nenhuma impede testar o site, todas impedem colocar no ar.

| # | O que falta | Onde resolver |
|---|---|---|
| 1 | **Número do CRMV-PR.** A Resolução CFMV 1071/2014 exige o registro profissional em qualquer publicidade. | `js/config.js`, campo `crmv`. Basta preencher: o rodapé já tem o elemento e passa a exibir sozinho. |
| 2 | **Horário de atendimento.** Hoje o site só diz "com hora marcada", sem prometer horário. | Se o Dr. Danilo confirmar os horários, acrescente `openingHoursSpecification` ao JSON-LD de `index.html` e uma linha na seção de contato. |
| 3 | **Domínio.** Tudo aponta para `danilosmaniotovet.com.br`. | `bash tools/trocar-dominio.sh novodominio.com.br` |
| 4 | **Confirmar quais exames são feitos na própria estrutura.** O texto atual não afirma onde a imagem é realizada, justamente para não prometer o que não existe. | `index.html`, seção Atendimento e FAQ |
| 5 | **Retrato oficial.** O retrato em uso foi gerado por IA a partir de uma foto real, e o bordado do jaleco saiu ilegível. O corte atual exclui essa área, mas o ideal é uma foto nova. | `docs/script-imagens.md`, item IMG-05, tem as instruções para o fotógrafo. |

---

## Rodar localmente

```bash
python3 tools/devserver.py 4180
```

O servidor devolve **os mesmos cabeçalhos da produção** (CSP, HSTS, X-Frame-Options e companhia),
lendo o arquivo `_headers`. É assim que dá para testar a CSP antes do deploy.

Para checar também o cache longo de produção:

```bash
python3 tools/devserver.py 4180 --cache
```

Durante o desenvolvimento, rode sem `--cache`: o cache de um ano faria o navegador
segurar CSS e JS antigos.

---

## CSS

Os arquivos em `css/` são a fonte. O site carrega **apenas `css/site.css`**, que é
gerado juntando e minificando todos eles:

```bash
python3 tools/build_css.py
```

O servidor local regenera o bundle a cada requisição, então durante o
desenvolvimento basta editar os arquivos de origem. **Antes de publicar, rode o
comando acima**, senão o site vai ao ar com o CSS da versão anterior.

---

## Publicar

Funciona em qualquer hospedagem estática. Os três arquivos de cabeçalho já estão prontos:

| Hospedagem | Arquivo usado |
|---|---|
| Vercel | `vercel.json` + `.vercelignore` |
| Netlify, Cloudflare Pages | `_headers` + `_redirects` |
| Apache, hospedagem compartilhada | `.htaccess` |

**Não publique** `docs/`, `tools/` e `.claude/`. O `.vercelignore` já exclui, e o
`_redirects` e o `.htaccess` devolvem 404 para esses caminhos caso subam junto.

Depois do deploy:

1. Conferir os cabeçalhos em [securityheaders.com](https://securityheaders.com).
2. Cadastrar no Google Search Console e no Bing Webmaster Tools, e enviar o `sitemap.xml`.
3. Testar o JSON-LD no [Rich Results Test](https://search.google.com/test/rich-results).
4. Rodar o [PageSpeed Insights](https://pagespeed.web.dev) em mobile e desktop.
5. Testar o preview do link no WhatsApp.

---

## Estrutura

```
.
├── index.html                      home completa
├── politica-de-privacidade.html
├── 404.html
├── robots.txt  sitemap.xml  llms.txt  site.webmanifest
├── favicon.ico  favicon.svg  apple-touch-icon.png  icon-*.png  og-image.jpg
├── .well-known/security.txt
├── css/
│   ├── tokens.css      cor, tipografia, espaço, raio, sombra, motion
│   ├── base.css        reset, tipografia base, foco, grão, reduced-motion
│   ├── layout.css      container, ritmo das seções, grades
│   ├── components.css  botões, cards, rodapé
│   ├── header.css      cabeçalho flutuante e menu mobile
│   ├── sections.css    hero, faixa de credibilidade, sinais de alerta
│   ├── content.css     bento, sobre, passos, depoimentos, FAQ, contato
│   ├── pages.css       política de privacidade e 404
│   └── site.css        GERADO por tools/build_css.py, é o que o site carrega
├── js/
│   ├── config.js       telefone, WhatsApp, e-mail e CRMV em um lugar só
│   ├── main.js         entrada
│   ├── ui.js           cabeçalho no scroll, menu, e-mail montado por JS
│   ├── motion.js       reveals, botão magnético, Lenis sob demanda
│   ├── cards.js        spotlight dos cards
│   └── vendor/         lenis 1.3.27
├── fonts/              Clash Display 600, Geist variável
├── img/                imagens do site e sprite de ícones
├── docs/               briefing, arquitetura, plano, scripts de mídia  (NÃO publicar)
├── tools/              servidor local e utilitários                    (NÃO publicar)
└── vercel.json  _headers  _redirects  .htaccess  .vercelignore
```

---

## Decisões que valem conhecer

**Nenhum formulário.** O contato é WhatsApp, telefone e e-mail. Some o spam, some o
backend, some o tratamento de dado pessoal em trânsito, e o público que o site atende
prefere WhatsApp de qualquer forma.

**Nenhum iframe.** O mapa é uma imagem estática gerada de tiles do OpenStreetMap, com
atribuição, e o botão abre o Google Maps em outra aba. A CSP pode manter `frame-src 'none'`.

**Nada carregado de fora.** Lenis, as duas fontes e os ícones Phosphor estão em
`js/vendor/`, `fonts/` e `img/icons.svg`. A CSP não precisa liberar nenhuma origem externa
e não existe CDN que possa ser comprometido.

**Quase nenhuma biblioteca.** O projeto começou com GSAP e ScrollTrigger. A medição
com Lighthouse mostrou GSAP custando cerca de 1 s e Lenis outro 1,1 s de thread
principal no celular. A entrada do hero virou animação de CSS, as revelações viraram
IntersectionObserver, e a pilha de sinais virou `position: sticky` com
`animation-timeline: view()`. GSAP saiu do projeto. Sobrou o Lenis, só para o scroll
suave, carregado sob demanda e apenas no desktop com mouse. **No celular o site não
baixa nenhuma biblioteca.**

**Cache sem hash no nome.** Só fontes e as bibliotecas de versão fixa têm cache de um ano.
CSS, JS e imagens revalidam, porque os nomes dos arquivos não mudam quando o conteúdo muda.

**O site funciona sem JavaScript.** Os estados iniciais das animações só existem sob a
classe `.js`, que é adicionada por script. Sem JS, a página aparece inteira. Testado:
44 elementos animados, zero ocultos.

**Sem `aggregateRating` no JSON-LD.** A nota 4,8 aparece como citação com link para o
Perfil de Empresa do Google. Marcar avaliação própria em dados estruturados é o que
o Google penaliza.

**Nenhuma promessa de resultado.** O texto segue as restrições do CFMV: sem cura, sem
prazo de recuperação, sem "o melhor" e sem a palavra "especialista" como título formal.

---

## Fontes e licenças

| Ativo | Licença |
|---|---|
| Clash Display 600 | ITF Free Font License (Fontshare), uso comercial liberado |
| Geist variável | SIL Open Font License 1.1 |
| Lenis 1.3.27 | MIT |
| Ícones Phosphor 2.1.1 | MIT |
| Mapa | dados do OpenStreetMap, ODbL, com atribuição na própria imagem e no texto |
| Fotos das seções | geradas a partir de `docs/script-imagens.md` |
| Retrato do Dr. Danilo | fornecido pelo cliente |

