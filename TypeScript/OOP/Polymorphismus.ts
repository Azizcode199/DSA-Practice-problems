class Tier {
    private name : string = "";

    constructor(name : string){
        this.name = name;
    }

    getName(): string{
        return this.name
    }

    gerausch() : void{
        console.log(`${this.name} macht ein Geräusch`)
    }

}

class Hund extends Tier {
    
    constructor(name : string){
        super(name);
    }

    gerausch(): void {
        console.log(`${this.getName()} sagt: Wuff`)
    }
}

class Katze extends Tier{
    constructor(name : string){
        super(name)
    }
    gerausch(): void {
        console.log(`${this.getName()} sagt: Miau`);
    }
}



const t1 = new Hund("Bello");
const t2 = new Katze("Miezi");

t1.gerausch(); // Bello sagt: Wuff
t2.gerausch(); // Miezi sagt: Miau