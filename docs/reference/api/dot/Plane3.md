# Plane3

## Overview

A mathematical plane in 3 dimensions determined by a normal vector to the plane and the distance to the closest
point on the plane to the origin

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Plane3 {: #Plane3 }


```js
import { Plane3 } from 'scenerystack/dot';
```
### Constructor

#### new Plane3( normal : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, distance : <span style="font-weight: 400; opacity: 80%;">number</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### intersectWithRay( ray : <span style="font-weight: 400; opacity: 80%;">Ray3</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector3</span> {: #intersectWithRay data-toc-label='intersectWithRay' }

#### getIntersection( plane : <span style="font-weight: 400; opacity: 80%;">Plane3</span> ) : <span style="font-weight: 400; opacity: 80%;">Ray3 | null</span> {: #getIntersection data-toc-label='getIntersection' }

### Instance Properties

#### normal : <span style="font-weight: 400; opacity: 80%;">Vector3</span> {: #normal data-toc-label='normal' }

#### distance : <span style="font-weight: 400; opacity: 80%;">number</span> {: #distance data-toc-label='distance' }

### Static Methods

#### fromTriangle( a : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, b : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, c : <span style="font-weight: 400; opacity: 80%;">Vector3</span> ) : <span style="font-weight: 400; opacity: 80%;">Plane3 | null</span> {: #fromTriangle data-toc-label='fromTriangle' }

Returns a new plane that passes through three points $(\vec{a},\vec{b},\vec{c})$
The normal of the plane points along $\vec{c-a} \times \vec{b-a}$
Passing three collinear points will return null

@param a - first point
@param b - second point
@param c - third point

### Static Properties

#### XY : <span style="font-weight: 400; opacity: 80%;">Plane3</span> {: #XY data-toc-label='XY' }

(readonly)

#### XZ : <span style="font-weight: 400; opacity: 80%;">Plane3</span> {: #XZ data-toc-label='XZ' }

(readonly)

#### YZ : <span style="font-weight: 400; opacity: 80%;">Plane3</span> {: #YZ data-toc-label='YZ' }

(readonly)



## Source Code

See the source for [Plane3.ts](https://github.com/phetsims/dot/blob/main/js/Plane3.ts) in the [dot](https://github.com/phetsims/dot) repository.
