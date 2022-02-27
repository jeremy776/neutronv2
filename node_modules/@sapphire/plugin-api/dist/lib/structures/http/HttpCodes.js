"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpCodes = void 0;
var HttpCodes;
(function (HttpCodes) {
    /**
     * Standard response for successful HTTP requests. The actual response will
     * depend on the request method used. In a GET request, the response will
     * contain an entity corresponding to the requested resource. In a POST
     * request, the response will contain an entity describing or containing the
     * result of the action.
     */
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    /**
     * The request has been fulfilled, resulting in the creation of a new
     * resource.
     */
    HttpCodes[HttpCodes["Created"] = 201] = "Created";
    /**
     * The request has been accepted for processing, but the processing has not
     * been completed. The request might or might not be eventually acted upon,
     * and may be disallowed when processing occurs.
     */
    HttpCodes[HttpCodes["Accepted"] = 202] = "Accepted";
    /**
     * The server is a transforming proxy (e.g. a Web accelerator) that received
     * a 200 OK from its origin, but is returning a modified version of the
     * origin's response.
     */
    HttpCodes[HttpCodes["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
    /**
     * The server successfully processed the request, and is not returning any
     * content.
     */
    HttpCodes[HttpCodes["NoContent"] = 204] = "NoContent";
    /**
     * The server successfully processed the request, asks that the requester
     * reset its document view, and is not returning any content.
     */
    HttpCodes[HttpCodes["ResetContent"] = 205] = "ResetContent";
    /**
     * (RFC 7233) The server is delivering only part of the resource (byte
     * serving) due to a range header sent by the client. The range header is
     * used by HTTP clients to enable resuming of interrupted downloads, or
     * split a download into multiple simultaneous streams.
     */
    HttpCodes[HttpCodes["PartialContent"] = 206] = "PartialContent";
    /**
     * (WebDAV; RFC 4918) The message body that follows is by default an XML
     * message and can contain a number of separate response codes, depending on
     * how many sub-requests were made.
     */
    HttpCodes[HttpCodes["MultiStatus"] = 207] = "MultiStatus";
    /**
     * (WebDAV; RFC 5842) The members of a DAV binding have already been
     * enumerated in a preceding part of the (multistatus) response, and are not
     * being included again.
     */
    HttpCodes[HttpCodes["AlreadyReported"] = 208] = "AlreadyReported";
    /**
     * (RFC 3229) The server has fulfilled a request for the resource, and the
     * response is a representation of the result of one or more
     * instance-manipulations applied to the current instance.
     */
    HttpCodes[HttpCodes["IMUsed"] = 226] = "IMUsed";
    /**
     * Indicates multiple options for the resource from which the client may
     * choose (via agent-driven content negotiation). For example, this code
     * could be used to present multiple video format options, to list files
     * with different filename extensions, or to suggest word-sense
     * disambiguation.
     */
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    /**
     * This and all future requests should be directed to the given URI.
     */
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    /**
     * (Previously "Moved temporarily") Tells the client to look at (browse to)
     * another URL. 302 has been superseded by 303 and 307. This is an example
     * of industry practice contradicting the standard. The HTTP/1.0
     * specification (RFC 1945) required the client to perform a temporary
     * redirect (the original describing phrase was "Moved Temporarily"), but
     * popular browsers implemented 302 with the functionality of a 303 See
     * Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish
     * between the two behaviours. However, some Web applications and frameworks
     * use the 302 status code as if it were the 303.
     */
    HttpCodes[HttpCodes["Found"] = 302] = "Found";
    /**
     * The response to the request can be found under another URI using the GET
     * method. When received in response to a POST (or PUT/DELETE), the client
     * should presume that the server has received the data and should issue a
     * new GET request to the given URI.
     */
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    /**
     * (RFC 7232) Indicates that the resource has not been modified since the
     * version specified by the request headers If-Modified-Since or
     * If-None-Match. In such case, there is no need to retransmit the resource
     * since the client still has a previously-downloaded copy.
     */
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    /**
     * The requested resource is available only through a proxy, the address for
     * which is provided in the response. For security reasons, many HTTP
     * clients (such as Mozilla Firefox and Internet Explorer) do not obey this
     * status code.
     */
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    /**
     * No longer used. Originally meant "Subsequent requests should use the
     * specified proxy.".
     */
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    /**
     * In this case, the request should be repeated with another URI; however,
     * future requests should still use the original URI. In contrast to how 302
     * was historically implemented, the request method is not allowed to be
     * changed when reissuing the original request. For example, a POST request
     * should be repeated using another POST request.
     */
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    /**
     * (RFC 7538) The request and all future requests should be repeated using
     * another URI. 307 and 308 parallel the behaviors of 302 and 301, but do
     * not allow the HTTP method to change. So, for example, submitting a form
     * to a permanently redirected resource may continue smoothly.
     */
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    /**
     * The server cannot or will not process the request due to an apparent
     * client error (e.g., malformed request syntax, size too large, invalid
     * request message framing, or deceptive request routing).
     */
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    /**
     * (RFC 7235) Similar to 403 Forbidden, but specifically for use when
     * authentication is required and has failed or has not yet been provided.
     * The response must include a WWW-Authenticate header field containing a
     * challenge applicable to the requested resource. See Basic access
     * authentication and Digest access authentication. 401 semantically means
     * "unauthorised", the user does not have valid authentication credentials
     * for the target resource.
     */
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    /**
     * Reserved for future use. The original intention was that this code might
     * be used as part of some form of digital cash or micropayment scheme, as
     * proposed, for example, by GNU Taler, but that has not yet happened, and
     * this code is not widely used. Google Developers API uses this status if a
     * particular developer has exceeded the daily limit on requests. Sipgate
     * uses this code if an account does not have sufficient funds to start a
     * call. Shopify uses this code when the store has not paid their fees and
     * is temporarily disabled. Stripe uses this code for failed payments where
     * parameters were correct, for example blocked fraudulent payments.
     */
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    /**
     * The request contained valid data and was understood by the server, but
     * the server is refusing action. This may be due to the user not having the
     * necessary permissions for a resource or needing an account of some sort,
     * or attempting a prohibited action (e.g. creating a duplicate record
     * where only one is allowed). This code is also typically used if the
     * request provided authentication by answering the WWW-Authenticate header
     * field challenge, but the server did not accept that authentication. The
     * request should not be repeated.
     */
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    /**
     * The requested resource could not be found but may be available in the
     * future. Subsequent requests by the client are permissible.
     */
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    /**
     * A request method is not supported for the requested resource; for example,
     * a GET request on a form that requires data to be presented via POST, or a
     * PUT request on a read-only resource.
     */
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    /**
     * The requested resource is capable of generating only content not
     * acceptable according to the Accept headers sent in the request. See Content negotiation.
     */
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    /**
     * (RFC 7235) The client must first authenticate itself with the proxy.
     */
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    /**
     * The server timed out waiting for the request. According to HTTP
     * specifications: "The client did not produce a request within the time
     * that the server was prepared to wait. The client MAY repeat the request
     * without modifications at any later time."
     */
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    /**
     * Indicates that the request could not be processed because of conflict in
     * the current state of the resource, such as an edit conflict between
     * multiple simultaneous updates.
     */
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    /**
     * Indicates that the resource requested is no longer available and will not
     * be available again. This should be used when a resource has been
     * intentionally removed and the resource should be purged. Upon receiving a
     * 410 status code, the client should not request the resource in the future.
     * Clients such as search engines should remove the resource from their
     * indices. Most use cases do not require clients and search engines to
     * purge the resource, and a "404 Not Found" may be used instead.
     */
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    /**
     * The request did not specify the length of its content, which is required
     * by the requested resource.
     */
    HttpCodes[HttpCodes["LengthRequired"] = 411] = "LengthRequired";
    /**
     * (RFC 7232) The server does not meet one of the preconditions that the
     * requester put on the request header fields.
     */
    HttpCodes[HttpCodes["PreconditionFailed"] = 412] = "PreconditionFailed";
    /**
     * (RFC 7231) The request is larger than the server is willing or able to
     * process. Previously called "Request Entity Too Large".
     */
    HttpCodes[HttpCodes["PayloadTooLarge"] = 413] = "PayloadTooLarge";
    /**
     * (RFC 7231) The URI provided was too long for the server to process. Often
     * the result of too much data being encoded as a query-string of a GET
     * request, in which case it should be converted to a POST request. Called
     * "Request-URI Too Long" previously.
     */
    HttpCodes[HttpCodes["URITooLong"] = 414] = "URITooLong";
    /**
     * (RFC 7231) The request entity has a media type which the server or
     * resource does not support. For example, the client uploads an image as
     * image/svg+xml, but the server requires that images use a different format.
     */
    HttpCodes[HttpCodes["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
    /**
     * (RFC 7233) The client has asked for a portion of the file (byte serving),
     * but the server cannot supply that portion. For example, if the client
     * asked for a part of the file that lies beyond the end of the file. Called
     * "Requested Range Not Satisfiable" previously.
     */
    HttpCodes[HttpCodes["RangeNotSatisfiable"] = 416] = "RangeNotSatisfiable";
    /**
     * The server cannot meet the requirements of the Expect request-header
     * field.
     */
    HttpCodes[HttpCodes["ExpectationFailed"] = 417] = "ExpectationFailed";
    /**
     * (RFC 2324, RFC 7168) This code was defined in 1998 as one of the
     * traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot
     * Control Protocol, and is not expected to be implemented by actual HTTP
     * servers. The RFC specifies this code should be returned by teapots
     * requested to brew coffee. This HTTP status is used as an Easter egg in
     * some websites, such as Google.com's I'm a teapot easter egg.
     */
    HttpCodes[HttpCodes["IAmATeapot"] = 418] = "IAmATeapot";
    /**
     * Returned by the Twitter Search and Trends API when the client is being rate limited.
     * The text is a quote from 'Demolition Man' and the '420' code is likely a reference
     * to this number's association with marijuana. Other services may wish to implement
     * the 429 Too Many Requests response code instead.
     */
    HttpCodes[HttpCodes["EnhanceYourCalm"] = 420] = "EnhanceYourCalm";
    /**
     * (RFC 7540) The request was directed at a server that is not able to
     * produce a response (for example because of connection reuse).
     */
    HttpCodes[HttpCodes["MisdirectedRequest"] = 421] = "MisdirectedRequest";
    /**
     * (WebDAV; RFC 4918) The request was well-formed but was unable to be
     * followed due to semantic errors.
     */
    HttpCodes[HttpCodes["UnprocessableEntity"] = 422] = "UnprocessableEntity";
    /**
     * (WebDAV; RFC 4918) The resource that is being accessed is locked.
     */
    HttpCodes[HttpCodes["Locked"] = 423] = "Locked";
    /**
     * (WebDAV; RFC 4918) The request failed because it depended on another
     * request and that request failed (e.g., a PROPPATCH).
     */
    HttpCodes[HttpCodes["FailedDependency"] = 424] = "FailedDependency";
    /**
     * (RFC 8470) Indicates that the server is unwilling to risk processing a
     * request that might be replayed.
     */
    HttpCodes[HttpCodes["TooEarly"] = 425] = "TooEarly";
    /**
     * The client should switch to a different protocol such as TLS/1.0, given
     * in the Upgrade header field.
     */
    HttpCodes[HttpCodes["UpgradeRequired"] = 426] = "UpgradeRequired";
    /**
     * (RFC 6585) The origin server requires the request to be conditional.
     * Intended to prevent the 'lost update' problem, where a client GETs a
     * resource's state, modifies it, and PUTs it back to the server, when
     * meanwhile a third party has modified the state on the server, leading to
     * a conflict.
     */
    HttpCodes[HttpCodes["PreconditionRequired"] = 428] = "PreconditionRequired";
    /**
     * (RFC 6585) The user has sent too many requests in a given amount of time.
     * Intended for use with rate-limiting schemes.
     */
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    /**
     * (RFC 6585) The server is unwilling to process the request because either
     * an individual header field, or all the header fields collectively, are
     * too large.
     */
    HttpCodes[HttpCodes["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
    /**
     * (RFC 7725) A server operator has received a legal demand to deny access
     * to a resource or to a set of resources that includes the requested
     * resource. The code 451 was chosen as a reference to the novel Fahrenheit
     * 451 (see the Acknowledgements in the RFC).
     */
    HttpCodes[HttpCodes["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
    /**
     * A generic error message, given when an unexpected condition was
     * encountered and no more specific message is suitable.
     */
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    /**
     * The server either does not recognize the request method, or it lacks the
     * ability to fulfil the request. Usually this implies future availability
     * (e.g., a new feature of a web-service API).
     */
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    /**
     * The server was acting as a gateway or proxy and received an invalid
     * response from the upstream server.
     */
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    /**
     * The server cannot handle the request (because it is overloaded or down
     * for maintenance). Generally, this is a temporary state.
     */
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    /**
     * The server was acting as a gateway or proxy and did not receive a timely
     * response from the upstream server.
     */
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
    /**
     * The server does not support the HTTP protocol version used in the request.
     */
    HttpCodes[HttpCodes["HTTPVersionNotSupported"] = 505] = "HTTPVersionNotSupported";
    /**
     * (RFC 2295) Transparent content negotiation for the request results in a
     * circular reference.
     */
    HttpCodes[HttpCodes["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
    /**
     * (WebDAV; RFC 4918) The server is unable to store the representation
     * needed to complete the request.
     */
    HttpCodes[HttpCodes["InsufficientStorage"] = 507] = "InsufficientStorage";
    /**
     * (WebDAV; RFC 5842) The server detected an infinite loop while processing
     * the request (sent instead of 208 Already Reported).
     */
    HttpCodes[HttpCodes["LoopDetected"] = 508] = "LoopDetected";
    /**
     * (RFC 2774) Further extensions to the request are required for the server
     * to fulfil it.
     */
    HttpCodes[HttpCodes["NotExtended"] = 510] = "NotExtended";
    /**
     * (RFC 6585) The client needs to authenticate to gain network access.
     * Intended for use by intercepting proxies used to control access to the
     * network (e.g., "captive portals" used to require agreement to Terms of
     * Service before granting full Internet access via a Wi-Fi hotspot).
     */
    HttpCodes[HttpCodes["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
//# sourceMappingURL=HttpCodes.js.map