class BankAccount {
  constructor(public id: number, public name: string, private _balance: number, protected age: number) {

  }

  getBalance() {
    console.log(`My current balance is: ${this._balance}`);
  }
  addDeposit(amount: number) {
    this._balance += amount;
  }
}

class StudentAccount extends BankAccount {
  test() {
    console.log(`Everything can access without private: ${this.age}`);
  }
}

const myAccount = new BankAccount(444, 'Md. Sumon', 20, 24)
const myStudentAccount = new StudentAccount(243, 'Md. Sumon', 25, 35)
// myAccount._balance = 0
myAccount.addDeposit(20)
console.log(myAccount)
console.log(myStudentAccount)