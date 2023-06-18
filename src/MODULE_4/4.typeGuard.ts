// Keyof guard

type AlphaNumeric = string | number
function add(param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric {
  if (typeof param1 == 'number' && typeof param2 == 'number') {
    return param1 + param2;
  } else {
    return Number(param1) + Number(param2)
  }
}

console.log(add('1', '2'))
console.log(add(1, 2))

// In guard
type NormalUserType = {
  name: string,
}

type AdminUserType = {
  name: string,
  role: 'admin',
}

function getUserType(user: NormalUserType | AdminUserType) {
  if ('role' in user) {
    return `I am an admin and my role is ${user.role}`
  } else {
    return `I am a normal user and my name is ${user.name}`
  }
}

const normalUser1: NormalUserType = { name: 'Mr. Kallu' }
const adminUser1: AdminUserType = { name: 'Mr. Gallu', role: 'admin' }

console.log(getUserType(normalUser1));
console.log(getUserType(adminUser1));



// instance of guard
class AnimalNew {
  constructor(public name: string, public species: string) {

  }

  makeSound() {
    console.log('I am making sound as like as: ' + this.name);
  }
}

class Dog extends AnimalNew {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log(`I am make barking as: ${this.name}`);
  }
}

class Cat extends AnimalNew {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeMeow() {
    console.log(`I am make meowing as: ${this.name}`)
  }
}

function isDog(animal: AnimalNew): animal is Dog {
  return animal instanceof Dog;
}

function isCat(animal: AnimalNew): animal is Cat {
  return animal instanceof Cat;
}

function getAnimal(animal: AnimalNew) {
  if (isDog(animal)) {
    animal.makeBark()
  } else if (animal instanceof Cat) {
    animal.makeMeow()
  } else {
    animal.makeSound()
  }
}

const animal1 = new Dog('German Bhai', 'Dog');  // instance --> dog
const animal2 = new Cat('Persian Bhai', 'Cat'); // instance --> cat

getAnimal(animal1)
getAnimal(animal2)