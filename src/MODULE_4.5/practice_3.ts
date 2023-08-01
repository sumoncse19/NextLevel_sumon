type myArray<T> = Array<T>

interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
}

const Products: myArray<IProduct> = [
  {
    id: 1,
    name: 'Samsung',
    price: 1000,
    category: 'mobile'
  },
  {
    id: 2,
    name: 'Lenevo',
    price: 2000,
    category: 'mobile'
  },
  {
    id: 3,
    name: 'Xiaomi',
    price: 3000,
    category: 'mobile'
  },

  {
    id: 4,
    name: 'Dell',
    price: 10000,
    category: 'laptop'
  },

  {
    id: 5,
    name: 'HP',
    price: 10000,
    category: 'laptop'
  }
]

const filterProduct = <P, Q>(productArray: P, criteria: Q): P => {
  const filteredArray = productArray.filter((item: IProduct) => {
    if (item.category == criteria) {
      return item
    }
  })
  return filteredArray
}

const resultFilteredLaptop = filterProduct<Array<IProduct>, string>(Products, 'laptop')
const resultFilteredMobile = filterProduct<Array<IProduct>, string>(Products, 'mobile')

console.log(resultFilteredLaptop);
console.log(resultFilteredMobile);

export { }













/* 

const product1: IProduct = {
  id: 1,
  name: 'Samsung',
  price: 1000,
  category: 'mobile'
}

const product2: IProduct = {
  id: 2,
  name: 'Lenevo',
  price: 2000,
  category: 'mobile'
}

const product3: IProduct = {
  id: 3,
  name: 'Xiaomi',
  price: 3000,
  category: 'mobile'
}

const product4: IProduct = {
  id: 4,
  name: 'Dell',
  price: 10000,
  category: 'laptop'
}

const product5: IProduct = {
  id: 5,
  name: 'HP',
  price: 10000,
  category: 'laptop'
}
*/