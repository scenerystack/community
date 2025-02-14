--8<-- "api-reference-snippets.md"

# Three.js Integration

## Basic Usage

To include a Three.js scene with specific dimensions, [ThreeNode] can be used directly:

<div class="sandbox-example" data-example="/js/threejs-integration/basic-example.js"></div>

It will need to have `render()` called whenever it should be updated. If the position of the scene inside the Scenery
[Display] changes, `layout()` should be called as well, so it is safe to call both.

## Embedding Scenery Content

It is also possible to embed Scenery content within a Three.js scene by using [NodeTexture]:

<div class="sandbox-example" data-example="/js/threejs-integration/embed-example.js"></div>

[NodeTexture] can be updated with `update()` whenever it needs to change.

## Simulation Usage

If you want to have a Three.js scene that takes up the entire screen of a [simulation](../simulation.md), you can
use [MobiusScreenView], which will automatically handle layout, resizing, and sets up coordinate transformations to/from
the Three.js scene.