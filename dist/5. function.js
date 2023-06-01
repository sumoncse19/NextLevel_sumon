"use strict";
// normal function
// এভাবে টাইপ ডেকলার করা ছাড়া ফাংশন এ প্যারামিটার নিলে implicitly error আসবে এক্ষেত্রে tsconfig.json file এ গিয়ে "noImplicitAny": true, কে "noImplicitAny": false, করে দিলে আর error আসবে না। এক্ষেত্রে problem হবে যে তখন function এ যেকোন parameter pass করা যাবে তখন '2' এর সাথে '2' যোগ দিয়ে দিলে '22' পাবো, যেটা আসলে আমরা চাই না, তাই এই চেঞ্জ টা কখনো করবো না। true রাখবো।
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
const addArrow = (num1, num2) => num1 + num2;
addArrow(2, 2);
// const arr = [1, 4, 5, '6']
// const newArray = arr.forEach(elem => elem * elem) // elem এর type declare না করলে arr তে যেকোন কিছু রাখতে পারবো।
const arr = [1, 4, 5];
const newArray = arr.forEach((elem) => elem * elem); // elem এর type declare করলে arr তে যেকোন কিছু রাখতে পারবো না।
const person = {
    name: 'Sumon',
    balance: 5,
    addBalance(money) {
        // return this.balance + money; // --> এক্ষেত্রে return type number.
        console.log(`My New Balance is ${this.balance + money}`); // --> এক্ষেত্রে return type void.
        // return `My New Balance is ${this.balance + money}`; // --> এক্ষেত্রে return type string.
    }
};
