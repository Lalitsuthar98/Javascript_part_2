// Descriptor  
// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI); 
 const info = Object.getOwnPropertyDescriptor(Math,"PI");
//  console.log(info);

 const user = {
    username:"Lalit suthar",
    email:"Lalit@gmail.com",
    password:12345
 };
 const descriptor = Object.getOwnPropertyDescriptor(user,"username");
//  console.log(descriptor);

 Object.defineProperty(user,"username",{
    value:"Vishal suthar",
    writable:false, 
    enumerable:true,
    configurable:true
 }); 
 const updatedata = Object.getOwnPropertyDescriptor(user,"username");
 
 console.log(updatedata);

//  user.username = "hitesh";
 console.log(user);
