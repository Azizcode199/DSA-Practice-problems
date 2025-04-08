// The client should no longer create an instance of the Proxy class using the constructor, but instead use a static factory method.
// Implement this method of the Proxy class in pseudocode with the name 'getInstance'.


// Simple class to represent a member
class RealMember {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// Custom proxy class with a static factory method
class RatingProxy {
    mitglied: RealMember;
    user: RealMember;

    constructor(mitglied: RealMember, user: RealMember) {
        this.mitglied = mitglied;
        this.user = user;
    }

    // Static method to create a new RatingProxy object
    static getInstance(mitglied: RealMember, user: RealMember): RatingProxy {
        return new RatingProxy(mitglied, user);
    }
}

// Create example RealMember objects
const mitglied = new RealMember("Aziz");
const user = new RealMember("Jens");

// Create RatingProxy using the static factory method
const proxyObjekt = RatingProxy.getInstance(mitglied, user);

// Print the RatingProxy object to the console
console.log(proxyObjekt);