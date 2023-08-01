// tuple in generic

// type MyGenType = [number, string]
// For Dynamic this
type MyGenType<X, Y> = [X, Y]

const A: MyGenType<number, string> = [34, 'Apple']
const B: MyGenType<string, number> = ['Hello', 94]

export { }