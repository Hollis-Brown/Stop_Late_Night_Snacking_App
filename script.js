document.querySelector("#help").addEventListener("click", stopSnacking);

function stopSnacking() {
    let numSnacks = document.querySelector("input").value;
    for (let i = 1; i <= numSnacks; i++) {
        document.querySelector("#stops").innerText += `${'Stop snacking!'} `;
    }
}
