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
| 30 okt 2026 | Verzoeken aan Google sturen het volledige adres van de app mee (referrerPolicy), anders stuurt de browser alleen het domein en weigert de sleutel (beperkt tot /boeken/*) alles |
| 30 okt 2026 | Google-zoeken bij een storing (503) tot drie keer proberen; pas daarna tien minuten pauze (was een half uur na één storing). De synopsis zoekt op de hoofdtitel zonder ondertitel |
| 30 okt 2026 | Covers die alleen een internetadres hebben, legt de app vanzelf als plaatje vast (na covers en synopsis, één poging per boek en cover-adres). De knop daarvoor in Instellingen is weg |
| 30 okt 2026 | Safari stuurt naar Google altijd alleen het domein mee; de sleutel wordt daarom beperkt tot https://wfrd1978.github.io/* (eigen project, dus nog steeds een eigen daglimiet). Mislukte tip-covers van de eerste dagen worden vergeten (nieuwe naam tipCovers2) |
| 31 okt 2026 | Nieuwe Google-sleutel in een nieuw project `boeken-gedeeld`, beperkt tot https://wfrd1978.github.io/* en de Books API (de vorige sleutel stond beperkt tot /boeken/* en werkte daardoor niet in Safari) |
| 31 okt 2026 | Controle en onderhoud na onafhankelijke review: dezelfde verbeteringen als in de boeken-app, plus: een backup terugzetten behoudt de keuzes van het welkomstscherm die niet in de backup staan; backup- en Excel-bestanden heten mijn-boeken-… (botsen niet met de boeken-app); Google op de achtergrond hooguit 150 vragen per telefoon per dag (de daglimiet geldt voor alle gebruikers samen); Kobo-labels, de Kobo-link bij delen en een oude Toon-keuze alleen bij een e-reader of Kobo Plus; de naam op het welkomstscherm blijft bewaard bij wegklikken; opmerkingen over Excel-import en Claude weg; tests voor het profiel uit een backup en delen zonder Kobo |
| 31 okt 2026 | Zelfde naam en icoon als de boeken-app blijft zo (keuze van de eigenaar) |
| 31 okt 2026 | Wekelijkse taak 'Wekelijkse tips app Boeken' (zaterdag 07:12): elke week een algemene tiplijst van ongeveer 24 tips, 3 per categorie (2 nieuw, 1 parel), plus Kobo Plus-tips met bron; breed gekozen, geen persoonlijk leesprofiel |
| 31 okt 2026 | Wie de app in de browser opent, ziet vóór het welkomstscherm 'Zet Boeken op je beginscherm' met drie stappen (iPhone: deelknop → Zet op beginscherm → Voeg toe; anders: menu → Toevoegen aan startscherm) en de waarschuwing dat de browser en de app op het beginscherm elk eigen gegevens hebben. 'Toch verder in de browser' slaat het over. Vanaf het beginscherm verschijnt het niet |
| 31 okt 2026 | De uitleg 'Zet op beginscherm' vraagt eerst 'Wat voor telefoon heb je?' (iPhone of iPad / Android, vooraf gekozen op wat de app herkent) en toont dan de passende stappen; bij Android ook een regel voor Samsung Internet |
| 1 nov 2026 | Boven 'Toch verder in de browser' staat wat dat betekent: je boeken staan dan alleen in die browser, je ziet ze niet terug in de app op je beginscherm, Safari wist ze als je de site ongeveer een week niet opent, en in een privévenster is alles weg zodra je het sluit |
| 1 nov 2026 | Kobo-check: titel over de volle breedte (hooguit twee regels), daaronder de knoppen Bekijk bij Kobo en Gedownload |
| 1 nov 2026 | Een gezocht boek toevoegen als Gelezen opent meteen de boekpagina (sterren, recensie), net als bij een tip |
| 1 nov 2026 | Zoek (en 'Alles ›' bij een rij) blijft bij de lijst terwijl erboven nieuws, tips en covers verschijnen |
| 1 nov 2026 | Covers van Nederlandse uitgaven ook via Biblion (de coverdienst van de bibliotheken; gratis, zonder sleutel, geen officiële koppeling; alleen het ISBN gaat mee): in zoekresultaten zonder cover, en bij toevoegen en op de achtergrond na Open Library, alleen als het een echte cover is (een leeg plaatje wordt de beginletter). Niet als bestand vast te leggen (zoals Google), wel bewaard voor snel tonen. Schrijver uit de KB zonder 'door' ervoor |
| 1 nov 2026 | Terugswipen: van een boek terug naar dat boek in de lijst (met zoekwoord), niet naar de zoekbalk; een gekozen zoekresultaat bij Toevoegen heeft een eigen adres (#/toevoegen/boek), zodat terugswipen bij de zoekresultaten uitkomt; na toevoegen wordt dat scherm vervangen, zodat terug niet bij een al toegevoegd boek uitkomt |
