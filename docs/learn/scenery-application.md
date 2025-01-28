--8<-- "api-reference-snippets.md"

<link rel="stylesheet" href="/css/examples.css">

# Scenery Application

## Overview

This page covers creating a new Scenery-based web application with SceneryStack.

??? note "Prerequisites"
    Before setting up your development environment, ensure the following tools are installed:

    1. **Command Line Interface:** Use Terminal (macOS/Linux) or Command Prompt (Windows).
    2. **Git:** Download from [git-scm.com](https://git-scm.com/downloads) or install via Xcode command-line tools on macOS/Linux.
    3. **Node.js and npm:** Install the latest version from [Node.js](https://nodejs.org/).

## Getting Started

It is recommended to start new application projects by using a template.

To create a new Scenery application, run the following command:

```shell
npm create scenerystack@latest
```

The prompts will guide you through the process of creating a new Scenery application, and will print out instructions
to be able to view the application in your browser.

It will ask about your choice of bundler ([Vite](https://vite.dev/) and [Parcel](https://parceljs.org/) are the two
options), and whether you would like to use [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/). The
project will be created under a directory with the same name as the picked project name.

## Using the Template

The template will create a new Scenery application that will have one [Display] that will be (continuously) sized to
take up the full window size. In addition, it will have a [Node] named `rootNode` where all of the application's
content will be added.

Please see the [Scenery Basics](./scenery-basics.md) guide for more information on how to use Scenery.

## Content

In the template, it fills in some example content:

```ts
// A rectangle that will rotate (center at the origin)
const rotatingRectangle = new Rectangle( -150, -20, 300, 40, {
  fill: '#ccc',
} );
const contentText = new Text( 'Content goes here', {
  font: '24px sans-serif',
} );

// Assign the children to the root node (text on top)
rootNode.children = [ rotatingRectangle, contentText ];
```

This can be replaced with arbitrary Scenery nodes (the children of the `rootNode` can be any Scenery nodes).

## Layout

It also sets up some simple layout logic:

```ts
// Center the text and the rectangle dynamically
layoutBoundsProperty.link( bounds => {
  contentText.center = bounds.center;
  rotatingRectangle.translation = bounds.center;
} );
```

Layout can also be done with [HBox], [VBox], [GridBox], and [ManualConstraint]. See the
[Scenery Layout](./scenery-layout.md) guide for more information.

## Animation Loop

The template sets up a simple animation loop:

```ts
// Frame step logic (dt is in seconds)
display.updateOnRequestAnimationFrame( dt => {
  if ( resizePending ) {
    resize();
  }

  // Rotate the rectangle
  rotatingRectangle.rotation += 2 * dt;
} );
```

It will lazily update the size of the [Display], and rotate the rectangle at a rate of 2 radians per second.

While most SceneryStack logic is handled based on event listeners, for many times of animations, it is more efficient to
use the `updateOnRequestAnimationFrame` method (to run things every frame).

## More Information

See the [Scenery Basics](./scenery-basics.md) guide for more information on how to use Scenery. The
[Creating an Interactive Figure](./tutorials/creating-an-interactive-figure.md) tutorial is a good next step to learn
from.