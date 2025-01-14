# BoundsIntersection

## Overview

A region of two segments that intersects (contains static functions for segment intersection).

BoundsIntersection.intersect( a, b ) should be used for most general intersection routines as a fallback.
Other segment-specific routines may be much faster.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class BoundsIntersection {: #BoundsIntersection }


```js
import { BoundsIntersection } from 'scenerystack/kite';
```
### Constructor

#### new BoundsIntersection( a : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span>, b : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span>, atMin : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, atMax : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, btMin : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, btMax : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, aMin : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, aMax : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, bMin : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, bMax : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) {: #BoundsIntersection-constructor data-toc-label='new BoundsIntersection' }

### Instance Methods

#### initialize( a : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span>, b : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span>, atMin : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, atMax : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, btMin : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, btMax : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, aMin : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, aMax : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, bMin : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, bMax : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[BoundsIntersection](../kite/BoundsIntersection.md)</span> {: #initialize data-toc-label='initialize' }

@param a
@param b
@param atMin - Lower t value for the region of the 'a' segment
@param atMax - Higher t value for the region of the 'a' segment
@param btMin - Lower t value for the region of the 'b' segment
@param btMax - Higher t value for the region of the 'b' segment
@param aMin - Location of the lower t value for the 'a' segment's region
@param aMax - Location of the higher t value for the 'a' segment's region
@param bMin - Location of the lower t value for the 'b' segment's region
@param bMax - Location of the higher t value for the 'b' segment's region
@returns -  This reference for chaining

#### distance( otherIntersection : <span style="font-weight: 400;">[BoundsIntersection](../kite/BoundsIntersection.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #distance data-toc-label='distance' }

A measure of distance between this and another intersection.

#### clean() {: #clean data-toc-label='clean' }

Removes references (so it can allow other objects to be GC'ed or pooled)

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### a : <span style="font-weight: 400;">[Segment](../kite/Segment.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #a data-toc-label='a' }

Null if cleaned of references

#### b : <span style="font-weight: 400;">[Segment](../kite/Segment.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #b data-toc-label='b' }

#### atMin : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #atMin data-toc-label='atMin' }

#### atMax : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #atMax data-toc-label='atMax' }

#### btMin : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #btMin data-toc-label='btMin' }

#### btMax : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #btMax data-toc-label='btMax' }

#### aMin : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #aMin data-toc-label='aMin' }

Null if cleaned of references

#### aMax : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #aMax data-toc-label='aMax' }

#### bMin : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #bMin data-toc-label='bMin' }

#### bMax : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #bMax data-toc-label='bMax' }

### Static Methods

#### intersect( a : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span>, b : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span> ) : <span style="font-weight: 400;">[SegmentIntersection](../kite/SegmentIntersection.md)[]</span> {: #intersect data-toc-label='intersect' }

Determine (finite) points of intersection between two arbitrary segments.

Does repeated subdivision and excludes a-b region pairs that don't intersect. Doing this repeatedly narrows down
intersections, to the point that they can be combined for a fairly accurate answer.

### Static Properties

#### pool : <span style="font-weight: 400;">[Pool](../phet-core/Pool.md)</span> {: #pool data-toc-label='pool' }

(readonly)



## Source Code

See the source for [BoundsIntersection.ts](https://github.com/phetsims/kite/blob/main/js/ops/BoundsIntersection.ts) in the [kite](https://github.com/phetsims/kite) repository.
