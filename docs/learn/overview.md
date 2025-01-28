--8<-- "api-reference-snippets.md"

<link rel="stylesheet" href="/css/examples.css">

# Overview

Welcome to SceneryStack! This page will give you a brief overview of the SceneryStack library and its features.

## What is SceneryStack?

SceneryStack is an **open-source TypeScript framework** for creating powerful, interactive, and accessible web
experiences. It provides:

- **Flexible model-view architecture** for building complex, interactive web applications.
- **Cross-platform consistency** for graphics and user input, avoiding browser-specific quirks and ensuring reliable
  behavior across devices and browsers.
- **Robust accessibility features**, including dynamic screen-reader descriptions, alternative input support (e.g.
  keyboard navigation), and dynamic spoken content through Web Speech.
- **Comprehensive UI components**, offering a wide selection of pre-built, customizable elements to efficiently build user interfaces.

For a full list of features and capabilities, check out all of the [features](features.md).

## Ways to Use SceneryStack

SceneryStack can be used in three primary ways:

1. [**Simulations**](#simulations)  
   Create interactive, PhET-style simulations with SceneryStack managing rendering, input, and layout for dynamic,
   educational content.

2. [**Applications**](#applications)  
   Build full-screen web applications where SceneryStack handles the UI, input, and rendering as the core framework.

3. [**Standalone Library**](#standalone-library)  
   Integrate Scenery displays or use specific features (e.g., rendering, modeling, or input) in existing projects
   without relying on SceneryStack as the primary framework.

### Simulations

SceneryStack enables you to build interactive, STEM-focused simulations with the same engaging look and feel
as [PhET](https://phet.colorado.edu) simulations. Simulations created with SceneryStack can be used for educational
tools, academic research, or general exploration of interactive content design.

Simulations built with SceneryStack are dynamic, accessible, and highly customizable, making them an excellent choice
for creating powerful learning experiences. They are particularly suited for visualizing complex concepts in physics,
chemistry, biology, and other STEM fields.

To get started or learn more about creating a simulation, see the [Simulation Guide](simulation.md).

### Applications

SceneryStack can be used to create full-screen web applications with rich, interactive user interfaces. Use Scenery
to build applications that require complex layouts, dynamic content, and interactive elements.

To get started or learn more about creating an Scenery application, see the [Application Guide](scenery-application.md).

### Standalone Library

SceneryStack can be used as a standalone library for interactive visualizations or figures, or to support applications.

To get started or learn more about including SceneryStack as a library, see the [Standalone Library Guide](standalone-library.md).

## SceneryStack Architecture

SceneryStack is built for a **model-view architecture** that separates the data (model) from the presentation (view).

Internally, SceneryStack is divided into a number of modules that handle different aspects of the framework. This
higher-level organization shows up in the typical form of imports. For example, to import a Scenery `Display`, you would
use the following:

```js
import { Display } from 'scenerystack/scenery';
```

### Models

SceneryStack has a flexible model architecture that helps handle highly-interactive and changing model state.

The primary model modules are:

- **Axon**: Patterns for observing both events and changing data. SceneryStack APIs pervasively use the `Property` type,
  which stores data in a observable way.
- **Phet Core**: Core utility functions and types (supporting common software patterns).
- **Dot**: Mathematics types (e.g. vectors, matrices, transformations) for use in models and views.
- **Kite**: Creating and manipulating 2D geometric `Shape` objects.

### Views

SceneryStack primary uses the **Scenery** module for rendering and user input. Scenery has a scene graph structure
(similar to the DOM) built on Scenery `Node`s. Scenery `Display`s take a root `Node` and render it to the screen.

While it is common to use one Scenery `Display` to cover all or most of the screen (for a Scenery Application, or like
[PhET Simulations](https://phet.colorado.edu) do), it is also possible to use multiple `Display`s and place them into
the DOM in traditional ways (e.g. interactive figures).

The primary view modules are:

- **Scenery**: The scene graph and rendering engine.
- **Sun**: Commonly used UI components (e.g. buttons, sliders, checkboxes) for building user interfaces.
- **Scenery PhET**: More educational/simulation-focused UI components (e.g. time controls, arrows, keypads, etc.)

A number of other view modules are available for more specialized tasks:

- **Mobius**: For integrating 3D scenes from [Three.js](https://threejs.org/).
- **Joist**: Code specific to creating [PhET](https://phet.colorado.edu)-style simulations (e.g. navigation bars, screen views, etc.)
- **Tambo**: Sound and sonification support
- **Twixt**: Animation support
- **Bamboo**: Interactive charts and graphs
- **Vegas**: For games made in the [PhET](https://phet.colorado.edu)-like style.
- **Alpenglow**: For creating high-performance WebGPU graphics (under development).

See the [Scenery Basics] guide for more information on how to use Scenery.

## Production and Development

SceneryStack has a few differences between production and development builds

Development builds can have assertions enabled, which can help catch bugs early. These can be enabled with the following:

```js
import { enableAssert } from 'scenerystack/assert';

enableAssert();
```

Note that SceneryStack is built with TypeScript in mind, so most runtime type checks were removed in favor of compile-time checks.

## Imports

SceneryStack allows two styles of imports. The default way is broken up mostly by SceneryStack's internal modules,
and reduces the file-size of code for bundlers without more advanced tree shaking:

```js
// The `Display` is in the `scenery` module.
import { Display } from 'scenerystack/scenery';
```

However, it is also possible to import all non-simulation imports from the `scenerystack` module:

```js
import { Display } from 'scenerystack';
```

This works well for bundlers that fully support tree shaking (e.g. Webpack, Vite, Parcel).

## Documentation

Some parts of SceneryStack have documentation available in here and in the Reference section.

However, sometimes the best documentation for each library is available in the code itself. As you navigate through the codebase,
you'll find well-documented code with inline comments and annotations that explain how things work. We encourage you to
explore the code as it can provide the most accurate and up-to-date information. If you have any questions or need
further assistance, please head over to the [Discussions or chat platforms](../community/join.md).
