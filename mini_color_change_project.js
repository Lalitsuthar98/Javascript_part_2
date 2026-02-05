 let refernce = null;
document.querySelector('#start').addEventListener('click',()=>{ 
     if(refernce !==null) return;
     const colorrange = "0123456789ABCDEF";  
      refernce = setInterval(()=>{
      let colorcode = "#";
      for(let i = 0 ; i < 6 ; i++){
           let random = Math.floor(Math.random()*16);
           colorcode+=colorrange[random];
      }
       document.body.style.backgroundColor = colorcode; 
     },1000);
});
document.querySelector('#stop').addEventListener('click',()=>{
  clearInterval(refernce); 
   refernce = null;
})