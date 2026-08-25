
/* =========================================================
   CONFIGURATION
========================================================= */

const ORG_NAME =
  "Mairie de Conflans-Sainte-Honorine";


/* =========================================================
   CONTACTS
========================================================= */

const CONTACTS = {

  gestionnaireCarriere:{
    label:"Votre gestionnaire carrière",
    email:"rhgestion@mairie-conflans.fr",
    phone:"A_COMPLETER"
  },

  rhPaie:{
    label:"Secteur Paie",
    email:"rhpaie@mairie-conflans.fr",
    phone:"0134908879"
  },

  formation:{
    label:"Secteur Formation",
    email:"formationrh@mairie-conflans.fr",
    phone:"0134908903"
  },

  jessyca:{
    label:"Jessyca Foulon",
    email:"jfoulon@mairie-conflans.fr",
    phone:"0134908903"
  },

  informatique:{
    label:"Service informatique",
    email:"A_COMPLETER",
    phone:"A_COMPLETER"
  }

};

/* =========================================================
   DOCUMENTS
========================================================= */

const DOCUMENTS = {

  Gestcarr:{
    title:"Votre Gestionnaire carrière",
    description:
      "Pour connaître le nom de votre Gestionnaire carrière, cliquez sur ce lien.",
    type:"lien",
    format:"Lien",
    url:"https://c.conflans.mairie-conflans.fr/#!/community/Ressources%2520Humaines/b1876ea4-a47a-4cb4-b84e-076eeade8ce6/d8bad4a4-3557-4feb-8087-54df234e8080/f696bd4c-ba5b-483f-a228-13b29933ef85/viewdetail/"
  },

  tempstravail:{
    title:"Règlement relatif au temps de travail",
    description:
      "Organisation du temps de travail pour les agents de la ville, du CCAS et du théâtre.",
    type:"pdf",
    format:"PDF",
    url:"https://c.conflans.mairie-conflans.fr/#!/media/documents/ab19fec5-96cf-43b7-9b38-4e96e8bdcca6"
  },

  cet:{
    title:"Le Compte Épargne Temps",
    description:
      "Pour connaître le fonctionnement du Compte Épargne Temps, consultez ce document.",
    type:"pdf",
    format:"PDF",
    url:"https://c.conflans.mairie-conflans.fr/#!/media/documents/873c5cac-8923-4be2-8ca3-264c7676b923"
  },

  formulaireRIB:{
    title:"Formulaire de changement de coordonnées bancaires",
    description:
      "Formulaire à utiliser pour transmettre un nouveau RIB.",
    type:"formulaire",
    format:"Formulaire",
    url:"https://c.conflans.mairie-conflans.fr/#!/media/documents/df5ec181-0683-42e0-94d7-193218d840ff"
  },

  transmissiondocument:{
    title:"Comment transmettre vos documents au service RH",
    description:
      "Vous devez transmettre un document au service des Ressources Humaines ?",
    type:"page",
    format:"Page intranet",
    url:"https://c.conflans.mairie-conflans.fr/#!/community/Ressources%2520Humaines/b1876ea4-a47a-4cb4-b84e-076eeade8ce6/d8bad4a4-3557-4feb-8087-54df234e8080/658dd1e2-3072-45ff-9cc0-61b9913de021/viewdetail/"
  },

  versementsalaire:{
    title:"Calendrier de versement des salaires 2026",
    description:
      "Calendrier de versement des salaires 2026.",
    type:"page",
    format:"Page intranet",
    url:"https://c.conflans.mairie-conflans.fr/#!/community/Ressources%2520Humaines/b1876ea4-a47a-4cb4-b84e-076eeade8ce6/d8bad4a4-3557-4feb-8087-54df234e8080/72601d00-ac3a-416e-becf-58d4c729c93c/viewdetail/"
  },

  CartePluxee:{
    title:"Bulletin d'adhésion Pluxee",
    description:
      "Formulaire à compléter et transmettre au secteur Paie.",
    type:"formulaire",
    format:"Formulaire",
    url:"https://c.conflans.mairie-conflans.fr/#!/media/documents/1d06e930-963b-46dd-84eb-e8d120113c87"
  },

  CatalogueCNFPT:{
    title:"CNFPT : Offre de formation",
    description:
      "Consultez le catalogue des formations proposées par le CNFPT.",
    type:"page",
    format:"Page web",
    url:"https://www.cnfpt.fr/rechercher-formation?page=1&size=10"
  },

  Formulaireinscriptionformation:{
    title:"Formulaire de demande de formation CNFPT",
    description:
      "Formulaire à compléter pour une demande de formation.",
    type:"formulaire",
    format:"Formulaire",
    url:"https://c.conflans.mairie-conflans.fr/#!/media/documents/e4424002-3d33-442b-aecf-660f628e9a31"
  },

  Reglementformation:{
    title:"Le règlement de formation",
    description:
      "Informations essentielles sur vos droits relatifs à la formation.",
    type:"pdf",
    format:"PDF",
    url:"https://c.conflans.mairie-conflans.fr/#!/media/documents/1e9742a8-6173-4fa1-89ad-e12413e29eda"
  },

  Calendrierconcours:{
    title:"Calendrier des concours et examens professionnels",
    description:
      "Consultez le calendrier des prochains concours et examens professionnels.",
    type:"pdf",
    format:"PDF",
    url:"https://c.conflans.mairie-conflans.fr/#!/media/documents/27a81f61-c8ea-463b-b2d0-2a8d53fca549"
  },

  Prepaconcours:{
    title:"Préparation concours et examens professionnels",
    description:
      "Le CNFPT vous accompagne dans votre préparation.",
    type:"page",
    format:"Page web",
    url:"https://www.cnfpt.fr/evoluer/preparation-aux-concours-concours-examens-professionnels/preparer-concours-ou-examen-professionnel/national"
  },

  ConnexionSMD:{
    title:"Connexion SMD",
    description:
      "Comment accéder à votre compte SMD depuis votre mobile.",
    type:"pdf",
    format:"PDF",
    url:"https://c.conflans.mairie-conflans.fr/#!/media/documents/ad6e2366-b835-43d7-834a-1bcc5658f78e"
  }

};

