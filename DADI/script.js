// Variabili per immagini (Plus, non nell' esercizio base)


let cpudice1 = document.getElementById("cpudice1")
let cpudice2 = document.getElementById("cpudice2")
let cpudice3 = document.getElementById("cpudice3")
let cpudice4 = document.getElementById("cpudice4")
let cpudice5 = document.getElementById("cpudice5")
let cpudice6 = document.getElementById("cpudice6")


let playerdice1 = document.getElementById("playerdice1")
let playerdice2 = document.getElementById("playerdice2")
let playerdice3 = document.getElementById("playerdice3")
let playerdice4 = document.getElementById("playerdice4")
let playerdice5 = document.getElementById("playerdice5")
let playerdice6 = document.getElementById("playerdice6")

let results = document.getElementById("risultato")

// generare un numero random da 1 a 6 per la Cpu
let numeroCpu = (Math.floor (Math.random()*6+1))
    console.log("Questo è il numero randomico della CPU: " ,numeroCpu)

// inserire un prompt in cui viene richiesto un numero da 1 a 6 al giocatore

let numeroGiocatore = (Math.floor (Math.random()*6+1))
    console.log("Questo è il tuo numero randomico: " ,numeroGiocatore)


// document.writeln("Questo è il numero randomico della CPU: " ,numeroCpu,)
// document.writeln("Questo è il tuo numero randomico: " ,numeroGiocatore)


// confrontare le due variabili con un if:
if(numeroGiocatore > numeroCpu){
    // document.writeln("HAI VINTO!")
    document.getElementById('risultato').innerHTML = "HAI VINTO!";
}else if(numeroGiocatore < numeroCpu){
    // document.writeln("HAI PERSO!")
    document.getElementById('risultato').innerHTML = "HAI PERSO!";
}else{
    // document.writeln("PAREGGIO!")
    document.getElementById('risultato').innerHTML = "PAREGGIO!";
}


// PLUS: DADI CON IMMAGINI


if(numeroCpu == 1){
    cpudice1.classList.add("active");
}else if(numeroCpu == 2){
    cpudice2.classList.add("active");
}else if(numeroCpu == 3){
    cpudice3.classList.add("active");
}else if(numeroCpu == 4){
    cpudice4.classList.add("active");
}else if(numeroCpu == 5){
    cpudice5.classList.add("active");
}else{
    cpudice6.classList.add("active");
}



if(numeroGiocatore == 1){
    playerdice1.classList.add("active");
}else if(numeroGiocatore == 2){
    playerdice2.classList.add("active");
}else if(numeroGiocatore == 3){
    playerdice3.classList.add("active");
}else if(numeroGiocatore == 4){
    playerdice4.classList.add("active");
}else if(numeroGiocatore == 5){
    playerdice5.classList.add("active");
}else{
    playerdice6.classList.add("active");
}

