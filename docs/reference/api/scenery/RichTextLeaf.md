# RichTextLeaf

## Overview

A leaf (text) element in the RichText, which will display a snippet of Text.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RichTextLeaf {: #RichTextLeaf }


```js
import { RichTextLeaf } from 'scenerystack/scenery';
```
### Constructor

#### new RichTextLeaf( content : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, isLTR : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, font : <span style="font-weight: 400;">[Font](../scenery/Font.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, boundsMethod : <span style="font-weight: 400;">[TextBoundsMethod](../scenery/Text.md#TextBoundsMethod)</span>, fill : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span>, stroke : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span>, lineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### initialize( content : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, isLTR : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, font : <span style="font-weight: 400;">[Font](../scenery/Font.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, boundsMethod : <span style="font-weight: 400;">[TextBoundsMethod](../scenery/Text.md#TextBoundsMethod)</span>, fill : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span>, stroke : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span>, lineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #initialize data-toc-label='initialize' }

#### clean() {: #clean data-toc-label='clean' }

Cleans references that could cause memory leaks (as those things may contain other references).

#### fitsIn( widthAvailable : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, hasAddedLeafToLine : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, isContainerLTR : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #fitsIn data-toc-label='fitsIn' }

Whether this leaf will fit in the specified amount of space (including, if required, the amount of spacing on
the side).

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### leftSpacing : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #leftSpacing data-toc-label='leftSpacing' }

#### rightSpacing : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #rightSpacing data-toc-label='rightSpacing' }

### Static Properties

#### pool : <span style="font-weight: 400;">[Pool](../phet-core/Pool.md)</span> {: #pool data-toc-label='pool' }

(readonly)



## Source Code

See the source for [RichTextLeaf.ts](https://github.com/phetsims/scenery/blob/main/js/util/rich-text/RichTextLeaf.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
