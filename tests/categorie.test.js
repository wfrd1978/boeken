import { describe, expect, it } from 'vitest';
import { raadCategorie } from '../src/categorie.js';
import { normaliseerBoek } from '../src/db.js';

describe('categorie herkennen', () => {
  it('stelt de categorie van dezelfde schrijver voor, anders uit de onderwerpen', () => {
    const mijn = [
      { auteurs: ['David Baldacci'], categorie: 'Thriller & spanning' },
      { auteurs: ['Michel van Egmond'], categorie: 'Sport' },
    ];
    expect(raadCategorie({ auteurs: ['David Baldacci'], onderwerpen: ['History'] }, mijn)).toBe('Thriller & spanning');
    expect(raadCategorie({ auteurs: ['Onbekend'], onderwerpen: ['Biography & Autobiography'] }, mijn)).toBe('Biografie & levensverhaal');
    expect(raadCategorie({ auteurs: ['Onbekend'] }, mijn)).toBe('');
  });

  it('laat een onbekende categorie uit een backup leeg', () => {
    expect(normaliseerBoek({ titel: 'X', categorie: 'Sport' }).categorie).toBe('Sport');
    expect(normaliseerBoek({ titel: 'X', categorie: '<b>' }).categorie).toBe('');
  });
});

describe('backup controleren', () => {
  it('weigert een vreemd werk-adres en datums die niet bestaan', () => {
    const b = normaliseerBoek({ titel: 'X', werk: '.evil.com/x', leesdata: ['2025-02-31', '2025-10', '2024-02-29'] });
    expect(b.werk).toBeUndefined();
    expect(b.leesdata).toEqual(['2025-10', '2024-02-29']);
    expect(normaliseerBoek({ titel: 'X', werk: '/works/OL123W' }).werk).toBe('/works/OL123W');
  });
});
