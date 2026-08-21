/* =========================================================
   BUILD — gera a versão de produção (minificada) em /dist
   Uso: npm run build   (a Vercel executa isto automaticamente)
   ========================================================= */
const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');
const { minify: minifyJs } = require('terser');
const { minify: minifyHtml } = require('html-minifier-terser');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const item of fs.readdirSync(src)) {
      copyRecursive(path.join(src, item), path.join(dest, item));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

async function build() {
  console.log('→ Limpando /dist...');
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  console.log('→ Copiando arquivos estáticos (imagens, robots, sitemap, manifest)...');
  copyRecursive(path.join(ROOT, 'assets', 'img'), path.join(DIST, 'assets', 'img'));
  for (const file of ['robots.txt', 'sitemap.xml', 'site.webmanifest']) {
    const src = path.join(ROOT, file);
    if (fs.existsSync(src)) fs.copyFileSync(src, path.join(DIST, file));
  }

  console.log('→ Minificando CSS...');
  const cssSrc = fs.readFileSync(path.join(ROOT, 'assets', 'css', 'style.css'), 'utf8');
  const cssOut = new CleanCSS({ level: 2 }).minify(cssSrc);
  if (cssOut.errors.length) throw new Error('Erro ao minificar CSS: ' + cssOut.errors.join('; '));
  fs.mkdirSync(path.join(DIST, 'assets', 'css'), { recursive: true });
  fs.writeFileSync(path.join(DIST, 'assets', 'css', 'style.css'), cssOut.styles);

  console.log('→ Minificando JavaScript...');
  const jsSrc = fs.readFileSync(path.join(ROOT, 'assets', 'js', 'app.js'), 'utf8');
  const jsOut = await minifyJs(jsSrc, { compress: true, mangle: true, format: { comments: false } });
  if (!jsOut.code) throw new Error('Erro ao minificar JS');
  fs.mkdirSync(path.join(DIST, 'assets', 'js'), { recursive: true });
  fs.writeFileSync(path.join(DIST, 'assets', 'js', 'app.js'), jsOut.code);

  console.log('→ Minificando HTML...');
  const htmlSrc = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const htmlOut = await minifyHtml(htmlSrc, {
    collapseWhitespace: true,
    conservativeCollapse: false,
    removeComments: true,
    minifyCSS: true,
    minifyJS: true,
    removeAttributeQuotes: false,
    sortAttributes: true,
    sortClassName: false
  });
  fs.writeFileSync(path.join(DIST, 'index.html'), htmlOut);

  const sizeOf = p => (fs.statSync(p).size / 1024).toFixed(1) + ' KB';
  console.log('\n✓ Build concluído em /dist');
  console.log(`  index.html            ${sizeOf(path.join(DIST, 'index.html'))}`);
  console.log(`  assets/css/style.css  ${sizeOf(path.join(DIST, 'assets', 'css', 'style.css'))}`);
  console.log(`  assets/js/app.js      ${sizeOf(path.join(DIST, 'assets', 'js', 'app.js'))}`);
}

build().catch(err => {
  console.error('✗ Falha no build:', err);
  process.exit(1);
});