/* =========================================================
   FAQ
========================================================= */

const FAQ = [

  {
    id:"conges",
    category:"Congés / Absences",
    keywords:[
      "congé","conges","congés","congés annuels",
      "solde congés","poser congé","poser mes congés",
      "annuler congé","modifier congé","reporter congé",
      "congés non pris","jours de congés","vacances",
      "RTT","rtt","absence","CET","solde CET",
      "compte épargne temps","congé bonifié","temps de travail"
    ],
    title:"Question sur vos congés, votre solde ou votre CET",
    answer:
      "Pour une question concernant vos congés, votre CET, votre solde de jours ou une anomalie dans votre compteur, contactez votre gestionnaire carrière.",
    contact:"gestionnaireCarriere",
    documents:["Gestcarr","tempstravail","cet"]
  },

  {
    id:"asa",
    category:"Congés / Absences",
    keywords:[
      "mariage","PACS","déménagement","demenagement",
      "décès","deces","enfant malade","mon enfant est malade",
      "ASA","autorisation spéciale d'absence",
      "absence exceptionnelle","absence urgente",
      "justificatif d'absence"
    ],
    title:"Question sur une absence exceptionnelle (ASA)",
    answer:
      "Pour une question concernant une absence exceptionnelle ou une ASA, contactez votre gestionnaire carrière.",
    contact:"gestionnaireCarriere",
    documents:["transmissiondocument","Gestcarr"]
  },

  {
    id:"salaire",
    category:"Paie",
    keywords:[
      "bulletin","salaire","paie","paye","remuneration",
      "rémunération","fiche de paie","fiche de salaire",
      "bulletin de salaire","prime","prélèvement",
      "prelevement","remboursement","abonnement","transports",
      "Navigo","indemnité","régime indemnitaire",
      "RIFSEEP","IFSE","CIA","NBI","indice majoré","SFT",
      "supplément familial","prélèvement à la source",
      "retenue sur salaire","régularisation",
      "heures supplémentaires","astreinte","permanence"
    ],
    title:"Question sur votre bulletin de salaire",
    answer:
      "Pour toute question sur votre dernier bulletin de salaire, son contenu, une prime, une retenue ou une variation de rémunération, contactez le secteur Paie.",
    contact:"rhPaie",
    documents:["versementsalaire"]
  },

  {
    id:"rib",
    category:"Paie",
    keywords:[
      "RIB","modifier RIB","changer RIB","changement RIB",
      "nouvelle banque","nouveau RIB","coordonnées bancaires",
      "coordonnees bancaires","compte bancaire",
      "changer de banque","changement de banque"
    ],
    title:"Changement de coordonnées bancaires",
    answer:
      "Pour transmettre votre nouveau RIB, utilisez le formulaire ci-dessous. Si nécessaire, contactez également le secteur Paie.",
    contact:"rhPaie",
    documents:["formulaireRIB"]
  },

  {
    id:"formation",
    category:"Formation",
    keywords:[
      "formation","former","stage","CNFPT","catalogue",
      "formation professionnelle","inscription formation",
      "demande formation","financement formation",
      "bilan de compétences","VAE","validation des acquis",
      "congé de formation","reconversion",
      "projet professionnel","formation obligatoire"
    ],
    title:"Question sur une formation",
    answer:
      "Pour une demande de formation, une question sur le catalogue ou le suivi d'une inscription, contactez le Service Formation.",
    contact:"formation",
    documents:[
      "CatalogueCNFPT",
      "Formulaireinscriptionformation",
      "Reglementformation"
    ]
  },

  {
    id:"concours",
    category:"Formation",
    keywords:[
      "concours","inscription concours","calendrier concours",
      "préparation concours","prépa concours","examen",
      "examen professionnel","examens professionnels"
    ],
    title:"Renseignements sur les concours ou examens professionnels",
    answer:
      "Contactez le service Formation afin de connaître la marche à suivre.",
    contact:"formation",
    documents:[
      "Calendrierconcours",
      "Prepaconcours"
    ]
  },

  {
    id:"cpf",
    category:"Formation",
    keywords:[
      "CPF","compte personnel de formation",
      "heures CPF","compteur CPF","solde CPF"
    ],
    title:"Question concernant votre CPF",
    answer:
      "Pour obtenir des informations sur votre compte CPF ou son utilisation, contactez le service Formation.",
    contact:"formation"
  },

  {
    id:"intranet",
    category:"Intranet",
    keywords:[
      "intranet","connexion intranet","connecter intranet",
      "mot de passe intranet","identifiant intranet",
      "login intranet","accès intranet","acces intranet",
      "C.Conflans"
    ],
    title:"Problème de connexion à l'intranet",
    answer:
      "Si vous n'arrivez pas à vous connecter à l'intranet, contactez la personne référente indiquée ci-dessous.",
    contact:"jessyca"
  },

  {
    id:"smd",
    category:"Compte SMD",
    keywords:[
      "connexion SMD","connecter SMD","connexion à SMD",
      "connexion au SMD","compte SMD","compte smd",
      "mot de passe SMD","identifiant SMD",
      "identifiants SMD","login SMD","accès SMD",
      "acces SMD","je ne connais pas mes identifiants"
    ],
    title:"Problème de connexion à votre compte SMD",
    answer:
      "Si vous n'arrivez pas à vous connecter à votre compte SMD, contactez votre gestionnaire carrière.",
    contact:"gestionnaireCarriere",
    documents:[
      "Gestcarr",
      "ConnexionSMD"
    ]
  },

  {
    id:"retraite",
    category:"Retraite",
    keywords:[
      "retraite","départ retraite","depart retraite",
      "partir en retraite","âge retraite","age retraite",
      "trimestres","carrière retraite",
      "erreur carrière","retraite progressive","pension"
    ],
    title:"Question concernant la retraite",
    answer:
      "Pour obtenir des informations sur votre retraite, contactez votre gestionnaire carrière.",
    contact:"gestionnaireCarriere"
  },

  {
    id:"informatique",
    category:"Informatique",
    keywords:[
      "ordinateur","PC","ordinateur portable","imprimante",
      "informatique","souris","clavier","logiciel",
      "écran","ecran","panne informatique"
    ],
    title:"Problème informatique",
    answer:
      "Pour un problème matériel ou informatique, contactez le service informatique de la collectivité.",
    contact:"informatique"
  },

  {
    id:"easter",
    category:"Humour",
    keywords:[
      "licorne",
      "en pls"
    ],
    title:"🦄 Vous avez trouvé un passage secret !",
    answer:
      "Bien joué. Vous venez de découvrir un petit secret de l'Assistant RH. Puisque vous êtes joueur, un défi un peu plus sérieux vous attend…",
    challenge:true
  }

];

