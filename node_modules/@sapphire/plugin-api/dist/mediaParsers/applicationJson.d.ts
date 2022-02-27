import type { PieceContext } from '@sapphire/pieces';
import type { ApiRequest } from '../lib/structures/api/ApiRequest';
import { MediaParser } from '../lib/structures/MediaParser';
export declare class PluginMediaParser extends MediaParser {
    constructor(context: PieceContext);
    run(request: ApiRequest): Promise<unknown>;
}
//# sourceMappingURL=applicationJson.d.ts.map