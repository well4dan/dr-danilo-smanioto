# Script de Imagens - Site Dr. Danilo Smanioto (Neurologia Veterinaria)

Cole um prompt por vez no gerador de sua preferencia (Nano Banana / Gemini, Imagen, Midjourney, Flux). Gere na ordem. Depois siga a pos-producao no fim do arquivo.

**Regra que vale para todas:** nenhuma imagem pode ter texto, marca ou logotipo. A unica excecao e a IMG-OG, e mesmo nela o texto entra na edicao, nao no gerador.

---

## Biblia visual (aplicar em todos os prompts)

- **Paleta:** `#F2F3F2` bone frio, `#E6E9E7` cinza-prata, `#11574F` teal profundo, `#0B1013` grafite quase preto. Teal aparece so em detalhes pequenos (um campo cirurgico, um colete, uma parede ao fundo), nunca banhando a cena.
- **Luz:** luz natural de janela grande, difusa, inicio da tarde. Sombras suaves e longas. Nada de flash duro.
- **Camera e lente:** full-frame, 50 mm ou 85 mm, f/2.0, profundidade de campo rasa, foco preciso no sujeito.
- **Textura e estilo:** fotografia editorial de verdade. Pelo com fio visivel, pele com poro, superficie com micro-reflexo. Gra de filme muito leve.
- **Clima:** calmo, cuidadoso, tecnico. Um ambiente onde alguem resolve um problema serio sem alarde. Nunca fofo, nunca dramatico, nunca triste demais.
- **Animais:** caes e gatos comuns no Brasil. Dachshund, pinscher, shih tzu, lhasa apso, beagle, SRD de porte medio, gato sem raca definida. Pelagens reais, nenhum animal de catalogo.
- **Pessoas:** maos e tronco apenas, sem rosto reconhecivel, jaleco branco limpo, pele brasileira. **Nunca gere o rosto de um profissional.** O unico rosto do site e a foto real do Dr. Danilo.
- **Evitar sempre:** `text, watermark, logo, signage, extra fingers, deformed paws, plastic skin, waxy skin, oversaturated colors, purple and blue gradient, teal and orange grade, HDR look, stock photo smile, blood, wounds, surgical incision, distressed animal, cage, clutter, fisheye, heavy vignette`

---

## Imagens

### IMG-01 - Hero (desktop)

- Arquivo: `img/hero-desktop.webp` (exportar tambem 1920 e 1280 de largura)
- Secao e uso: hero, imagem a direita do titulo
- Proporcao: 16:9 · 2400x1350 · **espaco livre na metade ESQUERDA**
- Alt (pt-BR): Caozinho dachshund deitado sobre uma mesa de exame, com a mao de um veterinario apoiando o dorso.
- Peso alvo: <= 250 KB

**Prompt (EN)**
```text
Editorial veterinary photograph. A small smooth-haired dachshund lies calmly on a clean light grey examination table, body in profile, head turned slightly toward the camera, eyes alert and relaxed. A veterinarian's hands in a crisp white coat rest gently along the dog's spine, one hand supporting the lower back. Only hands and forearms visible, no face. Background is a softly out-of-focus consulting room in cool bone grey, with a deep teal cabinet far right. Large diffused window light from the left, early afternoon, soft long shadows. Shot on a full-frame camera, 85mm lens, f/2.0, shallow depth of field, sharp focus on the dog's head and the supporting hand. True-to-life fur texture, individual hairs visible, realistic skin pores on the hands, very light film grain. Composition leaves the entire left half of the frame as empty calm surface for text. Calm, careful, technical mood. Photorealistic, editorial, natural color.
```

**Negativo**
```text
text, watermark, logo, signage, human face, extra fingers, deformed paws, plastic skin, oversaturated colors, purple blue gradient, teal orange grade, HDR, stock photo smile, blood, wound, distressed animal, cage, clutter, fisheye
```

---

### IMG-02 - Hero (mobile)

- Arquivo: `img/hero-mobile.webp`
- Proporcao: 4:5 · 1080x1350 · **espaco livre na parte SUPERIOR**
- Alt (pt-BR): mesmo alt da IMG-01
- Peso alvo: <= 160 KB

