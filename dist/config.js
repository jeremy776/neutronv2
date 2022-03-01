"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotActivityType = exports.MongoDB = exports.Activity = exports.Token = exports.Prefix = void 0;
exports.Prefix = process.env.prefix || 'dev ';
exports.Token = process.env.token || 'NjQ4MDcwNzAyMTIwOTYwMDEy.Xdo43w.8gA_MC8u1-mSCNlOU0nelDhiD8M';
exports.Activity = "on Development";
exports.MongoDB = process.env.mongodb || 'mongodb+srv://jeremykusuma:christianjeremykusuma@cluster0.d0mjj.mongodb.net/boteconomy?retryWrites=true&w=majority';
exports.BotActivityType = "STREAMING";
