let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("playerChoice").textContent = `You chose: ${playerChoice}`;
  document.getElementById("computerChoice").textContent = `Computer chose: ${computerChoice}`;

  let winner = "";
  if (playerChoice === computerChoice) {
    winner = "It's a Draw!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    winner = "You Win! 🎉";
    playerScore++;
  } else {
    winner = "Computer Wins! 💻";
    computerScore++;
  }

  document.getElementById("winner").textContent = `Result: ${winner}`;
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
}
