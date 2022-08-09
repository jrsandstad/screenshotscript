# ScreenshotScript

ScreenshotScript er et script som tar et skjermbilde en gang etter X antall minutter og kopierer skjermbildet til mapper som er lest inn via en fil.


### Avhengigheter

* [NodeJS](https://nodejs.org/en/)
* [screenshot-desktop](https://www.npmjs.com/package/screenshot-desktop)

### Installering
For at programmet skal kunne kjøres så må det installeres en del ting på maskinen først.
1. Installer [NodeJS](https://nodejs.org/en/). Når dette scriptet ble skrevet så ble det tatt i bruk versjon 18.7.
2. For at screenshot-delen skal fungere så er man nødt til å installere følgende dependency: [screenshot-desktop](https://www.npmjs.com/package/screenshot-desktop). Dette gjøres ved å åpne terminal/kommandovindu og navigere til prosjektmappen og kjøre denne kommandoen.
```
npm install --silent
```


## Dokumentasjon
Dokumentasjon for bruk av scriptet.

### Endringer som ikke trenger at scriptet stoppes
#### Opprettelse og bruk av mapper
Hvis du ønsker å opprette en ny mappe hvor scriptet skal legge inn skjermbilde gjør følgende:
1. Opprett en mappe i media mappen hvor media spilles av fra.
2. I filen locations.txt, skriv nøyaktig det samme mappenavnet på en ny linje og lagre.

Da skal scriptet legge mappen til i listen over hvor den lagrer skjermbildet.

### Endringer som krever at scriptet stoppes
Noen endringer krever at scriptet stoppes før endringene utføres. Dette er endringer som må utføres i selvet koden til scriptet. Dette kan være f.eks. hvor lenge scriptet skal vente før den tar neste skjermbilde eller hvor skjermbildene skal lagres.

#### Hvordan stoppe scriptet
Scriptet kan stoppes på noen forskjellige måter avhengig om terminal/kommandovinduet der scriptet ble startet er lukket eller ikke. 
##### Hvis terminalen/kommandovinduet fortsatt er åpent
Scriptet avsluttes ved å trykke på tastene Ctrl + C.

##### Hvis termnialen/kommandovinduet er lukket
Åpne et nytt vindu og navigere seg til denne prosjektmappen og skrive inn følgende kommando:
```
npm run cleanup
```
Da er scriptet stoppet.

## Funksjonalitet
Her vil det komme mer etterhvert.