let benutz = 32;
function zahl() : number{
    if(benutz  % 2 ===0){
        console.log("Gerade")
    }else{
        console.log("Ungerade")
    }
    return benutz;
}

zahl()

console.log("----------------------")
// Aufgabe:
// Der Benutzer gibt zwei Zahlen ein.
// Wenn die erste Zahl größer ist als die zweite, zeige „Erste Zahl ist größer“.
// Sonst zeige „Zweite Zahl ist größer oder gleich“.

let zahl_1 = 85;
let zahl_2 = 3
function zahle() : void{
    if(zahl_1 > zahl_2){
        console.log(`${zahl_1} is großer als ${zahl_2}`)
    }else if (zahl_1 === zahl_2) {
        console.log(`${zahl_1} is gleich ${zahl_2}`)
    } else {
        console.log(`${zahl_1} is klein als ${zahl_2}`)
    }
    
}

zahle()

console.log("---------------------------------")
// Aufgabe:
// Der Benutzer gibt eine Zahl ein.
// Wenn die Zahl kleiner als 0 ist, zeige „Negativ“.
// Wenn die Zahl genau 0 ist, zeige „Null“.
// Wenn die Zahl größer als 0 ist, zeige „Positiv“.
function positivNagativ() : void{
    let zahl = 2;
    if(zahl < 0){
        console.log("Negativ")
    }else if(zahl === 0){
        console.log("Null")
    }else{
        console.log("Positiv")
    }
}
positivNagativ()