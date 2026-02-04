// event in js 

// type, timestamp,defaultPrevented
// target, toElement,srcElement,currentTarget,clientX,clientY,screenX,screenY,
// altkey,ctrlkey,shiftkey,keyCode
// event bubleing & event chapchering  --> event propagation
// stopPropagation 
// e.preventdefault() --> method   
// removeIt.parentNode.removeChild(removeIT);

// ----------------------Event in js -----------------------
// --> An event is something that happend in the browser and javascrit can listen and react to it   
// Event = user action OR browser action 

// Examples:
// User clicks a button → click
// User types in input → input
// Page loads → load
// Mouse moves → mousemove
// Form submits → submit 

// Important of event  
// without event  
// --> websites would be static
// --> no interaction 
// --> no forms , buttons , animatios , games,etc
// --> events make thewebsites dynamic andf interactive 
 
// Types of Events  

// 1️⃣ Mouse Events
// Event	        Trigger
// 
// click	        Single click
// dblclick	        Double click
// mouseenter	    Mouse enters element
// mouseleave	    Mouse leaves element
// mousemove	    Mouse moves
// mousedown	    Mouse button pressed
// mouseup	        Mouse button released

// 2️⃣ Keyboard Events
// Event	Trigger
//
// keydown	      Key pressed
// keyup	      Key released
// keypress ❌	 Deprecated

// 3️⃣ Form Events
// Event	Trigger
//
// submit	Form submitted
// change	Value changed
// input	Real-time typing
// focus	Input focused
// blur	    Input loses focus  

// 4️⃣ Window / Document Events
// Event	           Trigger
//
// load	Page           fully loaded
// DOMContentLoaded	   HTML loaded
// scroll	           Page scroll
// resize	           Window resized 

// Handle the event (3 ways) 

// 1. inline event  --> not the optimize 
// <button onclick="alert("clicked the button")">click here </button> 

// 2. Event Property (old property )
// const btn = document.querySelector('#firstbutton'); 
// btn.onclick = ()=>{
//     alert("button click hogya ha...");
// };  
// problem with this  
// only one event is allowed 
// btn.onclick = ()=>{
//     alert("ya dusra function ha"); 
// }

// btn.onclick = fun1 //  hatgya
// btn.onclick = fun2 // overites hogya ha  

// 3. addEventListener() 
// --> this is a modern way to attach events to element  
// syntax 
// element.addEventListener(type,listner(callbackfunction),options)

// type --> event name (onclick,input,keydown,etc)
// listener --> function to execute  
// options --> optinal (capture,once,passive) // bullble , capture , stopropation 

// const btn = document.getElementById('firstbutton');
// console.log(btn);
// btn.addEventListener('click',()=>{
//     alert("addeventlistener ka use keya ha");
// },false);

// btn.addEventListener('click',()=>{
//     alert("second function ha ");
// });
// multiple function are allowed  

// internally working of addeventlistener
// Browser keeps an event list(array) for each element 
// click -> [func1,func2] 
// when click happens  
// browser loops through the list  
// executes all callbacks one by one 

// Event Object 
// --> Whenever an event happens, browser automatically creates an object 
// -->  This object contains all information about then event 
// --> This object is passed to your callback automatically 
// btn.addEventListener('click',(event)=>{
//     console.log(event);
// })
// important property 
// btn.addEventListener('click',(e)=>{
//   console.log(e.type);
//   console.log(e.target);
// }) 
// const div1 = document.getElementById('parent');
// console.log(div1);
// div1.addEventListener('click',(event)=>{
//     console.log(event.target);
//     console.log(event.currentTarget);
// }) 

// const form = document.getElementById('first-form');
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const data = document.querySelector('input');
//     console.log(data.value);
// }) 

// document.getElementById('first-ul').addEventListener('click',(e)=>{
//     console.log("ul se bolrehe hu");
// });
// const child = document.getElementById('ul_button').parentElement;
// child.addEventListener('click',(e)=>{ 
//     e.stopPropagation();
//     console.log("me button se bolrehe hu");
// })
 
// const element = document.getElementById('box');
// element.addEventListener("click",(e)=>{
//     console.log(e.clientX,e.clientY);
//     console.log(e.pageX,e.pageY);
//     console.log(e.screenX,e.screenY); 
//     console.log(e.timeStamp);
// }) 
 
// element.addEventListener("mousedown",(e)=>{
//     console.log(e.button);
// }) 

// Event Propagation 
// There are 3 phase  
// 1. Capturing phase  --> (parent -> child) for this we wanrt true
// 2. Traget phase  --> use the stopPropagation()
// 3. bubble phase  --> (child -> parent) default(false)