/* =========================================================
   SUGGESTIONS
========================================================= */

const suggestions = [

  [
    "🏖️ Congés / Absences",
    "J'ai un problème avec mes congés"
  ],

  [
    "💶 Paie",
    "Je ne comprends pas mon dernier bulletin de salaire"
  ],

  [
    "🗂️ Dossier administratif",
    "Comment modifier mon adresse ?"
  ],

  [
    "🎓 Formation",
    "Je souhaite faire une formation"
  ],

  [
    "💻 Intranet",
    "Je n'arrive pas à me connecter à l'intranet"
  ],

  [
    "🎯 Compte SMD",
    "Je ne connais pas mes identifiants"
  ],

  [
    "📑 Documents",
    "J'ai besoin d'une attestation"
  ],

  [
    "👩‍🦳 Retraite",
    "Quand pourrai-je partir à la retraite ?"
  ]

];

/* =========================================================
   MINI ESCAPE GAME
========================================================= */

const GAME_STEPS = [

  /* =======================================================
     ÉTAPE 1 — COMPTE SMD
  ======================================================= */

  {
    title:"Étape 1 — Alex arrive et doit accéder à son compte SMD",

    case:
      "Alex vient d'arriver. Il doit accéder à son compte SMD mais ne sait pas encore comment obtenir ses accès.",

    question:
      "Quelle est la meilleure première démarche ?",

    options:[
      "Demander les identifiants d'un collègue",
      "Consulter la procédure d'accès au compte SMD et identifier son gestionnaire carrière",
      "Créer un nouveau compte lui-même",
      "Attendre qu'un collègue lui donne accès"
    ],

    correct:1,
    letter:"A",

    explanation:
      "Bon réflexe. Pour le compte SMD, l'Assistant RH permet de retrouver la procédure de connexion et d'identifier le gestionnaire carrière.",

    hint:
      "Cherchez la ressource « Connexion SMD » et le contact « Votre gestionnaire carrière ».",

    documents:["Gestcarr","ConnexionSMD"],
    contacts:["gestionnaireCarriere"]
  },

  /* =======================================================
     ÉTAPE 2 — PLUXEE
  ======================================================= */

  {
    title:"Étape 2 — Alex découvre la carte Pluxee",

    case:
      "Alex souhaite adhérer à la carte Pluxee. Il ne sait pas quel document remplir ni vers quel service se tourner.",

    question:
      "Quelle combinaison doit-il utiliser ?",

    options:[
      "Le formulaire Pluxee + le contact RH / Paie indiqué",
      "Le formulaire RIB + le service Formation",
      "Le calendrier des salaires + son gestionnaire carrière",
      "Le règlement de formation + le service informatique"
    ],

    correct:0,
    letter:"G",

    explanation:
      "Exact. Le « Bulletin d'adhésion Pluxee » est la ressource à utiliser pour effectuer la démarche. Le formulaire indique qu'il doit être transmis au secteur Paie.",

    hint:
      "Cherchez une ressource dont le nom contient « Pluxee ».",

    documents:["CartePluxee"],
    contacts:["rhPaie"]
  },

  /* =======================================================
     ÉTAPE 3 — FORMATION
  ======================================================= */

  {
    title:"Étape 3 — Alex veut se former",

    case:
      "Alex souhaite suivre une formation. Il veut savoir où trouver les formations disponibles et à qui s'adresser pour sa demande.",

    question:
      "Quel est le bon réflexe ?",

    options:[
      "Chercher uniquement sur Internet et s'inscrire directement",
      "Consulter les ressources Formation et contacter le secteur Formation",
      "Demander au service Paie de l'inscrire",
      "Contacter le gestionnaire carrière pour obtenir un bulletin de salaire"
    ],

    correct:1,
    letter:"E",

    explanation:
      "Exact. L'Assistant RH met à disposition plusieurs ressources liées à la formation et le contact du secteur Formation.",

    hint:
      "Regardez les ressources « Offre de formation », « Demande de formation » et « Règlement de formation ».",

    documents:["CatalogueCNFPT","Formulaireinscriptionformation","Reglementformation"],
    contacts:["formation"]
  },

  /* =======================================================
     ÉTAPE 4 — PAIE
  ======================================================= */

  {
    title:"Étape 4 — Quand Alex sera-t-il payé ?",

    case:
      "Alex veut savoir à quelle date son prochain salaire sera versé. Il cherche cette information dans son bulletin de salaire mais ne la trouve pas.",

    question:
      "Quelle ressource doit-il consulter ?",

    options:[
      "Le règlement relatif au temps de travail",
      "Le calendrier de versement des salaires 2026",
      "Le formulaire Pluxee",
      "La procédure d'accès SMD"
    ],

    correct:1,
    letter:"N",

    explanation:
      "Exact. Le calendrier de versement des salaires est précisément la ressource prévue pour connaître les dates de versement.",

    hint:
      "Cherchez la ressource qui contient « calendrier » et « salaires ».",

    documents:["versementsalaire"],
    contacts:["rhPaie"]
  },

  /* =======================================================
     ÉTAPE 5 — DÉFI FINAL
  ======================================================= */

  {
    title:"Étape 5 — Alex doit maintenant se débrouiller seul",

    case:
      "Alex a compris que l'Assistant RH ne donne pas forcément une réponse toute faite. Il doit maintenant résoudre une nouvelle situation en utilisant les ressources disponibles.",

    question:
      "Alex ne sait plus comment accéder à son compte SMD. Quelle méthode doit-il appliquer ?",

    options:[
      "Demander immédiatement le mot de passe d'un collègue",
      "Chercher la procédure SMD puis identifier le bon interlocuteur",
      "Essayer plusieurs comptes au hasard",
      "Abandonner et attendre qu'un collègue règle le problème"
    ],

    correct:1,
    letter:"T",

    explanation:
      "Parfait. Alex a compris le principe essentiel : chercher d'abord la bonne ressource, puis identifier le bon interlocuteur et effectuer la démarche prévue.",

    hint:
      "Revenez à la ressource « Connexion SMD » et au gestionnaire carrière.",

    documents:["Gestcarr","ConnexionSMD"],
    contacts:["gestionnaireCarriere"]
  }

];

