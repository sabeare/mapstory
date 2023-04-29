var config = {
    style: 'mapbox://styles/sabeare/cjdapwozeb1tg2roervfarft0',
    accessToken: 'pk.eyJ1Ijoic2FiZWFyZSIsImEiOiJjbGdnam12aXMwY2M2M2NwOGQ5YzhuN2FiIn0.XV3OFsZ65Niqc9F5ulg6Ig',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Slow datavisualisatie in het Soesterkwatier',
    subtitle: 'Hoe een geborduurd tafelkleed zorgt voor reflectie, verbinding en het omarmen van complexiteit in een buurt',
    byline: 'By Baukje Rienks | 12 juni 2023',
    footer: 'gemaakt door Baukje Rienks, met behulp van X. Free en Y. lovely',
    chapters: [
        {
            id: 'kleedimg',
            alignment: 'full',
            hidden: false,
            title: 'tafelkleed als conversation piece',
            image: 'images/kleed.png',
            description: '',
            location: {
                center: [5.37059, 52.15687],
                zoom: 18.47,
                pitch: 53.65,
                bearing: -15.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'zochtdeed',
            alignment: 'center',
            hidden: false,
            title: 'Abstract',
            image: '',
            description: 'Ik zocht naar manieren om gelijkwaardigheid in buurt te vergroten. Ik zocht naar nieuwe inzichten en doelgroepen om zo een een beter beeld van een burt te krijgen. Ik wilde de beleving van een buurt en de betekeis daarvan zichtbaar maken voor de bewoners zelf maar ook voor de organisaties/overheid die in de buurt werken. Ik ging op zoek naar stemmen die je normaal niet hoort, data die je normaal niet vindt. Daarvoor ontwierp ik werkvormen die vertragen om informatie over een buurt op te halen. Door Met aandacht en langdurig aanwezig zijn levert dat nieuwe informatie op op zo vroe ik mij af? De werkvormen gericht op ontdekken, refelcteren  co creeren en meerstemmigheid vond ik in een mix van slow design, creative placemaking en datafeminis. ',
            location: {
                center: [5.36413, 52.15914],
                zoom: 15.36,
                pitch: 45.00,
                bearing: 26.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'vondweet',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Ik vond een manier om buurtonderzoek te doen in vier fases, elke fase heeft haar eigen werkvormen. De vier fases zijn verkennen, verzamelen, verbinden, en verdiepen. Dit is een multilayere storytelling tool die ik in kan zetten. De werkvormen die daarin passen zijn zintuigelijk of embodied, wandelen observrern, fotograferen, luisteren slow datavisualisaeren,borduren en dat samen vormt een conversation piece waar alsmaar nieuwe informatie aan toegevoegd kan worden.Dat ziet er in een schema als volgt uit. Ik weet dat door het inzetten van wandelen als methode nuances vindt die helpen om een buurt te doorgrondenen wat er nodig is om verbinding en meestemmigheid tot stand te brengen. Ik doe dit om mijn  wijze met behulp van juist  subjectieve data een brdere context zichtbaar te maken van wat er speelt in een buurt en de betekenis ervan. Door dit met diverse doelgroepen daarop door te gaan ontstaat er een conversation piece waar aan voor geborduurd kan worden en steeds rijker wordt in meerstemmigheid en onontdekte verhalen. Vertragen is verminigvuldingen Door aandacht te besteden, en te reflecteren op wat er gaan de is, door de tijd te nemen tijdens het borduurproces wat gebeurt hier eigenlijk komen er nieuwe inzichten. Door deze te delen op ontmoetingsplaatsen voor verbndiing dmv textiel ateliers zijn de eeste stappen voor een gelijkwaardige buurt gezet. wat is gelijkwaardigheid wat betekent dat voor mij! lexicon toevoegen.  ',
            location: {
                center: [5.36413, 52.15914],
                zoom: 15.36,
                pitch: 45.00,
                bearing: 26.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'opbouw',
            alignment: 'left',
            hidden: false,
            title: 'opbouw Werkwijze',
            image: 'images/werkwijze_slowdatavis.png',
            description: 'Volgen de basis indeling van verkennen, verbeelden en verdiepen. In iedere fase neem ik je mee in de gekozen werkvormen en reflectie (links uitgelijnd) en de resultaten ervan toegepast in het Soesterkwartier (rechts uitgelijnd). ',
            location: {
                center: [5.36400, 52.16125],
                zoom: 15.00,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'tracksSander',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'tracksSander',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'verkenimg',
            alignment: 'full',
            hidden: false,
            title: 'verkennen',
            image: 'images/autotuin.png',
            description: 'dit is test',
            location: {
                center: [5.37059, 52.15687],
                zoom: 18.47,
                pitch: 53.65,
                bearing: -15.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'verkennen',
            alignment: 'full',
            hidden: false,
            title: 'verkennen',
            image: '',
            description: 'verkennen van de buurt en verkennen van de methode...',
            location: {
                center: [5.38010, 52.15856],
                zoom: 14.99,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'vandekaart',
            alignment: 'left',
            hidden: false,
            title: 'ik ben van de kaart',
            image: '',
            description: 'eerste iteratie, bracht me op het spoort van ongelijkheid in de maatschappij.',
            location: {
                center: [5.36400, 52.16125],
                zoom: 15.00,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'tracksSander',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'tracksSander',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'flaneuse',
            alignment: 'left',
            hidden: false,
            title: 'flaneuse',
            image: '',
            description: 'werkvorm in het kort',
            location: {
                center: [5.36400, 52.16125],
                zoom: 15.00,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'tracksSander',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'tracksSander',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'zintuig',
            alignment: 'left',
            hidden: false,
            title: 'zintuigwandelen',
            image: '',
            description: 'hier komt meer uitleg',
            location: {
                center: [5.36400, 52.16125],
                zoom: 15.00,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'tracksSander',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'tracksSander',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'verkenres',
            alignment: 'full',
            hidden: false,
            title: 'resultaat thinglink verkennen ',
            image: ' <a href="https://www.thinglink.com/mediacard/1702291723679433508" </a>',
            description: 'of al aan het begin van verkennen plaatsen...hoe thinglink toevoegen dit is een link of een iframe?',
            location: {
                center: [5.38010, 52.15856],
                zoom: 14.99,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'walktalk',
            alignment: 'left',
            hidden: false,
            title: 'Walk&talk',
            image: 'images/radarchart_walk&talk.png',
            description: 'hier komt meer uitleg, wandelen, mindmaps, tracks luisteren',
            location: {
                center: [5.36400, 52.16125],
                zoom: 15.00,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'tracksSander',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'tracksSander',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'stapel',
            alignment: 'right',
            hidden: false,
            title: 'gestapelde huizen',
            image: 'images/huisverheuvel.png',
            description: 'Vanwege het spoor heeft het Soesterkwartier een wat geïsoleerde ligging. Ondanks dat het dicht bij het centrum ligt, groeten de mensen elkaar hier op straat, alsof het een dorp is. Tijdens veel wandelingen met medebewoners kwam meerdere keren naar voren dat in het Soesterkwartier regelmatig meerdere generaties na elkaar in hetzelfde huis wonen. Dat zegt voor mij iets over de verbondenheid die zij voelen met die plek.In dit huisje woont mevrouw Verheuvel, ruim negentig jaar oud, al haar hele leven. Ze is de vierde generatie die in dit huis woont: ook haar ouders, grootouders en overgrootmoeder hebben hier gewoond. Ik hoorde dit verhaal tijdens de wandelingen door de buurt. Later sprak ik de zus van mevrouw Verheuvel hierover tijdens mijn bezoek aan een dagbestedingsgroep van beginnende dementerenden. Zij vertelde me dat haar overgrootmoeder weduwe werd en met haar kinderen dit huisje mocht betrekken in ruil voor onderhoud van de naast gelegen Joodse begraafplaats. Door deze collage als slow datavisualisatie toe te voegen aan  de deepmap kan ik deze verborgen verhalen teruggeven aan de buurt',
            location: {
                center: [5.37019, 52.15695],
                zoom: 17.66,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'tracksSander',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'tracksSander',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'track',
            alignment: 'left',
            hidden: false,
            title: 'track tracks',
            image: '',
            description: '',
            location: {
                center: [5.36400, 52.16125],
                zoom: 15.00,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'tracksSander',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'tracksSander',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'verbeeldimg',
            alignment: 'full',
            hidden: false,
            title: 'verbeelden',
            image: './path/to/image/source.png',
            description: '',
            location: {
                center: [5.38010, 52.15856],
                zoom: 14.99,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'verbeelden',
            alignment: 'center',
            hidden: false,
            title: 'verbeelden',
            image: '',
            description: 'verkennen van de buurt en verbeelden van de methode...',
            location: {
                center: [5.38010, 52.15856],
                zoom: 14.99,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'scholen',
            alignment: 'right',
            hidden: false,
            title: 'Kansengelijkheid schoolkinderen',
            image: 'images/sk25000.png',
            description: 'De slow datavisualisatie hiernaast laat zien naar welke scholen de kinderen uit het Soesterkwartier gaan. Het blijkt dat de meerderheid van de kinderen buiten de wijk naar school gaat (groen). Is dat erg? In veel van de wandelinterviews die ik maakte kwam deze scholenproblematiek als onderwerp ter sprake. Sommige vertelden over de afwegingen die ze gemaakt hadden over wel of niet in de buurt naar school gaan. Voor meerdere was het grove taalgebruik van kinderen op de buurtscholen een reden om naar andere scholen buiten de buurt te gaan kijken.Een van de wandelaars, die ontevreden is over de buurtscholen, stelde voor om alle scholen sluiten en één nieuwe school op nieuwe locatie inclusief nieuw docenten- en directie team te ontwikkelen. Ook vertelde iemand over de komst van een internationale school in één van de scholen vanwege de gunstige ligging bij het station en de internationale scholen in de omgeving allemaal vol zitten. Volgens haar was dit positief omdat de internationale school een samenwerking met alle scholen aangaat en zo het Engels onderwijs op alle buurtscholen kan verbeteren. Het is nog onduidelijk wat deze oplossingen teweeg kunnen brengen. Ik maakte een dataset (allecijfers.nl) over welke scholen de lagere schoolleerlingen uit de wijk Soesterkwartier bezoeken. Ik gebruikte deze data om ieder kind te eren met een geborduurd knoopje. Tijdens het borduren reflecteerde ik op de informatie en quotes die ik had gekregen tijdens de wandelinterviews.          De scholen kampen met de gevolgen van sociaal-economische segregatie. De kinderen van vooral hoger opgeleide ouders gaan buiten de wijk naar school, waardoor de scholen in de wijk in een alsmaar grotere vicieuze cirkel terecht zijn gekomen. Er is meer gelaagde informatie nodig, dan alleen cijfers van het aantal kinderen om oplossingen te vinden om alle kinderen in deze wijk dezelfde schoolkansen te bieden.',
            location: {
                center: [5.37006, 52.16049],
                zoom: 15.64,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'verdiepimg',
            alignment: 'full',
            hidden: false,
            title: 'verdiepen',
            image: 'images/verbinden.png',
            description: '',
            location: {
                center: [5.38010, 52.15856],
                zoom: 14.99,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'verdiepen',
            alignment: 'full',
            hidden: false,
            title: 'verbinden',
            image: '',
            description: 'verkennen van de buurt en verbinden van de methode...',
            location: {
                center: [5.38010, 52.15856],
                zoom: 14.99,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'principes',
            alignment: 'left',
            hidden: false,
            title: 'principes',
            image: 'images/autotuin.png',
            description: 'de principes van waaruit ik werk levert ontdekken relfecteren co creatie en meerstemmigheid op als gemenen deler. Wat zijn de overeenkomsten tussen datafem, creative placemaking en slow design? antwoord subjectiviteit toelaten, zintuigen gebruiken, analoog en creative concentration, vertragen context/meerstemmigheid',
            location: {
                center: [5.38010, 52.15856],
                zoom: 14.99,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slow',
            alignment: 'left',
            hidden: false,
            title: 'wat is slow design',
            image: 'images/autotuin.png',
            description: 'Waarom slow design? alineao 1: lijst onthull,e uitbreiden, reflecteren, erbij betrekken participatie, ontwikkelen en rituelen, alineo 2 antwoord ',
            location: {
                center: [5.38010, 52.15856],
                zoom: 14.99,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'place',
            alignment: 'left',
            hidden: false,
            title: 'creative placemaking',
            image: 'images/autotuin.png',
            description: 'rol van creative placemaking',
            location: {
                center: [5.38010, 52.15856],
                zoom: 14.99,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'data',
            alignment: 'left',
            hidden: false,
            title: 'data feminisme',
            image: 'images/autotuin.png',
            description: '',
            location: {
                center: [5.38010, 52.15856],
                zoom: 14.99,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'kopie',
            alignment: 'full',
            hidden: false,
            title: 'basis',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
