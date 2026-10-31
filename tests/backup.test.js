import { describe, expect, it } from 'vitest';
import { schoonProfiel } from '../src/backup.js';

describe('profiel uit een backup', () => {
  it('neemt alleen keuzes over die in de backup staan', () => {
    // Een backup van de boeken-app kent de keuzes van het welkomstscherm niet:
    // dan blijven de huidige keuzes staan (die vult zetBackupTerug aan).
    expect(schoonProfiel({ naam: 'Anna', overMij: 'x', lezersprofiel: 'y' })).toEqual({ naam: 'Anna' });
  });

  it('houdt alleen geldige keuzes over', () => {
    const p = schoonProfiel({ naam: 'B', leesvormen: ['papier', 'raar'], categorieen: ['Sport', '<b>'], ereader: true, koboPlus: 'ja' });
    expect(p).toEqual({ naam: 'B', leesvormen: ['papier'], categorieen: ['Sport'], ereader: true });
  });

  it('weigert iets dat geen profiel is', () => {
    expect(schoonProfiel(null)).toBeNull();
    expect(schoonProfiel('tekst')).toBeNull();
  });
});
