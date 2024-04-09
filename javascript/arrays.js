let courses = ["Javascript", "java", "Angular", "React"];
//courses.length=11;

courses[4]= "Typescript";
courses[5]= "Vue";

console.log(courses);

//checking the datatype
console.log(typeof courses);

//injecting multiple values into a single array.
courses.push("C++", "Flutter", "C#", "Python");
console.log(courses);

//check if the array is an array method
console.log("The courses are: ", courses instanceof Array);
console.log("still an array: "+ Array.isArray(courses))

//changing the object(courses) to string
let faculty = courses.toString();
console.log("Courses as String "+ faculty);

// checking if the object has changed to string 
console.log(typeof faculty);
console.log(faculty.toUpperCase());