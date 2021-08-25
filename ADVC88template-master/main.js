
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');

//Set initial positions for ball and hole images.
ball_y=0;
ball_x=0;
hole_y=400;
hol_x=800;
ball_img = 'ball.png';
hole_img = 'golf-h.png';

block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload ball image on the canvas
	new_image();
	fabric.Image.fromURL("ball.png", function (Img){
        ball_img = Img;
        ball_img.scaleToWidth(50);
        ball_img.scaleToHeight(50);
        ball_img.set({
            top:ball_y,
            left:ball_x
        });
        canvas.add(ball_img);
    });
}

function new_image()
{
	// write code to Upload golf image on canvas
	new_image();
	fabric.Image.fromURL("golf-h.png", function (Img){
        hole_img = Img;
        hole_img.scaleToWidth(50);
        hole_img.scaleToHeight(50);
        hole_img.set({
            top:ball_y,
            left:ball_x
        });
        canvas.add(ball_img);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_img);

		document.getElementById("hd3").innerHTML="You Have Hit The Goal!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
	}
		ball_y = ball_y - block_image_height;
		console.log("block image height = "+block_image_height);
		console.log("when up arrow key is pressed, X =" + ball_x + ", Y = " + ball_y);
		canvas.remove(ball_img);
		new_image();

	function down()
	{
		 // Write a code to move ball downward.
		 ball_y = ball_y + block_image_height;
		 console.log("block image height = "+ block_image_height);
		 console.log("when up arrow key is pressed, X =" + ball_x + ", Y = " + ball_y);
		 canvas.remove(ball_img);
		 new_image();
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
			ball_x = ball_x - block_image_width;
			console.log("block image width = "+block_image_width);
			console.log("when up arrow key is pressed, X =" + ball_x + ", Y = " + ball_y);
			canvas.remove(ball_img);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
			ball_x = ball_x + block_image_width;
			console.log("block image width = "+block_image_width);
			console.log("when up arrow key is pressed, X =" + ball_x + ", Y = " + ball_y);
			canvas.remove(ball_img);
			new_image();
		}
	}
	
}

