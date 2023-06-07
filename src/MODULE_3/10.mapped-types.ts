const arrayOfNumbers = [1, 2, 3, 4]; // ['1', '2', '3', '4]

const arrayOfStrings = arrayOfNumbers.map((number) => number.toString())

console.log(arrayOfStrings);

type AreaNumber = {
  height: number;
  width: number;
}

const obj = {
  name: 'Sumon',
}
console.log(obj['name'])

type B = AreaNumber['height'] // lookup types

type C = keyof AreaNumber; // 'width' | 'height'

type AreaString = {
  height: string;
  width: string;
}

type AreaReadOnly = {
  readonly height: number;
  readonly width: number;
}
const rectangularArea: AreaReadOnly = {
  height: 10,
  width: 12,
}
// rectangularArea.height = 15;



function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {
  const item = arr[index];
  return item[key];
}

const users = [{ name: 'John', age: 30 }, { name: 'Mary', age: 25 },];
console.log(getArrayItem(users, 0, 'name'))

type Data = { num1: number }
type E = {
  [key in keyof Data]: string;
}
const numbers: E = {
  num1: '20'
}

interface Person {
  firstName: string;
  lastName: string;
}
function fullNames<T extends Person>(person: T): string {
  return `${person.firstName} ${person.lastName}`;
}