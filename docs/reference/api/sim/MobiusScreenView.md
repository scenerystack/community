# MobiusScreenView

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/mobius/blob/main/js/MobiusScreenView.ts](https://github.com/phetsims/mobius/blob/main/js/MobiusScreenView.ts) for the most up-to-date information.

## Overview

MobiusScreenView extends PhET's ScreenView to include functionality specific to 3D model-to-view and view-to-model
transformations using THREE.js. The MobiusScreenView renders 3D content in an isometric projection and handles the
layout and rendering processes.

@author Agustín Vallejo (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)

## Class MobiusScreenView {: #MobiusScreenView }


```js
import { MobiusScreenView } from 'scenerystack/sim';
```
### Constructor

#### new MobiusScreenView( providedOptions : <span style="font-weight: 400;">[MobiusScreenViewOptions](../sim/MobiusScreenView.md#MobiusScreenViewOptions)</span> ) {: #MobiusScreenView-constructor data-toc-label='new MobiusScreenView' }

### Instance Methods

#### modelToViewPoint( point : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #modelToViewPoint data-toc-label='modelToViewPoint' }

Projects a 3d model point to a 2d view point (in the screen view's coordinate frame).
see https://github.com/phetsims/density-buoyancy-common/issues/142

#### modelToViewDelta( point1 : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, point2 : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #modelToViewDelta data-toc-label='modelToViewDelta' }

   Get the difference in screen view coordinates between two model points. Both points are needed because of the 3d nature of the model   */

#### viewToModelPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, modelZ ) : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> {: #viewToModelPoint data-toc-label='viewToModelPoint' }

Project a 2d global screen coordinate into 3d global coordinate frame. Default to z distance of 0 (center of masses/pool)

#### viewToModelDelta( viewPoint1 : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, modelZ1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, viewPoint2 : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, modelZ2 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> {: #viewToModelDelta data-toc-label='viewToModelDelta' }

Get the difference in screen view coordinates from the first to the second provided screen points, in model
coordinates. Both points are needed because of the 3d nature of the model. Please note that the delta can have
negative values.

#### layout( viewBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) {: #layout data-toc-label='layout' }

END: model view transform code
///////////////////////////////////////////////////////////////

#### renderSceneNode() {: #renderSceneNode data-toc-label='renderSceneNode' }

#### step( dt : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #step data-toc-label='step' }

Steps forward in time.

### Instance Properties

#### supportsWebGL : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #supportsWebGL data-toc-label='supportsWebGL' }

(protected, readonly)

Whether this ScreenView supports WebGL.

#### sceneNode : <span style="font-weight: 400;">[ThreeIsometricNode](../mobius/ThreeIsometricNode.md)</span> {: #sceneNode data-toc-label='sceneNode' }

(protected, readonly)

Used to display the 3D view

### Static Methods

#### showWebGLWarning( screenView : <span style="font-weight: 400;">[ScreenView](../sim/ScreenView.md)</span> ) {: #showWebGLWarning data-toc-label='showWebGLWarning' }

Shows a warning with a link to more information about PhET simulation webgl compatibility.



## Type MobiusScreenViewOptions {: #MobiusScreenViewOptions }


```js
import type { MobiusScreenViewOptions } from 'scenerystack/sim';
```


- **sceneNodeOptions**?: [ThreeIsometricNodeOptions](../mobius/ThreeIsometricNode.md#ThreeIsometricNodeOptions)
- &amp; [ScreenViewOptions](../sim/ScreenView.md#ScreenViewOptions)




## Type THREEModelViewTransform {: #THREEModelViewTransform }


```js
import type { THREEModelViewTransform } from 'scenerystack/sim';
```


- **modelToViewPoint**: ( modelPoint: [Vector3](../dot/Vector3.md) ) =&gt; [Vector2](../dot/Vector2.md)
- **modelToViewDelta**: ( point1: [Vector3](../dot/Vector3.md), point2: [Vector3](../dot/Vector3.md) ) =&gt; [Vector2](../dot/Vector2.md)
- **viewToModelPoint**: ( point: [Vector2](../dot/Vector2.md), modelZ?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; [Vector3](../dot/Vector3.md)
- **viewToModelDelta**: ( viewPoint1: [Vector2](../dot/Vector2.md), modelZ1: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, viewPoint2: [Vector2](../dot/Vector2.md), modelZ2: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; [Vector3](../dot/Vector3.md)




## Source Code

See the source for [MobiusScreenView.ts](https://github.com/phetsims/mobius/blob/main/js/MobiusScreenView.ts) in the [mobius](https://github.com/phetsims/mobius) repository.
