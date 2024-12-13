# Setup Guide

!!! warning "Under Construction"
    This section and others in Getting Started with SceneryStack are under heavy revisement
    and will be updated by the end of 2024.

For creating general web interactive content with SceneryStack, it is recommended to use the
[SceneryStack npm package](https://www.npmjs.com/package/scenerystack) from the
[npm package repository](https://www.npmjs.com/), along with a build/bundling tool.

The guide below will set up a project structure that uses [Vite](https://vitejs.dev/) to serve and build some SceneryStack examples.

## Already set up?

Choose your development path below:

### Path A: Using SceneryStack for Web Projects

Looking to take advantage of SceneryStack in your web project?

[Integrate SceneryStack into your Project](./web/web_overview.md){ .md-button .md-button--secondary }

### Path B: Using SceneryStack Framework to Make Highly Interactive Experiences

Want to leverage SceneryStack for a fullscreen project?

[Use the Full Framework](./web/web_overview.md){ .md-button .md-button--secondary }

### Path C: Using SceneryStack Framework to Make an Interactive Simulation

Want to leverage SceneryStack to make your own interactive simulation? Whether you plan to work with the PhET project or brand it yourself, you'll want to use the whole framework.

[Use the Full Framework](./sim/sim_overview.md){ .md-button .md-button--secondary }

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

## THREE.js Integration

TODO: simplified mobius/three example

## React Integration

The Scenery `Display` can be used as a React component, allowing for Scenery content to be easily added to a React application.

```jsx
import { Rectangle } from 'scenerystack/scenery';
import { Scenery } from 'scenerystack/react';

const ExampleComponent = () => {
  return (
    <Scenery node={new Rectangle( 0, 0, 100, 30, { fill: 'red' } )}/>
  );
}
```

??? warning "React integration is in progress"
    This integration has not been widely tested or deployed.

A React Fiber renderer is planned for SceneryStack, somewhat akin to [React Three Fiber](https://r3f.docs.pmnd.rs/), which will allow writing SceneryStack visuals in a React-like style.

## Debugging

It is possible to enable SceneryStack's internal assertions with the following:

```js
import { enableAssert } from 'scenerystack/assert';

enableAssert();
```

Note that SceneryStack is built with TypeScript in mind, so most runtime type checks were removed in favor of compile-time checks.

## I don't know JavaScript development, how can I get started?

Welcome to the wonderful world of interactive web development! There are many ways to get started and many resources on the internet to support you.

You will want to pick up a basic understanding of HTML web development and a good understanding of JavaScript before getting started with SceneryStack.

The internet is full of resources to help you on your journey and a quick search will turn up many. Consider resources like [freecodecamp.com](https://www.freecodecamp.org/), which has also begun providing [courses in Spanish](https://www.freecodecamp.org/news/javascript-course-in-spanish/). Take a look at the bottom of the page for other tips and resources!

As soon as you can, start tinkering with SceneryStack and building projects to become familiar with the framework and begin your goal project!

!!! warning
    Using TypeScript is recommended if possible. At this time, most of SceneryStack is written in [TypeScript](https://www.freecodecamp.org/news/learn-typescript-beginners-guide/#:~:text=cheat%20sheet%20PDF-,What%20is%20TypeScript%3F,-TypeScript%20is%20a) (TS), while some are still written in JavaScript (JS), with future updates to the libraries converting JS to TS. The [simulation tooling](../info_sync/simulation_development_overview.md#building-the-simulation-with-chipper) in use by PhET to create simulations assumes TS integration concerning type enforcement, and you may run into difficulties using JS. Please keep this in mind during your learning journey and do not be afraid to ask for help!

!!! tip "A few extra tips to get started"

    1. A good place to start with JavaScript is [*Eloquent JavaScript*](https://eloquentjavascript.net/) -- if you are not familiar with the language it has many quirks. It would be worth your time to go through as much of this resource as possible, but certainly the first 11 chapters or so.
       1. Other helpful resources are: [*Effective JavaScript* by Dave Herman](http://effectivejs.com/) (Chapters 1-3) and [Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js/).
    2. SceneryStack libraries are heavily based on MVC (model view controller) patterns, so probably a good idea to familiarize yourself with this general idea. See [Software Design Patterns](../info_sync/software_design_patterns.md#model-view-controller-mvc) for more.
    3. Familiarize yourself with version control, specifically [Git](https://www.freecodecamp.org/news/gitting-things-done-book/).
    4. As mentioned above, we have also switched to using TypeScript (with ~70% of SceneryStack code now converted) - so you might want to look at the power of that language, which works with JavaScript but has a lot of advantages. Some developers ordered and read this book *Effective TypeScript* ([amazon link](https://www.amazon.com/Effective-TypeScript-Specific-Ways-Improve-dp-1492053740/dp/1492053740/)).
