# ThreeStage

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/mobius/blob/main/js/ThreeStage.ts](https://github.com/phetsims/mobius/blob/main/js/ThreeStage.ts) for the most up-to-date information.

## Overview

Encapsulates the main three.js primitives needed for a stage (scene/camera/renderer).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ThreeStage {: #ThreeStage }


```js
import { ThreeStage } from 'scenerystack/mobius';
```
### Constructor

#### new ThreeStage( providedOptions? : <span style="font-weight: 400;">[ThreeStageOptions](../mobius/ThreeStage.md#ThreeStageOptions)</span> ) {: #ThreeStage-constructor data-toc-label='new ThreeStage' }

### Instance Methods

#### renderToCanvas( supersampleMultiplier, backingMultiplier, scale ) : <span style="font-weight: 400;">[HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)</span> {: #renderToCanvas data-toc-label='renderToCanvas' }

Returns a Canvas containing the displayed content in this scene.

#### projectPoint( point : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #projectPoint data-toc-label='projectPoint' }

Projects a 3d point in the global coordinate frame to one within the 2d global coordinate frame.

#### unprojectPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, modelZ ) : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> {: #unprojectPoint data-toc-label='unprojectPoint' }

Project a 2d global screen coordinate into 3d global coordinates using THREE/Vector3.unproject()


#### getRayFromScreenPoint( screenPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Ray3](../dot/Ray3.md)</span> {: #getRayFromScreenPoint data-toc-label='getRayFromScreenPoint' }

Given a screen point, returns a 3D ray representing the camera's position and direction that point would be in the
3D scene.

#### setDimensions( width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setDimensions data-toc-label='setDimensions' }

#### adjustViewOffset( cameraBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) {: #adjustViewOffset data-toc-label='adjustViewOffset' }

Adjusts the camera's view offsets so that it displays the camera's main output within the specified cameraBounds.
This is a generalization of the isometric FOV computation, as it also supports other combinations such as properly
handling pan/zoom. See https://github.com/phetsims/density/issues/50

#### render( target : <span style="font-weight: 400;">[THREE](../mobius/THREE.md).WebGLRenderTarget | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">undefined</span></span>, autoClear ) {: #render data-toc-label='render' }

Renders the simulation to a specific rendering target

@param target - undefined for the default target
@param autoClear - when true, THREE will clear all pixels prior to rendering the next frame onto it. This is
                   expensive, but can clean up animations where objects look laggy/warped in certain contexts.

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references.

### Instance Properties

#### activeScale : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #activeScale data-toc-label='activeScale' }

Scale applied to interaction that isn't directly tied to screen coordinates (rotation), updated in layout

#### canvasWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #canvasWidth data-toc-label='canvasWidth' }

#### canvasHeight : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #canvasHeight data-toc-label='canvasHeight' }

#### threeScene : <span style="font-weight: 400;">[THREE](../mobius/THREE.md).Scene</span> {: #threeScene data-toc-label='threeScene' }

(readonly)

#### threeCamera : <span style="font-weight: 400;">[THREE](../mobius/THREE.md).PerspectiveCamera</span> {: #threeCamera data-toc-label='threeCamera' }

(readonly)

#### threeRenderer : <span style="font-weight: 400;">[THREE](../mobius/THREE.md).WebGLRenderer | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #threeRenderer data-toc-label='threeRenderer' }

#### dimensionsChangedEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)</span> {: #dimensionsChangedEmitter data-toc-label='dimensionsChangedEmitter' }

(readonly)

#### contextLostEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)</span> {: #contextLostEmitter data-toc-label='contextLostEmitter' }

(readonly)

#### contextRestoredEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)</span> {: #contextRestoredEmitter data-toc-label='contextRestoredEmitter' }

(readonly)

### Static Methods

#### computeIsometricFOV( fov : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, canvasWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, canvasHeight : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, layoutWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, layoutHeight : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #computeIsometricFOV data-toc-label='computeIsometricFOV' }

It's a bit tricky, since if we are vertically-constrained, we don't need to adjust the camera's FOV (since the
width of the scene will scale proportionally to the scale we display our contents at). It's only when our view
is horizontally-constrained where we have to account for the changed aspect ratio, and adjust the FOV so that
the content shows up at a scale of "sy / sx" compared to the normal case. Note that sx === sy is where our
layout bounds fit perfectly in the self, so we don't really have a constraint.
Most of the complexity here is that threeCamera.fov is in degrees, and our ideal vertically-constrained FOV is
50 (so there's conversion factors in place).



## Type ThreeStageOptions {: #ThreeStageOptions }


```js
import type { ThreeStageOptions } from 'scenerystack/mobius';
```


- **backgroundColorProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Color](../scenery/Color.md)&gt;
- **cameraPosition**?: [Vector3](../dot/Vector3.md)
<br>  The initial camera position
- **threeRendererOptions**?: [THREE](../mobius/THREE.md).WebGLRendererParameters
- **threeRendererPixelRatio**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Source Code

See the source for [ThreeStage.ts](https://github.com/phetsims/mobius/blob/main/js/ThreeStage.ts) in the [mobius](https://github.com/phetsims/mobius) repository.
