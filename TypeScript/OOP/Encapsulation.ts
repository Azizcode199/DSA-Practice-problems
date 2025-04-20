class Auto2 {
    private farbe: string = ""; // oder: = "";

    public Auto2(farbe: string){
        this.farbe = this.farbe;
    }
    
    public getFarbe(): string {
        return this.farbe;
    }

    public setFarbe(farbe: string): void {
        this.farbe = farbe;
    }

    public zeigeInfo(): void{
        console.log("auto-farbe ist : " + this.farbe)
    }
}

const meinAuto1 = new Auto2();
meinAuto1.setFarbe("Rot");
meinAuto1.zeigeInfo()


