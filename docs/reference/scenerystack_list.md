# SceneryStack Libraries

Looking for the best way to start using SceneryStack? Head over to the [Setup Guide](./../start/setup.md).

[:octicons-rocket-24:{ .rocket } GET STARTED](../start/setup.md){ .md-button .md-button--primary }

## NPM Package

[:simple-github: SceneryStack package on GitHub](https://github.com/scenerystack/scenerystack){ .md-button .md-button--primary }

[:simple-npm: SceneryStack on npm](https://www.npmjs.com/package/scenerystack){ .md-button .md-button--primary }

## SceneryStack Repository List

[:simple-github: All SceneryStack Repos on GitHub](https://github.com/orgs/phetsims/repositories?q=topic%3Ascenerystack+sort%3Aname-asc){ .md-button .md-button--primary }

### Rendering & UI

Libraries focused on graphics rendering, UI elements, and interaction.

| **Repo** | **Category** | **Description** | **API Doc Progress** | **Example Doc Progress** |
|---|---|---|---|---|
| [Scenery](https://github.com/phetsims/scenery) | **Graphics / Rendering** | Foundational library for representing graphics, handling input, and cross-platform support. | [:material-battery-charging-70:](https://phetsims.github.io/scenery/doc/) | [:material-battery-50:](https://phetsims.github.io/scenery/examples/) |
| [Alpenglow](https://github.com/phetsims/alpenglow) | **Rendering Engine** | Experimental rasterization engine by PhET Interactive Simulations. | [:material-battery-charging-60:](https://phetsims.github.io/alpenglow/) | :material-battery-off-outline: |
| [Sun](https://github.com/phetsims/sun) | **UI Components** | Graphical user interface components such as buttons and checkboxes. Built using Scenery. | :material-battery-off-outline: | :material-battery-off-outline: |
| [Mobius](https://github.com/phetsims/mobius) | **3D Rendering** | Embed 3D scenes in Scenery with Three.js. | :material-battery-off-outline: | :material-battery-off-outline: |
| [Twixt](https://github.com/phetsims/twixt) | **Animation** | Support for animation, easing, and tweening for UI or artwork. | :material-battery-off-outline: | :material-battery-off-outline: |
| [Joist](https://github.com/phetsims/joist) | **UI Framework** | Common model/view for simulations, handling navigation, menus, and screen management. | :material-battery-off-outline: | :material-battery-off-outline: |
| [SceneryPhet](https://github.com/phetsims/scenery-phet) | **Reusable View Components** | Reusable Scenery view components for simulations. | :material-battery-off-outline: | :material-battery-off-outline: |

---

### Utilities

Libraries foundational to data structures, algorithms, and general functionality.

| **Repo** | **Category** | **Description** | **API Doc Progress** | **Example Doc Progress** |
|---|---|---|---|---|
| [Dot](https://github.com/phetsims/dot) | **Math / Core Utility** | Mathematical objects such as Vector, Matrix, and corresponding numerical algorithms. | [:material-battery-check:](https://phetsims.github.io/dot/doc/) | [:material-battery-low:](https://phetsims.github.io/dot/examples/) |
| [Kite](https://github.com/phetsims/kite) | **Geometry / Core Utility** | Shapes and geometry. Mathematics implemented using Dot. | [:material-battery-medium:](https://phetsims.github.io/kite/doc/) | [:material-battery-low:](https://phetsims.github.io/kite/examples/) |
| [PhetCore](https://github.com/phetsims/phet-core) | **General Utility** | Basic utility & support for data structures and algorithms. | :material-battery-off-outline: | :material-battery-off-outline: |
| [Assert](https://github.com/phetsims/assert) | **Core Utility** | Minimal standalone assertion support. | :material-battery-off-outline: | :material-battery-off-outline: |
| [Tandem](https://github.com/phetsims/tandem) | **Data Management** | Simulation-side code to support name-object registration and PhET-iO instrumentation. | :material-battery-off-outline: | :material-battery-off-outline: |

---

### Data Models & State Management

Libraries managing application state, event propagation, and data structures.

| **Repo** | **Category** | **Description** | **API Doc Progress** | **Example Doc Progress** |
|---|---|---|---|---|
| [Axon](https://github.com/phetsims/axon) | **State Management** | Event-based model and data structures for the observer pattern. | :material-battery-off-outline: | :material-battery-off-outline: |
| [Bamboo](https://github.com/phetsims/bamboo) | **Data Visualization** | Charting library built with Scenery. | :material-battery-off-outline: | :material-battery-off-outline: |
| [Vegas](https://github.com/phetsims/vegas) | **Game Components** | Reusable game components for interactive simulations. | :material-battery-off-outline: | :material-battery-off-outline: |
| [PhetCommon](https://github.com/phetsims/phetcommon) | **Shared Components** | Utility functions, model components, and analytics integrations. | :material-battery-off-outline: | :material-battery-off-outline: |

---

### Interaction & Accessibility

Libraries that enhance interactivity and accessibility for users.

| **Repo** | **Category** | **Description** | **API Doc Progress** | **Example Doc Progress** |
|---|---|---|---|---|
| [Tambo](https://github.com/phetsims/tambo) | **Audio / Sonification** | Sound effects and sonification. Uses Axon for event handling. | :material-battery-off-outline: | :material-battery-off-outline: |
| [UtteranceQueue](https://github.com/phetsims/utterance-queue) | **Accessibility** | Library for generating dynamic TTS using ARIA live regions. | :material-battery-off-outline: | :material-battery-off-outline: |
| [Tangible](https://github.com/phetsims/tangible) | **Tangible Interaction** | Library for handling computer vision and tangible input using MediaPipe. | :material-battery-off-outline: | :material-battery-off-outline: |
| [Tappi](https://github.com/phetsims/tappi) | **Haptic Feedback** | Support for haptics/vibrations in HTML5. | :material-battery-off-outline: | :material-battery-off-outline: |
| [Nitroglycerin](https://github.com/phetsims/nitroglycerin) | **Specialized Interaction** | Chemistry-specific code for interactive simulations. | :material-battery-off-outline: | :material-battery-off-outline: |

---

### Tooling & Configuration

Libraries for building, testing, and extending applications.

| **Repo** | **Category** | **Description** | **API Doc Progress** | **Example Doc Progress** |
|---|---|---|---|---|
| [Chipper](https://github.com/phetsims/chipper) | **Build Tools** | Tools for developing and building interactives. | :material-battery-off-outline: | :material-battery-off-outline: |
| [QueryStringMachine](https://github.com/phetsims/query-string-machine) | **URL Parsing** | A query string parser that supports type coercion, default values, and validation. | :material-battery-off-outline: | :material-battery-off-outline: |
| [Brand](https://github.com/phetsims/brand) | **Branding** | Provides hooks for custom branding. | :material-battery-off-outline: | :material-battery-off-outline: |
| [Sherpa](https://github.com/phetsims/sherpa) | **Third-Party Libraries** | Houses all 3rd-party dependencies. | :material-battery-off-outline: | :material-battery-off-outline: |

<!-- https://pictogrammers.com/library/mdi/category/battery/ -->

---

## Extended Library Descriptions

### Alpenglow

The `alpenglow` library is an experimental rasterization engine.

- **Rasterization Engine**: It provides rasterization functionalities, which are essential for converting vector graphics into raster images.
- **WebGPU Support**: It includes experimental support for WebGPU, allowing advanced graphics rendering and computation on the web.
- **Benchmarking Tools**: It offers experimental benchmarking using WGSL (WebGPU Shading Language) for performance testing.

### Scenery

The `scenery` library is a versatile HTML5 scene graph library.

- **Interactive Visual Experiences**: Enables building interactive visual experiences that can be rendered using WebGL, SVG, Canvas, and other technologies.
- **Multi-Platform Rendering**: Supports rendering on multiple platforms, ensuring compatibility and flexibility in deployment.
