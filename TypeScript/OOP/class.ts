class Persons {
    private name:string;
    private age: number;
    private hobbies: string[];

    constructor(name : string, age : number, hobbies:string[]){
        this.name = name
        this.age = age
        this.hobbies = hobbies
    }

    
    public vorstellung(): string {
        return `Hallo, ich bin ${this.name}, bin ${this.age} Jahre alt und liebe ${this.hobbies.join(', ')}.`;
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

const person1: Persons = new Persons("Baktash", 35, ["walking", "Fitness"]);
const person2 = new Persons("Mike", 35, ["Boxing", "Footbal"]);
const std = new Students("Thoma", 35, ["Coder", "Fitness"] ,2);

console.log(person1.vorstellung()); 
console.log("|----Inheritance----|")
console.log(std.vorstellung())