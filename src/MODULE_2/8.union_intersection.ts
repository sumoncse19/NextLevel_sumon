type NobDeveloper = {
  name: string,
  level: number,
}

type JuniorDeveloper = {
  name: string,
  expertise: string,
  experience: number,
}

/*
<---------UNION--------->
*/

// এক্ষেত্রে যেকোন একটা type এর সব property নিতে হবে নাইলে error আসবে, সাথে অন্য type টার property গুলা ও ইচ্ছা মতো নিতে পারবো।
const newDeveloper: NobDeveloper | JuniorDeveloper = {
  name: 'Md. Sumon',
  level: 1,
}
// এক্ষেত্রে শুধু JuniorDeveloper দেওয়ায় JuniorDeveloper এর সব property দিতে হবে। নাহলে error আসবে।
// const newDeveloper2: JuniorDeveloper = {
//   name: 'Md. Sumon'
// }

const newDeveloper2: JuniorDeveloper = {
  name: 'Md. Sumon',
  expertise: 'JS',
  experience: 6,
}

/*
<---------INTERSECTION--------->
*/

type JuniorDeveloper2 = NobDeveloper & {
  expertise: string,
  experience: number,
}

enum Level {
  Junior = 'Junior',
  Mid = 'Mid',
  Senior = 'Senior'
}
type NextLevelDeveloper = JuniorDeveloper2 & {
  leaderShipExperience: number,
  position: 'Junior' | 'Mid' | 'Senior',
  // position: Level
}

const newDeveloper3: NobDeveloper | JuniorDeveloper2 = {
  name: 'Md. Sumon',
  level: 1,
  experience: 6,
}

// এক্ষেত্রে এর মধ্যে NextLevelDeveloper, JuniorDeveloper2 && NobDeveloper এর সব property থাকতে হবে।
const developer: NextLevelDeveloper = {
  name: 'Md. Sumon',
  level: 6,
  expertise: 'TS',
  experience: 6,
  leaderShipExperience: 2,
  position: 'Junior'
  // position: Level.Mid
}