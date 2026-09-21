# Profile Card

Voor deze sprint heb ik een redesign gemaakt van mijn visitekaartje. Ik heb op [Figma](https://www.figma.com/design/ogeBMoswsSbl0CdDmMVIDh/Profile-card-s13?node-id=0-1&t=KKeeOEHFR8Ur6ZHd-1) mijn ideeën uitgewerkt en met sveltekit een nieuwe [visitekaart](https://your-tribe-forlife-profilecard.netlify.app/) gemaakt. Voel je vrij om een kijkje te nemen. 

### Bronnen
[NetlifyDocs](https://docs.netlify.com/build/frameworks/framework-setup-guides/sveltekit/)

## Inhoudsopgave 
- [Beschrijving](#Beschrijving)
- [Designkeuze](#Designkeuze)
- [Gebruik van website](#Gebruik-van-website)
- [Kenmerken van de website](#Kenmerken-van-de-website)
- [Code conventies](#Code-conventies)
- [Installatie](#Installatie)

## Beschrijving 
Ik heb een profilecard gemaakt en de meeste gegevens opgehaald uit Directus. De gegevens die ik niet uit directus hebben kunnen ophalen en ik statisch ingezet. 

**Mobile:** 

https://github.com/user-attachments/assets/84fe7c42-ffed-4580-b628-236d52c85b61

**Tablet:**

<img width="786" height="786" alt="Scherm­afbeelding 2026-09-20 om 19 26 39" src="https://github.com/user-attachments/assets/b6e1af98-960e-475c-8191-8474e982f222" />

**Desktop:**

<img width="786" height="731" alt="Scherm­afbeelding 2026-09-20 om 19 26 49" src="https://github.com/user-attachments/assets/c308a3a4-b03d-4e66-979f-56d9b31e6001" />

## Designkeuze

in mijn MoodBoard heb ik al mijn kleur/stijl/icoon ideeën toegevoegd die ik dacht ik kan toevoegen voor mijn finale design. ik ben eindstand voor de warme scrapbook-stijl gegaan. 

**Moodboard:**

<img width="647" height="455" alt="Scherm­afbeelding 2026-09-14 om 11 43 00" src="https://github.com/user-attachments/assets/e2aafad1-49d9-4dbd-933d-7c8f450f00f4" />

**Overzichtspagina:**

<img width="808" height="302" alt="Scherm­afbeelding 2026-09-14 om 11 48 11" src="https://github.com/user-attachments/assets/3b6693c7-fddc-4284-b458-dde12b0885db" />

**Folders:** 

<img width="808" height="308" alt="Scherm­afbeelding 2026-09-14 om 11 48 48" src="https://github.com/user-attachments/assets/d3eed523-d581-43b8-a597-70fa01be01b9" />

<img width="820" height="308" alt="Scherm­afbeelding 2026-09-14 om 11 49 06" src="https://github.com/user-attachments/assets/91f5ccd7-d27a-458b-84f5-9a44109daaee" />

<img width="820" height="308" alt="Scherm­afbeelding 2026-09-14 om 11 49 21" src="https://github.com/user-attachments/assets/992300d9-c406-4ce6-a881-e3fd21198824" />

## Gebruik van website

Mijn profilecard laat zien wie ik ben en wat ik het afgelopen schooljaar heb geleerd. In de folder ‘**Projects**’ kun je mijn voortgang en de projecten waar ik aan heb gewerkt goed bekijken.
De schaakstukken, het MacBook-hoesje en de boeken laten zien wat ik leuk vind om in mijn vrije tijd te doen.

- Klik op een folder om meer te ontdekken!

## Kenmerken van de site

Voor het ontwikkelen van de website heb ik gebruikgemaakt van SvelteKit in combinatie met de Directus API. De gegevens worden grotendeels dynamisch vanuit de API ingeladen met behulp van een load-functie. Persoonsgegevens worden vanuit Directus opgehaald en via $props() doorgegeven aan de verschillende componenten.
Om de website overzichtelijk en onderhoudbaar te houden, heb ik onderdelen zoals de navigatie en footer als herbruikbare componenten opgebouwd. Daarnaast heb ik ervoor gezorgd dat de website op verschillende schermformaten goed werkt door gebruik te maken van media queries.

Bij het opbouwen van de pagina's heb ik geprobeerd de HTML zo semantisch mogelijk te schrijven. Hierdoor is de structuur van de website duidelijker en toegankelijker.

### Bronnen 

[Sveltekit Docs](https://svelte.dev/docs/kit/introduction)
[Loading Function](https://svelte.dev/docs/kit/load)
[Data filteren](https://directus.io/docs/guides/connect/filter-rules)

## Code conventies

Ik heb mij zoveel mogelijk gehouden aan de codeafspraken die beschreven staan in de [codeconventies](https://docs.fdnd.nl/conventies.html) Bij het aanmaken van mijn issues heb ik, waar van toepassing, gebruik gemaakt van de issue template uit de [Contributing](https://github.com/meemo99/your-tribe-for-life-squad-page/blob/main/CONTRIBUTING.md) van de Squad-pagina.


## Installatie
Om de website lokaal te openen:

1. Clone de repository
2. Open de map in je code editor
3. Installeer de dependencies:

`npm install`

4. Start de server:
`npm run dev`

5. Open de localhost link die in de terminal staat aangegeven

<!-- De instructie vind je in: [INSTRUCTIONS](https://github.com/fdnd-task/your-tribe-for-life-profile-card/blob/main/docs/INSTRUCTIONS.md) -->



De instructie voor deze leertaak staan in de [WIKI](https://github.com/fdnd-task/your-tribe-for-life-profile-card/wiki)
