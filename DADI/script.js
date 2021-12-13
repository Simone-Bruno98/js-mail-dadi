// generare un numero random da 1 a 6 per la Cpu

let numeroCpu = (Math.floor (Math.random()*5+1))
    console.log("Questo è il numero randomico della CPU: " ,numeroCpu)

    // inserire un prompt in cui viene richiesto un numero da 1 a 6 al giocatore

let numeroGiocatore = (Math.floor (Math.random()*5+1))
    console.log("Questo è il tuo numero randomico: " ,numeroGiocatore)



document.writeln("Questo è il numero randomico della CPU: " ,numeroCpu,)
document.writeln("Questo è il tuo numero randomico: " ,numeroGiocatore)


// confrontare le due variabili con un if:
if(numeroGiocatore > numeroCpu){
    document.writeln("\n HAI VINTO!")
}else if(numeroGiocatore < numeroCpu){
    document.writeln("HAI PERSO!")
}else{
    document.writeln("PAREGGIO!")
}