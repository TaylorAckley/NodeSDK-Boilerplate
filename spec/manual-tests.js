"use strict";

const foo = require('../index');
const Environment = require('../lib/helpers/environment.helper');

foo.auth.token().then((res) => console.log(res));

foo.ping.checkHealth()
    .then((res) => console.log(res));