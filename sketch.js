let game; 
let interval = 1000;



function setup() {
  createCanvas(640,480)
  game = new Game(); 
  setInterval(game.add_adversaire.bind(game), interval);     
}


function draw() {
  background(20, 100, 20);
  
  if (game.player.isAlive){
    game.play(); 
  } else {
    textSize(30)
    text("T'es pas assez en forme \npour continuer à jouer", 200, 200);
  }
}



class Game {
  constructor(){
    this.adversaires = []
    this.player = new Player();
  }

  add_adversaire(){ 
    this.adversaires.push(new Adversaire()); 
  }

  play(){
    this.player.display(); 
    this.player.move()

    this.adversaires.forEach( adversaire => {
      adversaire.display();
      adversaire.move();  
      adversaire.testCollision(this.player);
    }); 
  }
}

class Adversaire {
  constructor(){
    this.size = 40; 
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


class Player {

  constructor(){
    this.x = 100; 
    this.y = 100;
    this.size = 80; 
    this.isAlive = true;   
  }
  
  display(){
    circle(this.x, this.y, this.size); 
  }

  move(){
    if (keyIsDown(LEFT_ARROW)) { this.x -= 10;}
    if (keyIsDown(RIGHT_ARROW)){ this.x += 10;}
    if (keyIsDown(UP_ARROW))   { this.y -= 10;}
    if (keyIsDown(DOWN_ARROW)) { this.y += 10;}

    if( this.x > 600){ this.x = 600 }
    if( this.x < 40 ){ this.x = 40  }
    if( this.y > 440){ this.y = 440 }
    if( this.y < 40 ){ this.y = 40 }
  }
}