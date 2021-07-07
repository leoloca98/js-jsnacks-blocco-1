// !SNACK 1

// *FOR

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


// *WHILE

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

// *************************************************************************************************************

// !SNACK 2

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




// *************************************************************************************************************

// !SNACK 3

var firstNames = ["Andrea", "Luigi", "Riccardo", "Luca", "Davide", "Giorgio"];
var lastNames = ["Locatelli", "Ghisalberti", "Cavagna", "Esposito", "Chiesa", "Mancini"];
var invitated = [];
var displayTable = document.getElementById("Snack-table-3")
var listItems = "";
var a = 0,

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




// *************************************************************************************************************

// !SNACK 4


var firstArray = ["Mascarpone", "Uova", "Zucchero", "Spritz"];
var secondArray = ["Mascarpone", "Aperol"];
var displayFirstArray = document.getElementById("Snack-firstA-4");
var displaySecondArray = document.getElementById("Snack-secondA-4");
var displayTitleFirstArray = document.getElementById("Snack-titleFirstA-4");
var displayTitleSecondArray = document.getElementById("Snack-titleSecondA-4");
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

displayTitleFirstArray.innerText = "Prima Lista:";

for (b = 0; b < firstArray.length; b++) {
    listItemsFirstArray += "<li>" + firstArray[b] + "</li>";
}
displayTitleSecondArray.innerText = "Seconda Lista:";

for (x = 0; x < firstArray.length; x++) {
    listItemsSecondArray += "<li>" + secondArray[x] + "</li>";
}

displayFirstArray.innerHTML = listItemsFirstArray;
displaySecondArray.innerHTML = listItemsSecondArray;