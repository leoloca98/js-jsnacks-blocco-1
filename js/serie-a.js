/*

SNACK: Creiamo un array di oggetti contenente 3 squadre di calcio con proprietà "nome", "città" "punti";
Stampiamo le squadre in pagina, all'interno di una tabella HTML

*/
var categories = document.getElementById("categories");
var inter = document.getElementById("inter");
var Atalanta = document.getElementById("atalanta");
var Lazio = document.getElementById("lazio");



var teams = [
    {
        name: "Inter",
        city: "Milano",
        points: 87
    },
    {
        name: "Atalanta",
        city: "Bergamo",
        points: 74
    },
    {
        name: "Lazio",
        city: "Roma",
        points: 60
    }
]

var tableBody = document.querySelector("#table tbody");
var tableContent = "";

for (i = 0; i < teams.length; i++) {
    var currentTeam = teams[i];
    tableContent += "<tr>";
    tableContent += "<td>" + currentTeam.name + "</td>";
    tableContent += "<td>" + currentTeam.city + "</td>";
    tableContent += "<td>" + currentTeam.points + "</td>";
    tableContent += "</tr>";
}

tableBody.innerHTML = tableContent;

