// generic --> generalize
type GenericArray<T> = Array<T>


const idNumbers: number[] = [44, 34, 25];
// const idNumbers1: Array<number> = [44, 34, 25];
// const idNumbers2: Array<string> = ['44', '34', '25'];
// const idNumbers3: Array<boolean> = [true, false, false];
// const userNameAndRollNumbers: Array<{ name: string, id: number }> = [{ name: 'sumon', id: 1 }, { name: 'rahim', id: 2 },]

// ** With GenericArray Type
const idNumbers1: GenericArray<number> = [44, 34, 25];
const idNumbers2: GenericArray<string> = ['44', '34', '25'];
const idNumbers3: GenericArray<boolean> = [true, false, false];
type NameRollType = {
  name: string, id: number
}
interface NameRollInterface {
  name: string,
  id: number
}
// const userNameAndRollNumbers: GenericArray<{ name: string, id: number }> = [{ name: 'sumon', id: 1 }, { name: 'rahim', id: 2 },]
const userNameAndRollNumbers: GenericArray<NameRollType> = [{ name: 'sumon', id: 1 }, { name: 'rahim', id: 2 },]

// Generic Tuple
type GenericTuple<X, Y> = [X, Y]
const relation: GenericTuple<string, string> = ['Persian', 'Sumon']
const relationWithSalary: GenericTuple<Object, string> = [{
  name: 'Sumon',
  salary: 1000000,
}, 'Sanjana',]

const relationWithObjectDeclare: GenericTuple<{ name: string, salary: number }, string> = [{
  name: 'Sumon',
  salary: 1000000,
}, 'Sanjana',]

const relationWithObjectDeclare2: GenericTuple<NameRollType, string> = [{
  name: 'Sumon',
  id: 10,
}, 'Sanjana',]
const relationWithObjectDeclare3: GenericTuple<NameRollInterface, string> = [{
  name: 'Sumon',
  id: 10,
}, 'Sanjana',]

