"use strict";

const config = {
    global: {},
    auth: {
        endpoints: {}
    },
    ping: {
        endpoints: {}
    }
};

config.global.userAgent = 'FooSDK@alpha';

config.auth.endpoints = "auth/token";

config.ping.endpoints.checkHealth = 'ping';