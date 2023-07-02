const font = new Font();
const Black = Color.new(0,0,0); 
const White = Color.new(255,255,255); 
var posx = 0; //posição inicial do personagem 
var posy = 0; //posição inicial do personagem 
var velocidade = 2; //velocidade do personagem 
class person {
  draw() {
    Draw.rect(posx, posy, 32, 32, White);  
  }
  MoveLeft() {
    posx = posx - velocidade;  
  }
  MoveRight() {
    posx = posx + velocidade; 
  }
  MoveUp() {
    posy = posy - velocidade; 
  } 
  MoveDown() {
    posy = posy + velocidade; 
  }
  Move(){
    let pad = Pads.get();
    var left = Pads.check(pad,Pads.LEFT); 
    var right = Pads.check(pad,Pads.RIGHT);
    var up = Pads.check(pad,Pads.UP); 
    var down = Pads.check(pad,Pads.DOWN); 
    if(left) {
      this.MoveLeft(); 
    }
    if(right) {
      this.MoveRight(); 
    }
    if(up) {
      this.MoveUp();
    }
    if(down) {
      this.MoveDown(); 
    }
  }
}
os.setInterval(() => {
  Screen.clear(); 
  const personagem = new person(); 
  personagem.Move(); 
  personagem.draw(); 
  Screen.waitVblankStart(); 
  Screen.flip(); 
}, 0);