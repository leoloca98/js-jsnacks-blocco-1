/*

SNACK 1 : Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.

*/


/*

1 - Variabile che contiene i 5 numeri dell'utente (array)
2 - Chiedere i numeri all'utente
3 - Variabile che contiene la somma dei 5 numeri
4 - Stampare la somma dei 5 numeri

*/

// !FOR

var i = 1;
var userNumbers;
var sum = 0;
var somma = document.getElementById("Snack-sum-1");

for (i = 1; i <= 5; i++) {
    userNumbers = parseInt(prompt("Inserisci un numero (" + i + "/5)"));
    if (!isNaN(userNumbers)) {
        sum += userNumbers;
    } else i--;
}
somma.innerText = "La somma dei numeri è: " + sum;
console.log("La somma dei numeri è: " + sum);


// !WHILE

/*
while (i <= 5) {
    userNumbers = parseInt(prompt("Inserisci un numero (" + i + "/5)"));
    while (isNaN(userNumbers)) {
        userNumbers = parseInt(prompt("Inserisci un numero (" + i + "/5)"));
    }
    sum += userNumbers;
    i++;
}
somma.innerText = "La somma dei numeri è: " + sum;
console.log("La somma dei numeri è: " + sum);
*/


