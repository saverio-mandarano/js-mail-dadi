// Snack 5
//  Crea un array vuoto. 
//  Chiedi per 6 volte all’utente di inserire un numero, 
//  se è dispari inseriscilo nell’array
const arrayDispari = [];

for (let i=0; i<6; i++) {
    let number = parseFloat(prompt(`inserisci un numero`));

    while (isNaN(number)){ //check
        number = parseFloat(prompt(`inserire numero VALIDO`));
    }
    
    if (number % 2 !== 0) {
       arrayDispari.push(number);
    }
}
console.log(arrayDispari);

// JSnack 2
// L’utente inserisce due parole in successione, con due prompt. 
// Il software stampa prima la parola più corta, poi la parola più lunga;

const stringOne = (prompt("Inserisci la prima parola:"));
const stringTwo = (prompt("Inserisci la seconda parola:"));
let shortString;
let longString;

if (stringOne.length < stringTwo.length){
  shortString = stringOne;
  longString = stringTwo;
}
else if (stringTwo.length < stringOne.length){
  shortString = stringTwo;
  longString = stringOne;
}
else{
  console.log(`le parole sono della stessa lunghezza, ed hanno lunghezza: ${stringOne.length}`);
  console.log(`la prima parole è: ${stringOne}` );
  console.log(`la seconda parole è: ${stringTwo}`);
}

if (shortString !== undefined && longString !== undefined) {
    console.log("Parola più corta:", shortString);
    console.log("Parola più lunga:", longString);
}



