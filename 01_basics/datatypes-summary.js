// PRIMITIVE

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
 
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id ===anotherId);

//const bigNumber = 5645569873646535278767897n

// REFERENCE (NON-PRIMITIVE)
  
//  Array, Objects, Functions
const heros =["shaktiman","nagraaj","doga"];
let myObj = {
    name: "Mrinmoy",
    age: 22,
}
 const myFunction = function (){
   // console.log("Hello World");
 }
 //console.log(typeof heros);


 //***************************************************************************//

 // MEMORYES
 //TWO TYPES OF MEMORY  
 //     ****STACK MEMORY(Primitive), HEAP(Non-Primitive)

 let myYoutubeName = "mrinmoymondal.com"

 let anothername = myYoutubeName
 console.log(anothername);

