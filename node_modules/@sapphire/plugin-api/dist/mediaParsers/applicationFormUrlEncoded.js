"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginMediaParser = void 0;
const url_1 = require("url");
const MediaParser_1 = require("../lib/structures/MediaParser");
require("../lib/utils/MimeTypes");
class PluginMediaParser extends MediaParser_1.MediaParser {
    constructor(context) {
        super(context, { name: "application/x-www-form-urlencoded" /* ApplicationFormUrlEncoded */ });
    }
    async run(request) {
        const body = await this.readString(request);
        return body.length === 0 ? null : Object.fromEntries(new url_1.URLSearchParams(body).entries());
    }
}
exports.PluginMediaParser = PluginMediaParser;
//# sourceMappingURL=applicationFormUrlEncoded.js.map