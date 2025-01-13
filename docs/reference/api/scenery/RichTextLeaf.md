# RichTextLeaf

## Overview

A leaf (text) element in the RichText, which will display a snippet of Text.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RichTextLeaf {: #RichTextLeaf }


```js
import { RichTextLeaf } from 'scenerystack/scenery';
```
### Constructor

#### new RichTextLeaf( content : <span style="font-weight: 400; opacity: 80%;">string</span>, isLTR : <span style="font-weight: 400; opacity: 80%;">boolean</span>, font : <span style="font-weight: 400; opacity: 80%;">Font | string</span>, boundsMethod : <span style="font-weight: 400; opacity: 80%;">TextBoundsMethod</span>, fill : <span style="font-weight: 400; opacity: 80%;">TPaint</span>, stroke : <span style="font-weight: 400; opacity: 80%;">TPaint</span>, lineWidth : <span style="font-weight: 400; opacity: 80%;">number</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### initialize( content : <span style="font-weight: 400; opacity: 80%;">string</span>, isLTR : <span style="font-weight: 400; opacity: 80%;">boolean</span>, font : <span style="font-weight: 400; opacity: 80%;">Font | string</span>, boundsMethod : <span style="font-weight: 400; opacity: 80%;">TextBoundsMethod</span>, fill : <span style="font-weight: 400; opacity: 80%;">TPaint</span>, stroke : <span style="font-weight: 400; opacity: 80%;">TPaint</span>, lineWidth : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #initialize data-toc-label='initialize' }

#### clean() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #clean data-toc-label='clean' }

Cleans references that could cause memory leaks (as those things may contain other references).

#### fitsIn( widthAvailable : <span style="font-weight: 400; opacity: 80%;">number</span>, hasAddedLeafToLine : <span style="font-weight: 400; opacity: 80%;">boolean</span>, isContainerLTR : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #fitsIn data-toc-label='fitsIn' }

Whether this leaf will fit in the specified amount of space (including, if required, the amount of spacing on
the side).

#### freeToPool() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### leftSpacing : <span style="font-weight: 400; opacity: 80%;">number</span> {: #leftSpacing data-toc-label='leftSpacing' }

#### rightSpacing : <span style="font-weight: 400; opacity: 80%;">number</span> {: #rightSpacing data-toc-label='rightSpacing' }

### Static Properties

#### pool : <span style="font-weight: 400; opacity: 80%;">Pool</span> {: #pool data-toc-label='pool' }

(readonly)



## Source Code

See the source for [RichTextLeaf.ts](https://github.com/phetsims/scenery/blob/main/js/util/rich-text/RichTextLeaf.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
