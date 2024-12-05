---
hide:
  - navigation
  - toc
---

# SceneryStack

## Create Highly Interactive Content for a Multimodal and Accessible Web

SceneryStack is an open-source Typescript framework for developing multimodal, accessible HTML5 web interactives. SceneryStack offers libraries suitable for general web interactive development, as well as those specifically tailored toward creating interactive simulations. Included is support for robust accessibility features like dynamic screen-reader descriptions and alternative input (e.g., keyboard navigation).
<!-- TODO: expand on accessibility, inc PDOM and abstraction for descriptions --> 

[GET STARTED :octicons-rocket-24:{ .rocket }](./guides/pathways.md){ .md-button .md-button--primary }

---

![Interactive in action with SceneryStack](assets/energyskatepark.gif)

_[Interactive simulation](https://phet.colorado.edu/en/simulations/energy-skate-park) created by PhET using SceneryStack_

---

The development libraries within SceneryStack were originally created by [PhET Interactive Simulations](https://phet.colorado.edu/) to create educational interactive simulations. PhET continues to maintain and contribute to SceneryStack for the purposes of creating multimodal and accessible STEM interactives.

{==**SceneryStack is in the early stages of transitioning to an independent open-source community, driven by a collective passion for a more people-friendly web.**==}

## Core Features: Flexibility and Accessibility

<!-- Organize into capabilities, and split features and functionality -->
### Rendering and Graphics
- **Cross-Platform Capabilities** with a layer to shield from bugs and quirks of modern browsers.
- **Downloadable, Fully Offline, Single-File Artifacts**
- **Pixel-Perfect Design & Color Profile Support**: Including optimization for high pixel density devices.
- **CSS Abstraction & Animation Support** using the `Twixt` library.
- **TypeScript Integration** ensuring type safety & autocomplete.
- **Real-Time Updates and tracing dependencies** using the `Axon` library
- **Rich Component Library** with support for accessibility and to build your own.
- **Support for Multiple Rendering** with seamless functionality across SVG and Canvas, and increasing WebGL support.
- **Innovative Layout Engine** with advanced layout, shape computations, and CAG for interface components.
- **Enhanced iframe Support** with easier user interaction in the iframe.
- **Support for Charts and Graphs** using the `Bamboo` library.

### Input
- **Enhanced Touch and Mouse Areas** and extended touch handling including Swipe-to-Snag functionality.
- **Extendable Input System** that upholds foundational accessibility.
- **API to Specify Keyboard Traversal Order**
  
- **Declarative APIs** for optimal performance/quality adjustments.

### Accessibility and Inclusive Features
- **Novel and Effective Screen Reader Access** using the research-backed Parallel Document Object Model (PDOM) ensuring robust screen reader accessibility ([Experience "Interactive Description"](https://youtu.be/gj55KDRdhM8))
- **Customizable, Dynamic Spoken Content** through Web Speech ([Experience "Voicing"](https://youtu.be/mwCc_NDmqx4))
- **Interactive Highlighting:** extends visual accessibility features inherent to keyboard/focus input to pointer/touch.
- **In-App Zooming Features**: Pinch-to-zoom and panning
- **Multimodal Libraries** Dedicated library (`Tambo`) for integrating Web Audio, including support for screen-focused audio and and sound modulation, as well as a library of UI sounds. Computer vision support for hand/body gesture control (`Tangible`). Experimental support for Vibration API (`Tappi`).

<!-- - **React Ready, Three.JS ready** -->

## Getting Started

[GET STARTED :octicons-rocket-24:{ .rocket }](./guides/pathways.md){ .md-button .md-button--primary }

Learn how to use SceneryStack in your web project or leverage the entire stack for your next highly interactive experience.

Choose your development path and [get started](./guides/pathways.md).

---

![Interactive in action with SceneryStack](assets/centerandvariabilitykeyboard.gif)

_[Interactive simulation](https://phet.colorado.edu/en/simulations/center-and-variability) created by PhET using SceneryStack_

---

## Community and Contributing 🤝

Looking to chat with others using SceneryStack, contribute to the community, or just need to ask some questions?

[🌍 Join the Community 🌍](join.md){ .md-button .md-button--primary }

## FAQs

Head over to [Frequently Asked Questions](./guides/faqs.md) for questions asked about developing in the SceneryStack framework and SceneryStack generally.

---

<iframe src="https://jessegreenberg.github.io/cathedral/" height="400" width="800" style="border:none;" title="Click to Load"></iframe>

_[Interactive Music Video](https://jessegreenberg.github.io/cathedral/) by @jessegreenberg using SceneryStack - Try it here in the browser!_

---

## License

The libraries contained within SceneryStack, including this website, are under the MIT License and freely available for use by anyone. Authors using SceneryStack may choose any license for their creations.

??? warning "Licensing for PhET Interactive Simulations"
     The _simulation source code_ for PhET Interactive Simulations is typically GPLv3 licensed or similar. For everything involving PhET Interactive Simulations, including partnerships, [see their website](https://phet.colorado.edu/).

---

![Interactive in action with SceneryStack](assets/cck-bulb.gif)

_[Interactive simulation](https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc) created by PhET using SceneryStack_
