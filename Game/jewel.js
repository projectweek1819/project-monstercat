class Jewel{
  constructor(xCoord,yCoord,colorCode){
    this.x = xCoord;
    this.y = yCoord;
    this.color = colorCode
  }
  select(){

  }

  setColor(){
    switch(this.color){
      //Rood
      case 1:
        fill(229, 6, 6);
        break;
      //Groen
      case 2:
        fill(113, 229, 5);
        break;
      //Blauw
      case 3:
        fill(4, 143, 229);
        break;
      //Geel
      case 4:
        fill(229, 221, 4);
        break;
      //Paars
      case 5:
        fill(180, 4, 229);
        break;
      //Oranje
      case 6:
        fill(255, 131, 0);
        break;
    }
  }

  show(){
    this.setColor();
    ellipse(50+60*this.x, 50+60*this.y, 50, 50);
  }
}
