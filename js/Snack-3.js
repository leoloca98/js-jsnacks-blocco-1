/*

JSnack 3:
Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
Cercare di evitare che randomizzi un doppione. (cognome uguale va bene. Nome e Cognome uguale invece no)

*/

/*

1 - Creo 2 array contenti: 1° lista di nomi | 2° lista di cognomi (scelti tutti da noi)
2 - Creo variabile che prenderà un nome
3 - Creo variabile che prenderà un cognome
Fin - Un array contente 3 invitati con nome+cognome casuali presi dagli array sopra citati
*/


var firstNames = ["Andrea", "Luigi", "Riccardo", "Luca", "Davide", "Giorgio"];
var lastNames = ["Locatelli", "Ghisalberti", "Cavagna", "Esposito", "Chiesa", "Mancini"];
var invitated = [];
var displayTable = document.getElementById("Snack-table-3")
var listItems = "";
var a = 0;

while (invitated.length < 3) {
    var randomNum1 = Math.floor(Math.random() * firstNames.length);
    var randomNum2 = Math.floor(Math.random() * lastNames.length);

    var randomFirstName = firstNames[randomNum1];
    var randomLastName = lastNames[randomNum2];

    var fullName = randomFirstName + " " + randomLastName;
    console.log("Nome randomizzato: " + fullName);

    if (!invitated.includes(fullName)) {
        console.log("Nome inserito: " + fullName);
        invitated.push(fullName);
    }
}

console.table(invitated);

for (a = 0; a < invitated.length; a++) {
    listItems += "<li>" + invitated[a] + "</li>";
}

displayTable.innerHTML = listItems;