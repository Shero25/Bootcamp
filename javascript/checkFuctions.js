let prompt= require("prompt-sync")();

//a program that checks if the user is old enough to access the site 
function checkAge(age){
    
    if(age>=18){
        return true;
    }else{
        return console.log("Do you have permission from your parents");
    
    }
}
     age= prompt("how old are you " , 18);
    if(checkAge(age)){
        console.log("Access granted");
        showMovie();
    }else{
        console.log("Access denied");
    }

    function showMovie(){

       let duration=100;// duration timer
       let i= 0;// counter for countdown

       for(i=200;i>duration;i--){
        console.log("access granted");
        console.log("playing a movie", i);
       }
    }
    showMovie();

    
