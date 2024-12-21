const student ={
    fullName : "Mustansir Hirani",
    marks : 94.4,
    printMarks: function() {
console.log("marks = ", this.marks);
    },
 };
 console.log(student); //objects basics

// prototypes are predefined with certain properties and whenever a new object is defined then prototypes inherits its properties in them

const employee = {
//     calTax1 () {
// console.log("tax rate is 10%"); //method one of creating a function in an object
    // },
calTax2 :function () {
    console.log("tax rate is 10%");//method two of creating an fucntion in an object
 }
}
const mark = {
salary:50000,
} //now we want to calculate the tax for mark so we will make use of prototypes
//which means we will make the first object an prototype for the second object 
//this way we will be able to use functions of 1st object in 2nd object
mark._proto_ = employee;
mark.calTax2();

//Classes 
class car{
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }

}     //now to create a object of a class we use 
let carfunctions=new car();