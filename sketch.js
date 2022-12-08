var bg,bgimg, ryo, ryoImage; 
var zodImg,zukoImg,tinaImg,saraImg,sara2Img
var score = 0

gameState =  1;
end = 0


function preload (){
bgimg = loadImage("assets/bg.jpg")
ryoImage = loadAnimation("assets/RYO1.png")
zodImg = loadImage("assets/zod.png")
zukoImg = loadImage("assets/zuko.png")
tinaImg = loadImage ("assets/tina.png")
saraImg = loadImage ("assets/sara.png")
sara2Img = loadImage ("assets/sara2.png")
}

function setup(){
 createCanvas(windowWidth,windowHeight);
 bg = createSprite(200,0);
 bg.addImage("bg",bgimg);
bg.velocityX = 5;
bg.scale = 3

ryo = createSprite(50,690)
ryo.addAnimation("ryo",ryoImage);
ryo.scale =  0.5


    
}
function draw(){
background(0)
// image(bgimg,0,0,2000,900)
text("pontução"+score,150,200)
if (gameState === 1){

    if(bg.x > 900 ){
        bg.x = 700
    }

  displayEnimies();



}


drawSprites();

}
function displayEnimies(){
    if (frameCount%240===0){
        var enemie = createSprite(650,690,10,40);
      enemie.velocityX=-2
      enemie.scale=1
      var r = Math.round(random(1,5))
      switch(r){
        case 1:enemie.addImage(zodImg);
        break;
        case 2:enemie.addImage(zukoImg);
        break;
        case 3:enemie.addImage(tinaImg);
        break;
        case 4:enemie.addImage(saraImg);
        break;
        case 5:enemie.addImage(sara2Img);
        break;
        default:break;
      }
    }
}
