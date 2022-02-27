"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginMediaParser = void 0;
const MediaParser_1 = require("../lib/structures/MediaParser");
require("../lib/utils/MimeTypes");
class PluginMediaParser extends MediaParser_1.MediaParser {
    constructor(context) {
        super(context, { name: "text/plain" /* TextPlain */ });
    }
    async run(request) {
        const body = await this.readString(request);
        return body.length === 0 ? null : body;
    }
}
exports.PluginMediaParser = PluginMediaParser;
//# sourceMappingURL=textPlain.js.map