# Overview

!!! warning "Under Construction"
    This section and others in Getting Started with SceneryStack are under heavy revisement
    and will be updated by the end of 2024.

Welcome to SceneryStack! This page will give you a brief overview of the SceneryStack library and its features.

## What is SceneryStack?

SceneryStack is an **open-source TypeScript framework** for creating powerful, interactive, and accessible web
experiences. It provides:

- **Flexible model-view architecture** for building complex, interactive web applications.
- **Cross-platform consistency** for graphics and user input, avoiding browser-specific quirks and ensuring reliable
  behavior across devices and browsers.
- **Robust accessibility features**, including dynamic screen-reader descriptions, alternative input support (e.g.
  keyboard navigation), and dynamic spoken content through Web Speech.

For a full list of features and capabilities, check out all of the [features](features.md).

## Ways to Use SceneryStack

SceneryStack can be used in three primary ways:

1. **Simulations**  
   Create interactive, PhET-style simulations with SceneryStack managing rendering, input, and layout for dynamic,
   educational content.

2. **Applications**  
   Build full-screen web applications where SceneryStack handles the UI, input, and rendering as the core framework.

3. **Standalone Library**  
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

## Features

## Parts of SceneryStack

### The Model

#### Axon

### The View

#### Scenery

## Imports

SceneryStack is built from a collection of modules, so its imports are split into different parts.
For instance, to import a Scenery `Display`, you would use the following:

```js
import { Display } from 'scenerystack/scenery';
```

## Debugging

It is possible to enable SceneryStack's internal assertions with the following:

```js
import { enableAssert } from 'scenerystack/assert';

enableAssert();
```

Note that SceneryStack is built with TypeScript in mind, so most runtime type checks were removed in favor of compile-time checks.
