# opquiz
> A Vue.js project
* [Vue 2 + Firebase: How to build a Vue app with Firebase authentication system in 15 minutes](https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c)
* [Building Real Time Single Page Web Applications With Vue.js 2 and Firebase](https://medium.com/codingthesmartway-com-blog/vue-js-2-firebase-e4b2479e35a8)
* [JetBrains Vue.js (Ultimate Edition)](https://www.jetbrains.com/help/idea/vue-js.html)
* [Firebase DB security](https://firebase.google.com/docs/database/security/quickstart?authuser=0)

## Preparation
### Dependencies
```
npm install -g vue-cli
npm install ——save firebase vuefire
npm install -g firebase-tools
```

### Project setup
(not needed to get started, just kept as a reminded what was done)
```
vue init webpack opquiz

? Target directory exists. Continue? Yes
? Project name opquiz
? Project description A Vue.js project
? Author mattiasbpersson <mattiasbpersson@gmail.com>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Set up unit tests Yes
? Pick a test runner jest
? Setup e2e tests with Nightwatch? Yes
? Should we run `npm install` for you after the project has been created? (recommended) npm

   vue-cli · Generated "opquiz".
```

### Firebase CLI
```
firebase login
firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  /home/matper/Projects/opquiz

Before we get started, keep in mind:

  * You are initializing in an existing Firebase project directory

? Which Firebase CLI features do you want to setup for this folder? Press Space to select features, then Enter to confirm y
our choices. Hosting: Configure and deploy Firebase Hosting sites

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

i  .firebaserc already has a default project, skipping

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? .
? Configure as a single-page app (rewrite all urls to /index.html)? No
✔  Wrote ./404.html
? File ./index.html already exists. Overwrite? No
i  Skipping write of ./index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!
firebase deploy
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
