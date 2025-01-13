# RenderProgram

## Overview

Represents an abstract rendering program, that may be location-varying

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderProgram {: #RenderProgram }


```js
import { RenderProgram } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderProgram( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span>, isFullyTransparent : <span style="font-weight: 400; opacity: 80%;">boolean</span>, isFullyOpaque : <span style="font-weight: 400; opacity: 80%;">boolean</span>, needsFace, needsArea, needsCentroid ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### withChildren( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #withChildren data-toc-label='withChildren' }

Should return an otherwise-identical version of the RenderProgram with the given children.

#### getName() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getName data-toc-label='getName' }

Should return the name of the RenderProgram, for serialization and debugging purposes.

#### simplified() : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #simplified data-toc-label='simplified' }

#### getSimplified( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram | null</span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

This is an internal method for RenderPrograms to implement their simplification. It will get called by
simplified() with pre-simplified children.

null should be returned when there is no simplification possible. The simplification engine will be able to use
this information to reduce the number of RenderPrograms created during simplification. (For instance, if
none of the children were actually simplified, it will be able to mark THIS RenderProgram as being
"fully simplified", and further calls to simplified() can short-circuit.

#### writeInstructions( instructions : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeInstructions data-toc-label='writeInstructions' }

#### evaluate( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #evaluate data-toc-label='evaluate' }

Premultiplied linear RGB, ignoring the path

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equals data-toc-label='equals' }

#### equalsTyped( other : <span style="font-weight: 400; opacity: 80%;">this</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### getEvaluator() : <span style="font-weight: 400; opacity: 80%;">RenderEvaluator</span> {: #getEvaluator data-toc-label='getEvaluator' }

#### transformed( transform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #transformed data-toc-label='transformed' }

Returns a new RenderProgram with the given transform applied to it.

NOTE: Default implementation, should be overridden by subclasses that have positioning information embedded inside

#### depthFirst( callback : <span style="font-weight: 400; opacity: 80%;">( program: RenderProgram ) =&gt; void</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #depthFirst data-toc-label='depthFirst' }

TODO: add early exit!

#### containsRenderProgram( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #containsRenderProgram data-toc-label='containsRenderProgram' }

#### replace( callback : <span style="font-weight: 400; opacity: 80%;">( program: RenderProgram ) =&gt; RenderProgram | null</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #replace data-toc-label='replace' }

#### withPathInclusion( pathTest : <span style="font-weight: 400; opacity: 80%;">( renderPath: RenderPath ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #withPathInclusion data-toc-label='withPathInclusion' }

#### isSplittable() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isSplittable data-toc-label='isSplittable' }

#### split( face : <span style="font-weight: 400; opacity: 80%;">RenderableFace</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderableFace[]</span> {: #split data-toc-label='split' }

#### getNeeds() : <span style="font-weight: 400; opacity: 80%;">RenderProgramNeeds</span> {: #getNeeds data-toc-label='getNeeds' }

#### colorConverted( fromSpace : <span style="font-weight: 400; opacity: 80%;">RenderColorSpace</span>, toSpace : <span style="font-weight: 400; opacity: 80%;">RenderColorSpace</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #colorConverted data-toc-label='colorConverted' }

#### toRecursiveString( indent ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toRecursiveString data-toc-label='toRecursiveString' }

#### getExtraDebugString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getExtraDebugString data-toc-label='getExtraDebugString' }

(protected)

#### print() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #print data-toc-label='print' }

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedRenderProgram</span> {: #serialize data-toc-label='serialize' }

### Instance Properties

#### children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> {: #children data-toc-label='children' }

(readonly)

#### isSimplified {: #isSimplified data-toc-label='isSimplified' }

Whether it is fully simplified (so simplification steps can be skipped)

#### isFullyTransparent : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isFullyTransparent data-toc-label='isFullyTransparent' }

(readonly)

Whether it is fully transparent (so we can skip rendering it)

#### isFullyOpaque : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isFullyOpaque data-toc-label='isFullyOpaque' }

(readonly)

Whether it is fully opaque (so we could potentially skip rendering other things)

#### needsFace : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #needsFace data-toc-label='needsFace' }

(readonly)

Whether this subtree wants a computed face for its evaluation (If not, can give bogus values for evaluate)

#### needsArea : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #needsArea data-toc-label='needsArea' }

(readonly)

Whether this subtree wants a computed area for its evaluation (If not, can give bogus values for evaluate)

#### needsCentroid : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #needsCentroid data-toc-label='needsCentroid' }

(readonly)

Whether this subtree wants a computed centroid for its evaluation (If not, can give bogus values for evaluate)

#### hasPathBoolean : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #hasPathBoolean data-toc-label='hasPathBoolean' }

(readonly)

Whether this subtree contains a RenderPathBoolean

### Static Methods

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedRenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #deserialize data-toc-label='deserialize' }

#### ensureFace( face : <span style="font-weight: 400; opacity: 80%;">ClippableFace | null</span>, minX : <span style="font-weight: 400; opacity: 80%;">number</span>, minY : <span style="font-weight: 400; opacity: 80%;">number</span>, maxX : <span style="font-weight: 400; opacity: 80%;">number</span>, maxY : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">ClippableFace</span> {: #ensureFace data-toc-label='ensureFace' }

TODO: Prefer RenderEvaluationContext.getFace()
@deprecated

#### closureIsFullyTransparent( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #closureIsFullyTransparent data-toc-label='closureIsFullyTransparent' }

#### closureIsFullyOpaque( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #closureIsFullyOpaque data-toc-label='closureIsFullyOpaque' }

#### closureSimplified( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #closureSimplified data-toc-label='closureSimplified' }

### Static Properties

#### simplify {: #simplify data-toc-label='simplify' }

Global flag for controlling whether simplification happens. Useful for debugging.



## Source Code

See the source for [RenderProgram.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderProgram.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
