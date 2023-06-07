// Mocking
// JSON placeholders
interface IToDo {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
}
const getToDo = async (): Promise<IToDo> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/3`)
  return await response.json()
}

const getToDoData = async (): Promise<void> => {
  const result = await getToDo();
  console.log(result, 'here the getToDo');
}

getToDoData()

const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = 'Data is fetched'
    if (data) {
      resolve(data)
    } else {
      reject('Failed to fetch data!')
    }
  })
}

const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true
    if (data) {
      resolve(data)
    } else {
      reject('Failed to fetch data!')
    }
  })
}

type PromiseDataType = {
  data: string
}
interface PromiseDataTypeInterface {
  data: string
}
const makePromiseObject = (): Promise<PromiseDataType> => {
  return new Promise<PromiseDataType>((resolve, reject) => {
    const data: PromiseDataType = { data: 'Data is fetched successfully' }
    if (data) {
      resolve(data)
    } else {
      reject('Failed to fetch data!')
    }
  })
}

// Promise<string> Promise<boolean> Promise<object>

const getPromiseData = async (): Promise<string> => {
  const data = await makePromise()
  console.log(data, 'here the data is fetched');
  return data; // If we don't use it then we can just use Promise<void> but if we use it then we have to use Promise<string>
}

const getPromiseDataBoolean = async (): Promise<boolean> => {
  const data = await makePromiseBoolean()
  console.log(data, 'here the data is fetched');
  return data; // If we don't use it then we can just use Promise<void> but if we use it then we have to use Promise<string>
}

const getPromiseDataObject = async (): Promise<PromiseDataType> => {
  const data = await makePromiseObject()
  console.log(data, 'here the data is fetched');
  return data; // If we don't use it then we can just use Promise<void> but if we use it then we have to use Promise<string>
}