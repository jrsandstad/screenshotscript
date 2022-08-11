# ScreenshotScript

ScreenshotScript er et script som er skrevet i NodeJS. Scriptet tar et skjermbilde etter 5 minutter og kopierer skjermbildet til mapper som er lest inn via en fil.


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


### Hvordan kjøre scriptet på maskinen
Åpne terminal/kommandovindu som administrator og naviger til prosjektmappen med scriptet.
Kjør så følgende kommando:
```
node app.js
```


### Endringer som ikke trenger at scriptet stoppes
#### Opprettelse og bruk av mapper
Hvis du ønsker å opprette en ny mappe hvor scriptet skal legge inn skjermbilde gjør følgende:
1. Opprett en ny mappe i lokasjonen hvor programmet kopierer skjermbilde til.
2. I filen locations.txt i prosjektmappen, skriv nøyaktig det samme mappenavnet på en ny linje og lagre.

Da skal scriptet legge mappen til i listen over hvor den lagrer skjermbildet.


### Endringer som krever at scriptet stoppes
Noen endringer krever at scriptet stoppes før endringene utføres. Dette er endringer som må utføres i selvet koden til scriptet. Dette kan være f.eks. hvor lenge scriptet skal vente før den tar neste skjermbilde eller hvor skjermbildene skal lagres.

#### Endring av hvor ofte scriptet tar et skjermbilde


#### Endring av hvilken mappe scriptet lagrer bildet i


#### Endring av filnavnet på skjermbildet
Endre konstanten "const imageName" til å være lik "FILNAVN.png" eller "FILNAVN.jpg". Filformatet må være enten .png eller .jpg grunnet avhengigheten screenshot-desktop.
 

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