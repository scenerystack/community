# Path

## Overview

A Path draws a Shape with a specific type of fill and stroke. Mixes in Paintable.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Path {: #Path }


```js
import { Path } from 'scenerystack/scenery';
```
### Constructor

#### new Path( shape : <span style="font-weight: 400;">[InputShape](../scenery/Path.md#InputShape) | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[InputShape](../scenery/Path.md#InputShape)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[PathOptions](../scenery/Path.md#PathOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### setShape( shape : <span style="font-weight: 400;">[InputShape](../scenery/Path.md#InputShape)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setShape data-toc-label='setShape' }

#### getShape() : <span style="font-weight: 400;">ParsedShape</span> {: #getShape data-toc-label='getShape' }

Returns the shape that was set for this Path (or for subtypes like Line and Rectangle, will return an immutable
Shape that is equivalent in appearance).

It is best to generally assume modifications to the Shape returned is not supported. If there is no shape
currently, null will be returned.

#### setShapeProperty( newTarget : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[InputShape](../scenery/Path.md#InputShape)&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setShapeProperty data-toc-label='setShapeProperty' }

See documentation for Node.setVisibleProperty, except this is for the shape

#### getShapeProperty() : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;[InputShape](../scenery/Path.md#InputShape)&gt;</span> {: #getShapeProperty data-toc-label='getShapeProperty' }

Like Node.getVisibleProperty(), but for the shape. Note this is not the same as the Property provided in
setShapeProperty. Thus is the nature of TinyForwardingProperty.

#### getStrokedShape() : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #getStrokedShape data-toc-label='getStrokedShape' }

Returns a lazily-created Shape that has the appearance of the Path's shape but stroked using the current
stroke style of the Path.

NOTE: It is invalid to call this on a Path that does not currently have a Shape (usually a Path where
      the shape is set to null).

#### getPathRendererBitmask() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getPathRendererBitmask data-toc-label='getPathRendererBitmask' }

(protected)

Returns a bitmask representing the supported renderers for the current configuration of the Path or subtype.

Should be overridden by subtypes to either extend or restrict renderers, depending on what renderers are
supported.

@returns - A bitmask that includes supported renderers, see Renderer for details.

#### invalidateSupportedRenderers() {: #invalidateSupportedRenderers data-toc-label='invalidateSupportedRenderers' }

Triggers a check and update for what renderers the current configuration of this Path or subtype supports.
This should be called whenever something that could potentially change supported renderers happen (which can
be the shape, properties of the strokes or fills, etc.)

#### invalidatePath() {: #invalidatePath data-toc-label='invalidatePath' }

(protected)

Invalidates the node's self-bounds and any other recorded metadata about the outline or bounds of the Shape.

This is meant to be used for all Path subtypes (unlike invalidateShape).

#### updateSelfBounds() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #updateSelfBounds data-toc-label='updateSelfBounds' }

(protected)

Computes a more efficient selfBounds for our Path.

@returns - Whether the self bounds changed.

#### setBoundsMethod( boundsMethod : <span style="font-weight: 400;">[PathBoundsMethod](../scenery/Path.md#PathBoundsMethod)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setBoundsMethod data-toc-label='setBoundsMethod' }

#### getBoundsMethod() : <span style="font-weight: 400;">[PathBoundsMethod](../scenery/Path.md#PathBoundsMethod)</span> {: #getBoundsMethod data-toc-label='getBoundsMethod' }

Returns the current bounds method. See setBoundsMethod for details.

#### computeShapeBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #computeShapeBounds data-toc-label='computeShapeBounds' }

Computes the bounds of the Path (or subtype when overridden). Meant to be overridden in subtypes for more
efficient bounds computations (but this will work as a fallback). Includes the stroked region if there is a
stroke applied to the Path.

#### areSelfBoundsValid() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #areSelfBoundsValid data-toc-label='areSelfBoundsValid' }

Whether this Node's selfBounds are considered to be valid (always containing the displayed self content
of this node). Meant to be overridden in subtypes when this can change (e.g. Text).

If this value would potentially change, please trigger the event 'selfBoundsValid'.

