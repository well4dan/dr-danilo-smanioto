# Script de Video - Google Flow - Site Dr. Danilo Smanioto

> **Nao entra na primeira rodada do site.** Este arquivo fica pronto para quando o Dr. Danilo quiser um hero em video ou um clipe para o Instagram. Confirme na interface atual do Flow (labs.google/flow) os nomes dos modos, a duracao por clipe e os modelos Veo disponiveis antes de rodar.

## Objetivo

- **Uso:** loop de fundo no hero do site (desktop) e versao vertical para Reels.
- **Duracao final:** 10 s em loop · **Loop:** sim, perfeito · **Audio:** nao.
- **Formatos:** 16:9 (2400x1350, para o site) e 9:16 (1080x1920, para redes).
- **Peso alvo no site:** <= 3 MB em MP4 + WebM, com poster obrigatorio.

## Biblia visual

A mesma do `script-imagens.md`, mais estas regras de movimento:

- Um movimento principal por clipe. Movimento lento parece mais caro.
- Mesma luz e mesmo horario em todas as cenas: janela grande a esquerda, inicio da tarde.
- Nenhum rosto humano. Apenas maos, antebracos e jaleco branco.
- Nenhum corte brusco. As cenas se encadeiam por continuidade de quadro.
- O animal nunca aparece em sofrimento. Calma e o tom.

## Imagens necessarias (gerar ANTES e subir no Flow)

### VF-01 - Frame inicial da cena 1 (e frame final da cena 3, para fechar o loop)

- Proporcao: 16:9 · Arquivo: `flow/vf-01.png`

```text
Editorial veterinary photograph, 16:9. A smooth-haired dachshund lies calmly on a clean light grey examination table in the right half of the frame, body in profile, head resting, eyes open and relaxed. The left half is quiet empty wall in cool bone grey. Large diffused window light from the left, early afternoon, soft long shadows. Full-frame camera, 85mm, f/2.0, shallow depth of field, sharp focus on the dog's head. True-to-life fur texture, light film grain. Calm, careful mood. Photorealistic, editorial, natural color. No text, no logo, no human face.
```

### VF-02 - Frame final da cena 1 e inicial da cena 2

- Proporcao: 16:9 · Arquivo: `flow/vf-02.png`

```text
Same room, same light, same dachshund as the previous frame, now framed closer. A veterinarian's hands in a white coat have entered from the right and rest gently along the dog's spine, one hand supporting the lower back. Only hands and forearms visible, no face. The dog's head is in sharp focus on the left third. Cool bone grey background softly out of focus, a deep teal cabinet suggested far right. Diffused window light from the left. Full-frame camera, 85mm, f/2.0, shallow depth of field. Realistic skin pores on the hands, individual hairs in the fur, light film grain. Photorealistic, editorial, natural color. No text, no logo, no human face.
```

### VF-03 - Frame final da cena 2 e inicial da cena 3

- Proporcao: 16:9 · Arquivo: `flow/vf-03.png`

```text
Macro editorial photograph, 16:9. Extreme close-up of a veterinarian's fingertips gently flexing the hind paw of the same short-haired dog, testing a reflex. A slim stainless reflex hammer lies on the light grey table at the edge of frame. Cool bone grey surroundings heavily out of focus, deep teal towel folded beneath the paw. Diffused window light from the upper left. Full-frame camera, 85mm macro, f/2.2, very shallow depth of field, sharp focus on the paw pads and fingertips. Realistic paw pad texture, visible fur, light film grain. Photorealistic, editorial, natural color. No text, no logo, no human face.
```

### VF-04 - Ingrediente: o ambiente

- Proporcao: 16:9 · Arquivo: `flow/vf-04.png`
- Serve como referencia de cenario para manter a sala igual em todas as cenas.

```text
Editorial interior photograph, 16:9. An empty, tidy veterinary consulting room. Clean light grey examination table center-left, low deep teal cabinet along the back wall, folded towels, a wall-mounted light arm. Bone grey walls, pale concrete-look floor, no signage, no posters, no logos. Large diffused window light from the left, soft shadows across the floor. Full-frame camera, 35mm, f/2.8, sharp focus on the table. Realistic wall and floor texture, light film grain. Photorealistic, editorial, natural color. No people, no animals, no text.
```

## Cenas

### Cena 1 - O animal em repouso (aprox. 8 s)

- **Modo no Flow:** Frames para video (VF-01 como inicial, VF-02 como final)
- **Imagens usadas:** VF-01, VF-02 · ingrediente de cenario: VF-04
- **Transicao:** continua direto no quadro do VF-02

