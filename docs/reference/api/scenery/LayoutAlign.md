# LayoutAlign

## Overview

Rich enumeration for internal layout code

NOTE: This is orientation-agnostic for a reason, so that it's natural with GridBox, and FlowBox can switch
orientation

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class LayoutAlign {: #LayoutAlign }


```js
import { LayoutAlign } from 'scenerystack/scenery';
```
### Constructor

#### new LayoutAlign( horizontal : <span style="font-weight: 400;">[HorizontalLayoutAlign](../scenery/LayoutAlign.md#HorizontalLayoutAlign)</span>, vertical : <span style="font-weight: 400;">[VerticalLayoutAlign](../scenery/LayoutAlign.md#VerticalLayoutAlign)</span>, padRatio : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #LayoutAlign-constructor data-toc-label='new LayoutAlign' }

### Instance Methods



### Instance Properties

#### horizontal : <span style="font-weight: 400;">[HorizontalLayoutAlign](../scenery/LayoutAlign.md#HorizontalLayoutAlign)</span> {: #horizontal data-toc-label='horizontal' }

(readonly)

String enumeration types for the horizontal orientation

#### vertical : <span style="font-weight: 400;">[VerticalLayoutAlign](../scenery/LayoutAlign.md#VerticalLayoutAlign)</span> {: #vertical data-toc-label='vertical' }

(readonly)

String enumeration types for the vertical orientation

#### padRatio : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #padRatio data-toc-label='padRatio' }

(readonly)

A multiplier value used in the padding computation

### Static Methods

#### getAllowedAligns( orientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span> ) : <span style="font-weight: 400;">readonly ( <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> )[]</span> {: #getAllowedAligns data-toc-label='getAllowedAligns' }

#### getAllowedRestrictedAligns( orientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span> ) : <span style="font-weight: 400;">readonly ( <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> )[]</span> {: #getAllowedRestrictedAligns data-toc-label='getAllowedRestrictedAligns' }

#### alignToInternal( orientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span>, key : <span style="font-weight: 400;">[HorizontalLayoutAlign](../scenery/LayoutAlign.md#HorizontalLayoutAlign) | [VerticalLayoutAlign](../scenery/LayoutAlign.md#VerticalLayoutAlign) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;">[LayoutAlign](../scenery/LayoutAlign.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #alignToInternal data-toc-label='alignToInternal' }

Converts a string union value into the internal Enumeration value

#### horizontalAlignToInternal( key : <span style="font-weight: 400;">[HorizontalLayoutAlign](../scenery/LayoutAlign.md#HorizontalLayoutAlign) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;">[LayoutAlign](../scenery/LayoutAlign.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #horizontalAlignToInternal data-toc-label='horizontalAlignToInternal' }

#### verticalAlignToInternal( key : <span style="font-weight: 400;">[VerticalLayoutAlign](../scenery/LayoutAlign.md#VerticalLayoutAlign) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;">[LayoutAlign](../scenery/LayoutAlign.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #verticalAlignToInternal data-toc-label='verticalAlignToInternal' }

#### internalToAlign( orientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span>, align : <span style="font-weight: 400;">[LayoutAlign](../scenery/LayoutAlign.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;">[HorizontalLayoutAlign](../scenery/LayoutAlign.md#HorizontalLayoutAlign) | [VerticalLayoutAlign](../scenery/LayoutAlign.md#VerticalLayoutAlign) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #internalToAlign data-toc-label='internalToAlign' }

Converts an internal Enumeration value into a string union value.

### Static Properties

#### START : <span style="font-weight: 400;">[LayoutAlign](../scenery/LayoutAlign.md)</span> {: #START data-toc-label='START' }

(readonly)

#### END : <span style="font-weight: 400;">[LayoutAlign](../scenery/LayoutAlign.md)</span> {: #END data-toc-label='END' }

(readonly)

#### CENTER : <span style="font-weight: 400;">[LayoutAlign](../scenery/LayoutAlign.md)</span> {: #CENTER data-toc-label='CENTER' }

(readonly)

#### ORIGIN : <span style="font-weight: 400;">[LayoutAlign](../scenery/LayoutAlign.md)</span> {: #ORIGIN data-toc-label='ORIGIN' }

(readonly)

#### enumeration : <span style="font-weight: 400;">[Enumeration](../phet-core/Enumeration.md)</span> {: #enumeration data-toc-label='enumeration' }

(readonly)



## Type HorizontalLayoutAlign {: #HorizontalLayoutAlign }


```js
import type { HorizontalLayoutAlign } from 'scenerystack/scenery';
```


"left" | "right" | "center" | "origin"



## Type RestrictedHorizontalLayoutAlign {: #RestrictedHorizontalLayoutAlign }


```js
import type { RestrictedHorizontalLayoutAlign } from 'scenerystack/scenery';
```


"left" | "right" | "center"



## Type RestrictedVerticalLayoutAlign {: #RestrictedVerticalLayoutAlign }


```js
import type { RestrictedVerticalLayoutAlign } from 'scenerystack/scenery';
```


"top" | "bottom" | "center"



## Type VerticalLayoutAlign {: #VerticalLayoutAlign }


```js
import type { VerticalLayoutAlign } from 'scenerystack/scenery';
```


"top" | "bottom" | "center" | "origin"



## Source Code

See the source for [LayoutAlign.ts](https://github.com/phetsims/scenery/blob/main/js/layout/LayoutAlign.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
