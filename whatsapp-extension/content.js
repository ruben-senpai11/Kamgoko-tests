// Sélectionne toutes les discussions

//alert('cliked')

const conversations = document.querySelectorAll('._ak8l');

let total = conversations.length;
let opened = 0;
let unopened = 0;

// Analyse chaque discussion
conversations.forEach(conversation => {
  const unreadBadge = conversation.querySelector('._ahlk');
  if (unreadBadge) {
    unopened++;
  } else {
    opened++;
  }
});

console.log(`Total: ${total}, Ouvertes: ${opened}, Non-ouvertes: ${unopened}`);

// Affiche les résultats
chrome.runtime.sendMessage({
  total: total,
  opened: opened,
  unopened: unopened
});
