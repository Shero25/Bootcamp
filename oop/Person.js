//creating an object
const Person ={
    //left is called key
    //right is called a value
    //key        value
    firstName: 'Alice',

    //accessor property (getter)
    get getName() {
        return this.firstName;
    },
    //accessor proprty (setter)
    set changeName(newName){//re-assigning or mapping new values
        this.firstName=newName;
    }
   
}
console.log(Person.firstName);
console.log(Person.getName);
console.log();

Person.changeName="Alison";
console.log(Person.firstName);