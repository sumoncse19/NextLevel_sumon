
type MyInfoType = {
  name: string;
  age: number;
  salary: number;
  hobby: string;
  address: string;
}

const myInfoNew: MyInfoType = { name: 'Sumon', age: 20, salary: 100, hobby: 'coading', address: 'chattogram' };

type MandatoryInfoType = { name: string, age: number, salary: number }
const addMeInMyCrushMid = <T extends MandatoryInfoType>(myInfo: T) => {
  const myCrush = 'Ariana Grande';
  const newData = { ...myInfo, myCrush };
  return newData;
}

const myResult = addMeInMyCrushMid<MyInfoType>(myInfoNew)

// const myResult1 = addMeInMyCrushMid({ MonerKhushi: "Habi jabi" })

console.log(myResult, 'here is my result');
