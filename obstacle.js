class Obstacle {
  constructor(d){
    this.posX = 100; 
    this.posY = 100;
    this.diametre = d;  
  }

  afficher(){
    fill(255,0,0); 
    circle(this.posX, this.posY, this.diametre); 
    fill(255); 
  }

  move(){
    this.posX += 1; 
  }
}