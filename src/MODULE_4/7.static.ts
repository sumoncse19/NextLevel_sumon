class Counter {
  // constructor(public counter: number) {

  // }
  static counter: number = 0;

  static increment(): number {
    // return this.counter += 1;
    return Counter.counter += 1;
  }

  static decrement(): number {
    // return this.counter -= 1;
    return Counter.counter -= 1;
  }
}

const instance1 = new Counter()   // 0-1
const instance2 = new Counter()   // 1-2

// console.log(instance1.increment());
// console.log(instance2.increment());

console.log(Counter.increment());     // 0-1
console.log(Counter.increment());     // 1-2