**Prompt (EN)**
```text
Same scene and same dog as the previous image, reframed vertically. Editorial veterinary photograph, 4:5 portrait crop. The smooth-haired dachshund lies calmly on a light grey examination table in the lower two thirds of the frame, veterinarian's hands in a white coat resting along its back, no face visible. The upper third of the frame is quiet empty wall in cool bone grey, reserved for text. Diffused window light from the left, soft shadows. Full-frame camera, 85mm, f/2.0, shallow depth of field. True-to-life fur and skin texture, light film grain. Photorealistic, editorial, natural color.
```

**Negativo**
```text
text, watermark, logo, human face, extra fingers, deformed paws, plastic skin, oversaturated colors, purple blue gradient, HDR, blood, wound, distressed animal, cage, clutter
```

---

### IMG-03 - Card: consulta neurologica

- Arquivo: `img/atend-consulta.webp` · 4:3 · 1600x1200 · <= 150 KB
- Secao e uso: bento de atendimento, celula grande
- Alt (pt-BR): Mao de veterinario testando o reflexo da pata traseira de um cao de pequeno porte.

**Prompt (EN)**
```text
Close editorial photograph of a neurological examination. A veterinarian's gloved-free hand, white coat sleeve, gently lifts and flexes the hind paw of a small short-haired dog lying on its side on a padded light grey table. A slim reflex hammer rests on the table beside the paw. Only the hand and forearm are in frame. Soft diffused window light from the upper left, cool bone grey surroundings, deep teal towel folded under the dog. Full-frame camera, 85mm macro, f/2.2, very shallow depth of field, sharp focus on the paw and fingertips. Realistic paw pad texture, visible fur, natural skin tone on the hand, light film grain. Quiet, precise, clinical mood. Photorealistic, editorial, natural color.
```

**Negativo**
```text
text, watermark, logo, human face, extra fingers, deformed paw, plastic skin, oversaturated colors, purple blue gradient, HDR, blood, wound, needle, syringe, distressed animal, clutter
```

---

### IMG-04 - Card: cirurgia de coluna

- Arquivo: `img/atend-cirurgia.webp` · 3:2 · 1800x1200 · <= 150 KB
- Secao e uso: bento de atendimento, celula media
- Alt (pt-BR): Microscopio cirurgico e instrumental alinhado sobre campo esteril em sala de cirurgia.

**Prompt (EN)**
```text
Editorial photograph of an empty, immaculate veterinary surgical suite prepared for a spinal procedure. A surgical microscope arm arcs in from the right, its lens catching a cold highlight. On the left, a deep teal sterile drape covers a small instrument table, with fine stainless micro-surgical instruments laid out in a precise row. No people, no patient, no blood. Cool bone grey walls softly out of focus, one overhead surgical light switched off. Diffused daylight mixed with neutral white room light, calm and even. Full-frame camera, 50mm, f/2.5, shallow depth of field, sharp focus on the instruments. Realistic metal reflections, fabric weave visible in the drape, light film grain. Precise, serious, hospital-grade mood. Photorealistic, editorial, natural color.
```

**Negativo**
```text
text, watermark, logo, people, animals, blood, wound, incision, gore, oversaturated colors, purple blue gradient, teal orange grade, HDR, cluttered equipment, dirty surfaces
```

---

### IMG-05 - Retrato do Dr. Danilo

> **Nao gere esta imagem.** Retrato de pessoa real nao pode ser sintetizado. Use a foto que o proprio Dr. Danilo enviar, de preferencia uma nova, feita com estas instrucoes para o fotografo.

- Arquivos: `img/danilo-retrato.webp` (1:1, 800x800, <= 90 KB) e `img/danilo-sobre.webp` (4:5, 1200x1500, <= 180 KB)
- Alt (pt-BR): Dr. Danilo Smanioto, medico-veterinario, de jaleco branco.

