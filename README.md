# Project Name

Laboris ipsum reprehenderit occaecat aute commodo nisi voluptate ullamco. Culpa amet nisi et non ut pariatur dolor commodo irure aliqua eiusmod culpa eu ullamco. Pariatur adipisicing occaecat enim velit aute voluptate ullamco. Fugiat qui labore dolor officia eu proident ad occaecat irure in velit elit. Aute amet pariatur exercitation fugiat in minim tempor elit pariatur. Nulla ipsum labore consequat anim cupidatat sunt qui id id.

## Requirements

* node ```^8.9.4```
* npm ```^5.3.0```

## Installation

After confirming that your system meets the requirements you can start working on the project by doing the following:

```sh
git clone ssh://tick42.com/
cd bootstrap
npm install
npm run git-config
``` 

## Running the application
Simply run ```npm run start``` to start developing. This will start a dev server at [http://localhost:3000](http://localhost:3000)

## Technology stack
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Redux Logic](https://github.com/jeffbski/redux-logic)
* [React Router](https://reacttraining.com/react-router/)
* [Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)

## Development stack
* [Nodejs](https://nodejs.org/en/)
* [webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)

## Tests stack

* [WebdriverIO](http://webdriver.io/)
* [Cucumber](https://cucumber.io/)
* [Chai](http://chaijs.com/)
## Project structure
```sh
..
.
├── config                   # Build related config files
├── data                     # Raw JSON files used by the mock dev server.
├── dist                     # Not distributed with the repo. Contains the production build.
├── git-hooks                # 
├── packages                 # Local node packages
├── src                      # Application source code
│   ├── components           # Global Reusable Components
│   ├── store                # Redux-specific pieces
│   │   ├── createStore.js   # Create and instrument redux store
│   │   └── reducer.js       # Reducer registry
│   ├── styles               # Application-wide styles 
│   ├── index.html.ejs       # The main application template.
│   ├── index.js             # Browser normalization and polyfills
│   ├── router.js            # Main route definitions
│   ├── containers           # Global Reusable Container Components
│   └── layouts              # Components that dictate major page structure
└── test                     # Applications tests
    └── e2e                  # End to end tests with cucumber and web driver.
```
## npm scripts
npm run ```<script>```| Description 
----------------------|----------------
start  | Starts dev server at [http://localhost:3000](http://localhost:3000)
build | Creates a production build in ```./dist```
test  | Runs tests
postinstall | Rebuilds node-sass. This step is redundant most of the time, but protects against issues when the current nodejs version is different than the one originally used to install node-sass.
git-config | Configures git to use the hooks from git-hooks
report | Generates user friendly test report. Run after test.

## Git hooks
Name  | Description 
----------------------|----------------
post-merge | Runs ```npm install``` if package.json was changed. This will also trigger ```npm postinstall``` script (see below)
