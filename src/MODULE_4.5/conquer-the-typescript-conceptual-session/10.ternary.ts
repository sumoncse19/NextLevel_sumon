const isHeroAvailable: boolean = true;
if (isHeroAvailable) {
  console.log("book now");
}
else {
  console.log("you can not book");
}

// condition ? true_value : false_value
const checkAvailability = isHeroAvailable ? "book now" : "you can not book";
console.log(checkAvailability, 'by ternary');

// nullish operator ( ?? )
// check null and undefined
/**
 * null = No input
 * undefined = No input
 * hello = hello
 * 4 = 4
 * true = true
 * false = false
 * "" = ""
 */

const inputSomething: unknown = true;
const checkInput = inputSomething ?? "No input";
console.log(checkInput); // --> null and undefined er khetre nullish operator(??) erpor ja likha thake ta ase "value" R baki sob khetre null or undefined chara ja dibo ta ashbe.