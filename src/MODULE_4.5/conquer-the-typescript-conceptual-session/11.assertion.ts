// type assertion
const thinkSomething: unknown = '34.43535';
// const thinkSomething: unknown = 34.43535;
//const result = (thinkSomething as number)
console.log((thinkSomething as string).length)
// console.log((thinkSomething as number).toFixed(2))

const myLuckyNum = (num: string | number): number | string => {
    if (typeof num === 'string') {
        return "This is string";
    } else return num;
}

console.log(myLuckyNum(7));
