// big chainring, little cog: pedals once,
// wheels many times 

class Gear {
    constructor(chainring, cog) {
        this.chainring = chainring;
        this.cog = cog;
    }

    ratio() {
        return this.chainring / this.cog
    }
}

console.log(new Gear(30, 27).ratio());

