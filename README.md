# Ferragens Santa Rita — Home Center & Materiais de Construção

Plataforma estática de alto padrão (HTML + CSS + JS puro, sem dependências de framework e ultrarrápida), inspirada na arquitetura visual de grandes redes como a **Cacique Home Center**. Inclui pipeline de build para produção (minificação) e está pronta para deploy na **Vercel**.

Todas as vendas e cotações são direcionadas de forma inteligente para o **WhatsApp**, permitindo que o cliente monte um orçamento completo no site com cálculo automático de subtotais e envie a lista pronta para o time de vendas.

---

## 1. Como rodar localmente

```bash
node server.js            # abre em http://localhost:8081 (ou defina PORT=8085)
```

Também funciona abrindo o arquivo `index.html` diretamente em qualquer navegador.

---

## 2. Configurações Obrigatórias

Abra **`assets/js/app.js`** e personalize o objeto `CONFIG` no início do arquivo:

```javascript
const CONFIG = {
  // WhatsApp com DDI (55) + DDD + Número (apenas dígitos)
  whatsapp: '5500000000000',
  // Como aparece escrito na interface
  telefoneVisivel: '(00) 00000-0000',
  // Endereço físico da loja
  endereco: 'Rua das Ferragens, 500 — Centro Industrial<br>Sua Cidade / UF',
  // Nome da loja
  loja: 'Ferragens Santa Rita Home Center',
  // Horário de funcionamento
  horario: 'Seg a Sex: 07h30 às 18h | Sábado: 07h30 às 13h'
};
```

---

## 3. Gestão de Produtos e Ofertas

No arquivo **`assets/js/app.js`**, na lista `PRODUTOS`:

```javascript
{
  id: 'porta-lisa-interna',
  nome: 'Porta de Madeira Lisa Interna',
  marca: 'Santa Rita Madeiras',
  spec: 'Folha de madeira lisa padrão eucalipto curado, ideal para quartos e banheiros.',
  preco: 119.00,
  precoAntigo: 149.90,                  // opcional (mostra comparativo De/Por)
  apartir: true,                        // opcional: mostra "a partir de"
  unidade: 'und',                       // und, kit, lata, metro...
  cats: ['Ferragens', 'Portas & Telhas'],
  icone: 'ic-door',                     // ID do ícone no sprite
  selo: '-20% OFF',                     // texto da tag
  tipoSelo: 'sale',                     // sale (vermelho), hot (amarelo), tag (escuro)
  estrelas: 4.9,
  avaliacoes: 38,
  parcelas: 3
}
```

---

## 4. Recursos Implementados (Padrão Home Center)

- **Mega Header E-Commerce**: Busca com seletor de departamento, contato direto no WhatsApp e botão de orçamento com contador dinâmico e totalizador.
- **Menu de Departamentos**: Acesso rápido a Ferragens, Ferramentas, Elétrica, Hidráulica, Tintas, Portas & Telhas e Ofertas da Semana.
- **Hero Slider Interativo**: Carrossel promocional com 3 campanhas sazonais e cards laterais de ofertas relâmpago.
- **Barra de Vantagens (Trust Badges)**: 4 pilares de confiança (Entrega rápida, parcelamento em 10x, atendimento técnico e garantia de marcas líderes).
- **Vitrine Inteligente com Filtros e Ordenação**: Busca textual instantânea (com e sem acento), chips de categorias e ordenação por preço e relevância.
- **Visualização Rápida (Quick View)**: Modal para inspeção técnica e ajuste de quantidades sem sair da página.
- **Minicart Drawer (Gaveta de Orçamento)**: Controle de quantidades, exclusão, subtotal e gerador de mensagem estruturada para WhatsApp.
- **Área B2B / Construtoras**: Seção voltada para pedreiros, mestres de obras e construtoras com envio de lista de materiais em PDF.
- **Prova Social**: Módulo de depoimentos e avaliação 4.9 ★★★★★ do Google Reviews.
- **Rodapé Completo**: Departamentos, links institucionais, selos de pagamento (PIX, cartões, boleto) e informações cadastrais.
- **Animações Refinadas**: Revelação em cascata (stagger) nos grids ao rolar a página, hover com brilho e leve rotação nos cards, botões com efeito de brilho ("shine"), badge do carrinho com animação de "bump" ao adicionar item, slider com brilho ambiente animado e pausa automática ao passar o mouse. Tudo respeita `prefers-reduced-motion` para acessibilidade.
- **SEO & Compartilhamento**: Meta tags Open Graph/Twitter Card, dados estruturados (JSON-LD `HomeAndConstructionBusiness`), `sitemap.xml`, `robots.txt` e `site.webmanifest`.

---

## 5. Build de Produção & Deploy na Vercel

O site roda perfeitamente abrindo `index.html` direto (sem build), mas o repositório já inclui um pipeline opcional que minifica HTML, CSS e JS para produção.

```bash
npm install     # instala as ferramentas de build (uma vez só)
npm run build   # gera a versão otimizada em /dist
```

### Deploy na Vercel

1. Suba este repositório para o GitHub/GitLab/Bitbucket (ou use `vercel` CLI direto na pasta).
2. Na Vercel, clique em **New Project** e importe o repositório.
3. A Vercel detecta automaticamente o `vercel.json`:
   - `buildCommand`: `npm run build`
   - `outputDirectory`: `dist`
4. Clique em **Deploy**. Pronto — sem configuração manual adicional.

Também é possível publicar via CLI:

```bash
npm i -g vercel
vercel        # ambiente de preview
vercel --prod # produção
```

### ✅ Checklist antes de entregar ao cliente / colocar no ar

- [ ] Atualizar `CONFIG` em `assets/js/app.js` com WhatsApp, endereço e horário reais.
- [ ] Atualizar os mesmos dados (telefone, endereço, horário) no bloco JSON-LD em `index.html` (`<script type="application/ld+json">`).
- [ ] Trocar o domínio placeholder `https://ferragenssantarita.vercel.app/` por o domínio final em: `index.html` (canonical, og:url, og:image, twitter:image), `robots.txt` e `sitemap.xml`.
- [ ] Revisar o catálogo `PRODUTOS` em `assets/js/app.js` (preços, fotos/ícones, estoque).
- [ ] Configurar domínio próprio na Vercel, se houver (Settings → Domains).
- [ ] Testar o botão do WhatsApp e o formulário de orçamento com o número real.
