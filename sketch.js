let game;

function setup() {
  createCanvas(640,480)
  game = new Game(); 
  setInterval(game.add_virus, 1000);  
}


function draw() {
  background(20, 100, 20);
  game.play()


  // if (p.isAlive){
  //   v.display(); 
  //   v.move(); 
  //   p.display(); 
  //   p.move();
  //   v.testCollision(p);    
  // } else {
  //   textSize(30)
  //   text("T'es pas assez en forme \npour continuer à jouer", 200, 200);
  // }

}

class Game {
  
  constructor(){
    this.pandemie = []
    this.citoyen = new Player();   
  }

  add_virus(){
    let new_virus = new Virus();
    this.pandemie.push(new_virus);  
  }

  play(){
    this.citoyen.display(); 
    this.citoyen.move()

    this.pandemie.forEach( v => {
      v.display();
      v.move();  
    }); 

  }



}

class Virus {
  constructor(){
    this.d = 40; 
    this.x = random(20, 620); 
    this.y = random(20, 460);
    this.direction = random([-1, 1]); 
    this.vitesse = round(random(1, 10)); 
  } 
  
  display(){
    fill('red')
    circle(this.x, this.y, this.d); 
    fill('white')
  }

  move(){
    this.x = this.x + this.direction * this.vitesse; 
    if (this.x >= 620 || this.x <= 20 ){
      this.direction = - this.direction; 
    }  
  }

  testCollision(p){
    let distance = dist(this.x, this.y, p.x, p.y )
    if (distance < (this.d + p.d)/2){
      p.isAlive = false;     
    } 
  }
}


class Player {

  constructor(){
    this.x = 100; 
    this.y = 100;
    this.d = 80; 
    this.isAlive = true;   
  }
  
  display(){
    circle(this.x, this.y, this.d); 
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