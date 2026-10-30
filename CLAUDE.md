# CLAUDE.md — Boeken (de deelbare app)

Lees dit bestand en `SPEC.md` aan het begin van elke sessie.

## Wat dit is

Een deelbare versie van de boeken-app (repository `boeken-app`), voor vrienden en familie.
Adres: https://wfrd1978.github.io/boeken/. Gestart als kopie; de persoonlijke onderdelen van de
eigenaar zitten er niet in. Iedereen begint met een lege lijst; alle gegevens blijven op de eigen
telefoon en in de eigen backups.

## Werkafspraken

1. **Kleine stappen.** Eén stap = één zichtbaar resultaat dat de eigenaar op zijn telefoon kan testen. Begin elke stap met één zin: wat we bouwen en hoe hij het test.
2. **De eigenaar test zelf** (maximaal drie handelingen). Pas als hij zegt dat het werkt, is de stap klaar.
3. **Git-commit na elke werkende stap**, in duidelijk Nederlands.
4. **Uitleg in gewoon Nederlands**, zonder vakjargon.
5. **Data is heilig.** Nooit iets aan de opslag wijzigen zonder te waarschuwen.
6. **Spec bijhouden** in `SPEC.md`, in dezelfde commit.
7. **Geen metadata onder antwoorden.**
8. **Anoniem committen.** De repository is openbaar. Commits altijd als `boeken-app <345948944+wfrd1978@users.noreply.github.com>`. Geen namen, mailadressen of persoonlijke gegevens in de code of de bestanden.
9. Geen betaalde diensten of API-sleutels zonder expliciete toestemming.

## Samenwonen met de boeken-app

Beide apps staan op wfrd1978.github.io en delen dus dezelfde browseropslag. Daarom:

- eigen database: `boeken-gedeeld` (de boeken-app gebruikt `boeken`);
- eigen voorkeuren: alles via `src/lokaal.js` met voorvoegsel `boeken:` (nooit rechtstreeks `localStorage`);
- eigen service-worker-opslag: namen beginnen met `deel-`, en de app ruimt alleen `deel-…` op;
- nieuws en reeksen komen uit de boeken-app (`/boeken-app/nieuws.json`, `/boeken-app/reeksen.json`): die zijn algemeen, zo is er één dagelijkse taak.

## Tiplijst (`public/tips.json`)

Eén algemene lijst voor iedereen. Velden zoals in de boeken-app, met `soort`: `nieuw`, `parel` of `koboplus`.
De telefoon kiest zelf: tips uit de categorieën in het profiel vooraan, boeken die je al hebt vallen weg.
`koboplus`-tips staan in een eigen rij en alleen bij wie Kobo Plus heeft. Kobo blokkeert automatisch
controleren; neem alleen titels op die een uitgever, boekhandel of Kobo zelf als nieuw in Kobo Plus noemt,
en zet de bron in `reden`. Verzin geen samenvattingen: liever geen `synopsis` (de app haalt die zelf op).

## Stappenplan

| Stap | Resultaat om te testen |
|------|------------------------|
| 1 | ~~Kopie online op wfrd1978.github.io/boeken, naast de boeken-app~~ — getest en klaar (30 okt) |
| 2 | ~~Welkomstscherm in vier stappen: naam en foto (niet verplicht), hoe je leest, e-reader en Kobo Plus, favoriete categorieën~~ — getest en klaar (30 okt) |
| 3 | ~~Opruimen: profiel alleen naam en foto; recensiehulp, Excel-import en statistieken eruit; teksten herschreven~~ — getest en klaar (30 okt) |
| 4 | ~~Tips per persoon gekozen uit één algemene lijst, plus rij 'Nieuw in Kobo Plus'; Kobo-onderdelen alleen bij een e-reader, Kobo Plus-onderdelen alleen bij Kobo Plus~~ — getest en klaar (30 okt) |
| 5 | Eigen Google-sleutel, beperkt tot wfrd1978.github.io/boeken |
| 6 | Wekelijkse taak voor de algemene tips (`tips.json`), met proefrun |
| 7 | Delen met een proefgroep van twee of drie mensen |
