function destroy()
{
  girlButton.hide();
  boyButton.hide();
  boy.visible = false;
  boy2.visible = false;
  girl.visible = false;
  girl2.visible = false;
  gameState = 2;
}
function menu()
{
  about = createButton("About game");
  about.position(displayWidth/2.3,displayHeight/1.8);
  about.style('padding','10px 7px');
  about.style('font-size','20px');
  about.style('border','solid');
  about.style('border-color','magenta');
  about.style('background','pink');

  start = createButton("Play");
  start.position(displayWidth/2.25,displayHeight/4);
  start.style('padding','10px 23px');
  start.style('font-size','20px');
  start.style('border','solid');
  start.style('border-color','magenta');
  start.style('background','pink');


  inst = createButton("Instructions");
  inst.position(displayWidth/2.3,displayHeight/2.5);
  inst.style('padding','10px 7px');
  inst.style('font-size','20px');
  inst.style('border','solid');
  inst.style('border-color','magenta');
  inst.style('background','pink');

  about.mousePressed(()=>{
    about.hide();
    inst.hide();
    start.hide();
    gameState = 3;
    
  })
   inst.mousePressed(()=>{
    about.hide();
    inst.hide();
    start.hide();
    gameState = 4;
    
   })
   start.mousePressed(()=>{
    about.hide();
    inst.hide();
    start.hide();
    gameState = 5;
    reset();
   })
}

