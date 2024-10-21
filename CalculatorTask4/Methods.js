"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.multiplication = multiplication;
exports.division = division;
exports.substraction = substraction;
function add(num, num2) {
    return num + num2;
}
function multiplication(num, num2) {
    return num * num2;
}
function division(num, num2) {
    if (num2 == 0) {
        throw new Error("division by zero ");
    }
    return num / num2;
}
function substraction(num, num2) {
    return num - num2;
}
