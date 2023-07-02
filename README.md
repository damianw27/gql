## Main setup

To run the application we need installed Node.js to make application possible to build. We should install the latest LTS version (v18.16.1 as of 02/07/2023) and latest version of yarn (1.22.19 as of 02/07/2023).

This setup process should fit all platforms. The only difference is in Node.js API installation. There are dedicated versions of Node for each platform.

### Node installation

We need to download following installer and install it in our machine:

```
https://nodejs.org/dist/v18.16.1/node-v18.16.1-x64.msi
```

After installation, we should check is Node.js installed properly by executing following command in cmd:

```
node --version
```

If everything is fine we should see currently installed version of Node, if there are some problems, probably they are related to system environment variables.

### yarn installation

**Important**
Before start this part you should have installed and verified Node.js.

Yarn is alternative package manager for Node dependencies. To install it we need to use `npm` by executing following command:

```cmd
npm install --global yarn
```

After installation, we should check is everything alright with following command:

```
yarn --version
```

Execution of that command should display the version of yarn. If Node is already installed properly there should be no problems with this installation.

## ANTLR4 library with TypeScript support

In case of implementation, the library needed to be prepared for better support of TypeScript. The official version lacks of good typings definitions.

### Setup

First element of setting up the application is installing the needed dependencies. In this step are installed such elements like TypeScript, Webpack and other related stuff.

First of all we should be in following directory in our command line:

```
<project_root>/antlr
```

To install dependencies we need to execute following command:

```cmd
yarn install
```

It should take from few seconds to two minutes depending on internet connection. If there will be success message the library is ready to be built.

### Build

First of all we need to run compilation proces based on Webpack. This process will produce few files dependant on running environment. It's related to fact that we should be able to use the application on Web Browser environment and in Node.js. In case of Node.js environment it could be unclear, but we need to run this library in integration test which are based on Node environment. 

First of all we should be in following directory in our command line:

```
<project_root>/antlr
```

To build the source code we need to execute following command:

```cmd
yarn build
```

After build success we can now create special link to be able to use that library in local environment. To create this link we need to execute following command:

```cmd
yarn link
```

If process will be successful then we are ready to use our library.

## Grammar

Grammar represents implementation of GQL grammar in ANTLR4. In this part of the project we generate the parser and lexer implementation.  To be able to compile this library we need to first build the special version of ANTLR TypeScript runtime mentioned in upper section. We need to make also some adjustments to generated files in case to add compatibility with our own implementation of typing in ANTLR4.


### Setup

First of all we should be in following directory in our command line:

```
<project_root>/grammar
```

First element that we need to do is to attach already create link to this repository. We can achieve that with following command:

```
yarn link @gql-grammar/antlr4
```

Then we can proceed to dependencies installation step. We need to execute following command:

```
yarn install
```

Now we are ready to start build proces of the parser library.

### Generating the parser and lexer source

The first part is to make ANTLR4 implementation of grammar is generating the TypeScript bindings.

First of all we should be in following directory in our command line:

```
<project_root>/grammar
```

Now we need to execute following command which will generate source code for us:

```
yarn build:grammar
```

After executing with success we will se new directories structure in our `src` folder. All generated files will be present in following directory:

```
<project_root>/grammar/src/versions/latest
```

Now after generating those files we need to make sure that they are not using `antlr` dependency, we need to replace it with `@gql-grammar/antlr`.

```
"import /* something */ from 'antlr4'" -> "import /* something */ from '@gql-grammar/antlr'"
```

We also need to build the second grammar with command:

```
yarn build:grammar1
```

The output files will be in following directory:

```
<project_root>/grammar/src/versions/pg-schema
```

The same as with GQL grammar we should switch the default ANTLR import with our custom one.

### Building the library

First of all we should be in following directory in our command line:

```
<project_root>/grammar
```

To build the library source code wee need to use following command:

```
yarn build:lib
```

The after successful build we need to create link for this library with following command:

```
yarn link
```

## Worker

Worker provides some special asynchronous functionalities to our editor implementation. We need to build the custom ANTLR library and GQL parser library to be able to build this one.

## Setup

First of all we should be in following directory in our command line:

```
<project_root>/worker
```

First element that we need to do is to attach already created ANTLR dependency link to this repository. We can achieve that with following command:

```
yarn link @gql-grammar/antlr4
```

Second thing is to link the generated parser library:

```
yarn link @gql-grammar/core
```

Then we can proceed to dependencies installation step. We need to execute following command:

```
yarn install
```

## Build

First of all we should be in following directory in our command line:

```
<project_root>/worker
```

To build the source code we need to execute following command:

```cmd
yarn build
```

After build success we can now create special link to be able to use that library in local environment. To create this link we need to execute following command:

```cmd
yarn link
```

## Editor

Editor is the main element of implementation. It's an interface of communication of our parser with user. To start the application we need to build worker, custom antlr and grammar.

### Setup

First of all we should be in following directory in our command line:

```
<project_root>/editor
```

First element that we need to do is to attach already created worker dependency link to this repository. We can achieve that with following command:

```
yarn link @gql-grammar/worker
```

Then we can proceed to dependencies installation step. We need to execute following command:

```
yarn install
```

### Start application

To start the application we simply need to execute following command in the CLI:

```
yarn serve
```

After success compilation the new browser window will open with our application interface running.

## Tests

The unit test implemented in worker and editor can be simple run by typing following command in CLI:

```
yarn test
```

We should be in proper location for this action.

In case of performance tests we need to have running application. First of all we need to move to following directory:

```
<project_root>/tests
```

Second thing we should do is to install all needed dependencies with following command:

```
yarn install
```

If everything is ready and we are sure that application is running, we can then start tests.

To start End-to-End tests type following command:

```
yarn run:e2e
```

The output of the tests will be listed in command line interface.

To start performance tests type following command:

```
yarn run:performance
```

The output of the tests will result with generation of few files which will contain the result in tex and json format.
