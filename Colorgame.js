var numSquares=6;
var colors=randomColorGenerator(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colordisplay=document.getElementById("colordisplay");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easy=document.querySelector("#easyBtn");
var hard=document.querySelector("#hardBtn");
colordisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		var colorCLicked=this.style.backgroundColor;
		if(colorCLicked===pickedColor)
		{
			message.textContent="correct";
			h1.style.backgroundColor=colorCLicked;
			changeColors(colorCLicked);
			resetButton.textContent="play again?";

		}
		else
		{
			this.style.backgroundColor="#232323";
			message.textContent="tryAgain";
		}
		
	});
}
function changeColors(color)
{
	for(i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}
function pickColor()
{
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}
function randomColorGenerator(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}
	return arr;
}
function randomColor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}
resetButton.addEventListener("click",function()
{
	colors=randomColorGenerator(numSquares);
	pickedColor=pickColor();
	colordisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
	this.textContent="New colors";
	message.textContent="";
})
easy.addEventListener("click",function()
{
	numSquares=3;
	colors=randomColorGenerator(numSquares);
	pickedColor=pickColor();
	colordisplay.textContent=pickedColor;
	easy.classList.add("selected");
	hard.classList.remove("selected");
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
})
hard.addEventListener("click",function()
{
	numSquares=6;
	colors=randomColorGenerator(numSquares);
	pickColor=pickColor;
	colordisplay.textContent=pickedColor;
	hard.classList.add("selected");
	easy.classList.remove("selected");
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.display="block";
	}
})