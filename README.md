# js-mode

Execution-mode helper for JavaScript projects. It reads command-line arguments to decide whether the app runs in dev, prod or debug mode and exposes the result as module-level flags.

**Note:** This repository is archived and read-only.

Package `@ralvarezdev/js-mode` (0.1.9, ES module, no dependencies).

## Installation

npm publication was not verified; installing from GitHub works regardless:

```bash
npm install github:ralvarezdev/js-mode
```

## Usage

```js
import { loadNode, IS_DEBUG, MODE, SAVE, MIGRATE } from "@ralvarezdev/js-mode";

loadNode(); // must be called before reading the flags
```

```bash
node app.js --dev
node app.js --prod --save --migrate
```

## API

- **`loadNode()`** — parses `process.argv` for exactly one of `--dev`, `--prod`, `--debug` (throws `Multiple modes set` or `No mode set` otherwise), plus the optional `--save` and `--migrate`.
- **`loadVite()`** — same, but the mode is read from `--mode <dev|prod|debug>`.
- **Values** — live bindings populated after loading: `IS_DEV`, `IS_PROD`, `IS_DEBUG`, `SAVE`, `MIGRATE`, `MODE`; constants `DEV`, `PROD`, `DEBUG` (`'dev'`, `'prod'`, `'debug'`).

There are no tests.

## License

GNU General Public License v3.0. `package.json` declares `GPL-3.0-only`, matching the `LICENSE` file.
