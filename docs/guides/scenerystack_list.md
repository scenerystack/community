# SceneryStack Libraries

Looking for the best way to start using SceneryStack? Check out the [Pathways](./pathways.md) guide to get started!

[GET STARTED :octicons-rocket-24:{ .rocket }](pathways.md){ .md-button .md-button--primary }

[SceneryStack package](https://github.com/scenerystack/scenerystack){ .md-button .md-button--primary }

--[SceneryStack on npm](https://www.npmjs.com/package/scenerystack)--

https://github.com/orgs/phetsims/repositories?q=topic%3Ascenerystack+sort%3Aname-asc

## SceneryStack Repository List

### **Rendering & UI**

Libraries focused on graphics rendering, UI elements, and interaction.

| **Repo** | **Category** | **Description** |
|---|---|---|
| [Scenery](https://github.com/phetsims/scenery) | **Graphics / Rendering** | Foundational library for representing graphics, handling input, and cross-platform support. |
| [Alpenglow](https://github.com/phetsims/alpenglow) | **Rendering Engine** | Experimental rasterization engine by PhET Interactive Simulations. |
| [Sun](https://github.com/phetsims/sun) | **UI Components** | Graphical user interface components such as buttons and checkboxes. Built using Scenery. |
| [Mobius](https://github.com/phetsims/mobius) | **3D Rendering** | Embed 3D scenes in Scenery with Three.js. |
| [Twixt](https://github.com/phetsims/twixt) | **Animation** | Support for animation, easing, and tweening for UI or artwork. |
| [Joist](https://github.com/phetsims/joist) | **UI Framework** | Common model/view for simulations, handling navigation, menus, and screen management. |
| [SceneryPhet](https://github.com/phetsims/scenery-phet) | **Reusable View Components** | Reusable Scenery view components for simulations. |

---

### **Core Libraries**

Libraries foundational to data structures, algorithms, and general functionality.

| **Repo** | **Category** | **Description** |
|---|---|---|
| [Dot](https://github.com/phetsims/dot) | **Math / Core Utility** | Mathematical objects such as Vector, Matrix, and corresponding numerical algorithms. |
| [Kite](https://github.com/phetsims/kite) | **Geometry / Core Utility** | Shapes and geometry. Mathematics implemented using Dot. |
| [PhetCore](https://github.com/phetsims/phet-core) | **General Utility** | Basic utility & support for data structures and algorithms. |
| [Assert](https://github.com/phetsims/assert) | **Core Utility** | Minimal standalone assertion support. |
| [Tandem](https://github.com/phetsims/tandem) | **Data Management** | Simulation-side code to support name-object registration and PhET-iO instrumentation. |

---

### **Data Models & State Management**

Libraries managing application state, event propagation, and data structures.

| **Repo** | **Category** | **Description** |
|---|---|---|
| [Axon](https://github.com/phetsims/axon) | **State Management** | Event-based model and data structures for the observer pattern. |
| [Bamboo](https://github.com/phetsims/bamboo) | **Data Visualization** | Charting library built with Scenery. |
| [Vegas](https://github.com/phetsims/vegas) | **Game Components** | Reusable game components for interactive simulations. |
| [PhetCommon](https://github.com/phetsims/phetcommon) | **Shared Components** | Utility functions, model components, and analytics integrations. |

---

### **Interaction & Accessibility**

Libraries that enhance interactivity and accessibility for users.

| **Repo** | **Category** | **Description** |
|---|---|---|
| [Tambo](https://github.com/phetsims/tambo) | **Audio / Sonification** | Sound effects and sonification. Uses Axon for event handling. |
| [UtteranceQueue](https://github.com/phetsims/utterance-queue) | **Accessibility** | Library for generating dynamic TTS using ARIA live regions. |
| [Tangible](https://github.com/phetsims/tangible) | **Tangible Interaction** | Library for handling computer vision and tangible input using MediaPipe. |
| [Tappi](https://github.com/phetsims/tappi) | **Haptic Feedback** | Support for haptics/vibrations in HTML5. |
| [Nitroglycerin](https://github.com/phetsims/nitroglycerin) | **Specialized Interaction** | Chemistry-specific code for interactive simulations. |

---

### **Tooling & Configuration**

Libraries for building, testing, and extending applications.

| **Repo** | **Category** | **Description** |
|---|---|---|
| [Chipper](https://github.com/phetsims/chipper) | **Build Tools** | Tools for developing and building interactives. |
| [QueryStringMachine](https://github.com/phetsims/query-string-machine) | **URL Parsing** | A query string parser that supports type coercion, default values, and validation. |
| [Brand](https://github.com/phetsims/brand) | **Branding** | Provides hooks for custom branding. |
| [Sherpa](https://github.com/phetsims/sherpa) | **Third-Party Libraries** | Houses all 3rd-party dependencies. |

---

### **Localization**

Libraries for supporting multiple languages and regions.

| **Repo** | **Category** | **Description** |
|---|---|---|
| [Babel](https://github.com/phetsims/babel) | **Translation** | Contains translated strings used by simulation and common components. |

---

## Library Descriptions

### Alpenglow

The `alpenglow` library is an experimental rasterization engine developed by PhET Interactive Simulations. Here are its key capabilities:

- **Rasterization Engine**: It provides rasterization functionalities, which are essential for converting vector graphics into raster images.
- **WebGPU Support**: It includes experimental support for WebGPU, allowing advanced graphics rendering and computation on the web.
- **Benchmarking Tools**: It offers experimental benchmarking using WGSL (WebGPU Shading Language) for performance testing.
- **Modular Dependencies**: The library integrates with various other PhET libraries, such as `assert`, `axon`, `chipper`, `dot`, `kite`, `perennial`, `phet-core`, `phetcommon`, `scenery`, `sherpa`, `tandem`, and `utterance-queue`.

For more detailed information, you can refer to the [README file](https://github.com/phetsims/alpenglow/blob/1eddfdeb4428d327d7cbce1a4b7a3e890c708814/README.md).

### Scenery

The scenery library is a versatile HTML5 scene graph library developed by PhET Interactive Simulations. Its primary capabilities include:

Interactive Visual Experiences: Enables building interactive visual experiences that can be rendered using WebGL, SVG, Canvas, and other technologies.
Multi-Platform Rendering: Supports rendering on multiple platforms, ensuring compatibility and flexibility in deployment.
Extensive Documentation: Comprehensive documentation is available within the code and online, including a detailed tour of features and a list of examples.
Integration with Other Libraries: Works seamlessly with other PhET libraries such as assert, axon, and dot, among others.
For more detailed information, you can refer to the README file.
