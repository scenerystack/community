--8<-- "api-reference-snippets.md"

<link rel="stylesheet" href="/css/examples.css">

# Scenery Basics

!!! warning "Under Construction"
    This section and others in Getting Started with SceneryStack are under heavy revisement
    and will be updated in January 2025.

## Overview

Scenery **helps you build 2D graphics and interfaces** using a declarative structure.

Scenery is built on a *scene graph*: the visual elements in your UI are organized into a hierarchy of nodes, similar to
the DOM.

Scenery's [Display] is responsible for efficiently rendering updates to the scene graph to the screen. It can seamlessly 
mix SVG, Canvas, and WebGL rendering behind-the-scenes to provide the best performance and quality for your application.

## Getting Started

??? note "Need to set up SceneryStack first?"
    This guide assumes you have already read the [Setup](./setup.md) guide and have a SceneryStack project set up.

To get started with Scenery, you need to create a [Display] and a [Node] to render. Here’s a simple example that creates
a [Display] and renders a line of text with a logo:

First, create a block-level element (like a div) that has declared dimensions:

```html
<div id="getting-started-example" style="width: 400px; height: 100px;"></div>
```

Then the following code will create a [Display] and render a [Text] and an [Image] inside:

<div id="getting-started-example" class="sandbox-example" style="width: 400px; height: 100px; margin: 0 auto; border: 1px solid black;"></div>
<div id="getting-started-example-appendix" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/getting-started-example.js"></script>

!!! note
    All the code examples on this page are editable! Feel free to try them out—editing the code will update the example 
    display above the code. Have fun experimenting!

The [Display] will have similar coordinates to normal elements, with the origin at the top-left corner of the element.
In this case, the [Display] will be 400px wide and 100px tall.

The code above places the [Text] so that its center is at (200, 50) in the [Display] (halfway across and halfway down).

## Nodes

Nodes are the fundamental building blocks of Scenery. They represent visual elements in your scene. Each node can have
children, which are other nodes that are positioned relative to their parent.

SceneryStack often uses a declarative syntax to create nodes. For example, you can create a [TextPushButton] node with a
specific font and color:

<div id="declarative-pushbutton-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/declarative-pushbutton-example.js"></script>

All of the primitive Scenery nodes also support an imperative syntax for all of their parameters for maximizing
performance:

<div id="mutation-rectangle-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/mutation-rectangle-example.js"></script>

When using the declarative options syntax, the parameters are executed in an order such that anything that affects
the size of the node will be applied before anything that depends on the position of the node (e.g. `center`).

## Children

Nodes can have children, which are other nodes that are positioned relative to their parent. The order of the children
matters: Nodes are rendered in the order they appear in the children array, with earlier entries (e.g., `node.children[0]`)
being drawn behind later entries (e.g., `node.children[1]`).

In addition, any Node can have children, including ones that display their own content. In that case, the parent's content
will be behind the child's content.

<div id="children-ordering-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/children-ordering-example.js"></script>

Children can also be added to a node using the `addChild()` method:

<div id="add-child-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/add-child-example.js"></script>

and the ability to `removeChild()` or `insertChild()` exists for when you need to modify the children of a node.

## Paths

Shapes are displayed with the [Path] subtype of [Node]. There are a number of flexible [Path] subtypes for common shapes:
[Rectangle], [Circle], and [Line]. All [Path] types (along with anything [Paintable], like [Text]) can take fills, strokes, and
other parameters that control their appearance.

<div id="path-basic-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/path-basic-example.js"></script>

It is also possible to create custom shapes with the [Shape] object. The API is very similar to the 
[CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) API, where
the path commands are used to define the [Shape]:

<div id="path-shape-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/path-shape-example.js"></script>

[Path] objects can also be created with a SVG path string (see [documentation for the SVG path syntax](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d)):

<div id="path-svg-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/path-svg-example.js"></script>

To learn more about [Shape] objects, see the [Shape Guide](./shapes.md).

## Text

### Basic Text

Basic text is displayed with the [Text] subtype of [Node]. The text can be styled with the `font`, `fill`, and `stroke`.

<div id="text-basic-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/text-basic-example.js"></script>

[Text] nodes take in either a `string` or a `TReadOnlyProperty<string>` object (a [Property], [ReadOnlyProperty], or [TinyProperty] with a string value).
They will dynamically update their displayed text when the Property changes, to support dynamic and translated content:

<div id="text-property-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/text-property-example.js"></script>

**Note**: Text is positioned so that the origin of the node is at the left baseline of the text.

### Rich Text

[RichText] is capable of displaying a subset of HTML-like content:

<div id="richtext-basic-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/richtext-basic-example.js"></script>

It is also possible to embed arbitrary Scenery nodes in a [RichText]:

<div id="richtext-embed-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/richtext-embed-example.js"></script>

See the [RichText] documentation for more information on all supported options and tags.

## Images

