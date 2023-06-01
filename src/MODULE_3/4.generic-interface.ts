// Generic interface

interface CrushInterface<T, U = null | undefined> {
  name: string,
  husband: T,
  wife?: U;
}

interface HusbandInterface {
  name: string,
  salary: number,
}

interface PersonInterface {
  name: string,
  age?: number,
  salary?: number,
}

const crush1: CrushInterface<boolean, string> = { name: 'Sanjana', husband: true, wife: 'Sokhina' }

const crush2: CrushInterface<string> = { name: 'Sanajana', husband: 'Sumon' }

const crush3: CrushInterface<HusbandInterface> = { name: 'Sanjana', husband: { name: 'Sumon', salary: 100000 } }

const crush4: CrushInterface<PersonInterface, PersonInterface> = {
  name: 'Sanajana',
  husband: {
    name: 'Sumon',
    salary: 100000,
  },
  wife: {
    name: 'Sokhina',
    age: 30,
  }
}