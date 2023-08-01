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