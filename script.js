'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Mohamed';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 33;
document.querySelector('.score').textContent = 120;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

const MES = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.guess').value = '';
let SECnumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let Guess = Number (document.querySelector('.guess').value);

document.querySelector('.again').addEventListener
('click', function(){
    SECnumber = Math.trunc(Math.random()*20)+1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    MES('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';   
    document.querySelector('.guess').value = '';
}
);

document.querySelector('.check').addEventListener
('click', function(){
   let Guess = Number (document.querySelector('.guess').value);
   console.log(Guess,typeof(Guess));

 if(!Guess){
    MES('No number!');
    } 
 else if (Guess === SECnumber){
    MES('Congrats!');
    document.querySelector('.number').textContent = SECnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if(score > document.querySelector('.highscore').textContent){
    document.querySelector('.highscore').textContent = score;
    }
    
}
else if (Guess !== SECnumber){
    if (score > 1){
        MES(Guess > SECnumber ? 'Too High!' : 'Too Low!');
        score--;
        document.querySelector('.score').textContent = score;
        }
        else {
            MES('You Lost the Game :(');
            document.querySelector('.score').textContent = 0;
    
        }
}

});
