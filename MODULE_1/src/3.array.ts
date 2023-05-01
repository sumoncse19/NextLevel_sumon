const names: string[] = ['abul', 'kabul', 'babul'];
const rollNumbers: number[] = [10, 1, 4, 34];
rollNumbers[8] = 87;


// RandomTypeArray
const randomTypeArray = ['abul', 'babul', 'kabul', 77, true, undefined]

rollNumbers.map(roll => console.log(roll, 'single roll'))
names.forEach(name => console.log(name, 'here name'))

randomTypeArray.push('dabul')
randomTypeArray.push(56)
randomTypeArray.push(false)
// randomTypeArray.push(null) // We'll got error


// একে বলা হয় Touple
const user: [number, string] = [23, 'Sumon']

// RandomTypeArray এবং Touple এর মধ্যে পার্থক্য হলো RandomTypeArray তে আমরা যেকোন index এ যেকোন ভ্যালু সেট করতে পারবো এবং রিপ্লেস করতে পারবো, কিন্তু আমরা যদি Touple এর মতো করে index wise টাইপ ডেকলার করে দি তাইলে ঐ ইনডেক্স এ ঐ টাইপ এর ভ্যালু ছাড়া অন্য কোন টাইপ এর ভ্যালু এড করতে পারবো না।

randomTypeArray[0] = 52 // --> কারণ এটা Touple না
// user[0] = 'Md' // --> এটা set করতে পারছি না, কারণ এটা Touple আর 0 index কে আমরা number হিসেবে ডেকলার করছিলাম।

export { }