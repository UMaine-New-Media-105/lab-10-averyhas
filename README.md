NMD 105 Lab #10
Sketch Link: https://editor.p5js.org/averyhas/sketches/MXwB2QjP0
"Draw cars that bounce off the walls in lanes. "

To begin this exercise, I created a backdrop which shows a road with two lanes, as well as a river. I then began creating classes for each type of moving object I wanted to incorporate in my sketch/code. I began by creating a Car class (for lane 1), a Vehicle class (for lane 2), a Wood class (for the river), and a Log class (also for the river). Within these classes, I added the instructions to draw each object under the ```show()``` method of my class.

In addition to the ```show()``` method, I also added a ```move()``` method to each class. Within this, I added the code to make each sprite move accordingly.

```Javascript
  move(){
    this.x = this.x + this.addX;
    this.y = this.y;
    let carIsTooFarLeft = this.x < 0;
    let carIsTooFarRight = this.x > 400;
    if (carIsTooFarLeft || carIsTooFarRight) {
      this.addX = -this.addX;
    }
```

In the ```setup()``` function, I added a cars array, a for loop (for the cars), code to call the Car class, a vehicles array, a for loop (for the vehicles), and code to call the Vehicle class. 

```Javascript
  cars = [];

  for (let carsDrawn = 0; carsDrawn < 2; carsDrawn++) {
    let thisX = random(100);
    let thisY = 270;
    let thisSize = 1.2;
    let thisHue = random(360);
    let thisSpeed = random(3, 5);

    cars[carsDrawn] = new Car(thisX, thisY, thisSize, thisHue, thisSpeed);
    
  vehicles = [];

  for (let vehiclesDrawn = 0; vehiclesDrawn < 2; vehiclesDrawn++) {
    let thisX = random(100);
    let thisY = 370;
    let thisSize = 1.2;
    let thisHue = random(360);
    let thisSpeed = random(4, 6);

    vehicles[vehiclesDrawn] = new Vehicle(thisX, thisY, thisSize, thisHue, thisSpeed);
  }
```

I then added for loops in the ```draw()``` function:

```Javascript
  for (let carsShown = 0; carsShown < cars.length; carsShown++) {

    cars[carsShown].move();
    cars[carsShown].show();
  }
  for (let vehiclesShown = 0; vehiclesShown < vehicles.length; vehiclesShown++) {

    vehicles[vehiclesShown].move();
    vehicles[vehiclesShown].show();
  }
```


Unfortunately, I did not have adequate time to add the code for the Wood/Log classes, or the sprite which moves across the canvas (the "frog"). 

