var grid;
var backupJewel1;
var backupJewel2;

function setup(){
  createCanvas(550,550);
  generateBoard(8,8);
}

function draw(){
  background(220);
  showGrid();

}

function mousePressed(){
  //// TODO:
}

function showGrid(){
  for(var i = 0; i < grid.length; i++){
    for(var j = 0; j < grid[i].length; j++){
      grid[i][j].show();
    }
  }
}

//// TODO: controle dat de vorige jewels niet hetzelfde zijn
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

function swap(Jewel1, Jewel2){
  backupJewel1 = Jewel1;
  backupJewel2 = Jewel2;

  xCoord1 = Jewel1.x;
  yCoord1 = Jewel1.y;
  xCoord2 = Jewel2.x;
  yCoord2 = Jewel2.y;

  //swap coord of jewel object
  Jewel1.x = xCoord2;
  Jewel1.y = yCoord2;
  Jewel2.x = xCoord1;
  Jewel2.y = yCoord2;

  //swap jewels in grid
  grid[xCoord1][yCoord1] = Jewel2;
  grid[xCoord2][yCoord2] = Jewel1;

}

function undoSwap(){
  swap(backupJewel1, backupJewel2);
}
