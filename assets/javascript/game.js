$( document ).ready(function() {

	//GLOBAL VARIABLES
	var ranNum = 0;
	var playerScore = 0;
	var wins = 0;
	var losses = 0;
	var redNum = "";
	var yellNum = "";
	var bluNum = "";
	var grnNum = "";



	//FUNCTIONS
	function startGame() {
		// body...
		ranNum = Math.floor(Math.random() * (120 - 19)) + 19;
		redNum = Math.floor(Math.random() * 12) + 1;
		yellNum = Math.floor(Math.random() * 12) + 1;
		bluNum = Math.floor(Math.random() * 12) + 1;
		grnNum = Math.floor(Math.random() * 12) + 1;
		playerScore = 0;

		$("#ranNum").html(ranNum);
		$("#playerScore").html(playerScore);
	}

	function checkScore(){
		if (playerScore == ranNum){
			alert("DUDE! You win! TOTALLY NAILED IT!!");
			wins++;
			$("#wins").html(wins);
			startGame();

		} else if (playerScore > ranNum) {
			alert("Duuuuuude. Bummer. You totally blew it.");
			losses++;
			$("#losses").html(losses);
			startGame();
		}
	}

	$("#red").click(function(){
		playerScore = playerScore + redNum;
		$("#playerScore").html(playerScore);
		checkScore();
	});

	$("#yellow").click(function(){
		playerScore = playerScore + yellNum;
		$("#playerScore").html(playerScore);
		checkScore();
	});

	$("#blue").click(function(){
		playerScore = playerScore + bluNum;
		$("#playerScore").html(playerScore);
		checkScore();
	});

	$("#green").click(function(){
		playerScore = playerScore + grnNum;
		$("#playerScore").html(playerScore);
		checkScore();
	});







	






	//MAIN GAME
	startGame();









	//NOTES/DEBUGGING
	console.log(ranNum);
	console.log(redNum, yellNum, bluNum, grnNum);
});