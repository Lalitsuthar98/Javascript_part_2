// why do we need Async code in javascipt 
// --> javascipt is single thread 
// --> It can do only One thing  at a time 
// problem with sync code  

//  console.log("Start");
// for (let i = 0; i < 1e10; i++) {} // heavy task
// console.log("End");

//  Browser freezes  
//  UI becomes  unresponsive 
//  bad user experience 

// Async code solves this by alowing long taskd to run in the background without  blocking  the main thread  

// Async code = code that does not block execution 
// js says  
// tum chalte reho , jab kaam complete ho jaaye tab mujhe bata dena  
// Examples od async code  
// 1. Fetching data from server 
// 2. Timer (setTimeout)
// 3. file reading 
// 4. database call 
// 5 Api calls
 
// asynchronous  (Not blocking)
// console.log("A");
// setTimeout(()=>{
//     console.log("B");
// },0);
// console.log("C");

// JavaScript Runtime Enviroment  
// javascript akela sab kuch nhi kerta ha  
// Browser(ya node.js) Js ko ek support system deta ha , jise hum javascript runtime kehte hain 
// Is system main part ha  
// 1. call stack 
// 2. Web Api 
// 3. callback queue(task Queue)
// 4. Microtask Queue 
// 5. Event loop 

// 1.Callstack ( js ka brain )
// call stack decide which code will run 
// LIFO  

// Web Api (Browser ki help)
// javascript time,events,network handle nahi kar sakta akela

// Browser deta hai 
// setTimeout 
// fetch 
// Dom event (click, scroll)
// setInterval  

// setTimeout(() => {
//   console.log("Hello after 2 sec");
// }, 2000);


// kya hota hai 
// --> js bolta hai "yeh kaam mujhe slow lar raha"
// --> Browser ke web Api ko de deta hai 
// --> call stack free ho jaata hai 
// js wait nhi kerta ha  

// 3. Callback queue (Task Queue)
// jab web api ka kaam complete ho jaata hai 
// callback(function) callback queue me chala jaata hai 

// setTimeout(() => {
//   console.log("Timeout done");
// }, 0);

// Even 0ms hone ke baad bhi 
// callback queue me jaata hai 
// direct call stack nhi jata ha 

// Microtask queue (vip line)
// Microtask queue me ata hai 

// --> Promise.then()
// --> catch 
// --> finally 
// --> queueMicrotask 

// first ALl microtask then all callbacktask 

// 5. Event loop 
// Event loop ka kaam 
// "call stack khali hai ya nhi"
// Event loop ka process 
// 1. call stack check karega 
// 2. Agar empty ha 
// --> Phele microtask queue 
// --> fir callback queue 
// 3. Ek - ek task ko call stack me daalega 
// Event loop khud code execute nahi karta  
//  bas decide karta hai kaun next jayega 
// code ko (task ko ) callstack stack execute kerta ha  
 