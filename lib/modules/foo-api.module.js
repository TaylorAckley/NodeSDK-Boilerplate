"use strict";
const Promise = require('bluebird');
const r = require('request-promise');

const Environment = require('../helpers/environment.helper');
const Auth = require('./auth.module');

const env = Environment.get();

/** @module $
 * @memberof Foo
 * @description The $ module contains methods needed by the child classes to effectivley call the API in a repeatable manner.
 */

class FooAPI {

    static get(endpoint) {
        return new Promise((resolve, reject) => {
            Auth.token()
                .then((token) => {
                    let req = {
                        uri: this._formatURI(endpoint),
                        json: true,
                        headers: {
                            "Authorization": token.authorization,
                            "User-Agent": "FooSDK@alpha"
                        }
                    };
                    r(req)
                        .then((res) => {
                            resolve(res);
                        })
                        .catch((ex) => reject(ex));
                })
                .catch((ex) => this._handleEx(ex));
        });
    }

    /** Post */
    static post(endpoint, data) {
        return new Promise((resolve, reject) => {
            Auth.token()
                .then((token) => {
                    let req = {
                        method: 'POST',
                        uri: this._formatURI(endpoint),
                        json: true,
                        headers: {
                            "Authorization": token.authorization,
                            "User-Agent": "FooSDK@alpha"
                        },
                        data: data
                    };
                    r(req)
                        .then((res) => {
                            resolve(res);
                        })
                        .catch((ex) => reject(ex));
                })
                .catch((ex) => this._handleEx(ex));
        });
    }

    /** Put */
    static put(endpoint, data) {
        return new Promise((resolve, reject) => {
            Auth.token()
                .then((token) => {
                    let req = {
                        method: 'put',
                        uri: this._formatURI(endpoint),
                        json: true,
                        headers: {
                            "Authorization": token.authorization,
                            "User-Agent": "FooSDK@alpha"
                        },
                        data: data
                    };
                    r(req)
                        .then((res) => {
                            resolve(res);
                        })
                        .catch((ex) => reject(ex));
                })
                .catch((ex) => this._handleEx(ex));
        });
    }

    /** Delete */
    static delete(endpoint, data) {
        return new Promise((resolve, reject) => {
            Auth.token()
                .then((token) => {
                    let req = {
                        method: 'delete',
                        uri: this._formatURI(endpoint),
                        json: true,
                        headers: {
                            "Authorization": token.authorization,
                            "User-Agent": "FooSDK@alpha"
                        },
                        data: data
                    };
                    r(req)
                        .then((res) => {
                            resolve(res);
                        })
                        .catch((ex) => reject(ex));
                })
                .catch((ex) => this._handleEx(ex));
        });
    }

    static _formatURI(endpoint) {
        return `${env.apiURL}/${endpoint}`;
    }

    static _handleEx(ex) {
        console.log(ex);
        return;
    }
}

module.exports = FooAPI;