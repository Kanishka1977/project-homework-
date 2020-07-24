var stand;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;



function setup() {
  createCanvas(800,400);
  
  stand= new Ground(400, 200, 50, 50);

  block1= new Box(330,235,30,40);
  block2= new Box(360,235,30,40);
  block3= new Box(390,235,30,40);
  block4= new Box(420,235,30,40);
  block5= new Box(450,235,30,40);
  block6= new Box(360,195,30,40);
  block7= new Box(390,195,30,40);
  block8= new Box(420,195,30,40);
  block9= new Box(390,155,30,40);


}

function draw() {
  background(255,255,255);
  strokeWeight(4);

  stand.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();



  drawSprites();
}