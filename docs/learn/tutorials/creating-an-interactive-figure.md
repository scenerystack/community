# Creating an Interactive Figure

!!! warning "Under Construction"
    This section and others in Getting Started with SceneryStack are under heavy revisement
    and will be updated in January 2025.

??? note "Prerequisites"
    Before setting up your development environment, ensure the following tools are installed:

    1. **Command Line Interface:** Use Terminal (macOS/Linux) or Command Prompt (Windows).
    2. **Git:** Download from [git-scm.com](https://git-scm.com/downloads) or install via Xcode command-line tools on macOS/Linux.
    3. **Node.js and npm:** Install the latest version from [Node.js](https://nodejs.org/).

## Overview

This guide will walk through setting up a basic project using SceneryStack and [Vite](https://vitejs.dev/).

## Project Structure

In a fresh directory, we will want to add the barebones files needed:

??? example "index.html"
    ```html
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>SceneryStack Quickstart</title>
                <style>
                    body { margin: 0; }
                </style>
          </head>
          <body>
            <script type="module" src="./main.ts"></script>
          </body>
        </html>
    ```

??? example "main.ts"
    ```js
        console.log( 'Success!' );
    ```

## Installation

1. Install [Node.js](https://nodejs.org/).
2. Run commands to install [SceneryStack](https://scenerystack.org/) and [Vite](https://vite.dev/) (from a terminal inside the directory):

    ```sh
    npm install --save scenerystack
    npm install --save-dev vite
    ```

   NOTE: This will create a package.json file recording these choices.
3. In the terminal, launch Vite by running:

    ```sh
    npx vite
    ```

4. Vite will run a local server (usually printing a URL like `http://localhost:5173/` in the terminal). Opening that URL in a browser should show a blank page.
    ??? warning "If types are undefined"
        Vite seems to sometimes load types in the incorrect order. If you see errors like `Uncaught TypeError: Class extends value undefined is not a constructor or null`, instead try running the Vite preview:
        ```sh
        npx vite preview
        ```
        It will function similarly to the regular Vite server, but will properly order file loads.

## Hello World (Full Page)

For visuals, we will use Scenery's `Display` to show an abstract tree made up of Scenery `Node`s (much like the DOM).

For simplicity, we will use a full-page Display (which will automatically resize to the window size).

First, in the `index.html`, we'll add a `div` to hold the Scenery content:

```html
<div id="scenery"></div>
```

First we'll create the root of the tree:

```js
import { Node } from 'scenerystack/scenery';

const scene = new Node();
```

and we'll want to create a `Display` to show this tree within our `div`:

```js
import { Display } from 'scenerystack/scenery';

const display = new Display( scene, {
  container: document.querySelector( '#hello-world' )
} );
```

Next, lets create some content to show in the scene (some text and a 100x30 red rectangle):

```js
import { Text, Rectangle } from 'scenerystack/scenery';

const text = new Text( 'Hello World', {
  font: '25px sans-serif'
} );
const rectangle = new Rectangle( 0, 0, 100, 30, { fill: 'red' } );
```

Content needs to be added to the tree to be shown. Here we will use a vertical layout container (`VBox`), which center-aligns content by default:

```js
import { VBox } from 'scenerystack/scenery';

scene.addChild( new VBox( {
  children: [ text, rectangle ],
  x: 10, y: 10
} ) );
```

`Displays` do not update automatically (to allow for more control/performance), so we need to tell it to resize when the window resizes and to update visuals on each frame:

```js
display.resizeOnWindowResize();
display.updateOnRequestAnimationFrame();
```

Put all together, it will look like this:

??? example "index.html (Hello World)"
    ```html
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>SceneryStack Quickstart</title>
                <style>
                    body { margin: 0; }
                </style>
          </head>
          <body>
            <div id="hello-world"></div>
            <script type="module" src="./main.ts"></script>
          </body>
        </html>
    ```

??? example "main.ts (Hello World)"
    ```js
        import { Node, Display, Rectangle, Text, VBox } from 'scenerystack/scenery';

        const scene = new Node();
        const display = new Display( scene, {
          container: document.querySelector( '#hello-world' )
        } );
        
        const text = new Text( 'Hello World', {
          font: '25px sans-serif'
        } );
        const rectangle = new Rectangle( 0, 0, 100, 30, { fill: 'red' } );
        
        scene.addChild( new VBox( {
          children: [ text, rectangle ],
          x: 10, y: 10
        } ) );
        
        display.resizeOnWindowResize();
        display.updateOnRequestAnimationFrame();
    ```

## Using Components

TODO: Add a few common components and bind them together.
E.g., Interaction changes another component. Animation happens.

## Accessibility and Inclusive Features

TODO: Add “easy” inclusive features (Pan & Zoom) and a sound (tambo usage).
    Add Alternative Input (tab order, etc)
    Add interactive highlights.
    Add screen reader support
    Tier 1 description
    Something more advanced (pull in Jesse if needed).
    Add Voicing
    Same basics as screen reader.