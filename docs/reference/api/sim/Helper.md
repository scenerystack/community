# Helper

## Overview

Some in-simulation utilities designed to help designers and developers

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Helper {: #Helper }


```js
import { Helper } from 'scenerystack/sim';
```
### Constructor

#### new Helper( sim : <span style="font-weight: 400;">[Sim](../sim/Sim.md)</span>, simDisplay : <span style="font-weight: 400;">[SimDisplay](../sim/SimDisplay.md)</span> ) {: #Helper-constructor data-toc-label='new Helper' }

### Instance Methods



### Instance Properties

#### inputBasedPickingProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #inputBasedPickingProperty data-toc-label='inputBasedPickingProperty' }

Whether we should use the input system for picking, or if we should ignore it (and the flags) for what is visual

#### useLeafNodeProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #useLeafNodeProperty data-toc-label='useLeafNodeProperty' }

Whether we should return the leaf-most Trail (instead of finding the one with input listeners)

#### pointerAreaTypeProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;PointerAreaType&gt;</span> {: #pointerAreaTypeProperty data-toc-label='pointerAreaTypeProperty' }

#### activeProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #activeProperty data-toc-label='activeProperty' }

Whether the helper is visible (active) or not

#### visualTreeVisibleProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #visualTreeVisibleProperty data-toc-label='visualTreeVisibleProperty' }

#### pdomTreeVisibleProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #pdomTreeVisibleProperty data-toc-label='pdomTreeVisibleProperty' }

#### underPointerVisibleProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #underPointerVisibleProperty data-toc-label='underPointerVisibleProperty' }

#### optionsVisibleProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #optionsVisibleProperty data-toc-label='optionsVisibleProperty' }

#### previewVisibleProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #previewVisibleProperty data-toc-label='previewVisibleProperty' }

#### selectedNodeContentVisibleProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #selectedNodeContentVisibleProperty data-toc-label='selectedNodeContentVisibleProperty' }

#### selectedTrailContentVisibleProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #selectedTrailContentVisibleProperty data-toc-label='selectedTrailContentVisibleProperty' }

#### highlightVisibleProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #highlightVisibleProperty data-toc-label='highlightVisibleProperty' }

#### boundsVisibleProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #boundsVisibleProperty data-toc-label='boundsVisibleProperty' }

#### selfBoundsVisibleProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #selfBoundsVisibleProperty data-toc-label='selfBoundsVisibleProperty' }

#### getHelperNodeVisibleProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #getHelperNodeVisibleProperty data-toc-label='getHelperNodeVisibleProperty' }

#### helperVisibleProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #helperVisibleProperty data-toc-label='helperVisibleProperty' }

Whether the entire helper is visible (or collapsed)

#### pointerPositionProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;[Vector2](../dot/Vector2.md)&gt;</span> {: #pointerPositionProperty data-toc-label='pointerPositionProperty' }

Where the current pointer is

#### overInterfaceProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #overInterfaceProperty data-toc-label='overInterfaceProperty' }

Whether the pointer is over the UI interface

#### selectedTrailProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;[Trail](../scenery/Trail.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #selectedTrailProperty data-toc-label='selectedTrailProperty' }

If the user has clicked on a Trail and selected it

#### treeHoverTrailProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;[Trail](../scenery/Trail.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #treeHoverTrailProperty data-toc-label='treeHoverTrailProperty' }

What Trail the user is over in the tree UI

#### pointerTrailProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Trail](../scenery/Trail.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #pointerTrailProperty data-toc-label='pointerTrailProperty' }

What Trail the pointer is over right now

#### previewTrailProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Trail](../scenery/Trail.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #previewTrailProperty data-toc-label='previewTrailProperty' }

What Trail to show as a preview (and to highlight) - selection overrides what the pointer is over

#### helperNodeProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #helperNodeProperty data-toc-label='helperNodeProperty' }

A helper-displayed Node created to help with debugging various types

#### previewShapeProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Shape](../kite/Shape.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #previewShapeProperty data-toc-label='previewShapeProperty' }

The global shape of what is selected

#### screenViewProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;[ScreenView](../sim/ScreenView.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #screenViewProperty data-toc-label='screenViewProperty' }

#### imageDataProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;ImageData | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #imageDataProperty data-toc-label='imageDataProperty' }

ImageData from the sim

#### colorProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Color](../scenery/Color.md)&gt;</span> {: #colorProperty data-toc-label='colorProperty' }

The pixel color under the pointer

### Static Methods

#### initialize( sim : <span style="font-weight: 400;">[Sim](../sim/Sim.md)</span>, simDisplay : <span style="font-weight: 400;">[SimDisplay](../sim/SimDisplay.md)</span> ) {: #initialize data-toc-label='initialize' }

### Static Properties

#### helper : <span style="font-weight: 400;">[Helper](../sim/Helper.md)</span> {: #helper data-toc-label='helper' }

Singleton, lazily created so we don't slow down startup



## Source Code

See the source for [Helper.ts](https://github.com/phetsims/joist/blob/main/js/Helper.ts) in the [joist](https://github.com/phetsims/joist) repository.
