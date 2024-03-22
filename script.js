let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const gameDraw = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const generateCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randInd = Math.floor(Math.random()*3);
    return options[randInd];
};

const playGame = (userChoice) =>{
    const compChoice =generateCompChoice();
    if(userChoice === compChoice)
    {
        gameDraw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // rock scissor
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            //rock paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });    
});