import { describe, expect, it } from 'vitest';
import { schoonProfiel } from '../src/backup.js';

describe('profiel uit een backup', () => {
  it('neemt alleen keuzes over die in de backup staan', () => {
    // Een backup van de boeken-app kent de keuzes van het welkomstscherm niet:
    // dan blijven de huidige keuzes staan (die vult zetBackupTerug aan).
    // Over mij en het lezersprofiel gaan wel mee.
    expect(schoonProfiel({ naam: 'Anna', overMij: 'x', lezersprofiel: 'y' })).toEqual({ naam: 'Anna', overMij: 'x', lezersprofiel: 'y' });
  });

  it('neemt statistieken en leesdoelen mee, als ze geldig zijn', () => {
    expect(schoonProfiel({ naam: 'C', statsVanaf: '2026-03', leesdoelen: { 2026: 20, x: 3 } })).toEqual({
      naam: 'C',
      statsVanaf: '2026-03',
      leesdoelen: { 2026: 20 },
    });
    expect(schoonProfiel({ naam: 'D', statsVanaf: 'maart', overMij: 5 })).toEqual({ naam: 'D' });
  });

  it('een oudere backup zonder deze velden laat ze weg (de huidige blijven dan staan)', () => {
    const p = schoonProfiel({ naam: 'E', leesvormen: ['papier'] });
    expect(Object.keys(p).sort()).toEqual(['leesvormen', 'naam']);
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
