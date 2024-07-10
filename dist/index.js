"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.greet = void 0;
// index.js
const greet = (name) => {
    return `Bonjour, ${name}!`;
};
exports.greet = greet;
const add = (a, b) => {
    return a + b;
};
exports.add = add;
