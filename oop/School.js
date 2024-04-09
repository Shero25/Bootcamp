let school={
    name: "Secunda Secondary School",
    established: "199",
    location: "Mpumalanga",
    learners: 100,

    displayinfo: function(){
        //callback functions are the functions with a $ sign
        console.log(`the name of the school is ${school.name} \n
        located at ${school.location} established at ${school.established}`);
    },
    hardData: function(){
         console.log("The name of the school is " + school.name + "\n"
        + " located at " + school.location);
    },
    notationData: function(){
 console.log("The name of school is " + school['name']);
    }
}
//access function
school.displayinfo();
school.hardData();
school.notationData();