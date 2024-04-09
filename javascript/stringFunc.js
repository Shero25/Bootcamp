let userName= "Nthabi";
let message = "Welcome ";
from ="";
text= "";


function sendMessage(){

    let message = "Welcome " + userName;

    console.log(message);
}
sendMessage();



function showMessage(){ 
    userName= "Bob";
    console.log(userName);
}
showMessage();
console.log(message);

function sendMessage(from,text){
    from= "anony";
    text=" Welcome chomi";
    return from + text;
}
console.log(sendMessage(from,text))