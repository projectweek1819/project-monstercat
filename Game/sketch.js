var grid;
function setup(){
  createCanvas(550,550);
  createGrid(8,8);
}

function draw(){
  background(220);
  fill(204, 101, 192, 127);
  for(var i = 0; i < grid.length; i++){
    for(var j = 0; j < grid[i].length; j++){
      var x = 50 + i*60;
      var y = 50 + j*60;
      setColor(grid[i][j]);
      ellipse(x, y, 50, 50);
    }
  }
}

function setColor(colorCode){
  switch(colorCode){
    case 1:
      fill(229, 6, 6);
      break;
    case 2:
      fill(113, 229, 5);
      break;
    case 3:
      fill(4, 143, 229);
      break;
    case 4:
      fill(229, 221, 4);
      break;
    case 5:
      fill(180, 4, 229);
      break;
    case 6:
      fill(255, 131, 0);
      break;
  }
}



function createGrid(xSize, ySize){
  grid = new Array(ySize);
  for(var i = 0; i < grid.length; i++){
    grid[i] = new Array(xSize);
    for(var j = 0; j < grid[i].length; j++){
      grid[i][j] = Math.floor(Math.random() * 6) + 1;
    }

  }
}
