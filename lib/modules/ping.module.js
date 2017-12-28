"use strict";

const Foo = require('./foo-api.module');
const config = require('../../config');

/**
 * @module Ping
 * @memberof Foo
 * @alias foo.ping
 * @description The ping module is a utility class used to determine service availability.
 */

class Ping extends Foo {

    /**
     * @method checkHealth
     * @static
     * @async
     * @description Checks service health.    If a exception is returned then the service may not be available.
     * @example
     * foo.ping.checkHealth()
     *                .then((res) => console.log(res))
     *                .catch((ex) => console.log(ex));
     * @returns {Promise<string>} - Promise resolves to a string containing a success message
     */

    static checkHealth() {
        return new Promise((resolve, reject) => {
            let endpoint = config.ping.endpoints.checkHealth;
            super.get(endpoint)
                .then((res) => {
                    resolve(res);
                })
                .catch((ex) => reject(ex));
        });

    }
};

module.exports = Ping;