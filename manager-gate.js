/* =========================================================
   ESPACE MANAGERS — LIRE AVANT DE MODIFIER
   ---------------------------------------------------------
   Cette page (managers.html) est un fichier statique hébergé
   sur un dépôt GitHub PUBLIC. Le HTML et le JS de ce site sont
   entièrement téléchargés par le navigateur, y compris par
   quelqu'un qui n'a pas le code — c'est pour ça que les
   ressources managers (MANAGER_RESOURCES_CIPHERTEXT ci-dessous)
   sont chiffrées : sans le bon code, ce n'est qu'une suite de
   caractères illisible, et ni le titre, ni la description, ni
   le lien de chaque ressource n'apparaissent en clair dans le
   code source tant que le bon code n'a pas été saisi.

   ⚠️ Ce chiffrement protège contre la consultation occasionnelle
   du code source, mais un code à 4 chiffres ne représente que
   10 000 combinaisons : quelqu'un de déterminé pourrait écrire
   un script qui les essaie toutes hors ligne pour déchiffrer le
   contenu. Ce n'est donc toujours pas un vrai coffre-fort.

   Règles à respecter :
   1. Ne mettez jamais ici de contenu réellement confidentiel
      (données personnelles, informations disciplinaires, etc.),
      même chiffré.
   2. Pour du contenu vraiment confidentiel : ne l'intégrez pas
      dans cette page. Utilisez un lien vers un espace DÉJÀ
      protégé par une authentification réelle (dossier Drive ou
      SharePoint restreint à un groupe, intranet avec
      identifiants nominatifs...). C'est ce système externe qui
      doit assurer la sécurité, pas cette page statique.
   3. Le code "4827" utilisé jusqu'ici est déjà visible dans
      l'historique Git de ce dépôt public. Si des managers
      l'utilisaient réellement, changez-le (voir plus bas).

   ---------------------------------------------------------
   COMMENT MODIFIER LES RESSOURCES OU LE CODE

   Comme les ressources sont chiffrées, vous ne pouvez plus les
   éditer directement dans le HTML : il faut régénérer le bloc
   chiffré. Ouvrez la console du navigateur sur managers.html
   (ou n'importe quelle page qui charge ce script) et exécutez :

     await encryptResources("VOTRE_CODE_A_4_CHIFFRES", [
       {
         icon: "📋",
         title: "Titre de la ressource",
         description: "Description courte.",
         url: "https://lien-vers-une-ressource-deja-securisee.fr",
         linkLabel: "Ouvrir"
       },
       // ... autant de ressources que nécessaire
     ])

   La fonction affiche une longue chaîne de caractères : copiez-la
   intégralement dans MANAGER_RESOURCES_CIPHERTEXT ci-dessous, à la
   place de la valeur actuelle.
========================================================= */
const MANAGER_RESOURCES_CIPHERTEXT =
  "ja3tTuEtHcCBsT/4cQyLlos3YE7rnxdzn6CcstD+xeMBNoYZTVPI1YqUVwoY6UcV3oJfqWTC9P+XqETUwyOfXI1xebjuouT/j+sJxClPrD7BDxT86ylD+afO05yNpzpQhXdgrkEi58P0SgDcJIgxMxYr1pNv/+1yo4hfDLX0ATjUzlNBNFDandlt1nwZHsMf0XPcMHjgjQ/uiuoG3mFEYWtW9SHwvc8zSqPGC0dnKuoIqkJl0Zoc+dw/a82YFNo67gUzN+0+9KRXMAXXRbmZCehqytochN+S9Z4XcG61WyG+N9hGGtTO0ihOrlRHZVkpxbwWaO6zYfHNVG7F+5mY7LF1kbvyo++4bm4BJloADxDkNXDYoHH/52WGSjw3S7B5MJTaj/ua2X/uEPWtzJOzSvze9zQ46la6D2ydORBnAGKKnzn7+2Yy+LuZvIdiURHLbUqlmD3otoC0VR34Bdu3BZY+oK7mtly84hgfaskghpH+nKaU3Rd5I7qFnnW17fVa37LWcA2i2pATnaaNZalCqOGaKY+dsQ3jztbqaDhN9vqpEc3QOofkJrKOpZjUS9wCVj0fT1BpDeQI/MJhljElLqesohKkgB8FOgm5hvLv2VsBRG4VISUeqEuAXO0o8QCGPaMC1987/Qt10J2DYQwQ6gkpaVREz0+jHsUH7T/ngz+uwCHY2slsPZGXn3ViW0QmTn+9JWu78IO+2gzbhVES57h9g/mXlaesXyYjKg=="; // ressources chiffrées avec le code "4827" — à régénérer, voir note ci-dessus

const MANAGER_MAX_ATTEMPTS = 5;
const MANAGER_LOCKOUT_MS = 60000;

