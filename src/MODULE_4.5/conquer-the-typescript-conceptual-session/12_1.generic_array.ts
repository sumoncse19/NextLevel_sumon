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

export { }