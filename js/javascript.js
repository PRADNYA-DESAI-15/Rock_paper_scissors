
let YourScore =0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const YourScorePara = document.querySelector("#Your-score");
const CompScorePara = document.querySelector("#Comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
  };
  
  const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
  };
  
  const showWinner = (userWin, YourChoice, CompChoice) => {
    if (userWin) {
      YourScore++;
      YourScorePara.innerText = YourScore;
      msg.innerText = `You win! Your ${YourChoice} beats ${CompChoice}`;
      msg.style.backgroundColor = "green";
    } else {
      CompScore++;
      CompScorePara.innerText = CompScore;
      msg.innerText = `You lost. ${CompChoice} beats your ${YourChoice}`;
      msg.style.backgroundColor = "red";
    }
  };
  
  const playGame = (YourChoice) => {
    //Generate computer choice
    const CompChoice = genCompChoice();
  
    if (YourChoice === CompChoice) {
      //Draw Game
      drawGame();
    } else {
      let userWin = true;
      if (YourChoice === "rock") {
        //scissors, paper
        userWin = CompChoice === "paper" ? false : true;
      } else if (YourChoice === "paper") {
        //rock, scissors
        userWin = CompChoice === "scissors" ? false : true;
      } else {
        //rock, paper
        userWin = CompChoice === "rock" ? false : true;
      }
      showWinner(userWin, YourChoice, CompChoice);
    }
  };
  
  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const YourChoice = choice.getAttribute("id");
      playGame(YourChoice);
    });
  });