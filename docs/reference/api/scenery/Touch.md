# Touch

## Overview

Tracks a single touch point

IE guidelines for Touch-friendly sites: http://blogs.msdn.com/b/ie/archive/2012/04/20/guidelines-for-building-touch-friendly-sites.aspx

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Touch {: #Touch }


```js
import { Touch } from 'scenerystack/scenery';
```
### Constructor

#### new Touch( id : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, event : <span style="font-weight: 400;">Event</span> ) {: #Touch-constructor data-toc-label='new Touch' }

### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

Returns an improved string representation of this object.

#### isTouchLike() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isTouchLike data-toc-label='isTouchLike' }

### Instance Properties

#### id : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #id data-toc-label='id' }

For tracking which touch is which



## Source Code

See the source for [Touch.ts](https://github.com/phetsims/scenery/blob/main/js/input/Touch.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
