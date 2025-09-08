/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

// Chiedere all'utente di scegliere un numero  pari o dispari da 1 a 5 //
let [chance, numeroUtente] = [prompt("Scegli 'pari' o 'dispari':"), parseInt(prompt("Inserire un numero da 1 a 5"))];

// 3. Genera numero casuale per il computer 1–5//
let numeroComputer = generateRandomNumber();
console.log("Il computer ha scelto:" + numeroComputer);


//Somma dei due numeri//
let sum = numeroUtente + numeroComputer;
console.log("La somma è " + sum);

//controllare se la somma dei due numeri è pari o dispari//
function isEven(num)
return num % 2 === 0
let result;
if (isEven(sum)) {
  result = 'pari';
}
else {
  result = 'dispari';
}

console.log("La somma è" + result);

//convalidare la vincita o no //
if (result === chance) {
  console.log("Hai vinto");
}
else {
  console.log("Ha vinto il computer");
}