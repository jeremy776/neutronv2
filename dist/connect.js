"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = ({ MongoDB }) => {
    const connect = () => {
        mongoose_1.default.connect(MongoDB).then(() => {
            return console.log(`Successully connected to Databse`);
        }).catch(e => {
            console.error(`Unable to connect: ${e}`);
            return process.exit(1);
        });
    };
    connect();
    mongoose_1.default.connection.on('disconnect', connect);
};
