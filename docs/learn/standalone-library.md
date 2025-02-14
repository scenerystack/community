--8<-- "api-reference-snippets.md"

# Standalone Library

## Overview

This page will cover the different ways to include the SceneryStack library.

??? note "Prerequisites"
    Before setting up your development environment, ensure the following tools are installed:

    1. **Command Line Interface:** Use Terminal (macOS/Linux), Command Prompt (Windows), or your preferred CLI.
    2. **Git:** Download from [git-scm.com](https://git-scm.com/downloads) or install via Xcode command-line tools on macOS/Linux.
    3. **Node.js and npm:** Install the latest version from [Node.js](https://nodejs.org/).

There are two main ways to integrate SceneryStack:

1. Use the **[NPM Package](https://www.npmjs.com/package/scenerystack)** and a bundler (like [Vite](https://vitejs.dev/)) to handle dependencies and build the final project.
2. Use a **bundled build** of SceneryStack directly in the browser.

It is generally recommended to use the NPM package for new projects, as the bundled builds are larger in size and include
all of SceneryStack (including parts that may not be needed).

## Using the NPM Package

SceneryStack can be included in an existing project by installing the package:

```shell
npm install --save scenerystack
```

This will add SceneryStack to the project's dependencies, and it can be imported in the project's code:

```js
import { Display } from 'scenerystack/scenery';
```

To see this in action, see the tutorial [Creating an interactive Figure](./tutorials/creating-an-interactive-figure.md).

## Using Bundled Builds

SceneryStack has both ESM and UMD builds available for use in the browser.

For file size and tree shaking, it is generally recommended to use the NPM package. Even the minified bundles are
very large, and include all of SceneryStack (including parts that may not be needed).

### ESM (ES Modules)

A [production](https://unpkg.com/scenerystack@latest/dist/scenerystack.esm.min.js) or [development](https://unpkg.com/scenerystack@latest/dist/scenerystack.esm.js) ESM build can be included in a webpage:

```html
<script type="module">
  import { Display } from 'https://unpkg.com/scenerystack@latest/dist/scenerystack.esm.min.js';
</script>
```

### UMD (Using globals)

A [production](https://unpkg.com/scenerystack@latest/dist/scenerystack.umd.min.js) or [development](https://unpkg.com/scenerystack@latest/dist/scenerystack.umd.js) ESM build can be included in a webpage:

```html
<script src="https://unpkg.com/scenerystack@latest/dist/scenerystack.umd.min.js"></script>
<script>
  const Display = scenerystack.Display;
</script>
```

### Versions

It is recommended to download a specific version of SceneryStack, rather than using `@latest`.

## Web Workers

Parts of SceneryStack that don't rely on the DOM (e.g. axon, dot, kite) can be used in web workers. This can be useful
for offloading computation from the main thread, or for running simulations in parallel.

Since the bundled builds currently include code that will not work in the DOM, it is necessary to use the NPM package
and a bundler to run SceneryStack in a web worker.
