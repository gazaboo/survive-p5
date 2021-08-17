let game; 
let interval = 5000;
var socket;  

function setup() {
  // let PORT = process.env.PORT || 8080;
  createCanvas(640,480)
  game = new Game(); 
  setInterval(game.add_adversaire.bind(game), interval);     
  // socket = io.connect('http://0.0.0.0:8080'); 
  socket = io.connect(`https://survive-p5.herokuapp.com/`); 
  game.get_other_players_positions(socket);
}


function draw() {
  background(20, 100, 20);

  if (game.player.isAlive){
    let hasMoved = game.play(); 
    game.display_other_players(); 

    if (hasMoved) {
      game.player.emit_position(socket); 
    }

  } else {
    textSize(30)
    text("T'es mort !", 200, 200);
  }
}






