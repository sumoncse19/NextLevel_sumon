const heroObj: {
    heroName: string;
    readonly age: number;
    profession: string;
    isMarried?: boolean;
} = {
    heroName: "Khan",
    age: 32,
    profession: "Actor",
    isMarried: false
}
// heroObj.age = 40
const { heroName, profession } = heroObj;
console.log(heroObj);