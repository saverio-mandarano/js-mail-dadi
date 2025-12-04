// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
const userDiceRoll = Math.floor(Math.random() * 6) + 1;
const computerDiceRoll = Math.floor(Math.random() * 6) + 1;
console.log(`User dice roll: ${userDiceRoll}`);
console.log(`Computer dice roll: ${computerDiceRoll}`);


// Stabilire il vincitore, in base a chi fa il punteggio più alto.
