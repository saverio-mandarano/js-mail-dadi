// Mail
// Crea una lista di email di invitati ad una festa.
const mailingList = [
  `octavia@gmail.com`,
  `saverio@gmail.com`,
  `lucrezia@gmail.com`,
  `pasquale@gmail.com`,
  `silvia@gmail.com`,
  `carmelo@gmail.com`,
  `gloria@gmail.com`,
  `andrea@gmail.com`,
  `marta@gmail.com`,
  `sebastiano@gmail.com`
];
console.log(mailingList);


// Chiedi all’utente la sua email.
const userEmail = prompt(`Inserisci il tuo indirizzo email completo:`);
console.log(`l'email dell'utente è: ${userEmail}`);


// Controlla che sia nella lista di chi può accedere.
// Stampa un messaggio appropriato sull’esito del controllo.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Non è necessario provvedere alla validazione delle email
let invited = false;
for (let i=0; i<mailingList.length && invited === false; i++){

    if (userEmail === mailingList[i]){
        invited = true;
    }

}

console.log(`l'utente è invitato? ${invited}`);

if (invited){
    alert(`Welcome, we are pleased to confirm that you are on the guest list!`);
}
else {
    alert(`We are sorry, but you are not on the guest list...`);
}