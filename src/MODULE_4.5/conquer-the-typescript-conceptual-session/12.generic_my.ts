type myArray<T> = Array<T>
// T = Amra je type ta pathacchi seta.. evabei eta dynamic ba generic hoye jacche.

const myNumbers: myArray<number> = [1, 2, 3, 4, 5];
const myStrings: myArray<string> = ['a', 'xyz', 'abc', 'pqr'];
const myBoolean: myArray<boolean> = [true, false, false, true];

interface IMyObject {
  id: number;
  name: string;
  price: number;
  category: string;
}

type myObject = {
  id: number;
  name: string;
  price: number;
  category: string;
}

// myArray<IMyObject>
// myArray<myObject>
const ourInfo: myArray<IMyObject> = [
  {
    id: 1,
    name: 'Samsung',
    price: 1000,
    category: 'mobile'
  },

  {
    id: 2,
    name: 'Lenevo',
    price: 2000,
    category: 'mobile'
  }
]

// tuple in generic

// type MyGenType = [number, string]
// For Dynamic this
type MyGenType<X, Y> = [X, Y]

const A: MyGenType<number, string> = [34, 'Apple']
const B: MyGenType<string, number> = ['Hello', 94]


// Function in generic
/* 
const printInfo = (param1: string, param2: number) => {
  console.log(`param1: ${param1}, param2: ${param2}`);
}
*/
// For Dynamic this
const printInfo = <P, Q>(param1: P, param2: Q): P => {
  console.log(`param1: ${param1}, param2: ${param2}`);
  return param1;
}

printInfo<string, number>('sumon', 24)
printInfo<number, string>(22, 'rahim')
printInfo<boolean, string>(false, 'gf')
console.log(printInfo<string, number>('sumon', 24));


// generic in interface
interface IPerson<T, U> {
  name: string;
  age: T; // 23, '23years'
  mark: U;
}

const person: IPerson<string, number> = {
  name: 'Sumon',
  age: '23 years',
  mark: 34,
}

// keyof
type MovieType = {
  name: string;
  duration: number;
  category: string;
}

// type test = 'name' | 'duration' | 'category'
// const myTest:test = 'name'
const data: MovieType = {
  name: 'Agni 2',
  duration: 400,
  category: 'Action',
}
type myMoviesType = keyof MovieType  // 'name' | 'duration' | 'category'
const myTest1: myMoviesType = 'name'
console.log(data[myTest1]);
console.log(data['duration']);




export { }