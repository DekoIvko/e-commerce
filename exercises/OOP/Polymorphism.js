//Polymorphism means having different and many forms.
// We can overwrite a method inherited from a parent class.

class User {
  constructor(name, age, baseSalary) {
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
  }

  getUserDetails() {
    // const finalSalary = calculateFinalSalary();
    return `Name: ${this.name} with age of ${this.age}`;
  }
}

class Admin extends User {
  constructor(name, age, baseSalary) {
    super(name, age, baseSalary);
    this.role = "admin";
  }

  getUserDetails() {
    console.log(super.getUserDetails()); // calling parent function from User
    // this is a example of overwrite function from User and polymorphism
    return `Name: ${this.name} and her age is ${this.age}`;
  }
}

let michael = new User("Michael", 30, 2000);
console.log(michael.getUserDetails());
// michael.getUserDetails = function () {
//   // this is a example of overwrite function and polymorphism
//   return `Name: ${this.name} and his age is ${this.age}`;
// };
// console.log(michael.getUserDetails()); // new function new result

let ema = new Admin("Ema", 25, 1500);
console.log(ema.getUserDetails()); // overwrite function new result