/* =========================================================
   ETAT DU JEU
========================================================= */

let gameState = {
  step:0,
  score:100,
  letters:[],
  hintUsed:false,
  answered:false,
  finished:false
};

let selectedGameOption = null;

/* =========================================================
   SECURITE
========================================================= */

function escapeHtml(value){

  return String(value).replace(
    /[&<>"']/g,
    char => ({
      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      '"':"&quot;",
      "'":"&#039;"
    }[char])
  );

}

/* =========================================================
   NORMALISATION
========================================================= */

function normalize(value){

  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g,"")
    .trim();

}

/* =========================================================
   DETECTION MOBILE
========================================================= */

function isMobileDevice(){

  return window.matchMedia(
    "(max-width:600px)"
  ).matches;

}

/* =========================================================
   CONTACT
========================================================= */

function contactHtml(key){

  const contact =
    CONTACTS[key];

  if(!contact){
    return "";
  }

  const emailOk =
    contact.email &&
    !contact.email.includes("A_COMPLETER");

  const phoneOk =
    contact.phone &&
    !contact.phone.includes("A_COMPLETER");

  let html = `
    <div class="contact">

      <strong>
        📍 Votre interlocuteur :
        ${escapeHtml(contact.label)}
      </strong>
  `;

  if(emailOk){

    html += `
      <div>
        ✉️
        <a
          href="mailto:${escapeHtml(contact.email)}">

          ${escapeHtml(contact.email)}

        </a>
      </div>
    `;

  }

  if(phoneOk){

    const cleanPhone =
      String(contact.phone)
        .replace(/\s+/g,"");

    html += `
      <div>
        ☎️
        <a
          href="tel:${escapeHtml(cleanPhone)}">

          ${escapeHtml(contact.phone)}

        </a>
      </div>
    `;

  }

  html += `
    </div>
  `;

  return html;

}

/* =========================================================
   DOCUMENTS
========================================================= */

