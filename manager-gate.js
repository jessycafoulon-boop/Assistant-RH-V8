/* =========================================================
   ESPACE MANAGERS — LIRE AVANT DE MODIFIER
   ---------------------------------------------------------
   Cette page (managers.html) est un fichier statique hébergé
   sur un dépôt GitHub PUBLIC. Tout ce qui est écrit ici (y
   compris ce commentaire, et le HTML de managers.html) est
   téléchargé par le navigateur et lisible par n'importe qui :
   aucune valeur définie dans ce fichier ne peut donc être un
   vrai secret, même sous forme de hash.

   Le code ci-dessous ne sert qu'à éviter qu'un agent tombe
   accidentellement sur les ressources managers. Ce n'est PAS
   une protection contre quelqu'un qui chercherait
   volontairement à contourner ce contrôle : un code à 4
   chiffres représente 10 000 combinaisons, qui peuvent être
   testées en une fraction de seconde depuis la console du
   navigateur, hash ou pas. Et comme le HTML de managers.html
   est téléchargé en entier même sans saisir le code, tout lien
   déjà écrit dans ce fichier est déjà visible via "Afficher le
   code source", code ou pas.

   Règles à respecter dans managers.html :
   1. Ne mettez jamais de contenu réellement confidentiel en
      clair (données personnelles, informations disciplinaires,
      etc.).
   2. Pour du contenu vraiment confidentiel : ne l'intégrez pas
      dans cette page. Mettez un lien vers un espace DÉJÀ
      protégé par une authentification réelle (dossier Drive ou
      SharePoint restreint à un groupe, intranet avec
      identifiants nominatifs...). C'est ce système externe qui
      doit assurer la sécurité, pas cette page statique — le
      code à 4 chiffres n'est qu'un filtre d'usage, pas une
      protection.
   3. Le code "4827" utilisé jusqu'ici est déjà visible dans
      l'historique Git de ce dépôt public, même après l'avoir
      changé ci-dessous : considérez-le comme public et
      changez-le si des managers l'utilisaient réellement.

   Pour changer le code : ouvrez la console du navigateur sur
   cette page et exécutez, par exemple :
     await hashPin("1234")
   puis copiez le résultat obtenu dans MANAGER_PIN_HASH.
========================================================= */
const MANAGER_PIN_HASH =
  "f16592d12000ffca0f1159286959f4c2470c82a7b48940020b1323a6d49abe27"; // hash de "4827" — à changer, voir note ci-dessus
const MANAGER_MAX_ATTEMPTS = 5;
const MANAGER_LOCKOUT_MS = 60000;

let managerFailedAttempts = 0;
let managerLockedUntil = 0;

async function hashPin(pin){
  const bytes = new TextEncoder().encode(pin);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

async function unlockManagerResources(){
  const input = document.getElementById("managerPin");
  const error = document.getElementById("managerPinError");
  const gate = document.getElementById("managerGate");
  const resources = document.getElementById("managerResources");
  const button = document.querySelector(".manager-pin-submit");

  if(!input || !error || !gate || !resources) return;

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

  const pinHash = await hashPin(pin);

  if(pinHash === MANAGER_PIN_HASH){
    managerFailedAttempts = 0;
    error.classList.remove("active");
    gate.hidden = true;
    resources.hidden = false;
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
