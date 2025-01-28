--8<-- "api-reference-snippets.md"

<link rel="stylesheet" href="/css/examples.css">

# Scenery Application

!!! warning "Under Construction"
    This section and others in Getting Started with SceneryStack are under heavy revisement
    and will be updated in January 2025.

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