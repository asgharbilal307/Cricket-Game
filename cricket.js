let score = {
    win: 0,
    lose: 0,
    draw: 0,
};

function chooseBatBall(userChoice) {
    let computerChoice;
    let ComputerResult = Math.random() * 3;
    if (ComputerResult > 0 && ComputerResult <= 1) {
        computerChoice = 'Bat';
    } else if (ComputerResult > 1 && ComputerResult <= 2) {
        computerChoice = 'Ball';
    } else {
        computerChoice = 'Stump';
    }
    console.log('You have chosen ' + userChoice);
    console.log('Computer has chosen ' + computerChoice);

    if (userChoice === computerChoice) {
        score.draw++;
        console.log('Match is tie');
    } else if (
        (userChoice === 'Bat' && computerChoice === 'Ball') ||
        (userChoice === 'Ball' && computerChoice === 'Stump') ||
        (userChoice === 'Stump' && computerChoice === 'Bat')
    ) {
        console.log('You win!');
        score.win++;
    } else {
        console.log('Computer wins!');
        score.lose++;
    }

    document.querySelector('#Score_heading').innerText = `Score is: Win: ${score.win} | Lose: ${score.lose} | Draw: ${score.draw}`;  
    localStorage.setItem('score', JSON.stringify(score));
    console.log(score);
    
}

function RestartTheGame() {
    localStorage.clear();
    
    score.win = 0;
    score.lose = 0;
    score.draw = 0;
    document.querySelector('#Score_heading').innerText = `Score is: Win: ${score.win} | Lose: ${score.lose} | Draw: ${score.draw}`;
    console.log('Game restarted! Score reset to zero.');
    console.log(score);
    
} 