"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const Client_1 = require("./structures/Client");
const connect_1 = __importDefault(require("./connect"));
(0, connect_1.default)({ MongoDB: config_1.MongoDB });
const client = new Client_1.Client();
client.login(config_1.Token);
