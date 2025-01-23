<link rel="stylesheet" href="/css/examples.css">

# Scenery Basics

!!! warning "Under Construction"
    This section and others in Getting Started with SceneryStack are under heavy revisement
    and will be updated in January 2025.

## Overview

Scenery is a library that allows developers to build and render 2D views using a declarative structure, bridging the gap
between abstract view models and low-level rendering in the browser.

Scenery organizes all of your visual elements into a hierarchy of nodes (often called a “scene graph”) that makes it
easier to manage layout and interaction. Each node is responsible for its own transformations and styling, enabling you
to reposition, rotate, or adjust the appearance of specific parts of your UI without affecting unrelated elements.

One of the strengths of Scenery is its flexibility in rendering: depending on your configuration, it can create and
update elements in the DOM via SVG, Canvas, or WebGL. Moreover, it can mix and match these technologies within the same
scene, meaning certain portions might leverage high-fidelity vector graphics in SVG while others use fast raster
operations in Canvas or advanced 3D capabilities in WebGL.

When you finalize your UI structure, the Scenery `Display` efficiently updates the view so only changed elements are
redrawn. This helps maintain a high level of performance while keeping your application’s codebase both modular and easy
to reason about. In essence, Scenery’s declarative approach streamlines the process of building rich, interactive 2D
interfaces.

## Getting Started

??? note "Need to set up SceneryStack first?"
    This guide assumes you have already read the [Setup](./setup.md) guide and have a SceneryStack project set up.

To get started with Scenery, you need to create a `Display` and a `Node` to render. Here’s a simple example that creates
a `Display` and renders a red rectangle:

First, create a block-level element (like a div) that has declared dimensions:

```html
<div id="getting-started-example" style="width: 400px; height: 100px;"></div>
```

<div id="getting-started-example" class="sandbox-example" style="width: 400px; height: 100px; margin: 0 auto; border: 1px solid black;"></div>
<div id="getting-started-example-appendix" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/getting-started-example.js"></script>

!!! note
    All the code examples on this page are editable! Feel free to try them out—editing the code will update the example 
    display above the code. Have fun experimenting!

The `Display` will have similar coordinates to normal elements, with the origin at the top-left corner of the element.
In this case, the `Display` will be 400px wide and 100px tall.

The code above places the `Text` so that its center is at (200, 50) in the `Display` (halfway across and halfway down).

## Nodes

Nodes are the fundamental building blocks of Scenery. They represent visual elements in your scene. Each node can have
children, which are other nodes that are positioned relative to their parent.

Scenery often uses a declarative syntax to create nodes, but also supports mutation of nodes for performance. For example,
you can create a `Rectangle` node with a specific size and color:

<div id="declarative-rectangle-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/declarative-rectangle-example.js"></script>

Or you can create a `Rectangle` node and then modify its properties either directly:

<div id="mutation-rectangle-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/mutation-rectangle-example.js"></script>

or by using `mutate()`:

<div id="mutate-rectangle-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-basics/mutate-rectangle-example.js"></script>

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

## Positioning Nodes

x/y/translation
scale/rotation/matrix/etc.

### Bounds

TODO: decide on how to order positioning and bounds.

## Layout

TODO: note HBox/VBox/GridBox

## Shapes

## Images

## DOM Elements

TODO: see demo in tour of scenery

## Displays

## Animation

## User Interactivity

(input event system)
(common input listeners)
(mouse/touch area)
(cursor)
(pickable? inputEnabled?)

## Accessibility

## Instances

TODO: DAG

## Node Properties

Visibility
Opacity
Clip area
Filters
Renderer