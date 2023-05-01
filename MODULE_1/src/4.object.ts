const user = {
  name: 'Md. Sumon',
  age: 24,
  isMarried: true,
  GF: 'loading',
}

const user2: {
  name: string,
  age: number,
  isMarried: boolean,
  GF?: string // --> এটা থাকতে ও পারে আবার না ও থাকতে পারে, এক্ষেত্রে ভেরিয়েবল name এর পর অপশনাল চেইনিং এর মতো '?' sign use করবো।
} = {
  name: 'Md. Rony',
  age: 25,
  isMarried: false,
  // GF: 'loading',
}

// use specific value
const specificValue: {
  name: 'Programming Hero',
  age: number,
  isMarried: boolean,
  GF?: string // --> এটা থাকতে ও পারে আবার না ও থাকতে পারে, এক্ষেত্রে ভেরিয়েবল name এর পর অপশনাল চেইনিং এর মতো '?' sign use করবো।
} = {
  // name: 'Md. Rony', --> এক্ষেত্রে আমরা string হিসেবে শুধুমাত্র Programming Hero এই use করতে পারবো অন্য কোন text বা string use করতে পারবো না। এটাকে বলা হয় Literal Type of TypeScript
  name: 'Programming Hero',
  age: 25,
  isMarried: false,
  // GF: 'loading',
}

// set readonly value
const readOnlyValue: {
  readonly name: string,
  age: number,
  isMarried: boolean,
  GF?: string // --> এটা থাকতে ও পারে আবার না ও থাকতে পারে, এক্ষেত্রে ভেরিয়েবল name এর পর অপশনাল চেইনিং এর মতো '?' sign use করবো।
} = {
  name: 'Md. Rony',
  age: 25,
  isMarried: false,
  // GF: 'loading',
}

user2.name = 'Md. Sumon'; // এটা চেঞ্জ করা যাচ্ছে কারণ user2 এর name property readonly না
// readOnlyValue.name = 'Md. Sumon'; // এটা চেঞ্জ করা যাচ্ছে না কারণ readOnlyValue এর name property readonly