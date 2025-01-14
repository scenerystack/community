# ThreeIsometricNode

## Overview

Shows three.js content with isometric scaling that takes up the entire viewport in a high-performance way.

Note: When using in a PhET sim, the "entire viewport" is not just the screen view, but includes the nav bar/etc.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ThreeIsometricNode {: #ThreeIsometricNode }


```js
import { ThreeIsometricNode } from 'scenerystack/mobius';
```
### Constructor

#### new ThreeIsometricNode( layoutBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, providedOptions? : <span style="font-weight: 400;">[ThreeIsometricNodeOptions](../mobius/ThreeIsometricNode.md#ThreeIsometricNodeOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getPhetioMouseHit( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[PhetioObject](../tandem/PhetioObject.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | 'phetioNotSelectable'</span> {: #getPhetioMouseHit data-toc-label='getPhetioMouseHit' }

for studio autoselect

#### projectPoint( point : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #projectPoint data-toc-label='projectPoint' }

Projects a 3d point in the global coordinate frame to one within the 2d global coordinate frame.

#### unprojectPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, modelZ ) : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> {: #unprojectPoint data-toc-label='unprojectPoint' }

Project a 2d global screen coordinate into 3d global coordinate frame. Defaults to a target model z of 0 (in
model coords)

#### getRayFromScreenPoint( globalScreenPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Ray3](../dot/Ray3.md)</span> {: #getRayFromScreenPoint data-toc-label='getRayFromScreenPoint' }

Given a screen point, returns a 3D ray representing the camera's position and direction that point would be in the
3D scene.

#### layout( width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #layout data-toc-label='layout' }

#### render( target : <span style="font-weight: 400;">THREE.WebGLRenderTarget | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">undefined</span></span> ) {: #render data-toc-label='render' }

Renders the simulation to a specific rendering target

@param target - undefined for the default target

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references.

### Instance Properties

#### stage : <span style="font-weight: 400;">[ThreeStage](../mobius/ThreeStage.md)</span> {: #stage data-toc-label='stage' }

(readonly)

#### backgroundEventTarget : <span style="font-weight: 400;">[Rectangle](../scenery/Rectangle.md)</span> {: #backgroundEventTarget data-toc-label='backgroundEventTarget' }

(readonly)

our target for drags that don't hit other UI components



## Type ThreeIsometricNodeOptions {: #ThreeIsometricNodeOptions }


Constructor options are passed directly to ThreeStage as well as used by this Node.

```js
import type { ThreeIsometricNodeOptions } from 'scenerystack/mobius';
```


- **parentMatrixProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Matrix3](../dot/Matrix3.md)&gt;
- **fov**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **getPhetioMouseHit**?: MouseHitListener | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **viewOffset**?: [Vector2](../dot/Vector2.md)
- &amp; [ThreeStageOptions](../mobius/ThreeStage.md#ThreeStageOptions) &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [ThreeIsometricNode.ts](https://github.com/phetsims/mobius/blob/main/js/ThreeIsometricNode.ts) in the [mobius](https://github.com/phetsims/mobius) repository.
