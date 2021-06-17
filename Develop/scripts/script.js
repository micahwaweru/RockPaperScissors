var resultBox = document.getElementById('resultBox');
var btn = document.getElementById('btn');


btn.addEventListener('click', function(){
    var inputSelec = ['Rock', 'Paper', 'Scissors'];
    var userInput=prompt('Enter text');
        if(userInput==='R'){
            x=0;
        }
        if(userInput==='P'){
            x=1;
        }
        else if(userInput==='S'){
            x=2;
        }
        var compSelec = inputSelec[Math.floor(Math.random()*inputSelec.length)];
        console.log('Computer selected ' + compSelec);
        
        alert('The computer picked ' + compSelec)

       var result=inputSelec[x];
       console.log(result);
       if(result==='Rock' && compSelec==='Scissors'){
           winner='You win!';
       }
       if(result==='Rock' && compSelec==='Paper'){
           winner='You lose!';
       }
       if(result==='Paper' && compSelec==='Scissors'){
           winner='You lose!';
       }
       if(result==='Paper' && compSelec==='Rock'){
           winner='You Win!';
       }
       if(result==='Scissors' && compSelec==='Rock'){
           winner='You lose!';
       }
       if(result==='Scissors' && compSelec==='Paper'){
           winner='You win!';
       }
       else if(result===compSelec){
           winner='Tie!'
       }
       
       var stats = {
        wins: 0,
        losses: 0,
        ties: 0,
       }

       if(winner==='You win!'){
           stats.wins = stats.wins + 1;
       }

       if(winner==='You lose!'){
           stats.losses=stats.losses + 1;
       }
       else{
           stats.ties=stats.ties + 1;
       }

       confirm(winner + 'Wins: ' + stats.wins + 'Losses: ' + stats.losses + 'Ties: ' + stats.ties);
       

    
  
})






//function shuffle(inputSelec)//
