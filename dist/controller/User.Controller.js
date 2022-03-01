"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.createUser = void 0;
const User_1 = __importDefault(require("../models/User"));
async function createUser(msg) {
    const user = await User_1.default.create({
        id: msg.author?.id,
        username: msg.author?.username,
        discriminator: msg.author?.discriminator
    });
    return user;
}
exports.createUser = createUser;
async function getUser(id) {
    const user = await User_1.default.findByUserId(id);
    return user;
}
exports.getUser = getUser;
