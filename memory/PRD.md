# PRD — Site Informativo de Contabilidade

## Problema (original)
Site meramente informativo (sem login). Secções: Home, Quem Somos, Serviços (com dropdown), Blog, Recrutamento. Estilo branco com detalhes azul marinho. Versões PT/EN/ES. Hiperligações Facebook/Instagram/LinkedIn. Localização no Contacta-nos. Conteúdo: serviços de contabilidade. Responsive desktop e mobile.

## Personas
- Visitante PME / empresário a avaliar uma firma de contabilidade
- Candidato a emprego (página Recrutamento)
- Cliente atual à procura de contactos / blog

## Arquitetura
- Frontend-only (React + Tailwind + Shadcn). Backend FastAPI inalterado (hello world).
- React Router multi-página (`/`, `/quem-somos`, `/servicos`, `/blog`, `/blog/:slug`, `/recrutamento`, `/contactos`).
- i18n via Context + localStorage (`site_language`).
- Tipografia Manrope (display) + IBM Plex Sans (body).
- Paleta Navy #0A1F44 sobre fundo branco / surface #F8F9FA.

## Implementado (2026-06-30)
- Header sticky com glassmorphism, dropdown de Serviços (Shadcn), language switcher PT/EN/ES, Sheet mobile.
- Home: hero, stats, bento de 6 serviços, "porquê", últimos 3 artigos do blog, CTA navy.
- Quem Somos: hero, Missão/Visão/Valores, história, grelha de equipa.
- Serviços: 6 blocos detalhados com bullets e anchors (#general, #tax, #hr, #consulting, #audit, #startup).
- Blog: 4 artigos exemplo em PT/EN/ES (alterações fiscais, fluxo de caixa, erros IVA, digitalização).
- Detalhe de artigo + artigos relacionados.
- Recrutamento: 4 vagas + candidatura espontânea.
- Contactos: morada, telefone, email, horário, redes sociais, formulário (client-side), mapa OpenStreetMap.
- Footer azul-marinho com brand, navegação, serviços, contactos e ícones sociais.
- Todos os interativos com `data-testid`.
- Testing agent: 100% frontend pass.

## Backlog
- P1: Backend para receber submissões do formulário de contacto (FastAPI + MongoDB + email opcional via Resend).
- P1: Página CMS-lite para gerir posts do blog (admin) — ou conexão a Markdown/Strapi.
- P2: SEO: meta tags por idioma, sitemap.xml, schema.org Organization/LocalBusiness.
- P2: Substituir placeholders Reis&Reis por dados reais quando fornecidos.
- P2: Acessibilidade — adicionar `VisuallyHidden SheetTitle` no Sheet mobile (aviso Radix não bloqueante).
- P2: Lazy-load de imagens, otimização Core Web Vitals.
- P3: Calculadoras úteis (IRS, IVA) na área de recursos.

## Próximos passos
1. Substituir placeholders reais.
2. Adicionar persistência de submissões do formulário (backend + email).
3. SEO multilíngue.
