import { Store } from '@sapphire/pieces';
import { Collection } from 'discord.js';
import type { ApiRequest } from './api/ApiRequest';
import type { ApiResponse } from './api/ApiResponse';
import { Methods } from './http/HttpMethods';
import { Route } from './Route';
export interface MethodCallback {
    (request: ApiRequest, response: ApiResponse): unknown;
}
export interface RouteMatch {
    route: Route;
    cb: MethodCallback;
}
/**
 * @since 1.0.0
 */
export declare class RouteStore extends Store<Route> {
    readonly table: Collection<Methods, Collection<Route, MethodCallback>>;
    constructor();
    match(request: ApiRequest): RouteMatch | null;
    private parseURL;
}
//# sourceMappingURL=RouteStore.d.ts.map