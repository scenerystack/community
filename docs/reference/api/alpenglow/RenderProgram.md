# RenderProgram

## Overview

Represents an abstract rendering program, that may be location-varying

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderProgram {: #RenderProgram }


```js
import { RenderProgram } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderProgram( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span>, isFullyTransparent : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, isFullyOpaque : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, needsFace, needsArea, needsCentroid ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #withChildren data-toc-label='withChildren' }

Should return an otherwise-identical version of the RenderProgram with the given children.

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

Should return the name of the RenderProgram, for serialization and debugging purposes.

#### simplified() : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #simplified data-toc-label='simplified' }

#### getSimplified( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

This is an internal method for RenderPrograms to implement their simplification. It will get called by
simplified() with pre-simplified children.

null should be returned when there is no simplification possible. The simplification engine will be able to use
this information to reduce the number of RenderPrograms created during simplification. (For instance, if
none of the children were actually simplified, it will be able to mark THIS RenderProgram as being
"fully simplified", and further calls to simplified() can short-circuit.

#### writeInstructions( instructions : <span style="font-weight: 400;">[RenderInstruction](../alpenglow/RenderInstruction.md)[]</span> ) {: #writeInstructions data-toc-label='writeInstructions' }

#### evaluate( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #evaluate data-toc-label='evaluate' }

Premultiplied linear RGB, ignoring the path

#### equals( other : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equals data-toc-label='equals' }

#### equalsTyped( other : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### getEvaluator() : <span style="font-weight: 400;">[RenderEvaluator](../alpenglow/RenderProgram.md#RenderEvaluator)</span> {: #getEvaluator data-toc-label='getEvaluator' }

#### transformed( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #transformed data-toc-label='transformed' }

Returns a new RenderProgram with the given transform applied to it.

NOTE: Default implementation, should be overridden by subclasses that have positioning information embedded inside

#### depthFirst( callback : <span style="font-weight: 400;">( program: [RenderProgram](../alpenglow/RenderProgram.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #depthFirst data-toc-label='depthFirst' }

TODO: add early exit!

#### containsRenderProgram( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsRenderProgram data-toc-label='containsRenderProgram' }

#### replace( callback : <span style="font-weight: 400;">( program: [RenderProgram](../alpenglow/RenderProgram.md) ) =&gt; [RenderProgram](../alpenglow/RenderProgram.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #replace data-toc-label='replace' }

#### withPathInclusion( pathTest : <span style="font-weight: 400;">( renderPath: [RenderPath](../alpenglow/RenderPath.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #withPathInclusion data-toc-label='withPathInclusion' }

#### isSplittable() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isSplittable data-toc-label='isSplittable' }

#### split( face : <span style="font-weight: 400;">[RenderableFace](../alpenglow/RenderableFace.md)</span> ) : <span style="font-weight: 400;">[RenderableFace](../alpenglow/RenderableFace.md)[]</span> {: #split data-toc-label='split' }

#### getNeeds() : <span style="font-weight: 400;">[RenderProgramNeeds](../alpenglow/RenderProgramNeeds.md)</span> {: #getNeeds data-toc-label='getNeeds' }

#### colorConverted( fromSpace : <span style="font-weight: 400;">[RenderColorSpace](../alpenglow/RenderColorSpace.md)</span>, toSpace : <span style="font-weight: 400;">[RenderColorSpace](../alpenglow/RenderColorSpace.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #colorConverted data-toc-label='colorConverted' }

#### toRecursiveString( indent ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toRecursiveString data-toc-label='toRecursiveString' }

#### getExtraDebugString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getExtraDebugString data-toc-label='getExtraDebugString' }

(protected)

#### print() {: #print data-toc-label='print' }

#### serialize() : <span style="font-weight: 400;">[SerializedRenderProgram](../alpenglow/RenderProgram.md#SerializedRenderProgram)</span> {: #serialize data-toc-label='serialize' }

### Instance Properties

#### children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> {: #children data-toc-label='children' }

(readonly)

#### isSimplified {: #isSimplified data-toc-label='isSimplified' }

Whether it is fully simplified (so simplification steps can be skipped)

#### isFullyTransparent : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isFullyTransparent data-toc-label='isFullyTransparent' }

(readonly)

Whether it is fully transparent (so we can skip rendering it)

#### isFullyOpaque : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isFullyOpaque data-toc-label='isFullyOpaque' }

(readonly)

Whether it is fully opaque (so we could potentially skip rendering other things)

#### needsFace : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #needsFace data-toc-label='needsFace' }

(readonly)

Whether this subtree wants a computed face for its evaluation (If not, can give bogus values for evaluate)

#### needsArea : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #needsArea data-toc-label='needsArea' }

(readonly)

Whether this subtree wants a computed area for its evaluation (If not, can give bogus values for evaluate)

#### needsCentroid : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #needsCentroid data-toc-label='needsCentroid' }

(readonly)

Whether this subtree wants a computed centroid for its evaluation (If not, can give bogus values for evaluate)

#### hasPathBoolean : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasPathBoolean data-toc-label='hasPathBoolean' }

(readonly)

Whether this subtree contains a RenderPathBoolean

### Static Methods

#### deserialize( obj : <span style="font-weight: 400;">[SerializedRenderProgram](../alpenglow/RenderProgram.md#SerializedRenderProgram)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #deserialize data-toc-label='deserialize' }

#### ensureFace( face : <span style="font-weight: 400;">[ClippableFace](../alpenglow/ClippableFace.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[ClippableFace](../alpenglow/ClippableFace.md)</span> {: #ensureFace data-toc-label='ensureFace' }

TODO: Prefer RenderEvaluationContext.getFace()
@deprecated

#### closureIsFullyTransparent( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #closureIsFullyTransparent data-toc-label='closureIsFullyTransparent' }

#### closureIsFullyOpaque( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #closureIsFullyOpaque data-toc-label='closureIsFullyOpaque' }

#### closureSimplified( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #closureSimplified data-toc-label='closureSimplified' }

### Static Properties

#### simplify {: #simplify data-toc-label='simplify' }

Global flag for controlling whether simplification happens. Useful for debugging.



## Source Code

See the source for [RenderProgram.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderProgram.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
