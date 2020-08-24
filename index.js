var rand1 = Math.floor(Math.random() * 6) + 1;

var imagesrc1 = "dice" + rand1 + ".png";

var img1="images/"+imagesrc1;

document.querySelectorAll("img")[0].setAttribute("src",img1);

var rand2= Math.floor(Math.random()*6)+1;

var imagesrc2 ="images/dice"+rand2+".png";

document.querySelectorAll("img")[1].setAttribute("src",imagesrc2);

if (rand1>rand2) {
  document.querySelector("h1").innerHTML="Player1 Wins!";

} else if(rand2>rand1){
  document.querySelector("h1").innerHTML="Player2 Wins!";

}
else{
  document.querySelector("h1").innerHTML="🎲 Draw! 🎲";
}
