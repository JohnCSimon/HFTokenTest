"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const md5_1 = __importDefault(require("md5"));
let map = new Map();
exports.buildEmailToken = (email) => {
    const hashedEmail = md5_1.default(email);
    map.set(email, hashedEmail);
    return hashedEmail;
};
exports.retrieveHash = (email) => {
    return "yay";
};
//# sourceMappingURL=tokenizedEmail.js.map