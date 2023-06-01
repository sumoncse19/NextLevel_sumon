
// Arrow Function
const createArray = <T>(param: T): T[] => {
  return [param];
}

const createArray1 = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
}

function createArray2<X, Y>(param1: X, param2: Y): [X, Y] {
  return [param1, param2];
}

const result = createArray<string>('Bangladesh')
const result1 = createArray<boolean>(true)

interface INameObject {
  name: string;
}
const result2 = createArray<INameObject>({ name: 'Bangladesh' })

const result3 = createArray2<string, string>('Bangladesh', 'India')

const result4 = createArray2<boolean, Array<string>>(true, ['hello'])

// Spread Operator
const crush = 'Sanjana'
const myInfo = {
  name: 'Sumon',
  age: 20,
  salary: 10000000,
}
// const newData = { ...myInfo, crush }

const createSpread = <T>(myInfo: T) => {
  const crush = 'Sanjana'
  return { ...myInfo, crush }
}

const result5 = createSpread(myInfo)
result5.crush