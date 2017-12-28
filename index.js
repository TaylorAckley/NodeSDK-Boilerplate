const FooAPI = require('./lib/modules/foo-api.module.js');
const Ping = require('./lib/modules/ping.module');
const Auth = require('./lib/modules/auth.module');

/**
 * @namespace {object} Foo
 * @description Top-Level namespace for the Foo SDK.
 * @example
 * const foo = require('foosdk');
 * foo.<module>.<method>
 */

const Foo = {};

Foo.$ = FooAPI;

/**
 * @name Foo#Ping
 * @see Ping
 * @alias foo.ping
 */
Foo.ping = Ping;

/**
 * @name Foo#Auth
 * @see {@link module: Auth}
 * @alias foo.auth
 */
Foo.auth = Auth;


module.exports = Foo;