# Overview

!!! warning "Under Construction"
    This section and others in Getting Started with SceneryStack are under heavy revisement
    and will be updated by the end of 2024.

Welcome to SceneryStack! This page will give you a brief overview of the SceneryStack library and its features.

## What is SceneryStack?

## Ways to Use SceneryStack

SceneryStack is a TypeScript library. While it can be used with JavaScript, TypeScript is recommended since the API doesn’t enforce runtime type checks, making JavaScript usage more challenging.

### Simulations

(link to setup)

### Applications

(link to setup)

### Standalone Library

(link to setup)

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
