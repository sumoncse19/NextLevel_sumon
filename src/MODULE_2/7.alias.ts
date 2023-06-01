type WifeType = {
  name: string
  age?: number
  profession: string
  address: string
}

const wife1: WifeType = {
  name: 'Humayra',
  age: 19,
  profession: 'HouseWife',
  address: 'Ferdous'
}

const wife2: WifeType = {
  name: 'Ayesha',
  profession: 'HouseWife',
  address: 'Ferdous'
}

type CrushMarriedType = boolean
const isCrushMarried: CrushMarriedType = false;

type CourseNameType = string
const courseName: CourseNameType = 'Next Level Web Developer'


type OperationType = (x: number, y: number) => number
const calculate = (number1: number, number2: number, operation: (x: number, y: number) => number) => {
  return operation(number1, number2)
}

const calculate2 = (number1: number, number2: number, operation: OperationType) => {
  return operation(number1, number2)
}

calculate(10, 20, (x, y) => x + y)
calculate(10, 20, (x, y) => x - y)
calculate(10, 20, (x, y) => x * y)
console.log('Plus', calculate(10, 20, (x, y) => x + y));
console.log('Minus', calculate(10, 20, (x, y) => x - y));
console.log('Multiply', calculate(10, 20, (x, y) => x * y));
console.log('Divide', calculate(10, 20, (x, y) => x / y));
