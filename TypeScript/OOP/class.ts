// class, Inheritance, Access Modifiers, shorthand properties, seter, geter 
class Persons {
  private name: string;
  private age!: number;
  private hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.hobbies = hobbies;
    this.ageValue = age; // ✅ nutzt den Setter mit Prüfung
  }

  // Setter für Alter
  public set ageValue(age: number) {
    if (age > 125 || age === undefined) {
      console.log("Das Alter ist ungültig! Bitte gib ein Alter ≤ 125 an.");
    } else {
      this.age = age;
    }
  }

  // Getter für Alter
  public get ageValue(): string {
    if (this.age > 125 || this.age === undefined) {
      return "Ungültiges Alter! Es darf nicht größer als 125 sein.";
    }
    return `Das Alter ist: ${this.age}`;
  }

  public vorstellung(): string {
    return `Hallo, ich bin ${this.name}, bin ${
      this.age
    } Jahre alt und liebe ${this.hobbies.join(", ")}.`;
  }
}

class Students extends Persons {
    private grade : number;

    constructor(name : string, age : number, hobbies:string[], grade : number){
        super(name, age, hobbies);
       this.grade = grade
    }

    vorstellung(): string {
        return `${super.vorstellung()}Meine Note ist ${this.grade}.`;
    }

}

const person1: Persons = new Persons("Baktash", 25, ["walking", "Fitness"]);
const person2 = new Persons("Mike", 35, ["Boxing", "Footbal"]);
// const std = new Students("Thoma", 35, ["Coder", "Fitness"] ,2);
console.log(person1.vorstellung());

console.log(person1.ageValue)