**Instrucoes para a foto real**
```text
Retrato em luz natural de janela grande, lateral suave, inicio da tarde.
Fundo de parede lisa em cinza-prata ou bone, sem objetos.
Jaleco branco limpo, sem logotipo de terceiros.
Enquadramento: um corte 1:1 do rosto e ombros, e um corte 4:5 da cintura para cima.
Expressao serena e atenta, sem sorriso de catalogo, olhando para a camera.
85 mm, f/2.0, foco nos olhos. Sem filtro, sem suavizacao de pele.
Entregar o arquivo original, com pelo menos 2000 px no lado maior.
```

---

### IMG-06 - Card: recuperacao e acompanhamento

- Arquivo: `img/atend-reabilitacao.webp` · 4:3 · 1600x1200 · <= 150 KB
- Secao e uso: bento de atendimento, celula media
- Alt (pt-BR): Cao de pequeno porte apoiado em um tapete antiderrapante, com a mao de um veterinario sustentando o quadril.

**Prompt (EN)**
```text
Editorial photograph of post-operative support for a small dog. A short-haired dog of mixed breed stands on a thick non-slip mat in soft bone grey, hind legs slightly unsteady. A veterinarian's hands in a white coat support the dog's hips from behind with a folded deep teal sling, helping it hold the position. Only hands and forearms in frame, no face. Background is a quiet rehabilitation room, softly out of focus. Large diffused window light from the right, warm soft shadows. Full-frame camera, 85mm, f/2.0, shallow depth of field, sharp focus on the dog's eye and the supporting hands. True-to-life fur texture, realistic skin on the hands, light film grain. Hopeful, patient, careful mood. Photorealistic, editorial, natural color.
```

**Negativo**
```text
text, watermark, logo, human face, extra fingers, deformed paws, plastic skin, wheelchair cliche, oversaturated colors, purple blue gradient, HDR, sad pitiful expression, blood, wound, cage, clutter
```

---

### IMG-07 - Neurologia felina

- Arquivo: `img/gato-exame.webp` · 3:2 · 1800x1200 · <= 150 KB
- Secao e uso: faixa dentro de "Sinais de alerta", reforca que o atendimento inclui gatos
- Alt (pt-BR): Gato sem raca definida sentado sobre mesa de exame, atento, com a mao de um veterinario ao lado.

**Prompt (EN)**
```text
Editorial veterinary photograph. A short-haired domestic cat with grey and white coat sits upright and alert on a light grey examination table, head tilted very slightly, pupils normal and calm. A veterinarian's hand in a white coat sleeve rests flat on the table beside the cat, not touching it, giving the animal space. No face visible. Background is a softly blurred consulting room in cool bone grey. Diffused window light from the left, gentle shadows. Full-frame camera, 85mm, f/2.0, shallow depth of field, sharp focus on the cat's eyes and whiskers. True-to-life fur, visible whisker detail, light film grain. Calm, respectful, observant mood. Photorealistic, editorial, natural color.
```

**Negativo**
```text
text, watermark, logo, human face, extra fingers, plastic fur, oversaturated colors, purple blue gradient, HDR, frightened cat, hissing, restraint, cage, clutter
```

---

### IMG-08 - Sinais de alerta (abertura da secao)

- Arquivo: `img/sinais-abertura.webp` · 21:9 · 2400x1030 · <= 200 KB
- Secao e uso: faixa larga acima dos cards de sintoma
- Alt (pt-BR): Cao dachshund deitado em um tapete claro, com as patas traseiras estendidas para tras.

**Prompt (EN)**
```text
Wide editorial photograph, cinematic 21:9 framing. A long-bodied dachshund lies on a pale bone grey rug in a quiet, bright living room, front legs tucked, hind legs stretched behind, head raised and looking off to the left. The pose reads as resting rather than suffering. Lots of clean empty floor on both sides of the dog. Large diffused window light from the left, soft long shadow across the floor, early afternoon. Full-frame camera, 50mm, f/2.2, shallow depth of field, sharp focus on the dog's head. True-to-life fur texture, realistic rug weave, light film grain. Quiet, watchful, slightly concerned mood without drama. Photorealistic, editorial, natural color.
```

**Negativo**
```text
text, watermark, logo, people, extra paws, deformed legs, plastic fur, oversaturated colors, purple blue gradient, HDR, pitiful crying expression, blood, wound, veterinary clinic setting, clutter
```

---

