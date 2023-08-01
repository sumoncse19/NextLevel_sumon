// spread operator
const heroArr1: string[] = ['khan', 'jalil', 'siam'];
const heroArr2: string[] = ['alom', 'faruk', 'razzak'];

// array distructure
const [hero1, hero2, xyz] = heroArr1;
/**
 * hero1 = khan
 * hero2 = jalil
 * hero3 = siam
 */

console.log(hero1, hero2, xyz);


// This is call spread operator
heroArr1.push(...heroArr2); // 'alom', 'faruk', 'razzak'
console.log(heroArr1);


// rest parameter
const heroScoreDemo = (score: number, score1: number, score2: number): number => {
    return score + score1 + score2;
}
console.log(heroScoreDemo(1, 3, 4));

// For solve short and dynamic this we have to use rest parameter
const heroScore = (...score: number[]): number => {
    let sum: number = 0;
    score.map(n => {
        sum = sum + n;
    })
    return sum;
}
console.log(heroScore(1, 4, 5, 3))


// When we don't return anything then we should use void otherwise we should use return type of return value
const heroString = (...strings: string[]): void => {
    //strings = ['programming', 'hero', 'apollo', 'web']
    strings.map(str => console.log(str));
}

heroString('programming', 'hero', 'apollo', 'web');