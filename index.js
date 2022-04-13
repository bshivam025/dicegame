var a = Math.floor(Math.random() * 6) + 1;
var b = Math.floor(Math.random() * 6) + 1;

document.querySelectorAll("img")[1].setAttribute("src","images/dice"+a+".png");
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+b+".png");

// if(a > b)alert("Player 1 Wins");
// else if(b > a)alert("Player 2 Wins");
// else alert("DRAW");