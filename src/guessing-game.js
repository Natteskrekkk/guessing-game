class GuessingGame {
    constructor() { }

    min;
    max;
    middle;

    /**
     * this method accepts min and max value of range of number to guess
     * @param {*} min 
     * @param {*} max 
     */
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    /**
     * this method returns solution candidate (you make an assumption based on
     * range and previous assumptions)
     */
    guess() {
        this.middle = Math.round((this.min + this.max) / 2);
        return this.middle;
    }

    /**
     * this method is called if prev call of guess() returned number which is 
     * greater than answer
     */
    lower() {
        this.max = this.middle;
        return this.guess();
    }

    /**
     * this method is called if prev call of guess() returned number which is 
     * lower than answer
     */
    greater() {
        this.min = this.middle;
        return this.guess();
    }
}

module.exports = GuessingGame;


// function findNum(min, max, num) {
//     let middle = Math.floor((min + max) / 2);
//     if (middle > num) {
//         max = middle - 1;
//         return findNum(min, max, num);
//     } else if (middle < num) {
//         min = middle + 1;
//         return findNum(min, max, num);
//     } else {
//         return middle === num;
//     }
// }

// findNum(0, 600, 30);







