var canvas, ctx, sprites, bgImage,
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
background = {
	ready: false
},
game = {
	player : [
		{
			width : 44,
			height : 16,
			srcX : 6,
			srcY : 6,
			x : 20,
			y : 20,
			ready: false,
			tail : {
				x : 0,
				y : 0,
				height : 3,
				width : 3,
				color: '#9ddde0'
			}
		},
		{
			width : 44,
			height : 16,
			srcX : 0,
			srcY : 0,
			x : 900,
			y : 500,
			ready : false,
			tail : {
				x : 0,
				y : 0,
				height : 3,
				width : 3,
				color: '#9ddde0'
			}
		}
	],
};
function reset(){
	
	game.player[0] = {
		width: 44,
		height: 16,
		srcX: 6,
		srcY: 6,
		x: 20,
		y: 20,
		ready: false
	};
	game.player[1] = {
		width: 44,
		height: 16,
		srcX: 0,
		srcY: 0,
		x: 900,
		y: 500
	};
	rightKey = false;
	leftKey = false;
	upKey = false;
	downKey = false;
	w = false;
	a = false;
	s = false;
	d = false;
} 

function drawBackground(){
	var bgImage = new Image();
	bgImage.onload = function() {
		background.ready = true;
	};
	bgImage.src = "images/background.png";
}

function drawPlayer1() {

	if (d) {
		//Collision with East wall
		if(game.player[0].x > 930){
			game.player[0].x += 0;
			console.log('You Lose!');
			reset();
		}else{// If no wall collision continue
			// Draw tail
			
			// Move player forward
			game.player[0].x += 8;
			game.player[0].srcX = 6;
			game.player[0].srcY = 6;
			game.player[0].width = 44;
			game.player[0].height = 16;
			game.player[0].ready = true;
		}
	} else if (a) {		
		if(game.player[0].x < 0){
			game.player[0].x -= 0;
			console.log('You Lose!');
			reset();
		}else{

			game.player[0].x -= 8;
			game.player[0].srcX = 50;
			game.player[0].srcY = 6;
			game.player[0].width = 44;
			game.player[0].height = 16;
			game.player[0].ready = true;
		}
	} else if (w){
		if(game.player[0].y < 0){
			game.player[0].y -= 0;
			console.log('You Lose!');
			reset();
		}else{

			game.player[0].y -= 8;
			game.player[0].srcX = 104;
			game.player[0].srcY = 6;
			game.player[0].width = 16;
			game.player[0].height = 44;
			game.player[0].ready = true;
		}
	}	else if (s){
		if(game.player[0].y > 525){
			game.player[0].y -= 0;
			console.log('You Lose!');
			reset();
		}else{

			game.player[0].y += 8;
			game.player[0].srcX = 126;
			game.player[0].srcY = 6;
			game.player[0].width = 16;
			game.player[0].height = 44;
			game.player[0].ready = true;
		}
	}
}

function drawPlayer2() {

	if (rightKey) {
		//Collision with East wall
		if(game.player[1].x > 930){
			game.player[1].x += 0;
			console.log('You Lose!');
			reset();
		}else{// If no wall collision continue
			// Draw tail
			
			// Move player forward
			game.player[1].x += 8;
			game.player[1].srcX = 6;
			game.player[1].srcY = 55;
			game.player[1].width = 44;
			game.player[1].height = 16;
			game.player[1].ready = true;
		}
	} else if (leftKey) {		
		if(game.player[1].x < 0){
			game.player[1].x -= 0;
			console.log('You Lose!');
			reset();
		}else{

			game.player[1].x -= 8;
			game.player[1].srcX = 50;
			game.player[1].srcY = 55;
			game.player[1].width = 44;
			game.player[1].height = 16;
			game.player[1].ready = true;
		}
	} else if (upKey){
		if(game.player[1].y < 0){
			game.player[1].y -= 0;
			console.log('You Lose!');
			reset();
		}else{

			game.player[1].y -= 8;
			game.player[1].srcX = 104;
			game.player[1].srcY = 55;
			game.player[1].width = 16;
			game.player[1].height = 44;
			game.player[1].ready = true;
		}
	}	else if (downKey){
		if(game.player[1].y > 525){
			game.player[1].y -= 0;
			console.log('You Lose!');
			reset();
		}else{

			game.player[1].y += 8;
			game.player[1].srcX = 126;
			game.player[1].srcY = 55;
			game.player[1].width = 16;
			game.player[1].height = 44;
			game.player[1].ready = true;
		}
	}
}

function loop() {
	drawBackground();
	drawPlayer1();	
	drawPlayer2();
	render();
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

var render = function () {
	if (background.ready == true) {
		ctx.drawImage(bgImage, 0, 0);
	}
	if (game.player[0].ready == true) {
		ctx.drawImage(sprites,game.player[0].srcX,game.player[0].srcY,game.player[0].width,game.player[0].height,game.player[0].x,game.player[0].y,game.player[0].width,game.player[0].height);
	}
	if (game.player[1].ready == true) {
		ctx.drawImage(sprites,game.player[1].srcX,game.player[1].srcY,game.player[1].width,game.player[1].height,game.player[1].x,game.player[1].y,game.player[1].width,game.player[1].height);
	}
};

(function init() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	bgImage = new Image();
	bgImage.src = "images/background.png";
	sprites = new Image();
  	sprites.src = 'images/Light_Cycle_Sheet.png';
	setInterval(loop, 1000/30);
	document.addEventListener('keydown', keyDown, false);
	render();
})();


