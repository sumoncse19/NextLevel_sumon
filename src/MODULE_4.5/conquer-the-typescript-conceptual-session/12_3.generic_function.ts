// Function in generic
/* 
const printInfo = (param1: string, param2: number) => {
  console.log(`param1: ${param1}, param2: ${param2}`);
}
*/
// For Dynamic this
const printInfo = <P, Q>(param1: P, param2: Q): P => {
  console.log(`param1: ${param1}, param2: ${param2}`);
  return param1;
}

printInfo<string, number>('sumon', 24)
printInfo<number, string>(22, 'rahim')
printInfo<boolean, string>(false, 'gf')
console.log(printInfo<string, number>('sumon', 24));

export { }