"use strict";
let course = 'Next level developer';
// course = 111; --> Can't assign this like JS
course = 'Next level development';
const rollNumber = 123;
const isAdmin = true;
let unDeclared; // কোন কিছু এসাইন না করলে টাইপ হিসেবে ধরে নিবে any --> এটা ইউজ করা উচিত না। পরবর্তীতে আমি এখানে যে টাইপ এর ভ্যালু এসাইন করবো সেই টাইপ টা যদি আমি জানি তাইলে সেই টাইপ টা ডেকলার করে দেওয়া উচিত, নিচের উদাহরণ এর মতো করে।
let declare;
// যদি আমাকে রেন্ডম টাইপ ভ্যালু এসাইন করতে হয় তখন আমি টাইপ ডেকলার করবো না অর্থাৎ any টাইপ ইউজ করবো।
unDeclared = 123;
unDeclared = 'Hello';
unDeclared = true;
// যদি কোন একটা ভেরিয়েবল এর ভ্যালু undefined লিখি, তাহলে ভেরিয়েবল টি const হলে এর টাইপ হবে undefined, আর যদি let হয় তাইলে এর টাইপ হবে any
let letUndefined = undefined; // --> এক্ষেত্রে টাইপ any মতো কাজ করবে, পরবর্তীতে যেকোন টাইপ এর ভেরিয়েবল সেট করতে পারবো।
const constUndefined = undefined; // --> এক্ষেত্রে টাইপ undefined মতো কাজ করবে, পরবর্তীতে যেকোন টাইপ এর ভেরিয়েবল সেট করতে পারবো না।
console.log(course);
// export { };
