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

#### new ThreeIsometricNode( layoutBounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">ThreeIsometricNodeOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getPhetioMouseHit( point : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">PhetioObject | null | 'phetioNotSelectable'</span> {: #getPhetioMouseHit data-toc-label='getPhetioMouseHit' }

for studio autoselect

#### projectPoint( point : <span style="font-weight: 400; opacity: 80%;">Vector3</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #projectPoint data-toc-label='projectPoint' }

Projects a 3d point in the global coordinate frame to one within the 2d global coordinate frame.

#### unprojectPoint( point : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, modelZ ) : <span style="font-weight: 400; opacity: 80%;">Vector3</span> {: #unprojectPoint data-toc-label='unprojectPoint' }

Project a 2d global screen coordinate into 3d global coordinate frame. Defaults to a target model z of 0 (in
model coords)

#### getRayFromScreenPoint( globalScreenPoint : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">Ray3</span> {: #getRayFromScreenPoint data-toc-label='getRayFromScreenPoint' }

Given a screen point, returns a 3D ray representing the camera's position and direction that point would be in the
3D scene.

#### layout( width : <span style="font-weight: 400; opacity: 80%;">number</span>, height : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #layout data-toc-label='layout' }

#### render( target : <span style="font-weight: 400; opacity: 80%;">THREE.WebGLRenderTarget | undefined</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #render data-toc-label='render' }

Renders the simulation to a specific rendering target

@param target - undefined for the default target

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

Releases references.

### Instance Properties

#### stage : <span style="font-weight: 400; opacity: 80%;">ThreeStage</span> {: #stage data-toc-label='stage' }

(readonly)

#### backgroundEventTarget : <span style="font-weight: 400; opacity: 80%;">Rectangle</span> {: #backgroundEventTarget data-toc-label='backgroundEventTarget' }

(readonly)

our target for drags that don't hit other UI components



## Source Code

See the source for [ThreeIsometricNode.ts](https://github.com/phetsims/mobius/blob/main/js/ThreeIsometricNode.ts) in the [mobius](https://github.com/phetsims/mobius) repository.
