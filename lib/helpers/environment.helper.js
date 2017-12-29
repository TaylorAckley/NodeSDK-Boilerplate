"use strict";

require('dotenv').config();

/** Environment Helper
 * @description Used to get your environment settings.
 * @private
 * @example
 * const env = Environment.get;'
 */

class Environment {
    constructor() {}

    static get URL() {
        return process.env.FOO_API_URL;
    }

    static get get() {
        return {
            clientID: process.env.FOO_AUDIENCE,
            secret: process.env.FOO_SECRET,
            apiURL: this.URL
        };
    }
}


module.exports = Environment;