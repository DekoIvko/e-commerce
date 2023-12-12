// Abstraction means hiding certain details that don't matter to the user
// and only showing functionality to the user.
// Апстракција значи криење на одредени детали кои не се важни за корисникот
// и прикажува само функционалност на корисникот.
// ako kreirame abstract class mozeme da extends klasa od nejze no nemozeme da isntacirame objekt od nejze
// abstract class Admin {

// }
class User {
  constructor(name, age, baseSalary) {
    // mn bitno vo abstract tipot ova dole
    if (new.target === User) throw new Error("Abstract class cannot be instantiated");
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
  }

  getUserDetails() {
    // const finalSalary = calculateFinalSalary();
    return `${this.role} with name: ${this.name} with age of ${this.age}`;
  }
}

class Admin extends User {
  constructor(name, age, baseSalary) {
    super(name, age, baseSalary);
    this.role = "admin";
    Admin.monthlyBonus = 1000;
  }

  get calculateFinalSalary() {
    // with get this function is not expose like function from outside but like value
    let finalSalary = this.baseSalary + Admin.monthlyBonus;
    return `final salary is ${finalSalary}`;
  }
}

// function User(name, age, baseSalary) {
//   this.name = name;
//   this.age = age;
//   this.baseSalary = baseSalary;
//   // declare with let to not expose to outside
//   let monthlyBonus = 1000;

//   // declare with let to not expose to outside
//   let calculateFinalSalary = function () {
//     let finalSalary = baseSalary + monthlyBonus;
//     return `final salary of ${finalSalary}`;
//   };

//   this.getUserDetails = function () {
//     const finalSalary = calculateFinalSalary();
//     return `Name: ${this.name} with age of ${this.age} with ${finalSalary}`;
//   };
// }

// let michael = new User("Michael", 30, 2000);
let michael = new Admin("Michael", 30, 2000);
console.log(michael.getUserDetails()); // expose to outside
console.log(michael.monthlyBonus); // not to expose to outside
//console.log(michael.calculateFinalSalary()); // not to expose to outside

console.log(michael.calculateFinalSalary);
