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
      let hasMoved = false; 
      if (keyIsDown(LEFT_ARROW)) { this.x -= 10; hasMoved = true;}
      if (keyIsDown(RIGHT_ARROW)){ this.x += 10; hasMoved = true;}
      if (keyIsDown(UP_ARROW))   { this.y -= 10; hasMoved = true;}
      if (keyIsDown(DOWN_ARROW)) { this.y += 10; hasMoved = true;}
  
      if( this.x > 600){ this.x = 600;}
      if( this.x < 40 ){ this.x = 40; }
      if( this.y > 440){ this.y = 440;}
      if( this.y < 40 ){ this.y = 40; }

      return hasMoved; 
    }

    emit_position(socket){
      socket.emit('data', {
        x: this.x,
        y: this.y, 
        id: socket.id
      });

    }
  }