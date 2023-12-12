// Inheritance makes all properties and methods available to a child class.
// This allows us to reuse common logic and to model real-world relationships.

class User {
  constructor(name, age, baseSalary) {
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
  }
}

// inheritance inherit expose all properties and functions from User
class Admin extends User {
  constructor(name, age, baseSalary) {
    super(name, age, baseSalary);
  }

  deleteUser(user) {
    // but we want this function only in admin role of user
    users = users.filter((u) => user.name !== u.name);
  }
}

let michael = new Admin("Michael", 30, 2000);
let ema = new Admin("Ema", 25, 1500);
let users = [michael, ema];
ema.deleteUser(michael);
console.log(users);
