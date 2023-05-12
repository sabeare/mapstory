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
            iframe: 'https://uploads.knightlab.com/scenevr/8134/94fc57b1/index.html',
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
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'instructie',
            alignment: 'center',
            hidden: false,
            title: 'leesinstructie',
            iframe: '',
            description: 'Je kunt deze publicatie op meerdere manieren lezen. Ten eerste door deze storymap te scrollen. Zo ontvouwt het hele onderzoek zich. Extra informatie is te vinden in de tabbladen onderin. Dit is ieder moment te raadplegen. Hierin vind je ook de inhoud van  de hele storymap waarmee je door het verhaal kunt hoppen. Maar ook algemene info zoals de samenvatting van deze publicatie, de bibliografie en het lexicon.              ',
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
            title: '',
            image: 'images/verkennen.png',
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
            image: 'images/palm.png',
            imageDescription:'In het hofje van de Palmstraat hebben de bewoners zelf afspraken gemaakt over het parkeren van auto"s', 
            description: 'Het Soesterkwartier is het gebied wat ik voor het ontwikkelen van mijn methode koos. Deze jaren dertig wijk ligt in Amerfsoort Het is mijn eigen leefomgeving. De nabijheid werkt als een voordeel om je er langdurig te verbinden, maar het is geen voorwaarde. Op deze plek komen veel maatschappelijke issues samen. Denk aan gentrificatie en de druk op de voorzieningen en groen ten koste van woningenbouw of het versterken van het wij-zij denken, polarisatie. <br><br>            Deze voormalige arbeiderswijk ligt “boven” het station en is zo’n 100 jaar oud. Vanwege het spoor heeft het Soesterkwartier een wat geïsoleerde ligging. Ondanks dat het dicht bij het centrum ligt, groeten de mensen elkaar hier op straat, alsof het een dorp is. De wijk bestaat uit meerdere buurten. De belangrijkste zijn: bloemen-, bomen- en rivierenbuurt.               ',
            location: {
                center: [5.35875, 52.15789],
                zoom: 16.00,
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
            id: 'vraag',
            alignment: 'left',
            hidden: false,
            title: 'onderzoeksvraag',
            image: 'images/slowdat.jpg',
            description: 'De hoofdvraag van het onderzoek is: <br><br>            Hoe kan ik slow datavisualisatie als methode inzetten om de beleving en de betekenis van een gebied zichtbaar te maken voor en met wijkmakers? <br><br>            Subvragen die ik me daarbij stelde zijn:<br><br> * Hoe is de methode slow datavisualisatie opgebouwd?   <br>        * Wat is slow in slow datavisualisatie?<br>           * Wat levert analoog werken mbt buurt onderzoek op?     <br>      * Hoe helpt subjectieve data en het inzetten van een conversation piece bij het adresseren van het belang van een gelijkwaardigere leefomgeving?             ',
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
            description: 'De mensen die ik tijdens mijn onderzoek tegenkwam waren allerlei “wijkmakers”. Ze noemden zichzelf: stadmaker, kwartiermaker, wijkwerker, sociaal architect, stedebouwkundige, urban designer, design antropoloog, omgevingspsycholoog, feministisch geograaf, beleidsmaker, landschapsarchitect, information designer of gewoon betrokken bewoner. <br><br>            Deze storymap is gemaakt voor deze “wijkmakers”, iedereen die zich inzet voor het gelijkwaardiger maken en verbeteren van de leefomgeving op een creatieve,  verbindende en tastbare manier.                       ',
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
            description: 'is een methode om slow research in een gebied te doen. Het beoogt niet alleen de visuele representatie van informatie gericht op de gebruiker, maar ook om de waarde te tonen van de context met behulp van subjectieve data en anekdotes door middel van een conversation piece. Slow datavisualisaties laten ruimte om je eigen verhaal te destilleren en aan te vullen. Het proces van slow datavisualisaties wordt (deels) met de hand uitgevoerd. n mijn geval door te borduren.  <br><br>          De opbouw van deze storymap is op basis van deze methode. Via de fases van verkennen, verbeelden en verdiepen neem ik je mee langs de opbouw van de methode, de werkvormen (links uitgelijnd) en de resultaten ervan in het Soesterkwartier (rechts uitgelijnd/fullwidth).             ',
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
            description: 'Het slow datavisualisatie proces bestaat uit drie fases namelijk: verkennen, verbeelden en verdiepen. Het begint met de verkening van een gebied door er regelmatig aanwezig te zijn, er doorheen te wandelen, te fotograferen, zintuigen te gebruiken en zo gegevens verzamelen. <br><br>  De volgende fase is het verbeelden. Door verbinding aan te gaan met betrokken wijkmakers, door te wandelen en gesprekken te voeren en dit te mappen. Om vervolgens deze informatie en mappings te onderzoeken en daarna te verbeelden in datavisualisaties. <br><br>            De laatste fase is verdiepen. Door met betrokkenen te reflecteren op de datavisualisaties ontstaan er gelaagde verhalen waarmee nieuwe inzichten zichtbaar worden. Deze inzichten worden tastbaar gemaakt in een conversation piece. Die alsmaar met andere betrokkenen ingezet kan worden om aanvullende informatie op te halen. Hiermee verdiept het proces steeds verder door meerstemmigheid en context ruimte te geven en zo de complexiteit omarmt en daarmee betekenis geven aan inzichten.           ',
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
            description: 'Slow datavisualisatie is een vorm van Slow research. Het gaat om betekenis geven aan het denken door verbinding, reflectie en het omarmen van complexiteit volgens Berg & Seeber in het boek The Slow Professor uit 2017. Bij Slow research gaat het om vertragen en gebruikt daarom embodied en/of analoge werkvormen tijdens het designproces om tot nieuwe inzichten te komen.  <br><br>           Het gaat wat mij betreft vooral om tijd en ruimte maken om te reflecteren en ten tweede om meer besef te krijgen in de complexiteit van mijn onderwerp en als laatste met dit onderzoek verbinding met de context tot stand te brengen. Met het streven om ongehoorde doelgroepen zichtbaar te maken en zo nieuwe inzichten voor het verbeteren van een gebied te vinden.             ',
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
            description: 'Slow datavisualisatie methode volgt de Slow Design principes. Deze zijn ontworpen door oprichter van SlowLab Amsterdam Carolyn F. Strauss en professor in Design Research Alastair Fuad-Luke. (2008). Zij noemen Slow Design zelf een vorm van creatief activisme en evaluatie tool die nieuwe waarden levert voor design in de verschuiving naar duurzaamheid door gebruik te maken van zowel kwantitatieve, kwalitatieve en intuïtieve beoordelingsmethodes. <br><br>De 6 principes zijn: onthullen (REVEAL), uitbreiden(EXPAND) reflecteren(REFLECT), verbinden(ENGAGE), participeren(PARTICIPATE) en ontwikkelen(EVOLVE). <br><br>             De Slow datavisualisatie methode past in de traditie van Slow Designers omdat het gericht is op het waarderen van kwalitatieve informatie en daar betekenis aan te geven. Met het doel om op die manier nieuwe inzichten te vergaren (onthullen) door te verbinden van betrokkenen met elkaar en de buurt, te participeren, reflecteren waardoor kennis zich steeds verder kan uitbreiden en ontwikkelen.                    ',
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
            description: 'Artists are as an antenna picking up weak signals of the future and bring it tot the surface. (sara Wookey)  <br><br>          In 2006 zag ik de dans performance Love’s geography van Sara Wookey in de Melkweg Amsterdam. Gebaseerd op de gelijknamige tekst van Peggy Phelan. Deze voorstelling is me goed bijgebleven, en als ik er nu naar kijk omdat zij heel goed haar lichaam en beweging gebruikt in de publieke ruimte.  Wookey haar werk is geïnspireerd op William H. Whyte die samen met Jane Jacobs de grondleggers zijn van placemaking. Hij onderzoek de menselijke dynamiek en was overtuigd dat je dat kan doen door het observeren hoe mensen de ruimte gebruiken.  <br><br>           Placemaking is zowel een filosofie en methode die wijkmakers betrekt bij de ontwikkeling van de leefomgeving. Het is gericht op observeren en te luisteren naar de gebruikers – de experts van die openbare ruimte. Met het doel om de kwaliteit van de openbare ruimte te verbeteren maar ook netwerkvorming, gevoel van eigenaarschap en verantwoordelijkheid over deze leefomgeving te bevorderen, ervaren dat de betrokken zelf invloed hebben op de kwaliteit ervan. (pps.org)  <br><br>          Slow datavisualisatie is een vorm van creatieve placemaking. Het zet creatieve en embodied werkvormen in om het observeren en luisteren te versterken. Met het doel om op deze manier nieuwe inzichten over een buurt op te halen bij betrokkenen. Door deze informatie ook zichtbaar te maken in iets tastbaars als een conversation piece kunnen vervolgens andere betrokkenen deze informatie verdiepen en zich daarmee ook verbinden aan de verbeteringen van de leefomgeving.              ',
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
            description: 'Data is the new oil (quote)<br><br>            Data feminism is een doel en een proces om vanuit intersectioneel feminisme te werken naar meer rechtvaardigheid in het groeiende veld van data science. Het gelijknamige boek is geschreven door C. D’Ignazio,  urban planner op het MIT en L. Klein, research professor in digital humanities lab en data science op Emory University. Volgens de schrijfsters gaat het over meer dan alleen gender. Het gaat om wie de machtsposities hebben we wie niet en hoe dat veranderen kan. Ze werken met 7 principes om verandering in de wereld aan te jagen en aan te tonen dat data over mensen gaat. <br><br>            De principes van data feminsm zijn: examine power, challenge power, elevate emotion and embodiement, rehtink binaries and hierarchies, embrace pluralism, consider context. Mak labor visible. (datafeminism p. 8-10)<br><br>            Met name de principes over waarde toekennen aan emotie en embodiment, omarmen van pluralisme en het beschouwen van context zijn principes die je ook terug ziet in mijn werk. <br><br>            Data in welke vorm dan ook is niet neutraal of objectief. Het is altijd belangrijk na te gaan wie heeft data verzameld en tot welk doel. Het is een product van ongelijke sociale verhoudingen. Door dit in ogenschouw te nemen kan slow datavisualisatie bijdragen aan de gelijkwaardigere en rechtvaardigere wereld.              ',
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
            description: 'De vertragende werkvormen die ik inzet voor het verzamelen en verbeelden van informatie zijn: wandelen, borduren en het tastbaar maken ervan in een conversation piece. In al deze werkvormen zit ook het embodied en zintuiglijke manier van onderzoeken. Het bied de mogelijkheid voor reflectie door langdurig bezig te zijn door bewust de informatie analoog te verwerken.  <br><br>           Gesprekken zijn persoonlijker als je met elkaar wandelt of borduurt en de tijd neemt voor reflecteren op wat er gezegd werd levert nieuwe inzichten. De betrokkenen  waren allen bereid om hun tijd hierin te steken en voelden zich gehoord omdat er letterlijk meer ruimte en tijd was om naar elkaar te luisteren. <br><br>            om nieuwe inzichten te krijgen over een locatie/gebied of buurt helpt het om creatieve en innovatieve werkvormen in te zetten. Iedere fase in het proces gebruikt variaties van het wandelen en borduren in combinatie met visualiseren door middel van mapping en/of fotografie. Maar ook het inzetten van workshops en het gebruik van digitale middelen dragen er aan toe bij.   <br><br>         In de verkennende en het begin van de verbeelden fase is het mogelijk om zelfstandig informatie op te halen. Maar om meerstemmigheid te benadrukken ligt de focus in de verbeeldende en verdiepende fase op participatieve en en co-creatie werkvormen toe te passen. We zijn in het werk in zijn algemeen zo gericht op efficiency gericht, dat we niet meer in de gaten hebben dat we zoveel betekenisvolle informatie over het hoofd zien. Deze werkvormen zijn juist bedoeld om door je langdurig aan een gebied te verbinden, met aandacht werkvormen uit te voeren en zo de beleving zichtbaar te maken en daar betekenis aan hechten. Vertragen is vermenigvuldigen dus.           ',
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
            description: 'Img: Walking is mapping with your feet (Lauren Elkin)<br><br>            Een flaneur is iemand die doelloos ronddwaalt. Diegene begrijpt de stad omdat hij die al wandelend memoriseert en een mate van onzichtbaarheid heeft om dat te doen.(Elkin p.7, 13) . Flâneuse is de titel van het boek van Lauren Elkin (2016) over hoe een vrouw past in het stadsgezicht. Dat is volgens haar meer dan een vrouwelijk vorm van flaneur. Het gaat volgens haar over iemand die gaat waar ze niet behoort te gaan, en al wandelend afstemt op het  creatieve potentieel van de stad (Elkin, p22).<br><br>            Ook neuroscienctist Shane O’mara schrijft in “in Praise of Walking” dat wandelen de beste manier is om een plek te leren kennen. De sfeer van een plek, de energie, het tempo. Te voet ben je gelijk ‘in touch’ met het stadsleven.<br><br>            Ik ging de straten van het Soesterkwartier bewandelen en observeren. Samen met mijn hond om een soort van onzichtbaarheid te creëren. Ondertussen fotografeerde ik de dingen die me opvielen. De informatie die het me gaf nam ik mee als bagage tijdens de gesprekken die ik later voerde met wijkmakers. <br><br>          Wandelen gaat over observeren en mappen van een plek, dat doe je niet alleen door te kijken maar juist om plek te ervaren en een gevoel te krijgen; daar gebruik je meerdere zintuigen voor. wandelen als een flaneuse is daarom een goede manier om informatie op te halen voor slow datavisualisaties.                       ',
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
            description: 'img werkvorm how to <br><br>            Ik liet in een aantal iteraties ook anderen als een flaneuse wandelen. Zij ontdekten de buurt met behulp van een zelf gekozen zintuig of een woord zoals “toegankelijkheid”. Ik testte dit met mensen die de buurt kenden of juist op een vreemde plek waren. Beide doelgroepen gaven aan door het zintuigwandelen met andere ogen en opmerkzamer door de buurt te wandelen en het vaker willen toepassen.<br><br>      Afhankelijk van de iteratie stuurden de participanten foto’s met aanvullende tekst terug. Of in andere iteraties testte ik ook het delen van de wandelervaringen naderhand met het uitborduren van de ervaringen in groepsverband. Om zo de uitwisseling en meerstemmigheid over het onderwerp gelijk onderling te laten delen.                        ',
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
            iframe: 'https://www.thinglink.com/mediacard/1702291723679433508',
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
            title: '',
            image: 'images/verbeelden.png',
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
            image: '',
            description: 'img instructie walk&talk <br><br>            Om verdere verbinding aan te gaan met de wijk en haar wijkmakers ontwierp ik de walk&talk methode. Ik benaderde drie wijkmakers voor een wandeling om mee te starten. Met een ieder maakte ik een wandeling. Zij bepaalden de route en we hadden een open gesprek met de vraag “Hoe gaat het met Soesterkwartier?”. Naderhand adviseerden zij mij voor nieuwe participanten om te benaderen. Ik kreeg op deze manier een goed inzicht in het netwerk van wie actief zijn in de wijk en hoe deze mensen met elkaar verbonden zijn. <br><br>            Ik merkte dat de participanten grotendeels betrokkenen zijn die al vaker te horen zijn in de wijk via de media en op het stadhuis. Maar ik sprak ook deelnemers die organisaties vertegenwoordigen met meer onzichtbare stemmen, zoals bijv. kinderen (kinderwijkraad) en ouderen met beginnende dementie (King Arthur groep). Via deze manier van werken kon ik relatief eenvoudig ook deze verborgen doelgroepen zichtbaar maken. <br><br>            De meeste wandelingen duurden langer anderhalf uur, sommige waren begrenst op een uur, maar dan had diegene vooraf al aangegeven beperkt tijd te hebben. De walk&talk methode is tijdsintensief en werkt alleen als je zelf bereid bent om te vertragen en te luisteren.<br><br>            Doordat het gesprek in de buitenruimte plaatsvindt dienen gespreksonderwerpen en voorbeelden zich als vanzelf aan. Een kapot bushokje levert meerdere verhalen over de buurt op. Dit maakt ook dat een gesprek heel naturel verloopt. Wat me verder opviel is dat er op deze manier ruimte is voor veel meer persoonlijkere gesprekken over hoe mensen in het leven staan en wat belangrijk voor hen is al dan niet in relatie tot de buurt. Wellicht komt het door de nabijheid als je met elkaar wandelt maar meestal niet oogcontact hebt.           ',
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
            description: 'Tijdens veel wandelingen met medebewoners kwam meerdere keren naar voren dat in het Soesterkwartier regelmatig meerdere generaties na elkaar in hetzelfde huis wonen. Dat zegt voor mij iets over de verbondenheid die zij voelen met die plek. In dit huisje woont mevrouw Verheuvel, ruim negentig jaar oud, al haar hele leven. Ze is de vierde generatie die in dit huis woont: ook haar ouders, grootouders en overgrootmoeder hebben hier gewoond.<br><br>           Ik hoorde dit verhaal tijdens de wandelingen door de buurt. Later sprak ik de zus van mevrouw Verheuvel hierover tijdens mijn bezoek aan een dagbestedingsgroep van beginnende dementerenden. Zij vertelde me dat haar overgrootmoeder weduwe werd en met haar kinderen dit huisje mocht betrekken in ruil voor onderhoud van de naast gelegen Joodse begraafplaats. Door deze collage als slow datavisualisatie toe te voegen aan de conversation piece kan ik deze verborgen verhalen teruggeven aan de buurt.           ',
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
            id: 'analoog',
            alignment: 'left',
            hidden: false,
            title: 'analoog werken',
            image: '',
            description: 'Het slow in slow datavisualisaties gaat niet alleen over wandelen en zo te vertragen om informatie op te halen. Het gaat ook over analoog werken tijdens het designproces. Wat is het belang hiervan vroeg ik me af<br><br>            Graphic novel auteur Lynda Barry stelt dat door met de hand te schrijven, te tekenen of te maken, creative concentration ontstaat. Het gaat er hierbij niet om of een tekening mooi of lelijk is, maar om een state of mind die juist ontstaat als je analoog werkt. Met open aandacht kun je zowel het geheel als de details beschouwen (Barry, 2014). <br><br>            Giorgia Lupi is een information designer die veel van haar datavisualisaties met de hand schetst. Volgens haar zorgt dit voor langer tijd spenderen met de inhoud ervoor dat je beter begrijpt hoe de structuur van de data is en hoe je deze kunt organiseren en visualiseren. Zo ontstaat er meer ruimte voor contextuele details. Zonder het gebruik van digitale techniek en standaard grafieken word je bovendien meer uitgedaagd om andere manieren van visualiseren te vinden. Lupi zegt hierover: Hoe complexer de vraagstukken, hoe belangrijker het is om unieke, contextuele, persoonlijke verhalen en anekdotische details toe te voegen. Zo zorg je volgens haar voor rijkere data en meer verbonden kennis. Op deze manier is het mogelijk om een laag dieper te gaan en zo onvoorziene informatie te ontsluiten (Lupi, 2017).<br><br>            Volgens information designer Federica Fragapane krijg je betekenisvollere verhalen als je verbinding aangaat met de context van je onderzoek. Het gaat niet alleen om communicatie maar ook een stem geven aan mensen die niet vanzelfsprekend een platform hebben om dat te doen. (Fragapane, 2021) <br><br>            Het boek Record, Map and Capture (2022) van borduurexpert Jordan Cunliffe gaat over geborduurde datavisualisaties. Cunliffe schrijft, documenteert, tekent en ontwerpt analoog. “Waarom werkt dat zo goed? Heb je ook ervaring met digitaal?”, vroeg ik haar op Instagram. Ze antwoordde me: “Ik heb het nodig dat alles fysiek voor me ligt. Je kunt "in het echte leven" het zo om je heen ordenen; dat kan ik niet zo op een scherm reproduceren!” Volgens Cunliffe geef je een stem aan wat verborgen bleef, door letterlijk tijd te spenderen aan het onderwerp, Het gaat volgens haar over nadenktijd en diepere betekenis geven aan persoonlijke, subjectieve verhalen. Terwijl Cunliffe de herhalende beweging van het borduren maakt, komt ze in een probleemoplossende staat, heeft ze ontdekt. (Cunliffe, 2022) <br><br> Mijn ervaringen komen ook overeen met wat activist-met-naald-en-draad Sara Vrugt zegt. Ze ziet haar werk als een pleidooi om steeds beter te kijken, te reflecteren én zo impact te maken. In essentie wil ze een heel nieuwe wereld borduren, waarin meer ruimte is voor waarachtigheid (Vrugt, 2022).       ',
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
            description: 'Borduren is een manier van analoog werken om het slow in de slow datavisualisaties extra te benadrukken. Maar het is meer dan dat. Borduren is het middel waar alles samenkomt. <br><br>            Ten eerste het helpt om te reflecteren op de opgehaalde informatie in de verkennende fase en zo nieuwe ontdekkingen te doen en deze te visualiseren.<br><br>             Ten tweede leent borduren zich goed om in te zetten als verbinder in community projecten waar voortgebouwd wordt op de zaken die in de wijk spelen. <br><br>            Ten derde door het inzetten van de reeds geborduurde slow datavisualisaties als conversation piece, in dit geval een tafelkleed ruimte creëert voor het verdiepen van de informatie met nieuwe aanvullingen en meerstemmigheid.  ',
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
            description: 'De slow datavisualisatie hierboven laat zien naar welke scholen de kinderen uit het Soesterkwartier gaan. Het blijkt dat de meerderheid van de kinderen buiten de wijk naar school gaat (groen). Is dat erg? In veel van de walk&talk interviews die ik maakte kwam deze scholenproblematiek als onderwerp ter sprake.<br><br>            Sommige vertelden over de afwegingen die ze gemaakt hadden over wel of niet in de buurt naar school gaan. Voor meerdere was het grove taalgebruik van kinderen op de buurtscholen een reden om naar andere scholen buiten de buurt te gaan kijken.<br><br>            Een van de wandelaars, die ontevreden is over de buurtscholen, stelde voor om alle scholen sluiten en één nieuwe school op nieuwe locatie inclusief nieuw docenten- en directie team te ontwikkelen.<br><br>            Ook vertelde iemand over de komst van een internationale school in één van de scholen vanwege de gunstige ligging bij het station en de internationale scholen in de omgeving allemaal vol zitten. Volgens haar was dit positief omdat de internationale school een samenwerking met alle scholen aangaat en zo het Engels onderwijs op alle buurtscholen kan verbeteren.<br><br>            Het is nog onduidelijk wat deze oplossingen teweeg kunnen brengen. Ik maakte een dataset over welke scholen de lagere schoolleerlingen uit de wijk Soesterkwartier bezoeken met gegevens via verkregen via basisscholen overzicht van allecijfes.nl (allecijfers.nl/basisscholen-overzicht/amersfoort/). Ik gebruikte deze data om ieder kind te eren met een geborduurd knoopje. Tijdens het borduren reflecteerde ik op de informatie en quotes die ik had gekregen tijdens de wandelinterviews. <br><br>            De scholen kampen met de gevolgen van sociaal-economische segregatie. De kinderen van vooral hoger opgeleide ouders gaan buiten de wijk naar school, waardoor de scholen in de wijk in een alsmaar grotere vicieuze cirkel terecht zijn gekomen. Er is meer gelaagde informatie nodig, dan alleen cijfers van het aantal kinderen om oplossingen te vinden om alle kinderen in deze wijk dezelfde schoolkansen te bieden.            ',
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
            id: 'mindmap',
            alignment: 'left',
            hidden: false,
            title: 'mindmaps',
            image: '',
            description: 'Na iedere walk&talk interview maakten de participanten een mindmap  (een handgetekende kaart ) als een samenvatting van de wandeling die we samen maakten. Ik nam altijd een etui met tekenspullen mee. Voor sommige was het best een drempel om te tekenen. Ik moedigde ze aan door te zeggen dat een route tekenen en kleine teksten erbij oke zijn of icoontjes te gebruiken.<br><br>            Soms volgde een soort samenvattend gesprek, soms waren de deelnemers heel geconcentreerd alleen bezig. Na een aantal iteraties te hebben gedaan koos ik er bewust voor om niet met de inhoud van de mapping te bemoeien om het zoveel mogelijk de samenvatting van deze participant te laten zijn. Vervolgens schreef ik thuis mijn eigen reflectie uit al dan niet aangevuld online informatie van diegene. <br><br>            Evt. Uitleg wat is een mindmap….           Evt. Eerdere iteraties getest met studenten van Aeres hogeschool           ',
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
            id: 'track',
            alignment: 'left',
            hidden: false,
            title: 'track tracks',
            image: '',
            description: 'img geborduurde tracks<br><br>            Iedere walk&talk interview trackte ik met de OSM tracker app. Deze informatie verzamelde ik met QGIS. Ik was benieuwd of daar ook informatie uit op te halen viel. Welke delen van de wijk wandelden we en wat zijn de onontdekte delen.           ',
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
            description: 'img tracks Soesterkwartier <br><br>            Wat opvalt is dat er veel langs de groengordel van het Soesterkwatier wordt gewandeld. Hier zijn de stoepen breed en is het aangenaam om langs te gaan. Volgens O’Mara vinden mensen groene ruimte het meest enjoyable om te wandelen.<br><br>            Wat verder opvalt is dat de nieuwbouw delen worden overgeslagen, dat voelt niet als soesterkwartier met uitzondering van de wagenwerkplaats waarmee de wijk vanaf het eerste begin mee verbonden is. (verder uitleg nodig)<br><br>            De bloemen en de rivierenbuurt worden vaak beide als tegenstelling van elkaar bewandeld. Deze tegenstelling komt ook vaak in de verhalen terug (img bijnamen in het soesterkwartier)            Verder uitwerken met meer show!            ',
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
            id: 'sterk',
            alignment: 'right',
            hidden: false,
            title: 'sterke vrouwen',
            image: '',
            description: 'Borduren inzetten om te verbinden en te verdiepen. Om ook doelgroepen die normaal niet zo zichtbaar zijn ben ik een community borduurproject gestart. De locatie heb ik bewust gekozen voor het wijkmuseum Soesterkwartier. Dit is een klein museum gerund door vrijwilligers toe aan een nieuwe impuls om voor bestaansrecht. Zij hebben verbinding met de buurt hoog in het vaandel staan en om hier een verbindende plek van verleden en toekomst te maken op de manier van bijv. de voorkamer (workshop daar ruimtekoers/voorkamer half mei, daarna verder uitwerken) <br><br>            Voor het borduurproject heb ik gekozen voor het borduren van sterke vrouwen. Vrouwen. Tijdens een bezoek aan Brussel een vergelijkbaar project bezocht.(verder uitwerken)<br><br>              Dit triggerde mij en mijn overall goal te streven naar een meer gelijkwaardigere leefomgeving. Ik ontwikkelde een eenmalig workshop op internationale vrouwendag. En benaderde mijn inmiddels opgebouwde netwerk in het Soesterkwartier met de volgende tekst.<br><br>              Wist je dat niet één straat in het Soesterkwartier naar een vrouw vernoemd is. Rondom onze wijk zullen vele nieuwe straten en pleinen komen om in te verdwalen of doorheen te gaan. Daarom is het nu een uitgelezen kans om een begin te maken met eerlijke verdeling. <br><br>              Op 8 maart 2023 is het internationale vrouwendag. Dit is de start van de aanleg van een verzameling van straatnamen met alleen sterke vrouwen. We hebben er al een aantal uitgezocht die een link met Amersfoort hebben. Maar je mag ook je eigen voorstel doen. Neem dan een portretfoto van diegene mee. <br><br>              Dit leverde een enthousiaste groep dames op en een zeer inspirerende avond (Quotes toevoegen )               ',
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
            id: 'sterk2',
            alignment: 'right',
            hidden: false,
            title: 'nog meer sterke vrouwen',
            image: '',
            description: 'Vervolgens ben ik ook een aantal keer als vrijwilliger deze workshop gaan doen met beginnende dementerende dames van de King Arthur groep in de wijk onder het mom van sterke vrouwen borduren sterke vrouwen en samen werken we aan een collectief geheugen. Dit leverde de volgende resultaten op (img beeld van de borduursels en verhalen toevoegen.              ',
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
            title: '',
            image: 'images/verdiepen.png',
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
            id: 'talk',
            alignment: 'right',
            hidden: false,
            title: 'walk en talk wat levert het op ',
            image: 'images/radarchart_walk&talk.png',
            description: 'Ik maakte een analyse van de walk&talk gesprekken die ik had. Ik gebruikte daarvoor de mindmaps die deelnemers als samenvatting hadden gemaakt en mijn eigen geschreven reflecties.  ',
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
            description: 'Slow research, analoog werken door te wandelen en te borduren is een manier van vertragen, te luisteren en om ruimte te maken voor diepere reflecties en verbondenheid en zo dus meer recht doen aan de complexiteit van de materie. Een deep map, als topografie van zo"n plek bevat al de hier bovengenoemde elementen en is daarom een goede vorm om deze verhalen te tonen omdat de wereld waarin we leven zich niet laat reduceren tot een ordelijk simpel verhaal.  ',
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
            id: 'vertraag',
            alignment: 'left',
            hidden: false,
            title: 'vertragen is vermenigvuldigen ',
            image: '',
            description: 'Afb verbinding, reflectie en complexiteit<br><br>            Wat is slow in slow datavisualisatie?<br><br>            Slow is het sleutelwoord in deze methode. Vertragen? Het gaat om het waarderen van aandacht. Het gebruiken van zintuigen en analoge werkvormen gebruiken. Het gaat om Verbinding aangaan met het gebied, de betrokkenen en zo betere inzichten krijgen in de context. Vertragen helpt om te reflecteren, wat gebeurt er eigenlijk wat zien we in de gauwigheid hoe we werken vaak over het hoofd. Slow datavisualisaties borduren helpt om de tijd te nemen en te reflecteren. Als laatste onderdeel is verdiepen en de complexiteit ervan te omarmen. Het gaat niet om tot één oplossing te komen maar juist de meerstemmigheid en de complexiteit van het dagelijkse leven te tonen.           ',
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
            id: 'verbor',
            alignment: 'left',
            hidden: false,
            title: 'verdiepen met borduren',
            image: '',
            description: 'Hiermee kun je eerder opgehaalde informatie delen. Bijvoorbeeld tijdens een community borduurproject. Maar juist ook om bewust in te zetten om specifiek onderwerpen te adresseren bij een specifieke doelgroep. Zo dient de conversation piece als een multilayered storytelling tool. Want door het inzetten ervan is ook ruimte bieden aan verdere aanvullingen en nieuwe lagen van informatie. Waardoor het proces van reflectie, verbinden en verdiepen zich herhaald en daarmee de conversation piece een steeds rijkere gelaagdheid en meerstemmigheid van de wijk verbeeld. ',
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
            title: 'scholen verdiepen',
            image: '',
            description: 'Verslag bespreking scholen kwestie (half mei)',
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
            title: 'sterke vrouwen en aanbieden gemeente ',
            image: '',
            description: 'design aanbieden aan gemeente juli 23',
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
            description: 'Hoe kan ik slow datavisualisatie als methode inzetten om de beleving en de betekenis van een gebied zichtbaar te maken voor en met wijkmakers?<br><br>            Beantwoorden van de subvragen die ik me daarbij stelde zijn: <br>  Hoe is de methode slow datavisualisatie opgebouwd? <br> Schema en uitleg<br><br>            Wat is slow in slow datavisualisatie?<br>            Verkennen- wandelen, met het doel om observeren nieuwe inzichten verkrijgen <br><br>            Verbeelden- mappen, analoog werken =reflecteren en verbinden, tastbaar maken plus mensen verbinden <br><br>            Verdiepen- borduren, context en complexiteit beter snappen <br><br>            Waarom subjectieve data belangrijk mbt buurt onderzoek/betrokkenen<br><br>           Nieuwe inzichten, andere dingen zien door langdurig aanwezig zijn,  meerstemmigheid, omarmen complexiteit.<br><br>            Welke nieuwe inzichten zijn door het toepassen slow datavis methode in het Soesterkwartier ontdekt?<br><br>            Democratie doe je met je handen en Behoefte aan community.<br><br>            Observeren en luisteren maar ook zelf aan community building doen om mensen te verbinden met elkaar en de buurt en het delen van deze inzichten zodat er een niuwe buurtbeweging kan ontstaan  <br><br>           Er is nog veel meer……         ',
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
    ]
};
