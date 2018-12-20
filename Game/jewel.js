class Jewel{
  constructor(xCoord,yCoord,colorCode){
    this.x = xCoord;
    this.y = yCoord;
    this.color = colorCode
  }
  selected(xPos,yPos){
    var distance = dist(xPos, yPos, 50+60*this.x, 50+60*this.y);
    if(distance <= 25){
      console.log("clicked jewel: " + this.x + " " + this.y);
      return true;
    }
  }

  show(){
    switch(this.color){
      //Rood
      case 1:
        image(imgArray[0], 25+60*this.x, 25+60*this.y, 50, 50);
        break;
      //Groen
      case 2:
        image(imgArray[1], 25+60*this.x, 25+60*this.y, 50, 50);
        break;
      //Blauw
      case 3:
        image(imgArray[2], 25+60*this.x, 25+60*this.y, 50, 50);
        break;
      //Geel
      case 4:
        image(imgArray[3], 25+60*this.x, 25+60*this.y, 50, 50);
        break;
      //Paars
      case 5:
        image(imgArray[4], 25+60*this.x, 25+60*this.y, 50, 50);
        break;
      //Oranje
      case 6:
        image(imgArray[5], 25+60*this.x, 25+60*this.y, 50, 50);
        break;
    }
  }
}
