class Vehicle{
    //empty constructor is called default or empty constructor
    constructor(name, maker, engine){
         this.name = name;
         this.maker = maker;
         this.engine = engine;

    }//end of constructor
    getDetails(){
        return("the name of the vehicle is: " + this.name);
    }
}
let sedan= new Vehicle('Atios','Toyota','1.4');
console.log(sedan.name);
console.log(sedan.maker);
console.log(sedan.engine)
console.log(sedan.getDetails());