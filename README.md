// run ts file after convert to js file -->

1. install: yarn add -D nodemon
2. "start": "nodemon index.js"

// for run ts file without convert to js file -->

1. install: yarn add ts-node-dev
2. "start": "ts-node-dev --respawn --transpile-only index.ts"

NOTE:

1. কোন একটা ভেরিয়েবল এর টাইপ ডেকলার করে না দিয়ে ভ্যালু আসাইন করলে ভ্যালু অনুযায়ী ডিফাইন করে নেয় এটার টাইপ টা কি --> একে বলা হয় TypeScript Inference or Implicit of TypeScript --> মানে নিজের বুদ্ধিমত্তা কে কাজে লাগিয়ে এটার টাইপ টা ধরে নেয়। সে জন্য ভ্যালু গুলা ডেকলার করার সময় Explicit ভাবে টাইপ ডিফাইন করে দিতে হবে না।
   let course: string = 'Next level developer'; --> Explicit
   let course = 'Next level developer'; --> Implicit

2.

SHORT QUESTION:

1. TypeScript is a syntactic superset of JavaScript which adds static typing.
