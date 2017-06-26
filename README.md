# gitbook-commander

[![Build Status][travis-badge]][travis-url]
[![Greenkeeper badge][greenkeeper-badge]][greenkeeper-url]

An alternative lightweight CLI for the awesome [GitBook][] documentation
generator that, unlike the official CLI, doesn't assume it is installed
globally (and, to the contrary, is built specifically for being used in npm
scripts) and does not install anything on its own behalf.

## Installation and Usage

```sh
$ npm install --save-dev gitbook
$ npm install --save-dev gitbook-commander
```

After that, the `gitbook-local` command will be available for you to use from
npm scripts in `package.json` or via [npx][].

For example, you may add this or something similar to your `package.json`:

```json
{
  "scripts": {
    "build-docs": "gitbook-local build"
  }
}
```

and run

```sh
$ npm run build-docs
```

to build your documentation. GitBook stays isolated inside your `node_modules`
🎉

## Contributing

Issues and PRs are welcome if you spot anything worth fixing! ❤️

This project uses [Conventional Commits][] and the JavaScript code style
covered by its own [ESLint][] config (no textual description, sorry 😔, just
follow the surrounding code and run the linter via `npm run lint` or as a part
of the general testing process via `npm test`).

Please adhere to the [Code of Conduct](CODE_OF_CONDUCT.md) for all the
interaction in this repo.

## License

MIT

[travis-badge]: https://travis-ci.org/aqrln/gitbook-commander.svg?branch=master
[travis-url]: https://travis-ci.org/aqrln/gitbook-commander
[greenkeeper-badge]: https://badges.greenkeeper.io/aqrln/gitbook-commander.svg
[greenkeeper-url]: https://greenkeeper.io/
[conduct-badge]: https://img.shields.io/badge/code%20of%20conduct-contributor%20covenant-brightgreen.svg
[GitBook]: https://github.com/GitbookIO/gitbook
[npx]: https://github.com/zkat/npx
[Conventional Commits]: https://conventionalcommits.org/
[ESLint]: https://github.com/eslint/eslint
