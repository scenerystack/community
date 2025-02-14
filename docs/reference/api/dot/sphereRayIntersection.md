# sphereRayIntersection

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/dot/blob/main/js/util/sphereRayIntersection.ts](https://github.com/phetsims/dot/blob/main/js/util/sphereRayIntersection.ts) for the most up-to-date information.

## Overview

Ray-sphere intersection, returning information about the closest intersection. Assumes the sphere is centered
at the origin (for ease of computation), transform the ray to compensate if needed.

If there is no intersection, null is returned. Otherwise an object will be returned like:
&lt;pre class="brush: js"&gt;
{
  distance: {number}, // distance from the ray position to the intersection
  hitPoint: {Vector3}, // location of the intersection
  normal: {Vector3}, // the normal of the sphere's surface at the intersection
  fromOutside: {boolean}, // whether the ray intersected the sphere from outside the sphere first
}
&lt;/pre&gt;

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type SphereRayIntersectionResult {: #SphereRayIntersectionResult }


```js
import type { SphereRayIntersectionResult } from 'scenerystack/dot';
```


- **distance**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **hitPoint**: [Vector3](../dot/Vector3.md)
- **normal**: [Vector3](../dot/Vector3.md)
- **fromOutside**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Source Code

See the source for [sphereRayIntersection.ts](https://github.com/phetsims/dot/blob/main/js/util/sphereRayIntersection.ts) in the [dot](https://github.com/phetsims/dot) repository.
