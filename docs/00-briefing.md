# Briefing - Site Dr. Danilo Smanioto (Neurologia Veterinaria)

Data: 2026-11-05 · Perfil: **S2 - negocio local (saude animal)** · Entrega: one-page + paginas de apoio

---

## 1. Negocio e objetivo

**Quem:** Dr. Danilo Smanioto, medico-veterinario, atendimento especializado em neurologia e neurocirurgia de caes e gatos em Londrina/PR.

**Objetivo primario do site:** transformar busca em contato. A acao principal e o clique no WhatsApp; a secundaria e a ligacao telefonica.

**Objetivo secundario:** aparecer no Google para buscas locais de alta intencao ("neurologista veterinario Londrina", "cachorro nao anda patas traseiras Londrina", "cirurgia de coluna cachorro Londrina") e sustentar o Perfil de Empresa que ja existe (nota 4,8 com 26 avaliacoes).

**Como medir:**
| Metrica | Onde | Meta inicial |
|---|---|---|
| Cliques em "Falar no WhatsApp" | evento no analytics + parametro na URL do wa.me | principal KPI |
| Cliques em `tel:` | evento no analytics | secundario |
| Cliques em "Como chegar" | evento no analytics | secundario |
| Posicao em "neurologista veterinario Londrina" | Search Console | top 3 em 90 dias |

---

## 2. Publico

**A. Tutor em crise aguda (prioridade maxima).** O cao acordou sem conseguir levantar, arrasta as patas, gritou de dor ao ser pego no colo, ou teve uma convulsao. Decide em minutos, no celular, assustado e muitas vezes chorando. Precisa de tres coisas na primeira tela: reconhecer que esta no lugar certo, saber que existe um especialista, e um botao para falar agora.

**B. Tutor em investigacao.** Caso arrastado: epilepsia sem controle, perda de equilibrio, cabeca inclinada, fraqueza progressiva. Ja passou por um ou mais veterinarios. Le com atencao, compara credenciais, quer entender o que acontece na consulta.

**C. Veterinario clinico geral que encaminha.** Quer confirmar formacao, area de atuacao e canal direto. Decide em 30 segundos olhando titulacao e contato.

**Dispositivo dominante:** celular. O publico A chega quase sempre por celular, em movimento. Isso dita o projeto: mobile-first de verdade, CTA visivel sem rolar, telefone e WhatsApp com um toque.

---

## 3. Oferta e diferenciais (apenas o verificavel)

Tudo abaixo vem do material enviado pelo usuario (bio, perfil do Instagram, Perfil de Empresa do Google). Nada foi acrescentado.

- Medico-veterinario graduado pela Universidade Estadual de Londrina (UEL).
- Residencia em Clinica Cirurgica de Animais de Companhia.
- Mestre em Ciencia Animal com enfase em neurologia e biomecanica da coluna vertebral de caes e gatos, tambem pela UEL.
- Membro da Associacao Brasileira de Neurologia Veterinaria (ABNV).
- Atuacao declarada: consultas e cirurgias especializadas em neurologia e neurocirurgia veterinaria.
- Nota 4,8 com 26 avaliacoes no Perfil de Empresa do Google.
- Atendimento em Av. Santos Dumont, 1211, Jardim Boa Vista, Londrina/PR, CEP 86039-090.

**Posicionamento em uma frase:** em Londrina, um veterinario que faz da coluna e do sistema nervoso de caes e gatos a sua unica especialidade, com mestrado na area e residencia em cirurgia.

**O que NAO entra no site:** promessa de cura, "o melhor", "o unico", percentual de sucesso, tempo de recuperacao garantido, numero de cirurgias realizadas, anos de experiencia. Nada disso foi informado e nada disso pode ser estimado.

---

## 4. Mapa de secoes (ordem narrativa)

| # | Secao | Trabalho que ela faz |
|---|---|---|
| 1 | Cabecalho flutuante | navegacao curta + WhatsApp sempre a um toque |
| 2 | Hero | reconhecimento imediato do problema + especialista + acao |
| 3 | Faixa de credibilidade | nota real do Google, ABNV, UEL |
| 4 | Sinais de alerta | o tutor se reconhece no sintoma do pet |
| 5 | Atendimento | o que e feito na consulta e na cirurgia |
| 6 | Sobre o Dr. Danilo | formacao em texto corrido + retrato real |
| 7 | Como e a consulta | reduz medo do desconhecido, em 4 passos |
| 8 | Depoimentos | prova social real, vinda do Google |
| 9 | Perguntas frequentes | derruba objecao de preco, encaminhamento, exame, urgencia |
| 10 | Contato e localizacao | NAP, horario, rota, WhatsApp, telefone |
| 11 | Rodape escuro com CTA final | ultima chance de contato + dados legais |

