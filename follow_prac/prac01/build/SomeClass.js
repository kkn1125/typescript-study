"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const data: IBehavior = {
//   play: function () {
//   }
// };
var SomeClass = /** @class */ (function () {
    function SomeClass(name) {
        this.name = name;
        this.setName(name);
    }
    SomeClass.prototype.getName = function () {
        return this.name;
    };
    SomeClass.prototype.setName = function (newName) {
        this.name = newName;
    };
    SomeClass.prototype.play = function () {
        console.log("test");
    };
    SomeClass.prototype.callName = function () {
        console.log("My name is ".concat(this.name));
    };
    return SomeClass;
}());
exports.default = SomeClass;
