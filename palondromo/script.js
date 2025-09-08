/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */


// inserire una parola da analizzare //
let word = prompt("gentilmente, inserisci una parola");

//funzione per capire se la parola è palindroma //
function isPalindrome(word) {
  let reversed = "";

  // ciclo //
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return word === reversed;
}

//stampa del risultato//
if (isPalindrome(word)) {
  console.log("la parola è palindroma!");

} else {
  console.log("la parola NON è palindroma.");

}
