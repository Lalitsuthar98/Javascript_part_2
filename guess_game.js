let randomnum = parseInt(Math.random()*100+1);
const submit = document.querySelector('#subt');
const userdata = document.querySelector('#guessField');
const prevguess = document.querySelector('.guesses');
const remainguess = document.querySelector('.lastResult'); 
console.log(remainguess);
const low_high = document.querySelector('.lowOrHi')
let count = 1;
let playedgame = true; 
let prevdata = [];
const p = document.createElement('p');   
const startover = document.querySelector('.resultParas');

if(playedgame){
  submit.addEventListener('click',(e)=>{
   e.preventDefault();
    validateguess(parseInt(userdata.value));
  })
}

function validateguess(guess){
   if(isNaN(guess)){
     alert("please enter the valid number")
   }else if(guess <1){
     alert("please enter the number greater than 1");
   }else if(guess > 100){
     alert("please enter the number less than 100");
   }else{
     prevdata.push(guess);
     if(count == 10){  
       if(guess === randomnum){
        dislaymessage("You win the Game");
        endgame();
       }else{
        displayguess(guess);
        dislaymessage(`Game Over.Random number was ${randomnum}`); 
        endgame();
       }
      
     }else{
       displayguess(guess); 
       checkguess(guess);
     }
   }
} 

function checkguess(guess){ 
  if(guess === randomnum){
    dislaymessage("You win the Game");
    endgame();
  }else if(guess < randomnum){
    dislaymessage("number is TOO low ");
  }else if(guess > randomnum){
    dislaymessage("number is Too high");
  }  
}

function dislaymessage(message){
   low_high.innerHTML = message;
}

function displayguess(guess){
  userdata.value = ""; 
  prevguess.innerHTML += ` ${guess},`; 
  count++; 
  let check = 11 - count;
   if(check >= 0 ){
      remainguess.innerHTML = check;
   }
} 

function Newgame(){
     const newgamedata = document.querySelector('.button');
     newgamedata.addEventListener('click',(e)=>{
        randomnum = parseInt(Math.random()*100+1);
        prevdata = [];
        prevguess.innerHTML = "";
        remainguess.innerHTML = 10;
        count = 1 
        userdata.removeAttribute('disabled');
        startover.removeChild(p);  
        dislaymessage("");
        playedgame = true;
     })
}

function endgame(){ 
  userdata.value = "";
  userdata.setAttribute('disabled',"");
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startover.appendChild(p);  
  playedgame  =false;
  Newgame();  
}



