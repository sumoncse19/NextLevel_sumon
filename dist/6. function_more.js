"use strict";
// default parameter
// function defaultParameter(num1: number = 10, num2: number): number {
//   return num1 + num2
// }
// defaultParameter(30) // --> এভাবে প্রথম parameter এর জন্য default value set করা যায় না, তাই default value only last parameter এ use করা যায়।
function defaultParameter(num1, num2 = 10) {
    return num1 + num2;
}
defaultParameter(20);
// spread operator
const friends = ['anik', 'rabbul', 'joy'];
const newFriends = ['rachel', 'anika', 'joya'];
// friends.push(newFriends); // --> এটা use করলে JS এ পুরো newFriends array টা friends array এর মধ্যে array আকারে বসে যেতো, কিন্তু আমরা এখনে চাচ্ছি শুধু নাম গুলা বসাতে এক্ষেত্রে split operator(...) use করতে হবে।
friends.push(...newFriends);
console.log(friends, 'my friends');
// rest parameter
const greetFriends = (friend1, friend2, friend3) => console.log(`Hi ${friend1}, ${friend2}, ${friend3}`);
greetFriends('Abul', 'Babul', 'Cabul');
