"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.methodEntries = exports.methods = void 0;
const http_1 = require("http");
exports.methods = Object.fromEntries(http_1.METHODS.map((method) => [method, Symbol(`HTTP-${method}`)]));
exports.methodEntries = Object.entries(exports.methods);
//# sourceMappingURL=HttpMethods.js.map