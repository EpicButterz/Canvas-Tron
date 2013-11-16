var canvas, ctx,
width = 960,
height = 540,
rightKey = false,
leftKey = false,
upKey = false,
downKey = false,
w = false,
a = false,
s = false,
d = false,
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
	player2 = {
		width: 25,
		height: 25,
		x: 900,
		y: 500
	};
	ctx.clearRect(0,0,960,540);
	rightKey = false;
	leftKey = false;
	upKey = false;
	downKey = false;
	w = false;
	a = false;
	s = false;
	d = false;
} 

function clearCanvas() {
	ctx.clearRect(player1.x,player1.y,25,25);
	ctx.clearRect(player2.x,player2.y,25,25);
}

function drawPlayer1() {

	//////////////////////////////////////////////////////////////////////////
	///////////////////////////   Player 1    ////////////////////////////////
	//////////////////////////////////////////////////////////////////////////

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

	if (d) {
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
	} else if (a) {		
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
	} else if (w){
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
	}	else if (s){
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
}

function drawPlayer2() {

	//////////////////////////////////////////////////////////////////////////
	///////////////////////////   Player 2    ////////////////////////////////
	//////////////////////////////////////////////////////////////////////////

	var pixTop = ctx.getImageData(player2.x, player2.y - 1, 25, 1).data;  /// location to sample a pixel from
	// ctx.fillRect(player2.x, player2.y - 7, 25, 1);
	var pixBottom = ctx.getImageData(player2.x, player2.y + 27, 25, 1).data;
	// ctx.fillRect(player2.x, player2.y + 40, 25, 1);
	var pixLeft = ctx.getImageData(player2.x - 2, player2.y, 1, 25).data;
	// ctx.fillRect(player2.x - 2, player2.y + 7, 1, 1);
	var pixRight = ctx.getImageData(player2.x + 27, player2.y, 1, 25).data;
	// ctx.fillRect(player2.x + 27, player2.y + 7, 1, 1)
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
		if(player2.x > 930){
			player2.x += 0;
			console.log('You Lose!');
			reset();
		}else{// If no collision continue
			// Draw tail
			ctx.fillStyle = "#ffaf0b";
			ctx.fillRect(player2.x,player2.y + 12,3,3);
			ctx.fillStyle = "black";
			// Move player forward
			player2.x += 5;
		}
	} else if (leftKey) {		
		if(player2.x < 0){
			player2.x -= 0;
			console.log('You Lose!');
			reset();
		}else{
			ctx.fillStyle = "#ffaf0b";
			ctx.fillRect(player2.x + 25,player2.y + 12,3,3);
			ctx.fillStyle = "black";
			player2.x -= 5;
		}
	} else if (upKey){
		if(player2.y < 0){
			player2.y -= 0;
			console.log('You Lose!');
			reset();
		}else{
			ctx.fillStyle = "#ffaf0b";
			ctx.fillRect(player2.x + 12,player2.y + 25,3,3);
			ctx.fillStyle = "black";
			player2.y -= 5;
		}
	}	else if (downKey){
		if(player2.y > 525){
			player2.y -= 0;
			console.log('You Lose!');
			reset();
		}else{
			ctx.fillStyle = "#ffaf0b";
			ctx.fillRect(player2.x + 12,player2.y,3,3);
			ctx.fillStyle = "black";
			player2.y += 5;
		}
	}
	ctx.fillRect(player2.x,player2.y,player2.width,player2.height);
}

function loop() {
	clearCanvas();
	drawPlayer1();
	drawPlayer2();
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
	}else if (e.keyCode == 87){
		w = true;
		a = false;
		s = false;
		d = false;
	}else if (e.keyCode == 65){
		w = false;
		a = true;
		s = false;
		d = false;
	}else if (e.keyCode == 83){
		w = false;
		a = false;
		s = true;
		d = false;
	}else if (e.keyCode == 68){
		w = false;
		a = false;
		s = false;
		d = true;
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


