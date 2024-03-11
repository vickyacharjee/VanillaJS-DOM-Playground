let randomNumber=parseInt(Math.random()*100+1)

const submit=document.querySelector('#submit')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastField')
const lowOrHi=document.querySelector('.lowOrHi')

const startOver=document.querySelector('.resultField')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1
let playGame=true

//logic
if (playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

//validation 
function validateGuess(guess){
    if (isNaN(guess)) {
        alert("Plz..Enter a valid Number");
    }
    else if(guess<1){
        alert("plz..Enter a number graeter than one")
    }
    else if(guess>100){
        alert("plz..Enter a number less than 100 v")
    }
    else{
        prevGuess.push(guess);
    }
    if (numGuess==11) {
        displayGuess(guess)
        displayMessage(`Game over.. Random number was ${randomNumber}`);
        endGame();
    }
    else{
        displayGuess(guess)
       checkGuess(guess) 
    }

}
function checkGuess(guess) {
    if(guess===randomNumber){
        displayMessage(`you guessed it rght`)
    }
    else if(guess<randomNumber){
        displayMessage('number is too low')
    }
    else if(guess>randomNumber){
        displayMessage('numbwe is too High')
    }
    
}
function displayGuess(guess) {
    userInput.value='';
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message) {
   lowOrHi.innerHTML = `<h1>${message}</h1>`;
}
function newGame() {
    const newGameButton= document.querySelector('#newGame')
    newGameButton.addEventListener('click',(e)=>
    {
        randomNumber=parseInt(Math.random()*100+1)
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    })
}
function endGame() {
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame=false;
    newGame();
}
