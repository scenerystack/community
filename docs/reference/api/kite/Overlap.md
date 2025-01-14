# Overlap

## Overview

Describes a section of continuous overlap (multiple overlapping points) between two segments.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Overlap {: #Overlap }


```js
import { Overlap } from 'scenerystack/kite';
```
### Constructor

#### new Overlap( a : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, b : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #Overlap-constructor data-toc-label='new Overlap' }

### Instance Methods

#### apply( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #apply data-toc-label='apply' }

Maps a t value from the first curve to the second curve (assuming it is within the overlap range).

#### applyInverse( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #applyInverse data-toc-label='applyInverse' }

Maps a t value from the second curve to the first curve (assuming it is within the overlap range).

### Instance Properties

#### a : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #a data-toc-label='a' }

#### b : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #b data-toc-label='b' }

#### t0 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #t0 data-toc-label='t0' }

Initial and ending t-values for the first curve (t0,t1) and second curve (qt0,qt1).

#### t1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #t1 data-toc-label='t1' }

#### qt0 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #qt0 data-toc-label='qt0' }

#### qt1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #qt1 data-toc-label='qt1' }

### Static Methods

#### createLinear( a0 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, b0 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, a1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, b1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Overlap](../kite/Overlap.md)</span> {: #createLinear data-toc-label='createLinear' }

Returns a new overlap that should map t values of a0 =&gt; b0 and a1 =&gt; b1



## Source Code

See the source for [Overlap.ts](https://github.com/phetsims/kite/blob/main/js/util/Overlap.ts) in the [kite](https://github.com/phetsims/kite) repository.