function documentButton(key){

  const doc =
    DOCUMENTS[key];

  if(!doc || !doc.url){
    return "";
  }

  let icon = "🔗";
  let label = "Ouvrir";

  if(doc.type === "pdf"){
    icon = "📄";
    label = "Ouvrir le PDF";
  }

  if(doc.type === "page"){
    icon = "🌐";
    label = "Ouvrir la page";
  }

  if(doc.type === "formulaire"){
    icon = "📝";
    label = "Ouvrir le formulaire";
  }

  if(doc.type === "annuaire"){
    icon = "👤";
    label = "Ouvrir l'annuaire";
  }

  return `
    <div class="document-box">

      <div class="document-title">
        ${icon}
        ${escapeHtml(doc.title)}
      </div>

      <div class="document-description">
        ${escapeHtml(doc.description)}
      </div>

      <span class="document-format">
        ${escapeHtml(doc.format)}
      </span>

      <div class="actions">

        <button
          class="action primary"
          type="button"
          onclick="openDocumentByKey('${escapeHtml(key)}')">

          ${icon}
          ${label}

        </button>

      </div>

    </div>
  `;

}

/* =========================================================
   OUVERTURE DOCUMENT
========================================================= */

function openDocumentByKey(key){

  const doc =
    DOCUMENTS[key];

  if(!doc || !doc.url){
    return;
  }

  if(isMobileDevice()){

    showMobileDocumentNotice(doc);

    return;
  }

  const opened =
    window.open(
      doc.url,
      "_blank"
    );

  if(!opened){

    window.location.href =
      doc.url;

  }

}

/* =========================================================
   MODALE DOCUMENT MOBILE
========================================================= */

function showMobileDocumentNotice(doc){

  const existing =
    document.getElementById(
      "documentModal"
    );

  if(existing){
    existing.remove();
  }

  const modal =
    document.createElement("div");

  modal.id =
    "documentModal";

  modal.innerHTML = `
    <div
      class="document-overlay"
      onclick="closeDocumentModal(event)">

      <div
        class="document-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="documentModalTitle"
        onclick="event.stopPropagation()">

        <button
          class="document-close"
          type="button"
          aria-label="Fermer"
          onclick="closeDocumentModal()">

          ✕

        </button>

        <div class="document-icon">
          📄
        </div>

        <h3 id="documentModalTitle">
          ${escapeHtml(
            doc.title || "Document RH"
          )}
        </h3>

        <p>
          Vous consultez ce document depuis
          un téléphone.
          L'accès à certains documents de
          l'intranet peut nécessiter une
          reconnexion.
        </p>

        <p class="document-info">

          Si l'intranet vous demande vos
          identifiants, connectez-vous puis
          revenez dans votre navigateur.

        </p>

        <div class="actions document-actions">

          <a
            class="action primary"
            href="${escapeHtml(doc.url)}"
            target="_blank"
            rel="noopener noreferrer">

            🔐 Ouvrir le document

          </a>

          <button
            class="action"
            type="button"
            onclick="closeDocumentModal()">

            Retour

          </button>

        </div>

      </div>

    </div>
  `;

  document.body.appendChild(modal);

  document.body.style.overflow =
    "hidden";

}

/* =========================================================
   FERMETURE MODALE
========================================================= */

function closeDocumentModal(event){

  if(
    event &&
    event.target !== event.currentTarget
  ){
    return;
  }

  const modal =
    document.getElementById(
      "documentModal"
    );

  if(modal){
    modal.remove();
  }

  document.body.style.overflow =
    "";

}

/* =========================================================
   MOTEUR RH
========================================================= */

function scoreQuestion(question,item){

  const q =
    normalize(question);

  let score = 0;

  for(const keyword of item.keywords){

    const k =
      normalize(keyword);

    if(q.includes(k)){

      score +=
        k.length >= 7
          ? 3
          : 2;

    }

  }

  return score;

}

function findMatches(question){

  return FAQ
    .map(item => ({
      item,
      score:
        scoreQuestion(
          question,
          item
        )
    }))
    .filter(x => x.score > 0)
    .sort(
      (a,b) =>
        b.score - a.score
    );

}

/* =========================================================
   CHAT
========================================================= */

function addMessage(html, who = "bot"){
  const element = document.createElement("div");
  element.className = "msg " + who;
  element.innerHTML = html;
  document.getElementById("chat").appendChild(element);

  requestAnimationFrame(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    element.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "nearest" });
  });
}

/* =========================================================
   REPONSE RH
========================================================= */

function answer(question){

  const matches =
    findMatches(question);

  if(!matches.length){

    addMessage(`
      <div class="answer">

        <h3>
          Je n'ai pas identifié votre demande
        </h3>

        <p>
          Essayez avec des mots comme
          <strong>congés</strong>,
          <strong>paie</strong>,
          <strong>formation</strong>,
          <strong>RIB</strong>,
          <strong>intranet</strong>
          ou
          <strong>informatique</strong>.
        </p>

      </div>
    `);

    return;

  }

  const best =
    matches[0];

  let html = `
    <div class="answer">

      <span class="badge">
        ${escapeHtml(
          best.item.category
        )}
      </span>

      <h3>
        ${escapeHtml(
          best.item.title
        )}
      </h3>

      <p>
        ${escapeHtml(
          best.item.answer
        )}
      </p>
  `;

  if(best.item.challenge){

    html += `
      <div class="actions">

        <button
          class="action primary"
          type="button"
          onclick="startEscapeGame()">

          🕵️ Envie de jouer ?

        </button>

      </div>
    `;

  }else{

    html +=
      contactHtml(
        best.item.contact
      );

    if(best.item.documents){

      html +=
        best.item.documents
          .map(key =>
            documentButton(key)
          )
          .join("");

    }

  }

  html += `
    </div>
  `;

  addMessage(html);

}

