// Kleine voorkeuren (sortering, tab, laatste backup…) in de browser.
// Deze app staat op hetzelfde adres als de boeken-app (wfrd1978.github.io). Een eigen voorvoegsel
// voorkomt dat de twee apps elkaars voorkeuren lezen of overschrijven.
const VOORVOEGSEL = 'boeken:';

export const lokaal = {
  getItem: (k) => localStorage.getItem(VOORVOEGSEL + k),
  setItem: (k, v) => localStorage.setItem(VOORVOEGSEL + k, v),
  removeItem: (k) => localStorage.removeItem(VOORVOEGSEL + k),
};
