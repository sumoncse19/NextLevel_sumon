// nullable type
const searchName = (value: string | null) => {
  if (value === null) {
    console.log('There is nothing to search');
  } else {
    console.log('Searching...');
  }
}

searchName('Sumon')
// searchName(null) // tsconfig থেকে strictNullChecks এর value false করে এই error solve করা যায় কিন্তু এটা বেস্ট practise না। এক্ষেত্রে আমরা function এ string এর পাশাপাশি null value ও যাতে নেয় সেই ব্যাবস্থা করতে পারি।

searchName(null)


// unknown type --> যখন আমি টাইপ আগে থেকে জানবো না।
// kmh^-1 --> ms^-1 convert করতে হবে।
const getMyCarSpeed = (speed: unknown) => {
  if (typeof speed === 'number') {
    const covertSpeed = (speed * 1000) / 3600
    console.log(`My speed is ${covertSpeed}`);
  } else if (typeof speed === 'string') {
    // const value = speed.split(' ') // ['10', 'kmh^-1']
    const [value, unit] = speed.split(' ') // ['10', 'kmh^-1']
    const covertSpeed = (parseFloat(value) * 1000) / 3600
    console.log(`My speed is ${covertSpeed}`);
  } else {
    console.log("This is wrong type!!");
  }
}

getMyCarSpeed(10)
getMyCarSpeed('20 kmh^-1')
getMyCarSpeed(true)


// never type --> কখনো সম্ভব না কখনো হবে না। কারণ ও কখনো কিছু return করে না। যখন কোন function কোন কিছু return করবে না, তখন আমরা তাকে never type হিসেবে declare করতে পারি।
function throwError(message: string): never {
  throw new Error(message)
}
// throw new Error('Error is Mortal')

throwError('You got an Error, please check this!!')