// class StudentTeacher {
//   name: string;
//   age: number;
//   address: string;
//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }

//   makeSleep(hours: number): string {
//     return `This ${this.name} will sleep ${hours} hours`
//   }
// }
// with shorter
class StudentTeacher {
  constructor(public name: string, public age: number, public address: string) {

  }

  makeSleep(hours: number): string {
    return `This ${this.name} will sleep ${hours} hours`
  }
}



class Student extends StudentTeacher {
  constructor(public name: string, public age: number, public address: string) {
    super(name, age, address);
  }
}
const student1 = new Student('Mr. X', 25, 'Uganda')


class Teacher extends StudentTeacher {
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address)
    this.designation = designation
  }

  takeClass(noOfClass: number): string {
    return `This ${this.name} teacher will took ${noOfClass} classes.`
  }
}
const teacher1 = new Teacher('Mr. Y', 54, 'Uganda', 'Teacher')

class TeacherWithShort extends StudentTeacher {
  constructor(name: string, age: number, address: string, public designation: string) {
    super(name, age, address)
  }

  takeClass(noOfClass: number): string {
    return `This ${this.name} teacher will took ${noOfClass} classes.`
  }
}
const teacher2 = new TeacherWithShort('Mr. Y', 54, 'Uganda', 'Teacher')

console.log(student1, teacher1, teacher2);
