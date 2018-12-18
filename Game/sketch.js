var grid;
function setup(){
  createCanvas(550,550);
  generateBoard(8,8);
}

function draw(){
  background(220);
  showGrid();

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
    }
  }
}
