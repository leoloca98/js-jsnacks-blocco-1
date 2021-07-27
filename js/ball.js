/*

SNACK: /
1. Creare un oggetto palla che abbia le seguenti proprietà.
  Nome = palla
  Peso = 10
2. stampare la palla in pagina*
3. Attraverso un prompt dare la possibilità all’utente di modificare il peso
della palla., poi stampare la palla con il peso modificato
BONUS: stampare la palla tramite una funzione

SNACK : Invece di modificare il peso con un prompt, proviamo a farlo con un input.
Avremo bisogno di un bottone...

*/

var ballElement = document.getElementById("ball");
var editWeight = document.getElementById("edit-weight");
var button = document.getElementById("button");
var palla = { nome: "palla", peso: "10" }
var weightValue;


button.addEventListener("click", function () {
    do {
        weightValue = editWeight.value;
    }
    while (!weightValue || isNaN(weightValue) || weightValue.trim() === "");
    palla.peso = weightValue;

    var content = "";
    for (var key in palla) {
        content += "<div>" + "<strong>" + key + "</strong>" + ": " + palla[key] + "</div>";
    }

    ballElement.innerHTML = content;
});

