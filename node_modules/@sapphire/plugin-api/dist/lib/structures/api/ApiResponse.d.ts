/// <reference types="node" />
import { ServerResponse } from 'http';
import { MimeTypes } from '../../utils/MimeTypes';
import type { CookieStore } from './CookieStore';
/**
 * @since 1.0.0
 */
export declare class ApiResponse extends ServerResponse {
    /**
     * @since 1.0.0
     */
    cookies: CookieStore;
    /**
     * @since 1.0.0
     */
    ok(data?: unknown): void;
    /**
     * @since 1.0.0
     */
    created(data?: unknown): void;
    /**
     * @since 1.0.0
     */
    noContent(data?: unknown): void;
    /**
     * @since 1.0.0
     */
    badRequest(data?: unknown): void;
    /**
     * @since 1.0.0
     */
    unauthorized(data?: unknown): void;
    /**
     * @since 1.0.0
     */
    forbidden(data?: unknown): void;
    /**
     * @since 1.0.0
     */
    notFound(data?: unknown): void;
    /**
     * @since 1.0.0
     */
    conflict(data?: unknown): void;
    /**
     * @since 1.0.0
     */
    error(error: number | string, data?: unknown): void;
    /**
     * @since 1.0.0
     */
    respond(data: unknown): void;
    /**
     * @since 1.0.0
     */
    status(code: number): this;
    /**
     * @since 1.0.0
     */
    json(data: any): void;
    /**
     * @since 1.0.0
     */
    text(data: string): void;
    /**
     * @since 1.0.0
     */
    setContentType(contentType: MimeTypes): this;
}
//# sourceMappingURL=ApiResponse.d.ts.map