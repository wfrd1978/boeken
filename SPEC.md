# SPEC — Boeken (de deelbare app)

Dezelfde techniek als de boeken-app: Vite met gewoon JavaScript, Dexie (IndexedDB), PWA,
GitHub Pages. Boekgegevens uit Open Library, Google Books en de Koninklijke Bibliotheek; schrijver
en verfilmingen uit Wikipedia en Wikidata. Alles gratis.

## Beslissingen

| Datum | Beslissing |
|-------|------------|
| 30 okt 2026 | Aparte repository `boeken`, gestart als kopie van de boeken-app, voor vrienden en familie |
| 30 okt 2026 | Eigen database, voorkeuren en opslag, zodat beide apps op hetzelfde adres elkaar niet raken |
| 30 okt 2026 | Nieuws en reeksen uit de boeken-app (algemeen); tips krijgen een eigen algemene lijst (nu nog leeg) |
| 30 okt 2026 | Backups heten `app: 'boeken'`; een backup van de boeken-app kan ook worden teruggezet |
| 30 okt 2026 | Welkomstscherm bij de eerste keer openen: naam en foto (niet verplicht), hoe je leest, e-reader en Kobo Plus, favoriete categorieën. Bewaard in het profiel (`leesvormen`, `ereader`, `koboPlus`, `categorieen`, `welkomKlaar`) en dus in de backup; wie een backup terugzet, slaat het welkomstscherm over |
| 30 okt 2026 | Opgeruimd: Excel-import, recensiehulp via Claude en statistieken eruit (code en tests). Profiel is alleen naam en foto, plus de keuzes van het welkomstscherm om te wijzigen; 'Over mij' en het lezersprofiel vallen weg (ook bij het terugzetten van een backup). Teksten in Over deze app zonder verwijzingen naar Claude. Excel-export blijft |
| 30 okt 2026 | Tips per persoon: categorieën uit het profiel tellen zwaar mee (+3). Tips van soort `koboplus` staan in een eigen rij 'Nieuw in Kobo Plus', alleen voor wie Kobo Plus heeft, met de kanttekening dat het aanbod wisselt. Kobo-onderdelen (Gedownload in Kobo, Zoek bij Kobo, Kobo-link) alleen bij een e-reader; Wacht op Kobo Plus en de Kobo-check alleen bij Kobo Plus. Eerste tiplijst: de algemene tips van week 44 uit de boeken-app plus vijf titels die A.W. Bruna als nieuw in Kobo Plus noemde |
| 30 okt 2026 | Toevoegen-pagina opnieuw opgemaakt: twee tegels naast elkaar (Scan de streepjescode, Meerdere boeken tegelijk) en één ronde zoekbalk met vergrootglas en Zoek-knop |
| 30 okt 2026 | Eigen Google-sleutel in een eigen Google Cloud-project (`boeken-gedeeld`), beperkt tot https://wfrd1978.github.io/boeken/* en de Books API: een eigen daglimiet, los van de boeken-app |
