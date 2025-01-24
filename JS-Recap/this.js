class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sleep() {
    console.log(`Sleeping now ${this.name}`);
  }

  activity() {
    this.sleep();
  }
}

const kodom = new Person("Kodom Ali", 21);
const badam = new Person("Badam Ali", 23);

console.log(kodom);
kodom.sleep();

console.log(badam);
badam.sleep();
