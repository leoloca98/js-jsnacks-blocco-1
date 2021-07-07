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
var secondArray = ["Mascarpone", "Aperol"];
var displayFirstArray = document.getElementById("Snack-firstA-4");
var displaySecondArray = document.getElementById("Snack-secondA-4");
var listItemsFirstArray = "";
var listItemsSecondArray = "";
var b = 0;
var x = 0;

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

displayFirstArray.innerText = "Prima Lista:";

for (b = 0; b < firstArray.length; b++) {
    listItemsFirstArray += "<li>" + firstArray[b] + "</li>";
}
displaySecondArray.innerText = "Seconda Lista:";

for (x = 0; x < firstArray.length; x++) {
    listItemsSecondArray += "<li>" + secondArray[x] + "</li>";
}

displayFirstArray.innerHTML = listItemsFirstArray;
displaySecondArray.innerHTML = listItemsSecondArray;