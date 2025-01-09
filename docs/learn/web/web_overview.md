# Use SceneryStack in Your Web Project

!!! warning "Under Construction"
    This section and others in Getting Started with SceneryStack are under heavy revisement and will be updated by the end of 2024.

See the [Stack List](../../reference/scenerystack_list.md) for all of the libraries that make up SceneryStack.

## Install

If you haven't, see the [Setup Guide](../setup.md) for instructions on how to add SceneryStack into your project. You can [install the libraries directly from npm](https://www.npmjs.com/package/scenerystack).

## Get to know Scenery

When using SceneryStack, Scenery, the scene graph, will act as the foundation for your entire project. Scenery is used for representing graphics (rendering to SVG, Canvas or WebGL), handling user input (e.g. mouse, touch, keyboard, screen reader) and general abstraction for the browser and cross-platform support. Shapes are represented using [kite](https://github.com/phetsims/kite). Observer and emitter patterns use [axon](https://github.com/phetsims/axon). Scenery provides support for alternative input and accessibility features in your project.

Check out the links below to get familiar with Scenery and some examples using Scenery:

<div class="grid cards" markdown>

- [Tour of Scenery](https://phetsims.github.io/scenery/doc/a-tour-of-scenery.html)

    ---

    Core Scenery concepts

- [Scenery Layout](https://phetsims.github.io/scenery/doc/layout)

    ---

    Layout documentation for customizable containers

- [Scenery Hello World](https://phetsims.github.io/scenery/examples/)

    ---

    Simple Scenery examples to get you started

- [Scenery API Documentation](https://phetsims.github.io/scenery/doc/)

    ---

    The full Scenery documentation for reference (in progress)

</div>

<!-- ## OLD SETUP

Your projects can get started after creating a simple HTML

??? example "Example HTML file"
    ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Example Project</title>
            <script src="./js/lib/scenerystack.min.js"></script>
            <script type="module" src="dist-webpack/bundle.js"></script>
        </head>
        <body>
        </body>
        </html>
    ```

<div class="grid cards" markdown>

- [Hello World Example (with a11y) [DEPRECATED]](https://github.com/phetsims/scenery-lab-demo)

</div>

Any examples found in the [Scenery documentation above](#get-to-know-scenery) will also work when importing `phet-lib`. This approach provides access through the `phet` global variable (e.g. `phet.scenery.Node`), and provides a built JavaScript file without corresponding TypeScript types.

> The package is on the larger side as it includes a number of preloads - stay tuned for further optimization!

### phet-lib on Node (npm)

phet-lib can be installed directly through Node as an NPM package, available at <https://www.npmjs.com/package/phet-lib>.

We have a [Demo using Vite](https://github.com/phetsims/phet-vite-demo) with simple steps to be able to get started (requires git/npm/node).

Using the phet-lib NPM package provides access to the raw PhET code, so it will support type-checking with TypeScript, modules, and partial tree-shaking.

Imports are provided by subpackage as shown below:

```js
import { Property, Emitter } from 'phet-lib/axon';
import { Display, Text, AnimatedPanZoomListener } from 'phet-lib/scenery';
```

> This package also includes all dependencies statically, so it will declare e.g. jQuery/Lodash globally as `window.$` and `window._` respectively. -->

## Demo Project Using SceneryStack

Follow along with a demo that incorporates SceneryStack libraries to create an interactive experience.

[Demo](project_add_demo.md){ .md-button .md-button--accent }

## Other SceneryStack Library Documentation

[See Reference Section](../../reference/scenerystack_list.md) for a list of all the libraries that make up SceneryStack. Some libraries have external documentation available, while others are still in progress.

## In-Code Documentation

Often, the best documentation for each library is available in the code itself. As you navigate through the codebase, you'll find well-documented code with inline comments and annotations that explain how things work. We encourage you to explore the code as it can provide the most accurate and up-to-date information. If you have any questions or need further assistance, please head over to the [Discussions or chat platforms](../../community/join.md).

## More Examples

Check out other projects that make use of SceneryStack libraries on the [Example Showcase](scenery_examples.md) page. You can also check out any [PhET or community-created interactive simulation](../sim/simulation_examples.md) to learn from as well.
