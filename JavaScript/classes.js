class Board {
  constructor() {
    this.x = 0
    this.xFloor = 0
    this.y = 0
    this.width = canvas1.width
    this.height = canvas1.height
    this.img = new Image()
    this.img.src = "ASSETS/BG/BG.png"
    this.imgFloor = new Image()
    this.imgFloor.src = "ASSETS/Tiles/2.png"
    this.img.onload = () => {
      this.draw()
      this.drawFloor()
    }
  }
  draw() {
    ctx1.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx1.drawImage(this.img, this.x + canvas1.width, this.y, this.width, this.height)

    ctx2.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx2.drawImage(this.img, this.x + canvas1.width, this.y, this.width, this.height)
    this.move()
  }
  drawFloor() {
    ctx1.drawImage(this.imgFloor, this.xFloor, canvas1.height - this.imgFloor.height)
    ctx1.drawImage(this.imgFloor, this.xFloor+this.imgFloor.width, canvas1.height - this.imgFloor.height)
    ctx1.drawImage(this.imgFloor, this.xFloor+this.imgFloor.width*2, canvas1.height - this.imgFloor.height)
    ctx1.drawImage(this.imgFloor, this.xFloor+this.imgFloor.width*3, canvas1.height - this.imgFloor.height)
    ctx1.drawImage(this.imgFloor, this.xFloor+this.imgFloor.width*4, canvas1.height - this.imgFloor.height)
    ctx1.drawImage(this.imgFloor, this.xFloor+this.imgFloor.width*5, canvas1.height - this.imgFloor.height)
    ctx1.drawImage(this.imgFloor, this.xFloor+this.imgFloor.width*6, canvas1.height - this.imgFloor.height)
    ctx1.drawImage(this.imgFloor, this.xFloor+this.imgFloor.width*7, canvas1.height - this.imgFloor.height)
    ctx2.drawImage(this.imgFloor, this.xFloor, canvas1.height - this.imgFloor.height)
    ctx2.drawImage(this.imgFloor, this.xFloor+this.imgFloor.width, canvas1.height - this.imgFloor.height)
    ctx2.drawImage(this.imgFloor, this.xFloor+this.imgFloor.width*2, canvas1.height - this.imgFloor.height)
    ctx2.drawImage(this.imgFloor, this.xFloor+this.imgFloor.width*3, canvas1.height - this.imgFloor.height)
    ctx2.drawImage(this.imgFloor, this.xFloor+this.imgFloor.width*4, canvas1.height - this.imgFloor.height)
    ctx2.drawImage(this.imgFloor, this.xFloor+this.imgFloor.width*5, canvas1.height - this.imgFloor.height)
    ctx2.drawImage(this.imgFloor, this.xFloor+this.imgFloor.width*6, canvas1.height - this.imgFloor.height)
    ctx2.drawImage(this.imgFloor, this.xFloor+this.imgFloor.width*7, canvas1.height - this.imgFloor.height)
    this.moveFloor()
  }
  move() {
    this.x--
    if(this.x < -canvas1.width) this.x = 0
  }
  moveFloor(){
    this.xFloor--
    if(this.xFloor< -this.imgFloor.width) this.xFloor = 0
  }
  gameOver(){
    clearInterval(interval)
    displayFinalScores()
  }
}

class Player1 {
  constructor() {
    this.x = 50
    this.y = 445
    this.width = 90
    this.height = 90
    this.lives = 5
    this.score = 0
    this.player1Up = new Image()
    this.player1Up.src = 'ASSETS/Character/ChUp.png'  
    this.player1Down = new Image()
    this.player1Down.src = 'ASSETS/Character/ChDown.png'
    this.img = this.player1Up
    this.jumpingSound = new Audio()
    this.jumpingSound.src = 'http://www.mariomayhem.com/downloads/sounds/Super_Smash_Bros_Sound_Effects_USA_JPN/Jump%202.wav'
  }
 draw(){
    ctx1.drawImage(this.img, this.x, this.y, this.width, this.height)
    if(this.y < 445) {
      this.img = this.player1Up
      this.y+=2
      if(this.x > canvas1.width - this.width - 20){
        return
      } else {
        this.x++
      }
    } else {
      if(frames % 10 === 0){
        this.img= this.img === this.player1Up ? this.player1Down : this.player1Up
      }
    }
  }
  jump(){
    this.jumpingSound.play()
    this.y -= 180
    if(this.x > canvas1.width - this.width - 20){
      return
    } else {
      this.x+= 5
      }  
    }
  move(){
    if(this.x <= 50){
      return
    } else if(this.y === 445) {
      this.x--
    }  
  }
  moveRight(){
    if(this.x > canvas1.width - this.width - 20) return
    this.x += 10
  }
  isTouching(obstacle) {
    return (
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
    )
  }
}

