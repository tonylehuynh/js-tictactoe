const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartButton = document.querySelector("#restartButton");
const winConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
]

// Array of placeholders
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameRunning = false;

initialiseGame();

function initialiseGame(){
	cells.forEach(cell => cell.addEventListener("click", cellClicked));
	restartButton.addEventListener("click", restartGame);
	statusText.textContent = `${currentPlayer}'s turn`;
	gameRunning = true;
}

function cellClicked(){
	const cellIndex = this.getAttribute("cellIndex");

	if(options[cellIndex] != "" || !gameRunning){
		return;
	}

	updateCell(this, cellIndex);
	checkWinner();
}



function restartGame(){
	currentPlayer = "X";
	options = ["", "", "", "", "", "", "", "", ""];
	statusText.textContent = `${currentPlayer}'s turn`;
	cells.forEach(cell => cell.textContent = "");
	gameRunning = true;
}