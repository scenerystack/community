# Orientation

## Overview

Either horizontal or vertical, with helper values.  Moved from Area Model Common on Nov 7, 2019

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Sam Reid (PhET Interactive Simulations)

## Class Orientation {: #Orientation }


```js
import { Orientation } from 'scenerystack/phet-core';
```
### Constructor

#### new Orientation( coordinate : <span style="font-weight: 400;">'x' | 'y'</span>, centerCoordinate : <span style="font-weight: 400;">'centerX' | 'centerY'</span>, minCoordinate : <span style="font-weight: 400;">'minX' | 'minY'</span>, maxCoordinate : <span style="font-weight: 400;">'maxX' | 'maxY'</span>, minSide : <span style="font-weight: 400;">'left' | 'top'</span>, maxSide : <span style="font-weight: 400;">'right' | 'bottom'</span>, minSize : <span style="font-weight: 400;">'minWidth' | 'minHeight'</span>, maxSize : <span style="font-weight: 400;">'maxWidth' | 'maxHeight'</span>, rectCoordinate : <span style="font-weight: 400;">'rectX' | 'rectY'</span>, rectSize : <span style="font-weight: 400;">'rectWidth' | 'rectHeight'</span>, flowBoxOrientation : <span style="font-weight: 400;">'horizontal' | 'vertical'</span>, size : <span style="font-weight: 400;">'width' | 'height'</span>, line : <span style="font-weight: 400;">'column' | 'row'</span>, preferredSize : <span style="font-weight: 400;">'preferredWidth' | 'preferredHeight'</span>, localPreferredSize : <span style="font-weight: 400;">'localPreferredWidth' | 'localPreferredHeight'</span>, sizable : <span style="font-weight: 400;">'widthSizable' | 'heightSizable'</span>, modelToView : <span style="font-weight: 400;">( m: MVT, n: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, viewToModel : <span style="font-weight: 400;">( m: MVT, n: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, toVector : <span style="font-weight: 400;">&lt;T&gt;( n: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, m: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, VectorType: new ( x: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, y: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, ...args: IntentionalAny[] ) =&gt; T ) =&gt; T</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods



### Instance Properties

#### coordinate : <span style="font-weight: 400;">'x' | 'y'</span> {: #coordinate data-toc-label='coordinate' }

(readonly)

#### centerCoordinate : <span style="font-weight: 400;">'centerX' | 'centerY'</span> {: #centerCoordinate data-toc-label='centerCoordinate' }

(readonly)

#### minCoordinate : <span style="font-weight: 400;">'minX' | 'minY'</span> {: #minCoordinate data-toc-label='minCoordinate' }

(readonly)

#### maxCoordinate : <span style="font-weight: 400;">'maxX' | 'maxY'</span> {: #maxCoordinate data-toc-label='maxCoordinate' }

(readonly)

#### minSide : <span style="font-weight: 400;">'left' | 'top'</span> {: #minSide data-toc-label='minSide' }

(readonly)

#### maxSide : <span style="font-weight: 400;">'right' | 'bottom'</span> {: #maxSide data-toc-label='maxSide' }

(readonly)

#### minSize : <span style="font-weight: 400;">'minWidth' | 'minHeight'</span> {: #minSize data-toc-label='minSize' }

(readonly)

#### maxSize : <span style="font-weight: 400;">'maxWidth' | 'maxHeight'</span> {: #maxSize data-toc-label='maxSize' }

(readonly)

#### rectCoordinate : <span style="font-weight: 400;">'rectX' | 'rectY'</span> {: #rectCoordinate data-toc-label='rectCoordinate' }

(readonly)

#### rectSize : <span style="font-weight: 400;">'rectWidth' | 'rectHeight'</span> {: #rectSize data-toc-label='rectSize' }

(readonly)

#### flowBoxOrientation : <span style="font-weight: 400;">'horizontal' | 'vertical'</span> {: #flowBoxOrientation data-toc-label='flowBoxOrientation' }

(readonly)

#### size : <span style="font-weight: 400;">'width' | 'height'</span> {: #size data-toc-label='size' }

(readonly)

#### line : <span style="font-weight: 400;">'column' | 'row'</span> {: #line data-toc-label='line' }

(readonly)

#### preferredSize : <span style="font-weight: 400;">'preferredWidth' | 'preferredHeight'</span> {: #preferredSize data-toc-label='preferredSize' }

(readonly)

#### localPreferredSize : <span style="font-weight: 400;">'localPreferredWidth' | 'localPreferredHeight'</span> {: #localPreferredSize data-toc-label='localPreferredSize' }

(readonly)

#### sizable : <span style="font-weight: 400;">'widthSizable' | 'heightSizable'</span> {: #sizable data-toc-label='sizable' }

(readonly)

#### ariaOrientation : <span style="font-weight: 400;">'horizontal' | 'vertical'</span> {: #ariaOrientation data-toc-label='ariaOrientation' }

(readonly)

#### modelToView : <span style="font-weight: 400;">( m: MVT, n: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #modelToView data-toc-label='modelToView' }

Returns the single coordinate transformed by the appropriate dimension.

#### viewToModel : <span style="font-weight: 400;">( m: MVT, n: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #viewToModel data-toc-label='viewToModel' }

#### toVector : <span style="font-weight: 400;">&lt;T&gt;( n: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, m: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, VectorType: Constructor&lt;T&gt; ) =&gt; T</span> {: #toVector data-toc-label='toVector' }

Creates a vector (primary,secondary) for horizontal orientations, and (secondary,primary) for vertical orientations.

#### opposite : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span> {: #opposite data-toc-label='opposite' }

@ts-expect-error - Assigned after instantiation, see below

### Static Methods

#### fromLayoutOrientation( layoutOrientation : <span style="font-weight: 400;">'horizontal' | 'vertical'</span> ) : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span> {: #fromLayoutOrientation data-toc-label='fromLayoutOrientation' }

### Static Properties

#### HORIZONTAL : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span> {: #HORIZONTAL data-toc-label='HORIZONTAL' }

(readonly)

#### VERTICAL : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span> {: #VERTICAL data-toc-label='VERTICAL' }

(readonly)

#### enumeration : <span style="font-weight: 400;">[Enumeration](../phet-core/Enumeration.md)</span> {: #enumeration data-toc-label='enumeration' }

(readonly)



## Source Code

See the source for [Orientation.ts](https://github.com/phetsims/phet-core/blob/main/js/Orientation.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
