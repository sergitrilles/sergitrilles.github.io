/* Traducción ES → VA / EN.
   Las páginas se escriben en castellano; este archivo traduce cada texto
   (también el que se genera después con JavaScript) usando el diccionario.
   Las claves con {x} son plantillas para frases con números. */
(function () {
  var LANGS = ['es', 'va', 'en'];
  var HTML_LANG = { es: 'es', va: 'ca-ES-valencia', en: 'en' };
  var LOCALE = { es: 'es-ES', va: 'ca-ES', en: 'en-GB' };

  // "castellano": ["valencià", "English"]
  var D = {
    /* comunes */
    'Cambiar entre tema claro y oscuro': ['Canviar entre tema clar i fosc', 'Switch between light and dark theme'],
    'Idioma': ['Idioma', 'Language'],
    'Inicio': ['Inici', 'Home'],
    'Profesor Titular de Universidad · Universitat Jaume I': ["Professor Titular d'Universitat · Universitat Jaume I", 'Associate Professor · Universitat Jaume I'],
    'Soy subdirector del Institut de Noves Tecnologies de la Imatge (INIT) de la Universitat Jaume I, donde trabajo en el grupo GEOTEC.': ["Soc sotsdirector de l'Institut de Noves Tecnologies de la Imatge (INIT) de la Universitat Jaume I, on treballe en el grup GEOTEC.", 'I am deputy director of the Institute of New Imaging Technologies (INIT) at Universitat Jaume I, where I work in the GEOTEC group.'],
    'Juan de la Cierva-Incorporación': ['Juan de la Cierva-Incorporació', 'Juan de la Cierva-Incorporación'],
    'Postdoctoral PINV': ['Postdoctoral PINV', 'PINV postdoctoral'],
    'Postdoctoral GENT': ['Postdoctoral GENT', 'GENT postdoctoral'],
    'Postdoctoral VALi+D (APOSTD)': ['Postdoctoral VALi+D (APOSTD)', 'VALi+D postdoctoral (APOSTD)'],
    'Predoctoral VALi+D (ACIF)': ['Predoctoral VALi+D (ACIF)', 'VALi+D predoctoral (ACIF)'],
    '· Ministerio de Ciencia e Innovación': ['· Ministeri de Ciència i Innovació', '· Spanish Ministry of Science and Innovation'],
    'Seleccionado en el Ramón y Cajal 2023 (4.º en Tecnologías de la Información y las Comunicaciones); renuncié al obtener la plaza de Profesor Titular.': ["Seleccionat en el Ramón y Cajal 2023 (4t en Tecnologies de la Informació i les Comunicacions); hi vaig renunciar en obtindre la plaça de Professor Titular.", 'Selected for a Ramón y Cajal 2023 fellowship (4th in Information and Communication Technologies); declined after obtaining the Associate Professor position.'],
    'Todas en el CV': ['Totes al CV', 'All in the CV'],
    'Becas y contratos predoctorales y postdoctorales obtenidos en convocatorias competitivas, según el CVN.': ['Beques i contractes predoctorals i postdoctorals obtinguts en convocatòries competitives, segons el CVN.', 'Predoctoral and postdoctoral grants and contracts awarded in competitive calls, as listed in the CVN.'],
    'Ramón y Cajal 2023': ['Ramón y Cajal 2023', 'Ramón y Cajal 2023'],
    'Seleccionado en 4.ª posición en Tecnologías de la Información y las Comunicaciones (RYC2023-042469-I). Renuncia tras obtener la plaza de Profesor Titular de Universidad.': ['Seleccionat en 4a posició en Tecnologies de la Informació i les Comunicacions (RYC2023-042469-I). Renúncia en obtindre la plaça de Professor Titular d\'Universitat.', 'Selected in 4th position in Information and Communication Technologies (RYC2023-042469-I). Declined after obtaining the Associate Professor position.'],
    'Contrato postdoctoral en el INIT, Universitat Jaume I': ["Contracte postdoctoral a l'INIT, Universitat Jaume I", 'Postdoctoral contract at INIT, Universitat Jaume I'],
    'Ayuda postdoctoral PINV': ['Ajuda postdoctoral PINV', 'PINV postdoctoral grant'],
    'Plan de Promoción de la Investigación 2018, acción 3.2': ['Pla de Promoció de la Investigació 2018, acció 3.2', 'Research Promotion Plan 2018, action 3.2'],
    'Beca postdoctoral GENT (CPTT-GENT)': ['Beca postdoctoral GENT (CPTT-GENT)', 'GENT postdoctoral grant (CPTT-GENT)'],
    'Transferencia: localización en interiores para museos': ['Transferència: localització en interiors per a museus', 'Technology transfer: indoor positioning for museums'],
    'Beca postdoctoral VALi+D (APOSTD)': ['Beca postdoctoral VALi+D (APOSTD)', 'VALi+D postdoctoral grant (APOSTD)'],
    'Plataforma de análisis de datos de sensores en tiempo real': ["Plataforma d'anàlisi de dades de sensors en temps real", 'Real-time sensor data analysis platform'],
    'Beca predoctoral VALi+D (ACIF)': ['Beca predoctoral VALi+D (ACIF)', 'VALi+D predoctoral grant (ACIF)'],
    'Tesis doctoral, defendida en 2015': ['Tesi doctoral, defensada el 2015', 'PhD thesis, defended in 2015'],
    'Beca de colaboración de tercer ciclo': ['Beca de col·laboració de tercer cicle', 'Postgraduate collaboration grant'],
    'Beca de investigación': ['Beca de recerca', 'Research grant'],
    'Seleccionado': ['Seleccionat', 'Selected'], 'Postdoc': ['Postdoc', 'Postdoc'], 'Predoc': ['Predoc', 'Predoc'], 'Iniciación': ['Iniciació', 'Early career'],
    'Becas predoctorales y postdoctorales': ['Beques predoctorals i postdoctorals', 'Predoctoral and postdoctoral grants'],
    'Becas pre y postdoc': ['Beques pre i postdoc', 'Pre- and postdoc grants'],
    'Plan de Promoción de la Investigación (PINV 2018)': ['Pla de Promoció de la Investigació (PINV 2018)', 'Research Promotion Plan (PINV 2018)'],
    'Plataforma para la obtención, visualización y análisis de flujos': ["Plataforma per a l'obtenció, visualització i anàlisi de fluxos", 'Platform for collecting, visualising and analysing data flows'],
    'Contrato para la realización de la tesis doctoral': ['Contracte per a la realització de la tesi doctoral', 'Contract to carry out the PhD thesis'],
    'Ver en el CV': ['Veure al CV', 'See in the CV'],
    'Beca predoctoral y contratos postdoctorales obtenidos en convocatorias competitivas.': ['Beca predoctoral i contractes postdoctorals obtinguts en convocatòries competitives.', 'Predoctoral grant and postdoctoral contracts awarded in competitive calls.'],
    'Becas y contratos': ['Beques i contractes', 'Grants and fellowships'],
    'Becas': ['Beques', 'Grants'],
    'Beca Leonardo': ['Beca Leonardo', 'Leonardo Grant'],
    'a Investigadores y Creadores Culturales · Fundación BBVA': ['a Investigadors i Creadors Culturals · Fundació BBVA', 'for Researchers and Cultural Creators · BBVA Foundation'],
    'Contrato postdoctoral': ['Contracte postdoctoral', 'Postdoctoral contract'],
    'Beca predoctoral': ['Beca predoctoral', 'Predoctoral grant'],
    'para la tesis doctoral · Universitat Jaume I': ['per a la tesi doctoral · Universitat Jaume I', 'for the PhD thesis · Universitat Jaume I'],
    'Además, tres estancias de investigador en empresas (Generalitat Valenciana) y una en el Joint Research Centre de la Comisión Europea.': ["A més, tres estades d'investigador en empreses (Generalitat Valenciana) i una al Joint Research Centre de la Comissió Europea.", "Plus three researcher stays in companies (Generalitat Valenciana) and one at the European Commission's Joint Research Centre."],
    'Todas las becas en el CV': ['Totes les beques al CV', 'All grants in the CV'],
    'Beca Leonardo a Investigadores y Creadores Culturales': ['Beca Leonardo a Investigadors i Creadors Culturals', 'Leonardo Grant for Researchers and Cultural Creators'],
    'Estancia de investigación en el Joint Research Centre de la Comisión Europea (Italia)': ["Estada de recerca al Joint Research Centre de la Comissió Europea (Itàlia)", "Research stay at the European Commission's Joint Research Centre (Italy)"],
    'Beca predoctoral para la tesis doctoral': ['Beca predoctoral per a la tesi doctoral', 'Predoctoral grant for the PhD thesis'],
    'Estancia de investigador doctor en empresa': ["Estada d'investigador doctor en empresa", 'Postdoctoral researcher stay in a company'],
    'Becas, contratos y estancias de investigación obtenidos en convocatorias competitivas a título personal.': ['Beques, contractes i estades de recerca obtinguts en convocatòries competitives a títol personal.', 'Grants, contracts and research stays awarded personally in competitive calls.'],
    'Estancia': ['Estada', 'Stay'], 'Contrato': ['Contracte', 'Contract'], 'Beca': ['Beca', 'Grant'],
    'Todos los datos y el código': ['Totes les dades i el codi', 'All data and code'],
    'Datos y código': ['Dades i codi', 'Data and code'],
    'Conjuntos de datos, código y paquetes de reproducibilidad publicados en abierto en Zenodo, con su DOI.': ['Conjunts de dades, codi i paquets de reproductibilitat publicats en obert a Zenodo, amb el seu DOI.', 'Datasets, code and reproducibility packages openly published on Zenodo, each with its DOI.'],
    'Buscar título': ['Cerca un títol', 'Search title'],
    'Buscar datos y código': ['Cerca dades i codi', 'Search data and code'],
    'Datos': ['Dades', 'Data'], 'Código': ['Codi', 'Code'], 'Documento': ['Document', 'Document'], 'Documentos': ['Documents', 'Documents'],
    'Publicaciones con factor de impacto y cuartil, congresos, proyectos, tesis dirigidas y los datos y el código publicados en abierto. Las citas se recogen cada semana de varias fuentes.': ["Publicacions amb factor d'impacte i quartil, congressos, projectes, tesis dirigides i les dades i el codi publicats en obert. Les cites es recullen cada setmana de diverses fonts.", 'Publications with impact factor and quartile, conferences, projects, supervised theses and openly published data and code. Citations are collected weekly from several sources.'],
    'Ciencia abierta': ['Ciència oberta', 'Open science'],
    'Publico los datos, el código y los paquetes de reproducibilidad de los artículos para que cualquiera pueda comprobar los resultados y reutilizarlos. También investigamos cómo hacer más reproducible la investigación en GIScience.': ["Publique les dades, el codi i els paquets de reproductibilitat dels articles perquè qualsevol puga comprovar els resultats i reutilitzar-los. També investiguem com fer més reproduïble la recerca en GIScience.", 'I publish the data, code and reproducibility packages behind the papers so that anyone can check the results and reuse them. We also study how to make GIScience research more reproducible.'],
    '{n} conjuntos de datos': ['{n} conjunts de dades', '{n} datasets'],
    '{n} paquetes de código y reproducibilidad': ['{n} paquets de codi i reproductibilitat', '{n} code and reproducibility packages'],
    '{n} documentos': ['{n} documents', '{n} documents'],
    'datos': ['dades', 'data'], 'código': ['codi', 'code'], 'documento': ['document', 'document'],
    'GEOTEC en GitHub': ['GEOTEC a GitHub', 'GEOTEC on GitHub'],
    'Datos y código publicados recientemente': ['Dades i codi publicats recentment', 'Recently published data and code'],
    'ronda {n} · 6 dispositivos': ['ronda {n} · 6 dispositius', 'round {n} · 6 devices'],
    'micro-modelo TinyML → comunidad {k}': ['micromodel TinyML → comunitat {k}', 'TinyML micro-model → community {k}'],
    'ejecutando el bloque {i} de 5': ['executant el bloc {i} de 5', 'running block {i} of 5'],
    'riesgo de mildiu: alto': ['risc de míldiu: alt', 'downy mildew risk: high'],
    'riesgo de mildiu: medio': ['risc de míldiu: mitjà', 'downy mildew risk: medium'],
    'riesgo de mildiu: bajo': ['risc de míldiu: baix', 'downy mildew risk: low'],
    'viña en reposo': ['vinya en repòs', 'vines dormant'],
    'HR 48 h · {t} °C · lluvia {r} mm': ['HR 48 h · {t} °C · pluja {r} mm', 'RH 48 h · {t} °C · rain {r} mm'],
    'Datos de Open-Meteo para el interior de Castelló': ["Dades d'Open-Meteo per a l'interior de Castelló", 'Open-Meteo data for inland Castelló'],
    'Ayudando a un grupo de alumnos a montar su circuito con Sucre': ["Ajudant un grup d'alumnes a muntar el seu circuit amb Sucre", 'Helping a group of pupils build their circuit with Sucre'],
    'Montando el primer programa con las piezas de Sucre': ['Muntant el primer programa amb les peces de Sucre', 'Building a first program with the Sucre pieces'],
    'Tres alumnas conectan sensores del kit Sucre': ['Tres alumnes connecten sensors del kit Sucre', 'Three pupils connect sensors from the Sucre kit'],
    'El programa, en la app de Sucre': ["El programa, a l'app de Sucre", 'The program, in the Sucre app'],
    'Alumnos enseñan la app de Sucre en una tableta': ["Alumnes ensenyen l'app de Sucre en una tauleta", 'Pupils show the Sucre app on a tablet'],
    'Visitas': ['Visites', 'Visits'],
    'Quién pasa por la web, según GoatCounter. No usa cookies ni guarda direcciones IP. Se actualiza cada día.': ['Qui passa pel web, segons GoatCounter. No fa servir galetes ni guarda adreces IP. Es actualitza cada dia.', 'Who visits the site, according to GoatCounter. It uses no cookies and stores no IP addresses. Updated daily.'],
    'Periodo': ['Període', 'Period'],
    '7 días': ['7 dies', '7 days'], '30 días': ['30 dies', '30 days'], '90 días': ['90 dies', '90 days'],
    'Cargando datos…': ['Carregant dades…', 'Loading data…'],
    'Visitantes por día': ['Visitants per dia', 'Visitors per day'],
    '{n} visitantes': ['{n} visitants', '{n} visitors'],
    'Día': ['Dia', 'Day'], 'Visitantes': ['Visitants', 'Visitors'],
    'visitantes': ['visitants', 'visitors'],
    'en los últimos {d} días': ['en els últims {d} dies', 'in the last {d} days'],
    'últimos {d} días': ['últims {d} dies', 'last {d} days'],
    'media al día': ['mitjana diària', 'daily average'],
    'visitantes por día': ['visitants per dia', 'visitors per day'],
    'día con más visitas': ['dia amb més visites', 'busiest day'],
    'Páginas': ['Pàgines', 'Pages'], 'Procedencia': ['Procedència', 'Referrers'], 'Países': ['Països', 'Countries'],
    'Navegadores': ['Navegadors', 'Browsers'], 'Sistemas': ['Sistemes', 'Systems'], 'Pantallas': ['Pantalles', 'Screens'],
    'Portada': ['Portada', 'Home page'],
    'Directo o desconocido': ['Directe o desconegut', 'Direct or unknown'],
    'Desconocido': ['Desconegut', 'Unknown'],
    'Sin datos todavía.': ['Encara no hi ha dades.', 'No data yet.'],
    'Móviles': ['Mòbils', 'Phones'],
    'Móviles grandes y tabletas pequeñas': ['Mòbils grans i tauletes petites', 'Large phones and small tablets'],
    'Tabletas y portátiles pequeños': ['Tauletes i portàtils petits', 'Tablets and small laptops'],
    'Ordenadores': ['Ordinadors', 'Computers'],
    'Pantallas grandes (más que HD)': ['Pantalles grans (més que HD)', 'Large screens (above HD)'],
    'Actualizado el {d}': ["Actualitzat el {d}", 'Updated {d}'],
    'Panel completo en GoatCounter': ['Tauler complet a GoatCounter', 'Full dashboard on GoatCounter'],
    'Todavía no hay datos: la primera actualización llegará en las próximas horas.': ['Encara no hi ha dades: la primera actualització arribarà en les pròximes hores.', 'No data yet: the first update will arrive within a few hours.'],
    "Taller de Sucre en una escuela de Vall d'Alba": ["Taller de Sucre en una escola de la Vall d'Alba", "Sucre workshop at a school in Vall d'Alba"],
    'Fin del taller de Sucre en Albocàsser': ['Final del taller de Sucre a Albocàsser', 'End of the Sucre workshop in Albocàsser'],
    'Formación docente con el kit Sucre': ['Formació docent amb el kit Sucre', 'Teacher training with the Sucre kit'],
    'Cerrar': ['Tancar', 'Close'],
    'en directo · Castelló de la Plana': ['en directe · Castelló de la Plana', 'live · Castelló de la Plana'],
    'Temperatura': ['Temperatura', 'Temperature'],
    'Humedad': ['Humitat', 'Humidity'],
    'Últimas 24 h · datos de Open-Meteo': ["Últimes 24 h · dades d'Open-Meteo", 'Last 24 h · data from Open-Meteo'],
    'a las {h}': ['a les {h}', 'at {h}'],
    'aire: bueno': ['aire: bo', 'air: good'],
    'aire: razonable': ['aire: raonable', 'air: fair'],
    'aire: moderado': ['aire: moderat', 'air: moderate'],
    'aire: malo': ['aire: dolent', 'air: poor'],
    'aire: muy malo': ['aire: molt dolent', 'air: very poor'],
    'aire: extremadamente malo': ['aire: extremadament dolent', 'air: extremely poor'],
    'Proyecto que dirijo · desde 2025': ['Projecte que dirigisc · des de 2025', 'Project I lead · since 2025'],
    'Proyecto AEI · equipo de investigación': ["Projecte AEI · equip d'investigació", 'AEI project · research team'],
    'Producto · desde 2016': ['Producte · des de 2016', 'Product · since 2016'],
    'Producto · viticultura de precisión': ['Producte · viticultura de precisió', 'Product · precision viticulture'],
    'Aprendizaje federado en comunidades de dispositivos AIoT.': ['Aprenentatge federat en comunitats de dispositius AIoT.', 'Federated learning in communities of AIoT devices.'],
    'Comunidades de IoT e IA que comparten micro-modelos TinyML.': ["Comunitats d'IoT i IA que comparteixen micromodels TinyML.", 'Communities of IoT and AI that share TinyML micro-models.'],
    'Kit y app para aprender pensamiento computacional desde los 4 años.': ['Kit i aplicació per a aprendre pensament computacional des dels 4 anys.', 'A kit and app for learning computational thinking from age 4.'],
    'Estación IoT que avisa al móvil del riesgo de mildiu en el viñedo.': ['Estació IoT que avisa al mòbil del risc de míldiu a la vinya.', 'An IoT station that alerts your phone to downy mildew risk in the vineyard.'],
    'productos': ['productes', 'products'],
    'investigación': ['recerca', 'research'],
    'cv completo': ['cv complet', 'full cv'],
    'contacto': ['contacte', 'contact'],
    'Proyectos': ['Projectes', 'Projects'],
    'Congresos': ['Congressos', 'Conferences'],
    'Divulgación': ['Divulgació', 'Outreach'],

    /* portada */
    'Profesor Titular · Universitat Jaume I': ['Professor Titular · Universitat Jaume I', 'Associate Professor · Universitat Jaume I'],
    'Subdirector del INIT · grupo GEOTEC': ["Sotsdirector de l'INIT · grup GEOTEC", 'Deputy Director of INIT · GEOTEC group'],
    'Hola, soy': ['Hola, sóc', "Hi, I'm"],
    'Enseño a los objetos a pensar': ['Ensenye els objectes a pensar', 'I teach objects to think'],
    'y a los niños a programar': ['i els xiquets a programar', 'and children to code'],
    'antes de saber leer': ['abans de saber llegir', 'before they can read'],
    '. Mi investigación acaba en productos que usa gente de verdad: aulas, bodegas y ciudades.':
      ['. La meua recerca acaba en productes que fa servir gent de veritat: aules, cellers i ciutats.',
       '. My research ends up in products that real people use: classrooms, wineries and cities.'],
    'Ver CV completo': ['Veure el CV complet', 'See full CV'],
    'Copiado ✓': ['Copiat ✓', 'Copied ✓'],
    'Sucret, la mascota de Sucre. Pulsa para que salude': ['Sucret, la mascota de Sucre. Prem perquè et salude', "Sucret, Sucre's mascot. Press it to get a wave"],
    'Sucret · pulsa para saludar': ['Sucret · prem per a saludar', 'Sucret · press to say hi'],
    'jóvenes han programado con Sucre desde 2016': ['joves han programat amb Sucre des de 2016', 'young people have coded with Sucre since 2016'],
    'citas · índice h {h} · {n} artículos en revistas': ['cites · índex h {h} · {n} articles en revistes', 'citations · h-index {h} · {n} journal articles'],
    'proyectos como investigador principal, {m} M€ captados': ['projectes com a investigador principal, {m} M€ captats', 'projects as principal investigator, €{m}M raised'],
    'como investigador principal, de 27 en los que he participado': ['com a investigador principal', 'as principal investigator'],

    'Proyecto · investigador principal · desde 2025': ['Projecte · investigador principal · des de 2025', 'Project · principal investigator · since 2025'],
    'Inteligencia local para AIoT. Los dispositivos se agrupan en comunidades y aprenden juntos con aprendizaje federado: cada uno entrena con sus datos y solo envía el modelo a un nodo fog cercano. Lo aplicamos a la calidad del aire y a la salud con wearables.':
      ["Intel·ligència local per a l'AIoT. Els dispositius s'agrupen en comunitats i aprenen junts amb aprenentatge federat: cadascun entrena amb les seues dades i només envia el model a un node fog proper. Ho apliquem a la qualitat de l'aire i a la salut amb wearables.",
       'Local intelligence for AIoT. Devices are grouped into communities and learn together through federated learning: each one trains on its own data and only sends its model to a nearby fog node. We apply it to air quality and to health with wearables.'],
    'Simulación de aprendizaje federado: seis dispositivos envían su modelo a un nodo fog y reciben el modelo combinado':
      ["Simulació d'aprenentatge federat: sis dispositius envien el seu model a un node fog i reben el model combinat",
       'Federated learning simulation: six devices send their model to a fog node and receive the combined model'],
    'Entrenar una ronda': ['Entrenar una ronda', 'Train one round'],
    'ronda {r} · precisión {a} %': ['ronda {r} · precisió {a} %', 'round {r} · accuracy {a}%'],
    'ronda {r} · enviando modelos locales…': ['ronda {r} · enviant models locals…', 'round {r} · sending local models…'],
    'ronda {r} · combinando modelos…': ['ronda {r} · combinant models…', 'round {r} · combining models…'],
    'nodo fog': ['node fog', 'fog node'],
    'aire (NO₂, CO₂)': ['aire (NO₂, CO₂)', 'air (NO₂, CO₂)'],
    'salud (wearables)': ['salut (wearables)', 'health (wearables)'],
    'Simulación. Los datos no salen nunca del dispositivo, solo viajan los modelos.':
      ['Simulació. Les dades no ixen mai del dispositiu, només viatgen els models.', 'Simulation. Data never leaves the device; only the models travel.'],
    'Ministerio de Ciencia · CNS2024-154145 · plataforma LIA-FL en SoftwareX (2026)':
      ['Ministeri de Ciència · CNS2024-154145 · plataforma LIA-FL a SoftwareX (2026)', 'Spanish Ministry of Science · CNS2024-154145 · LIA-FL platform in SoftwareX (2026)'],

    'Proyecto · equipo de investigación · AEI': ["Projecte · equip d'investigació · AEI", 'Project · research team · AEI'],
    'Comunidades de IoT e IA. Sensores parecidos comparten micro-modelos TinyML para decidir en local, con menos latencia, menos consumo y más privacidad. Hay pilotos en calidad del aire, logística de última milla y posicionamiento en interiores.':
      ["Comunitats d'IoT i IA. Sensors semblants comparteixen micromodels TinyML per a decidir en local, amb menys latència, menys consum i més privacitat. Hi ha pilots en qualitat de l'aire, logística d'última milla i posicionament en interiors.",
       'Communities of IoT and AI. Similar sensors share TinyML micro-models to decide locally, with lower latency, lower energy use and more privacy. Pilots cover air quality, last-mile logistics and indoor positioning.'],
    'Simulación de cuatro sensores de temperatura de una comunidad; al provocar una anomalía, el modelo compartido la detecta':
      ["Simulació de quatre sensors de temperatura d'una comunitat; en provocar una anomalia, el model compartit la detecta",
       'Simulation of four temperature sensors in a community; when you trigger an anomaly, the shared model detects it'],
    'Provocar una anomalía': ['Provocar una anomalia', 'Trigger an anomaly'],
    'comunidad estable · 4 sensores': ['comunitat estable · 4 sensors', 'stable community · 4 sensors'],
    'anomalía en el sensor 3': ['anomalia en el sensor 3', 'anomaly in sensor 3'],
    '· los otros 3 de la comunidad no la ven': ['· els altres 3 de la comunitat no la veuen', "· the other 3 in the community don't see it"],
    '°C · últimos minutos': ['°C · últims minuts', '°C · last few minutes'],
    'Simulación. El modelo de la comunidad aprende cómo se comportan sus sensores y avisa cuando uno se sale de lo normal.':
      ['Simulació. El model de la comunitat aprén com es comporten els seus sensors i avisa quan un ix del normal.',
       'Simulation. The community model learns how its sensors behave and warns when one goes out of the ordinary.'],
    'PID2022-141813OB-I00 · artículo en Internet of Things (Elsevier, 2026)':
      ['PID2022-141813OB-I00 · article a Internet of Things (Elsevier, 2026)', 'PID2022-141813OB-I00 · paper in Internet of Things (Elsevier, 2026)'],

    'Producto · educación · desde 2016': ['Producte · educació · des de 2016', 'Product · education · since 2016'],
    'Kit SucreCore con sensores de luz, pulsador, altavoz y bombilla conectados': ['Kit SucreCore amb sensors de llum, polsador, altaveu i bombeta connectats', 'SucreCore kit with light sensor, push button, speaker and bulb connected'],
    'Programa de ejemplo': ["Programa d'exemple", 'Example program'],
    'cuando': ['quan', 'when'],
    'luz < 30': ['llum < 30', 'light < 30'],
    'encender bombilla': ['encendre bombeta', 'turn on bulb'],
    '☀ luz': ['☀ llum', '☀ light'],
    'Mueve la luz y mira cómo reacciona el kit. Así aprenden pensamiento computacional desde los 4 años, con tarjetas (Sucre4Kids) o con bloques (Sucre4Stem).':
      ['Mou la llum i mira com reacciona el kit. Així aprenen pensament computacional des dels 4 anys, amb targetes (Sucre4Kids) o amb blocs (Sucre4Stem).',
       'Move the light and watch the kit react. This is how children learn computational thinking from age 4, with cards (Sucre4Kids) or with blocks (Sucre4Stem).'],

    'Producto · agricultura de precisión': ['Producte · agricultura de precisió', 'Product · precision agriculture'],
    'Una estación IoT que vive en el viñedo y avisa al móvil cuando el tiempo favorece el mildiu. Prueba la regla de los tres dieces: 10 °C, 10 mm de lluvia y brotes de 10 cm.':
      ['Una estació IoT que viu a la vinya i avisa al mòbil quan el temps afavoreix el míldiu. Prova la regla dels tres deus: 10 °C, 10 mm de pluja i brots de 10 cm.',
       'An IoT station that lives in the vineyard and alerts your phone when the weather favours downy mildew. Try the 10-10-10 rule: 10 °C, 10 mm of rain and 10 cm shoots.'],
    'temperatura': ['temperatura', 'temperature'],
    'lluvia 48 h': ['pluja 48 h', 'rain 48 h'],
    'brote': ['brot', 'shoot'],
    'riesgo bajo': ['risc baix', 'low risk'],
    'riesgo medio': ['risc mitjà', 'medium risk'],
    'riesgo alto · alerta enviada': ['risc alt · alerta enviada', 'high risk · alert sent'],
    'SENVIRO · ALERTA': ['SENVIRO · ALERTA', 'SENVIRO · ALERT'],
    'Condiciones de mildiu en la parcela. Revisa el viñedo.': ['Condicions de míldiu a la parcel·la. Revisa la vinya.', 'Downy mildew conditions in the plot. Check the vineyard.'],
    'Banco de patentes de la GVA · instalada en 6 bodegas · Premio 5UCV Startup':
      ['Banc de patents de la GVA · instal·lada en 6 cellers · Premi 5UCV Startup', 'GVA patent bank · installed in 6 wineries · 5UCV Startup Award'],

    'Lo que me mueve': ['El que em mou', 'What drives me'],
    '“Uno de mis objetivos es comunicar tanto como sea posible.”': ['“Un dels meus objectius és comunicar tant com siga possible.”', '“One of my goals is to communicate as much as possible.”'],
    'Qué investigo': ['Què investigue', 'What I research'],
    'Inteligencia en el borde de la red': ['Intel·ligència a la vora de la xarxa', 'Intelligence at the edge of the network'],
    'IA que corre en sensores diminutos, redes de dispositivos que aprenden juntas sin compartir datos, y datos geoespaciales que ayudan a decidir en ciudades y campos.':
      ["IA que s'executa en sensors diminuts, xarxes de dispositius que aprenen juntes sense compartir dades, i dades geoespacials que ajuden a decidir en ciutats i camps.",
       'AI that runs on tiny sensors, networks of devices that learn together without sharing data, and geospatial data that helps cities and farms make decisions.'],
    'Aprendizaje federado': ['Aprenentatge federat', 'Federated learning'],
    'Confianza en IoT': ['Confiança en IoT', 'Trust in IoT'],
    'Calidad del aire': ["Qualitat de l'aire", 'Air quality'],
    'Movilidad': ['Mobilitat', 'Mobility'],
    'Pensamiento computacional': ['Pensament computacional', 'Computational thinking'],
    'Publicaciones · se actualiza solo': ["Publicacions · s'actualitza sol", 'Publications · updated automatically'],
    'Lo último que he publicado': ['El més recent que he publicat', 'My latest publications'],
    'Todas, con factor de impacto y filtros →': ["Totes, amb factor d'impacte i filtres →", 'All of them, with impact factor and filters →'],
    'Dónde me encontrarás': ['On em trobaràs', 'Where to find me'],
    'Premios': ['Premis', 'Awards'],
    'Premi Joves Investigadors UJI': ['Premi Joves Investigadors UJI', 'UJI Young Researchers Award'],
    'Premio Junior 5UCV Startup': ['Premi Junior 5UCV Startup', '5UCV Startup Junior Award'],
    'Jóvenes Emprendedores COPE (SEnviro)': ['Joves Emprenedors COPE (SEnviro)', 'COPE Young Entrepreneurs Award (SEnviro)'],
    'También en marcha': ['També en marxa', 'Also under way'],
    'CoAIoT: plataforma de IA para el Internet de las Cosas (Becas Leonardo, Fundación BBVA)':
      ["CoAIoT: plataforma d'IA per a la Internet de les Coses (Beques Leonardo, Fundació BBVA)", 'CoAIoT: an AI platform for the Internet of Things (Leonardo Grants, BBVA Foundation)'],
    ': gemelos digitales para ciudades sostenibles (Horizon Europe)': [': bessons digitals per a ciutats sostenibles (Horizon Europe)', ': digital twins for sustainable cities (Horizon Europe)'],
    'Perfiles': ['Perfils', 'Profiles'],
    '¿Trabajamos juntos?': ['Treballem junts?', 'Shall we work together?'],
    'Estudiantes:': ['Estudiants:', 'Students:'],
    'TFG, TFM o doctorado en AIoT, TinyML o datos geoespaciales.': ['TFG, TFM o doctorat en AIoT, TinyML o dades geoespacials.', "bachelor's, master's or PhD theses on AIoT, TinyML or geospatial data."],
    'Centros educativos:': ['Centres educatius:', 'Schools:'],
    'talleres y formación docente con Sucre.': ['tallers i formació docent amb Sucre.', 'workshops and teacher training with Sucre.'],
    'Empresas y ayuntamientos:': ['Empreses i ajuntaments:', 'Companies and city councils:'],
    'transferencia, contratos de I+D y despliegues IoT.': ["transferència, contractes d'R+D i desplegaments IoT.", 'technology transfer, R&D contracts and IoT deployments.'],
    'Docencia': ['Docència', 'Teaching'],
    'TFM dirigidos · 8 tesis doctorales (2 defendidas)': ['TFM dirigits · 8 tesis doctorals (2 defensades)', "master's theses supervised · 8 PhD theses (2 defended)"],
    'comunicaciones en congresos nacionales e internacionales': ['comunicacions en congressos nacionals i internacionals', 'papers at national and international conferences'],
    'FI {x}': ['FI {x}', 'IF {x}'],

    /* portada (versión editorial) */
    'Investigación': ['Recerca', 'Research'],
    'Contacto': ['Contacte', 'Contact'],
    'Productos': ['Productes', 'Products'],
    'Proyecto en marcha': ['Projecte en marxa', 'Current project'],
    'Producto': ['Producte', 'Product'],
    'Soy profesor titular en la Universitat Jaume I y subdirector del Institut de Noves Tecnologies de la Imatge (INIT), donde trabajo en el grupo GEOTEC.':
      ["Sóc professor titular a la Universitat Jaume I i sotsdirector de l'Institut de Noves Tecnologies de la Imatge (INIT), on treballe en el grup GEOTEC.",
       "I'm an associate professor at Universitat Jaume I and deputy director of its Institute of New Imaging Technologies (INIT), where I work in the GEOTEC group."],
    'Investigo cómo conseguir que sensores pequeños decidan por sí mismos, sin depender de la nube, y cómo enseñar a programar desde los cuatro años. Casi todo lo que hago acaba en algo que se usa: un kit para escuelas, una estación para viñedos y plataformas para ciudades.':
      ['Investigue com aconseguir que sensors menuts decidisquen per si mateixos, sense dependre del núvol, i com ensenyar a programar des dels quatre anys. Quasi tot el que faig acaba en alguna cosa que es fa servir: un kit per a escoles, una estació per a vinyes i plataformes per a ciutats.',
       'I research how to get small sensors to make decisions on their own, without relying on the cloud, and how to teach programming from the age of four. Almost everything I do ends up as something people use: a kit for schools, a station for vineyards and platforms for cities.'],
    'Hasta hoy: {a} artículos en revistas, {c} citas en Google Scholar y {p} proyectos como investigador principal.':
      ['Fins ara: {a} articles en revistes, {c} cites a Google Scholar i {p} projectes com a investigador principal.',
       'So far: {a} journal articles, {c} citations on Google Scholar and {p} projects as principal investigator.'],
    'Ver el CV completo': ['Veure el CV complet', 'See the full CV'],
    'Proyectos en marcha': ['Projectes en marxa', 'Current projects'],
    'Proyecto que dirijo desde 2025, financiado por el Ministerio de Ciencia (CNS2024-154145).':
      ['Projecte que dirigisc des de 2025, finançat pel Ministeri de Ciència (CNS2024-154145).', 'A project I have led since 2025, funded by the Spanish Ministry of Science (CNS2024-154145).'],
    'Es una simulación: los datos nunca salen del dispositivo, solo viajan los modelos. La plataforma LIA-FL se publicó en SoftwareX en 2026.':
      ['És una simulació: les dades no ixen mai del dispositiu, només viatgen els models. La plataforma LIA-FL es va publicar a SoftwareX el 2026.',
       "It's a simulation: the data never leaves the device; only the models travel. The LIA-FL platform was published in SoftwareX in 2026."],
    'Proyecto de la Agencia Estatal de Investigación en cuyo equipo participo (PID2022-141813OB-I00).':
      ["Projecte de l'Agència Estatal d'Investigació en l'equip del qual participe (PID2022-141813OB-I00).", "A Spanish State Research Agency project whose team I'm part of (PID2022-141813OB-I00)."],
    'Es una simulación: el modelo de la comunidad aprende cómo se comportan sus sensores y avisa cuando uno se sale de lo normal. El primer artículo salió en Internet of Things (Elsevier) en 2026.':
      ['És una simulació: el model de la comunitat aprén com es comporten els seus sensors i avisa quan un ix del normal. El primer article va eixir a Internet of Things (Elsevier) el 2026.',
       "It's a simulation: the community model learns how its sensors behave and warns when one goes out of the ordinary. The first paper came out in Internet of Things (Elsevier) in 2026."],
    'Sucret, la mascota de Sucre. Tócala.': ['Sucret, la mascota de Sucre. Toca-la.', "Sucret, Sucre's mascot. Give it a tap."],
    'Desde 2016, con más de 20.000 jóvenes en talleres, ferias y aulas.': ['Des de 2016, amb més de 20.000 joves en tallers, fires i aules.', 'Since 2016, with more than 20,000 young people in workshops, fairs and classrooms.'],
    'Un kit de sensores y una app para aprender pensamiento computacional. Con Sucre4Kids se programa con tarjetas y sin pantallas desde los cuatro años; con Sucre4Stem, con bloques, hasta FP. Baja la luz y mira qué hace el kit.':
      ['Un kit de sensors i una aplicació per a aprendre pensament computacional. Amb Sucre4Kids es programa amb targetes i sense pantalles des dels quatre anys; amb Sucre4Stem, amb blocs, fins a FP. Abaixa la llum i mira què fa el kit.',
       'A kit of sensors and an app for learning computational thinking. With Sucre4Kids children code with cards and no screens from the age of four; with Sucre4Stem they use blocks, up to vocational training. Turn the light down and see what the kit does.'],
    'Estación para viñedos, protegida en el banco de patentes de la Generalitat e instalada en seis bodegas.':
      ['Estació per a vinyes, protegida en el banc de patents de la Generalitat i instal·lada en sis cellers.', "A vineyard station, protected in the Generalitat Valenciana's patent bank and installed in six wineries."],
    'Mide el microclima de la parcela y avisa al móvil cuando el tiempo favorece el mildiu. Prueba la regla de los tres dieces: 10 °C, 10 mm de lluvia y brotes de 10 cm.':
      ['Mesura el microclima de la parcel·la i avisa al mòbil quan el temps afavoreix el míldiu. Prova la regla dels tres deus: 10 °C, 10 mm de pluja i brots de 10 cm.',
       "It measures the plot's microclimate and alerts your phone when the weather favours downy mildew. Try the 10-10-10 rule: 10 °C, 10 mm of rain and 10 cm shoots."],
    'IA en microcontroladores (TinyML)': ['IA en microcontroladors (TinyML)', 'AI on microcontrollers (TinyML)'],
    'Aprendizaje federado y confianza en redes IoT': ['Aprenentatge federat i confiança en xarxes IoT', 'Federated learning and trust in IoT networks'],
    'Calidad del aire y movilidad': ["Qualitat de l'aire i mobilitat", 'Air quality and mobility'],
    'Ciudades y agricultura inteligentes': ['Ciutats i agricultura intel·ligents', 'Smart cities and smart farming'],
    'Pensamiento computacional en la escuela': ["Pensament computacional a l'escola", 'Computational thinking at school'],
    'Publicaciones recientes': ['Publicacions recents', 'Recent publications'],
    'Todas las publicaciones, con factor de impacto y filtros': ["Totes les publicacions, amb factor d'impacte i filtres", 'All publications, with impact factor and filters'],
    'Me encontrarás en MedNight, FirUJICiència, Connecta amb la Ciència, Practica la UJI e Ingenio Games.':
      ['Em trobaràs a MedNight, FirUJICiència, Connecta amb la Ciència, Practica la UJI i Ingenio Games.', "You'll find me at MedNight, FirUJICiència, Connecta amb la Ciència, Practica la UJI and Ingenio Games."],
    'Otros proyectos': ['Altres projectes', 'Other projects'],
    'Todos los proyectos, con filtros': ['Tots els projectes, amb filtres', 'All projects, with filters'],
    'Escríbeme:': ['Escriu-me:', 'Write to me:'],

    /* CV completo */
    'Currículum completo': ['Currículum complet', 'Full CV'],
    'Publicaciones con factor de impacto y cuartil, congresos, proyectos y tesis dirigidas. Las citas se recogen cada semana de varias fuentes.':
      ["Publicacions amb factor d'impacte i quartil, congressos, projectes i tesis dirigides. Les cites es recullen cada setmana de diverses fonts.",
       'Publications with impact factor and quartile, conferences, projects and supervised theses. Citations are collected every week from several sources.'],
    'Cargando datos…': ['Carregant dades…', 'Loading data…'],
    'Citas por fuente': ['Cites per font', 'Citations by source'],
    'Secciones del CV': ['Seccions del CV', 'CV sections'],
    'Citas: Google Scholar, OpenAlex, Semantic Scholar y Crossref': ['Cites: Google Scholar, OpenAlex, Semantic Scholar i Crossref', 'Citations: Google Scholar, OpenAlex, Semantic Scholar and Crossref'],
    'No se han podido cargar los datos': ["No s'han pogut carregar les dades", 'The data could not be loaded'],
    'Actualizado el': ['Actualitzat el', 'Updated on'],
    'sin clave de API': ["sense clau d'API", 'no API key'],
    'citas · h {h}': ['cites · h {h}', 'citations · h {h}'],
    'artículos': ['articles', 'articles'],
    'Q1 (JCR o SJR)': ['Q1 (JCR o SJR)', 'Q1 (JCR or SJR)'],
    'como primer autor': ['com a primer autor', 'as first author'],
    'congresos': ['congressos', 'conferences'],
    'capítulos': ['capítols', 'book chapters'],
    'proyectos como IP': ['projectes com a IP', 'projects as PI'],
    'tesis dirigidas': ['tesis dirigides', 'PhD theses supervised'],
    'Publicaciones': ['Publicacions', 'Publications'],
    'Tesis y TFM': ['Tesis i TFM', 'Theses'],
    'Buscar título, revista o coautor': ['Cerca per títol, revista o coautor', 'Search title, journal or co-author'],
    'Buscar publicaciones': ['Cercar publicacions', 'Search publications'],
    'Tipo': ['Tipus', 'Type'],
    'Todos los tipos': ['Tots els tipus', 'All types'],
    'Artículo': ['Article', 'Article'],
    'Capítulo': ['Capítol', 'Chapter'],
    'Libro': ['Llibre', 'Book'],
    'Informe': ['Informe', 'Report'],
    'Cuartil': ['Quartil', 'Quartile'],
    'Cualquier cuartil': ['Qualsevol quartil', 'Any quartile'],
    'Sin cuartil': ['Sense quartil', 'No quartile'],
    'Desde el año': ["Des de l'any", 'From year'],
    'Desde siempre': ['Des de sempre', 'All years'],
    'Ordenar': ['Ordenar', 'Sort'],
    'Más recientes': ['Més recents', 'Most recent'],
    'Mayor factor de impacto': ["Major factor d'impacte", 'Highest impact factor'],
    'Más citados': ['Més citats', 'Most cited'],
    'Primer autor': ['Primer autor', 'First author'],
    '{n} resultados · {c} citas': ['{n} resultats · {c} cites', '{n} results · {c} citations'],
    '{n} resultados · {m}': ['{n} resultats · {m}', '{n} results · {m}'],
    '{n} resultados': ['{n} resultats', '{n} results'],
    'Cuartil JCR (mejor categoría)': ['Quartil JCR (millor categoria)', 'JCR quartile (best category)'],
    'Cuartil SJR': ['Quartil SJR', 'SJR quartile'],
    'Factor de impacto JCR': ["Factor d'impacte JCR", 'JCR impact factor'],
    '1.er autor': ['1r autor', '1st author'],
    'autor de correspondencia': ['autor de correspondència', 'corresponding author'],
    'nuevo': ['nou', 'new'],
    'acceso abierto ↗': ['accés obert ↗', 'open access ↗'],
    'citas': ['cites', 'citations'],
    'Ninguna publicación cumple estos filtros.': ['Cap publicació compleix aquests filtres.', 'No publications match these filters.'],
    'Ver {n} más': ["Veure'n {n} més", 'Show {n} more'],
    'Buscar título o congreso': ['Cerca per títol o congrés', 'Search title or conference'],
    'Buscar congresos': ['Cercar congressos', 'Search conferences'],
    'Todos': ['Tots', 'All'],
    'Internacionales': ['Internacionals', 'International'],
    'Nacionales': ['Nacionals', 'National'],
    'internacional': ['internacional', 'international'],
    'Sin resultados.': ['Sense resultats.', 'No results.'],
    'Buscar proyecto o financiador': ['Cerca per projecte o finançador', 'Search project or funder'],
    'Buscar proyectos': ['Cercar projectes', 'Search projects'],
    'Cualquier rol': ['Qualsevol rol', 'Any role'],
    'Como IP': ['Com a IP', 'As PI'],
    'Como investigador': ['Com a investigador', 'As researcher'],
    'Ámbito': ['Àmbit', 'Scope'],
    'Todos los ámbitos': ['Tots els àmbits', 'All scopes'],
    'Internacional': ['Internacional', 'International'],
    'Nacional': ['Nacional', 'National'],
    'Autonómico': ['Autonòmic', 'Regional'],
    'Otro': ['Altre', 'Other'],
    'Proyectos y ayudas': ['Projectes i ajudes', 'Projects and grants'],
    'Proyecto': ['Projecte', 'Project'],
    'Ayuda personal': ['Ajuda personal', 'Personal grant'],
    'IP': ['IP', 'PI'],
    'Investigador': ['Investigador', 'Researcher'],
    'Titular': ['Titular', 'Holder'],
    'Buscar título o universidad': ['Cerca per títol o universitat', 'Search title or university'],
    'Buscar título, estudiante o universidad': ['Cerca per títol, estudiant o universitat', 'Search title, student or university'],
    'codirección:': ['codirecció:', 'co-supervised with:'],
    'Buscar trabajos dirigidos':['Cercar treballs dirigits', 'Search supervised work'],
    'Tesis ({n})': ['Tesis ({n})', 'PhD ({n})'],
    'TFM ({n})': ['TFM ({n})', "Master's ({n})"],
    'TFG ({n})': ['TFG ({n})', "Bachelor's ({n})"],
    'Todo': ['Tot', 'All'],
    'en curso': ['en curs', 'in progress'],
    'Tesis doctoral': ['Tesi doctoral', 'PhD thesis'],
    'TFM': ['TFM', "Master's"],
    'TFG': ['TFG', "Bachelor's"],
    'Artículos por año y cuartil': ['Articles per any i quartil', 'Articles per year and quartile'],
    'Citas según el año de publicación': ["Cites segons l'any de publicació", 'Citations by year of publication'],
    'Citas que han recibido los artículos de cada año': ["Cites que han rebut els articles de cada any", 'Citations received by the articles published each year'],
    'Artículos por año, apilados por cuartil': ['Articles per any, apilats per quartil', 'Articles per year, stacked by quartile'],
    'Citas por año de publicación': ['Cites per any de publicació', 'Citations per year of publication'],
    'Publicaciones por año y tipo': ['Publicacions per any i tipus', 'Publications per year and type'],
    'Publicaciones por año, apiladas por tipo': ['Publicacions per any, apilades per tipus', 'Publications per year, stacked by type'],
    'Citas por año de publicación, apiladas por tipo': ['Cites per any de publicació, apilades per tipus', 'Citations per year of publication, stacked by type'],
    'Artículos': ['Articles', 'Articles'],
    'Fuente: Google Scholar': ['Font: Google Scholar', 'Source: Google Scholar'],
    'Índice h': ['Índex h', 'h-index'],
    'índice h {h} · i10 {i}': ['índex h {h} · i10 {i}', 'h-index {h} · i10 {i}'],
    'artículos en revistas': ['articles en revistes', 'journal articles'],
    'en el primer cuartil (JCR o SJR)': ['en el primer quartil (JCR o SJR)', 'in the first quartile (JCR or SJR)'],
    'proyectos como investigador principal': ['projectes com a investigador principal', 'projects as principal investigator'],
    'Me encontrarás con un kit de Sucre en estas ferias y actividades:': ['Em trobaràs amb un kit de Sucre en aquestes fires i activitats:', "You'll find me with a Sucre kit at these fairs and events:"],
    'Índice i10': ['Índex i10', 'i10-index'],
    'Citas en Google Scholar': ['Cites a Google Scholar', 'Citations on Google Scholar'],
    'Citas: Google Scholar': ['Cites: Google Scholar', 'Citations: Google Scholar'],
    'Citas recibidas cada año': ['Cites rebudes cada any', 'Citations received per year'],
    'Citas recibidas cada año según Google Scholar': ['Cites rebudes cada any segons Google Scholar', 'Citations received per year according to Google Scholar'],
    '{c} citas en total · índice h {h} · i10 {i}': ['{c} cites en total · índex h {h} · i10 {i}', '{c} citations in total · h-index {h} · i10 {i}'],
    '{c} citas en total · índice h {h}': ['{c} cites en total · índex h {h}', '{c} citations in total · h-index {h}'],
    'Fuente: OpenAlex, Crossref y Semantic Scholar (la cifra más alta)': ['Font: OpenAlex, Crossref i Semantic Scholar (la xifra més alta)', 'Source: OpenAlex, Crossref and Semantic Scholar (highest figure)'],
    'Capítulos': ['Capítols', 'Chapters'],
    'Libros e informes': ['Llibres i informes', 'Books and reports'],
    'Ver como tabla': ['Veure com a taula', 'Show as table'],
    'Ocultar tabla': ['Amagar la taula', 'Hide table'],
    'Año': ['Any', 'Year'],
    'Total': ['Total', 'Total'],
    'Citas': ['Cites', 'Citations']
  };

  // plantillas: claves con {x}, de la más larga a la más corta
  var TPL = Object.keys(D).filter(function (k) { return k.indexOf('{') >= 0; })
    .sort(function (a, b) { return b.length - a.length; })
    .map(function (k) {
      var names = [];
      var re = k.replace(/[.*+?^$()|[\]\\]/g, '\\$&').replace(/\{(\w+)\}/g, function (_, n) { names.push(n); return '(.+?)'; });
      return { key: k, re: new RegExp('^' + re + '$'), names: names };
    });

  function pick() {
    try { var q = new URLSearchParams(location.search).get('lang'); if (LANGS.indexOf(q) >= 0) return q; } catch (e) {}
    try { var s = localStorage.getItem('lang'); if (LANGS.indexOf(s) >= 0) return s; } catch (e) {}
    var n = (navigator.language || 'es').toLowerCase();
    if (n.indexOf('ca') === 0 || n.indexOf('valencia') >= 0) return 'va';
    if (n.indexOf('es') === 0) return 'es';
    return 'en';
  }
  var lang = pick();

  function fill(tpl, vars) { return tpl.replace(/\{(\w+)\}/g, function (_, n) { return vars[n] != null ? vars[n] : ''; }); }

  // traduce un texto en castellano al idioma actual
  function tr(es) {
    if (lang === 'es') return es;
    var i = lang === 'va' ? 0 : 1, r = D[es];
    if (r) return r[i];
    for (var j = 0; j < TPL.length; j++) {
      var m = TPL[j].re.exec(es);
      if (m) {
        var vars = {}; TPL[j].names.forEach(function (n, k) { vars[n] = m[k + 1]; });
        return fill(D[TPL[j].key][i], vars);
      }
    }
    return es;
  }

  var ATTRS = ['aria-label', 'alt', 'placeholder', 'title'];
  function translateNode(root) {
    if (!root) return;
    if (root.nodeType === 3) return textNode(root);
    if (root.nodeType !== 1 || root.tagName === 'SCRIPT' || root.tagName === 'STYLE') return;
    attrs(root);
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null);
    var n;
    while ((n = w.nextNode())) {
      if (n.nodeType === 3) textNode(n);
      else if (n.tagName !== 'SCRIPT' && n.tagName !== 'STYLE') attrs(n);
    }
  }
  function textNode(n) {
    if (n.__src === undefined) n.__src = n.nodeValue;
    var raw = n.__src, core = raw.trim();
    if (!core) return;
    var out = tr(core);
    var v = raw.replace(core, out);
    if (n.nodeValue !== v) n.nodeValue = v;
  }
  function attrs(el) {
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i];
      if (!el.hasAttribute(a)) continue;
      el.__srcA = el.__srcA || {};
      if (el.__srcA[a] === undefined) el.__srcA[a] = el.getAttribute(a);
      var v = tr(el.__srcA[a]);
      if (el.getAttribute(a) !== v) el.setAttribute(a, v);
    }
  }

  function apply() {
    document.documentElement.lang = HTML_LANG[lang];
    translateNode(document.body);
    document.querySelectorAll('[data-lang]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
  }

  function setLang(l) {
    if (LANGS.indexOf(l) < 0 || l === lang) return;
    lang = l;
    try { localStorage.setItem('lang', l); } catch (e) {}
    apply();
    document.dispatchEvent(new CustomEvent('langchange', { detail: l }));
  }

  window.I18N = {
    get lang() { return lang; },
    locale: function () { return LOCALE[lang]; },
    t: function (es, vars) { return fill(tr(es), vars || {}); },
    nf: function (n, opts) { return Number(n).toLocaleString(LOCALE[lang], opts); },
    setLang: setLang
  };

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-lang]');
    if (b) setLang(b.dataset.lang);
  });

  function start() {
    apply();
    // lo que se pinte después (listas, contadores, simulaciones) también se traduce
    new MutationObserver(function (muts) {
      muts.forEach(function (m) { m.addedNodes.forEach(translateNode); });
    }).observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
