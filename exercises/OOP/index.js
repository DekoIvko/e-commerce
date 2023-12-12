class User {
  //synthetic sugar class
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.score = 0;
    this.baseSalary = 1500;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getEmail() {
    return this.email;
  }
  login() {
    console.log(`${this.firstName} is just log in`);
    return this;
  }
  logout() {
    console.log(`${this.firstName} is just log out`);
  }

  updateScore() {
    this.score++;
    console.log(`${this.firstName} score is now ${this.score}`);
    return this;
  }
}

class Admin extends User {
  //synthetic sugar class
  constructor(firstName, lastName, email, bornYear) {
    super(firstName, lastName, email);
    this.bornYear = bornYear;
    this.admin = true;
  }

  removeUser(user) {
    users = users.filter((u) => u.email !== user.email);
  }
}

// function User(firstName, lastName, email) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.email = email;

//   //   this.getFullName = function () {
//   //     return `${this.firstName} ${this.lastName}`;
//   //   };
//   this.getEmail = function () {
//     return this.email;
//   };
//   this.login = function () {
//     console.log(`${this.firstName} is just log in`);
//     return this;
//   };
//   this.logout = function () {
//     console.log(`${this.firstName} is just log out`);
//   };
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// function Admin(...arg) {
//   User.apply(this, arg);
//   this.role = "admin";
// }

console.log(User);
// console.log(Admin);
const magda = new User("Magadagalena", "Ivka", "magda.ivko@hotmail.com");
const bile = new Admin("Biljana", "ivka", "bile.ivko@hotmail.com", 1988);
// console.log(magda, bile);
console.log(bile.baseSalary);

// let users = [magda, bile];
// console.log(users);

// bile.removeUser(magda);
// console.log(users);

// magda.updateScore().updateScore().updateScore().login().logout();
// bile.login();
