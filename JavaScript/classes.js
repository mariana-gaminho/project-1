class Board {
  constructor() {
    this.x = 0
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
    ctx1.drawImage(this.imgFloor, this.x, canvas1.height - this.imgFloor.height)
  }
  move() {
    this.x--
    if(this.x < -canvas1.width) this.x = 0
  }
}

class Character {
  constructor(){
    
  }
}