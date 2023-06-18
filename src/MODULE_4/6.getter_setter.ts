class BankAccount1 {
  constructor(public id: number, public name: string, private _balance: number, protected age: number) {

  }

  // getter
  get balance(): number {
    return this._balance
  }

  getBalance(): number {
    return this._balance;
  }
  addDeposit(amount: number) {
    this._balance += amount;
  }

  // setter
  set deposit(amount: number) {
    this._balance = this._balance + amount;
  }
}

class StudentAccount1 extends BankAccount1 {
  test() {
    console.log(`Everything can access without private: ${this.age}`);
  }
}

const myAccount1 = new BankAccount1(444, 'Md. Sumon', 20, 24)
const myStudentAccount1 = new StudentAccount1(243, 'Md. Sumon', 25, 35)
// myAccount1._balance = 0
console.log(myAccount1.getBalance(), 'access through function')
myAccount1.addDeposit(20)
myAccount1.getBalance()

console.log(myAccount1.balance, 'direct access')

myAccount1.deposit = 30
console.log(myAccount1.balance, 'account balance after set deposit')
