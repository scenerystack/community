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

#### new SegmentTree( epsilon ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getMinX( item : <span style="font-weight: 400; opacity: 80%;">T</span>, epsilon : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getMinX data-toc-label='getMinX' }

#### getMaxX( item : <span style="font-weight: 400; opacity: 80%;">T</span>, epsilon : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getMaxX data-toc-label='getMaxX' }

#### query( item : <span style="font-weight: 400; opacity: 80%;">T</span>, interruptableCallback : <span style="font-weight: 400; opacity: 80%;">( item: T ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #query data-toc-label='query' }

Calls interruptableCallback in turn for every "possibly overlapping" item stored in this tree.

@param item - The item to use for the bounds range.
@param interruptableCallback - When this returns true, the search will be aborted

#### addItem( item : <span style="font-weight: 400; opacity: 80%;">T</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #addItem data-toc-label='addItem' }

#### removeItem( item : <span style="font-weight: 400; opacity: 80%;">T</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #removeItem data-toc-label='removeItem' }

#### audit() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #audit data-toc-label='audit' }

For assertion purposes

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toString data-toc-label='toString' }

### Instance Properties

#### rootNode : <span style="font-weight: 400; opacity: 80%;">SegmentNode&lt;T&gt;</span> {: #rootNode data-toc-label='rootNode' }



## Source Code

See the source for [SegmentTree.ts](https://github.com/phetsims/kite/blob/main/js/ops/SegmentTree.ts) in the [kite](https://github.com/phetsims/kite) repository.
