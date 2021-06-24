var spaceSt,StImg,bg,space1,space2,space2,space4,ss,clap;
var gameState=1;
function setup() {
  createCanvas(displayWidth,displayHeight-145);
  ss=createSprite(displayWidth-100,displayHeight-225,50,50);
  ss.scale=0.3;
  ss.addImage("s1",space1);
  ss.addImage("s2",space2);
  ss.addImage("s3",space3);
  ss.addImage("s4",space4);
  spaceSt= createSprite((displayWidth-20)/2,(displayHeight-250)/2,50,50);
  spaceSt.addImage("st",StImg);
}

function preload(){
  StImg=loadImage("images/iss.png");
  bg=loadImage("images/spacebg.jpg");
  space1=loadImage("images/spacecraft1.png");
  space2=loadImage("images/spacecraft2.png");
  space3=loadImage("images/spacecraft3.png");
  space4=loadImage("images/spacecraft4.png");
}
function draw() {
  background(bg);
  if(gameState===1){
  if(keyDown("UP")){
    ss.y=ss.y-5;
    ss.changeImage("s2",space2);
  }
  if(keyDown("DOWN")){
    ss.y=ss.y+5;
    ss.changeImage("s2",space2);
  }
  if(keyDown("LEFT")){
    ss.x=ss.x-5;
    ss.changeImage("s4",space4);
  }
  if(keyDown("RIGHT")){
    ss.x=ss.x+5;
    ss.changeImage("s3",space3);
  }}
  if(ss.x===(601||602||603||604||605||606||607)&&ss.y===383){
   gameState=2;
   fill("White")
   strokeWeight(3);
   stroke("red")
   textSize(25);
   text("DOCKING SUCCESSFUL!",displayWidth/2-75,displayHeight-150);
  }
  drawSprites();
}