function createPlayer()
{
 if(gameState === 5)
 {
  player.scale = 0.35;
  player.visible = true;
 // player.debug = true;
   if(gender === "Girl")
   {
  player.addImage(player1m);
  player.setCollider("rectangle",-10,-16,80,440);
   }
   else if(gender ==="Boy")
   {
    player.addImage(player1f);
    player.setCollider("rectangle",-10,-16,80,450);
   }
  }
  else if(gameState === 7)
  {
    player.visible = true;
    if(gender === "Girl")
   {
  player.addImage(player2f);
  player.setCollider("rectangle",15,-16,180,760);
  player.scale = 0.23;
  player.debug = true;
   }
  }
}
function keyPressed()
{
  if(keyIsDown(RIGHT_ARROW))
  {
    player.x += 25;
  }
  if(keyIsDown(LEFT_ARROW))
  {
    player.x -= 25;
  }
  if(keyIsDown(UP_ARROW))
  {
    player.y -= 25;
  }
  if(keyIsDown(DOWN_ARROW))
  {
    player.y += 25;
  }
}
function level1()
{
  background(38,132.132);

  var block1 = createSprite(displayWidth/1.63,displayHeight/3.7,500,30);
  block1.addImage(houses);
  block1.scale = 0.34;
  block1.setCollider("rectangle",0,0,580,200);
  blocks.add(block1);

  var block2 = createSprite(displayWidth/2.03,displayHeight/3.7,500,30);
  block2.addImage(houses);
  block2.scale = 0.34;
  block2.setCollider("rectangle",0,0,580,200);
  blocks.add(block2);

  var block3 = createSprite(displayWidth/2.7,displayHeight/3.7,500,30);
  block3.addImage(houses);
  block3.scale = 0.34;
  block3.setCollider("rectangle",0,0,580,200);
  blocks.add(block3);

  var block4 = createSprite(displayWidth/1.07,displayHeight/3.7,500,30);
  block4.addImage(houses);
  block4.scale = 0.34;
  block4.setCollider("rectangle",0,0,580,200);
  blocks.add(block4);

  var block5 = createSprite(displayWidth/1.23,displayHeight/3.7,500,30);
  block5.addImage(houses);
  block5.scale = 0.34;
  block5.setCollider("rectangle",0,0,580,200);
  blocks.add(block5);

  var block6 = createSprite(displayWidth/1.36,displayHeight/3.7,500,30);
  block6.addImage(houses);
  block6.scale = 0.34;
  block6.setCollider("rectangle",0,0,580,200);
  blocks.add(block6);

  var block7 = createSprite(displayWidth/20,displayHeight/3.7,500,30);
  block7.addImage(houses);
  block7.scale = 0.34;
  block7.setCollider("rectangle",0,0,580,200);
  blocks.add(block7);

  var block8 = createSprite(displayWidth/20,displayHeight/1.9,500,30);
  block8.addImage(houses);
  block8.scale = 0.34;
  block8.setCollider("rectangle",0,0,580,200);
  blocks.add(block8);

  var block9 = createSprite(displayWidth/1.07,displayHeight/1.9,500,30);
  block9.addImage(houses);
  block9.scale = 0.34;
  block9.setCollider("rectangle",0,0,580,200);
  blocks.add(block9);

  var block10 = createSprite(displayWidth/1.23,displayHeight/1.9,500,30);
  block10.addImage(houses);
  block10.scale = 0.34;
  block10.setCollider("rectangle",0,0,580,200);
  blocks.add(block10);

  var block11 = createSprite(displayWidth/1.36,displayHeight/1.9,500,30);
  block11.addImage(houses);
  block11.scale = 0.34;
  block11.setCollider("rectangle",0,0,580,200);
  blocks.add(block11);

  var block12 = createSprite(displayWidth/5.85,displayHeight/1.9,500,30);
  block12.addImage(houses);
  block12.scale = 0.34;
  block12.setCollider("rectangle",0,0,580,200);
  blocks.add(block12);

  var block13 = createSprite(displayWidth/3.45,displayHeight/1.9,500,30);
  block13.addImage(houses);
  block13.scale = 0.34;
  block13.setCollider("rectangle",0,0,580,200);
  blocks.add(block13);

  var block14 = createSprite(displayWidth/2.45,displayHeight/1.9,500,30);
  block14.addImage(houses);
  block14.scale = 0.34;
  block14.setCollider("rectangle",0,0,580,200);
  blocks.add(block14);

  var block15 = createSprite(displayWidth/1.63,displayHeight/1.2,500,30);
  block15.addImage(houses);
  block15.scale = 0.34;
  block15.setCollider("rectangle",0,0,580,200);
  blocks.add(block15);

  var block16 = createSprite(displayWidth/2.03,displayHeight/1.2,500,30);
  block16.addImage(houses);
  block16.scale = 0.34;
  block16.setCollider("rectangle",0,0,580,200);
  blocks.add(block16);

  var block17 = createSprite(displayWidth/2.7,displayHeight/1.2,500,30);
  block17.addImage(houses);
  block17.scale = 0.34;
  block17.setCollider("rectangle",0,0,580,200);
  blocks.add(block17);

  var block18 = createSprite(displayWidth/1.07,displayHeight/1.2,500,30);
  block18.addImage(houses);
  block18.scale = 0.34;
  block18.setCollider("rectangle",0,0,580,200);
  blocks.add(block18);

  var block19 = createSprite(displayWidth/1.23,displayHeight/1.2,500,30);
  block19.addImage(houses);
  block19.scale = 0.34;
  block19.setCollider("rectangle",0,0,580,200);
  blocks.add(block19);

  var block20 = createSprite(displayWidth/1.36,displayHeight/1.2,500,30);
  block20.addImage(houses);
  block20.scale = 0.34;
  block20.setCollider("rectangle",0,0,580,200);
  blocks.add(block20);

  hospital.scale = 0.1;
 // hospital.debug = true;
  hospital.setCollider("rectangle",0,0,1600,1400);
  
   enemy1.scale = 0.2;  
  // enemy1.debug = true;
   obst1.add(enemy1);

   enemy2.scale = 0.26;
  // enemy2.debug = true;
   obst1.add(enemy2);
}
function stage2()
{

}
function reset()
{
  hospital.visible = true;
  enemy1.visible = true;
  enemy2.visible = true;
}