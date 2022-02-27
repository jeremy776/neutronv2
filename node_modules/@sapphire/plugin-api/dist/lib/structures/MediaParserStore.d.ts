import { Store } from '@sapphire/pieces';
import { MediaParser } from './MediaParser';
/**
 * @since 1.3.0
 */
export declare class MediaParserStore extends Store<MediaParser> {
    constructor();
    /**
     * Parses a content type by getting the relevant information inside.
     * @since 1.3.0
     * @param contentType The content type to parse.
     */
    parseContentType(contentType: string): string;
}
//# sourceMappingURL=MediaParserStore.d.ts.map