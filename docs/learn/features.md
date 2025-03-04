--8<-- "api-reference-snippets.md"

# Features

!!! warning "Under Construction"
    This section and others in Getting Started with SceneryStack are under heavy revisement
    and will be updated in February 2025.

TODO: link to guides and examples

## Inclusive Design and Accessibility

### Keyboard Traversal Order

TODO: tab order, focus management

See the [Inclusive Design](https://youtu.be/rvRdVwGd1w8) video for how this is used in [PhET Simulations](https://phet.colorado.edu/).

### Screen Reader Support

TODO: Parallel DOM, aria-labels, etc.

See the [Interactive Description](https://youtu.be/gj55KDRdhM8) video for how this is used in [PhET Simulations](https://phet.colorado.edu/).

### Pan/Zoom and Multi-Touch

It is possible to enable pan/zoom for any visual element in Scenery, and the input system supports multi-touch gestures
for touch-enabled devices.

See the [Pan and Zoom](https://youtu.be/rHHlBOhgDfk) video for how this is used in [PhET Simulations](https://phet.colorado.edu/).

### Dynamic Spoken Content

TODO: Voicing example (Web Speech)

See the [Voicing](https://youtu.be/mwCc_NDmqx4) video for how this is used in [PhET Simulations](https://phet.colorado.edu/).

### Extensible Input System

Specific shapes can be used to define areas that can be interacted with (depending on the type of input device):

<div class="sandbox-example" data-example="/js/features/pointer-areas-example.js"></div>

Drag listeners can also support *touch-snag*, where a finger does not need to start directly over the draggable object:

<div class="sandbox-example" data-example="/js/features/touch-snag-example.js"></div>

The input system allows recording and playback of input events, and synthetic input events can be created.

This allows integration with other input systems, for instance with [camera input identifying hand motion](https://youtu.be/of05rnd1Ers).

### Color Profiles and High-DPI Support

TODO: describe how Scenery handles color profiles and high-DPI displays

### Interactive Highlights

TODO: describe how Scenery handles interactive highlights

See the [Interactive Highlights](https://youtu.be/LKRTfvRnxJs) video for how this is used in [PhET Simulations](https://phet.colorado.edu/).

### Sound and Sonification

TODO: describe how Scenery handles sound and sonification

See the [Sound and Sonification](https://youtu.be/s0Wp1dILGJQ) video for how this is used in [PhET Simulations](https://phet.colorado.edu/).

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

### Mipmapping for Images

SceneryStack supports **mipmapping** for images, improving rendering quality when images are displayed at reduced sizes. 
By default, browsers do **not** generate mipmaps for images when rendering them at very small scales, often leading to 
aliasing or blurriness. To enhance visual quality, you can enable mipmapping by passing `{ mipmap: true }` in the image 
options:

```js
const image = new Image( 'path/to/image.png', { mipmap: true } );
```

With mipmapping enabled, SceneryStack generates progressively smaller versions of the image and selects the most 
appropriate one based on the current scale, reducing aliasing and improving clarity.

For advanced use cases, SceneryStack also supports pre-processed mipmaps, (see output from [createMipmap.ts](https://github.com/phetsims/chipper/blob/ddfac487517a5c3c1f84020f81835e56bd0070a1/js/grunt/createMipmap.ts).
This allows developers to provide optimized mipmap levels manually, with improved quality and no runtime CPU processing
when downscaling images.

### Declarative and Imperative APIs

SceneryStack provides both **declarative** and **imperative** approaches to defining and updating scenes, giving developers flexibility based on their needs.

- **Declarative API:** Define the scene structure using a **hierarchical, state-driven approach**, similar to React or SVG. This method keeps the UI in sync with application state automatically.
  - Example: Using a **scene graph** with properties bound to model values, automatically updating when state changes.
  - Best for: Complex, data-driven UIs where a clear separation between state and rendering is desired.

- **Imperative API:** Directly manipulate scene nodes, updating properties dynamically via method calls.
  - Example: Explicitly modifying node positions, styles, or event handlers in response to user interactions.
  - Best for: Performance-sensitive applications or cases where procedural control over rendering is necessary.

Both approaches can be used together, enabling efficient UI updates while retaining fine-grained control when needed.

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

SceneryStack’s **reactive programming model** makes it easy to build dynamic, interactive applications. It provides:

- **Properties** for managing observable state (e.g., `scoreProperty = new Property(0)`). 
- **Emitters** for event-driven programming (e.g., `buttonClickedEmitter.emit()`).
- **DerivedProperty** for computed values that automatically update when dependencies change.
- **Multilink** for responding to multiple state changes at once.

These tools ensure **efficient state management** and **clear model-view separation**, making it easy to build highly
interactive applications.

See the [Emitters and Properties](./emitters-and-properties.md) guide for more information.

### TypeScript Support

SceneryStack is designed with **first-class TypeScript support**, offering **strict types, autocompletion, and static analysis** across all major components:

- **Typed Scene Graph** – Nodes, layouts, and transforms in Scenery are fully typed, ensuring correctness in rendering logic.
- **Strongly Typed State Management** – Axon’s `Property<T>` and `Emitter<T>` provide **type-safe** reactivity and event handling.
- **Strict Event System** – Scenery’s input system defines types for **pointer, keyboard, and accessibility events**, preventing common mistakes.
- **Component-Based Architecture** – SceneryStack’s declarative API integrates seamlessly with TypeScript, offering **typed UI components** and **structured layouts**.

With TypeScript, SceneryStack enables **safer, more maintainable** code while leveraging modern developer tooling.

### Animations

SceneryStack has dedicated [primitives for animation](./animation.md). These can be used to animate any model or visual
element in your application.

<div class="sandbox-example" data-example="/js/features/animation-example.js"></div>

See the [Animation Guide](./animation.md) for more information.

### Web Audio

SceneryStack includes built-in **Web Audio support** for creating rich, interactive sound experiences. Using the
**Tambo** library, you can easily add sonification to applications with:

- **SoundClips** – Play pre-recorded audio samples with precise control.
- **SoundGenerators** – Dynamically generate and modify sounds in real-time.
- **Emitters & Properties** – Use reactive patterns to trigger and manage sounds based on state or user input.
- **Customizable Audio Mixing** – Control volume, categories, and layering of sounds.

Tambo leverages the **Web Audio API** for low-latency, high-performance audio, making it ideal for accessibility 
enhancements, educational applications, and interactive experiences.

### WebGPU High-Quality Rendering

TODO: Alpenglow

### Haptic Feedback

SceneryStack supports **haptic feedback** using the **Web Vibration API**, allowing applications to provide tactile responses to user interactions. Features include:

- **Customizable Vibration Patterns** – Define patterns with precise timing for different effects like pulses, heartbeats, or gradual fades.
- **Continuous and Timed Vibration** – Supports sustained vibrations or finite-duration effects for enhanced feedback.
- **Adaptive Intensity Control** – Adjust vibration strength dynamically based on interaction context.
- **Cross-Platform Support** – Uses `navigator.vibrate()` on compatible devices, with experimental support for native vibration on Android.

Haptic feedback can enhance accessibility, reinforce UI interactions, and improve user engagement in interactive applications.