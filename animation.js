function Animation(){
  this.canvas = document.querySelector("canvas");
  this.ctx = this.canvas.getContext("2d");
  this.walkingSpriteSheet = new Image();
  this.walkingSpriteSheet.src = "./images/walking.png";
  this.frameIndex = 0;
  this.frameSpeed = 7;
  this.speedCounter = 0;
}



Animation.prototype.frameIndexCounter = function(){
  this.speedCounter++;
    if(this.speedCounter === this.frameSpeed){
    if(this.frameIndex < 3){
      this.frameIndex ++;
      this.speedCounter = 0;
    }else{
      this.frameIndex = 0;
      this.speedCounter = 0;
    }
  }
}

Animation.prototype.render = function(game){
  this.frameIndexCounter();
  this.ctx.drawImage(
    this.walkingSpriteSheet,
    this.frameIndex * 200,
    0,
    200,
    200,
    game.character.x,
    game.character.y,
    52,
    52
  )
}