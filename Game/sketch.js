var grid;
var backupJewel1;
var backupJewel2;
var selectedJewel1 = null;
var selectedJewel2 = null;
var clickCount;
var score;


function setup(){
  createCanvas(550,550);
  generateBoard(8,8);
  clickCount = 0;
  score = 0;
}

function draw(){
  background(220);
  showGrid();
  if(selectedJewel1 != null){
    drawSelection();
  }
}


function drawSelection(){
  noFill();
  stroke(0,0,0);
  strokeWeight(2);
  rect(20+60*selectedJewel1.x, 20+60*selectedJewel1.y,60, 60);
}

function mousePressed(){
  for(var i = 0; i < 8; i++){
    for(var j = 0; j < 8; j++){
      var flag = grid[i][j].selected(mouseX, mouseY);
      if((flag) && (clickCount == 0)){
        clickCount++;
        selectedJewel1 = grid[i][j];
      }else if((flag) && (clickCount == 1)){
        clickCount = 0;
        selectedJewel2 = grid[i][j];
        swap(grid[selectedJewel1.x][selectedJewel1.y], grid[selectedJewel2.x][selectedJewel2.y]);
        selectedJewel1 = null;
        selectedJewel2 = null;
      }
    }
  }
}

function showGrid(){
  for(var i = 0; i < grid.length; i++){
    for(var j = 0; j < grid[i].length; j++){
      if(grid[i][j] != null){
        grid[i][j].show();
      }
    }
  }
}

function removeJewel(x,y){
  grid[x][y] = null;
  collapse();
}

function removeJewels(jewelChain){
  for(var i = 0; i < jewelChain.length; i++){
    grid[jewelChain[i].x][jewelChain[i].y] = null;
    collapse();
  }
}

function collapse(){

  //search column
  for(var i = 0; i < 8; i++){

    //search row, bottom up!!!!
    for(var j = 7; j >= 0; j--){
      if(grid[i][j] == null){

        //look for first not null object
        for(var k = j-1; k >=0; k--){
          if(grid[i][k] != null){

            var temp = grid[i][j];
            grid[i][j] = grid[i][k];
            grid[i][k] = temp;

            fixJewelCoord()

            break;
          }
        }
      }
    }
  }

  dropJewels();
}

function dropJewels(){
  for(var i = 0; i<8; i++){
    for(var j = 0; j<8; j++){
      if(grid[i][j] == null){
        grid[i][j] = new Jewel(i, j, Math.floor(Math.random() * 6) + 1);

      }
    }
  }
}


function generateBoard(xSize, ySize){
  grid = new Array(ySize);
  for(var i = 0; i < grid.length; i++){
    grid[i] = new Array(xSize);
    for(var j = 0; j < grid[i].length; j++){
      grid[i][j] = new Jewel(i, j, Math.floor(Math.random() * 6) + 1);

      //check horizontal
      while((i >=2) && (grid[i-1][j].color == grid[i][j].color) &&
              (grid[i-2][j].color == grid[i][j].color)){

        grid[i][j] = new Jewel(i, j, Math.floor(Math.random() * 6) + 1)
      }
      //check vertical
      while((j >=2) && (grid[i][j-1].color == grid[i][j].color) &&
              (grid[i][j-2].color == grid[i][j].color)){
        grid[i][j] = new Jewel(i, j, Math.floor(Math.random() * 6) + 1)
      }
    }
  }
}

function fixJewelCoord(){
  for(var i = 0; i < 8; i++){
    for(var j = 0; j < 8; j++){
      if(grid[i][j] != null){
        grid[i][j].x = i;
        grid[i][j].y = j;
      }
    }
  }
}


function swap( Jewel1, Jewel2){
if(isValidSwap(Jewel1, Jewel2)){
  backupJewel1 = Jewel1;
  backupJewel2 = Jewel2;

  xCoord1 = Jewel1.x;
  yCoord1 = Jewel1.y;
  xCoord2 = Jewel2.x;
  yCoord2 = Jewel2.y;

  //swap jewels in grid
  grid[xCoord1][yCoord1] = Jewel2;
  grid[xCoord2][yCoord2] = Jewel1;
  fixJewelCoord();
  showGrid();
  }else{
    console.log("invalid swap, try again bitch !");
  }
}

function undoSwap(){
  if((backupJewel1 == null) || (backupJewel2 == null)){
    console.log("There is no backupswap");
  }

  swap(backupJewel1, backupJewel2);
}


function isValidSwap(Jewel1, Jewel2){
  return Math.abs(Jewel2.x - Jewel1.x) == 1 && Math.abs(Jewel2.y - Jewel1.y) == 0
  || Math.abs(Jewel2.x - Jewel1.x) == 0 && Math.abs(Jewel2.y - Jewel1.y) == 1
}
