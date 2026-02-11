// javacript is Prototype behaviour  (har nhi manti or upar ) this called the Prototype inhertances  
// function multipleby5(num){
//     return num*5;
// }
// multipleby5.power = 2;
// console.log(multipleby5(2)); 
// console.log(multipleby5.power);
// console.log(multipleby5.prototype);

// function Create_user(username,score){
//     this.username = username;
//     this.score = score;
// }
// Create_user.prototype.incrememt = function(){
//     this.score++;
// }
// Create_user.prototype.printme = function(){
//     console.log(`username: ${this.username} and ${this.score}`);
// }

// const user1 = new Create_user("Lalit suthar",98);
// const user2 = new Create_user("vishal suthar",100); 
// // new keyword add every prototype 
// // user1.incrememt();
// // user1.printme();  

// // Example of prototype  

// let hero = ["thor","spiderman"];

// let heropower ={
//     thor:"hammer",
//     spiderman:"sling",
//     getspiderman: function(){
//     console.log(`spidy power is ${this.spiderman}`);
//     }
// }; 
// Object.prototype.lalit = function(){
//     console.log(`Lalit suthar in all object`);
// }  
// Array.prototype.heyLalit = function(){
//     console.log("hey Lalit suthar from Array");
// }
// hero.lalit();
// heropower.lalit();
// heropower.heyLalit(); // give the error  
// hero.heyLalit();

const obj1 = {
    username:"Lalit suthar",
    Age:21
}

const obj2 = {
    hoby:"drawing",
    height:165
}
// inhertiance  
// obj1.__proto__ = obj2;  // user for the inheritance old
// console.log(obj1.height);

// In modern sytle of inhertance 
// Object.setPrototypeOf(obj1,obj2);
// console.log(obj1.height);

// let user = "    Lalit suthar    ";
// String.prototype.truelength = function(){
//     console.log(`${this}`);
//     console.log(`Truelength of string : ${this.trim().length}`);
// }
// user.truelength();

// Theory and defination 

// Defination 
// --> Prototype is an internal mechanism in javascipt that allows to inherit properties and method from another object via a hidden reference called [[Prototype]] 
// This mechanism is known a prototype-based inheritance 

// [[ProtoType]] 
// Every javascipt object has an intrnal property 
// points
// --> It points to another object 
// --> this link is used for property lookup 
// --> If a property is not found on the object itself , Javascript looks into its [[prototype]]
// [[prototype]] is internal and not directly accesseble
// Object.prototype 

// Property lookup Algorithms 
// suppose if we access the obj.prop1
// Javascipt perform the following steps 
// 1. checks if property exists on object 
// 2. If not found ,check object.[[prototype]]
// 3. Repeat the process up the prototype chain 
// 4. stop when
// --> Property is found ,or
// --> [[prototype]] is null
// This process is called Prototype chain Resolution 

// Example 
// const obj = 12;
// console.log( typeof obj.toString());

// Lookup path  
// obj --> Object.prototype -> null  // last me null ke pas jake rukta ha  

