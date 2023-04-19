function setup() {
  createCanvas(500, 500);
  
  cars = [];

  for (let carsDrawn = 0; carsDrawn < 2; carsDrawn++) {
    let thisX = random(100);
    let thisY = 270;
    let thisSize = 1.5;
    let thisHue = random(360);
    let thisSpeed = random(3, 5);

    cars[carsDrawn] = new Car(thisX, thisY, thisSize, thisHue, thisSpeed);
    
  vehicles = [];

  for (let vehiclesDrawn = 0; vehiclesDrawn < 2; vehiclesDrawn++) {
    let thisX = random(100);
    let thisY = 370;
    let thisSize = 1.5;
    let thisHue = random(360);
    let thisSpeed = random(4, 6);

    vehicles[vehiclesDrawn] = new Vehicle(thisX, thisY, thisSize, thisHue, thisSpeed);
   }
  }
}

function draw() {
  background(255);
  backdrop(0, 0);
  
  for (let carsShown = 0; carsShown < cars.length; carsShown++) {

    cars[carsShown].move();
    cars[carsShown].show();
  }
  for (let vehiclesShown = 0; vehiclesShown < vehicles.length; vehiclesShown++) {

    vehicles[vehiclesShown].move();
    vehicles[vehiclesShown].show();
  }
  
}

class Car {
  constructor(x, y, size, color, speed){
    this.x = x
    this.y = y
    this.size = size
    this.color = color
    this.speed = speed
    this.addX = 5
  }
  show(){
    push();
    translate(this.x, this.y);
    scale(this.size);
    fill(this.color)
    noStroke();
    rect(0, 0, 60, 40);
    fill("lightblue")
    rect(5, 5, 15, 30);  
    pop();
  }
  move(){
    this.x = this.x + this.addX;
    this.y = this.y;
    let carIsTooFarLeft = this.x < 0;
    let carIsTooFarRight = this.x > 400;
    if (carIsTooFarLeft || carIsTooFarRight) {
      this.addX = -this.addX;
    }
  }
}

class Vehicle {
  constructor(x, y, size, color){
    this.x = x
    this.y = y
    this.size = size
    this.color = color
    this.addX = 5
  }
  show(){
    push();
    translate(this.x, this.y);
    scale(this.size);
    fill("yellow")
    noStroke();
    rect(0, 0, 80, 40);
    fill("lightsteelblue")
    rect(65, 5, 10, 30);
    pop();
  }
  move(){
    this.x = this.x + this.addX;
    this.y = this.y;
    let vehicleIsTooFarLeft = this.x < 0;
    let vehicleIsTooFarRight = this.x > 400;
    if (vehicleIsTooFarLeft || vehicleIsTooFarRight) {
      this.addX = -this.addX;
    }
  }
}

class Wood {
  constructor(x, y, size){
    this.x = x
    this.y = y
    this.size = size
    this.addX = 5
  }
  show(){
    push();
    translate(this.x, this.y);
    scale(this.size);
    
    fill("brown");
    noStroke();
    rect(0, 0, 125, 40);
    rect(140, 0, 125, 40);
    pop();
  }
  move(){
    this.x = this.x + this.addX;
    this.y = this.y;
    let woodIsTooFarLeft = this.x < 0;
    let woodIsTooFarRight = this.x > 250;
    if (woodIsTooFarLeft || woodIsTooFarRight) {
      this.addX = -this.addX;
    }
  }
}

class Log {
  constructor(x, y, size){
    this.x = x
    this.y = y
    this.size = size
    this.addX = 5
  }
  show(){
    push();
    translate(this.x, this.y);
    scale(this.size);
    
    fill("brown");
    noStroke();
    rect(0, 0, 125, 40);
    rect(180, 0, 125, 40);
    pop();
  }
  move(){
    this.x = this.x + this.addX;
    this.y = this.y;
    let logIsTooFarLeft = this.x < 0;
    let logIsTooFarRight = this.x > 250;
    if (logIsTooFarLeft || logIsTooFarRight) {
      this.addX = -this.addX;
    }
  }
}

function backdrop(x, y){
  noStroke();
  fill("green")
  rect(-10, 0, 510, 250)
  
  stroke("tan")
  strokeWeight(5)
  fill("steelblue")
  rect(-10, 50, 510, 150)
  
  noStroke();
  fill("darkgray");
  rect(-10, 250, 510, 100)
  stroke("goldenrod");
  strokeWeight(3);
  rect(-10, 350, 510, 100)
  
  stroke("dimgray")
  strokeWeight(2)
  fill("gray")
  rect(-10, 450, 510, 50)
}