/* =========================================================
   GOOGLE FORMS
========================================================= */

const GOOGLE_FORM_LIKE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd415h4_XtNb2YSoWM3QA1jQfxT4uVZXR_inQP4fa5PF-3znA/viewform?usp=pp_url&entry.1522524480=J'aime+cet+outil";

function feedbackHtml(){

  return `
    <div class="feedback">

      <div class="feedback-title">
        Votre avis nous intéresse ❤️
      </div>

      <div class="feedback-text">

        Maintenant, vous savez vous servir de votre
        Assistant RH ! 🎉

        <br><br>

        N'hésitez pas à nous dire si vous aimez cet outil
        en appuyant sur le pouce ci-dessous.

      </div>

      <div class="like-area">

        <button
          id="likeButton"
          class="like-button"
          type="button"
          onclick="sendLike()">

          👍 J'aime cet outil

        </button>

        <button
          class="dislike-button"
          type="button"
          onclick="sendDislike()">

          👎

        </button>

        <span
          class="like-count"
          id="likeCount">

          Votre avis compte !

        </span>

      </div>

    </div>
  `;

}

function sendLike(){

  try{

    localStorage.setItem(
      "assistantRH_liked",
      "true"
    );

  }catch(error){
    /* LocalStorage indisponible :
       on continue quand même. */
  }

  const button =
    document.getElementById(
      "likeButton"
    );

  const count =
    document.getElementById(
      "likeCount"
    );

  if(button){

    button.classList.add(
      "liked"
    );

    button.textContent =
      "👍 Merci !";

  }

  if(count){

    count.textContent =
      "Merci pour votre avis ❤️";

  }

  window.open(
    GOOGLE_FORM_LIKE_URL,
    "_blank"
  );

}

function sendDislike(){

  const url =
    GOOGLE_FORM_LIKE_URL.replace(
      "J'aime+cet+outil",
      "Je+n'aime+pas+encore+cet+outil"
    );

  window.open(
    url,
    "_blank"
  );

}

/* =========================================================
   JEU — INITIALISATION
========================================================= */

function startEscapeGame(){

  gameState = {
    step:0,
    score:100,
    letters:[],
    hintUsed:false,
    answered:false,
    finished:false
  };

  selectedGameOption =
    null;

  const container =
    document.getElementById(
      "gameContainer"
    );

  container.classList.remove(
    "hidden"
  );

  renderGame();

  setTimeout(() => {

    container.scrollIntoView({
      behavior:
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
          ? "auto"
          : "smooth",
      block:"start"
    });

  },50);

}

/* =========================================================
   RENDU DU JEU
========================================================= */

function renderGame(){

  const container =
    document.getElementById(
      "gameContainer"
    );

  if(gameState.finished){

    renderVictory();

    return;

  }

  const step =
    GAME_STEPS[
      gameState.step
    ];

  const progress =
    (
      gameState.step /
      GAME_STEPS.length
    ) * 100;

  const lettersHtml =
    GAME_STEPS
      .map(
        (_,index) => {

          const letter =
            gameState.letters[
              index
            ];

          return `
            <div
              class="letter ${
                letter
                  ? "found"
                  : ""
              }">

              ${letter || "?"}

            </div>
          `;

        }
      )
      .join("");

  container.innerHTML = `

    <section class="game-card">

      <div class="game-header">

        <div>

          <div class="game-title">
            🧭 Le premier jour du nouvel agent
          </div>

          <div class="game-subtitle">

            Un mini parcours RH.
            Aidez Alex à trouver les bonnes ressources
            et les bons interlocuteurs.

          </div>

        </div>

        <div class="game-score">
          ⭐ ${gameState.score} pts
        </div>

      </div>

      <div class="progress"
           aria-label="Progression du jeu">

        <div
          class="progress-bar"
          style="width:${progress}%">
        </div>

      </div>

      <div class="letters">

        ${lettersHtml}

      </div>

      <div class="case-file">

        <strong>
          📁 DOSSIER CONFIDENTIEL
        </strong>

        ${escapeHtml(
          step.case
        )}

      </div>

      <div class="game-question">

        ${escapeHtml(
          step.title
        )}

        <br><br>

        ${escapeHtml(
          step.question
        )}

      </div>

      ${step.documents && step.documents.length ? `
        <div class="document-box" style="margin-bottom:16px;">
          <div class="document-title">📚 Ressources à consulter</div>
          <div class="document-description">
            Les ressources de ton Assistant RH sont tes outils de travail. Ouvre-les avant de choisir ta réponse.
          </div>
          ${step.documents.map(key => documentButton(key)).join("")}
        </div>
      ` : ""}

      ${step.contacts && step.contacts.length ? `
        <div class="document-box" style="margin-bottom:16px;">
          <div class="document-title">👤 Interlocuteur utile</div>
          <div class="document-description">
            Identifie le bon service avant de passer à l'action.
          </div>
          ${step.contacts.map(key => contactHtml(key)).join("")}
        </div>
      ` : ""}

      <div class="game-options">

        ${step.options
          .map(
            (option,index) => `

              <button
                type="button"
                class="game-option"
                data-index="${index}"
                onclick="selectGameOption(${index})">

                ${escapeHtml(option)}

              </button>

            `
          )
          .join("")}

      </div>

      <div class="game-actions">

        <button
          class="game-button"
          type="button"
          onclick="validateGameAnswer()">

          🔎 Valider

        </button>

        <button
          class="game-button secondary"
          type="button"
          onclick="showGameHint()">

          💡 Indice
          ${gameState.hintUsed
            ? "utilisé"
            : ""}

        </button>

      </div>

      <div id="gameFeedback"></div>

    </section>

  `;

}

