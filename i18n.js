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
    'Buscar trabajos dirigidos': ['Cercar treballs dirigits', 'Search supervised work'],
    'Tesis ({n})': ['Tesis ({n})', 'PhD ({n})'],
    'TFM ({n})': ['TFM ({n})', "Master's ({n})"],
    'TFG ({n})': ['TFG ({n})', "Bachelor's ({n})"],
    'Todo': ['Tot', 'All'],
    'en curso': ['en curs', 'in progress'],
    'Tesis doctoral': ['Tesi doctoral', 'PhD thesis'],
    'TFM': ['TFM', "Master's"],
    'TFG': ['TFG', "Bachelor's"]
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