Images can be displayed (with the upper-left corner at the origin of the node) with the [Image] subtype of [Node].

<div id="image-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/image-example.js"></script>

The source of images can be either a URL, a [CanvasHTMLElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas),
an [HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement), or a special type to support
[mipmaps](https://en.wikipedia.org/wiki/Mipmap).

Note that images will not have immediately-correct bounds unless they have already been loaded. It is possible to provide
an `initialWidth` or `initialHeight` to the [Image] constructor to provide bounds before the image is loaded.

## DOM Elements

DOM elements can be added, and will be transformed with CSS transforms to be in the expected place (their origin will be
at the top-left corner of the element).

<div id="dom-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/dom-example.js"></script>

**Note**: `allowInput: true` is required if you want to interact with the DOM element.

## Positioning Nodes

Each [Node] has a transformation associated with it that can be used to position and scale the node. The
[affine transformation](https://en.wikipedia.org/wiki/Affine_transformation) can be represented by a 3x3 matrix, and
allows for translation, rotation, scaling, and shearing.

For the examples below, keep in mind that the origin of the node (the point $(0,0)$) is at the top-left corner
of the rectangles.

Common ways to adjust (or read) the positions of a node include:

### Translation

The `translation` property of a node is a [Vector2] that represents the position of the node in the parent's coordinate
frame. For example, to move a node 100 units to the right and 50 units down:

<div id="translation-vector2-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/translation-vector2-example.js"></script>

The translation can be broken up into x and y components, that can be accessed and modified individually:

<div id="translation-xy-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/translation-xy-example.js"></script>

### Rotation

The `rotation` property of a node is a number that represents the rotation of the node in radians. For example, to rotate
a node $\pi/6$ radians:

<div id="rotation-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/rotation-example.js"></script>

### Scaling

The `scale` property of a node is a [Vector2] that represents the scaling of the node in the x and y directions.
Usually, the x and y components are the same, and thus can be adjusted with a single number:

<div id="scale-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/scale-example.js"></script>

### Matrix

If you need to apply a more complex transformation, you can use the `matrix` property of a node. This property is a
[Matrix3] that represents the full transformation of the node. For example, to apply a rotation and translation:

<div id="matrix-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/matrix-example.js"></script>

Corresponding to:

$$
M_{out} = \begin{bmatrix}
\cos\theta & -\sin\theta & x \\ 
\sin\theta & \cos\theta & y \\
0 & 0 & 1
\end{bmatrix} * M_{in}
$$

For most purposes, this is not needed (for example, the `rotation` and `translation` properties can be applied to the same object).

### Order of Transformations

When applied declaratively (in an options object), Scenery will first adjust the matrix, then the translation,
rotation, and scale (in that order).

If a [Node]'s `matrix` property has the value $M_{in}$, and a transformation $M$ is applied to the node, the resulting
matrix $M_{out}$ will be:

$$
M_{out} = M * M_{in}
$$

When applied (either from the declarative order, or with imperative commands), the freshly applied transformation will
act like it was applied last.

### Coordinate Frames

#### Local Coordinate Frame

The children and content of a [Node] will be positioned in the node's *local* coordinate frame. This means that the
origin of the node is at $(0,0)$, and the x-axis points to the right and the y-axis points down.

Local coordinate frames **ignore** the transformation of the given node. When you are adding children to a node, you
are **placing the children into the parent node's local coordinate frame**.

#### Parent Coordinate Frame

Nodes can also have a transform that will manipulate the position of the displayed content. When this transform is
applied to content in the local coordinate frame, the result is the position of the content in the node's *parent*
coordinate frame.

Parent coordinate frames **take the transformation** of the given node into account.

#### Example

For example, a [Rectangle] with a left/top of $(0,0)$ and a width/height of $(100,50)$ will have its content
dislayed $x$ values of $0$ to $100$ and $y$ values of $0$ to $50$ within the *local* coordinate frame.

If the [Rectangle] has a scale of $2$ applied (doubling the size) and is rotated, each point in the rectangle will have
different coordinates in the *parent* coordinate frame (except for the origin).

<div id="coordinate-frame-diagram" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/coordinate-frame-diagram.js"></script>

#### Global Coordinate Frame

Typically, content will be displayed within a [Display]. The [Display] node's local coordinate frame is also called the
*global* coordinate frame, and it is the coordinate frame that maps to browser `px` (CSS pixels).

To compute the shape of a node in the global coordinate frame, it is possible to apply each transformation to it,
from the node to the [Display]'s [Node].

### Bounds

Scenery uses axis-aligned bounding boxes ([Bounds2]) to represent the rectangular area that will contain something
that is displayed.

Each [Paintable] [Node] (one that displays something, like a [Text] or [Path]) will define a `selfBounds` that contains
the content that it individually will display (in the local coordinate frame).

In addition, every [Node] will have a `localBounds` that will include the `selfBounds` of the node, and all of the
children of the node (all in the local coordinate frame).

**Note**: The `localBounds` will **NOT** change when the node is transformed.

For determining the bounding box of a node in the parent coordinate frame, the `bounds` property will be a transformed
version of the `localBounds` of the node.

**Note**: The `bounds` will change when the node is transformed.

### Bounds-Based Positioning

It is very common to position nodes based on their bounds, so Scenery has a number of properties that can be used to
position nodes based on their bounds:

#### Single Coordinates

- `left`, `centerX`, and `right` can be used to read or write the $x$-coordinate of the left, center, or right of the
  node's bounds.
- `top`, `centerY`, and `bottom` can be used to read or write the $y$-coordinate of the top, center, or bottom of the
  node's bounds.

#### Both Coordinates

- `center` can be used to read or write the center of the node's bounds (as a [Vector2])
- `centerTop`, `leftCenter`, `rightCenter`, and `centerBottom` can be used to read or write the center of the top, left,
  right, or bottom of the node's bounds.
- `leftTop`, `rightTop`, `leftBottom`, and `rightBottom` can be used to read or write the corners of the node's bounds. 

If these options are used declaratively, they will be applied after any other options that will affect the bounds of the
node (e.g. a [Node] will be first scaled or rotated, and only THEN positioned based on the bounds).

<div id="positional-coordinates-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/positional-coordinates-example.js"></script>

### Layout

There are a number of layout primitives that can be used to position nodes relative to each other, and can be used to
create more complex layouts:

#### HBox

[HBox] positions content similarly to a horizontal flexbox in CSS, where the content is laid out in a row (or rows), and the
content can be aligned to the top, center, or bottom of the row.

<div id="hbox-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/hbox-example.js"></script>

#### VBox

[VBox] positions content similarly to a vertical flexbox in CSS, where the content is laid out in a column (or columns), and the
content can be aligned to the left, center, or right of the column.

<div id="vbox-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/vbox-example.js"></script>

#### GridBox

[GridBox] positions content in a grid, where the content is laid out in rows and columns.

<div id="gridbox-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/gridbox-example.js"></script>

#### AlignBox

[AlignBox] allows positioning a [Node] within a rectangle, with margins and/or alignment.

<div id="alignbox-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/alignbox-example.js"></script>

#### ManualConstraint

[ManualConstraint] allows for continuously applying imperative-style layout constraints between two or more nodes.

TODO: example

See the [Scenery Layout](./scenery-layout.md) guide for more information on how to use these layout primitives.

## Displays

The [Display] takes a [Node] and renders it (and all of its descendants) to the screen. The [Display] will efficiently
update the view so only changed elements are redrawn, maintaining a high level of performance.

A [Display] can have a background color, which can be fully or partially transparent.

### Creating a Display

A [Display] can either be created with a pre-existing block-level element, or it can create its own element (which can
be placed in the DOM).

#### With a Pre-Existing Element

Pass an element to the `container` option of [Display]'s constructor:

TODO: example

Scenery by default will apply CSS styles to the container. Typically it is best to have a containing block (element
with `position: relative/absolute/fixed`) around a [Display] to ensure that the [Display] is positioned correctly.

#### Creating a New Element

A [Display] will by default create its own element. This can be accessed with `display.domElement`, and can be added to
the DOM:

TODO: example

### Updating the Display

The [Display] will not automatically update when content inside of it changes. Either manually call `updateDisplay()`
on it, or create a render loop with `updateOnRequestAnimationFrame()`. See more below for animation and user interactivity.

### Sizing the Display

The [Display] will have the same size as the container element that it is placed in. **Note**: Currently if the element
changes size the [Display] will not update size.

The [Display] can be manually sized with the `width` and `height` (and those can be mutated in the future):

TODO: example

It also has a method `resizeOnWindowResize()` which can be used to automatically resize the [Display] when the window
resizes.

If the [Display] will take up the entire window, it is recommended to use `assumeFullWindow: true` when constructing
the [Display]. This can improve behavior for some input handling.

## Updates and Animation

Changes over time are usually done with an event loop. These can either be created by using `updateOnRequestAnimationFrame()`,
or by manually listening to animation frames from the browser with [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame).

When using `updateOnRequestAnimationFrame()`, a difference in time (delta-T, or `dt`) will be passed to the update function.
This can be used to create smooth animations that are independent of the frame rate:

TODO: animation example

The [Animation] type (and *twixt* module in general) are very helpful for creating simple animations:

TODO: twixt demo

For more complex animations, it is recommended to rely on positioning/manipulating nodes based on `dt`.

## User Interactivity

(input event system)
(common input listeners)
(mouse/touch area)
(cursor)
(pickable? inputEnabled?)

If the [Display] is not taking up the full window, it is recommended to pass `listenToOnlyElement: true` to the [Display].

## Accessibility

## Instances

TODO: DAG

## Node Properties

Visibility
Opacity
Clip area
Filters
Renderer
