"use strict";

const mocha = require('mocha');
const assert = require('assert');
const chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

const env = process.env;

const LocalStorage = require('node-localstorage').LocalStorage;
const ls = new LocalStorage('./.data');

const Environment = require('../lib/helpers/environment.helper');
const Auth = require('../lib/modules/auth.module');
const foo = require('../index.js');

describe('env vars', () => {
    it(' should be defined and strings', () => {
        env.FOO_SECRET.should.be.a('string');
        env.FOO_AUDIENCE.should.be.a('string');
    });
});

describe('Environment', () => {
    it('should return the current environment', () => {
        const _e = Environment.get();
        _e.should.be.a('object');
        _e.audience.should.be.a('string');
        _e.secret.should.be.a('string');
        _e.apiURL.should.be.a('string');
    });
});

describe('foo', () => {
    it('should be defined and an object', () => {
        expect(foo).to.be.an('object');
    })

    describe('foo.auth', () => {
        it('should be defined and an object', () => {
            expect(foo.auth).to.be.an('function')
        })
        describe('foo.auth.getSingleUseToken()', (done) => {
            it('should return a string containing Bearer', () => {
                foo.auth.getSingleUseToken()
                    .then((res) => {
                        res.should.contain('Bearer');
                    }).finally(done);

            });
        });

        ls.clear(); //Remove any tokens in storage;
        describe('foo.auth.token()', () => {
            var token;
            it('should return a token object', (done) => {

                foo.auth.token()
                    .then((res) => {
                        token = res;
                        res.should.have.property('authorization');
                    }).finally(done);

            });

            it('should return the token from LS instead of creating a new one', (done) => {
                foo.auth.token()
                    .then((res) => {
                        res.accessToken.should.equal(token.accessToken);

                    }).finally(done);
            });
        });

    }); // foo.auth

    describe('foo.$', () => {
        it('foo.$.get should get data', (done) => {
            foo.$.get('ping')
                .then((res) => {
                    res.should.equal('Service Running');
                }).finally(done);
        });
    }); // foo.$

    describe('foo.ping', () => {
        it('should be defined and an object', () => {
            expect(foo.ping).to.be.an('function');
        })

        describe('foo.ping.checkHealth()', () => {
            it('should return a message', (done) => {
                foo.ping.checkHealth()
                    .then((res) => {
                        res.should.equal('Service Running');
                    }).finally(done);

            });
        });
    }); // foo.ping

}); // foo