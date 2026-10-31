# Alkemistens Almanakk

## Hva gjør Alkemistens Almanakk?

Alkemistens Almanakk er en portal inn i verden av fantastiske matretter. Portalen lar deg finne matoppskrifter etter kategorier, som biff, kylling og dessert.
Dette kan man gjøre ved å enten trykke seg inn på kortet med kategorien, eller ved å bruke sorteringsfilteret.

Dersom man har en spesifikk matrett man vil se oppskrift på, kan man søke etter denne.
Selv om man ikke helt husker hele navnet på retten, kan man søke etter det navnet begynner med, så vil APIet gi alle retter som inneholder søket.

Skulle man mangle litt kreativitet for dagens gryte, kan man trykke på "Tilfeldig måltid" i navigasjonen, da vil nettsiden hente et tilfeldig måltid og presentere det.
Skulle man være mistfornøyd med det foreslåtte måltidet kan man alltids be nettsiden gi et nytt måltid.

Når man så har funnet det man vil lage kan man trykke inn på måltidet for å se en detaljert side for det.
Her får man opp ingrediensene, et bilde av hvordan det ferdige resultatet kan se ut, og en liste med framgangsmåte for å lage det.

Listen med framgangsmåte inneholder sjekkbokser slik at man kan huke av for hvert trinn man er ferdig med.

## Hvem er Alkemistens Almanakk laget for?

Alkemistens Almanakk er laget for alle og enhver. Med dette menes det at nettsiden skal være enkel å navigere, den skal være tastatur- og tab- vennlig, og den skal fungere like bra for de med dårlig syn som for de med godt syn.
Dette har hatt en del føringer for valg av design. Tema for nettsiden har vært Halloween (derav navnet Alkemistens Almanakk) og jeg har gjort mitt beste for å velge farger med høy kontrast som allikevel er behagelig å se på.

Hele nettsiden kan tabbes gjennom, og det er satt en tydelig oransj farge på det elementet som er i fokus.

## Installasjon og kjøring

For å installere prosjektet på din lokale maskin må det først **forkes** til din egne GitHub. Deretter kan man **klone** det på den lokale maskinen.

For å kjøre prosjektet må man navigere til root-mappa i terminalen og kjøre **npm install**. Dette installer da alle dependencies.
Etter dette kjører man **npm run dev** for å kjøre det opp lokalt i browseren. Prosjektet kjøres ved default på port 3000, med url localhost:3000.

Prosjektet krever to miljøvariabler for å kunne hente data fra APIet. Prosjektet inneholder allerede en .env.example.
Lag en kopi av denne, endre navnet til **.env** (dette er viktig for at den ikke skal bli commited til GitHub etter at den er fylt med variablene).
Fyll så ut MEALDB_API_KEY og MEALDB_API-URL med urlen nevnt under og nøkkelen fra dokumentasjonen nevnt under.

## API og konfigurasjon

APIet som brukes heter **The Meal DB**. Dette APIet trenger en nøkkel for å kunne hente data.
Nøkkelen finner man inne på dokumentasjonen for the Meal DB: https://www.themealdb.com/documentation

I tillegg er prosjektet mitt satt opp slik at jeg la selve URLen til APIet inne i miljøvariablene. Grunnen til dette er at jeg visste ut i fra dokumentasjonen til APIet at jeg kom til å trenge flere forskjellige API-kall til forskjellige endepunkter. Av praktiske årsaker da var det enklere for meg å legge URLen i miljøvariablene.
The Meal DB har en annen versjon av URLen som skal brukes dersom man vil offentligegjøre prosjektet, og med URLen som en del av miljøvariablene gjør dette at det er enkelt å bytte til den ut med den nye URLen dersom jeg i framtiden skulle få lyst til å shippe det.
URLen er **https://www.themealdb.com/api/json/v1**.

## Kjente feil og begrensninger

### Mangler

Paginering: APIet inneholder ingen dokumentasjon for å paginere direkte fra det. Når man gjør et api-kall får man ingen _total_, _limit_, _skip_ eller lignende til å håndtere paginering. Derfor er det ikke lagt til pagineringsknapper.

Per nå gir hvert kort for matretter informasjon om hvilket land og område retten kommer. Dette gir et inntrykk av at man kan sortere etter land og område, men det er ikke en funksjon jeg har hatt tid til å legge til.

### Feil

På forsiden av nettsiden er det en knapp som heter "Gi meg en tilfeldig oppskrift". Intensjonen med denne var at den skulle bytte ut kortet på venstre side av skjermen med en ny, tilfeldig oppskrift. På grunn av at knapper krever interaksjon fra klienten, at siden rendres på server og fordi jeg vil skjule api-nøkkelen fra klienten endte jeg opp med at knappen i stedet tar deg til en ny side hvor den søker etter et tilfeldig måltid. På denne siden fungerer knappen for å hente et nytt tilfeldig måltid som den skal (den sender et nytt api-kall). Dette ble løst ved å lage en egen ts-fil for funksjonen som kaller på api-et, gi beskjed til Next om at denne skal kjøres på serveren, og så skrive selve siden for å vise den tilfeldige oppskriften som "use client" slik at jeg kunne bruke useEffect til å kalle på funksjonen. Som dependency-array til useEffecten bruker jeg en knapp som henter new Date, altså dagens dato i millisekunder. Siden dette alltid vil være et nytt tall, vil useEffect kjøre på nytt når knappen trykkes på.
Jeg vurderte å gjøre dette for forsiden og, men da forsiden gjør api-kall til flere forskjellige URLer, bestemte jeg meg for at det er en bedre brukeropplevelse at siden lastes raskere enn at knappen holder deg på siden i stedet for å sende deg til en ny side. Det er ikke sikkert alle på forsiden ønsker å bruke knappen, og da synes jeg det er bedre at siden lastes inn raskere.

Det er en irriterende visuell bug som gir knappene i footeren (de med lenker til The Meal DB og min GitHub) først en hvit border og deretter en oransj border når man hovrer over. Det har ikke noe å si for funksjonaliteten, men det er irriterende for meg.

Sjekkboksene for instrukser på detaljsiden mangler form element rundt. Her synes jeg ikke det gir mening å sette et Form rundt sjekkboksene, da det ikke er noe som skal sendes inn av informasjon av brukeren. I etterkant hadde nok en bedre løsning vært å bruke et pseudo before-element å style det som en sjekkboks, men da vil konsekvensen være at det ikke leses opp av en skjermleser.

Api-et er veldig ukonsekvent når det kommer til hvordan instruksene er lagt opp. Flere av instruksene har \r\n på starten av hver setning, noen har \n\r\n og et par har "Step 1 ..." "Step 2 ..." etc. I tillegg kommer alle instruksene for hver oppskrift som én lang streng. Jeg har gjort mitt beste for å prøve å fjerne alle tegn som \r\n, men på noen retter henger det fremdeles igjen som visuelt rot.
