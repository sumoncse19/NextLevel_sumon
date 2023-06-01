
let emni: any;
emni = 222;
emni = 'Next level web development';

// (emni as string).length;
<string>emni.length

function kgToGram(params: string | number): string | number | undefined {
  if (typeof params === 'string') {
    const value = parseFloat(params) * 1000
    return `The converted result is: ${value} gm`
  } else if (typeof params === 'number') {
    const value = params * 1000;
    return value;
  }
}

const resultToBeNumber = <number>kgToGram(1000) as number
const resultToBeString = <string>kgToGram('1000') as string
console.log(resultToBeNumber, resultToBeString);


type CustomErrorType = {
  message: string,
}
try {

} catch (err) {
  console.log((err as CustomErrorType).message);

}
