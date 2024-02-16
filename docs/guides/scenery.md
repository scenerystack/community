# Getting Started

See the [Stack List](../guides/scenerystack_list.md) for all of the libraries that make up SceneryStack.

## Get to know Scenery :fontawesome-solid-mountain-sun:

When using SceneryStack, Scenery, the scene graph, will act as the foundation for your entire project. Scenery is used for representing graphics (rendering to SVG, canvas or WebGL), handling input and general abstraction for the browser and cross-platform support. Shapes are represented using [kite](https://github.com/phetsims/kite). Observer and emitter patterns use [axon](https://github.com/phetsims/axon). Scenery provides support for alternative input and accessibility features in your project.

Check out the links below to get familiar with Scenery and some examples using Scenery:

<div class="grid cards" markdown>

-   [Tour of Scenery](https://phetsims.github.io/scenery/doc/a-tour-of-scenery.html)

    ---

    General concepts that Scenery is based on.

-   [Scenery Layout](https://phetsims.github.io/scenery/doc/layout)

    ---

    Layout documentation for customizable containers.

-   [Scenery Hello World](https://phetsims.github.io/scenery/examples/)

    ---

    Simple Scenery examples to get you started.

-   [Scenery API Documentation](https://phetsims.github.io/scenery/doc/)

    ---

    The full Scenery documentation for reference, including installation.

</div>

## `phet-lib`

You will probably want to make use of more than just Scenery for your project. `phet-lib` contains the [core SceneryStack libraries](scenerystack_list.md#scenerystack-core) in one package. 

Your projects can get started after creating a simple HTML

??? example "Example HTML file"
    ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <title>Example Project</title>

        <script src="./js/lib/phet-lib.min.js"></script>
        <script type="module" src="dist-webpack/bundle.js"></script>
        </head>
        <body>
        </body>
        </html>
    ```
Download `phet-lib` from the [phet-lib repository](https://github.com/phetsims/phet-lib) ([*dist* directory](https://github.com/phetsims/phet-lib/tree/main/dist)).

<div class="grid cards" markdown>

- [Download phet-lib](https://github.com/phetsims/phet-lib)
- [Hello World Example (with a11y)](https://github.com/phetsims/scenery-lab-demo)

</div>

Any examples found in the [Scenery documentation above](#get-to-know-scenery) will also work when importing `phet-lib`.

### phet-lib on Node (npm)

phet-lib can be installed directly through Node as an NPM package, available at <https://www.npmjs.com/package/phet-lib>.

[Vite Demo](https://github.com/phetsims/phet-vite-demo) is a demo with simple steps to be able to get started (requires git/npm/node).

> The package is on the larger side as it includes a number of preloads - stay tuned for further optimization!

## Other SceneryStack Library Documentation

<div class="grid cards" markdown>

- [:fontawesome-regular-gem: Kite - shape library](https://phetsims.github.io/kite/)
- [:fontawesome-solid-circle: Dot - mathematics library](https://phetsims.github.io/dot/doc/)

</div>

## In-Code Documentation

Often, the best documentation for each library is available in the code itself. As you navigate through the codebase, you'll find well-documented code with inline comments and annotations that explain how things work. We encourage you to explore the code as it can provide the most accurate and up-to-date information. If you have any questions or need further assistance, please head over to the [Discussions or chat platforms](../community.md).

!!! note
    While the *SceneryStack community* is housed in the SceneryStack GitHub organization, **all libraries for development** using SceneryStack are in the **phetsims** GitHub organization found at <https://github.com/phetsims/>.


## Examples

Check out other projects that make use of SceneryStack libraries on the [Examples](scenery-examples.md) page. You can also check out any [PhET or community-created interactive simulation](simulation-examples.md) to learn from as well.