let managerFailedAttempts = 0;
let managerLockedUntil = 0;

/* =========================================================
   OUTILS DE CHIFFREMENT (AES-256-GCM, clé dérivée du code)
========================================================= */

async function deriveKeyFromPin(pin){
  const bytes = new TextEncoder().encode(pin);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return crypto.subtle.importKey("raw", digest, "AES-GCM", false, ["encrypt", "decrypt"]);
}

function base64ToBytes(base64){
  return Uint8Array.from(atob(base64), c => c.charCodeAt(0));
}

function bytesToBase64(bytes){
  let binary = "";
  bytes.forEach(b => binary += String.fromCharCode(b));
  return btoa(binary);
}

// À exécuter dans la console pour régénérer MANAGER_RESOURCES_CIPHERTEXT
// (voir instructions dans le commentaire en haut de ce fichier).
async function encryptResources(pin, resourcesArray){
  const key = await deriveKeyFromPin(pin);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const plaintext = new TextEncoder().encode(JSON.stringify(resourcesArray));
  const ciphertext = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, plaintext);

  const combined = new Uint8Array(iv.length + ciphertext.byteLength);
  combined.set(iv, 0);
  combined.set(new Uint8Array(ciphertext), iv.length);

  const result = bytesToBase64(combined);
  console.log(result);
  return result;
}

// Tente de déchiffrer les ressources avec le code saisi.
// Retourne le tableau de ressources si le code est correct,
// ou null si le code est incorrect (l'échec de déchiffrement
// EST la vérification du code : il n'y a pas de code stocké
// séparément à comparer).
async function decryptResources(pin){
  try{
    const key = await deriveKeyFromPin(pin);
    const combined = base64ToBytes(MANAGER_RESOURCES_CIPHERTEXT);
    const iv = combined.slice(0, 12);
    const ciphertext = combined.slice(12);
    const plaintext = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ciphertext);
    return JSON.parse(new TextDecoder().decode(plaintext));
  }catch(error){
    return null; // code incorrect, ou données corrompues
  }
}

/* =========================================================
   AFFICHAGE
========================================================= */

function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}

function renderResources(resourcesArray){
  const container = document.getElementById("managerResources");
  if(!container) return;

  container.innerHTML = resourcesArray.map(resource => `
    <div class="manager-resource">
      <div class="manager-resource-info">
        <div class="manager-resource-title">
          ${escapeHtml(resource.icon || "")} ${escapeHtml(resource.title)}
        </div>
        <div class="manager-resource-description">
          ${escapeHtml(resource.description)}
        </div>
      </div>
      <a class="manager-resource-link" href="${escapeHtml(resource.url)}" target="_blank" rel="noopener">
        ${escapeHtml(resource.linkLabel || "Ouvrir")}
      </a>
    </div>
  `).join("");

  container.hidden = false;
}

/* =========================================================
   VERIFICATION DU CODE
========================================================= */

async function unlockManagerResources(){
  const input = document.getElementById("managerPin");
  const error = document.getElementById("managerPinError");
  const gate = document.getElementById("managerGate");
  const button = document.getElementById("managerPinSubmit");

  if(!input || !error || !gate) return;

  const now = Date.now();

  if(now < managerLockedUntil){
    const secondsLeft = Math.ceil((managerLockedUntil - now) / 1000);
    error.textContent = `Trop de tentatives. Réessayez dans ${secondsLeft}s.`;
    error.classList.add("active");
    return;
  }

  const pin = input.value.trim();

  if(!/^\d{4}$/.test(pin)){
    error.textContent = "Saisissez un code composé de 4 chiffres.";
    error.classList.add("active");
    return;
  }

  if(button) button.disabled = true;

  const resources = await decryptResources(pin);

  if(resources){
    managerFailedAttempts = 0;
    error.classList.remove("active");
    gate.hidden = true;
    renderResources(resources);
  }else{
    managerFailedAttempts += 1;

    if(managerFailedAttempts >= MANAGER_MAX_ATTEMPTS){
      managerLockedUntil = Date.now() + MANAGER_LOCKOUT_MS;
      managerFailedAttempts = 0;
      error.textContent = `Trop de tentatives. Réessayez dans ${Math.ceil(MANAGER_LOCKOUT_MS / 1000)}s.`;
    }else{
      error.textContent = "Code incorrect.";
    }

    error.classList.add("active");
    input.select();

    if(button) button.disabled = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("managerPin");
  if(!input) return;

  input.focus();

  input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "").slice(0, 4);
    const error = document.getElementById("managerPinError");
    if(error) error.classList.remove("active");
  });

  input.addEventListener("keydown", event => {
    if(event.key === "Enter"){
      event.preventDefault();
      unlockManagerResources();
    }
  });

  document.getElementById("managerPinSubmit")
    ?.addEventListener("click", unlockManagerResources);
});
