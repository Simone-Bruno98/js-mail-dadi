// chiedere all' utente la propria mail
// controllare che sia presente all' interno della whitelist
// stampare un messaggio appropriato sull' esito del controllo


//costanti necessarie (IN ARRAY)
const mailInWhitelist = ["giorgiogiovanni@hotmail.it", "marianocomense@gmail.com", "robertoscaloni@outlook.it", "francobastani@vattelapesca.asd"];


// prompt per richiedere la mail
const mail = prompt ("inserire la propria mail");
// IF mail presente all' interno della whitelist

for(let index = 0; index < mailInWhitelist.length; index++){
    if (mail == mailInWhitelist[index]){
        console.log ("la tua mail ", mail , " è nel nostro sistema!")
        document.writeln ("la tua mail ", mail , " è nel nostro sistema!")
    }else{
        console.log ("la tua mail ", mail , " NON è nel nostro sistema!")
    }
}
//     stampa messaggio positivo
// ELSE stampa messaggio negativo