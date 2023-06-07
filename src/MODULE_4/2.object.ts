class Animal {
  // public name: string;
  // public species: string;
  // public sound: string;

  // Parameter Properties

  constructor(public name: string, public species: string, public sound: string) {
    // this.name = name;
    // this.species = species;
    // this.sound = sound;
  }

  // ekhane amra function call korte pari ekhetre class er moddhe function call korle eta k method bola hoy, R arrow function use kora jabe na, cz arrow function ee this property kaj kore na, kintu ekhane this property diye value gula use korte hbe.
  public makeSound() {
    console.log(`The ${this.name} says ${this.sound}`); // 'German Shephard says Ghew Ghew'
  }
}

const dog = new Animal('German Shephard', 'dog', 'Ghew Ghew');
const cat = new Animal('Persian', 'cat', 'Meaw Meaw');
dog.makeSound();
cat.makeSound();