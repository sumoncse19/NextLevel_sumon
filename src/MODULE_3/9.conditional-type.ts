// a type is dependent on another type
type a1 = string;
type a2 = a1 extends string ? string : null;
type a3 = undefined;
type a4 = number;

// nested conditional type
type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never

type Sumon = {
  wife1: string;
  wife2: string;
}

type A = keyof Sumon; // 'wife1' | 'wife2'

// to check is have wife1 property in type of Sumon
type CheckProperty<T, K> = K extends keyof Sumon ? true : false

type CheckWife = CheckProperty<Sumon, 'wife2'>  // true | false


// More examples
type Bandhubi = 'Monika' | 'Sanjida' | 'Riya'
type RemoveBandhubi<T, K> = T extends K ? never : T
type CurrentBandhubi = RemoveBandhubi<Bandhubi, 'Monika'>

