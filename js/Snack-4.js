/*

SNACK 4: Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.

*/

/*

1 - Creo due array contenenti delle liste casuali
2 - Confrontare la lunghezza degli array
3 - A chi risulta più corto vanno aggiunti n elementi tale che i 2 array siano lunghi uguali
4 - Aggiungere gli elementi
5 - Stampare gli array

*/

var firstArray = ["Mascarpone", "Uova", "Zucchero", "Spritz"];
var secondArray = ["Mascarpone", "Aperol", "ciao", "ciao"];

if (firstArray.length > secondArray.length) {
    while (firstArray.length > secondArray.length) {
        secondArray.push("something");
    }
} else if (firstArray.length < secondArray.length) {
    while (firstArray.length < secondArray.length) {
        firstArray.push("something");
    }
} else console.log("Hanno gia la stessa lunghezza");

console.table(firstArray);
console.table(secondArray);