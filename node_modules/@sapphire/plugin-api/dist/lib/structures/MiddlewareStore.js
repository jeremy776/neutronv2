"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddlewareStore = void 0;
const pieces_1 = require("@sapphire/pieces");
const Middleware_1 = require("./Middleware");
/**
 * @since 1.0.0
 */
class MiddlewareStore extends pieces_1.Store {
    constructor() {
        super(Middleware_1.Middleware, { name: 'middlewares' });
        /**
         * The sorted middlewares, in ascending order of {@see Middleware#position}.
         */
        Object.defineProperty(this, "sortedMiddlewares", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    async run(request, response, route) {
        for (const middleware of this.sortedMiddlewares) {
            if (response.writableEnded)
                return;
            if (middleware.enabled)
                await middleware.run(request, response, route);
        }
    }
    set(key, value) {
        const index = this.sortedMiddlewares.findIndex((middleware) => middleware.position >= value.position);
        // If a middleware with lower priority wasn't found, push to the end of the array
        if (index === -1)
            this.sortedMiddlewares.push(value);
        else
            this.sortedMiddlewares.splice(index, 0, value);
        return super.set(key, value);
    }
    delete(key) {
        const index = this.sortedMiddlewares.findIndex((middleware) => middleware.name === key);
        // If the middleware was found, remove it
        if (index !== -1)
            this.sortedMiddlewares.splice(index, 1);
        return super.delete(key);
    }
    clear() {
        this.sortedMiddlewares.length = 0;
        return super.clear();
    }
}
exports.MiddlewareStore = MiddlewareStore;
//# sourceMappingURL=MiddlewareStore.js.map