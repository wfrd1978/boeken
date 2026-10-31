import { defineConfig } from 'vite';

// De app draait op https://wfrd1978.github.io/boeken/
export default defineConfig({
  base: '/boeken/',
  // SheetJS (Excel) is groot, maar wordt alleen geladen bij exporteren.
  build: { chunkSizeWarningLimit: 600 },
  // Moment van bouwen, zodat je in de app ziet welke versie je hebt.
  define: {
    __VERSIE__: JSON.stringify(
      new Date().toLocaleString('nl-NL', {
        timeZone: 'Europe/Amsterdam',
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
      })
    ),
  },
});
