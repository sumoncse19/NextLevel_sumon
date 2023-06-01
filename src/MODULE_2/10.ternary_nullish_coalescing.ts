// ternary operator

const age: number = 22

if (age > 18) {
  console.log('Yes Adult!!');
} else {
  console.log('No Child.');
}

const isAdult = age > 18 ? 'Yes Adult From Ternary' : 'No From Ternary'
console.log(isAdult);


// nullish_coalescing_operator
// null && undefined

// const isAuthenticatedUser = null
// const isAuthenticatedUser = undefined
const isAuthenticatedUser = 'sumon'
const userName = isAuthenticatedUser ?? 'Guest'
console.log(userName);


type People = {
  name: string,
  age: number,
  address: {
    city: 'No City',
    road: 'No Road',
    home?: '',
  }
}

const people1: People = {
  name: 'Manush',
  age: 100,
  address: {
    city: 'No City',
    road: 'No Road',
  },
}

const home = people1?.address?.home ?? 'No Home'     // Default --> 'No Home'
console.log({ home }, 'here the home');
