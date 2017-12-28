"use strict";

require('dotenv').config();

/** Environment Helper
 * @description Used to get your environment settings.
 * @private
 * @example
 * const env = Environment.get()'
 */

class Environment {
    constructor() {}

    static getURL() {
        if (!process.env.ENVIRONMENT || process.env.NODE_ENV === 'production') {
            return 'https://api.foo.com'; //send production URL
        }
        return 'http://stage.api.foo.com'; //Send Dev URL
    }

    static get() {
        return {
            clientID: process.env.FOO_AUDIENCE,
            secret: process.env.FOO_SECRET,
            apiURL: this.getURL()
        };
    }
}


module.exports = Environment;