// Encapsulation
// {hmm so rezerva} Encapsulation means keeping properties and methods private inside a class,
// so that they are not accessible from outside that class
// mechanism of restricting direct access to some of the objects components,
// and bundling data with methods that operate to that data
// hide implementation and expose behavior
// криење на имплементацијата и изложување на однесувањето
// механизам за ограничување на директен пристап до некои од компонентите на објектите,
// и здружување на податоци со методите што работат на тие податоци

// so pomosh na metodite setName i getName rabotat so datata na objektot

class User {
  #age;
  constructor(name, email, age) {
    this._name = name; // _ private property should not be changed
    this.email = email;
    this.#age = age; // # private property cannot be changed
  }
  get getUserName() {
    return this.userName;
  }

  set setUserName(userName) {
    this.userName = userName;
  }

  set setName(name) {
    this._name = name;
  }

  set setEmail(email) {
    this.email = email;
  }

  set setAge(age) {
    this.#age = age;
  }

  #getEmail() {
    // private method cannot be call from object
    return this.email;
  }

  get getPrivateEmail() {
    return this.#getEmail(); // private method can be call only from class
  }

  get getMarks() {
    return this.marks;
  }

  set setMarks(marks) {
    this.marks = marks;
  }
}

let michael = new User();
console.log(michael);
michael.setUserName = "Micha";
michael.setName = "Michael";
michael.setEmail = "michael@hotmail.com";
michael.setAge = 33;
michael.setMarks = "Programmer";
console.log(michael);
console.log(michael.getPrivateEmail);
// console.log(michael.#age);
// michael.#age = 13;
// michael._name = "deko";
