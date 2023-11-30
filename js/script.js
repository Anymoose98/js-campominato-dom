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

// Funzione creazione di 16 numeri non uguali e array
function numeriCasualiUnici(){
    let numeri_casuali_unici = []
    for(let i = 0; numeri_casuali_unici.length <= 15;i++ ){
        let numero_unico = Math.floor(Math.random() * 100 + 1);
        if(!numeri_casuali_unici.includes(numero_unico)){
            numeri_casuali_unici.push(numero_unico);
        }
    }
    return numeri_casuali_unici
}

let bombe = numeriCasualiUnici()
console.log(bombe)

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