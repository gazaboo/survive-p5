class Adversaire {
    constructor(){
      this.size = 20; 
      this.x = random(20, 620); 
      this.y = random(20, 460);
      this.direction = random([-1, 1]); 
      this.vitesse = round(random(1, 10)); 
    } 
    
    display(){
      fill('red')
      circle(this.x, this.y, this.size); 
      fill('white')
    }
  
    move(){
      this.x = this.x + this.direction * this.vitesse; 
      if (this.x >= 620 || this.x <= 20 ){
        this.direction = - this.direction; 
      }  
    }
  
    testCollision(player){
      let distance = dist(this.x, this.y, player.x, player.y )
      if (distance < (this.size + player.size)/2){
        player.isAlive = false;     
      } 
    }
  }