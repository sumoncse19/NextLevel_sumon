// default parameter

// function defaultParameter(num1: number = 10, num2: number): number {
//   return num1 + num2
// }
// defaultParameter(30) // --> এভাবে প্রথম parameter এর জন্য default value set করা যায় না, তাই default value only last parameter এ use করা যায়।

function defaultParameter(num1: number, num2: number = 10): number {
  return num1 + num2
}
defaultParameter(20)


// spread operator
const friends = ['anik', 'rabbul', 'joy']
const newFriends = ['rachel', 'anika', 'joya']
const myFriend = {
  fullName: 'Abul Bashar',
  age: 25,
}

// friends.push(newFriends); // --> এটা use করলে JS এ পুরো newFriends array টা friends array এর মধ্যে array আকারে বসে যেতো, কিন্তু আমরা এখনে চাচ্ছি শুধু নাম গুলা বসাতে এক্ষেত্রে split operator(...) use করতে হবে।

friends.push(...newFriends);

console.log(friends, 'my friends');


// rest parameter
const greetFriends = (
  friend1: string,
  friend2: string,
  friend3: string): void => console.log(`Hi ${friend1}, Hi ${friend2}, Hi ${friend3}`);

greetFriends('Abul', 'Babul', 'Cabul')  // এক্ষেত্রে আমরা এক্সট্রা কোন friend add করতে পারবো না, শুধু ৩জন কেই add করতে পারবো। তাই আমরা যাতে আমাদের ইচ্ছা মতো এড করতে পারি সে জন্য rest operator use করবো।

// const greetFriendsWithRest = (...friends: string[]): void => console.log(friends);
const greetFriendsWithRest = (...friends: string[]): void => friends.forEach(friend => console.log(`Hi ${friend}`));

greetFriendsWithRest('Abul', 'Babul', 'Cabul', 'Dabul', 'Ebul', 'Fibul', 'Hibul')


// array and object destructure
const [bestFriend] = friends
const { fullName } = myFriend // এখানে fullName টা myFriend থেকে automatically এর টাইপ টা বুঝে নেয়, কিন্তু এরপরও যদি আমরা টাইপ ডেকলার করে দি তাইলে এটা দ্বারা ফুল নেইম কে access করা বুঝায়, ভ্যালু same এই থাকবে
const { fullName: stringy } = myFriend // এখানে বোঝাচ্ছে যে আগে fullName এ যা ছিলো এখনো তাই আছে number হলে number বা string হলে string, কিন্তু এখানে এটাকে access করতে হলে আমরা এটাকে string এর মাধ্যমে access করতে পারবো, এক কথায় fullName এর আরেকটা নাম।

console.log(stringy);
console.log({ stringy });
