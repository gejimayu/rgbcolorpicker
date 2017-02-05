var theRgb = document.querySelector("#thergb");
var square = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("button");
var modeButton = document.querySelectorAll("#mode");
var extraSquares = document.querySelectorAll("#squareHard")
var nSquare;
var displaySquare;

init();

resetButton.addEventListener("click",function(){ //setting up reset button
	reset(nSquare);
}); 

function init()
{
	nSquare = 6;
	reset(nSquare);
	setUpSquare();
	setUpModeButton();	
}

function setUpModeButton(){
	for (var i = 0; i < modeButton.length; i++){             //setting up mode button
		modeButton[i].addEventListener("click",function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent == "Easy" ? nSquare = 3: nSquare = 6;
			reset(nSquare);		
		});
	}

}

function setUpSquare(){
	for (var i=0; i < square.length; i++)
	{
		square[i].style.background = colorList[i];              //changing square's color

		square[i].addEventListener("click",function(){          //when the square's clicked
			var clickedSquare = this.style.background;
			if (clickedSquare == pickedColor)
			{
				message.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColor(clickedSquare);
				h1.style.background = clickedSquare;
			}
			else
			{
				this.style.background = "#232323";
				message.textContent = "Try Again";
			}
		});
	}
}

function reset(nSquare){
	colorList = generateRandomRgb(nSquare);
	pickedColor = colorList[pickColor()];
	theRgb.textContent = pickedColor;
	for (var i = 0; i < square.length; i++)
	{
		if(colorList[i]){
			square[i].style.display = "block";
			square[i].style.background = colorList[i];
		}
		else{
			square[i].style.display = "none";
		}
		
	}
	h1.style.background = "steelblue";
	resetButton.textContent = "New Colors";
	message.textContent = "";
}

function changeColor(color)                             //change all square's color into a color (winning condition)
{
	for (var j = 0; j < square.length; j++)
	{
		square[j].style.background = color;
	}
}
 
function pickColor()                                    //randomizing 0-5 
{
	var randomNumb = Math.floor(Math.random() * colorList.length);
	return randomNumb;
}

function generateRandomRgb(n)                           //generating an array full of rgb
{
	var arr = [];
	for (var i = 0; i < n; i++)
	{
		arr[i] = randomRgb();
	}
	return arr;
}

function randomRgb()                                    //randomizing rgb
{ 
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
