# SceneryStack Repository List

!!! note
    All repositories are located under the phetsims organization, e.g., phetsims/scenery

!!! warning
    All new code in SceneryStack is being developed in TypeScript, but some older repositories still contain JavaScript.

Looking for the best way to start using SceneryStack? Check out the [Pathways](./pathways.md) guide to get started!

[GET STARTED](./pathways.md){ .md-button .md-button--primary }

## SceneryStack: Core

| **Repo** | **Function** | **Language** | **Description**                                                                                                                                                                                                                                                                                            |
|---:|---|---|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [phet-lib](https://github.com/phetsims/phet-lib) | Built Library | JavaScript | Contains built versions of SceneryStack Libraries.                                                                                                                                                                                                                                                         |
| [scenery](https://github.com/phetsims/scenery) | View | TypeScript | Foundational library for representing graphics (rendering to SVG, Canvas or WebGL), handling input and generally abstraction for the browser and cross-platform support. Shapes are represented using kite. Observer and emitter patterns use axon. Support for alternative input and accessibility features. |
| [sun](https://github.com/phetsims/sun) | View | TypeScript | Graphical user interface components, such as buttons and checkboxes which could be useful in any application context. Built using scenery.                                                                                                                                                                 |
| [axon](https://github.com/phetsims/axon) | View | TypeScript | Event-based model and data structures for the observer pattern (Property) and listener pattern (Emitters).                                                                                                                                                                                                 |
| [dot](https://github.com/phetsims/dot) | Model | JavaScript | Mathematical objects such as Vector, Matrix, and corresponding numerical algorithms.                                                                                                                                                                                                                       |
| [kite](https://github.com/phetsims/kite) | Model | TypeScript | Shapes and geometry. Mathematics implemented using dot.                                                                                                                                                                                                                                                    |
| [phet-core](https://github.com/phetsims/phet-core) | Model | TypeScript | Basic utility & support data structures and algorithms.                                                                                                                                                                                                                                                    |
| [tandem](https://github.com/phetsims/tandem) | Model | TypeScript | Simulation-side code to support name-object regstration and PhET-iO instrumentation.                                                                                                                                                                                                                       |
| [utterance-queue](https://github.com/phetsims/utterance-queue) | View | TypeScript | Alerting library powered by aria-live to generate dynamic browser-embedded TTS.                                                                                                                                                                                                                            |
| [tambo](https://github.com/phetsims/tambo) | View | TypeScript | Sound effects and sonification. Uses axon for some observer/listeners support.                                                                                                                                                                                                                             |
| [assert](https://github.com/phetsims/assert) | Model | JavaScript | Minimal standalone assertion support                                                                                                                                                                                                                                                                       |
| [sherpa](https://github.com/phetsims/sherpa) | Third Party Libraries | JavaScript | All 3rd-party dependencies. Some such as font-awesome or lodash are used in every simulation and some such as numeric or three.js are as-needed.                                                                                                                                                        |
| [query-string-machine](https://github.com/phetsims/query-string-machine) | Utilities | JavaScript | A query string parser that supports type coercion, default values & validation. No dependencies.                                                                                                                                                                                   |
| [phetcommon](https://github.com/phetsims/phetcommon) | View | JavaScript | A variety of utility functions, model components, and analytics integrations that are reusable across different simulations.                                                                                                                                                                                                                                                                                             |
| [brand](https://github.com/phetsims/brand) | View - Simulations | TypeScript | Provides support for the main supported brands "PhET" and "PhET-iO" and hooks for clients to develop their own branding.                                                                                                                                                                                   |
| [chipper](https://github.com/phetsims/chipper) | Tooling - Simulations | JavaScript | Tools for developing and building simulations. Uses code in perennial-alias for some tasks.                                                                                                                                                                                                                |
| [alpenglow](https://github.com/phetsims/alpenglow) | View | TypeScript | Experimental rasterization engine, by PhET Interactive Simulations.                                                                                                                                                                                                                                        |

## SceneryStack: Simulation Core

| **Repo** | **Function** | **Language** | **Description**                                                                                                                                 |
|---:|--------------|---|-------------------------------------------------------------------------------------------------------------------------------------------------|
| [joist](https://github.com/phetsims/joist) | Model / View | TypeScript | Common model/view for simulations. Handles loading, animation loop, homescreen, navigation bar, menus, preferences, and screen management.      |
| [scenery-phet](https://github.com/phetsims/scenery-phet) | View         | TypeScript | Reusable Scenery view components for simulations, such as number controls / readouts, probes, sensors, buckets, magnifying glasses, etc.        |
| [twixt](https://github.com/phetsims/twixt) | Model / View | TypeScript | Support for animation and easings/tweening. Can be used to animate user interface components or artwork in the view or model elements directly. |

## SceneryStack: Supplementary

| **Repo** | **Function** | **Language** | **Description**                                                          |
|---:|--------------|---|--------------------------------------------------------------------------|
| [vegas](https://github.com/phetsims/vegas) | Model / View | TypeScript | Reusable game components for interactive simulations.                    |
| [bamboo](https://github.com/phetsims/bamboo) | Utilities    | TypeScript | Charting library built with Scenery.                                     |
| [mobius](https://github.com/phetsims/mobius) | View         | TypeScript | Embed 3D scenes in Scenery with with Three.js.                           |
| [nitroglycerin](https://github.com/phetsims/nitroglycerin) | View         | JavaScript | Chemistry-specific code for interactive simulations                      |
| [tappi](https://github.com/phetsims/tappi) | View         | TypeScript | Support for haptics/vibrations in HTML5.                                 |
| [babel](https://github.com/phetsims/babel) | Translation Content     | JavaScript | Contains translated strings used by simulation and common components     |
| [tangible](https://github.com/phetsims/tangible) | Controller   | TypeScript | Library for handling computer vision and tangible input using MediaPipe. |

[//]: # (| [griddle]&#40;https://github.com/phetsims/griddle&#41; | Utilities | JavaScript | Dynamic charting library built with Scenery &#40;deprecated in favor of Bamboo&#41;                                                                                                                                                                                                                                   |)
<!-- | [vibe](https://github.com/phetsims/vibe) | View | JavaScript | Library for handling audio for PhET simulations. Provides cross-platform support and enables usage of base64 audio embedded in an HTML document. |
| [binder](https://github.com/phetsims/binder) | Documentation | JavaScript | Generates and publishes documentation for interface components from sun  (and eventually scenery and scenery-phet). | -->

## Simulation Development

|                                               **Repo** | **Function**            | **Language** | **Description**                                                                                                      |
|-------------------------------------------------------:|-------------------------|---|----------------------------------------------------------------------------------------------------------------------|
| [perennial](https://github.com/phetsims/perennial) | Tooling - Simulations   | JavaScript | Deployment/maintenance tools that won't change with different versions of chipper checked out (always runs in main). |
| [simula-rasa](https://github.com/phetsims/simula-rasa) | Utilities - Simulations | TypeScript | PhET Simulation Template. "Simula rasa" is Latin for "blank sim".                                                    |
| [example-sim](https://github.com/phetsims/example-sim) | Utilities - Simulations | JavaScript | Example demonstrating the structure of a PhET interactive simulation.                                                |

## PhET-specific Development and Testing 

| **Repo** | **Function** | **Language** | **Description** |
|---:|---|---|---|
| [phetmarks](https://github.com/phetsims/phetmarks) | Tooling / Utilities | JavaScript | Bookmark URLs for use in PhET development. |
| [aqua](https://github.com/phetsims/aqua) | Tooling / Utilities | JavaScript | Automatic QUality Assurance |

## Standalone Tools

| **Repo** | **Function** | **Language** | **Description** |
|---:|---|---|---|
| [paper-land](https://github.com/phetsims/paper-land) | Collaborative Design Tooling | JavaScript | Build and explore multimodal web interactives with pieces of paper! |
| [rosetta](https://github.com/phetsims/rosetta) | Translation Tooling | JavaScript | Rosetta is a tool for translating PhET simulations. It is built using the MERN tech stack: MongoDB, Express, React, and Node. |

## Prototypes and Research

| **Repo** | **Function** | **Language** | **Description** |
|---:|---|---|---|
| [a11y-research](https://github.com/phetsims/a11y-research) | Documentation | JavaScript | A repository to track PhET's research into accessibility, or "a11y" for short. |
| [vello-tests](https://github.com/phetsims/vello-tests) | Build.json | JavaScript | Rough proof-of-concept testing to explore integrating Vello with JS. |
| [wilder](https://github.com/phetsims/wilder) | Documentation | TypeScript | Example Sim for pioneering usage of newer language features (see Laura Ingalls Wilder). |

<!-- | scenery-lab-demo     | Project                              | HTML         | SceneryStack - Optional / Not Ready | -->
<!-- | skiffle              | Project                              | HTML         | SceneryStack - Optional / Not Ready | -->
<!-- | fenster              | Project                              | HTML         | SceneryStack - Optional / Not Ready | -->
<!-- | phet-ios-vibtest-app | Project                              | Swift        | SceneryStack - Optional / Not Ready | -->


<!-- ## SceneryStack: Core
| **Repo**                                       | **Category**                         | **Language** | **Description**    |
|------------------------------------------------|--------------------------------------|--------------|--------------------|
| [assert](https://github.com/phetsims/assert)   | Model                                | JavaScript   | Placeholder        |
| [kite](https://github.com/phetsims/kite)       | Model                                | TypeScript   | Placeholder        |
| [phet-core](https://github.com/phetsims/phet-core) | Model                            | TypeScript   | Placeholder        |
| [tandem](https://github.com/phetsims/tandem)   | Model                                | TypeScript   | Placeholder        |
| [axon](https://github.com/phetsims/axon)       | View                                 | TypeScript   | Placeholder        |
| [brand](https://github.com/phetsims/brand)     | View                                 | TypeScript   | Placeholder        |
| [joist](https://github.com/phetsims/joist)     | View                                 | TypeScript   | Placeholder        |
| [phetcommon](https://github.com/phetsims/phetcommon) | View                             | JavaScript   | Placeholder        |
| [scenery](https://github.com/phetsims/scenery) | View                                 | TypeScript   | Placeholder        |
| [tambo](https://github.com/phetsims/tambo)     | View                                 | TypeScript   | Placeholder        |
| [utterance-queue](https://github.com/phetsims/utterance-queue) | View                   | TypeScript   | Placeholder        |
| [twixt](https://github.com/phetsims/twixt)     | Build.json                           | TypeScript   | Placeholder        |
| [sun](https://github.com/phetsims/sun)         | Build.json                           | TypeScript   | Placeholder        |
| [scenery-phet](https://github.com/phetsims/scenery-phet) | Build.json               | TypeScript   | Placeholder        |
| [phet-lib](https://github.com/phetsims/phet-lib) | Documentation                      | JavaScript   | Placeholder        |
| [chipper](https://github.com/phetsims/chipper) | Tooling / Utilities                  | JavaScript   | Placeholder        |
| [dot](https://github.com/phetsims/dot)         | Tooling / Utilities                  | JavaScript   | Placeholder        |
| [perennial](https://github.com/phetsims/perennial) | Tooling / Utilities              | JavaScript   | Placeholder        |
| [phetmarks](https://github.com/phetsims/phetmarks) | Tooling / Utilities              | JavaScript   | Placeholder        |
| [query-string-machine](https://github.com/phetsims/query-string-machine) | Tooling / Utilities | JavaScript   | Placeholder        |
| [mobius](https://github.com/phetsims/mobius)   | Tooling / Utilities                  | TypeScript   | Placeholder        |
| [bamboo](https://github.com/phetsims/bamboo)   | Tooling / Utilities                  | TypeScript   | Placeholder        |
| [simula-rasa](https://github.com/phetsims/simula-rasa) | Tooling / Utilities            | TypeScript   | Placeholder        |
| [sherpa](https://github.com/phetsims/sherpa)   | Other                                | JavaScript   | Placeholder        |

## SceneryStack: Documentation
| **Repo**                                       | **Category**                         | **Language** | **Description**    |
|------------------------------------------------|--------------------------------------|--------------|--------------------|
| [binder](https://github.com/phetsims/binder)   | Documentation                        | JavaScript   | Placeholder        |

## SceneryStack: Optional
| **Repo**                                       | **Category**                         | **Language** | **Description**    |
|------------------------------------------------|--------------------------------------|--------------|--------------------|
| [quake](https://github.com/phetsims/quake)     | View                                 | JavaScript   | Placeholder        |
| [tappi](https://github.com/phetsims/tappi)     | View                                 | TypeScript   | Placeholder        |
| [vibe](https://github.com/phetsims/vibe)       | View                                 | JavaScript   | Placeholder        |
| [vello-tests](https://github.com/phetsims/vello-tests) | Build.json                   | JavaScript   | Placeholder        |
| [tangible](https://github.com/phetsims/tangible) | Controller                       | TypeScript   | Placeholder        |
| [a11y-research](https://github.com/phetsims/a11y-research) | Documentation                | JavaScript   | Placeholder        |
| [wilder](https://github.com/phetsims/wilder)   | Documentation                        | TypeScript   | Placeholder        |
| [paper-land](https://github.com/phetsims/paper-land) | Project                         | JavaScript   | Placeholder        |
| [rosetta](https://github.com/phetsims/rosetta) | Project                              | JavaScript   | Placeholder        |
| [aqua](https://github.com/phetsims/aqua)       | Tooling / Utilities                  | JavaScript   | Placeholder        |
| [example-sim](https://github.com/phetsims/example-sim) | Tooling / Utilities             | JavaScript   | Placeholder        |
| [vegas](https://github.com/phetsims/vegas)     | Tooling / Utilities                  | TypeScript   | Placeholder        | -->

