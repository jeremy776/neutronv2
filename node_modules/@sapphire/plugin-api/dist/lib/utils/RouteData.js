"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteData = exports.TypeState = void 0;
const [slash, colon] = [47, 58];
/**
 * @since 1.0.0
 */
var TypeState;
(function (TypeState) {
    /**
     * @since 1.0.0
     */
    TypeState[TypeState["Static"] = 0] = "Static";
    /**
     * @since 1.0.0
     */
    TypeState[TypeState["Dynamic"] = 1] = "Dynamic";
})(TypeState = exports.TypeState || (exports.TypeState = {}));
class RouteData {
    constructor(path) {
        Object.defineProperty(this, "path", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "static", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "parts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.path = path;
        this.parts = RouteData.split(path).map(RouteData.parsePart.bind(null));
        this.static = this.parts.every((part) => part.type === 0 /* Static */);
    }
    match(split) {
        if (split.length !== this.parts.length)
            return null;
        if (this.static)
            return this.parts.every((part, index) => part.value === split[index]) ? {} : null;
        const parameters = [];
        for (let i = 0; i < this.parts.length; ++i) {
            const part = this.parts[i];
            const value = split[i];
            if (part.type === 0 /* Static */) {
                if (part.value === value)
                    continue;
                return null;
            }
            parameters.push([part.value, value]);
        }
        return Object.fromEntries(parameters);
    }
    /**
     * @since 1.0.0
     */
    static parsePart(value) {
        const type = value.charCodeAt(0) === colon ? 1 /* Dynamic */ : 0 /* Static */;
        if (type === 1 /* Dynamic */)
            value = value.substring(1);
        return { value, type };
    }
    /**
     * @since 1.0.0
     */
    static split(url) {
        if (url.length === 1 && url.charCodeAt(0) === slash)
            return [''];
        if (url.charCodeAt(0) === slash)
            url = url.substring(1);
        if (url.length > 0 && url.charCodeAt(url.length - 1) === slash)
            url = url.substring(0, url.length - 1);
        return url.split('/');
    }
}
exports.RouteData = RouteData;
//# sourceMappingURL=RouteData.js.map