#### getTransformedSelfBounds( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getTransformedSelfBounds data-toc-label='getTransformedSelfBounds' }

Returns our self bounds when our rendered self is transformed by the matrix.

#### getTransformedSafeSelfBounds( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getTransformedSafeSelfBounds data-toc-label='getTransformedSafeSelfBounds' }

Returns our safe self bounds when our rendered self is transformed by the matrix.

#### hasShape() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasShape data-toc-label='hasShape' }

Returns whether this Path has an associated Shape (instead of no shape, represented by null)

#### canvasPaintSelf( wrapper : <span style="font-weight: 400;">[CanvasContextWrapper](../scenery/CanvasContextWrapper.md)</span>, matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) {: #canvasPaintSelf data-toc-label='canvasPaintSelf' }

(protected)

Draws the current Node's self representation, assuming the wrapper's Canvas context is already in the local
coordinate frame of this node.

@param wrapper
@param matrix - The transformation matrix already applied to the context.

#### isPainted() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isPainted data-toc-label='isPainted' }

Whether this Node itself is painted (displays something itself).

#### containsPointSelf( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsPointSelf data-toc-label='containsPointSelf' }

Computes whether the provided point is "inside" (contained) in this Path's self content, or "outside".

@param point - Considered to be in the local coordinate frame

#### getSelfShape() : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #getSelfShape data-toc-label='getSelfShape' }

Returns a Shape that represents the area covered by containsPointSelf.

#### intersectsBoundsSelf( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #intersectsBoundsSelf data-toc-label='intersectsBoundsSelf' }

Returns whether this Path's selfBounds is intersected by the specified bounds.

@param bounds - Bounds to test, assumed to be in the local coordinate frame.

#### dispose() {: #dispose data-toc-label='dispose' }

Disposes the path, releasing shape listeners if needed (and preventing new listeners from being added).

#### mutate( options? : <span style="font-weight: 400;">[PathOptions](../scenery/Path.md#PathOptions)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #mutate data-toc-label='mutate' }

### Static Properties

#### DEFAULT_PATH_OPTIONS {: #DEFAULT_PATH_OPTIONS data-toc-label='DEFAULT_PATH_OPTIONS' }

(readonly)

Initial values for most Node mutator options



## Type InputShape {: #InputShape }


The valid parameter types are:
- Shape: (from Kite), normally used.
- string: Uses the SVG Path format, see https://www.w3.org/TR/SVG/paths.html (the PATH part of &lt;path d="PATH"/&gt;).
          This will immediately be converted to a Shape object when set, and getShape() or equivalents will return
          the parsed Shape instance instead of the original string. See "ParsedShape"
- null: Indicates that there is no Shape, and nothing is drawn. Usually used as a placeholder.

NOTE: Be aware of the potential for memory leaks. If a Shape is not marked as immutable (with makeImmutable()),
      Path will add a listener so that it is updated when the Shape itself changes. If there is a listener
      added, keeping a reference to the Shape will also keep a reference to the Path object (and thus whatever
      Nodes are connected to the Path). For now, set path.shape = null if you need to release the reference
      that the Shape would have, or call dispose() on the Path if it is not needed anymore.

```js
import type { InputShape } from 'scenerystack/scenery';
```


[Shape](../kite/Shape.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>



## Type PathBoundsMethod {: #PathBoundsMethod }


```js
import type { PathBoundsMethod } from 'scenerystack/scenery';
```


"accurate" | "unstroked" | "tightPadding" | "safePadding" | "none"



## Type PathOptions {: #PathOptions }


```js
import type { PathOptions } from 'scenerystack/scenery';
```


- **shape**?: [InputShape](../scenery/Path.md#InputShape)
- **shapeProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[InputShape](../scenery/Path.md#InputShape)&gt;
- **boundsMethod**?: [PathBoundsMethod](../scenery/Path.md#PathBoundsMethod)
- &amp; [PaintableOptions](../scenery/Paintable.md#PaintableOptions) &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [Path.ts](https://github.com/phetsims/scenery/blob/main/js/nodes/Path.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
