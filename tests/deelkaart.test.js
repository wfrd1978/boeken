import { describe, expect, it } from 'vitest';
import { kaartZin, kaartVoet } from '../src/deelkaart.js';

describe('deelkaart', () => {
  it('neemt de eerste zin van de recensie', () => {
    expect(kaartZin('Wat een boek. Echt waar.')).toBe('Wat een boek.');
    expect(kaartZin('')).toBe('');
  });
  it('zegt onderaan wanneer gelezen of dat je het leest', () => {
    expect(kaartVoet({ status: 'Gelezen', leesdata: ['2025-03-01', '2026-10-12'] })).toBe('Gelezen in oktober 2026');
    expect(kaartVoet({ status: 'Bezig' })).toBe('Nu aan het lezen');
    expect(kaartVoet({ status: 'Gestopt' })).toBe('');
  });
});

import { eersteZin, maandNaam } from '../src/deelkaart.js';

describe('hulpjes van de deelkaart', () => {
  it('kort een lange eerste zin in', () => {
    expect(eersteZin('a'.repeat(20), 10)).toBe(`${'a'.repeat(9)}…`);
  });
  it('schrijft een maand voluit', () => {
    expect(maandNaam('2026-10')).toBe('oktober 2026');
    expect(maandNaam('2026-10', false)).toBe('oktober');
  });
});
