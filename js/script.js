let punti = 1

// Funzione Quadrato
function creazioneQuadrato(num){
    
    const quadrato = document.createElement("div");
    quadrato.classList.add("quadrato");

    quadrato.addEventListener("click",function(){
    this.classList.toggle("bg-click")
    console.log("casella n." + num)
    const punteggio = document.getElementById("punteggio");
    punteggio.textContent = ("Punti: " + punti);
    punti++
})
return quadrato;
}

function creazioneBomba(num){
    const quadrato = document.createElement("div");
    quadrato.classList.add("quadrato");
    quadrato.addEventListener("click",function(){
        this.classList.toggle("bg-bomba")
        console.log("casella n." + num)
        punti = 1
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



// Assegno il contenitore dei quadrati
const contenitore_quadrati = document.getElementById("contenitore")

// Bottone
const bottone = document.querySelector("button")
bottone.addEventListener("click",function(){
    
    punti = 1
    
    // Ripulire il codice
    contenitore_quadrati.innerHTML = "";
    
    // Creazione numeri casuali unici
    let Nbombe = numeriCasualiUnici()
    console.log(Nbombe)
    
    // Creo i quadrati
    for(let i = 1; i <= 100; i++){
        if(Nbombe.includes(i)){
            let bomba = creazioneBomba(i)
            contenitore_quadrati.appendChild(bomba)
        }
        else{
            let quadrato = creazioneQuadrato(i);
            contenitore_quadrati.appendChild(quadrato)
        }
    }
})


