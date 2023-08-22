// Grabs the h2 element with the ID 'help' and adds a click event listener to it.
document.querySelector("#help").addEventListener("click", stopSnacking);

// Creates a function named stopSnacking.
function stopSnacking() {
    // Grabs the value of the input element (represents the number of snacks) and stores it in the 'numSnacks' variable.
    let numSnacks = document.querySelector("input").value;
    
    // Prints 'Stop snacking!' to the DOM the number of times specified by the 'numSnacks' value.
    for (let i = 1; i <= numSnacks; i++) {
        // Appends the text 'Stop snacking!' to the content of the element with the ID 'stops'.
        document.querySelector("#stops").innerText += `${'Stop snacking!'} `;
    }
}

// Summary: This script listens for a click event on an element with the ID 'help'. When clicked, it retrieves the numeric value from an input field and then prints 'Stop snacking!' to the DOM that number of times.
