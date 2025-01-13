# RenderImage

## Overview

RenderProgram for an image

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderImage {: #RenderImage }


```js
import { RenderImage } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderImage( transform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span>, image : <span style="font-weight: 400; opacity: 80%;">RenderImageable</span>, extendX : <span style="font-weight: 400; opacity: 80%;">RenderExtend</span>, extendY : <span style="font-weight: 400; opacity: 80%;">RenderExtend</span>, resampleType : <span style="font-weight: 400; opacity: 80%;">RenderResampleType</span>, logic? : <span style="font-weight: 400; opacity: 80%;">RenderImageLogic</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderImage</span> {: #withChildren data-toc-label='withChildren' }

#### transformed( transform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #transformed data-toc-label='transformed' }

#### equalsTyped( other : <span style="font-weight: 400; opacity: 80%;">this</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equalsTyped data-toc-label='equalsTyped' }

(protected)

#### evaluate( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #evaluate data-toc-label='evaluate' }

#### writeInstructions( instructions : <span style="font-weight: 400; opacity: 80%;">RenderInstruction[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeInstructions data-toc-label='writeInstructions' }

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedRenderImage</span> {: #serialize data-toc-label='serialize' }

### Instance Properties

#### logic : <span style="font-weight: 400; opacity: 80%;">RenderImageLogic</span> {: #logic data-toc-label='logic' }

(readonly)

### Static Methods

#### evaluateAnalyticFilter( logic : <span style="font-weight: 400; opacity: 80%;">RenderImageLogic</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, inverseTransform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span>, minExpand : <span style="font-weight: 400; opacity: 80%;">number</span>, maxExpand : <span style="font-weight: 400; opacity: 80%;">number</span>, boundsShift : <span style="font-weight: 400; opacity: 80%;">number</span>, evaluateFace : <span style="font-weight: 400; opacity: 80%;">( face: ClippableFace, x: number, y: number, px: number, py: number, area: number ) =&gt; number</span>, evaluateFull : <span style="font-weight: 400; opacity: 80%;">( x: number, y: number, px: number, py: number ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #evaluateAnalyticFilter data-toc-label='evaluateAnalyticFilter' }

Evaluates a section of a filter analytically.

Basically, we transform the shape (that is presumably clipped to a user-space "pixel") into our image's
coordinate frame. It might overlap one image-coordinate-frame pixel, or many. We'll figure out which pixels it
overlaps, clip it to each of those individually, and then we'll evaluate the filter for each of those.

For most filters, the contribution of a single image-pixel (to our user-pixel) will then be determined by
convolving the filter with the clipped shape, and summing up the integral. For our filters, we're able to
use Green's theorem to evaluate this integral analytically, by doing a line integral along the edges of the
indvidual areas.

The filters we are using have piecewise-polynomial functions, and thus their line integrals are similiarly
"split in pieces". So for e.g. bilinear, we need to evaluate a 2x2 grid of "clipped" image-pixels individually to
figure out the contribution. This means we need to get the clipped path for each image-pixel, and then we evaluate
a specific line integral on the outline of that (and sum it up for each image-pixel in the grid).

We'll need to divide out the image-space result by the image-space area at the end

NOTE: we might have a flipped transform, so our signed area might be NEGATIVE in this case, so this code handles
positive or negative areas.

NOTE: some filters can result in negative contributions for some pixels, so we need to handle that too!

@param logic
@param context
@param inverseTransform - The transform to put the face within the image's coordinate frame
@param minExpand - How far our filter expands to the min direction (left/top) - 0 box, 1 bilinear, 2 mitchell
@param maxExpand - How far our filter expands to the max direction (right/bottom) - 1 box, 1 bilinear, 2 mitchell
@param boundsShift - A shift of indices, should be -1 for the box filter (since it is offset)
@param evaluateFace - Evaluation function for a partial pixel. Evaluates the filter centered at x,y with the
bounds of the clipped pixel in the range of px,py,px+1,py+1
@param evaluateFull - Evaluation function for a full pixel. Evaluates the filter centered at x,y with a full
pixel of the bounds px,py,px+1,py+1

#### extend( extend : <span style="font-weight: 400; opacity: 80%;">RenderExtend</span>, t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #extend data-toc-label='extend' }

#### extendInteger( i : <span style="font-weight: 400; opacity: 80%;">number</span>, size : <span style="font-weight: 400; opacity: 80%;">number</span>, extend : <span style="font-weight: 400; opacity: 80%;">RenderExtend</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #extendInteger data-toc-label='extendInteger' }

Integer version of extend_mode.
Given size=4, provide the following patterns:

input:  -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

pad:     0,  0,  0,  0,  0,  0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3
repeat:  2,  3,  0,  1,  2,  3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1
reflect: 2,  3,  3,  2,  1,  0, 0, 1, 2, 3, 3, 2, 1, 0, 0, 1

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedRenderImage</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderImage</span> {: #deserialize data-toc-label='deserialize' }

#### serializeRenderImageable( imageable : <span style="font-weight: 400; opacity: 80%;">RenderImageable</span> ) : <span style="font-weight: 400; opacity: 80%;">SerializedRenderImageable</span> {: #serializeRenderImageable data-toc-label='serializeRenderImageable' }

#### deserializeRenderImageable( obj : <span style="font-weight: 400; opacity: 80%;">SerializedRenderImageable</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderImageable</span> {: #deserializeRenderImageable data-toc-label='deserializeRenderImageable' }



## Class RenderImageLogic {: #RenderImageLogic }


```js
import { RenderImageLogic } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderImageLogic( transform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span>, image : <span style="font-weight: 400; opacity: 80%;">RenderImageable</span>, extendX : <span style="font-weight: 400; opacity: 80%;">RenderExtend</span>, extendY : <span style="font-weight: 400; opacity: 80%;">RenderExtend</span>, resampleType : <span style="font-weight: 400; opacity: 80%;">RenderResampleType</span> ) {: #RenderImageLogic-constructor data-toc-label='RenderImageLogic-constructor' }

### Instance Methods

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderImageLogic</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderImageLogic-equals data-toc-label='RenderImageLogic-equals' }

#### evaluate( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #RenderImageLogic-evaluate data-toc-label='RenderImageLogic-evaluate' }

### Instance Properties

#### inverseTransform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #RenderImageLogic-inverseTransform data-toc-label='RenderImageLogic-inverseTransform' }

(readonly)

#### inverseTransformWithHalfOffset : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #RenderImageLogic-inverseTransformWithHalfOffset data-toc-label='RenderImageLogic-inverseTransformWithHalfOffset' }

(readonly)



## Class RenderInstructionImage {: #RenderInstructionImage }


```js
import { RenderInstructionImage } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderInstructionImage( logic : <span style="font-weight: 400; opacity: 80%;">RenderImageLogic</span> ) {: #RenderInstructionImage-constructor data-toc-label='RenderInstructionImage-constructor' }

### Instance Methods

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #RenderInstructionImage-toString data-toc-label='RenderInstructionImage-toString' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">RenderInstruction</span>, areLocationsEqual : <span style="font-weight: 400; opacity: 80%;">( a: RenderInstructionLocation, b: RenderInstructionLocation ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #RenderInstructionImage-equals data-toc-label='RenderInstructionImage-equals' }

#### execute( stack : <span style="font-weight: 400; opacity: 80%;">RenderExecutionStack</span>, context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span>, executor : <span style="font-weight: 400; opacity: 80%;">RenderExecutor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionImage-execute data-toc-label='RenderInstructionImage-execute' }

#### writeBinary( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span>, getOffset : <span style="font-weight: 400; opacity: 80%;">( location: RenderInstructionLocation ) =&gt; number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #RenderInstructionImage-writeBinary data-toc-label='RenderInstructionImage-writeBinary' }

#### getBinaryLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #RenderInstructionImage-getBinaryLength data-toc-label='RenderInstructionImage-getBinaryLength' }



## Source Code

See the source for [RenderImage.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderImage.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
