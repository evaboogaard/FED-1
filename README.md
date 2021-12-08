# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

(gebiedende wijs is zonder 't' joh)

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details>
<summary>uitwerken voor kick-off werkgroep</summary>

### Auteur:
Eva Boogaard

#### Je startniveau:
Rood

#### Je focus:
Surface Plane

</details>





## Je website

### Je opdracht:
https://www.destaat.net/

#### Screenshot(s) van de eerste pagina (small screen): 
Homepage 
<img src="images/procesverslag/destaat1.png" width="375px" alt="">

#### Screenshot(s) van de tweede pagina (small screen):
Detailpage
<img src="images/procesverslag/destaat2.png" width="375px" alt="">
 
</details>



## Breakdownschets (week 1)

### de hele pagina: 
<img src="images/procesverslag/breakdownschets.png" width="375px" alt="breakdown van de hele pagina">

</details>





## Voortgang 1 (week 2)

<details>
<summary>uitwerken voor 1e voortgang</summary>

### Stand van zaken
Het ging best wel goed, ik had moeite met javascript & beetje met height en width, maar ben er wel uitgekomen.
<img src="images/procesverslag/screenshot1.png" width="210px" alt="breakdown van de hele pagina">
<img src="images/procesverslag/screenshot2.png" width="210px" alt="breakdown van de hele pagina">
<img src="images/procesverslag/screenshot3.png" width="210px" alt="breakdown van de hele pagina">

### Agenda voor meeting
samen met je groepje opstellen

| Heba           | Eva                | student 3    | student 4        |
| ---            | ---                | ---          | ---              |
| nav met javascr| javascript doet    | breakdown    | en dan ik dat    |
| en dat ook nog | het niet op github | schetsbestand| dit wil ik zeker |
| ...            |                    | te groot     | ...              |


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- punt 1
- punt 2
- nog een punt
- ...

</details>





## Voortgang 2 (week 3)

<details>
<summary>uitwerken voor 2e voortgang</summary>

### Stand van zaken
Ik heb gestruggled met het stuk aan het begin, met de 3 singles, deze heb ik eerst van flexbox naar grid omgezet maar toen toch weer niet, ik kwam er later pas achter dat als je met JS een class toevoegt, deze pas de vorige waarde overschrijft als je een net zo specifieke selector aanroept. Maar met bloed, zweet en tranen ben ik er wel uitgekomen. 

Ik heb gespeeld met media queries, ik ben begonnen met het responsive maken van een aantal elementen en ik heb een dark-mode toegevoegd. Ook heb ik geprobeerd een beginnetje te maken met de toegankelijkheid van de website, maar daar valt nog veel te halen.

<img src="images/procesverslag/week3_1.png" width="210px" alt="breakdown van de hele pagina">
<img src="images/procesverslag/week3_2.png" width="210px" alt="breakdown van de hele pagina">
<img src="images/procesverslag/week3_3.png" width="210px" alt="breakdown van de hele pagina">


### Agenda voor meeting
samen met je groepje opstellen

| student 1      | student 2          | student 3    | student 4        |
| ---            | ---                | ---          | ---              |
| dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
| en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
| ...            | ...                | ...          | ...              |


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- Zaid en Sasja zijn toppers en ze verdienen allebei een raise
- Zaid kwam met het punt dat de heading-levels als een soort receptenboek zijn: H1 is de titel van het recept, H2 de ingrediëntenlijst, H3 de benodigdheden, etc.etc. dus dat heb ik aangepast.
- Het was gezellig en we hadden thee. #BestieVibes

</details>





## Toegankelijkheidstest (week 4)

<details>
<summary>uitwerken na test in 8e voortgang</summary>

### Bevindingen
Lijst met je bevindingen die in de test naar voren kwamen:

#### Er moet een high contrast mode komen
In de werkgroep heb ik ondervonden dat sommige elementen in de site geen hoog genoeg contrast hebben, dat had ik niet zo door aangezien mijn ogen nog prima werken.

Dit kan gefixt worden d.m.v. een media query waarin de root kleurtjes aangepast worden.


#### Heading levels werken niet zoals Zaid ze beschrijft
Technisch gezien hoort het zo te werken dat als je een H1 in een section zet - deze zich onderscheidt van de andere H1. Bij het gebruik van een screenreader is er echter geen touw aan vast te knopen, het is pure chaos, help.

Ik moet kortgezegd alle heading levels weer aanpassen naar hoe ze eerst waren - dus hierarchie gebaseerd op hoe belangrijk de headings zijn.

#### Links worden niet goed voorgelezen
Sommige linkjes worden met gebruik van de screenreader niet goed voorgelezen omdat ik dacht dat ik lekker semantisch bezig was maar dat viel heerlijk tegen.

Ik heb nu geen tijd meer om zo'n groot deel van mijn code te herschrijven, helaas, maar in de toekomst zal ik de screenreader veel meer in mijn achterhoofd houden terwijl ik aan het werk ben en zal ik deze testen, net zoals ik mijn website constant aan het testen ben. Op deze manier zal je niet last-minute nog voor verrassingen komen te staan.

#### Tabindex = not gr8
Ik had in eerste instantie gebruik gemaakt van tabindex, omdat ik dacht 'wauwie wat handig' maar dat was een stuk minder 'wauwie wat handig' en meer een niet-werkende lifehack. 

Dus ik heb maar heel snel al mijn tabindex-jes uit de html geknald, want die hebben daar niets te zoeken.

</details>





## Voortgang 3 (week 4)

<details open>
<summary>uitwerken voor 3e voortgang</summary>

### Stand van zaken
Eerlijk, ik ben gewoon aan het chillen. No stress. Only vibes. <3


### Agenda voor meeting
samen met je groepje opstellen

| student 1      | student 2          | student 3    | student 4        |
| ---            | ---                | ---          | ---              |
| dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
| en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
| ...            | ...                | ...          | ...              |


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- punt 1
- punt 2
- nog een punt
- ...

</details>





## Eindgesprek (week 5)

<details>
<summary>uitwerken voor eindgesprek</summary>

### Stand van zaken
hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

### Screenshot(s)

hier screenshot(s) van je eindresultaat

</details>





## Bronnenlijst

<details open>
<summary>continu bijhouden terwijl je werkt</summary>

Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

1. One source to rule them all: https://www.vasilis.nl/
2. https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column?retiredLocale=nl
3. https://newbedev.com/show-hide-elements-with-animation
4. https://www.digitalocean.com/community/tutorials/code-formatting-with-prettier-in-visual-studio-code
5. https://stackoverflow.com/questions/35856013/rotate-all-html-element-whole-page-90-degree-with-css
6. https://stackoverflow.com/questions/2943548/how-to-reset-remove-chromes-input-highlighting-focus-border
7. https://www.smokonow.com/
8. https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness


</details>