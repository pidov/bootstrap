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
Now that the installation is done, you're ready to start the project. Simply run ```npm run start``` to start developing.

Several additional scripst are available:

npm run ``<script>``  | Description 
----------------------|----------------
start | Starts dev server at http://localhost:3000 
build | Creates a production build in ./dist
test  | Runs tests
git-config | Configures git to use the hooks from git-hooks

## Technology stack
React
Redux 

## Project structure
```
.
..
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
```
### Git hooks

### npm hooks

### Miscellaneous



# Editorconfig
