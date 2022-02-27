"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRequest = void 0;
const http_1 = require("http");
class ApiRequest extends http_1.IncomingMessage {
    constructor() {
        super(...arguments);
        /**
         * The query parameters.
         */
        Object.defineProperty(this, "query", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        /**
         * The URI parameters.
         */
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        /**
         * The body that was sent by the user.
         */
        Object.defineProperty(this, "body", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The authorization information. This field indicates three possible values:
         *
         * - `undefined`: The authorization middleware has not been executed yet.
         * - `null`: The user is not authorized.
         * - `AuthData`: The user is authorized.
         */
        Object.defineProperty(this, "auth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.ApiRequest = ApiRequest;
//# sourceMappingURL=ApiRequest.js.map