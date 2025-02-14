# Plane3

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/dot/blob/main/js/Plane3.ts](https://github.com/phetsims/dot/blob/main/js/Plane3.ts) for the most up-to-date information.

## Overview

A mathematical plane in 3 dimensions determined by a normal vector to the plane and the distance to the closest
point on the plane to the origin

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Plane3 {: #Plane3 }


```js
import { Plane3 } from 'scenerystack/dot';
```
### Constructor

#### new Plane3( normal : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, distance : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #Plane3-constructor data-toc-label='new Plane3' }

### Instance Methods

#### intersectWithRay( ray : <span style="font-weight: 400;">[Ray3](../dot/Ray3.md)</span> ) : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> {: #intersectWithRay data-toc-label='intersectWithRay' }

#### getIntersection( plane : <span style="font-weight: 400;">[Plane3](../dot/Plane3.md)</span> ) : <span style="font-weight: 400;">[Ray3](../dot/Ray3.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getIntersection data-toc-label='getIntersection' }

### Instance Properties

#### normal : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> {: #normal data-toc-label='normal' }

#### distance : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #distance data-toc-label='distance' }

### Static Methods

#### fromTriangle( a : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, b : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, c : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> ) : <span style="font-weight: 400;">[Plane3](../dot/Plane3.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #fromTriangle data-toc-label='fromTriangle' }

Returns a new plane that passes through three points $(\vec{a},\vec{b},\vec{c})$
The normal of the plane points along $\vec{c-a} \times \vec{b-a}$
Passing three collinear points will return null

@param a - first point
@param b - second point
@param c - third point

### Static Properties

#### XY : <span style="font-weight: 400;">[Plane3](../dot/Plane3.md)</span> {: #XY data-toc-label='XY' }

(readonly)

#### XZ : <span style="font-weight: 400;">[Plane3](../dot/Plane3.md)</span> {: #XZ data-toc-label='XZ' }

(readonly)

#### YZ : <span style="font-weight: 400;">[Plane3](../dot/Plane3.md)</span> {: #YZ data-toc-label='YZ' }

(readonly)



## Source Code

See the source for [Plane3.ts](https://github.com/phetsims/dot/blob/main/js/Plane3.ts) in the [dot](https://github.com/phetsims/dot) repository.
