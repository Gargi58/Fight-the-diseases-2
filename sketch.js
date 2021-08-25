var gameState = 0;
var girl , boy,Name;
var time,boyButton,girlButton,submit;
var about, start, inst;
var gender;
var enemy1,enemy2,form;
var edges;
var hospital;
function preload()
{
 // georama = loadFont('https://fonts.googleapis.com/css2?family=Georama:ital,wght@1,700&display=swap'); 
 boyImg = loadImage("Boy.png");
 girlImg = loadImage("girl.png");
 bgImg1 = loadImage('bg.jpg');
 bgImg2 = loadImage("bg2.png");
 bgImg3 = loadImage("bg4.png");
 bgImg4 = loadImage("bg5.jpg");
 bgImg5 = loadImage("bg6.jpg");
 bgImg6 = loadImage("lawn.jpg");
 player1m  = loadImage("level1.png");
 player1f = loadImage("father.png");
 //player2m  = loadImage("level1.png");
 player2f = loadImage("FplayerStage2.png");
 houses = loadImage("walls.png");
 hosp = loadImage("hospital.png");
 germ1 = loadImage("germ2.png");
 germ2 = loadImage("germ1.png");
 formImg = loadImage("form.jpg");
}
function setup()
{
  createCanvas(displayWidth-12,displayHeight-111);
  blocks = new Group();
  obst1 = new Group();
//welcome page of the game

 hospital = createSprite(displayWidth/1.07,displayHeight/12.5,500,30);
  hospital.addImage(hosp);

  edges = createEdgeSprites();

  input = createInput('Enter your name');
  input.position(displayWidth/2.45 , displayHeight/2.2);
  input.style("color","blue");
  input.style("background-color","skyblue");

  submit = createButton('Submit');
  submit.position(input.x+50,input.y+50);
  submit.style("color","purple");
  submit.style("border","solid");
  submit.style("background-color","lightgreen");
  submit.mousePressed(()=>{
    gameState = 1;
    input.hide();
    submit.hide();

    girl =  createSprite(displayWidth/1.7, displayHeight/2, 80, 80);
    girl.shapeColor = "pink";
    girl.scale = 3;
    girl2 =  createSprite(displayWidth/1.7, displayHeight/2, 80, 80);
    girl2.addImage(girlImg);
    girl2.scale = 0.48;
    boy =  createSprite(displayWidth/3, displayHeight/2, 80, 80);
    boy.shapeColor = "blue";
    boy.scale = 3;
    boy2 =  createSprite(displayWidth/3, displayHeight/2, 80, 80);
    boy2.scale = 0.5;
    boy2.addImage(boyImg);

    boyButton  = createButton('Boy');
    boyButton.position(boy.x-25,boy.y+150);
    boyButton.style("color","black");
    boyButton.style("border","solid");
    boyButton.style("border-color","blue");
    boyButton.style("background-color","skyblue");
    boyButton.style("padding",'4px,5px');
    
    girlButton  = createButton('Girl');
    girlButton.position(girl.x-25,girl.y+150);
    girlButton.style("color","black");
    girlButton.style("border","solid");
    girlButton.style("border-color","blue");
    girlButton.style("padding",'4px,5px');
    girlButton.style("background-color","skyblue");

    girlButton.mousePressed(()=>{
      gender = "Girl";
      destroy();
      menu();
    })
    boyButton.mousePressed(()=>{
      gender = "Boy";
      destroy();
      menu();
    })
  })
  player = createSprite(displayWidth/30,displayHeight/1.3);
  player.visible = false;

  enemy1 = createSprite(displayWidth/20,displayHeight/1.5,700,200);
  enemy1.addImage(germ1);
  enemy1.setCollider("circle",0,0,160);
  enemy1.velocityX = 40;
  enemy1.visible = false;

  enemy2 = createSprite(displayWidth/1.1,displayHeight/2.5,700,200);
  enemy2.addImage(germ2);
  enemy2.setCollider("circle",0,0,100);
  enemy2.velocityX = -46;
  enemy2.visible = false;

  form = createSprite(displayWidth/2,displayHeight/2.3,100,100);
  form.addImage(formImg);
  form.scale = 1.6;
  form.visible = false;

  home = createButton("Home");
  home.position(displayWidth/20,displayHeight/20);
  home.style('padding','2px 3px');
  home.style('font-size','15px');
  home.style('border','solid');
  home.style('border-color','darkgreen');
  home.style('background','turquoise');
  
  home.mousePressed(()=>{
    gameState = 2;
    about.show();
    inst.show();
    start.show();
  })
  home.hide();
  level2 = createButton("Level 2 -->");
    level2.position(displayWidth/1.5,displayHeight/24);
    level2.style('font-size','25px');
    level2.style('border','solid');
    level2.style('border-color','purple');
    level2.style('background','pink');
    
    level2.mousePressed(()=>{
      gameState = 7
      form.destroy();
    })
    level2.hide();
}
function draw() 
{
  player.collide(blocks);
  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);
  enemy1.bounceOff(edges[0]);
  enemy1.bounceOff(edges[1]);
  enemy2.bounceOff(edges[0]);
  enemy2.bounceOff(edges[1]);
  if(gameState ===0)
  {
  background(bgImg1);
  fill(255,0,102);
  stroke(255);
  strokeWeight(4);
  textSize(100);
  textFont("Arabic");
  textAlign(CENTER,CENTER);
  text ("Fight the diseases",displayWidth/2,displayHeight/13);
  }
  if(gameState=== 1)
  {
    background(bgImg1);
    fill("yellow");
    stroke("purple");
    strokeWeight(3);
    textSize(42);
    text("Choose your gender ",displayWidth/3 , displayHeight/3.6);

    fill("turquoise");
    stroke("darkgreen");
    strokeWeight(3);
    textSize(42);
    text("Hello "+Name,displayWidth/3 , displayHeight/4.8);
  }
  if(gameState === 2)
  {
    background(bgImg2);
  }
  if(gameState === 3)
  {
    home.show();
    background(bgImg3);
    fill("turquoise");
    textFont("Georgia");
    stroke("blue");
    strokeWeight(4);
    textSize(30);
    text("So the main objective of making this project is to create awareness among people about vaccination",displayWidth/10 , displayHeight/1.5);
  }
  if(gameState === 4)
  {
    home.show();
    background(bgImg4);
    fill("red");
    textFont("Georgia");
    stroke("white");
    strokeWeight(4);
    textSize(32);
    text("•	You have to move the player using arrow keys",displayWidth/6 , displayHeight/4.8);
    text("•	You have to save the player from the obstacles ",displayWidth/6 , displayHeight/2.8);
    text("•	You have to reach the vaccination centre before your lives get exhausted",displayWidth/6 , displayHeight/1.8);
  }
  if(gameState === 5)
  {
    home.hide();
    background(bgImg6);
    keyPressed();
    createPlayer();
    level1();
  }
  else if(gameState!=5)
  {
    hospital.visible = false;
    player.visible = false;
    blocks.destroyEach();
    enemy1.visible = false;
    enemy2.visible = false;
  }
  if(player.isTouching(obst1))
  {
    player.x = displayWidth/30;
    player.y = displayHeight/1.3;
  }
  if(player.isTouching(hospital))
  {
    gameState =6;
    form.visible = true;
    player.x = displayWidth/30;
    player.y = displayHeight/1.3;
  }
  if(gameState === 6)
  {
    obst1.destroyEach(); 
    level2.show();
    player.visible = false;
  }
  if(gameState ===  7)
  {
    background(0);
    fill("red");
    textFont("Georgia");
    stroke("white");
    strokeWeight(4);
    textSize(42);
    text("Wait for the next part of the game",displayWidth/2 , displayHeight/2);
    level2.hide();
    createPlayer();
    keyPressed();
  }
  drawSprites();
  Name = input.value();
//  console.log(gameState);
}

