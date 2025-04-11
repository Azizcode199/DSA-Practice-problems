// Superclass
class Animal {
  makeSound(): string {
    return "...";
  }
}

// Subclass: Dog
class Dog extends Animal {
  makeSound(): string {
    return "Woof";
  }
}

// Subclass: Cat
class Cat extends Animal {
  makeSound(): string {
    return "Meow";
  }
}

// Function to test polymorphism
function animalMakesSound(animal: Animal) {
  console.log(animal.makeSound());
}

// Test
const myDog = new Dog();
const myCat = new Cat();

animalMakesSound(myDog); // → Woof
animalMakesSound(myCat); // → Meow