### IMG-09 - Ambiente do consultorio

- Arquivo: `img/consultorio.webp` · 3:2 · 1800x1200 · <= 150 KB
- Secao e uso: secao de contato e localizacao, ao lado do mapa
- Alt (pt-BR): Sala de consulta veterinaria vazia, com mesa de exame clara e luz de janela.

**Prompt (EN)**
```text
Editorial interior photograph of an empty, tidy veterinary consulting room. A clean light grey examination table sits at the center-left, a low deep teal cabinet along the back wall, a small stack of folded towels, and a wall-mounted light arm. Bone grey walls, pale concrete-look floor, no signage, no posters, no logos. Large diffused window light from the right, soft shadows falling across the floor, early afternoon. Full-frame camera, 35mm, f/2.8, slight shallow depth of field, sharp focus on the examination table. Realistic material texture on walls and floor, light film grain. Calm, clean, professional mood. Photorealistic, editorial, natural color, no people, no animals.
```

**Negativo**
```text
text, watermark, logo, signage, posters, people, animals, oversaturated colors, purple blue gradient, HDR, cluttered shelves, medical waste, wide angle distortion, fisheye
```

---

### IMG-404 - Pagina nao encontrada

- Arquivo: `img/404.webp` · 1:1 · 1200x1200 · <= 120 KB
- Alt (pt-BR): Cao de pequeno porte olhando para o lado, sentado sobre piso claro.

**Prompt (EN)**
```text
Square editorial photograph. A small short-haired dog sits alone on a pale bone grey floor, head turned to look over its shoulder toward empty space on the right, ears slightly up, curious rather than sad. Plain cool grey wall behind, nothing else in frame. Large diffused window light from the left, soft shadow. Full-frame camera, 50mm, f/2.2, shallow depth of field, sharp focus on the eye. True-to-life fur texture, light film grain. Quiet, slightly puzzled mood. Photorealistic, editorial, natural color.
```

**Negativo**
```text
text, watermark, logo, people, extra paws, plastic fur, oversaturated colors, purple blue gradient, HDR, sad crying expression, clutter
```

---

### IMG-OG - Imagem de preview (WhatsApp, redes e buscadores)

- Arquivo: `og-image.jpg` · 1200x630 · <= 300 KB
- Composicao: a imagem gerada e o **fundo**. O nome, a titulacao e o monograma entram depois, na edicao, ocupando o terco esquerdo. Deixe esse terco limpo.
- Alt (pt-BR): Dr. Danilo Smanioto, neurologia e neurocirurgia veterinaria em Londrina.

**Prompt (EN)**
```text
Wide editorial background photograph, 1200x630 proportion. On the right third, a small smooth-haired dachshund lies calmly on a light grey examination table, seen from the side, softly lit. The left two thirds of the frame are a clean, almost empty wall in cool bone grey with a gentle light gradient, completely free of objects, reserved for typography. Large diffused window light from the right, soft shadows. Full-frame camera, 85mm, f/2.0, shallow depth of field. Subtle film grain, realistic fur and wall texture. Calm, premium, clinical mood. Photorealistic, editorial, natural color.
```

**Negativo**
```text
text, letters, numbers, watermark, logo, people, human face, oversaturated colors, purple blue gradient, HDR, busy background, clutter
```

---

## Pos-producao

1. Remover metadados: `exiftool -all= img/*.jpg img/*.png`
2. Recortar exatamente nas proporcoes indicadas. Nao deixe o gerador decidir o corte.
3. Converter e comprimir:
   ```bash
   npx @squoosh/cli --avif '{"cqLevel":32}' --webp '{"quality":76}' -d img/ img/*.jpg
   ```
   ou, com sharp: `npx sharp-cli -i img/foto.jpg -o img/foto.webp --format webp --quality 76`
4. Conferir o peso alvo de cada arquivo. Se passar, baixe a qualidade antes de baixar a resolucao.
5. Salvar com o **nome exato** listado em cada item. O HTML ja aponta para esses nomes, entao sobrescrever o arquivo e tudo que precisa ser feito.
6. Conferir cada `alt` no HTML depois da troca: se a imagem mudou de conteudo, o alt muda junto.