class Player2 {
  constructor() {
    this.x = 50
    this.y = 445
    this.width = 90
    this.height = 90
    this.lives = 5
    this.score = 0
    this.player2Up = new Image()
    this.player2Up.src = 'ASSETS/Character/ChUpPurple.png'
    this.player2Down = new Image()
    this.player2Down.src = 'ASSETS/Character/ChDownPurple.png'
    this.player2UpBack = new Image()
    this.player2UpBack.src = 'ASSETS/Character/ChUpPurpleBack.png'
    this.player2DownBack = new Image()
    this.player2DownBack.src = 'ASSETS/Character/ChDownPurpleBack.png'
    this.img = this.player2Up
    this.jumpingSound = new Audio()
    this.jumpingSound.src = 'http://www.mariomayhem.com/downloads/sounds/Super_Smash_Bros_Sound_Effects_USA_JPN/Jump%202.wav'
  }
 draw(){
  ctx2.drawImage(this.img, this.x, this.y, this.width, this.height)
    if(this.y < 445) {
      this.img = this.player2Up
      this.y+=2
      if(this.x > canvas2.width - this.width - 20){
        return
      } else {
        this.x++
      }
    } else {
      if(frames % 10 === 0){
        this.img= this.img === this.player2Up ? this.player2Down : this.player2Up
      }
    }
  }
  jump(){
    this.jumpingSound.play()
    this.y -= 180
    if(this.x > canvas2.width - this.width - 20){
      return
    } else {this.x+=20}

  }
  move(){
    if(this.x <= 50){
      return
    } else if(this.y === 445) {
      this.x--
    }  
  }
  moveRight(){
    if(this.x > canvas1.width - this.width - 20) return
    this.x += 10
  }
  isTouching(obstacle) {
    return (
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
    )
  }
}

class Obstacle {          
  constructor() {
    this.x = canvas1.width + 50
    this.y = 465
    this.width = 70
    this.height= 70
    this.imgStone = new Image()
    this.imgStone.src = 'ASSETS/Object/Stone.png'
    this.imgCrate = new Image()
    this.imgCrate.src = 'ASSETS/Object/CratePixel.png'
    this.imgTree = new Image()
    this.imgTree.src = 'ASSETS/Object/Tree_1.png'
    this.random1 = [this.imgStone, this.imgTree, this.imgCrate][Math.floor(Math.random()*3)]
    this.random2 = [this.imgStone, this.imgTree, this.imgCrate][Math.floor(Math.random()*3)]
    this.audio = new Audio()
    this.audio.src = 'http://www.mariomayhem.com/downloads/sounds/super_mario_bros/smb_bump.wav'
  }
  draw1() {
    ctx1.drawImage(this.random1, this.x, this.y, this.width, this.height)
    this.move()
  }
  draw2(){
    ctx2.drawImage(this.random2, this.x, this.y, this.width, this.height)
    this.move()
  }
  move(){
    this.x--
  }
}

class Coin {
  constructor(x,y){
    this.x = x
    this.y = y
    this.width = 50
    this.height = 50
    this.coin1 = new Image()
    this.coin1.src = 'ASSETS/Coin/Coin1.png'
    this.coin2 = new Image()
    this.coin2.src = 'ASSETS/Coin/Coin2.png'
    this.coin3 = new Image()
    this.coin3.src = 'ASSETS/Coin/Coin3.png'
    this.coin4 = new Image()
    this.coin4.src = 'ASSETS/Coin/Coin4.png'
    this.coin5 = new Image()
    this.coin5.src = 'ASSETS/Coin/Coin5.png'
    this.coin6 = new Image()
    this.coin6.src = 'ASSETS/Coin/Coin6.png'
    this.img = this.coin1
    this.audio = new Audio()
    this.audio.src = "http://soundfxcenter.com/video-games/super-mario-bros/8d82b5_Super_Mario_Bros_Coin_Sound_Effect.mp3"
  }
  draw1(){
    ctx1.drawImage(this.img, this.x, this.y, this.width, this.height)
    if(frames % 5 === 0) {
      this.img =
      this.img === this.coin1
      ? this.coin2
      : this.img === this.coin2
      ? this.coin3
      : this.img === this.coin3
      ? this.coin4
      : this.img === this.coin4
      ? this.coin5
      : this.img === this.coin5
      ? this.coin6 : this.coin1
    }
    this.x--
  }
  draw2(){
    ctx2.drawImage(this.img, this.x, this.y, this.width, this.height)
    if(frames % 5 === 0) {
      this.img =
      this.img === this.coin1
      ? this.coin2
      : this.img === this.coin2
      ? this.coin3
      : this.img === this.coin3
      ? this.coin4
      : this.img === this.coin4
      ? this.coin5
      : this.img === this.coin5
      ? this.coin6 : this.coin1
    }
    this.x--
  }
}

class Life{
  constructor(x){
    this.x = x
    this.y = 50
    this.width = 55
    this.height = 55
    this.life = new Image()
    this.life.src = 'ASSETS/Object/Heart.png'
  }
  draw1(){
    ctx1.drawImage(this.life, this.x, this.y, this.width, this.height)
  }
  draw2(){
    ctx2.drawImage(this.life, this.x, this.y, this.width, this.height)
  }
}