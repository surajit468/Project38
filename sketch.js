//Create variables here
var dog;
var database,Food,foodStock,foodS;


function preload()
{
	//load images here
  dogImg=loadImage("images/dogImg.png");
  dogHappy=loadImage("images/dogImg1.png");

}

function setup() {
  database=firebase.database();
  createCanvas(800, 700);
   dog=createSprite(400,450,10,10);
dog.addImage(dogImg);
dog.scale=0.2;
foodStock=database.ref('Food');
foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87);
fill("white")
textSize(15)
text("Note:UP_ARROW Key To Feed Drago Milk!",250,50);
if(keyWentDown(UP_ARROW)) {
  writeStock(foodS);
  dog.addImage(dogHappy);
}
drawSprites();
//add styles here

} 
//Create variables here

function readStock(data) {
  foodS=data.val();
}

function writeStock(x) {

  if(x<=0) {
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}
  