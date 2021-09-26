var  database;
var form,player,gameState;
var bgImg;
var backgroundImg;
var playerCount;
var canvas;

function preload()
{
  backgroundImg=loadImage("assets/background.png")
}

function setup(){
  database = firebase.database();
  canvas=createCanvas(windowWidth,windowHeight);
  game = new Game()
  game.start();
  bgImg=backgroundImg
}

function draw(){
  background(bgImg);
  
}
function windowResized()
{
  resizeCanvas(windowWidth,windowHeight);
}