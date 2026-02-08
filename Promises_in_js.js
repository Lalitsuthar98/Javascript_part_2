// promises in js   means Vhada  

// const promiseone = new Promise(function(resolve,reject){
//     // async code  
//     setTimeout(()=>{
//         console.log("Async code kaam hogya ha");
//         resolve();
//     },1000)
// });
// // resolve ka connection direct .then ke sath ha  
// promiseone.then(function(){
//     console.log("promise confirmed");
// });

// without variable Promises_2  

// new Promise((resolve,reject)=>{
//    // async code  
//    setTimeout(()=>{
//     console.log("Async code here"); 
//     resolve();
//    },1000);
// }).then(()=>{
//     console.log("promise confirmed ha");
// });  
// Promise 3  
// 
// const promiseThree = new Promise((resolve,reject)=>{
//     // async code  
//     setTimeout(()=>{
//         resolve({username:"Lalit suthar",Age:21,Address:"udaipur"});
//     },1000)
// }).then((data)=>{
//   console.log(data);
// }); 

// Promises 4 

// const Promises4  = new Promise((resolve,reject)=>{
//     // async code  
//     setTimeout(()=>{
//       let error = false;
//       if(!error){
//         resolve({username:"Lalit suthar",email:"Lalit@gmail.com"});
//       }else{
//         reject("you get the error");
//       }
//     },1000)
// }).then((data)=>{
//     console.log(data); 
//     return data.username;
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//  console.log(error);
// }).finally(()=>{
//     console.log("dada hu finally ");
// })  

// Promise 5 "Important"
// const Promise5 = new Promise((resolve,reject)=>{
//     // async code  
//     setTimeout(()=>{
//         let error = 0;
//         if(!error){
//             resolve({username:"Lalit suthar",email:"Lalit@gmail.com"});
//         }else{
//             reject("ERROR 404");
//         }
//     },1000)
// });

// async function consumePromise5() {
//     try {
//           const reponse = await Promise5;
//           console.log(reponse);
//     }catch (error) {
//          console.log(error);
//     }
// } 
// consumePromise5();

// async function getdata() {
//      try {
//         const reponse = await fetch("https://randomuser.me/api/");
//         const data = await reponse.json();
//      console.log(data);
//      } catch (error) {
//         console.log(error);
//      }
// } 
// getdata();