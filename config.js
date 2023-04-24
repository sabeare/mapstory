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
    title: 'Slow Stories uit het Soesterkwatier',
    subtitle: 'Waarom subjectieve verhalen nieuwe inzichten geven',
    byline: 'By Baukje Rienks | 12 juni 2023',
    footer: 'gemaakt door Baukje Rienks, met behulp van X. Free en Y. lovely',
    chapters: [
        {
            id: 'zochtdeed',
            alignment: 'center',
            hidden: false,
            title: 'Abstract /Slow door het Soesterkwartier',
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
            title: 'Abstract /Slow door het Soesterkwartier',
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
            alignment: 'right',
            hidden: false,
            title: 'opbouw Werkwijze',
            image: 'images/werkwijze_slowdatavis.png',
            description: 'Volgen de basis indeling van verkennen, verzamelen, verbinden en verbeelden. In iedere fase neem ik je mee in de gekozen werkvormenth (links uitgelijnd) en de resultaten ervan (thinglinks?). achtergrond informatie is rechts uitgelijnd.  ',
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
            description: 'dit is een test test test test test',
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
            image: '',
            description: 'hoe thinglink toevoegen dit is een link of een iframe?',
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
            id: 'verzamelimg',
            alignment: 'full',
            hidden: false,
            title: 'verzamelen',
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
            id: 'verzamelen',
            alignment: 'full',
            hidden: false,
            title: 'verzamelen',
            image: '',
            description: 'infor intro over fase verzamelen',
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
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: '360 test',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [6.15116, 46.20595],
                zoom: 12.52,
                pitch: 8.01,
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
            image: '',
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
            id: 'track',
            alignment: 'left',
            hidden: false,
            title: 'track tracks',
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
            id: 'verbindimg',
            alignment: 'full',
            hidden: false,
            title: 'verbinden',
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
            id: 'verbinden',
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
            id: 'principes',
            alignment: 'right',
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
            alignment: 'right',
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
            alignment: 'right',
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
            alignment: 'right',
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
