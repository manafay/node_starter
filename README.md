# node-starter

Node development using [eslint](https://palantir.github.io/tslint) for linting, [ava](https://github.com/avajs/ava) for unit testing and [nodemon](https://github.com/remy/nodemon).

## Usage

1. Install [nodejs](https://nodejs.org/en/). I highly recommend using [nvm](https://github.com/creationix/nvm). If you are on mac or ubuntu, you could use the following command to install nodejs. It's from my [lean-dotfiles](https://gitlab.com/seartipy/lean-dotfiles) configuration.

    On Mac

        curl -L j.mp/srtpldf > ~/setup && bash ~/setup nodefaults web

    On Ubuntu

        wget -qO- j.mp/srtpldf > ~/setup && bash ~/setup nodefaults web

2. Clone this repository and install npm packages. Make sure you have [git](https://git-scm.com/) installed.

        git clone https://gitlab.com/pervezfunctor/node-starter.git
        cd node-starter
        npm install

3. Start server

        npm start

    Now you can edit `src/app.js` in any editor and see your changes in browser immediately. You could use `npm test` to run tests and `npm lint` for linting all files in `src` folder.

4. Setup your editor

    If you use `atom`, install `atom packages`

        apm install file-icons platformio-ide-terminal project-manager last-cursor-position atom-beautify linter language-babel emmet autoclose-html atom-ternjs linter-eslint linter-jsonlint

    If you use `visual studio code`, install `visual studio code extensions`

        code --install-extension EditorConfig.EditorConfig
        code --install-extension msjsdiag.debugger-for-chrome        
        code --install-extension dbaeumer.vscode-eslint

    On Mac, you might have to [install shell command](https://code.visualstudio.com/docs/setup/mac).

    If you use `emacs`, make sure you install eslint and related packages globally

        npm install -g eslint eslint-plugin-import eslint-config-airbnb-base


## License

MIT
