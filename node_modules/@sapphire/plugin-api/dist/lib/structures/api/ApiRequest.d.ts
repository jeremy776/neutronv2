/// <reference types="node" />
import { IncomingMessage } from 'http';
import type { AuthData } from '../http/Auth';
export declare class ApiRequest extends IncomingMessage {
    /**
     * The query parameters.
     */
    query: Record<string, string | string[]>;
    /**
     * The URI parameters.
     */
    params: Record<string, string>;
    /**
     * The body that was sent by the user.
     */
    body?: unknown;
    /**
     * The authorization information. This field indicates three possible values:
     *
     * - `undefined`: The authorization middleware has not been executed yet.
     * - `null`: The user is not authorized.
     * - `AuthData`: The user is authorized.
     */
    auth?: AuthData | null;
}
//# sourceMappingURL=ApiRequest.d.ts.map