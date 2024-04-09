class person {
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
    //private method
    addAddress(address){
        this.address = address;
    }
    //public mothod
    getDetails(){
        console.log(`Name of a person is ${this.name},
        residing at ${this.address}`);
    }
}

let person1= new person('bob',10);
person1.addAddress('Limpopo');

//abstraction
person1.getDetails();