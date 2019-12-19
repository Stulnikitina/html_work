"use strict";

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() {
        return this.step;
    }
};

console.log(ladder.up().up().down().showStep());



