/*

JSnack 2:
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.

*/

/*

1 - Variabile contenente il numero
2 - Inserirsci il numero attraverso un prompt
3 - Validazione
4 - Se è un numero pari -> stampa il numero
5 - Se è un numero dispari -> stampa il numero successivo (userNum + 1)

*/

var userNum;
var display = document.getElementById("Snack-2");

do {
    userNum = parseInt(prompt("Inserisci un numero"));
} while (isNaN(userNum))

if (userNum % 2 === 0) { //*Se pari
    console.log(userNum);

    display.innerText = "Il numero inserito è pari, quindi: " + userNum;
}
else {
    console.log(userNum + 1); //*Se dispari

    display.innerText = "Il numero inserito è dispari, quindi: " + (userNum + 1);
}