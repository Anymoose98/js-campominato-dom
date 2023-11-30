// Funzione Quadrato
function creazionequadrato(num){
    const quadrato = document.createElement("div");
    quadrato.classList.add("quadrato");
    quadrato.addEventListener("click",function(){
        this.classList.toggle("bg-click")
        console.log("casella n." + num)
    })
    return quadrato;
}

// Assegno il contenitore dei quadrati
const contenitore_quadrati = document.getElementById("contenitore")

// Bottone
const bottone = document.querySelector("button")
bottone.addEventListener("click",function(){
    
    // Ripulire il codice
    contenitore_quadrati.innerHTML = "";

    // Creo i quadrati
    for(let i = 0; i < 100; i++){
        let quadrato = creazionequadrato(i + 1);
        contenitore_quadrati.appendChild(quadrato)
    }
})