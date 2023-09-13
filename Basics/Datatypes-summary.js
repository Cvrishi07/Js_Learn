// Primitive 

// 7 types: Number, Boolean, String, Null, Undefined, Symbol, BigInt 
// Javascript is a dynamically typed language which means we don't have to define a particular 
// datatype before declaring a variable 
// Primitive datatype work on the Call by value 

const score = 100
const scorevalue = 100.3 

const isLoggedIn = false 
const outsideTemp = null 

const Id = Symbol('123') 
const anotherId = Symbol('123') 
console.log(Id === anotherId);

const bigNumber = 12345678923323n     //BigInt




// Reference (Non-primitive): Call by reference 
//  Arrays, Objects, Functions 

const heroes = ["Nagraaj","Doga","Shaktimaan"] ;
const myObj = { 
    name: "Rishi" ,
    age: 22 
} ;

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber) ;       // Typeof BigInt is BigInt
console.log(typeof outsideTemp) ;    // Typeof null is object
console.log(typeof Id) ;             // Typeof Symbol is Symbol 
console.log(typeof isLoggedIn) ;    // Typeof boolean is boolean
console.log(typeof score) ;         // Typeof number is number 
console.log(typeof scorevalue) ;    //Typeof number is number
console.log(typeof heroes);         // Typeof array is object
console.log(typeof myObj) ;         //Typeof object is object 
console.log(typeof myFunction);     //Typeof function is function

// Stack and Heap memory 
// Stack (Primitive) 
// Heap (Non-primitive) 

let myName = "Rishi" ;
let anotherName = myName ; 

console.log(myName);
console.log(anotherName) ;
 
anotherName = "cvrishi" ;

console.log(myName) ;
console.log(anotherName);

let newObj = {
    email: "scaryhitman@gmail.com",
    upi: "ybl@gmail.com"
}
let newObj2 = newObj ;

console.log(newObj) ;
console.log(newObj2) ;

newObj2.email = "realcv07@gmail.com" ; 

console.log(newObj);
console.log(newObj2);



