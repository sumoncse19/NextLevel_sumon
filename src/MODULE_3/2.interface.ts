// Type alias --> used for primitive type data and object data type
type User = {
  name: string,
  age: number,
}
const userWithTypeAlias: User = {
  name: 'Type Alias',
  age: 100
}
// extend type alias.
type extendedUser = User & {
  role: string
}
const userExtendTypeAlias: extendedUser = {
  name: 'Omanush',
  age: 2000,
  role: 'Unknown',
}

// Type interface --> generally used for object type data, function and Array
interface IUser {
  name: string,
  age: number
}
const userWithInterface: IUser = {
  name: 'Interface',
  age: 200
}
// extend interface.
interface IExtendUser extends IUser {
  role: string,
}
const userExtendTypeInterface: IExtendUser = {
  name: 'Omanush',
  age: 2000,
  role: 'Unknown',
}

// *** NOTE: Object er khetre type alias ba interface 2tai use korte pari, kintu primitive type er khetre type alias use korte hoy. Object, class niye kaj korle interface use korbo baki sob khetre type alias use korbo 

// Function without type alias or interface
const addNumbers = (num1: number, num2: number): number => num1 + num2
// Function with type alias
type addNumbersType = (num1: number, num2: number) => number
const addNumbersWithType: addNumbersType = (num1, num2) => num1 + num2
// Function with interface
interface IAddNumbersType {
  (num1: number, num2: number): number
}
const addNumbersWithInterface: IAddNumbersType = (num1, num2) => num1 + num2

// Function er khetre amra type alias use korar try korbo cz eta besi readable for function

// Array without type alias or interface
const rollNumbers: number[] = [1, 4, 5]
// Array with type alias
type rollNumbersType = number[]
const rollNumbersWithType: rollNumbersType = [1, 2, 4]
// Array with interface
interface IRollNumberTypeNumber {
  [index: number]: number
}
const rollNumbersWithInterfaceNumber: IRollNumberTypeNumber = [1, 4, 7]
interface IRollNumberTypeString {
  [index: number]: string
}
const rollNumbersWithInterfaceString: IRollNumberTypeString = ['1', '4', '7']