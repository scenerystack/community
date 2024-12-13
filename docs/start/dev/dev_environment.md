# SceneryStack Development Guide

!!! warning "Under Construction"
    This section and others in Getting Started with SceneryStack are under heavy revisement and will be updated by the end of 2024.

## Introduction

Welcome to the SceneryStack development guide! This document is intended for developers who want to contribute to SceneryStack, an open-source library ecosystem for building interactive educational simulations in HTML5.

SceneryStack is built with a modular approach, making it versatile for creating simulations that integrate features like custom graphics, audio effects, animations, and accessibility. This guide will walk you through setting up your environment, understanding the repository structure, and starting your development journey.

For discussions and feedback, visit the [SceneryStack Discussions forum](https://github.com/orgs/scenerystack/discussions).

---

## Getting Started

### Prerequisites

Before setting up your development environment, ensure the following tools are installed:

1. **Command Line Interface:** Use Terminal (macOS) or Command Prompt (Windows).
2. **Git:** Download from [git-scm.com](https://git-scm.com/downloads) or install via Xcode command-line tools on macOS.
3. **Node.js and npm:** Install the latest version from [Node.js](https://nodejs.org/). After installation, run:

   ```sh
   npm config set save false
   npm config set package-lock false
   ```

4. **Grunt CLI:** For building simulations, install Grunt globally:

   ```sh
   npm install -g grunt-cli
   ```

5. **HTTP Server:** To serve files locally, install a lightweight server:

   ```sh
   npm install -g http-server
   ```

### Setting Up the Project Directory

1. Create a directory for the source code:

   ```sh
   mkdir scenerystack
   cd scenerystack
   ```

2. Clone the repository:

   ```sh
   git clone https://github.com/scenerystack/perennial
   ```

3. Run the repository setup script:

   ```sh
   ./perennial/bin/clone-missing-repos.sh
   ```

### Installing Dependencies

Install project dependencies:

1. Navigate to the required directories and run:

   ```sh
   cd chipper
   npm install
   cd ../perennial
   npm install
   cd ../perennial-alias
   npm install
   ```

---

## Development Workflow

### Transpiling TypeScript

1. Navigate to the build tools directory:

   ```sh
   cd chipper
   ```

2. Run the TypeScript transpiler with live reloading:

   ```sh
   grunt transpile --live
   ```

### Running a Simulation

1. Serve the files locally:

   ```sh
   cd scenerystack
   http-server -c-1
   ```

2. Open your browser and navigate to:

   ```sh
   http://localhost:8080/example-sim/example-sim_en.html
   ```

### Modifying and Testing

- Modify the simulation source code in your text editor.
- Refresh the browser to see the changes.

### Building a Simulation

To create a production-ready build:

1. Navigate to the simulation directory:

   ```sh
   cd example-sim
   ```

2. Run the build command:

   ```sh
   grunt --brands=adapted-from-phet
   ```

3. Access the built simulation at:

   ```sh
   http://localhost:8080/example-sim/build/adapted-from-phet/example-sim_en_adapted-from-phet.html
   ```

---

## Repository Overview

SceneryStack libraries are modular and follow the **Model-View-Controller (MVC)** design pattern. Here’s a breakdown of key repositories:

### Core Libraries

- **[Dot](https://github.com/scenerystack/dot):** Core math utilities (vectors, matrices).
- **[Axon](https://github.com/scenerystack/axon):** Event-driven architecture with properties and emitters.
- **[Tandem](https://github.com/scenerystack/tandem):** Support for name-object registration and instrumentation.

### Rendering and UI

- **[Scenery](https://github.com/scenerystack/scenery):** Graphics rendering engine (SVG, Canvas, WebGL).
- **[Sun](https://github.com/scenerystack/sun):** UI components like buttons and sliders.
- **[Twixt](https://github.com/scenerystack/twixt):** Animation and tweening.

### Interaction and Accessibility

- **[Tambo](https://github.com/scenerystack/tambo):** Audio effects and sonification.
- **[UtteranceQueue](https://github.com/scenerystack/utterance-queue):** Accessibility support via ARIA live regions.
- **[Tangible](https://github.com/scenerystack/tangible):** Tangible input via computer vision.

### Tooling

- **[Chipper](https://github.com/scenerystack/chipper):** Build tools for simulations.
- **[Sherpa](https://github.com/scenerystack/sherpa):** Third-party libraries.

---

## Contributing

### Coding Standards

- Follow the [SceneryStack Code Style Guide](https://github.com/scenerystack/phet-info/blob/main/code-style-guide.md).
- Use ESLint for linting:

  ```sh
  grunt lint
  ```

- Add comments and documentation for maintainability.

### Testing

- Run unit tests after modifications:

  ```sh
  cd tests
  open unit-tests.html
  ```

- Use query parameters for debugging:
  - `?ea`: Enable assertions.
  - `?showPointerAreas`: Visualize touch/mouse input regions.

### Submitting Changes

1. Create a new branch for your feature or fix.
2. Commit changes with clear messages referencing any relevant issues.
3. Submit a pull request for review.

---

## Resources

- **[Developer Community](../../community/join.md):** For community support and feedback.
- **[Example Simulation](https://github.com/scenerystack/example-sim):** A template to create new simulations.
