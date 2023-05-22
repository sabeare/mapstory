var config = {
    style: 'mapbox://styles/sabeare/cjdapwozeb1tg2roervfarft0',
    accessToken: 'pk.eyJ1Ijoic2FiZWFyZSIsImEiOiJjbGdnam12aXMwY2M2M2NwOGQ5YzhuN2FiIn0.XV3OFsZ65Niqc9F5ulg6Ig',
    showMarkers: false,
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
            id: 'instructie',
            alignment: 'center',
            hidden: false,
            title: 'Leesinstructie',
            iframe: '',
            description: 'Deze storymap komt het beste tot zijn recht op een computerscherm. Ik maakte dit als publicatie over participatief en ontwerpend wijkonderzoek in het kader van mijn master Design Research aan de Willem de Kooning Academy in Rotterdam. <br><br>            De opbouw is als volgt: het begint met de conclusie om een algeheel idee te krijgen. Vervolgens geef ik een beknopte uitleg over de ontwikkelde methode. Daarna toon ik aan de hand van de conversation piece, het geborduurde tafelkleed, de iteraties en wat dat heeft opgeleverd. Ook ga ik dieper in op de rol van borduren aan de hand van het community borduurproject “sterke vrouwen”. Wat ik opzette in de wijk het Soesterkwartier. <br><br>         Deze storymap is al scrollend naar benden te lezen. Zo ontvouwt het hele onderzoek zich. Een andere optie is om via het tabblad: inhoud, gericht naar de gewenste hoofdstukken te hoppen. In de andere tabbladen onderin is aanvullende informatie te vinden, zoals een samenvatting, het lexicon, de bibliografie en het colofon. Deze tabbladen zijn ieder moment te raadplegen. <br><br>             Baukje Rienks             ',
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
            id: 'conclusie',
            alignment: 'center',
            hidden: false,
            title: 'Conclusie',
            image: 'images/werkwijze_slowdatavis.png',
            description: 'In dit onderzoek is gezocht naar antwoord op de vraag: “Hoe kan ik slow datavisualisatie als methode inzetten om de beleving en de betekenis van een wijk zichtbaar te maken voor en met wijkmakers?” Hiervoor is de slow datavisualisatie methode ontwerpend ontwikkeld om wijkonderzoek te doen die andere inzichten over een gebied zichtbaar maken, met het doel om bij te dragen aan gelijkwaardigere leefomgeving. <br><br>             Het resultaat is een conversation piece die is opgebouwd via verkennen, verbeelden en verdiepen en zorgt voor reflectie op en verbinding met de leefomgeving.<br><br>             Het slow in de slow datavisualisatie methode is terug te zien in de gebruikte werkvormen, zoals wandelen en borduren. Tijdens de verkenningsfase is wandelen in co-creatie op verschillende manieren ingezet met het doel om te observeren, zintuigen te gebruiken en langdurig aanwezig te zijn. Dit heeft inzichten opgeleverd die niet op andere manieren verkregen kunnen worden. <br><br>             Borduren is op drie manieren belangrijk geweest in het vertragen in dit onderzoek. Ten eerste door mappings, anekdotes en datavisualisaties al bordurend uit te werken met de bedoeling om dieper te kunnen reflecteren op de context. Ten tweede heeft borduren bijgedragen aan het verbinden van participanten door middel van een community art project. Als laatste speelt borduren een rol in het tastbaar maken van de conversation piece. Dit heeft ruimte gemaakt om meerstemmigheid te faciliteren en de complexiteit te omarmen van de onderwerpen en zo bijgedragen aan het verdiepen van de context. <br><br>            De methode is in co-creatie ontwikkeld met wijkmakers uit de wijk het Soesterkwartier in Amersfoort. Wijkmakers zijn diegene die zich inzetten voor het gelijkwaardiger maken en verbeteren van de leefomgeving op een creatieve, verbindende en tastbare manier. Dit betreft een breed spectrum van participanten van betrokken burger tot urban designer.<br><br>Uit dit onderzoek is gebleken dat de slow datavisualisatie methode bijdraagt aan gelaagde meerstemmige informatie en daarmee nieuwe inzichten kunt delen en daarmee vertragen is vermenigvuldigen.               ',
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
            alignment: 'center',
            hidden: false,
            title: 'Slow Datavisualisatie',
            image: 'images/slowdata.svg',
            description: 'Slow Datavisualisatie is een methode om slow research in een gebied te doen. Het beoogt niet alleen de visuele representatie van informatie gericht op de gebruiker, maar ook om de waarde te tonen van de context met behulp van subjectieve data en anekdotes door middel van een conversation piece. Slow datavisualisaties laten ruimte om je eigen verhaal te destilleren en aan te vullen. Het proces van slow datavisualisaties wordt (deels) met de hand uitgevoerd. In mijn geval door te borduren.',
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
            id: 'verkenimg',
            alignment: 'left',
            hidden: false,
            title: 'Verkennen',
            image: 'images/verkennen.png',
            description: '<br><br>De methode start met het Verkennen van een gebied. Je verbindt je voor langere tijd aan een gebied en de wijkmakers die daar wonen en of werken. Door alleen en met anderen daar te gaan wandelen, te observeren, te fotograferen en bewust de zintuigen inzetten. Zo krijg je inzichten over dat gebied die je niet op een andere manier had kunnen ervaren.',
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
            id: 'verbeeldimg',
            alignment: 'left',
            hidden: false,
            title: 'Verbeelden',
            image: 'images/verbeelden.png',
            description: '<br><br>De volgende stap is het verbeelden van deze informatie en subjectieve data in mappings en slow datavisualisaties. Door het verbeelden te vertragen door deze uit te borduren ontstaat er meer ruimte voor reflectie. Dit is van belang om nieuwe inzichten over de beleving van het gebied te verkrijgen. Het borduren zet ik zowel in om individueel als in een communityproject met verschillende participanten wijkmakers zoals bewoners, stedenbouwers of vrouwen met beginnende dementie.  ',
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
            alignment: 'left',
            hidden: false,
            title: 'Verdiepen',
            image: 'images/verdiepen.png',
            description: '<br><br> Het laatste onderdeel is het verdiepen van de opgehaalde kennis door middel van een conversation piece. In dit geval een geborduurd tafelkleed. Dit maakt de informatie tastbaar en is steeds weer in te zetten bij andere doelgroepen om ook die stemmen een plek te geven en de onderwerpen te verrijken. Deze meerstemmigheid en geeft ruimte aan vaak de complexiteit van de onderwerpen en geeft zo diepere betekenis. ',
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
            id: 'wijk',
            alignment: 'right',
            hidden: false,
            title: 'Het Soesterkwartier',
            image: 'images/kastanje.png',         
            imageDescription:'Drie jaar geleden starte ik, baukje Rienks/ sabeare deze actie. We maakten met de buurt een gehaakte sjaal voor de zieke kastanje. Met een succesvollle afloop. De monumentale boom mocht toch blijven staan.', 
            description: 'Dit was mijn eerste wijkactie, drie jaar geleden. Het doet me goed dat mensen genieten van "onze" kastanje. Voor mij was het ook het startsein om het Soesterkwartier als het gebied te kiezen om mijn methode voor participatief wijkonderzoek te ontwikkelen. <br><br>            Deze jaren dertig wijk ligt in Amerfsoort Het is mijn eigen leefomgeving. De nabijheid werkt als een voordeel om je er langdurig aan te verbinden, maar het is geen voorwaarde. <br><br>Op deze plek komen veel maatschappelijke issues samen. Denk aan gentrificatie en de druk op de voorzieningen en het groen ten koste van woningenbouw. Aanverwant hieraan is het versterken van het wij-zij denken, polarisatie. <br><br>            Deze voormalige arbeiderswijk ligt “boven” het station en is zo’n 100 jaar oud. Vanwege het spoor heeft het Soesterkwartier een wat geïsoleerde ligging. Ondanks dat het dicht bij het centrum ligt, groeten de mensen elkaar hier op straat, alsof het een dorp is. De wijk bestaat uit meerdere buurten. De belangrijkste zijn: bloemen-, bomen- en rivierenbuurt.               ',
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
            image: 'https://s3.amazonaws.com/cloud.kumu.io/accounts/320185/705557/9fc1b60a-dd98-4b07-864d-6013d0c08ac2.png',
            imageDescription:'werkvorm zintuigwandelen', 
            description: 'Ik liet in een aantal iteraties ook anderen als een flaneuse wandelen. Zij ontdekten de buurt met behulp van een zelf gekozen zintuig of een woord zoals “toegankelijkheid”. Ik testte dit met mensen die de buurt kenden of juist op een vreemde plek waren. Beide doelgroepen gaven aan door het zintuigwandelen met andere ogen en opmerkzamer door de buurt te wandelen en het vaker willen toepassen.<br><br>      Afhankelijk van de iteratie stuurden de participanten foto’s met aanvullende tekst terug. Of in andere iteraties testte ik ook het delen van de wandelervaringen naderhand met het uitborduren van de ervaringen in groepsverband. Om zo de uitwisseling en meerstemmigheid over het onderwerp gelijk onderling te laten delen.                        ',
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
            id: 'blauw',
            alignment: 'right',
            hidden: false,
            title: 'Blauw',
            image: 'images/blauw.jpg',
            imageDescription: '"Het oude buurthuis "De Sleutel" waar nu een ontmoetings- en activiteitencentrum zit. Voor de toekomst van de wijk is dit een plek waar mensen elkaar blijven ontmoeten." (afbeelding door M. Tinabu)',
            description: '"Deze blauwe elementen hebben de route van mijn wandeling bepaald: Ik heb gekozen voor het thema kleur en daarbij voor mijn lievelingskleur blauw gekozen. Vaak wandel ik mijn vaste rondje, maar door nu het thema te volgen, ben ik toch op andere plekken beland. Aan het begin wist ik niet hoe mijn wandeling eruit zou gaan zien omdat alle opties in principe nog open waren. Een hele leuke ervaring en ga zeker ook nog een keer een ander thema te pakken😊. Manon" <br><br>Door het bewust inzetten van je zintuigen ontdek je nieuwe dingen zelfs als je in de wijk woont. Het buurthuis de Sleutel is één van de plekken waar ik later het community borduurproject "sterke vrouwen" ben gestart met beginnende dementerende vrouwen. ',
            location: {
                center: [5.35272, 52.16010],
                zoom: 17.86,
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
            id: 'rafel',
            alignment: 'right',
            hidden: false,
            title: 'Rafelrandjes',
            image: 'images/reliefs.jpg',
            imageDescription: '"oud relief  op verborgen plekken in de wijk(afbeelding door C. van der Geest)"',
            description:'"Ik heb me gericht op gevoel/structuur.  Tijdens het wandelen viel het contrast tussen nieuw en oud me erg op. De bomen in onze wijk zijn oud met een grove structuur in de bast. Het gras is geen eentonige sprietenmat, maar er zitten mos en plantjes in verstopt die je van veraf niet ziet. Bakstenen hebben beschadigingen en brokkelen af, er zijn nog veel oude muurreliefs bewaard gebleven die een beetje verstopt zijn en niet opvallen langs grote wegen. Het verleden is tastbaar. <br>            Onder onze voeten zijn er structuren die ons de weg wijzen. Omdat we niet meer goed zien, of omdat we de stad niet kennen en het centrum niet zien.<br>            Het moderne leven brengt koude materialen de wijk in. Gladde auto"s, sterke ijzeren omheiningen. Maar nieuwe stenen blijken ook weerloos en krijgen een zacht karakter door de natuur die zelfs op de kleinste plekken wil groeien. groeten Chantal" <br><br> Naast dat het gebruik van zintuigen je anders laat kijken, helpen deze zintuigwandelingen ook om inzicht te krijgen wat wijkmakers belangrijk vinden om te delen over de wijk.', 
            location: {
                center: [5.37950, 52.15899],
                zoom: 16.24,
                pitch: 28.86,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
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
            id: 'walktalk',
            alignment: 'left',
            hidden: false,
            title: 'Walk&talk',
            image: 'images/walk&talk.png',
            description: 'Om verdere verbinding aan te gaan met de wijk en haar wijkmakers ontwierp ik de walk&talk methode. Ik benaderde drie wijkmakers voor een wandeling om mee te starten. Met een ieder maakte ik een wandeling. Zij bepaalden de route en we hadden een open gesprek met de vraag “Hoe gaat het met Soesterkwartier?”. Naderhand adviseerden zij mij voor nieuwe participanten om te benaderen. Ik kreeg op deze manier een goed inzicht in het netwerk van wie actief zijn in de wijk en hoe deze mensen met elkaar verbonden zijn. <br><br>            Ik merkte dat de participanten grotendeels betrokkenen zijn die al vaker te horen zijn in de wijk via de media en op het stadhuis. Maar ik sprak ook deelnemers die organisaties vertegenwoordigen met meer onzichtbare stemmen, zoals bijv. kinderen (kinderwijkraad) en ouderen met beginnende dementie (King Arthur groep). Via deze manier van werken kon ik relatief eenvoudig ook deze verborgen doelgroepen zichtbaar maken. <br><br>            De meeste wandelingen duurden langer anderhalf uur, sommige waren begrenst op een uur, maar dan had diegene vooraf al aangegeven beperkt tijd te hebben. De walk&talk methode is tijdsintensief en werkt alleen als je zelf bereid bent om te vertragen en te luisteren.<br><br>            Doordat het gesprek in de buitenruimte plaatsvindt dienen gespreksonderwerpen en voorbeelden zich als vanzelf aan. Een kapot bushokje levert meerdere verhalen over de buurt op. Dit maakt ook dat een gesprek heel naturel verloopt. Wat me verder opviel is dat er op deze manier ruimte is voor veel meer persoonlijkere gesprekken over hoe mensen in het leven staan en wat belangrijk voor hen is al dan niet in relatie tot de buurt. Wellicht komt het door de nabijheid als je met elkaar wandelt maar meestal niet oogcontact hebt.           ',
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
            id: 'sterk',
            alignment: 'full',
            hidden: false,
            title: 'Sterke vrouwen',
            image: '',
            description: 'selectie sterke vrouwen ',
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
            id: 'wijk',
            alignment: 'right',
            hidden: false,
            title: 'wijkmuseum',
            image: 'images/wijkmuseum.png',
            imageDescription: 'wijkmuseum, het gebouw is geschonken door corporatie Portaal bij het 100 jarig bestaan van deze huizen',
            description: 'Tijdens één Walk&Talk interview sprak ik met de voorzitter van het wijkmuseum Soesterkwartier. Zij heeft zich ook sterk gemaakt bij de gemeente voor de financiering voor de herinrichting van de Noordewierweg. <br><br>Onze wandeling eindigden we in het Wijkmuseum zelf. Bij de entree loop je een huis binnen zoals het honderd jaar geleden rook en eruit zag. Achterin is echter een moderne multifunctionele ruimte voor bijeenkomsten en wisselende exposities.  <br><br>Na overleg is het mogelijk om op internationale vrouwendag, 8 maart 2023 om het museum te gebruiken voor een community borduurworkshop Sterk Vrouwen. Het museum is gericht op het verleden van de wijk levend te houden en verbinding met de buurt tot stand te brengen. Het project Sterke Vrouwen sluit goed bij het laatste doel aan.  ',
            location: {
                center: [5.37172, 52.15847],
                zoom: 17.99,
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
            id: 'straat',
            alignment: 'right',
            hidden: false,
            title: 'straatnamen',
            image: '',
            imageDescription: 'Ik ben van de kaart',
            description: 'Niet één straat in het Soesterkwartier is naar een vrouw vernoemd. Gemiddelde in Nederlandse steden is het rond de  vijftien procent. Rondom Het Soesterkwartier zullen de komende jaren vele nieuwe straten en pleinen komen. Daarom is het nu een uitgelezen kans om een begin te maken met een eerlijke verdeling. Dit is de reden om het community borduurproject Sterke Vrouwen op te zetten.  <br><br>Ik raakte hiertoe geïnspireerd door de brieven die mensen tijdens mijn eerste iteratie: “ik ben van de kaart” mij schreven. In meerdere brieven kwam de ongelijkwaardige situatie voor vrouwen in de publieke ruimte naar voren. Hierop besloot ik het boek invisible women van schrijfster C.C. Perez te lezen om meer te weten te komen over de bias en hoe vrouwen worden buitengesloten, ook in de stedelijke leefomgeving. <br><br>Vervolgens bezocht ik in september 2022 de "matrimonium dagen" in Brussel. Hier had ik afgesproken met feministe en grafische designer C. Allard van Klär graphics. Zij drukte samen met andere deelnemers ansichtkaarten van bekende Brusselse dames (https://www.instagram.com/datadelles/) om aandacht te vragen voor een eerlijkere straatnamen verdeling.   ',
            location: {
                center: [5.37172, 52.15847],
                zoom: 17.99,
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
            imageDescription: 'video of the booklet sterke vrouwen', 
            description: 'Ik ontwikkelde een workshop om uit te voeren op internationale vrouwendag. Dit was de start van de aanleg van een bibliotheek met sterke vrouwen uit het Soesterkwartier, Amersfoort, Nederland en Internationaal. Het doel om de gemeente uit te dagen om het straatnamen beleid gelijkwaardiger voor vrouwen en genderminderheden te maken.  <br><br> Ik benaderde via mijn inmiddels opgebouwde netwerk in het Soesterkwartier en via de website van internationale vrouwendag met de volgende tekst: <br><br> “Op 8 maart 2023 is het internationale vrouwendag. Dit is de start van de aanleg van een verzameling van straatnamen met alleen sterke vrouwen. We hebben er al een aantal uitgezocht die een link met Amersfoort hebben. Maar je mag ook je eigen sterke vrouw portretten meenemen”. <br><br> Er kwamen zeventien vrouwen borduren van begin twintig tot achter in de zestig. Het werd een gezellige avond met veel ruimte voor ontmoetingen en verbinding. <br><br>  Sommige borduurden de vrouwen die ik vooraf had geselecteerd, andere gaven de voorkeur aan om haar eigen moeder of zus te borduren. Mooi dat sterke vrouwen juist ook dichtbij kunnen zijn en niet per se iemand met een publieke functie. <br><br>De avond verliep zeer succesvol en vele vroegen om een vervolg tijdens de avond en ook in de mailtjes na de workshop bleek de behoefte om door te gaan.     ',
            location: {
                center: [5.37172, 52.15847],
                zoom: 17.99,
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
            id: 'slowr',
            alignment: 'left',
            hidden: false,
            title: 'slow research',
            image: '',
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
            iframe:'https://www.youtube.com/embed/31PUM6cd8Fw',
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
            id: 'vraag',
            alignment: 'left',
            hidden: false,
            title: 'Onderzoeksvraag',
            image: 'images/slowdat.jpg',
            imageDescription: 'quote en een datavisualisaties over de leeftijdsopbouw in het Soesterkwartier.<br><br>',
            description: 'De hoofdvraag van het onderzoek is: <br><br>            Hoe kan ik slow datavisualisatie als methode inzetten om de beleving en de betekenis van een gebied zichtbaar te maken voor en met wijkmakers? <br><br>            Subvragen die ik me daarbij stelde zijn:<br><br> * Hoe is de methode slow datavisualisatie opgebouwd?   <br>        * Wat is slow in slow datavisualisatie?<br>           * Wat levert borduren en mbt participatief wijkonderzoek op?     <br>      * Hoe helpt subjectieve data en het inzetten van een conversation piece bij het adresseren van het belang van een gelijkwaardigere leefomgeving?             ',
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
        
    ]
};
