# SceneryStack Repository List

!!! note
    All repositories are located under the phetsims organization, e.g., phetsims/scenery

!!! warning
    All new code in SceneryStack is being developed in TypeScript, but some older repositories still contain JavaScript.

Looking for the best way to start using SceneryStack? Check out the [Pathways](./pathways.md) guide to get started!

[GET STARTED :octicons-rocket-24:{ .rocket }](./guides/pathways.md){ .md-button .md-button--primary }

## SceneryStack: Core

| **Repo** | **Function** | **Language** | **Description** |
|---|---|---|---|
| [alpenglow](https://github.com/phetsims/alpenglow) | View | TypeScript | Experimental rasterization engine, by PhET Interactive Simulations. |
| [assert](https://github.com/phetsims/assert) | Model | JavaScript | Minimal standalone assertion support. |
| [axon](https://github.com/phetsims/axon) | View | TypeScript | Event-based model and data structures for the observer pattern (Property) and listener pattern (Emitters). |
| [brand](https://github.com/phetsims/brand) | View - Simulations | TypeScript | Provides support for the main supported brands "PhET" and "PhET-iO" and hooks for clients to develop their own branding. |
| [chipper](https://github.com/phetsims/chipper) | Tooling - Simulations | JavaScript | Tools for developing and building simulations. Uses code in perennial-alias for some tasks. |
| [dot](https://github.com/phetsims/dot) | Model | JavaScript | Mathematical objects such as Vector, Matrix, and corresponding numerical algorithms. |
| [kite](https://github.com/phetsims/kite) | Model | TypeScript | Shapes and geometry. Mathematics implemented using dot. |
| [phet-core](https://github.com/phetsims/phet-core) | Model | TypeScript | Basic utility & support data structures and algorithms. |
| [phet-lib](https://github.com/phetsims/phet-lib) | Built Library | JavaScript | Contains built versions of SceneryStack Libraries. |
| [phetcommon](https://github.com/phetsims/phetcommon) | View | JavaScript | A variety of utility functions, model components, and analytics integrations that are reusable across different simulations. |
| [query-string-machine](https://github.com/phetsims/query-string-machine) | Utilities | JavaScript | A query string parser that supports type coercion, default values & validation. No dependencies. |
| [scenery](https://github.com/phetsims/scenery) | View | TypeScript | Foundational library for representing graphics (rendering to SVG, Canvas or WebGL), handling input, and generally abstraction for the browser and cross-platform support. |
| [sherpa](https://github.com/phetsims/sherpa) | Third Party Libraries | JavaScript | All 3rd-party dependencies. Some such as font-awesome or lodash are used in every simulation and some such as numeric or three.js are as-needed. |
| [sun](https://github.com/phetsims/sun) | View | TypeScript | Graphical user interface components, such as buttons and checkboxes which could be useful in any application context. Built using scenery. |
| [tambo](https://github.com/phetsims/tambo) | View | TypeScript | Sound effects and sonification. Uses axon for some observer/listeners support. |
| [tandem](https://github.com/phetsims/tandem) | Model | TypeScript | Simulation-side code to support name-object registration and PhET-iO instrumentation. |
| [twixt](https://github.com/phetsims/twixt) | Model / View | TypeScript | Support for animation and easings/tweening. Can be used to animate user interface components or artwork in the view or model elements directly. |
| [utterance-queue](https://github.com/phetsims/utterance-queue) | View | TypeScript | Alerting library powered by aria-live to generate dynamic browser-embedded TTS. |

## SceneryStack: Simulation Core

| **Repo** | **Function** | **Language** | **Description** |
|---|---|---|---|
| [example-sim](https://github.com/phetsims/example-sim) | Utilities - Simulations | JavaScript | Example demonstrating the structure of a PhET interactive simulation. |
| [joist](https://github.com/phetsims/joist) | Model / View | TypeScript | Common model/view for simulations. Handles loading, animation loop, homescreen, navigation bar, menus, preferences, and screen management. |
| [scenery-phet](https://github.com/phetsims/scenery-phet) | View | TypeScript | Reusable Scenery view components for simulations, such as number controls / readouts, probes, sensors, buckets, magnifying glasses, etc. |
| [simula-rasa](https://github.com/phetsims/simula-rasa) | Utilities - Simulations | TypeScript | PhET Simulation Template. "Simula rasa" is Latin for "blank sim". |

## SceneryStack: Supplementary

| **Repo** | **Function** | **Language** | **Description** |
|---|---|---|---|
| [babel](https://github.com/phetsims/babel) | Translation Content | JavaScript | Contains translated strings used by simulation and common components. |
| [bamboo](https://github.com/phetsims/bamboo) | Utilities | TypeScript | Charting library built with Scenery. |
| [mobius](https://github.com/phetsims/mobius) | View | TypeScript | Embed 3D scenes in Scenery with Three.js. |
| [nitroglycerin](https://github.com/phetsims/nitroglycerin) | View | JavaScript | Chemistry-specific code for interactive simulations. |
| [tangible](https://github.com/phetsims/tangible) | Controller | TypeScript | Library for handling computer vision and tangible input using MediaPipe. |
| [tappi](https://github.com/phetsims/tappi) | View | TypeScript | Support for haptics/vibrations in HTML5. |
| [vegas](https://github.com/phetsims/vegas) | Model / View | TypeScript | Reusable game components for interactive simulations. |
