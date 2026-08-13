import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// このサイトは静的サイト生成(SSG)で出力されます。
// JavaScriptの実行なしでもAIクローラー(GPTBot/ClaudeBot/PerplexityBot等)が
// HTMLをそのまま読み取れる状態を作ることが、LLMO対策の技術的な土台になります。
export default defineConfig({
  site: 'https://aio.tipsindex.net',
  output: 'static',
  integrations: [sitemap()],
});
