class person{
    constructor(fname){
        this.fname= fname;
    }
    toString(){
        return (`${this.fname}`)
    }
    
}
class student extends person{
    constructor(fname,id){
        super(fname);
        this.id = id;
    }
    toString(){
        return (`name of learner is ${super.toString()} with 
        student ID: ${this.id}`)
    }
}//end of inheritance class
let student1= new student("Alice", 384924);
console.log(student1.toString())