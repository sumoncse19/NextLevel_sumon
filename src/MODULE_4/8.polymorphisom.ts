class Person {

  takeNape(): void {
    console.log(`I am sleeping 8 hours per day.`);
  }
}

class Student1 extends Person {
  takeNape(): void {
    console.log(`I am sleeping 10 hours per day.`);
  }
}

class Developer extends Person {
  takeNape(): void {
    console.log(`I am sleeping 5 hours per day.`);
  }
}

const person1 = new Person();
const person2 = new Student1();
const person3 = new Developer();

function getNap(param: Person) {
  param.takeNape();
}

getNap(person1)
getNap(person2)
getNap(person3)



class Shape {
  getArea(): number {
    return 0;
  }

}

// Area of circle --> pi * r square
class Circe extends Shape {
  constructor(public radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Area of rectangle --> height * width
class Rectangle extends Shape {
  constructor(public height: number, public width: number) {
    super();
  }

  getArea(): number {
    return this.height * this.width
  }
}

function getAreaOfShape(params: Shape) {
  console.log(params.getArea());

  return params.getArea();
}

getAreaOfShape(new Circe(5));
getAreaOfShape(new Rectangle(5, 10));