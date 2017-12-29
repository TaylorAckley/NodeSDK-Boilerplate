# Boilerplate SDK

A boilerplate SDK that can be cloned to help you create a Node SDK on top of your restful API.   Comes with a `Ping` module to get you started.

[Medium Article](https://medium.com/@TaylorAckley/making-a-sdk-for-your-api-in-node-5e05696818ae)

## Features

- Handles authentication and stores the token with the SDK for retrieval.   Grabs a new token when it expires.
- Modular design makes it easy to add on new modules.
- Already created unit tests and coverage metrics.
- Documentation set to go.

## Getting Started

- The SDK comes with a placeholder name, "Foo".   You will want to start off with a global find/replace in files and do a case sensitive find/replace for "Foo" and "foo" and replace them with your SDK name.
- Double check package.json was properly modified and replace the github repository and any other properties with your values.
- Revise the token class to fit your your authorization server returns when you request a token.   What's included is pretty standard, so this step might be optional.
- Open up config.js and replace the `userAgent` property with what you would like to use.  Replace the endpoints with your own.
- Create a `.env` file and create any environment variables that will need to be loaded.   By default, `FOO_CLIENTID` & `FOO_SECRET` are needed for authorization to work.   For development work, a `ENVIRONMENT` variable is also supposed.   See `lib\helpers\environment.helper.js`.
- Run `npm i` to install all dependencies and you should be good to go.   If you have any package issues, you may want to run `npm i mocha istanbul jsdoc -g` and install the executable packages globally.
- Fill in your readme and you're good to go!

### Optional Steps

- Sign up for a [Travis CI](https://travis-ci.org) and [Coveralls](https://coveralls.io) accounts.  Configuration files are already included, though you will need to add your token from Travis CI to `.travis.yml`

### Available Commands

- `npm tests` - Runs tests
- `npm run coverage` - Runs tests and calculates code coverage metrics.  Outputs to `coverage` folder.
- `npm run generate-docs` - Generates the JSdoc documentation.
- `npm run coveralls`

## Architecture

The architecure is straight forward and should be easy to follow.

```bash
├── lib
│   ├── helpers
│   │   ├── environment.helpers.js  <-- Gets your environment.
│   ├── models
│   │   ├── token.model.js <-- Token model.    To be used as a pattern module, but needed by thr auth module.
│   ├── modules
│   │   ├── auth.module.js <-- Auth module.  Used to handle authorization
│   │   ├── foo-api.module.js <-- Super class containing methods needed by sub-classes to call your API.   All sub classes inherit this.
│   │   ├── ping.module.js <-- Starter module.  Extends Foo class in foo-api.module.js   To be used as a pattern example.  Can be deleted
├── spec
│   ├── foo-api.spec.js <-- Unit tests
│   ├── manual-tests.js <-- Used for Visual Studio Code debugging
├── index.js <-- entry point.   Exports the top-level namespace.   Add new modules to Foo object to expose them to the user
├── .config.js <-- Contains configuration info
├── .env <-- used for environment settings.
├── .jsdoc.json
├── .travis.yml
├── .coveralls.yml
├── LICENSE
├── README.MD
```

### Conventions

- Private methods and properties are prefixed with an underscore.   These are methods and properties needed by your public methods, but in general aren't meant to be used with your SDK.
- Filenaming uses the Angular CLI style.   `<name with dashes>.<type>.js`

## Tips

## Contributing

- Clone the repo on your local machine
- run `npm i` to install depedencies.
- Run `npm run coverage` to run tests and calculate code coverage.
- Run `npm run generate-docs` to generate the docs

### Debugging in VS Code

The recommended editor for working on the code is Visual Studio code, which is has a debug configuration already setup.
In the specs folder, modify the file `manual-tests.js` to run through the code you desire to debug.  When you're ready, select the "debug" icon in the pane and click "launch program" and it will hit any breakpoints you set.

See also: [Visual Studio Code - Debugger Documentation](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations)

### Pull Requests Welcome
