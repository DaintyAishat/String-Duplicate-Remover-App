function submitString() {
    var inputString = document.getElementById("inputString").value.trim();
    if (!inputString.match(/^[A-Za-z]+$/)) {
        alert("Please enter only alphabets.");
        return;
    }
    displayPage2(inputString);
}

function displayPage2(inputString) {
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var originalString = document.getElementById("originalString");
    var adjustedString = document.getElementById("adjustedString");

    // Hide page 1, display page 2
    page1.style.display = "none";
    page2.style.display = "block";

    // Display original string
    originalString.textContent = "Original String: " + inputString;

    // Split string into characters and create cards for each character
    var chars = inputString.split('');
    chars.forEach(function(char) {
        var card = document.createElement("div");
        card.classList.add("card");
        card.textContent = char;
        card.onclick = function() {
            removeDuplicates(char);
        };
        adjustedString.appendChild(card);
    });
}

function removeDuplicates(charToRemove) {
    var cards = document.getElementsByClassName("card");
    var adjustedString = "";
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].textContent === charToRemove) {
          console.log(adjustedString.indexOf(charToRemove))
          
            if (adjustedString.indexOf(charToRemove) === -1) {
                adjustedString += charToRemove;
            }
            cards[i].style.visibility = "hidden";
        } else if (cards[i].style.visibility !== "hidden") {
            adjustedString += cards[i].textContent;
        }
    }
    // Display adjusted string
    document.getElementById("adjustedString").textContent = "Adjusted String: " + adjustedString;
    alert("Duplicates of '" + charToRemove + "' removed.");
}