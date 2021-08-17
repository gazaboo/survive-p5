
class Game {
    constructor(){
      this.adversaires = []
      this.player = new Player();
      this.other_players = new Map(); 
    }
  
    add_adversaire(){ 
      this.adversaires.push(new Adversaire()); 
    }
  
    play(){
      this.player.display(); 
      let hasMoved = this.player.move()
  
      this.adversaires.forEach( adversaire => {
        adversaire.display();
        adversaire.move();  
        // adversaire.testCollision(this.player);
      }); 
      return hasMoved; 
    }

    get_other_players_positions(socket){
      socket.on('data', data => {
        this.other_players.set(data.id, {x: data.x, y: data.y}); 
        console.log("other_players", data)
      }) 
    }

    display_other_players(){
      for (let val of this.other_players.values()) {
        circle(val.x, val.y, 60); 
      } 
    }
  }
  