"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaParserStore = void 0;
const pieces_1 = require("@sapphire/pieces");
const MediaParser_1 = require("./MediaParser");
/**
 * @since 1.3.0
 */
class MediaParserStore extends pieces_1.Store {
    constructor() {
        super(MediaParser_1.MediaParser, { name: 'mediaParsers' });
    }
    /**
     * Parses a content type by getting the relevant information inside.
     * @since 1.3.0
     * @param contentType The content type to parse.
     */
    parseContentType(contentType) {
        const index = contentType.indexOf(';');
        return index === -1 ? contentType : contentType.slice(0, index);
    }
}
exports.MediaParserStore = MediaParserStore;
//# sourceMappingURL=MediaParserStore.js.map