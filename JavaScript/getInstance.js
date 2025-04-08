// The client should no longer create an instance of the Proxy class using the constructor, but instead use a static factory method.
// Implement this method of the Proxy class in pseudocode with the name 'getInstance'.

class Proxy {
    constructor(mitglied, user) {
        this.mitglied = mitglied;
        this.user = user;
    }

    static getInstance(mitglied, user) {
        return new Proxy(mitglied, user);
    }
}


const proxyObjekt = Proxy.getInstance("Aziz", "Jens");
console.log(proxyObjekt)

