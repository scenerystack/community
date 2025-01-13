# Ray2

## Overview

2-dimensional ray consisting of an origin point and a unit direction vector.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Ray2 {: #Ray2 }


```js
import { Ray2 } from 'scenerystack/dot';
```
### Constructor

#### new Ray2( position : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, direction : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### shifted( distance : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Ray2](../dot/Ray2.md)</span> {: #shifted data-toc-label='shifted' }

Returns a new Ray that has it origin shifted to a position given by an amount distance*this.direction.

#### pointAtDistance( distance : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #pointAtDistance data-toc-label='pointAtDistance' }

Returns a position that is a distance 'distance' along the ray.

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

Returns the attributes of this ray into a string

### Instance Properties

#### position : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #position data-toc-label='position' }

#### direction : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #direction data-toc-label='direction' }



## Source Code

See the source for [Ray2.ts](https://github.com/phetsims/dot/blob/main/js/Ray2.ts) in the [dot](https://github.com/phetsims/dot) repository.
