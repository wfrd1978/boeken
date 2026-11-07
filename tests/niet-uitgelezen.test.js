import { describe, expect, it } from 'vitest';
import { statusNaam } from '../src/db.js';
import { smaak, ordenTips } from '../src/tips.js';

const gestopt = { titel: 'X', auteurs: ['Jan Smit'], status: 'Gestopt', categorie: 'Sport', leesdata: ['2026-10-05'] };

describe('niet uitgelezen', () => {
  it('heet zo in beeld, de opslag blijft Gestopt', () => {
    expect(statusNaam('Gestopt')).toBe('Niet uitgelezen');
  });
  it('zet tips van die schrijver achteraan', () => {
    const tips = [{ id: '1', titel: 'A', auteurs: ['Jan Smit'] }, { id: '2', titel: 'B', auteurs: ['Kees'] }];
    expect(ordenTips(tips, smaak({}, [gestopt])).map((t) => t.id)).toEqual(['2', '1']);
  });
  it('laat die categorie een beetje zakken', () => {
    expect(smaak({}, [gestopt])['c:Sport']).toBe(-0.5);
  });
});
