
const gpa = 90;

if(gpa==0){
    console.log("You did not write the exam ");
}else if(gpa >=1 && gpa<= 49){
    console.log("You have failed with : " + gpa);
}else if(gpa >=50 && gpa<70 ){
 console.log("You have passed with an average mark of "+ gpa)
}else if(gpa >=70 && gpa<85){gi
console.log("You passed with exemption with a mark of " + gpa)
}else {
    console.log("You passed with DINSTINCTION mark of "+ gpa)
}