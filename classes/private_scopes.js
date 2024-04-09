
function person(fname,lname){
    //this are global variables
    let firstname= fname;
    let lastname= lname;

    //using let declaration is converting the method to a private method
    let getDetails_noAccess= function(){
        return (`First name is ${firstname} and last name is: ${lastname}`)
    }
    this.getDetails_Access=function (){
        return (`First name is ${firstname} and last name is: ${lastname}`)
    }
}
let person1 = new person("Alice"," Mazibuko");
//console.log(person1.);
console.log(person1.getDetails_noAccess());
console.log(person1.getDetails_Access());
