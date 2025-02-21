--8<-- "api-reference-snippets.md"

TODO: link over from https://phet.colorado.edu/en/inclusive-design/features for all of the features videos.

# Features

!!! warning "Under Construction"
    This section and others in Getting Started with SceneryStack are under heavy revisement
    and will be updated in February 2025.

TODO: link to guides and examples

## Inclusive Design and Accessibility

### Keyboard Traversal Order

TODO: tab order, focus management

### Screen Reader Support

TODO: Parallel DOM, aria-labels, etc.

### Pan/Zoom and Multi-Touch

TODO

### Dynamic Spoken Content

TODO: Voicing example (Web Speech)

### Extensible Input System

TODO: mouse/touch areas, customization, swipe-to-snag

### Color Profiles and High-DPI Support

TODO: describe how Scenery handles color profiles and high-DPI displays

### Interactive Highlights

TODO: describe how Scenery handles interactive highlights

### Keyboard-Based Dragging

TODO: KeyboardDragListener example

## Create Applications with Ease

### Cross-Platform Support

TODO: describe how Scenery works on all platforms

### Translation and Localization

TODO

### Rich Component Library

TODO: sun/scenery-phet components

### Render with Canvas/SVG/WebGL

Scenery supports rendering with Canvas, SVG, and WebGL, even with a mix of each within the same application!

<div class="sandbox-example" data-example="/js/features/renderer-example.js"></div>

### Include DOM Elements

TODO: DOM element demo from tour-of-scenery

### Use Sprites for High Performance

These will render in WebGL when available (or fall back to Canvas), for high-performance rendering of many sprites.

<div class="sandbox-example" data-example="/js/features/sprites-example.js"></div>

See [Sprites] and the [basics documentation](./scenery-basics.md#sprites) for more information.

### Mimapping for Images

TODO: demo (with image that benefits from mipmapping, and likely Canvas renderer)

### Declarative and Imperative APIs

TODO: describe approaches to handling

### Include 3D Content

3D content can be integrated into Scenery applications using the Three.js:

<div class="sandbox-example" data-example="/js/features/three-example.js"></div>

See [Three.js Integration](./examples/threejs-integration.md) for more information. 
See [Molecule Shapes](https://phet.colorado.edu/sims/html/molecule-shapes/latest/molecule-shapes_all.html) or
[Density](https://phet.colorado.edu/sims/html/density/latest/density_all.html) for examples of 3D content in PhET simulations.

### Charts and Graphs

TODO: Bamboo Example

### Advanced Layout Primitives

SceneryStack provides fully-featured layout primitives, like [HBox], [VBox], [GridBox], [AlignBox], and [ManualConstraint].

This makes developing responsive applications a breeze!

See the [Layout Guide](./layout.md) for more information.

### Iframe Support

TODO: show example of PhET sims in iframes?

### Modeling and Simulation

TODO: examples of Axon properties

### TypeScript Support

TODO

### Animations

SceneryStack has dedicated [primitives for animation](./animation.md). These can be used to animate any model or visual
element in your application.

<div class="sandbox-example" data-example="/js/features/animation-example.js"></div>

See the [Animation Guide](./animation.md) for more information.

### Web Audio

TODO: Tambo

### WebGPU High-Quality Rendering

TODO: Alpenglow

### Vibration

TODO: experimental Tappi support