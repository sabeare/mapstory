var config = {
    style: 'mapbox://styles/sabeare/cli6zn62202qs01qyhghphbos',
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
    footer: '',
    chapters: [
        {
            id: 'welkom',
            alignment: 'center',
            hidden: false,
            title: 'Welkom',
            image: 'images/borduurt.jpg',
            description: 'Deze publicatie in de vorm van een storymap is gemaakt voor <em>wijkmakers</em>: iedereen die zich inzet voor het gelijkwaardiger maken en verbeteren van de lokale leefomgeving, op een creatieve, verbindende en tastbare manier. Deze publicatie komt het beste tot zijn recht op een computerscherm.  <br><br>            Ik maakte deze publicatie over participatief en ontwerpend wijkonderzoek in het kader van mijn master Design Research aan de Willem de Kooning Academy in Rotterdam. Ik hoop je te kunnen inspireren om in je werk te vertragen om zo andere inzichten over een gebied te onthullen en in kaart te kunnen brengen.<br><br>            Ga je mee op reis? We vertrekken bij de conclusie om een algeheel idee te krijgen. Vervolgens geef ik een beknopte uitleg over de door mij ontwikkelde en toegepaste slow datavisualisatie methode. Daarna toon ik aan de hand van de conversation piece, het geborduurde tafelkleed, de iteraties en een aantal verhalen uit het Soesterkwartier. Als laatste ga ik dieper in op de rol van borduren aan de hand van het community borduurproject “sterke vrouwen”, welke ik opzette. <br><br>            Deze storymap is al scrollend naar beneden te lezen. Zo ontvouwt het hele onderzoek zich. Een andere optie is om via de hyperlinks in de tekst of via het tabblad: ‘Inhoud’ gericht naar de gewenste hoofdstukken te gaan. In de andere tabbladen onderin is aanvullende informatie te vinden, zoals een samenvatting, het colofon, de bibliografie en het lexicon. Deze tabbladen zijn ieder moment te raadplegen. <br><br>            Amersfoort, juni 2023 <br>Baukje Rienks                                   ',
            location: {
                center: [5.36808, 52.16647],
                zoom: 8.75,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'amersfoort',
                    opacity: 1,
                    }
            ],
            onChapterExit: [
                {
                    layer: 'amersfoort',
                    opacity: 0
                    }
            ]
        },
        {
            id: 'vrouw',
            alignment: 'full',
            hidden: false,
            title: 'Soesterkwartier | Sterke vrouw Nel',
            image: 'images/nel.svg',
            description: '                  ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 12.00,
                pitch: 13.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'amersfoort',
                    opacity: 1,
                    }
            ],
            onChapterExit: [
                {
                    layer: 'amersfoort',
                    opacity: 0
                    }
            ]
        },
        {
            id: 'conclusie',
            alignment: 'center',
            hidden: false,
            title: 'Conclusie',
            image: 'images/conclusie.jpg',
            imageDescription:'Detail van de geborduurde versie van de Slow datavisualisatie methode', 
            description: 'In dit onderzoek zocht ik naar het antwoord op de vraag: <em>Hoe draagt de slow datavisualisatie methode bij aan het zichtbaar maken van beleving en de betekenis van een wijk voor en met wijkmakers?</em> Hiervoor deed ik ontwerpend onderzoek en ontwikkelde zo de slow datavisualisatie methode in de Amersfoortse wijk het Soesterkwartier. Met deze methode zocht ik naar manieren om andere inzichten over het gebied zichtbaar maken, met als doel om zo bij te dragen aan een gelijkwaardigere leefomgeving.  <br><br>            Het resultaat is een conversation piece die dient als een multilayered storytelling tool.  Deze conversation piece is via de fases verkennen, verbeelden en verdiepen tot stand gekomen. Het zorgt voor verbinding van wijkmakers met de leefomgeving, het versterken van reflectie en omarmen van de complexiteit op de thema s die spelen in een wijk. <br><br>             Het <em>slow</em> uit slow datavisualisatie is terug te zien in de gebruikte werkvormen, zoals wandelen en het analoog verbeelden door te borduren. Activiteiten die bewust vertragen. Tijdens de verkenningsfase is wandelen op verschillende manieren ingezet met als doel om te observeren, zintuigen te gebruiken en langdurig aanwezig te kunnen zijn. Dit heeft inzichten opgeleverd die op andere manieren niet naar boven waren gekomen. <br><br>            Borduren is op drie manieren belangrijk geweest bij het vertragen in dit onderzoek. Ten eerste door mappings, anekdotes en datavisualisaties al bordurend uit te werken met de bedoeling om dieper te kunnen reflecteren op de context. Ten tweede heeft het samen borduren van dit community project bijgedragen aan het verbinden van participanten. Als laatste speelt borduren een rol in het tastbaar maken van de conversation piece. Dit heeft ruimte gemaakt om meerstemmigheid te faciliteren en de complexiteit van de onderwerpen te omarmen. Op deze manieren heeft het borduren bijgedragen aan het verdiepen van de context. <br><br>            De methode is in co-creatie ontwikkeld met wijkmakers uit de Amersfoortse wijk het Soesterkwartier. Wijkmakers zijn diegene die zich inzetten voor het gelijkwaardiger maken en verbeteren van de leefomgeving op een creatieve, verbindende en tastbare manier. Dit betreft een breed spectrum van participanten: van betrokken burgers tot urban designers. <br><br>            Uit mijn onderzoek blijkt dat de slow datavisualisatie methode wel degelijk effectief bijdraagt aan gelaagde meerstemmige informatie en dat je door het toepassen van deze methode nieuwe inzichten kunt delen. Hieruit blijkt dat vertragen vermenigvuldigen is.           ', 
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
            id: 'methode',
            alignment: 'center',
            hidden: false,
            title: 'Methode | Slow Datavisualisatie',
            image: 'images/slowdata.svg',
            imageDescription:'Schema Slow datavisualisatie ontwikkeld door Baukje Rienks',
            description: 'Slow datavisualisatie is een vorm van <a href="#slowr">slow research</a> gebruik makend van <a href="#slowd">slow design</a> principes. Slow datavisualisaties laten ruimte voor meerstemmigheid en geven ruimte om je eigen verhalen te destilleren en aan te vullen. Ik heb mijn Slow Datavisualisatie methode ontwerpend ontwikkeld om participatief wijkonderzoek te doen. Met deze methode kun je, door je langdurig aan een wijk en de wijkmakers te verbinden, verborgen informatie zichtbaar maken. Ik heb meerdere iteraties met diverse wijkmakers in het Soesterkwartier gedaan. Deze waren gericht op verbinding, reflectie en het omarmen van de complexiteit van de context van de wijk.   <br><br>             Het resultaat is een conversation piece. In dit geval een geborduurd tafelkleed, welke de waarde van die context toont met behulp van subjectieve data en anekdotes. Slow datavisualisaties laten ruimte voor meerstemmigheid en je eigen verhalen te destilleren en aan te vullen. <br><br>            Het slow datavisualisatie proces bestaat uit drie fases namelijk: <a href="#verkenimg">verkennen</a>, <a href="#verbeeldimg">verbeelden</a> en <a href="#verdiepimg">verdiepen</a>. In iedere fase staat een andere tool centraal. Namelijk: wandelen, borduren en de conversation piece             ',
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
            alignment: 'center',
            hidden: false,
            title: 'Methode | Verkennen',
            image: 'images/verkenimg.svg',
            imageDescription:'Geborduurde plattegrond van de Bloemenbuurt in Amersfoort', 
            description: 'De methode start met het verkennen van het gebied. Ik heb mij voor langere tijd verbonden aan de wijk het Soesterkwartier en de wijkmakers die daar wonen en/of werken. Dit heb ik gedaan door alleen en met anderen daar te gaan wandelen, te observeren, te fotograferen en daarbij bewust de zintuigen in te zetten. Zo heb ik verrassende en bijzondere inzichten over de wijk gekregen die ik op andere manieren niet had kunnen ervaren.',
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
            alignment: 'center',
            hidden: false,
            title: 'Methode | Verbeelden',
            image: 'images/verbeeldimg.svg',
            imageDescription: 'Leeftijdsopbouw in het Soesterkwartier, tastbaar geborduurd met kraaltjes en op Dahlia`s ',
            description: 'De tweede stap is het verbeelden van de vergaarde informatie en subjectieve data in mappings en slow datavisualisaties. Door het verbeelden bewust te vertragen door middel van borduren, ontstaat er meer ruimte voor reflectie. Dit is van belang om zodoende nieuwe inzichten over de beleving van de wijk te verkrijgen. Het borduren zette ik zowel individueel in als samen, in een community project met verschillende participanten, wijkmakers zoals bewoners, stedenbouwers of vrouwen met beginnende dementie. Dit laatste leidde tot bijzondere ontmoetingen, gesprekken en verhalen.   ',
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
            id: 'verdiepimg',
            alignment: 'center',
            hidden: false,
            title: 'Methode | Verdiepen',
            image: 'images/verdiepimg.svg',
            imageDescription:'Deelnemers van het community borduurproject <em>Sterke Vrouwen</em> in gesprek rondom de conversation piece; het geborduurde tafelkleed', 
            description: 'Het laatste onderdeel is het verdiepen van de opgehaalde kennis door samen met <em>wijkmakers</em> te borduren rondom de conversation piece. Voor mijn project heb ik gekozen voor een geborduurd tafelkleed. Dit maakt de informatie niet alleen tastbaar, maar ook meerdere malen inzetbaar. Een tafelkleed ligt letterlijk te midden van de groep en is steeds weer in te zetten bij andere doelgroepen. Op deze manier geeft het tafelkleed ruimte aan ieders stem om zo de slow datavisualisaties ook letterlijk te verrijken. Deze meerstemmigheid laat tegelijkertijd de complexiteit van de onderwerpen zien en geeft zo diepere betekenis. ',
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
            id: 'kleedimg',
            alignment: 'full',
            hidden: false,
            title: 'Methode | Verdiepen | Tafelkleed als conversation piece',
            iframe: '',
            image: 'images/tafelkleed_quick.jpg',
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
            title: 'Methode | Verdiepen | Conversation piece ',
            image: 'images/joke.jpg',
            imageDescription:'Het geborduurde tafelkleed als Conversation piece, ingezet tijdens het community borduurproject <em>Sterke Vrouwen</em> ', 
            description: 'Naast de methode die ik ontwerpend ontwikkelde heb ik als resultaat een conversation piece  geborduurd. De conversation piece wordt in gezet om samen met <em>wijkmakers</em> de opgehaalde informatie te verdiepen. Dit is het voorlopige eindresultaat van de wandel en borduur iteraties die ik in de wijk deed. Deze conversation piece is als een topografie van dat gebied, de Amersfoortse wijk het <a href="#wijk">Soesterkwartier</a>. <br><br>            Deze conversation piece kan steeds weer ingezet worden om de informatie te delen en daarmee te verdiepen, als een multilayered storytelling tool. Het is daarom een goede vorm om de verhalen uit de wijk te tonen, omdat de wereld waarin we leven zich niet laat reduceren tot een ordelijk en simpel verhaal. <br><br>            Een multilayered storytelling tool is het inzetten van de slow datavisualisatie methode om ruimte te bieden aan verdere aanvullingen en nieuwe lagen van informatie. Waardoor het proces van verbinden,  reflectie en verdiepen van complexiteit zich herhaalt en daarmee de conversation piece een steeds rijkere gelaagdheid en meerstemmigheid van een wijk toont.                          ',
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
            id: 'kastanje',
            alignment: 'right',
            hidden: false,
            title: 'Soesterkwartier | De kastanje',
            image: 'images/kastanje.png',         
            imageDescription:'De reddingsactie van een monumentale boom is na drie jaar nog niet vergeten.  ', 
            description: 'Het redden van een monumentale boom was mijn eerste wijkactie, drie jaar geleden. We maakten met de buurt een gehaakte sjaal voor de zieke kastanje aan de Ijsselstraat in Amersfoort. Met een succesvolle afloop! De monumentale boom mocht blijven staan. Het doet me goed dat mensen genieten van <em>onze</em> kastanje. Voor mij was het ook het startsein om het Soesterkwartier als het gebied te kiezen om mijn methode voor participatief wijkonderzoek te ontwikkelen.  <br><br>              Deze jaren dertig wijk ligt in Amersfoort en is mijn eigen leefomgeving. De nabijheid werkt als een voordeel om je er langdurig aan te verbinden, maar het is geen voorwaarde. <br><br>            In deze wijk komen veel maatschappelijke issues samen. Denk aan gentrificatie en de druk op de voorzieningen en het groen ten koste van woningbouw. Aanverwant hieraan is het toenemen van het wij-zij denken, de polarisatie binnen de wijk. <br><br>                Deze voormalige volksbuurt ligt <em>boven</em> het treinstation van Amersfoort en is zo’n 100 jaar oud. Vanwege het spoor heeft het Soesterkwartier een wat geïsoleerde ligging. Ondanks dat de wijk dicht bij het centrum ligt, groeten de mensen elkaar hier op straat, alsof het een dorp is. De wijk bestaat uit meerdere buurten. De belangrijkste zijn de: bloemen-, bomen- en rivierenbuurt.                  ',
            location: {
                center: [5.37209, 52.16003],
                zoom: 18.10,
                pitch: 50.00,
                bearing: 0.00 
            },
            setMarker: true,
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
            title: 'Methode | Verkennen | Flaneuse',
            image: 'images/walking.jpg',
            imageDescription: 'Geborduurde quote uit het boek Flaneuse van Lauren Elkin (p21.).', 
            description: 'Een flaneur is manspersoon die doelloos ronddwaalt. Diegene begrijpt de stad omdat hij die al wandelend memoriseert en een mate van onzichtbaarheid heeft om dat te doen (Elkin p.7, 13). Flâneuse is de titel van het boek van Lauren Elkin (2016) over hoe een vrouw past in het stadsgezicht. Dat is volgens haar meer dan een vrouwelijke vorm van flaneur. Volgens haar is het een vrouwpersoon, die al wandelend gaat waar ze niet behoort te gaan en daarbij afstemt op het creatieve potentieel van de stad (Elkin, p22). <br><br>            Ook neurowetenschapper Shane O’Mara schrijft in zijn boek <em>In Praise of Walking</em> dat wandelen de beste manier is om een plek te leren kennen. De sfeer van een plek, de energie, het tempo. Te voet ben je gelijk <em>in touch</em> met het stadsleven. <br><br>            In de verkenningsfase ging ik de straten van het Soesterkwartier bewandelen en observeren. Dit deed ik samen met mijn hond om zo een soort van onzichtbaarheid als een flaneuse te creëren. Ondertussen fotografeerde ik de dingen die me opvielen zoals de vele aannemersbusjes voor verbouwingen of het <a href="#autopark">parkeren van auto’s </a> in de voortuin. De informatie die het me gaf nam ik mee als bagage tijdens de gesprekken die ik later voerde met <em>wijkmakers</em>. br><br>            Wandelen gaat over observeren en <em>mappen</em> van een plek. Dat doe je niet alleen door te kijken. Om de plek in zijn geheel te ervaren gebruik je daarbij ook andere zintuigen, zoals ruiken en voelen. Wandelen als een flaneuse is daarom een goede manier om informatie op te halen voor slow datavisualisaties.                                  ',
            location: {
                center: [5.37171, 52.15778],
                zoom: 15.22,
                pitch: 0.00,
                bearing: 0.00
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'flaneuse3',
                    opacity: 1,
                    }
             ],
            onChapterExit: [
                {
                    layer: 'flaneuse3',
                    opacity: 0
                    }
            ]
        },
        {
            id: 'autopark',
            alignment: 'full',
            hidden: false,
            title: 'Soesterkwartier | Parkeren in de voortuin',
            image: 'images/autopark.svg',
            imageDescription: 'Selectie van auto’s geparkeerd in de voortuinen in het Soesterkwartier. ',
            description: ' Door regelmatig door de wijk te flaneren en daarbij mijn zintuigen in te zetten verzamelde ik informatie die je niet via reguliere databronnen te weten kan komen. Wat bijvoorbeeld opvallend is in de bloemen- en bomenbuurt van het Soesterkwartier, is dat de voortuinen vaak volledig betegeld zijn. Waarbij het bovendien regelmatig voorkwam dat de auto erin geparkeerd stond.           ',
            location: {
                center: [5.37171, 52.15778],
                zoom: 15.22,
                pitch: 0.00,
                bearing: 0.00
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'flaneuse3',
                    opacity: 1,
                    }
             ],
            onChapterExit: [
                {
                    layer: 'flaneuse3',
                    opacity: 1
                    }
            ]
        },
        {
            id: 'zintuig',
            alignment: 'left',
            hidden: false,
            title: 'Methode | Verkennen | zintuigwandelen',
            image: 'images/zintuigwandeling.svg',
            imageDescription:'Eerste versie van de iteratie voor wijkmakers om een wandelroute door de wijk te bepalen op basis van zintuigen. ', 
            description:'Ik liet in een aantal iteraties ook <a href="#blauw">andere <em>wijkmakers</em></a> als een flaneuse wandelen. Zij ontvingen van mij de hierboven getoonde flyer om zelf de buurt te verkennen. Dit deden ze met behulp van een zelfgekozen zintuig of een woord zoals “toegankelijkheid”. Ik merkte dat het gebruik van zintuigen de voorkeur had. De woorden vonden de deelnemers te abstract. <br><br>            De meeste deelneemsters van deze iteratie kwamen uit de wijk zelf maar ik heb ook een aantal mensen gevraagd om mee te doen die het gebied nauwelijks kennen. Beide doelgroepen gaven aan dat ze door het zintuigwandelen zowel met andere ogen als opmerkzamer door de buurt wandelden en dit vaker willen toepassen. <br><br>            Ook testte ik verschillende manieren van het delen van de wandelervaringen. Dit deed ik door de personen naderhand hun ervaringen in groepsverband te laten delen en zo naar elkaar over te dragen. Een andere optie was om de deelneemsters individueel foto’s, video of audio met aanvullende tekst terug te laten sturen. Bij deze optie kooos iedereen voor foto’s als informatiedrager.                         ',
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
                 
            ],
            onChapterExit: [
                 
            ]
        },
        {
            id: 'blauw',
            alignment: 'right',
            hidden: false,
            title: 'Soesterkwartier | Blauw',
            image: 'images/blauw.jpg',
            imageDescription: '"Het oude buurthuis "De Sleutel" waar nu een ontmoetings- en activiteitencentrum zit. Voor de toekomst van de wijk is dit een plek waar mensen elkaar blijven ontmoeten." (afbeelding door Manon)',
            description:'Na het ontvangen van de opdracht zintuigwandelen koos Manon ervoor om de route te bepalen aan de hand van de kleur blauw. Ze ging alleen op pad. Ze stuurde me naderhand per mail vijf afbeeldingen en de volgende tekst. <br><br>             "Deze blauwe elementen hebben de route van mijn wandeling bepaald: Ik heb gekozen voor het thema kleur en daarbij voor mijn lievelingskleur blauw gekozen. Vaak wandel ik mijn vaste rondje, maar door nu het thema te volgen, ben ik toch op andere plekken beland. Aan het begin wist ik niet hoe mijn wandeling eruit zou gaan zien omdat alle opties in principe nog open waren. Een hele leuke ervaring en ga zeker ook nog een keer een ander thema te pakken😊. Manon" <br><br>          Door het bewust inzetten van je zintuigen ontdek je nieuwe dingen. Zelfs als je al in de wijk woont. Het buurthuis de Sleutel is één van de plekken waar ik later het community borduurproject <a href="#sterk">Sterke Vrouwen</a> ben gestart met beginnend dementerende vrouwen.            ', 
            location: {
                center: [5.35268, 52.16018],
                zoom: 17.99,
                pitch: 72.50,
                bearing: 0.00       
            },
            setMarker: true,
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
            title: 'Soesterkwartier | Rafelrandjes',
            image: 'images/reliefs.jpg',
            imageDescription:'Reliëf de "Vuurspuwende draak" van Gerard Hordijk op een schakelstation aan de Amsterdamseweg in Amersfoort. (afbeelding door Chantal)', 
            description: 'Ook Chantal ging alleen op pad. Ze stuurde me naderhand per mail een aantal afbeeldingen en de volgende tekst. <br><br> “Ik heb me gericht op gevoel/structuur. Tijdens het wandelen viel het contrast tussen nieuw en oud me erg op. De bomen in onze wijk zijn oud met een grove structuur in de bast. Het gras is geen eentonige sprietenmat, maar er zitten mos en plantjes in verstopt die je van veraf niet ziet. Bakstenen hebben beschadigingen en brokkelen af, er zijn nog veel oude muur reliëfs bewaard gebleven die een beetje verstopt zijn en niet opvallen langs grote wegen. Het verleden is tastbaar. <br>            Onder onze voeten zijn er structuren die ons de weg wijzen. Omdat we niet meer goed zien, of omdat we de stad niet kennen en het centrum niet zien.<br>            Het moderne leven brengt koude materialen de wijk in. Gladde auto’s, sterke ijzeren omheiningen. Maar nieuwe stenen blijken ook weerloos en krijgen een zacht karakter door de natuur die zelfs op de kleinste plekken wil groeien. Groeten Chantal" <br><br> Naast het feit dat het gebruik van zintuigen je anders laat kijken, helpen deze zintuigwandelingen ook om inzicht te krijgen in wat <em>wijkmakers</em> belangrijk vinden om te delen over de wijk. Chantal heeft zich bijvoorbeeld sterk gemaakt voor het “tegelwippen” in de Dollardstraat in de rivierenbuurt. Waarbij de gemeente nieuwe stoeptuintjes aanlegt op voorwaarde dat de bewoners deze stoeptuintjes mee onderhouden.    ', 
            location: {
                center: [5.37807, 52.15916],
                zoom: 17.99,
                pitch: 52.50,
                bearing: -136.00
            },
            setMarker: true,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tuin',
            alignment: 'right',
            hidden: false,
            title: 'Soesterkwartier | De Voortuin',
            image: 'images/beeldjes.jpeg',
            imageDescription: 'Een tuin vol met beeldjes in de Sint Bonifaciusstraat. (afbeelding door Jenneke)', 
            description:'Jenneke heeft geen directe binding met het Soesterkwartier. Ze werkt bij de gemeente Amsterdam en is fotograaf. Ze is op mijn uitnodiging door de wijk gaan flaneren. Dit is was Jenneke terugmailde: <br><br>            “Ik vond het Soesterkwartier een mooie buurt, maar er viel mij maar 1 ding echt op: de voortuintjes en de voorliefde voor tegels, soms vermengd met kabouters en plantenbakken met (fake) planten. Het was maart, maar het was niet moeilijk om de barbecueënde bewoners hierbij in te beelden.<br><br>            Mijn oog is meer gericht op de natuur; vandaar toch ook foto’s van het mos en de verdroogde hortensia’s. De speeltjes van de bewoners zijn sociologisch interessanter, maar ze maken mij een beetje depressief. Ze doen mij namelijk denken aan de BBB, de ‘eigen ik eerst-mentaliteit, de ‘fuck de natuur’ houding.<br><br>            De contradictie: gezellig hamburgers eten met de buren in mijn plastic stoel op mijn betonnen tegels versus een plekje met groen voor de merel, de egel en de vlinder. Tegelijkertijd leidt het gebruik van de voortuin hopelijk tot gezelligheid en is het goed voor de sociale cohesie in een buurt, maar om dat te kunnen beoordelen was het nog te koud. <br><br> Misschien is dit te negatief gedacht door een ‘elitaire’ stedeling, maar de uitkomst van de provinciale verkiezingen – een week later – was helaas een bevestiging van dit gevoel. Jenneke Visser<br><br>            Aan de inrichting van de tuin kan je zien in welk deel van de wijk je bent. In de bloemenbuurt leven de bewoners in de zomer veel buiten in de vaak volledig betegelde voortuinen.                   ', 
            location: {
                center: [5.37103, 52.15786],
                zoom: 18.29,
                pitch: 52.00,
                bearing: -80.80
            },
            setMarker: true,
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
            title: 'Methode | Verkennen | Walk&talk',
            image: 'images/walk&talk.svg',
            imageDescription:'Eva Kail is in Wenen expert op het gebied van vrouwvriendelijke stadsplanning. Daarnaast de opzet van een Walk&Talk interview. ', 
            description: 'Om verbinding aan te gaan met de wijk en haar <em>wijkmakers</em> ontwierp ik vervolgens de Walk&Talk interview methode. Ik benaderde drie <em>wijkmakers</em> om mee te starten. Met elk van hen maakte ik een wandeling. De Walk&Talk methode is bewust een gesprek tussen twee personen, gericht op het met volle aandacht luisteren naar de wijkmaker. De deelnemer bepaalde al wandelend de route en we hadden vaak hele open en persoonlijke gesprekken met de vraag “Hoe gaat het met Soesterkwartier?” Naderhand adviseerden zij mij over nieuwe participanten om te benaderen. Ik kreeg op deze manier een goed inzicht in het <a href="#net">netwerk</a> van wie actief zijn in de wijk en hoe deze mensen met elkaar verbonden zijn. <br><br>            De meeste wandelingen duurden langer dan anderhalf uur. Sommigen waren begrensd op een uur, maar dan had diegene vooraf al aangegeven beperkt tijd te hebben. Ik merkte doordat de deelnemers zelf de tijd bepaalden en vaak daarvoor de tijd namen, zich echt gehoord voelden door deze manier van interviewen. De Walk&Talk methode is tijdsintensief en werkt alleen als je zelf bereid bent om te vertragen en te luisteren<br><br>            Doordat het gesprek in de buitenruimte plaatsvond dienen gespreksonderwerpen en voorbeelden zich als vanzelf aan. Een kapot bushokje levert meerdere verhalen over de buurt op. Dit maakt ook dat een gesprek heel naturel verloopt. Wat mij verder opviel, is dat er op deze manier ruimte is voor veel meer persoonlijkere gesprekken. Over hoe mensen in het leven staan en wat - al dan niet in relatie tot de buurt - belangrijk voor hen is. Wellicht komt dit door de nabijheid tot elkaar als je samen wandelt maar er tegelijkertijd meestal geen oogcontact is.                                 ',
            location: {
                center: [5.35415, 52.16008],
                zoom: 14.29,
                pitch: 13.00,
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
                layer: 'tracks-color',
                opacity: 1,
                }
            ],
            onChapterExit: [
                {
                layer: 'tracks-color',
                }
            ]
        },
        {
            id: 'netwerk',
            alignment: 'right',
            hidden: false,
            title: 'Methoden | Verkennen | Netwerk',
            image: 'images/netwerk.png',
            imageDescription:'netwerkschema van Walk&Talk deelnemers',
            description: 'Ik merkte dat de vele <em>wijkmakers</em> die ik sprak, grotendeels betrokkenen zijn die al vaker te horen zijn in de wijk via de media en op het stadhuis. Maar ik sprak ook <em>wijkmakers</em> die organisaties vertegenwoordigen met meer onzichtbare doelgroepen, zoals bijvoorbeeld kinderen (kinderwijkraad) en ouderen met beginnende dementie (King Arthur groep). Via de Walk&Talk interviews kon ik mijn eigen netwerk in de wijk uitbreiden, wat mij verder hielp om contact te krijgen met de meer verborgen doelgroepen.                   ',
            location: {
                center: [5.36276, 52.16034],
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
                layer: 'tracks-color',
                opacity: 1,
                }
            ],
            onChapterExit: [
                {
                layer: 'tracks-color',
                opacity: 0
                }
            ]
        },
        {
            id: 'talk',
            alignment: 'right',
            hidden: false,
            title: 'Soesterkwartier | Walk&talk, wat levert het op ',
            image: 'images/radarchart_walk&talk.png',
            description: 'Ik heb een analyse van de gevoerde Walk&Talk gesprekken gemaakt. Hiervoor gebruikte ik de <a href="#mental">mental maps</a> die deelnemers als samenvatting hadden gemaakt en door mijzelf geschreven reflecties. Ik ordende de onderwerpen waar over gesproken is. Deze waren vervolgens in vier categorieën in te delen: jongeren, gentrificatie, democratie en vergroenen. Vervolgens maakte ik een score indeling om het visueel uit te kunnen zetten in een grafiek gekoppeld aan hoe lang iemand in het Soesterkwartier woont. <br><br>            Je ziet dat diegenen die het langst in het Soesterkwartier wonen het meest over jongeren en gentrificatie hebben. Zij ondervinden de veranderingen het sterkst. Ook is vergroenen voor hen een belangrijk onderwerp. Dat is niet heel raar aangezien deze personen in de bloemenbuurt wonen en hier weinig groen in de omgeving is. Diegenen die het kortst in de wijk wonen, wonen in de rivierenbuurt of op de wagenwerkplaats. Zij richten zich meer op gentrificatie en democratie en verbinding in de buurt.                       ',
            location: {
                center: [5.36276, 52.16034],
                zoom: 15.00,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'tracks-color',
                opacity: 1,
                }
            ],
            onChapterExit: [
                {
                layer: 'tracks-color',
                opacity: 0
                }
            ]
        },
        {
            id: 'analoog',
            alignment: 'left',
            hidden: false,
            title: 'Methode | Verbeelden | Analoog werken',
            image: '',
            description: 'Wat is <em>slow</em> in <a href="#methode"> slow datavisualisaties </a> vroeg ik me af. Het <em>slow</em>  in slow datavisualisaties gaat niet alleen over wandelen en zo te vertragen om informatie op te halen. Het <em>slow</em>, is er juist ook om de opgehaalde informatie te <a href="#verbeeldimg">verbeelden</a> op een analoge manier om zo ruimte te maken voor reflectie en het verdiepen van de complexiteit van de context. Borduren is de overtreffende trap van vertragen en past daarom helemaal in dit plaatje.  <br><br>            Graphic novel auteur Lynda Barry stelt dat door met de hand te schrijven, te tekenen of te maken, creative concentration ontstaat. Het gaat er hierbij niet om of een tekening mooi of lelijk is, maar om een state of mind die juist ontstaat als je analoog werkt. Met open aandacht kun je zowel het geheel als de details beschouwen (Barry, 2014).  <br><br>            Giorgia Lupi is een information designer die veel van haar datavisualisaties met de hand schetst. Volgens haar zorgt dit voor langere tijd spenderen met de inhoud ervoor dat je beter begrijpt hoe de structuur van de data is en hoe je deze kunt organiseren en visualiseren. Zo ontstaat er meer ruimte voor contextuele details. Zonder het gebruik van digitale techniek en standaard grafieken word je bovendien meer uitgedaagd om andere manieren van visualiseren te vinden. Lupi zegt hierover: “Hoe complexer de vraagstukken, hoe belangrijker het is om unieke, contextuele, persoonlijke verhalen en anekdotische details toe te voegen”. Zo zorg je volgens haar voor rijkere data en meer verbonden kennis. Op deze manier is het mogelijk om een laag dieper te gaan en zo onvoorziene informatie te ontsluiten (Lupi, 2017). <br><br>            Volgens information designer Federica Fragapane krijg je betekenisvollere verhalen als je verbinding aangaat met de context van je onderzoek. Het gaat niet alleen om communicatie maar ook om een stem te geven aan mensen die niet vanzelfsprekend een platform hebben om dat te doen. (Fragapane, 2021)                   ',
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
            id: 'stapel',
            alignment: 'right',
            hidden: false,
            title: 'Soesterkwartier | Gestapelde huizen',
            image: 'images/huisverheuvel.png',
            description: 'Tijdens veel Walk&Talk interviews kwam naar voren dat er in het Soesterkwartier regelmatig meerdere generaties na elkaar in hetzelfde huis wonen. Dat zegt voor mij iets over de verbondenheid die zij voelen met die plek. Al haar hele leven woont mevrouw Verheuvel, ruim negentig jaar oud, in dit huisje. Ze is de vierde generatie die in dit huis woont: ook haar ouders, grootouders en overgrootmoeder hebben hier gewoond.  <br><br>           Ik hoorde dit verhaal tijdens de wandelingen door de buurt. Later sprak ik hierover de zus van mevrouw Verheuvel, tijdens mijn bezoek aan een dagbestedingsgroep van beginnende dementerenden. Zij vertelde mij dat haar overgrootmoeder weduwe werd en met haar kinderen dit huisje mocht betrekken in ruil voor het onderhoud van de naast gelegen Joodse begraafplaats. Door deze anekdote als slow datavisualisatie toe te voegen aan de conversation piece heb ik dit verhaal zichtbaar gemaakt en kan ik dit delen met andere <em>wijkmakers</em> in het Soesterkwartier.                     ',
            location: {
                center: [5.37023, 52.15690],
                zoom: 18.50,
                pitch: 55.50,
                bearing: -139.20
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            setMarker: true,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 
            ],
            onChapterExit: [
                 
            ]
        },
        {
            id: 'schoolimg',
            alignment: 'full',
            hidden: false,
            title: 'Soesterkwartier | Inzoomen op de lagere scholen',
            image: 'images/school.svg',
            description: '           ',
            location: {
                center: [5.37024, 52.16024],
                zoom: 16.47,
                pitch: 55.50,
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
            title: 'Soesterkwartier | Kansengelijkheid schoolkinderen',
            image: '',
            description: 'De <a href="#methode"> slow datavisualisaties </a>  hierboven laat zien naar welke scholen de kinderen uit het Soesterkwartier gaan. Het blijkt dat de meerderheid van de kinderen buiten de wijk naar school gaat (groen). Is dat erg? In veel van de Walk&Talk interviews die ik maakte kwam deze scholenproblematiek als onderwerp ter sprake.    <br><br>        Sommige vertelden over de afwegingen die ze gemaakt hadden over wel of niet in de buurt naar school gaan. Voor meerdere was het grove taalgebruik van kinderen op de buurtscholen een reden om naar andere scholen buiten de buurt te gaan kijken. <br><br>           Een van de wandelaars, die ontevreden is over de huidige buurtscholen in de wijk, stelde voor om alle scholen te sluiten en één nieuwe school op een nieuwe locatie te ontwikkelen,  inclusief nieuw docenten- en directieteam. <br><br>           Ook vertelde iemand over de komst van een internationale school in één van de scholen vanwege de gunstige ligging bij het treinstation en omdat de internationale scholen in de omliggende grote steden allemaal vol zitten. Volgens haar was dit positief omdat de internationale school een samenwerking met alle scholen aangaat en zo het Engels onderwijs op alle buurtscholen kan verbeteren.  <br><br>           Het is nog onduidelijk wat deze oplossingen teweeg kunnen brengen. Ik maakte een dataset over welke scholen door de lagere schoolleerlingen uit de wijk Soesterkwartier bezocht worden. Dit deed ik met gegevens die ik verkreeg via het basisscholen overzicht van allecijfers.nl (allecijfers.nl/basisscholen-overzicht/amersfoort/). Ik gebruikte deze data om ieder kind te eren met een geborduurd knoopje op het tafelkleed. Tijdens het borduren reflecteerde ik op de informatie en quotes die ik had gekregen tijdens de wandelinterviews.   <br><br>           De scholen kampen met de gevolgen van sociaaleconomische segregatie. De kinderen van vooral hoger opgeleide ouders gaan buiten de wijk naar school, waardoor de scholen in de wijk in een alsmaar grotere vicieuze cirkel terecht zijn gekomen. Er is meer gelaagde informatie nodig, dan alleen cijfers van het aantal kinderen om oplossingen te vinden waardoor alle kinderen in deze wijk dezelfde schoolkansen hebben.                       ',
            location: {
                center: [5.37024, 52.16024],
                zoom: 16.47,
                pitch: 55.50,
                bearing: 0.00
            },
            setMarker: true,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'mental',
            alignment: 'left',
            hidden: false,
            title: 'Methode | Verbeelden | Mental maps',
            image: '',
            description: 'Na ieder <a href="#walktalk"> Walk&Talk </a> interview maakte iedere deelnemer een samenvatting van de wandeling die we samen maakten in de vorm van een mental map. Ik nam altijd tekenspullen mee. Voor sommigen was het best een drempel om te tekenen. Ik moedigde ze aan door te zeggen dat een route tekenen en kleine teksten erbij oke zijn of icoontjes te gebruiken. <br><br>            Eerder had ik het maken van mental maps van je eigen omgeving getest met eerste- en derdejaars studenten van de opleiding Geo Media en Design van Aeres Hogeschool in Almere. Na een korte introductie over het belang van herinneringen op het beeld wat je hebt over een plek, gingen de studenten aan de slag. Ik liet de derdejaars vooraf oriëntatiepunten en herinneringen opschrijven. Dat gaf ze meer houvast om de mental map te tekenen. Het doel van de opdracht was om een kaart voor een vreemde te tekenen naar het huis van de maker. Met de derdejaars besprak ik de mental maps resultaten in combinatie met de vraag hoe gendergelijkwaardig de eigen omgeving eigenlijk is. Hier kwam bijvoorbeeld uit dat verbetering van veiligheid door goede lantaarnverlichting helpt.  <br><br>            In de één op één situatie na de Walk&Talk volgde soms een soort samenvattend gesprek bij het ophalen van waar we over gesproken hadden. Andere deelnemers waren juist heel geconcentreerd alleen bezig. Na een aantal iteraties te hebben gedaan koos ik er bewust voor om me niet meer met de inhoud van de mapping te bemoeien om het zoveel mogelijk de persoonlijke samenvatting van deze participant te laten zijn. Vervolgens schreef ik thuis mijn eigen reflectie uit al dan niet aangevuld met online-informatie van diegene.  <br><br>                 ',
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
            id: 'tracks',
            alignment: 'right',
            hidden: false,
            title: 'Methode | Verbeelden | Tracks ',
            image: '',
            description: 'Als onderdeel van elk <a href="#walktalk"> Walk&Talk </a> interview trackte ik met de OSM tracker app de route. Deze informatie verzamelde ik met QGIS. Ik was benieuwd of daar ook informatie uit op te halen viel. Welke delen van de wijk wandelden we en wat zijn de onontdekte delen.  <br><br>            Wat opvalt is dat er veel langs de groengordel van het Soesterkwartier wordt gewandeld. Hier zijn de stoepen breed en is het aangenaam om langs te gaan. Volgens O’Mara vinden mensen groene ruimte het meest ‘plezierig’ om te wandelen. <br><br>            Wat verder opvalt is dat de nieuwbouw delen worden overgeslagen, dat voelt blijkbaar niet als soesterkwartier. De uitzondering is de wagenwerkplaats waarmee de wijk vanaf het eerste begin mee verbonden is. Dit buurtje is via CPO tot stand is gekomen en daar waren veel wijkbewoners bij betrokken.  <br><br>            De bloemen- en de rivierenbuurt worden vaak beide als tegenstelling van elkaar bewandeld. Deze tegenstelling komt ook vaak in de verhalen terug.                  ',
            location: {
                center: [5.36276, 52.16034],
                zoom: 15.00,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'tracks-color',
                opacity: 1,
                }
            ],
            onChapterExit: [
                {
                layer: 'tracks-color',
                opacity: 0
                }
            ]
        },
        {
            id: 'noord',
            alignment: 'right',
            hidden: false,
            title: 'Soesterkwartier | Noordewierweg',
            image: '',
            description: 'De Noordewierweg is de straat die de Bloemenbuurt met daarin vooral huurwoningen en de Rivierenbuurt met vooral koopwoningen scheidt. Het is een lange rechte weg die uitnodigt om hard te rijden. ’s Ochtends en ’s middags steken hier veel kinderen de straat over om naar de <a href="#school"> scholen </a> scholen in de rivierenwijk te gaan. Daar waar het kan fietsen vele jonge fietsers en ouders om, via de rustigere en groenere Dollardstraat. <br><br>            Zoals uit de bijnamen, opgehaald tijdens de <a href="#walktalk"> Walk&Talk </a> interviews blijkt, is deze Noordewierweg een barrière in de wijk. Met één uitzondering: de <em>kleine</em> Albert Heyn supermarkt in het midden van de straat. Op deze plek komen de bewoners van beide delen samen. In deze supermarkt kun je ook iets met het personeel regelen. Bijvoorbeeld dat je achteraf betaalt, zodat je demente moeder nog zelf een boodschapje kan gaan doen, zonder dat ze moet afrekenen. Dit vernam ik van de begeleidster van de King Arthur groep.                        ',
            location: {
                center: [5.37331, 52.15863],
                zoom: 14.48,
                pitch: 4.00,
                bearing: 0.00
            },
            setMarker: true,
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
            title: 'Methode | Verdiepen | Borduren',
            image: '',
            description: '“Wat levert borduren met betrekking tot wijkonderzoek op?”, zo vroeg ik mij af. Borduren is een manier van analoog werken om het <em>slow</em> in de <a href="#methode"> slow datavisualisaties</a>  extra te benadrukken. Maar het is meer dan dat. Borduren is het middel waar alles samenkomt. <br><br>             Ten eerste helpt borduren om te reflecteren op de opgehaalde informatie in de verkennende fase. Zo doe je al bordurend nieuwe ontdekkingen tijdens het visualiseren ervan. Ten tweede leent borduren zich erg goed om in te zetten als verbinder in community projecten waar voortgebouwd wordt op de zaken die in de wijk spelen. Tot slot kan het door slow datavisualisatie ontstane borduurwerk ingezet worden als conversation piece. In dit geval als tafelkleed welke ruimte creëert voor het verdiepen van de informatie met nieuwe, aanvullende informatie en meerstemmigheid. <br><br>            Het boek Record, Map and Capture (2022) van borduurexpert Jordan Cunliffe gaat over geborduurde datavisualisaties. Cunliffe schrijft, documenteert, tekent en ontwerpt analoog. “Waarom werkt dat zo goed? Heb je ook ervaring met digitaal?”, vroeg ik haar via Instagram. Ze antwoordde me: “Ik heb het nodig dat alles fysiek voor me ligt. Je kunt het <em>in het echte leven</em> zo om je heen ordenen; dat kan ik niet zo op een scherm reproduceren!” Volgens Cunliffe geef je een stem aan wat verborgen bleef, door letterlijk tijd te spenderen aan het onderwerp. Het gaat volgens haar over nadenktijd en diepere betekenis geven aan persoonlijke, subjectieve verhalen. Terwijl Cunliffe de herhalende beweging van het borduren maakt, komt ze in een probleemoplossende staat, zo heeft ze ontdekt. (Cunliffe, 2022) <br><br>            Mijn ervaringen komen ook overeen met wat activist-met-naald-en-draad Sara Vrugt zegt. Ze ziet haar werk als een pleidooi om steeds beter te kijken, te reflecteren en zó impact te maken. In essentie wil ze een heel nieuwe wereld borduren, waarin meer ruimte is voor waarachtigheid (Vrugt, 2022).                    ',
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
            id: 'vertraag',
            alignment: 'left',
            hidden: false,
            title: 'Methode | Verdiepen | Vertragen is vermenigvuldigen',
            image: '',
            description: ' De fase van verdiepen bij slow datavisualisaties gaat over het inzetten van de in de verkenningsfase opgehaalde informatie over een wijk,  verbeeld in een <a href="#conver"> conversation piece</a>   en te gebruiken als een <em>multilayered storytelling tool</em>.  Deze conversation piece is vervolgens in te zetten om meerstemmigheid, verdieping van de kennis en nog meer verbinding in de wijk tot stand te brengen. <br><br>            Het gaat om het waarderen van aandacht. Het gebruiken van zintuigen en het toepassen van analoge werkvormen gebruiken. Het gaat om verbinding aangaan met het gebied, de betrokkenen en zo betere inzichten te krijgen in de context. Vertragen helpt om te reflecteren: wat gebeurt er eigenlijk als we stilstaan bij wat we zien. In de gauwigheid waarmee we werken zien we vaak veel over het hoofd. Het laatste onderdeel van de slow Datavisualisatie methode is verdiepen en het omarmen van de complexiteit ervan. Het gaat er niet om om tot één oplossing te komen, maar juist de meerstemmigheid en de complexiteit van het dagelijkse leven te tonen. Vertragen is vermenigvuldigen <br><br>            De conversation piece kan op verschillende manieren ingezet worden. Bijvoorbeeld om een bepaald thema welke tijdens de<a href="#walktalk"> Walk&Talk </a> vaak genoemd werd,  verder te verdiepen. Zo kunnen betrokken wijkmakers rondom dit thema uitgenodigd worden om aan de hand van de conversation piece dit onderwerp op een gelijkwaardige manier te bespreken en informatie te delen.             Een andere optie is om de conversation piece in te zetten om eerder opgehaalde informatie juist te koppelen aan nieuwe ontwikkelingen in de wijk. Daarvoor zette ik een community borduurproject <a href=“#sterk”>Sterke Vrouwen</a> op.                             ',
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
            id: 'straat',
            alignment: 'left',
            hidden: false,
            title: 'Methode | Achtergrond | Straatnamen',
            image: '',
            imageDescription: 'Ik ben van de kaart',
            description: 'In het Soesterkwartier is vijftien procent van de straatnamen naar een mens vernoemd. Niet één daarvan is vrouw. Eerder onderzoek in Amsterdam wees uit dat van de straten naar mensen gemiddeld 88 procent vernoemd is naar mannen en twaalf procent naar vrouwen. (Korte & Sprinkhuizen, 2018) In Groningen was het percentage vrouwen nog lager, slechts tien procent van het totaal mensen dat in straatnamen is vernoemd. (Bol, 2018) Rondom Het Soesterkwartier zullen de komende jaren vele nieuwe straten en pleinen komen. Daarom is het nu een uitgelezen kans om een begin te maken met een eerlijke verdeling.  <br><br>            Ik raakte geïnspireerd om me verder te verdiepen in gender ongelijkheid in de leefomgeving. Dit kwam door mijn eerste iteratie: <em>Ik ben van de kaart</em>. Ik nodigde vrienden uit mij een brief te schrijven, waar ze zich druk over maken in de maatschappij. In meerdere brieven kwam de ongelijkwaardige situatie voor vrouwen in de publieke ruimte naar voren. Hierop besloot ik mij hier verder in te verdiepen door het boek <em>Invisible women</em> van schrijfster C.C. Perez (2020)  te lezen en zo meer te weten te komen over de bias en hoe vrouwen worden buitengesloten. Ook in de stedelijke leefomgeving.  <br><br>            Vervolgens bezocht ik in september 2022 de <ahref="https://www.matrimonydays.be/nl/"> Matrimonium dagen </a> in Brussel. Hier had ik afgesproken met feministe en grafische designer Claire Allard van <a href="https://www.klar.graphics/en/homepage-en/"> Klär graphics</a>. Zij drukte samen met andere deelnemers ansichtkaarten van bekende <a href=" https://www.instagram.com/datadelles/"> Brusselse vrouwen </a> om aandacht te vragen voor een eerlijkere straatnamen verdeling voor vrouwen en genderminderheden. <br><br>            Onlangs bezocht ik Wenen met een aantal <a href="https://www.urbanistasrdam.nl/ "> urbanistas</a>. Dit is een netwerkgroep en platform voor vrouwxn die werken in stedelijke ontwikkeling. Wenen staat bekend om haar gendergelijkwaardig ruimtelijk beleid. Een prachtig voorbeeld is het bewust inzetten op een gender gelijkwaardige verdeling van straatnamen. Dit doen ze door alle straatnamen in nieuwbouwwijk Aspern Seestadt, zo groot als het centrum van Wenen zelf, alleen naar vrouwen te vernoemen.  <br><br>                        ',
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
            id: 'vrouw2',
            alignment: 'full',
            hidden: false,
            title: 'Soesterkwartier | sterke vrouwen portret',
            image: 'images/nel.svg',
            description: '                  ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 12.00,
                pitch: 13.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'sterk',
            alignment: 'right',
            hidden: false,
            title: 'Soesterkwartier | Sterke vrouwen',
            image: '',
            description: 'Om mijn <a href="#conver"> conversation piece</a> het geborduurde tafelkleed bij andere doelgroepen in te zetten, ontwikkelde ik het community borduurproject Sterke Vrouwen om eenmalig uit te voeren op Internationale Vrouwendag 2023. De bedoeling was om samen met de deelnemers een aantal sterke vrouwen uit het Soesterkwartier, Amersfoort, Nederland en Internationaal te borduren. Op deze manier wilde ik aandacht vragen voor de ongelijke genderverdeling van <a href="#straat"> straatnamen</a>. Rondom het Soesterkwartier zullen de komende jaren bijvoorbeeld zo’n 5000 woningen en dus nieuwe straten komen. De impact hiervan wilde ik met behulp van de conversation piece verdiepen. <br><br>             Ik benaderde via mijn inmiddels opgebouwde netwerk in het Soesterkwartier en via de website van Internationale Vrouwendag met de volgende tekst: <br><br> <em>Op 8 maart 2023 is het internationale vrouwendag. Dit is de start van de aanleg van een verzameling van straatnamen met alleen Sterke Vrouwen. We hebben er al een aantal uitgezocht die een link met Amersfoort hebben. Maar je mag ook je eigen sterke vrouw portretten meenemen</em>. <br><br>             Expliciet had ik vermeld dat iedereen mee mocht doen. Dit betrof zowel het wel of niet hebben van ervaring, als gender, m/v/x iedereen was welkom. Er kwamen alleen vrouwen van begin twintig tot achter in de zestig.  <br><br>            Sommige deelnemers borduurden de vrouwen die ik vooraf had geselecteerd, anderen gaven de voorkeur aan eigen idolen zoals hardloopster Femke Bol of klimaatactivist Greta Thunberg. Daarnaast gaven een aantal aan juist hun eigen moeder of zus te willen eren. Een mooie aanvulling, wat laat zien dat een sterke vrouw niet per se iemand met een publieke functie hoeft te zijn. <br><br>             Rondom het tafelkleed kwamen zeventien vrouwen borduren. Het werd een gezellige avond met veel ruimte voor ontmoetingen en verbinding over sterke vrouwen en de ongelijke gender verdeling van straatnamen. Maar er was ook ruimte om de informatie op de conversation piece met elkaar te delen. Zoals het verhaal van mevrouw Verheuvel en een open gesprek over de keuzes om kinderen wel of niet naar school in de wijk te laten gaan. Het was mooi om te zien dat het verdiepen van de informatie door middel van de conversation piece werkte. <br><br>            Tijdens de avond vroegen veel deelnemers om een vervolg aan het project. Ook in de berichtjes na de workshop bleek de behoefte om met elkaar te verbinden in de wijk aanstekelijk. Daarop heb ik een subsidie aangevraagd en gekregen om het project <em>Sterke Vrouwen</em> verder uit te rollen.  <br><br>            Tijdens de zomerparade op 7 juli 2023 zal ik de portretten van de geborduurde sterke vrouwen exposeren. Het is de bedoeling dat ik dan ook de hierover samengestelde publicatie aan de wethouder van de gemeente Amersfoort zal overhandigen. Zo vragen we als community aandacht voor een gender gelijkwaardiger straatnamenbeleid in het Soesterkwartier en heel Amersfoort.                           ',
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
            id: 'vrouw3',
            alignment: 'full',
            hidden: false,
            title: 'Soesterkwartier | sterke vrouwen portret',
            image: 'images/nel.svg',
            description: '                  ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 12.00,
                pitch: 13.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'wijk',
            alignment: 'right',
            hidden: false,
            title: 'Soesterkwartier | Wijkmuseum',
            image: 'images/wijkmuseum.png',
            imageDescription: 'Voor de locatie van het community borduurproject <a href=“#sterk”>Sterke Vrouwen</a> heb ik bewust gekozen voor het <a href=https://wijkmuseumsoesterkwartier.nl/>Wijkmuseum Soesterkwartier </a>. Het museum is erop gericht om het verleden van de wijk levend te houden en verbinding met de wijk tot stand te brengen. Het project <em>Sterke Vrouwen</em> stimuleert de onderlinge verbinding en de verbinding met de wijk, wat naadloos aansluit op de doelstelling van het museum. <br><br>            Tijdens één <a href="#walktalk"> Walk&Talk </a> interviews sprak ik met Bets, de voorzitter van het wijkmuseum Soesterkwartier. Zij heeft zich bij de gemeente onder andere sterk gemaakt voor de financiering voor de herinrichting van de<a href="#noord"> Noordewierweg </a>. <br><br>            Onze wandeling eindigde in het Wijkmuseum. Via de entree loop je een huis binnen zoals het er honderd jaar geleden rook en uitzag. Achterin het huis is echter een moderne, multifunctionele ruimte voor bijeenkomsten en wisselende exposities. Deze ruimte is wat mij betreft een prachtige en inspirerende plek om meer wijkactiviteiten te organiseren. De vrijwilligers van het wijkmuseum gaven aan hiervoor open te staan, om zo ook meer bezoekers te trekken en het bestaansrecht van het museum te versterken.                                       ',
            location: {
                center: [5.37143, 52.15849],
                zoom: 19.96,
                pitch: 32.00,
                bearing: 99.20
            },
            setMarker: true,
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
            title: 'Soesterkwartier | Nog meer sterke vrouwen',
            image: '',
            description: 'Om ook doelgroepen die vaak onzichtbaar een stem te geven, benaderde ik de King Arthur groep met het voortel om het community borduurproject <a href="#sterk">  Sterke Vrouwen </a> ook met beginnende dementerende vrouwen te doen. We spraken af dat ik vier dinsdag ochtenden met hen zou borduren in het buurthuis <a href="#blauw">  de Sleutel </a>. <br><br>             Het steeds voller rakende geborduurde tafelkleed ging weer mee en kwam centraal op tafel te liggen. Daarop kwamen de materialen en de kopjes koffie. Zo borduurden we samen met de begeleiding. Voor mij was dit heel waardevol. Ik luisterde naar de levensverhalen van deze sterke vrouwen en hoe het vroeger in de wijk was. Terwijl we samen borduurden en zo ook samen werkten aan een collectief geheugen. <br><br>            Het community project <em>Sterke Vrouwen</em> verbindt buurtbewoners op verschillende plekken in de wijk. Zo is het dankzij de subsidie die ik aanvroeg mogelijk om een excursie naar het wijkmuseum te regelen voor de borduursters van de King Arthur groep. Om daar met de andere vrouwen uit de wijk samen verder te werken aan het project. Dit gaat begin september 2023 plaatsvinden.                     ',
            location: {
                center: [5.35268, 52.16018],
                zoom: 17.99,
                pitch: 72.50,
                bearing: 0.00 
            },
            setMarker: true,
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
            title: 'Methode | Achtergrond | Slow research',
            image: '',
            description: ' <Slow Datavisualisatie is een vorm van Slow research. Het gaat om betekenis geven aan het denken door verbinding, reflectie en het omarmen van complexiteit volgens Berg & Seeber, zoals beschreven in hun boek <em>The Slow Professor </em>(2017). Bij Slow research gaat het om vertragen. Daarom gebruik ik embodied en/of analoge werkvormen, wandelen en borduren, tijdens het designproces om tot nieuwe inzichten te komen. <br><br>             Het gaat er wat mij betreft in mijn onderzoek vooral om, verbinding met de wijk en de <em>wijkmakers</em> onderling tot stand te brengen. Ten tweede pas ik het toe om tijd en ruimte te maken om te kunnen reflecteren en om meer besef te krijgen van de complexiteit van de dingen die spelen in het gebied.  Met daarbij het streven om ongehoorde doelgroepen zichtbaar te maken en zo nieuwe inzichten voor het verbeteren van een gebied te vinden.                         ',
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
            id: 'slowd',
            alignment: 'left',
            hidden: false,
            title: 'Methode | Achtergrond | Slow design',
            description: 'De Slow datavisualisatie methode volgt de Slow Design principes. Deze zijn ontworpen door oprichter van SlowLab Amsterdam Carolyn F. Strauss en professor in Design Research Alastair Fuad-Luke (2008). Zij noemen Slow Design zelf een vorm van creatief activisme en een evaluatie tool die nieuwe waarden levert voor design in de verschuiving naar duurzaamheid door gebruik te maken van zowel kwantitatieve, kwalitatieve en intuïtieve beoordelingsmethodes. De zes principes zijn: onthullen (REVEAL), uitbreiden (EXPAND), reflecteren (REFLECT), verbinden (ENGAGE), participeren (PARTICIPATE) en ontwikkelen (EVOLVE).  <br><br>            De Slow Datavisualisatie methode past in de traditie van Slow Design omdat het gericht is op het waarderen van kwalitatieve informatie en om daar betekenis aan te geven. Met het doel om op die manier nieuwe inzichten te vergaren (onthullen) door betrokkenen te verbinden met elkaar en de buurt, te participeren en te reflecteren waardoor kennis zich steeds verder kan uitbreiden en ontwikkelen.                              ',
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
            id: 'place',
            alignment: 'left',
            hidden: false,
            title: 'Methode | Achtergrond | Creative placemaking',
            iframe:'https://www.youtube.com/embed/31PUM6cd8Fw',
            description: 'In 2006 zag ik de dans performance <em>Love’s geography</em> van <a <a href="https://sarawookey.com/"> Sara Wookey</a> in de Melkweg Amsterdam. Deze voorstelling is mij altijd goed bijgebleven.<br><br>            Wookey is geïnspireerd door William H. Whyte (Wookey, 2020). Hij was er samen met Jane Jacobs van overtuigd dat je veel kunt leren door het observeren van mensen in de publieke ruimte. Zij waren de grondleggers van het ontwikkelen van steden voor mensen; placemaking. (pps.org, 2017)<br><br>            Placemaking is zowel een filosofie als methode, die <em>wijkmakers</em> betrekt bij de ontwikkeling van de leefomgeving. Het is gericht op het observeren van en te luisteren naar de gebruikers – de experts van die openbare ruimte. Met het doel om de kwaliteit van de openbare ruimte te verbeteren, maar ook om netwerkvorming, gevoel van eigenaarschap en verantwoordelijkheid over deze leefomgeving te bevorderen. Zo ervaren de betrokkenen dat ze zelf invloed hebben op de kwaliteit ervan. (pps.org, 2017) <br><br>            Slow datavisualisatie is wat mij betreft een vorm van creatieve placemaking. Het zet creatieve en embodied werkvormen in om het observeren en het luisteren te versterken. Met het doel om op deze manier nieuwe inzichten over een buurt op te halen bij betrokkenen. Ik ontdekte betrokkenen deze informatie kunnen verdiepen door de informatie ook zichtbaar te maken in iets tastbaars zoals een conversation piece. Op deze manier verbinden ook deze andere betrokkenen zich daarmee aan de verbeteringen van de leefomgeving. <br><br>                                ',
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
            id: 'data',
            alignment: 'left',
            hidden: false,
            title: 'Methode | Achtergrond | Data feminisme',
            image: '',
            description: 'Data feminism is een doel en een proces om vanuit intersectioneel feminisme te werken naar meer rechtvaardigheid in het groeiende veld van data science. Het gelijknamige boek (2020) is geschreven door D’Ignazio, urban planner op het MIT en Klein, research professor in het digital humanities lab van de Emory University. Volgens de schrijfsters gaat het over meer dan alleen gender. Het gaat om wie de machtsposities hebben en wie niet en hoe dat te veranderen. Ze werken met zeven principes om verandering in de wereld aan te jagen en aan te tonen dat data over mensen gaat.            De principes van data feminsm zijn: examine power, challenge power, elevate emotion and embodiement, rethink binaries and hierarchies, embrace pluralism, consider context en Make labor visible. (D’Ignazio & Klein,p. 8-10)            Met name de principes over waarde toekennen aan emotie en embodiement, omarmen van pluralisme en het beschouwen van context zijn principes die je ook terugziet in mijn werk.             Data in welke vorm dan ook is niet neutraal of objectief. Het is altijd belangrijk om na te gaan wie de data heeft verzameld en met welk doel. Het is een product van ongelijke sociale verhoudingen. Door dit in ogenschouw te nemen kan slow datavisualisatie bijdragen aan een gelijkwaardigere en rechtvaardigere wereld                          ',
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
            id: 'toekomst',
            alignment: 'center',
            hidden: false,
            title: 'Toekomst',
            image: '',
            description: 'In de nabije toekomst ga ik een workshop over mijn methode geven binnen het netwerk van Urbanista’s Rotterdam. Daarnaast ga ik in september 2023 een walking experience leiden op de conferentie Creatieve Methods in Manchester. <br><br>            Verder ga ik door met het community borduur project <a href=“#sterk”>Sterke Vrouwen</a>  in het Soesterkwartier. Ten eerste om de bibliotheek verder te vullen met geborduurde portretten om zo aandacht te genereren voor het belang van een meer gender gelijkwaardigere leefomgeving. Hiervoor ga ik een aanvraag indienen voor een kunstsubsidie bij de gemeente Amersfoort en samenwerkingen zoeken zoals bijvoorbeeld met kennisinstituut voor emancipatie en vrouwengeschiedenis Atria. <br><br>            Ik denk dat ik op deze manier het project ook kan uitbreiden naar andere Wijken. Maar ook de zichtbaarheid van het project te versterken door een interactieve stratenkaart te ontwikkelen om de verschillen naar gender inzichtelijk te maken. Dit geeft me ook de mogelijkheid om het idee van een borduurboek slow datavisualisatie verder te ontwikkelen en borduurtafels te ontwerpen die als een pop-up sociaal terras overal ingezet kunnen worden. Al deze onderdelen hebben ten doel om verdieping te geven aan de beleving en betekenis van <em>wijkmakers</em> met hun leefomgeving. <br><br>            Ondertussen wil ik mijn slow urban design studio, Sabeare verder ontwikkelen en opdrachten en samenwerkingen aangaan vanuit mijn ontwikkelde methode. Om dit verder kracht bij te zetten ga ik in het najaar van 2023 een aanvraag doen bij het stimuleringsfonds.                        ',
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
    ]
};
