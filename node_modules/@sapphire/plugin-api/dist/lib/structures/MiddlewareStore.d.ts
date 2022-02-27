import { Store } from '@sapphire/pieces';
import type { ApiRequest } from './api/ApiRequest';
import type { ApiResponse } from './api/ApiResponse';
import { Middleware } from './Middleware';
import type { Route } from './Route';
/**
 * @since 1.0.0
 */
export declare class MiddlewareStore extends Store<Middleware> {
    /**
     * The sorted middlewares, in ascending order of {@see Middleware#position}.
     */
    readonly sortedMiddlewares: Middleware[];
    constructor();
    run(request: ApiRequest, response: ApiResponse, route: Route | null): Promise<void>;
    set(key: string, value: Middleware): this;
    delete(key: string): boolean;
    clear(): void;
}
//# sourceMappingURL=MiddlewareStore.d.ts.map