---

## 5. Ativos existentes

| Ativo | Situacao |
|---|---|
| Retrato do Dr. Danilo | **existe**, porem em baixa resolucao (295x290 px). Serve como retrato pequeno e circular, nao como imagem de hero. Pedir o arquivo original. |
| Logo | **nao existe**. Sera criado um monograma tipografico "DS" (marca minima, sem ilustracao). |
| Fotos do consultorio / equipamentos | **nao existem**. Entram pelo `script-imagens.md`. |
| Depoimentos | existem, publicos, no Google. Serao citados com primeiro nome e sobrenome ja publicos, sem foto. |
| Dominio | **nao informado**. |
| Instagram | @danilosmaniotovet |

---

## 6. Dados obrigatorios

**Confirmados:**
- Nome: Danilo Smanioto
- Endereco: Av. Santos Dumont, 1211, Jardim Boa Vista, Londrina/PR, 86039-090
- Celular/WhatsApp: (43) 99934-6705
- Telefone fixo: (43) 3351-8889
- E-mail: daniloneurosmanioto@gmail.com
- Instagram: @danilosmaniotovet
- Plus Code: MVG4+RX Londrina
- Nome no Google: Danilo Smanioto Neurologia Veterinaria

**Pendentes (nao serao inventados):**

| # | Dado | Por que importa | Tratamento ate a confirmacao |
|---|---|---|---|
| P1 | **Numero do CRMV-PR** | A Resolucao CFMV 1071/2014 exige o registro profissional em qualquer publicidade. Sem ele o site nao pode ir ao ar. | Campo unico em `js/config.js`. No demo aparece a titulacao sem o numero; o numero entra em um lugar so. |
| P2 | Horario completo da semana | JSON-LD `openingHoursSpecification` e a secao de contato | O Google mostra apenas "Fecha 19:00". Premissa declarada: seg a sex, 8h as 19h. **Confirmar antes de publicar.** |
| P3 | Dominio final | canonical, Open Graph, sitemap, robots, JSON-LD | Premissa: `danilosmaniotovet.com.br`. Trocavel com um `sed` em todos os arquivos. |
| P4 | Quais exames sao feitos na propria estrutura | evita prometer ressonancia, mielografia ou coleta de liquor que talvez sejam feitos fora | Os textos falam em "solicitacao e interpretacao de exames de imagem", sem afirmar onde sao realizados. |
| P5 | Se atende urgencia fora do horario | publico A chega em crise | O site nao promete urgencia 24h. Diz que casos agudos tem prioridade no mesmo dia, sujeito a confirmacao. |
| P6 | CNPJ ou se atende como pessoa fisica | rodape e LGPD | Fora do rodape ate a confirmacao. |

---

## 7. Restricoes do setor

Publicidade de medico-veterinario no Brasil segue o Codigo de Etica e as resolucoes do CFMV. Regras aplicadas ao texto:

- Proibido prometer resultado, cura ou percentual de sucesso.
- Proibido se declarar "o melhor", "o unico", "referencia" ou "lider".
- Proibido sensacionalismo e antes-e-depois de procedimento.
- Proibido concorrencia desleal, sorteio, promocao e preco como chamariz.
- Obrigatorio identificar o profissional responsavel e o registro no CRMV.
- Especialidade so pode ser anunciada como especialidade se houver titulo reconhecido. **Por isso o site diz "atuacao em neurologia e neurocirurgia" e descreve a titulacao real (residencia, mestrado, ABNV), sem usar a palavra "especialista" como titulo formal.**

Recomendacao ao cliente: submeter o texto final ao CRMV-PR em caso de duvida.

---

## 8. Premissas declaradas

1. Dominio `danilosmaniotovet.com.br` (P3).
2. Horario seg a sex, 8h as 19h (P2).
3. Os tres depoimentos sao reproduzidos do Perfil de Empresa do Google, encurtados sem alterar o sentido, com o nome ja publico do autor e a origem citada.
4. O retrato de baixa resolucao sera usado apenas em tamanho pequeno ate chegar o original.
5. Nao ha Google Analytics nem pixel na entrega inicial. Se o cliente quiser, entra Cloudflare Web Analytics (sem cookie, sem banner).

---

## Gate 1

- [x] Objetivo mensuravel definido
- [x] Publico definido em tres perfis
- [x] Mapa de secoes fechado (11 blocos)
- [x] Nenhum dado critico inventado (seis pendencias registradas, nenhuma preenchida por conta propria)
