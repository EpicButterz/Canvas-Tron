var canvas, ctx,
width = 960,
height = 540,
rightKey = false,
leftKey = false,
upKey = false,
downKey = false,
player1 = {
	width: 25,
	height: 25,
	x: 20,
	y: 20
},
player2 = {
	width: 25,
	height: 25,
	x: 900,
	y: 500
};
function reset(){
	player1 = {
		width: 25,
		height: 25,
		x: 20,
		y: 20
	};
	ctx.clearRect(0,0,900,500);
	rightKey = false;
	leftKey = false;
	upKey = false;
	downKey = false;
} 

function clearCanvas() {
	ctx.clearRect(player1.x,player1.y,25,25);
}

function drawPlayers() {
	var pixTop = ctx.getImageData(player1.x, player1.y - 1, 25, 1).data;  /// location to sample a pixel from
	// ctx.fillRect(player1.x, player1.y - 7, 25, 1);
	var pixBottom = ctx.getImageData(player1.x, player1.y + 27, 25, 1).data;
	// ctx.fillRect(player1.x, player1.y + 40, 25, 1);
	var pixLeft = ctx.getImageData(player1.x - 2, player1.y, 1, 25).data;
	// ctx.fillRect(player1.x - 2, player1.y + 7, 1, 1);
	var pixRight = ctx.getImageData(player1.x + 27, player1.y, 1, 25).data;
	// ctx.fillRect(player1.x + 27, player1.y + 7, 1, 1)
	/// check that it is the color of the background (here transparent)
	if (pixTop[3] !== 0) {
    	console.log("You Lose!");
    	reset();
	 }else if (pixBottom[3] !== 0){
	 	console.log("You Lose!")
	 	reset();
	 }else if (pixLeft[3] !== 0){
	 	console.log("You Lose!")
	 	reset();
	 }else if (pixRight[3] !== 0){
	 	console.log("You Lose!")
	 	reset();
	 }

	if (rightKey) {
		//Collision with East wall
		if(player1.x > 930){
			player1.x += 0;
			console.log('You Lose!');
			reset();
		}else{// If no collision continue
			// Draw tail
			ctx.fillStyle = "#8ed0de";
			ctx.fillRect(player1.x,player1.y + 12,3,3);
			ctx.fillStyle = "black";
			// Move player forward
			player1.x += 5;
		}
	} else if (leftKey) {		
		if(player1.x < 0){
			player1.x -= 0;
			console.log('You Lose!');
			reset();
		}else{
			ctx.fillStyle = "#8ed0de";
			ctx.fillRect(player1.x + 25,player1.y + 12,3,3);
			ctx.fillStyle = "black";
			player1.x -= 5;
		}
	} else if (upKey){
		if(player1.y < 0){
			player1.y -= 0;
			console.log('You Lose!');
			reset();
		}else{
			ctx.fillStyle = "#8ed0de";
			ctx.fillRect(player1.x + 12,player1.y + 25,3,3);
			ctx.fillStyle = "black";
			player1.y -= 5;
		}
	}	else if (downKey){
		if(player1.y > 525){
			player1.y -= 0;
			console.log('You Lose!');
			reset();
		}else{
			ctx.fillStyle = "#8ed0de";
			ctx.fillRect(player1.x + 12,player1.y,3,3);
			ctx.fillStyle = "black";
			player1.y += 5;
		}
	}
	ctx.fillRect(player1.x,player1.y,player1.width,player1.height);
	ctx.fillRect(player2.x,player2.y,player2.width,player2.height);
    	
	  // Are the players touching?
	// if (
	// 	player1.x <= (player2.x + 25)
	// 	&& player2.x <= (player1.x + 25)
	// 	&& player1.y <= (player2.y + 25)
	// 	&& player2.y <= (player1.y + 25)
	// 	) {
	// 	console.log('Player!');
	// }
}

function loop() {
	clearCanvas();
	drawPlayers();
}

function keyDown(e) {
	if (e.keyCode == 39){
		rightKey = true;
		leftKey = false;
		upKey = false;
		downKey = false;
	}else if (e.keyCode == 37){
		rightKey = false;
		leftKey = true;
		upKey = false;
		downKey = false;
	}else if (e.keyCode == 38){
		rightKey = false;
		leftKey = false;
		upKey = true;
		downKey = false;
	}else if (e.keyCode == 40){
		rightKey = false;
		leftKey = false;
		upKey = false;
		downKey = true;
	}
}

// function keyUp(e) {
// 	if (e.keyCode == 39) rightKey = false;
// 	else if (e.keyCode == 37) leftKey = false;
// 	else if (e.keyCode == 38) upKey = false;
// 	else if (e.keyCode == 40) downKey = false;
// }

(function init() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	setInterval(loop, 1000/30);
	document.addEventListener('keydown', keyDown, false);
	// document.addEventListener('keyup', keyUp, false);
})();


