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
    title: 'Slow datavisualisaties over het Soesterkwatier',
    subtitle: 'Hoe een geborduurd tafelkleed verbindt',
    byline: 'By Baukje Rienks | 12 juni 2023',
    footer: 'gemaakt door Baukje Rienks, met web&tech hulp van Niene Boeijen',
    chapters: [
        {
            id: 'kleedimg',
            alignment: 'full',
            hidden: false,
            title: 'tafelkleed als conversation piece',
            thinglink: 'https://www.thinglink.com/mediacard/1702291723679433508',
            image: '',
            description: 'Hallo check <br> hoe <span id="test">gaat<span> het?   <a href="#verdiepimg">verdiepen</a>',
            description2: '',
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00           
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'instructie',
            alignment: 'center',
            hidden: false,
            title: 'leesinstructie',
            image: '',
            description: 'Je kunt deze publicatie op twee manieren lezen. De eerste manier is om via de buttons op het tafelkleed te navigeren. Zo volg je je eigen pad door de verhalen uit het Soesterkwartier en de achtergrond van de methode. De blauwe buttons gaan specifiek over het Soesterkwartier. De oranje buttons over de methode. <br> </br>            (dit is technisch nog niet helemaal mogelijk/evt zoekfunctie op keywords en of bidrectionallinks, wordt aan gewerkt )            Een andere mogelijkheid is om door deze storymap te scrollen. Zo ontvouwt het hele onderzoek zich. De opbouw is volgens de fases van de methode: verkennen, verbeelden en verdiepen en staan links uitgelijnd. De resultaten opgehaald in de wijk soesterkwartier staan rechts uitgelijnd of als het om beeldmateriaal gaat over de volle breedte.            ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'verkenimg',
            alignment: 'full',
            hidden: false,
            title: 'verkennen',
            image: 'images/autotuin.png',
            description: '',
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00    
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'wijk',
            alignment: 'right',
            hidden: false,
            title: 'soesterkwartier',
            image: '',
            description: 'Het gebied wat ik voor het ontwikkelen van mijn methode koos is de wijk het Soesterkwartier in Amersfoort. Het is mijn eigen leefomgeving. De nabijheid werkt als een voordeel om je er langdurig aan te verbinden, maar het is geen voorwaarde. Het is een plek waar landelijke maatschappelijke issues zichtbaar zijn. Denk aan gentrificatie en de druk op de voorzieningen en groen ten koste van woningenbouw of het versterken van het wij-zij denken, polarisatie.             Deze voormalige arbeiderswijk ligt “boven” het station en is zon 100 jaar oud. Vanwege het spoor heeft het Soesterkwartier een wat geïsoleerde ligging. Ondanks dat het dicht bij het centrum ligt, groeten de mensen elkaar hier op straat, alsof het een dorp is. De wijk bestaat uit meerdere buurten. De belangrijkste zijn: bloemen-, bomen- en rivierenbuurt.  ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00    
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'vraag',
            alignment: 'left',
            hidden: false,
            title: 'onderzoeksvraag',
            image: '',
            description: 'De hoofdvraag van het onderzoek is:             Hoe kan ik slow datavisualisatie als methode inzetten om de beleving en de betekenis van een gebied zichtbaar te maken voor en met wijkmakers?            Subvragen die ik me daarbij stelde zijn:Hoe is de methode slow datavisualisatie opgebouwd?            Wat is slow in slow datavisualisatie?            Wat levert analoog werken mbt buurt onderzoek op?            Hoe helpt subjectieve data en het inzetten van een conversation piece bij het adresseren van het belang van een gelijkwaardigere leefomgeving?             ',
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
            id: 'doelgroep',
            alignment: 'left',
            hidden: false,
            title: 'doelgroep',
            image: '',
            description: 'Deze storymap is gemaakt voor “wijkmakers”. Dat is iedereen die zich inzet voor het gelijkwaardiger maken en verbeteren van de leefomgeving op een creatieve,  verbindende en tastbare manier.             De mensen die ik tijdens mijn onderzoek tegenkwam waren allerlei “wijkmakers”. Ze noemden zichzelf: stadmaker, kwartiermaker, wijkwerker, sociaal architect, urbanista, urban designer, design antropoloog, omgevingspsycholoog, feministisch geograaf, beleidsmaker, information designer of betrokken bewoner.             ',
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
            id: 'methode',
            alignment: 'left',
            hidden: false,
            title: 'slow datavisualisatie',
            image: 'images/werkwijze_slowdatavis.png',
            description: 'is een methode om slow research in een gebied te doen. Het beoogt niet alleen de visuele representatie van informatie gericht op de gebruiker, maar ook om de waarde te tonen van de context met behulp van subjectieve data en anekdotes door middel van een conversation piece. Slow datavisualisaties laten ruimte om je eigen verhaal te destilleren en aan te vullen. Het proces van slow datavisualisaties wordt (deels) met de hand uitgevoerd. n mijn geval door te borduren.              De opbouw van deze storymap is op basis van deze methode. Via de fases van verkennen, verbeelden en verdiepen neem ik je mee langs de opbouw van de methode, de werkvormen (links uitgelijnd) en de resultaten ervan in het Soesterkwartier (rechts uitgelijnd/fullwidth).             ',
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
            id: 'driefases',
            alignment: 'left',
            hidden: false,
            title: 'drie fases ',
            image: '',
            description: 'Het slow datavisualisatie proces bestaat uit drie fases namelijk: verkennen, verbeelden en verdiepen. Het begint met de verkening van een gebied door er regelmatig aanwezig te zijn, er doorheen te wandelen, te fotograferen, zintuigen te gebruiken en zo gegevens verzamelen.            De volgende fase is het verbeelden. Door verbinding aan te gaan met betrokken wijkmakers, door te wandelen en gesprekken te voeren. Om vervolgens de informatie uit beide fases te onderzoeken en daarna te verbeelden in datavisualisaties.            De laatste fase is verdiepen. Door met betrokkenen te reflecteren op de datavisualisaties ontstaan er gelaagde verhalen waarmee nieuwe inzichten zichtbaar worden. Deze inzichten worden tastbaar gemaakt in een conversation piece. Die alsmaar met andere betrokkenen ingezet kan worden om aanvullende informatie op te halen. Hiermee verdiept het proces steeds verder door meerstemmigheid en context ruimte te geven en zo de complexiteit omarmt en daarmee betekenis geven aan inzichten.            ',
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
            id: 'slowr',
            alignment: 'left',
            hidden: false,
            title: 'slow research',
            image: 'images/autotuin.png',
            description: 'Slow datavisualisatie is een vorm van Slow research. Het gaat om betekenis geven aan het denken door verbinding, reflectie en het omarmen van complexiteit volgens Berg & Seeber in het boek The Slow Professor uit 2017. Bij Slow research gaat het om vertragen en gebruikt daarom embodied en/of analoge werkvormen tijdens het designproces om tot nieuwe inzichten te komen.             Het gaat wat mij betreft vooral om tijd en ruimte maken om te reflecteren en ten tweede om meer besef te krijgen in de complexiteit van mijn onderwerp en als laatste met dit onderzoek verbinding met de context tot stand te brengen. Met het streven om ongehoorde doelgroepen zichtbaar te maken en zo nieuwe inzichten voor het verbeteren van een gebied te vinden.             ',
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
            id: 'slowd',
            alignment: 'left',
            hidden: false,
            title: 'slow design',
            image: 'images/autotuin.png',
            description: 'Slow datavisualisatie methode volgt de Slow Design principes. Deze zijn ontworpen door oprichter van SlowLab Amsterdam Carolyn F. Strauss en professor in Design Research Alastair Fuad-Luke. (2008). Zij noemen Slow Design zelf een vorm van creatief activisme en evaluatie tool die nieuwe waarden levert voor design in de verschuiving naar duurzaamheid door gebruik te maken van zowel kwantitatieve, kwalitatieve en intuïtieve beoordelingsmethodes. De 6 principes zijn: onthullen (REVEAL), uitbreiden(EXPAND) reflecteren(REFLECT), verbinden(ENGAGE), participeren(PARTICIPATE) en ontwikkelen(EVOLVE).              De Slow datavisualisatie methode past in de traditie van Slow Designers omdat het gericht is op het waarderen van kwalitatieve informatie en daar betekenis aan te geven. Met het doel om op die manier nieuwe inzichten te vergaren (onthullen) door te verbinden van betrokkenen met elkaar en de buurt, te participeren, reflecteren waardoor kennis zich steeds verder kan uitbreiden en ontwikkelen.                    ',
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
            description: 'Artists are as an antenna picking up weak signals of the future and bring it tot the surface. (sara Wookey)            In 2006 zag ik de dans performance Love’s geography van Sara Wookey in de Melkweg Amsterdam. Gebaseerd op de gelijknamige tekst van Peggy Phelan. Deze voorstelling is me goed bijgebleven, en als ik er nu naar kijk omdat zij heel goed haar lichaam en beweging gebruikt in de publieke ruimte.  Wookey haar werk is geïnspireerd op William H. Whyte die samen met Jane Jacobs de grondleggers zijn van placemaking. Hij onderzoek de menselijke dynamiek en was overtuigd dat je dat kan doen door het observeren hoe mensen de ruimte gebruiken.             Placemaking is zowel een filosofie en methode die wijkmakers betrekt bij de ontwikkeling van de leefomgeving. Het is gericht op observeren en te luisteren naar de gebruikers – de experts van die openbare ruimte. Met het doel om de kwaliteit van de openbare ruimte te verbeteren maar ook netwerkvorming, gevoel van eigenaarschap en verantwoordelijkheid over deze leefomgeving te bevorderen, ervaren dat de betrokken zelf invloed hebben op de kwaliteit ervan. (pps.org)            Slow datavisualisatie is een vorm van creatieve placemaking. Het zet creatieve en embodied werkvormen in om het observeren en luisteren te versterken. Met het doel om op deze manier nieuwe inzichten over een buurt op te halen bij betrokkenen. Door deze informatie ook zichtbaar te maken in iets tastbaars als een conversation piece kunnen vervolgens andere betrokkenen deze informatie verdiepen en zich daarmee ook verbinden aan de verbeteringen van de leefomgeving.              ',
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
            description: 'Data is the new oil (quote)            Data feminism is een doel en een proces om vanuit intersectioneel feminisme te werken naar meer rechtvaardigheid in het groeiende veld van data science. Het gelijknamige boek is geschreven door C. D’Ignazio,  urban planner op het MIT en L. Klein, research professor in digital humanities lab en data science. Volgens de schrijfsters gaat het over meer dan alleen gender. Het gaat om wie de machtsposities hebben we wie niet en hoe dat verandert kunnen worden. Ze werken met 7 principes om verandering in de wereld aan te jagen en aan te tonen dat data over mensen gaat.              De principes van data feminsm zijn: examine power, challenge power, elevate emotion and embodiement, rehtink binaries and hierarchies, embrace pluralism, consider context. Mak labor visible. (datafeminism p. 8-10)            Met name de principes over waarde toekennen aan emotie en embodiment, omarmen van pluralisme en het beschouwen van context zijn principes die je ook terug ziet in mijn werk. Data in welke vorm dan ook is niet neutraal of objectief. Het is altijd belangrijk na te gaan wie heeft data verzameld en tot welk doel. Het is een product van ongelijke sociale verhoudingen. Door dit in ogenschouw te nemen kan slow datavisualisatie bijdragen aan de gelijkwaardigere en rechtvaardigere wereld.             ',
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
            id: 'vorm',
            alignment: 'left',
            hidden: false,
            title: 'werkvormen',
            image: '',
            description: 'De vertragende werkvormen die ik inzet voor het verzamelen en verbeelden van informatie zijn: wandelen, borduren en het tastbaar maken ervan in een conversation piece. In al deze werkvormen zit ook het embodied en zintuiglijke manier van onderzoeken. Het bied de mogelijkheid voor reflectie door langdurig bezig te zijn door bewust de informatie analoog te verwerken.             Gesprekken zijn persoonlijker als je met elkaar wandelt of borduurt en de tijd neemt voor reflecteren op wat er gezegd werd levert nieuwe inzichten. De betrokkenen  waren allen bereid om hun tijd hierin te steken en voelden zich gehoord omdat er letterlijk meer ruimte en tijd was om naar elkaar te luisteren.             om nieuwe inzichten te krijgen over een locatie/gebied of buurt helpt het om creatieve en innovatieve werkvormen in te zetten. Iedere fase in het proces gebruikt variaties van het wandelen en borduren in combinatie met visualiseren door middel van mapping en/of fotografie. Maar ook het inzetten van workshops en het gebruik van digitale middelen dragen er aan toe bij.            In de verkennende en het begin van de verbeelden fase is het mogelijk om zelfstandig informatie op te halen. Maar om meerstemmigheid te benadrukken ligt de focus in de verbeeldende en verdiepende fase op participatieve en en co-creatie werkvormen toe te passen. We zijn in het werk in zijn algemeen zo gericht op efficiency gericht, dat we niet meer in de gaten hebben dat we zoveel betekenisvolle informatie over het hoofd zien. Deze werkvormen zijn juist bedoeld om door je langdurig aan een gebied te verbinden, met aandacht werkvormen uit te voeren en zo de beleving zichtbaar te maken en daar betekenis aan hechten. Vertragen is vermenigvuldigen dus.           ',
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
            id: 'flaneuse',
            alignment: 'left',
            hidden: false,
            title: 'flaneuse',
            image: '',
            description: 'Img: Walking is mapping with your feet (Elkin in flaneuse p.21)            Een flaneur is iemand die doelloos ronddwaalt. Diegene begrijpt de stad omdat hij die al wandelend memoriseert (p7) en een mate van onzichtbaarheid heeft om dat te doen.(p. 13). Flâneuse is de titel van het boek van Lauren Elkin (2016) over hoe een vrouw past in het stadsgezicht. Dat is volgens haar meer dan een vrouwelijk vorm van flaneur. Het gaat volgens haar over iemand die gaat waar ze niet behoort te gaan, en al wandelend afstemt op het  creatieve potentieel van de stad p22.            Ook neuroscienctist Shane O’mara schrijft in “in praise of walking” dat wandelen de beste manier is om een plek te leren kennen. De sfeer van een plek, de energie, het tempo. Te voet ben je gelijk ‘in touch’ met het stadsleven.             Ik ging de straten van het Soesterkwartier bewandelen en observeren. Samen met mijn hond om een soort van onzichtbaarheid te creëren. Ondertussen fotografeerde ik de dingen die me opvielen. De informatie die het me gaf nam ik mee als bagage tijdens de gesprekken die ik later voerde met wijkmakers. Wandelen gaat over observeren en mappen van een plek, dat doe je niet alleen door te kijken maar juist om plek te ervaren en een gevoel te krijgen; daar gebruik je meerdere zintuigen voor.  Alleen dit al levert informatie die je niet via reguliere databronnen te weten kan komen zoals in het Soesterkwartier het veelvuldig gebruik van je tuin als parkeerplek voor je auto. wandelen als een flaneuse  is één manier om informatie op te halen voor slow datavisualisaties.             ',
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
            description: 'img werkvorm how to            Ik liet in een aantal iteraties ook anderen als een flaneuse wandelen. Ik liet ze de buurt ontdekken met behulp van een zelf gekozen zintuig of woord zoals…. en ik testte dit met mensen die de buurt kenden of op een vreemde plek waren. Voor beide doelgroepen hielp het om met andere ogen en opmerkzamer door de buurt te wandelen. Ik vroeg om een aantal foto’s op te sturen samen met een stukje tekst of het te verbeelden in een tekening en dit uit te borduren waarbij er ruimte was om elkaars ervaringen te delen.             ',
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
            id: 'walktl',
            alignment: 'full',
            hidden: false,
            title: 'soesterkwartier',
            thinglink: 'https://www.thinglink.com/mediacard/1702291723679433508',
            image: '',
            description: 'Selectie resultaten van flaneuse (eigen ervaringen) en  zintuigwandelen in beeld (ervaringen van anderen) en teksten als…..            Overal zie je bouwbusjes. In de wijk wordt veel verduurzaamd, door zowel de woningbouw als door de bewoners van koopwoningen. Daarnaast worden de koopwoningen uitgebouwd en gemoderniseerd.             Aan de tuin kan je zien in welk deel van de wijk je bent. De huurwoningen leven mensen op straat in de meestal betegelde voortuinen of het is een parkeerplek voor de auto geworden. Bij de koopwoningen zijn de voortuinen groen en staan er fietsen. In de tuin zitten doen zij dan meestal inde achtertuin. +> evt koppelen aan hittestress kaart.             Er zijn veel mensen die een hond hebben. Hondepoep altijd ergernis nummer 1 in de wijk zie je minder op straat liggen. Er staan overal bakken met poepzakjes, niet iedereen gebruikt ze maar het is zeker verbeterd            Geuren die je ruikt, koffie branderij, het bos, heel soms een varkensstal, kerosine, bloesems in de lente, autospuiterij. (Atlas van de leefomgeving zegt niets over geur)            Berlijn:             img woorden van berlijn            img resultaten berlijn.              Hond als verbinderImg plus uitspraken            Resultaten van jenneke en monique van wandeling door de buurt            #soesterkwartier            ',
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
            id: 'analoog',
            alignment: 'left',
            hidden: false,
            title: 'analoog werken',
            image: '',
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
            id: 'borduur',
            alignment: 'left',
            hidden: false,
            title: 'borduren',
            image: '',
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
            id: 'mindmap',
            alignment: 'left',
            hidden: false,
            title: 'mindmaps',
            image: '',
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
            id: 'mindmapsk',
            alignment: 'right',
            hidden: false,
            title: 'mindmaps soesterkwartier',
            image: '',
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
            id: 'talk',
            alignment: 'left',
            hidden: false,
            title: 'walk en talk wat levert het op ',
            image: '',
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
            id: 'tracksk',
            alignment: 'right',
            hidden: false,
            title: 'tracks sk',
            image: '',
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
            id: 'reflectie',
            alignment: 'left',
            hidden: false,
            title: 'reflectie alg ',
            image: '',
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
            id: 'complex',
            alignment: 'left',
            hidden: false,
            title: 'complexiteit omarmen',
            image: '',
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
            id: 'conver',
            alignment: 'left',
            hidden: false,
            title: 'conversation piece ',
            image: '',
            description: 'als boek tonen en als tafelkleed',
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
            id: 'school',
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
            id: 'sterk',
            alignment: 'left',
            hidden: false,
            title: 'sterke vrouwen',
            image: '',
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
            id: 'vrouwsk',
            alignment: 'right',
            hidden: false,
            title: 'sterke vrouwen sk ',
            image: '',
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
            id: 'conclusie',
            alignment: 'center',
            hidden: false,
            title: 'conclusie',
            image: '',
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
            id: 'liter',
            alignment: 'center',
            hidden: false,
            title: 'literatuur',
            image: '',
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
            id: 'lexi',
            alignment: 'left',
            hidden: false,
            title: 'lexicon',
            image: '',
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
            id: 'colo',
            alignment: 'left',
            hidden: false,
            title: 'colofon ',
            image: '',
            description: 'of is de footer het colofon',
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
            id: 'zochtdeed',
            alignment: 'center',
            hidden: false,
            title: 'Abstract',
            image: '',
            description: 'Ik zocht naar manieren om gelijkwaardigheid in buurt te vergroten. Ik zocht naar nieuwe inzichten en doelgroepen om zo een een beter beeld van een burt te krijgen. Ik wilde de beleving van een buurt en de betekeis daarvan zichtbaar maken voor de bewoners zelf maar ook voor de organisaties/overheid die in de buurt werken. Ik ging op zoek naar stemmen die je normaal niet hoort, data die je normaal niet vindt. Daarvoor ontwierp ik werkvormen die vertragen om informatie over een buurt op te halen. Door Met aandacht en langdurig aanwezig zijn levert dat nieuwe informatie op op zo vroe ik mij af? De werkvormen gericht op ontdekken, refelcteren  co creeren en meerstemmigheid vond ik in een mix van slow design, creative placemaking en datafeminis. Ik vond een manier om buurtonderzoek te doen in vier fases, elke fase heeft haar eigen werkvormen. De vier fases zijn verkennen, verzamelen, verbinden, en verdiepen. Dit is een multilayere storytelling tool die ik in kan zetten. De werkvormen die daarin passen zijn zintuigelijk of embodied, wandelen observrern, fotograferen, luisteren slow datavisualisaeren,borduren en dat samen vormt een conversation piece waar alsmaar nieuwe informatie aan toegevoegd kan worden.Dat ziet er in een schema als volgt uit. Ik weet dat door het inzetten van wandelen als methode nuances vindt die helpen om een buurt te doorgrondenen wat er nodig is om verbinding en meestemmigheid tot stand te brengen. Ik doe dit om mijn  wijze met behulp van juist  subjectieve data een brdere context zichtbaar te maken van wat er speelt in een buurt en de betekenis ervan. Door dit met diverse doelgroepen daarop door te gaan ontstaat er een conversation piece waar aan voor geborduurd kan worden en steeds rijker wordt in meerstemmigheid en onontdekte verhalen. Vertragen is verminigvuldingen Door aandacht te besteden, en te reflecteren op wat er gaan de is, door de tijd te nemen tijdens het borduurproces wat gebeurt hier eigenlijk komen er nieuwe inzichten. Door deze te delen op ontmoetingsplaatsen voor verbndiing dmv textiel ateliers zijn de eeste stappen voor een gelijkwaardige buurt gezet. wat is gelijkwaardigheid wat betekent dat voor mij! lexicon toevoegen.  ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00
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
            description: '',
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00
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
            id: 'nieuw',
            alignment: 'left',
            hidden: false,
            title: ' ',
            image: '',
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
            id: 'verkenres',
            alignment: 'full',
            hidden: false,
            title: 'resultaat thinglink verkennen ',
            thinglink: 'https://www.thinglink.com/mediacard/1702291723679433508',
            image: '',
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
            id: 'opbouw',
            alignment: 'left',
            hidden: false,
            title: 'opbouw methode',
            image: 'images/werkwijze_slowdatavis.png',
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
            id: 'vertragen',
            alignment: 'left',
            hidden: false,
            title: 'vertragen is vermenigvuldigen',
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
            id: 'kopie',
            alignment: 'full',
            hidden: false,
            title: 'basis',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [5.38010, 52.15856],
                zoom: 14.99,
                pitch: 0.00,
                bearing: 0.0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
