class Music {
    constructor(
        public genre: string, 
        public artist: string
    ) {}

    beschreibung(): string {
        return `Musikrichtung: ${this.genre}, Künstler: ${this.artist}`;
    }
}

class Instrument extends Music {
    constructor(genre: string, artist: string, public instrumentName: string) {
        super(genre, artist);
    }

    beschreibung(): string {
        return `${super.beschreibung()}, Instrument: ${this.instrumentName}`;
    }
}

const gitarre = new Instrument("Rock", "Queen", "Gitarre");
console.log(gitarre.beschreibung());
