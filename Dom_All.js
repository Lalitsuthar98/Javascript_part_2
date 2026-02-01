// complete dom 
// Dom --> stand for Document obejt model is a tree like representation of the html document created by the browser , which allows javascript to acess , modify and control web pages dynamically 

// simple word 
// DOM = HTML + javascript ka connection 

// why DOm exists  
// --> without DOM 
// --> HTML = static 
// --> no interation
// with DOM 
// --> Dynamic content 
// --> user interaction 
// --> real-time updates  
// DOM allows js to 
// change text and html 
// change css 
// handle events 
// create / delete element 
// console.log(document);

// how dom is created (Browser process)
// when browser loads a webpage 
// 1. Reads HTML 
// 2.converts it into Dom tree  
// 3. make it accessible using document  

// HTML structure 
// <html>
//  <body>
//    <h1>Hello</h1>
//    <p>World</p>
//  </body>
//</html> 

// DOm tree               |---> h1 ->"hello"
// Document --> html --> body
//                        |--> p -> "world"
// Dom is hirarchical(parent-child) structure 

// DOM Nodes (types of nodes)
// everything  in dom is a node  
// Main node types  
// Node Types                  example 
// Document Node                  document
// Element Node                   <div> ,<p> 
// Text Node                      "hello world"
// Attribute Node                  id,class
// comment node                     <!-- --> 

// document object (Entry point)
// document is a root object of Dom 
// common property 
// document.body 
// document.head
// document.title
// document.URL

// selecting the element (selectors)
// document.getElementbyId("idname")
// document.getElementbyClassName("classname") 
// document.getElementbyTagName("tagname")

// Modern selector 
// -> MOdern selector is modern Dom method to select the html element using the css syntax

// document.querySelector() --> return only the first matching element  
// --> if not match --> return Null
// document.querySelector("#title");
// document.querySelector(".container");
// document.querySelector("p");
// document.querySelector("input[type='text']");
// document.querySelector("div p");
// child 
// document.querySelector("ul > li");
// pseudo-classes 
// document.querySelector("li:first-child");
// document.querySelector("li:last-child");
// document.querySelector("button:hover"); // logical use
// document.querySelector("li:nth-child(n)") 

// queryselectorAll  
// document.querySelectorAll()
// returns ALL matching element  
// return type is nodeList 
// TO convert the node or htmlcollection into array
// Array.from(node or html collection)

// Reading and changing content 
// element.innerText
// element.textContent
// element.innerHTML

// property                   use 
// innerText                     visible Text 
// textContent                   all text 
// innerHTML                      HTML + text

// styling using DOm 
// Element.style.color = "red"

// creating and removing  element 
// let div = doucument.createElement("div");
// div.innerText = "hello world"
// document.body.appendChild(div);

// Dom Traversing  
//move inside DOm tree 
// element.parentElement  --> give the parent
// element.children       --> give the 
// element.firstElementChild
// element.lastElementChild
// element.nextElementSibling
// element.previousElementSibling 

// remove the element 
// element.remove();

