// Api stands for Apllication programming interface    
// console.log("hello");  
const Url = 'https://randomuser.me/api/';
const xhr = new XMLHttpRequest()
xhr.open('GET', Url);  
xhr.onreadystatechange = function(){
console.log(xhr.readyState); 
if(xhr.readyState === 4){ 
    const data = this.responseText; 
    const data1 =JSON.parse(data);
console.log( typeof data1);
}
}
// console.log(xhr.readyState);
xhr.send(); // open call hoga   
// conslole.log --> ek debugger tool ha browser ka 
// most of type url se string datetype me ata ha 
