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
  }
}

class Player1 {
  constructor() {
    this.x = 50
    this.y = 445
    this.width = 90
    this.height = 90
    this.player1Up = new Image()
    this.player1Down = new Image()
    this.player1Up.src = 'ASSETS/Character/ChUp.png'
    this.player1Down.src = 'ASSETS/Character/ChDown.png'
    this.img = this.player1Up
  }
 draw(){
    if(frames % 10 === 0){
      this.img= this.img === this.player1Up ? this.player1Down : this.player1Up
    }
    ctx1.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  jump(){
    this.y -= 10
    for(let i =0; i<10; i++){
      this.y++
    }
  }
}

class Player2 {
  constructor() {
    this.x = 50
    this.y = 445
    this.width = 90
    this.height = 90
    this.player2Up = new Image()
    this.player2Down = new Image()
    this.player2Up.src = 'ASSETS/Character/ChUpPurple.png'
    this.player2Down.src = 'ASSETS/Character/ChDownPurple.png'
    this.img = this.player2Up
  }
 draw(){
    if(frames % 10 === 0){
      this.img= this.img === this.player2Up ? this.player2Down : this.player2Up
    }
    ctx2.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
}