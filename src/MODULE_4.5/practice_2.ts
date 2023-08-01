const numberArray1: number[] = [1, 2, 3, 4, 5];
const numberArray2: number[] = [2, 4, 6, 8, 5];

const getInterSection = (arr1: Array<number>, arr2: Array<number>): Array<number> => {
  const finalArray: number[] = []
  arr1.forEach(i => {
    if (arr2.includes(i)) {
      finalArray.push(i);
    }
  })
  return finalArray;
}

const resultOfIntersection = getInterSection(numberArray1, numberArray2)
console.log(resultOfIntersection);