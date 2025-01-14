# SegmentTree

## Overview

An accelerated data structure of items where it supports fast queries of "what items overlap wth x values",
so we don't have to iterate through all items.

This effectively combines an interval/segment tree with red-black tree balancing for insertion.

For proper red-black constraints, we handle ranges from -infinity to infinity.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class SegmentTree {: #SegmentTree }


```js
import { SegmentTree } from 'scenerystack/kite';
```
### Constructor

#### new SegmentTree( epsilon ) {: #SegmentTree-constructor data-toc-label='new SegmentTree' }

### Instance Methods

#### getMinX( item : <span style="font-weight: 400;">T</span>, epsilon : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMinX data-toc-label='getMinX' }

#### getMaxX( item : <span style="font-weight: 400;">T</span>, epsilon : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMaxX data-toc-label='getMaxX' }

#### query( item : <span style="font-weight: 400;">T</span>, interruptableCallback : <span style="font-weight: 400;">( item: T ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #query data-toc-label='query' }

Calls interruptableCallback in turn for every "possibly overlapping" item stored in this tree.

@param item - The item to use for the bounds range.
@param interruptableCallback - When this returns true, the search will be aborted

#### addItem( item : <span style="font-weight: 400;">T</span> ) {: #addItem data-toc-label='addItem' }

#### removeItem( item : <span style="font-weight: 400;">T</span> ) {: #removeItem data-toc-label='removeItem' }

#### audit() {: #audit data-toc-label='audit' }

For assertion purposes

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

### Instance Properties

#### rootNode : <span style="font-weight: 400;">SegmentNode&lt;T&gt;</span> {: #rootNode data-toc-label='rootNode' }



## Source Code

See the source for [SegmentTree.ts](https://github.com/phetsims/kite/blob/main/js/ops/SegmentTree.ts) in the [kite](https://github.com/phetsims/kite) repository.
