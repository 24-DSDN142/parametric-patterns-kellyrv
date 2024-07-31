//your parameter variables go here!
let vertex1X = 25; // vine positions
let vertex2X = 75;
let vertex3X = 125;
let vertex4X = 175;

let navyBlue = "#08013D" ; // assign colour names
let creamColour = "#d1cfc9";
let lightGreen = "#D4DBB4";
let burntOrange = "#8a591a";
let black = (0);

let starVersion = true // true and false change position of stars
let baseColour = black // background- can do either lightGreen, black, navyBlue, or creamColour
let flowerSize1 = 1 // choose number between 1 and 2 ie 1.5
let flowerSize = 1.5 //choose number between 1 and 2 ie 1.5
let flowerSize2 = 1 // choose number between 1 and 2 ie 1.5
let flowerFill = "#EDEDF4" // choose from "#BE6E46" (light orange),"#EDEDF4" (white-ish), "#C8A8F0"(purple), "#48A9A6" (light teal), "#69A3DD" (light blue) 
let flowerFill2 = "#69A3DD" // choose from "#BE6E46","#EDEDF4", "#C8A8F0", "#48A9A6", "#69A3DD"
let flowerFill3 = "#48A9A6" // choose from "#BE6E46","#EDEDF4", "#C8A8F0", "#48A9A6", "#69A3DD"

function drawFlower(centreX,centreY) {
  
  strokeWeight(0.5)
  stroke(69,70,42)
  fill(flowerFill) //randomized petal colours
  ellipse(centreX-5,centreY,5*flowerSize1, 5*flowerSize1)// left petal
  ellipse(centreX-2.5,centreY+4,5*flowerSize1, 5*flowerSize1)//bottom left petal
  ellipse(centreX+2.5,centreY+4,5*flowerSize1, 5*flowerSize1) //bottom right petal
  ellipse(centreX+5,centreY,5*flowerSize1, 5*flowerSize1)// right petal
  ellipse(centreX+2.5,centreY-4,5*flowerSize1, 5*flowerSize1)// top right petal
  ellipse(centreX-2.5,centreY-4,5*flowerSize1, 5*flowerSize1)//top left petal
  
  stroke(69,70,42)
  fill(burntOrange) 
  ellipse(centreX,centreY, 7*flowerSize1, 7*flowerSize1)//flower centre
  
} 

function drawFlower2(centreX,centreY) {
   
   strokeWeight(0.5)
   stroke(69,70,42)
   fill(flowerFill2) //petal colours
   ellipse(centreX-5,centreY,5*flowerSize, 5*flowerSize)// left petal
   ellipse(centreX-2.5,centreY+4,5*flowerSize, 5*flowerSize)//bottom left petal
   ellipse(centreX+2.5,centreY+4,5*flowerSize, 5*flowerSize) //bottom right petal
   ellipse(centreX+5,centreY,5*flowerSize, 5*flowerSize)// right petal
   ellipse(centreX+2.5,centreY-4,5*flowerSize, 5*flowerSize)// top right petal
   ellipse(centreX-2.5,centreY-4,5*flowerSize, 5*flowerSize)//top left petal
   
   stroke(69,70,42)
   fill(138, 89, 26)
   ellipse(centreX,centreY, 7*flowerSize, 7*flowerSize)//flower centre
   
 }

 function drawFlower3(centreX,centreY) {
  let size = random(1, 1.5)
   
   strokeWeight(0.5)
   stroke(69,70,42)
   fill(flowerFill3) // petal colours
   ellipse(centreX-5,centreY,5*flowerSize2, 5*flowerSize2)// left petal
   ellipse(centreX-2.5,centreY+4,5*flowerSize2, 5*flowerSize2)//bottom left petal
   ellipse(centreX+2.5,centreY+4,5*flowerSize2, 5*flowerSize2) //bottom right petal
   ellipse(centreX+5,centreY,5*flowerSize2, 5*flowerSize2)// right petal
   ellipse(centreX+2.5,centreY-4,5*flowerSize2, 5*flowerSize2)// top right petal
   ellipse(centreX-2.5,centreY-4,5*flowerSize2, 5*flowerSize2)//top left petal
   
   stroke(69,70,42)
  fill(138, 89, 26) 
   ellipse(centreX,centreY, 7*flowerSize2, 7*flowerSize2)//flower centre
   
 }

 function drawStar(starX, starY) {
  noStroke();
  beginShape();
  vertex(starX, starY-5);
  vertex(starX+1, starY-1);
  vertex(starX+5, starY);
  vertex(starX+1, starY+1);
  vertex(starX, starY+5);
  vertex(starX-1, starY+1);
  vertex(starX-5, starY);
  vertex(starX-1, starY-1);
  endShape();

  }

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
  BezierHelper.useBezierTool(pWallpaper);
}

