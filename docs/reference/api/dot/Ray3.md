# Ray3

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/dot/blob/main/js/Ray3.ts](https://github.com/phetsims/dot/blob/main/js/Ray3.ts) for the most up-to-date information.

## Overview

3-dimensional ray consisting of an origin point and a unit direction vector.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Ray3 {: #Ray3 }


```js
import { Ray3 } from 'scenerystack/dot';
```
### Constructor

#### new Ray3( position : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span>, direction : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> ) {: #Ray3-constructor data-toc-label='new Ray3' }

### Instance Methods

#### shifted( distance : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Ray3](../dot/Ray3.md)</span> {: #shifted data-toc-label='shifted' }

Returns a new Ray that has it origin shifted to a position given by an amount distance*this.direction.

#### pointAtDistance( distance : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> {: #pointAtDistance data-toc-label='pointAtDistance' }

Returns a position that is a distance 'distance' along the ray.

#### distanceToPlane( plane : <span style="font-weight: 400;">[Plane3](../dot/Plane3.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #distanceToPlane data-toc-label='distanceToPlane' }

Returns the distance of this ray to a plane

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

Returns the attributes of this ray into a string

### Instance Properties

#### position : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> {: #position data-toc-label='position' }

#### direction : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> {: #direction data-toc-label='direction' }



## Source Code

See the source for [Ray3.ts](https://github.com/phetsims/dot/blob/main/js/Ray3.ts) in the [dot](https://github.com/phetsims/dot) repository.
