# VorinWeb — Landing Page v2

Landing page de conversão para a VorinWeb, agência de sites para negócios locais.

## Arquivos

| Arquivo | Descrição |
|---|---|
| `index_2.html` | Estrutura HTML da página |
| `style_2.css` | Todos os estilos (temas, componentes, responsivo) |
| `script_2.js` | JavaScript: tema, FAQ, modais de demo, formulário |

## Seções

1. **Nav** — logo, links de âncora, toggle de tema claro/escuro, CTA WhatsApp
2. **Hero** — tag de disponibilidade, headline, sub, 2 CTAs, prova social (50+ negócios / 10 dias / <1h), mockup flutuante
3. **Segmentos** — chips dos 6 segmentos atendidos
4. **Como funciona** — 3 cards numerados (conversa → aprovação → ar)
5. **Modelos** — 4 cards com preview interativo + demo modal (restaurante, clínica, chatbot, loja) e 1 card personalizado
6. **Depoimentos** — 3 cards com avaliação 5 estrelas
7. **Planos** — 3 cards de preço (Essencial R$99,90 / Profissional R$149,90 / Premium R$300)
8. **FAQ** — 5 itens em acordeão
9. **CTA final** — seção azul de fechamento
10. **Contato** — info + formulário que abre WhatsApp
11. **Footer**
12. **Modal** — demos interativos por segmento

## Tecnologia

- HTML5 semântico
- CSS puro com custom properties (variáveis de tema)
- JavaScript vanilla (sem dependências)
- Fontes: [Sora](https://fonts.google.com/specimen/Sora) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) via Google Fonts

## Tema claro/escuro

O tema é salvo em `localStorage` com a chave `vw-theme` (`'light'` | `'dark'`).  
Um IIFE no `<head>` aplica o tema antes do primeiro render para evitar flash.

## Como usar

1. Abra `index_2.html` diretamente no navegador, ou
2. Suba os 3 arquivos (`index_2.html`, `style_2.css`, `script_2.js`) para qualquer hospedagem estática

Não há dependência de build, bundler ou servidor backend.

## Personalização

- Substitua `5500000000000` pelo número real do WhatsApp em todos os links `wa.me`
- Troque `contato@vorinweb.com.br` pelo e-mail real
- Ajuste textos, preços e depoimentos conforme necessário
- As cores principais ficam nas variáveis `--b500`, `--b600`, `--b700` em `style_2.css`
