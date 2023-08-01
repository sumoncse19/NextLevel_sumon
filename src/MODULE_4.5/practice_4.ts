

type MyGenTypeObject<X, Y, Z> = [X, Y, Z];

interface IProduct {
  name: string;
  price: number;
  quantity: number;
}

const Product1: MyGenTypeObject<string, number, number> = ['samsung', 1000, 2]
const Product2: MyGenTypeObject<string, number, number> = ['lenevo', 1000, 2]

type myArray<T> = Array<T>
const Products: myArray<IProduct> = [
  Product1, Product2
]

export {}