function wallpaper_background() {
  background(baseColour);
  
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  BezierHelper.storeTransform();


 stroke(69,70,42);
 strokeWeight(2);
  

 noFill();
 
 beginShape();//line 1
 vertex(vertex1X,0);
 bezierVertex(0,50, 60, 125, vertex1X, 200);
 endShape();

 beginShape(); //line 2
 vertex(vertex2X,0);
 bezierVertex(110,50, 50, 125, vertex2X, 200);
 endShape();

 beginShape(); //line 3
 vertex(vertex3X,0);
 bezierVertex(100,50, 150, 125, vertex3X, 200);
 endShape();

 beginShape(); // line 4
 vertex(vertex4X,0);
 bezierVertex(200,50, 150, 125, vertex4X, 200);
 endShape();


 fill(69,70,42); //leaf colour
 strokeWeight(1); //leaf outline
 stroke(35, 36, 21); //leaf outline

 beginShape(); // 3rd from top leaf vine 2
 vertex(97, 87);
 bezierVertex(62, 91, 82, 107, 97, 87);
 endShape();

 beginShape(); //2nd from top leaf vine 2
 vertex(70, 35);
 bezierVertex(98, 41, 85, 58, 70, 35);
 endShape();

 beginShape();// 2nd from bottom leaf vine 2
 vertex(56, 139);
 bezierVertex(74, 137, 71, 183, 56, 139);
 endShape();


 beginShape(); //top leaf vine 2 new
 vertex(98, -9);
 bezierVertex(59, 7, 93, 25, 98, -9);
 endShape();

 beginShape(); //bottom leaf vine 2
 vertex(98, 191);
 bezierVertex(59, 207, 93, 225, 98, 191);
 endShape();

 beginShape(); // second from top leaf vine 1
 vertex(41, 61);
 bezierVertex(18, 65, 24, 94, 41, 61);
 endShape();


 beginShape(); // top leaf vine 3
 vertex(100, 17);
 bezierVertex(133, 50, 115, 6, 100, 17);
 endShape();

 beginShape(); //top leaf vine 1
 vertex(4, 9);
 bezierVertex(30, 22, 15, 43, 4, 9);
 endShape();

 beginShape(); //2nd from bottom leaf vine 1
 vertex(15, 101);
 bezierVertex(41, 98, 36, 140, 15, 101);
 endShape();


 beginShape(); // bottom leaf vine 1
 vertex(52, 181);
 bezierVertex(23, 207, 22, 175, 52, 181);
 endShape();

 beginShape(); // 2nd from top leaf vine 3
 vertex(141, 54);
 bezierVertex(127, 83, 103, 52, 141, 54);
 endShape();


 beginShape(); //2nd from bottom leaf vine 3
 vertex(108, 115);
 bezierVertex(141, 113, 136, 147, 108, 115);
 endShape();

 beginShape(); //bottom leaf vine 3
 vertex(151, 166);
 bezierVertex(124, 197, 125, 160, 151, 166);
 endShape();



 beginShape(); // top leaf, vine 4
 vertex(192, -6);
 bezierVertex(160, 9, 194, 20, 192, -6);
 endShape();



 beginShape(); //4rd from bottom leaf, vine 4
 vertex(161, 34);
 bezierVertex(174, 75, 198, 46, 161, 34);
 endShape();


 beginShape(); //3nd from bottom leaf, vine 4
 vertex(191, 81);
 bezierVertex(173, 122, 165, 88, 191, 81);
 endShape();




 beginShape(); // 2nd from bottom leaf vine 4
 vertex(148, 133);
 bezierVertex(161, 169, 186, 133, 148, 133);
 endShape();

 beginShape(); // bottom leaf, vine 4
 vertex(192, 194);
 bezierVertex(160, 209, 194, 220, 192, 194);
 endShape();

 drawFlower(15,50); // flower 1 (from top left and down each vine)

 drawFlower2(30,90);

 drawFlower3(35, 150);
 
 drawFlower(88,60);

 drawFlower2(70, 120);
 
 drawFlower3(75, 180);
 
 drawFlower(125,10);

 drawFlower2(120,90);

 drawFlower3(135, 150);
 
 drawFlower(185, 20);

 drawFlower2(175, 115);
 
 drawFlower3(175, 180);

if(starVersion) {
  drawStar(10, 75);
  drawStar(55,20);
  drawStar(100, 120);
  drawStar(150, 50);
  drawStar(15, 170);
  drawStar(150, 185);
  drawStar(180,135)
}

 else {
  drawStar(5, 35);
  drawStar(60, 70);
  drawStar(110, 130);
  drawStar(145, 40);
  drawStar(50, 160);
  drawStar(110, 190);
  drawStar(190, 150)
  drawStar(150,90)
  drawStar(40, 10)
  drawStar(15, 120)
 }
}