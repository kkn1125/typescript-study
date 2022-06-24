"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KimsonSorter = /** @class */ (function () {
    function KimsonSorter(collection) {
        this.collection = collection;
    }
    // get getCollection() {
    //   return this.collection;
    // }
    KimsonSorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // if (typeof this.collection === "string") {
                //   if (
                //     this.collection[j].toLowerCase() >
                //     this.collection[j + 1].toLowerCase()
                //   ) {
                //     const characters = this.collection.split("");
                //     const temp = characters[j];
                //     characters[j] = characters[j + 1];
                //     characters[j + 1] = temp;
                //     this.collection = characters.join("");
                //   }
                // }
                // if (this.collection instanceof Array<number>) {
                //   if (this.collection[j] > this.collection[j + 1]) {
                //     // swap
                //     const temp = this.collection[j];
                //     this.collection[j] = this.collection[j + 1];
                //     this.collection[j + 1] = temp;
                //   }
                // }
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
        // return this.collection;
    };
    KimsonSorter.prototype.printCollection = function () {
        console.log(this.collection);
    };
    return KimsonSorter;
}());
exports.default = KimsonSorter;
