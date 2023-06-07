class Apple {
  constructor() {
    this.weight = 10;
  }
  decrease() {
    if (!this.isEmpty()) {
      this.weight--;
    }
  }
  isEmpty() {
    return this.getWeight() == 0;
  }
  getWeight() {
    return this.weight;
  }
}
class Human {
  constructor(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
  }
  isMale() {
    return this.gender === "Male";
  }
  setGender(gender) {
    this.gender = gender;
  }
  checkApple(Apple) {
    return !Apple.isEmpty();
  }
  eat(Apple) {
    if (this.checkApple(Apple)) {
      this.weight++;
      Apple.decrease();
    } else {
      alert("an het roi");
    }
  }
}
let apple = new Apple(1);
console.log(apple);
let adam = new Human("Adam", "Male", 70);
let eva = new Human("Eva", "FeMale", 45);
adam.eat(apple);
eva.eat(apple);
console.log(adam, eva);
console.log(apple);