/* =========================================================
   SELECTION JEU
========================================================= */

function selectGameOption(index){

  selectedGameOption =
    index;

  document
    .querySelectorAll(
      ".game-option"
    )
    .forEach(button => {

      button.classList.toggle(
        "selected",
        Number(
          button.dataset.index
        ) === index
      );

    });

}

/* =========================================================
   INDICE
========================================================= */

function showGameHint(){

  const step =
    GAME_STEPS[
      gameState.step
    ];

  const feedback =
    document.getElementById(
      "gameFeedback"
    );

  if(!feedback){
    return;
  }

  if(!gameState.hintUsed){

    gameState.hintUsed =
      true;

    gameState.score =
      Math.max(
        0,
        gameState.score - 10
      );

  }

  feedback.innerHTML = `

    <div class="hint">

      💡 <strong>Indice :</strong>

      ${escapeHtml(
        step.hint
      )}

      <br><br>

      <small>
        Utiliser un indice vous coûte 10 points.
      </small>

    </div>

  `;

  const score =
    document.querySelector(
      ".game-score"
    );

  if(score){

    score.textContent =
      `⭐ ${gameState.score} pts`;

  }

}

/* =========================================================
   VALIDATION JEU
========================================================= */

function validateGameAnswer(){

  const feedback =
    document.getElementById(
      "gameFeedback"
    );

  const step =
    GAME_STEPS[
      gameState.step
    ];

  if(!feedback){
    return;
  }

  if(selectedGameOption === null){

    feedback.innerHTML = `

      <div class="game-feedback error">

        🔎 Choisissez une réponse
        avant de valider.

      </div>

    `;

    return;

  }

  if(
    selectedGameOption ===
    step.correct
  ){

    /*
     * Évite de récupérer deux fois
     * la même lettre si l'utilisateur
     * clique plusieurs fois.
     */

    if(!gameState.answered){

      gameState.letters.push(
        step.letter
      );

    }

    gameState.answered =
      true;

    document
      .querySelectorAll(
        ".game-option"
      )
      .forEach(button => {

        const index =
          Number(
            button.dataset.index
          );

        if(
          index ===
          step.correct
        ){

          button.classList.add(
            "correct"
          );

        }

        button.disabled =
          true;

      });

    feedback.innerHTML = `

      <div class="game-feedback success">

        ✅ Bonne réponse.

        <br><br>

        ${escapeHtml(
          step.explanation
        )}

        <br><br>

        <strong>
          Lettre récupérée :
          ${escapeHtml(
            step.letter
          )}
        </strong>

        <br><br>

        ${
          gameState.step <
          GAME_STEPS.length - 1

            ? "La suite du dossier vous attend…"

            : "Toutes les pièces sont maintenant réunies."
        }

      </div>

      ${
        gameState.step <
        GAME_STEPS.length - 1

          ? `

            <div class="game-actions">

              <button
                class="game-button"
                type="button"
                onclick="nextGameStep()">

                Continuer →

              </button>

            </div>

          `

          : `

            <div class="game-actions">

              <button
                class="game-button"
                type="button"
                onclick="showFinalCode()">

                🔐 Examiner le code final

              </button>

            </div>

          `
      }

    `;

  }else{

    gameState.score =
      Math.max(
        0,
        gameState.score - 15
      );

    document
      .querySelectorAll(
        ".game-option"
      )
      .forEach(button => {

        const index =
          Number(
            button.dataset.index
          );

        if(
          index ===
          selectedGameOption
        ){

          button.classList.add(
            "wrong"
          );

        }

      });

    feedback.innerHTML = `

      <div class="game-feedback error">

        ❌ Ce n'est pas la bonne piste.

        <br><br>

        Relisez attentivement le dossier.
        Certaines réponses semblent plausibles,
        mais une seule correspond exactement
        aux ressources de l'Assistant.

        <br><br>

        <strong>
          -15 points
        </strong>

      </div>

    `;

    const score =
      document.querySelector(
        ".game-score"
      );

    if(score){

      score.textContent =
        `⭐ ${gameState.score} pts`;

    }

  }

}

/* =========================================================
   ETAPE SUIVANTE
========================================================= */

function nextGameStep(){

  if(!gameState.answered){
    return;
  }

  gameState.step++;

  gameState.hintUsed =
    false;

  gameState.answered =
    false;

  selectedGameOption =
    null;

  renderGame();

}

/* =========================================================
   CODE FINAL
========================================================= */

