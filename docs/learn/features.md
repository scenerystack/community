--8<-- "api-reference-snippets.md"

# Features

## Inclusive Design and Accessibility

### Keyboard Traversal Order

SceneryStack provides **keyboard navigation** support by default, ensuring that interactive elements can be focused and 
activated using the keyboard. By default, the **tab order** follows the **visual back-to-front order** of Scenery's 
scene graph, meaning elements that are rendered on top are navigated to first.

For cases where the desired **focus order** differs from the visual stacking order, you can explicitly define the 
**programmatic DOM order** using the `pdomOrder`.

This allows developers to create a logical, intuitive keyboard navigation experience that may better align with UI 
expectations, particularly in complex layouts. Focus management is also fully customizable, ensuring accessibility 
best practices are met.

See the [Inclusive Design](https://youtu.be/rvRdVwGd1w8) video for how this is used in [PhET Simulations](https://phet.colorado.edu/).

### Screen Reader Support

SceneryStack provides **built-in support for screen readers** through its **Parallel DOM (PDOM)** system. This ensures that interactive elements are accessible to assistive technologies, such as **screen readers** and **keyboard navigation tools**.

#### Key Features:

- **Parallel DOM (PDOM):** Automatically generates a hidden DOM structure that mirrors the visual scene graph, ensuring accessibility without modifying the visual rendering.
- **ARIA Labels and Roles:** Includes `aria-label`, `aria-labelledby`, and other ARIA attributes to provide meaningful descriptions for screen readers.
- **Custom Focus and Navigation:** Allows setting focus behavior using `focusable`, `pdomOrder`, and `tagName` properties for better keyboard and screen reader navigation.
- **Live Regions and Dynamic Updates:** Enables dynamic content updates using `aria-live` for important status messages.

By leveraging **PDOM and ARIA attributes**, SceneryStack ensures that **interactive applications remain accessible** to 
users with visual impairments, aligning with [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) and best accessibility practices.

See the [Interactive Description](https://youtu.be/gj55KDRdhM8) video for how this is used in [PhET Simulations](https://phet.colorado.edu/).

### Pan/Zoom and Multi-Touch

It is possible to enable pan/zoom for any visual element in Scenery, and the input system supports multi-touch gestures
for touch-enabled devices.

See the [Pan and Zoom](https://youtu.be/rHHlBOhgDfk) video for how this is used in [PhET Simulations](https://phet.colorado.edu/).

### Dynamic Spoken Content

SceneryStack supports dynamic spoken feedback using the Web Speech API, allowing applications to announce status updates, 
UI changes, or model values in real time. Developers can customize speech rate, pitch, and volume, integrating voicing 
with accessibility features like screen readers. This enhances usability for visually impaired users and provides 
multimodal feedback for interactive applications.

See the [Voicing](https://youtu.be/mwCc_NDmqx4) video for how this is used in [PhET Simulations](https://phet.colorado.edu/).

### Extensible Input System

Specific shapes can be used to define areas that can be interacted with (depending on the type of input device):

<div class="sandbox-example" data-example="/js/features/pointer-areas-example.js"></div>

Drag listeners can also support *touch-snag*, where a finger does not need to start directly over the draggable object:

<div class="sandbox-example" data-example="/js/features/touch-snag-example.js"></div>

The input system allows recording and playback of input events, and synthetic input events can be created.

This allows integration with other input systems, for instance with [camera input identifying hand motion](https://youtu.be/of05rnd1Ers).

### Color Profiles and High-DPI Support

SceneryStack ensures crisp visuals on high-DPI displays by automatically scaling Canvas and WebGL rendering to match 
device pixel density, preventing blurry graphics on retina-like screens. It also supports dynamic color profiles by 
allowing fills and strokes to be set with reactive Properties, enabling real-time color adjustments for themes, 
accessibility modes, or interactive effects.

### Interactive Highlights

SceneryStack supports interactive highlights by allowing nodes to visually respond to user interactions such as hover, 
focus, and selection. This can be achieved through dynamic styling of fills, strokes, opacity, or filters. 
Developers can use input listeners or reactive Properties to control highlights, ensuring accessibility and intuitive 
feedback for users navigating with a mouse, keyboard, or touch.

See the [Interactive Highlights](https://youtu.be/LKRTfvRnxJs) video for how this is used in [PhET Simulations](https://phet.colorado.edu/).

### Sound and Sonification

SceneryStack provides built-in **Web Audio support** for creating rich, interactive sound experiences, enabling 
simulations to deliver auditory feedback for interactions, model updates, and accessibility needs. Using the 
**Tambo** library, developers can integrate sonification with **SoundClips** for pre-recorded audio, **SoundGenerators** 
for real-time sound synthesis, and **Emitters & Properties** for reactive sound triggering. SceneryStack also supports 
**customizable audio mixing**, allowing precise control over volume, layering, and categories of sounds. Leveraging the 
**Web Audio API**, this system ensures low-latency, high-performance audio, making it ideal for educational applications, 
accessibility enhancements, and dynamic interactive experiences.

See the [Sound and Sonification](https://youtu.be/s0Wp1dILGJQ) video for how this is used in [PhET Simulations](https://phet.colorado.edu/).

### Keyboard-Based Dragging

SceneryStack provides **keyboard-based dragging** through [KeyboardDragListener], allowing users to move objects using 
arrow keys or `WASD` controls. It supports both **step-based movement** (discrete increments) and **continuous movement** 
(speed-based). Developers can restrict movement to horizontal, vertical, or free 2D motion, and configure drag speed or 
step size, with finer control available via the shift key. The system integrates with **position properties**, 
enabling seamless model-view coordination and custom transformations. Additionally, [KeyboardDragListener] 
ensures accessibility and usability with built-in support for **drag bounds** and smooth **timed updates** for 
responsive interactions.

## Create Applications with Ease

### Cross-Platform Support

SceneryStack is designed to work seamlessly across all major platforms by dynamically selecting the best rendering 
backend—**WebGL, Canvas, or SVG**—based on the capabilities of the user's device and browser. It includes extensive 
**browser compatibility handling**, working around numerous inconsistencies in 
**input events, graphical rendering, and performance characteristics**. SceneryStack also optimizes rendering strategies 
differently for various browsers, ensuring **smooth performance and accurate visual output** across desktop and mobile 
devices. This robust cross-platform support allows applications to run consistently, even in environments with known 
browser quirks and limitations.

### Translation and Localization

SceneryStack provides built-in support for **translation and localization**, allowing applications to dynamically update 
text and layout based on the user's language and region. It uses **string Properties** for simple translations and 
**message Properties** (powered by [Fluent](https://projectfluent.org/)) for complex or dynamic content. Text updates 
automatically based on the global **localeProperty**, and **PatternStringProperty** enables parameterized strings.

For right-to-left (RTL) languages, SceneryStack supports **bidirectional text rendering** with directional marks and 
**automatic layout flipping** using the `forwardProperty` in containers like `HBox`. The **regionAndCultureProperty** 
also enables region-specific content, including localized images with **LocalizedImageProperty**. This ensures full 
support for multilingual and culturally adaptable applications.

### Rich Component Library

SceneryStack includes a **comprehensive library of UI components**, which provides essential building blocks for interactive applications. These include:

- **Buttons**: Rectangular, round, toggle, sticky toggle, and momentary buttons.
- **Sliders & Spinners**: Horizontal/vertical sliders, number spinners, and fine-coarse spinners.
- **Form Controls**: Checkboxes, radio buttons, combo boxes, and accordion panels.
- **Layout Components**: Carousels, panels, and collapsible sections.
- **Interactive Elements**: Expand/collapse buttons, toggle switches, and more.

These UI components are highly customizable, designed for accessibility, and optimized for performance.

Additionally, **scenery-phet** extends this with specialized interactive elements such as 
[ArrowNode], [GaugeNode], [ProtractorNode], and time controls, tailored for educational and scientific applications. 
These components enhance SceneryStack’s ability to build rich, interactive experiences.

### Render with Canvas/SVG/WebGL

Scenery supports rendering with Canvas, SVG, and WebGL, even with a mix of each within the same application!

<div class="sandbox-example" data-example="/js/features/renderer-example.js"></div>

### Include DOM Elements

SceneryStack allows integrating **arbitrary DOM elements** into the scene graph using the **DOM** node subtype. This 
enables embedding HTML content, iframes, videos, forms, or other dynamic elements within the graphical scene while 
maintaining full transformability and layering alongside other graphical nodes.

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

SceneryStack includes built-in support for interactive charts and graphs, making it easy to visualize data dynamically. 
Whether it's line graphs, bar charts, scatter plots, or more complex multi-plot visualizations, the library provides 
flexible components that integrate seamlessly into the scene graph. These elements can update in real time, respond 
to user interactions, and be styled or customized to match the needs of an application. The system is designed to 
handle both simple and complex datasets efficiently, ensuring smooth rendering and interactivity.

<div class="sandbox-example" data-example="/js/features/bamboo-example.js"></div>

### Advanced Layout Primitives

SceneryStack provides fully-featured layout primitives, like [HBox], [VBox], [GridBox], [AlignBox], and [ManualConstraint].

This makes developing responsive applications a breeze!

See the [Layout Guide](./scenery-layout.md) for more information.

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

### WebGPU High-Quality Rendering

<div class="sandbox-example" data-example="/js/features/alpenglow-software-example.js"></div>

**Alpenglow** is an experimental rasterizer designed for **high-quality, high-performance vector graphics rendering** using **WebGPU**. It provides a **software reference implementation** and aims to support **WebGL 2 as a fallback**. The rendering approach focuses on **avoiding common artifacts** in traditional rasterization methods while maintaining efficiency.

#### **Key Features and Goals**
- **Precision Rendering**: Eliminates **conflation artifacts**, ensuring accurate compositing without blending errors.
- **Advanced Anti-Aliasing**: Uses **polygonal boolean operations** and analytic filtering to reduce aliasing and gamma blending issues.
- **Gradient and Color Accuracy**: Supports **correct color-space blending** (Oklab, linear sRGB) and **wide-gamut color spaces** (e.g., Display P3).
- **High-Quality Image Resampling**: Implements **exact analytic filters** for superior upsampling and downsampling.
- **Computational Geometry for Vector Graphics**: Efficiently resolves **occlusion, overlaps, and clipping** for 2D and 3D vector graphics.
- **WebGPU Compute Primitives**: Develops reusable **parallel computation techniques** (reduce, scan, sort) to optimize rendering performance.

Alpenglow integrates with **Scenery** for **interactive graphics and UI** and aims to be a **drop-in replacement** for Canvas/SVG rendering, with **higher fidelity and performance** across web and native platforms.

### Haptic Feedback

SceneryStack supports **haptic feedback** using the **Web Vibration API**, allowing applications to provide tactile responses to user interactions. Features include:

- **Customizable Vibration Patterns** – Define patterns with precise timing for different effects like pulses, heartbeats, or gradual fades.
- **Continuous and Timed Vibration** – Supports sustained vibrations or finite-duration effects for enhanced feedback.
- **Adaptive Intensity Control** – Adjust vibration strength dynamically based on interaction context.
- **Cross-Platform Support** – Uses `navigator.vibrate()` on compatible devices, with experimental support for native vibration on Android.

Haptic feedback can enhance accessibility, reinforce UI interactions, and improve user engagement in interactive applications.