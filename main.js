"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'welcome back';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'codevoltuion';
var isBeginner = true;
var total = 10;
var myname = 'revati';
var sentence = "My name is " + myname + "\nI am a beginner in typescript";
console.log(sentence);
var n = null;
var u = undefined;
var ishello = undefined;
var name = null;
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3];
var list3 = ['revati', 20];
var color;
(function (color) {
    color[color["re"] = 7] = "re";
    color[color["green"] = 8] = "green";
    color[color["blue"] = 9] = "blue";
})(color || (color = {}));
var c = color.green;
console.log(c);
var randomvalue = 10;
randomvalue = true;
randomvalue = 'revati';
console.log(randomvalue.name);
var myvariable = 10;
function hasname(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasname(myvariable)) {
    console.log(myvariable.name);
}
var multitype;
multitype = 20;
multitype = 'revati';
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 10));
function add1(num1, num2) {
    if (num2) {
        return num1 + num2; //optional param
    }
    else {
        return num1;
    }
}
add1(5);
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2; //default param
    }
    else {
        return num1;
    }
}
add2(5);
function fullname(person) {
    console.log(person.firstname + " " + person.lastname);
}
var p = {
    firstname: 'revati',
    lastname: 'pinninti'
};
fullname(p);
var employee = /** @class */ (function () {
    function employee(name) {
        this.employeename = name;
    }
    employee.prototype.greet = function () {
        console.log("good morning " + this.employeename);
    };
    return employee;
}());
var emp1 = new employee('revati');
console.log(emp1.employeename);
emp1.greet();
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(managername) {
        return _super.call(this, managername) || this;
    }
    manager.prototype.work = function () {
        console.log("lot of work is there");
    };
    return manager;
}(employee));
var m1 = new manager('rishita');
m1.work();
m1.greet();
console.log(m1.employeename);
