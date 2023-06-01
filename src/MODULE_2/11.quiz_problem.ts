function generateAdder(a: number): (b: number) => number {
  return function (b: number) {
    return a + b;
  };
}
const addTwo = generateAdder(2);
console.log(addTwo(3));
console.log(addTwo(5));


/*
What is the difference between “any” and “unknown” in TypeScript?

You have selected "“Any” is a type that can be assigned any value, while “unknown” is a type that is assigned an unknown value." 

but correct answer is "“Any” is a type that can be assigned any value, while “unknown” is a type that can only be assigned a value after a runtime check.".
*/