**Prompt (EN)**
```text
A smooth-haired dachshund rests calmly on a light grey veterinary examination table. The dog breathes slowly, blinks once, and shifts its head a few millimetres. A veterinarian's hands in a white coat enter softly from the right and settle along the dog's back. Camera: very slow cinematic dolly-in, 85mm, shallow depth of field, almost imperceptible push. Lighting: large diffused window light from the left, early afternoon, soft long shadows, constant throughout. Pace: calm, unhurried. Style: premium commercial, photoreal, natural color, subtle film grain.
```

**Negativo**
```text
no text, no logo, no human face, no distortion, no sudden cuts, no extra limbs, no morphing fur, no camera shake, no zoom punch, no color shift, no music cue, no additional people, no animals entering frame
```

### Cena 2 - As maos (aprox. 8 s)

- **Modo no Flow:** Frames para video (VF-02 como inicial, VF-03 como final)
- **Imagens usadas:** VF-02, VF-03
- **Transicao:** a camera desce em direcao a pata, fechando no quadro do VF-03

**Prompt (EN)**
```text
Close shot of a veterinarian's hands in a white coat resting along a small dog's spine. The fingers move slowly and deliberately down the back, pausing, then reaching toward the hind leg. The dog stays calm and still. Camera: slow smooth tilt down following the hands, 85mm, shallow depth of field, focus transfers from the spine to the hind paw. Lighting: same diffused window light from the left, unchanged. Pace: deliberate, gentle. Style: premium commercial, photoreal, natural color, subtle film grain.
```

**Negativo**
```text
no text, no logo, no human face, no distortion, no sudden cuts, no extra fingers, no deformed paws, no camera shake, no rack focus snap, no color shift, no additional people
```

### Cena 3 - Volta ao repouso (aprox. 8 s, fecha o loop)

- **Modo no Flow:** Frames para video (VF-03 como inicial, **VF-01 como final**)
- **Imagens usadas:** VF-03, VF-01
- **Transicao:** termina exatamente no quadro do VF-01, o mesmo que abre a cena 1. E isso que fecha o loop.

**Prompt (EN)**
```text
Extreme close-up of fingertips gently releasing a dog's hind paw. The hands withdraw slowly out of frame to the right and the camera pulls back to reveal the whole dog resting calmly on the light grey examination table, exactly as at the start. Camera: slow smooth dolly-out, 85mm, shallow depth of field, ending on a wide calm composition with the left half of the frame empty. Lighting: same diffused window light from the left, unchanged. Pace: calm, resolving. Style: premium commercial, photoreal, natural color, subtle film grain.
```

**Negativo**
```text
no text, no logo, no human face, no distortion, no sudden cuts, no extra limbs, no camera shake, no color shift, no new objects in frame, no additional people
```

## Loop perfeito

A cena 3 termina no mesmo quadro em que a cena 1 comeca, porque as duas usam o `VF-01`. Na edicao, sobreponha 12 quadros de dissolucao cruzada entre o fim da cena 3 e o inicio da cena 1 para apagar qualquer diferenca de ruido entre os clipes.

## Versao vertical (Reels)

Regere as tres cenas em 9:16 a partir de recortes verticais dos mesmos frames (`flow/vf-01-vert.png` e assim por diante), mantendo o espaco livre na parte superior. Nao reaproveite o 16:9 cortado: o movimento de camera fica errado.

## Pos-producao

1. Juntar as tres cenas e cortar para 10 s no total.
2. Ajustar a cor para a paleta do site: bone frio nos claros, teal profundo nos realces, sem virada quente.
3. Remover a faixa de audio por completo.
4. Exportar:
   ```bash
   ffmpeg -i hero.mov -vcodec libx264 -crf 26 -preset slow -an -movflags +faststart -vf scale=1600:-2 video/hero.mp4
   ffmpeg -i hero.mov -c:v libvpx-vp9 -crf 34 -b:v 0 -an -vf scale=1600:-2 video/hero.webm
   ```
5. Conferir o peso: alvo <= 3 MB no MP4. Se passar, suba o `crf` antes de baixar a resolucao.
6. Gerar o poster do primeiro quadro e salvar como `img/hero-poster.webp`. O poster e obrigatorio e precisa estar no `preload`.
7. No celular, servir apenas o poster. Video de fundo em 4G nao compensa o peso.
8. No HTML, o video entra com `muted playsinline loop preload="none"`, so comeca quando entra na tela via `IntersectionObserver`, para em `prefers-reduced-motion: reduce` e tem botao de pausa visivel.
