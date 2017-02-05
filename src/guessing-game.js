class GuessingGame {
    constructor() {
        this.data = null;
    }

    setRange(min, max) {
        var count = max - min;
        // http://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-an-array-based-on-suppl
        this.data = Array.apply(null, Array(count)).map(function (value, i) {
            return i+min;
        });
    }

    guess() {
        if (this.data.length) {
            return this.data[Math.ceil(this.data.length / 2)];
        }
        return null;
    }

    lower() {
        this.data = this.data.slice(0, Math.ceil(this.data.length / 2));
    }

    greater() {
        this.data = this.data.slice(Math.ceil(this.data.length / 2));
    }
}

module.exports = GuessingGame;
