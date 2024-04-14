let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.ceil(Math.random * 10);

const compareGuesses = (human, computer, target) => {
    let diffHumanTarget = target - human; 
    if (diffHumanTarget < 0)
        diffHumanTarget -= diffHumanTarget;
    let diffComputerTarget = target - computer;
    if (diffComputerTarget < 0)
        diffComputerTarget -= diffComputerTarget;

    if (diffHumanTarget === diffComputerTarget)
        return true;
    if (diffHumanTarget > diffComputerTarget)
        return false; 
    else 
        return true;
} 

const updateScore = winner => {
    if( winner === 'human')
        humanScore ++;
    else if (winner === 'computer')
        computerScore ++;
}

const advanceRound = () => currentRoundNumber++;