function showFinalCode(){

  const container =
    document.getElementById(
      "gameContainer"
    );

  container.innerHTML = `

    <section class="game-card">

      <div class="game-title">
        🔐 Dernière pièce du dossier
      </div>

      <p>
        Vous avez récupéré cinq lettres :
      </p>

      <div class="letters">

        ${gameState.letters
          .map(
            letter => `

              <div class="letter found">
                ${escapeHtml(letter)}
              </div>

            `
          )
          .join("")}

      </div>

      <div class="case-file">

        <strong>
          🧠 Le dernier raisonnement
        </strong>

        Les cinq lettres forment directement
        le code final.

        <br><br>

        <strong>
          A — G — E — N — T
        </strong>

        <br><br>

        Elles suivent la logique de votre enquête :
        trouver l'information, croiser les ressources,
        puis passer à l'action.

      </div>

      <div class="final-code">

        <div class="final-code-title">
          🔑 Quel est le code final ?
        </div>

        <p>
          Indice supplémentaire :
          les lettres récupérées doivent être lues
          dans l'ordre des cinq étapes.
        </p>

        <input
          id="finalCodeInput"
          class="final-input"
          autocomplete="off"
          autocapitalize="characters"
          enterkeyhint="done"
          placeholder="Entrez le mot final…">

        <div class="game-actions">

          <button
            class="game-button"
            type="button"
            onclick="validateFinalCode()">

            🔓 Déverrouiller

          </button>

        </div>

        <div id="finalFeedback"></div>

      </div>

    </section>

  `;

  setTimeout(() => {

    const input =
      document.getElementById(
        "finalCodeInput"
      );

    if(input){
      input.focus();
    }

  },100);

}

/* =========================================================
   VALIDATION CODE FINAL
========================================================= */

function validateFinalCode(){

  const input =
    document.getElementById(
      "finalCodeInput"
    );

  const feedback =
    document.getElementById(
      "finalFeedback"
    );

  if(!input || !feedback){
    return;
  }

  const answer =
    normalize(
      input.value
    );

  if(answer === "agent"){

    gameState.finished =
      true;

    renderVictory();

    return;

  }

  feedback.innerHTML = `

    <div class="game-feedback error">

      🔒 Code incorrect.

      <br><br>

      Vous êtes tout près.

      <br>

      Pensez à ce que l'Assistant doit vous
      permettre de faire une fois la bonne
      information trouvée.

    </div>

  `;

}

/* =========================================================
   VICTOIRE
========================================================= */

function renderVictory(){

  const container =
    document.getElementById(
      "gameContainer"
    );

  const letters =
    gameState.letters.join(
      " · "
    );

  container.innerHTML = `

    <section class="game-card">

      <div class="victory">

        <div
          style="font-size:48px;"
          aria-hidden="true">

          🏆

        </div>

        <h2>
          MISSION RÉUSSIE
        </h2>

        <p>

          Vous avez accompagné Alex pendant sa première journée.

          <br><br>

          Vous avez appris à chercher une ressource,
          identifier le bon service, croiser plusieurs
          informations et aller jusqu'à la bonne action.

        </p>

        <div class="points">
          ⭐ ${gameState.score} points
        </div>

        <p>

          Les lettres récupérées :
          <strong>
            ${escapeHtml(letters)}
          </strong>

        </p>

        <p>

          Code final :
          <strong>AGENT</strong>
          🔓

        </p>

        <p>

          Alex sait maintenant où chercher, qui contacter et comment passer à l’action avec les ressources de l’Assistant RH. 😉

        </p>

      </div>

      ${feedbackHtml()}

      <div class="actions">

        <button
          class="action"
          type="button"
          onclick="startEscapeGame()">

          🔄 Rejouer

        </button>

      </div>

    </section>

  `;

}

/* =========================================================
   FORMULAIRE QUESTION
========================================================= */

document.getElementById("questionForm").addEventListener("submit", event => {
  event.preventDefault();

  const input = document.getElementById("question");
  const question = input.value.trim();
  if(!question) return;

  addMessage(escapeHtml(question), "user");
  input.value = "";
  input.blur(); // sur mobile, ferme le clavier après l'envoi

  setTimeout(() => answer(question), 120);
});

/* =========================================================
   SUGGESTIONS
========================================================= */

const suggestionsContainer = document.getElementById("suggestions");

suggestions.forEach(([label, question]) => {
  const button = document.createElement("button");
  button.className = "chip";
  button.type = "button";
  button.textContent = label;

  button.onclick = () => {
    addMessage(escapeHtml(question), "user");
    setTimeout(() => answer(question), 120);
  };

  suggestionsContainer.appendChild(button);
});

/* =========================================================
   MESSAGE INITIAL
========================================================= */

addMessage(`

  <div class="answer">

    <h3>
      👋 Je suis prêt !
    </h3>

    <p>
      Posez-moi votre question ou choisissez
      une suggestion pour commencer.
    </p>

    <p>
      Et si vous avez envie de tester vos talents
      d'enquêteur, le bouton
      <strong>🕵️ Envie de jouer ?</strong>
      vous attend juste au-dessus.
    </p>

  </div>

`);

/* =========================================================
   RESTAURATION DU FEEDBACK
========================================================= */

try{
  if(localStorage.getItem("assistantRH_liked") === "true"){
    // Le bouton n'existe que lorsque le jeu est terminé,
    // donc rien à faire ici pour le moment.
  }
}catch(error){
  /* LocalStorage indisponible */
}

/* =========================================================
   FERMETURE MODALE AVEC ECHAP
========================================================= */

document.addEventListener("keydown", event => {
  if(event.key !== "Escape") return;
  closeDocumentModal();
});

