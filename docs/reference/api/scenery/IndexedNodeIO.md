# IndexedNodeIO

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/nodes/IndexedNodeIO.ts](https://github.com/phetsims/scenery/blob/main/js/nodes/IndexedNodeIO.ts) for the most up-to-date information.

## Overview

IOType for Nodes that can save their own index (if phetioState: true).  Can be used to customize z-order
or layout order.

This IOType supports PhET-iO state, but only when every child within a Node's children array is an IndexedNodeIO
and is stateful (`phetioState: true`). This applyState algorithm uses Node "swaps" instead of index-based inserts
to ensure that by the end of state setting, all Nodes are in the correct order.
see https://github.com/phetsims/scenery/issues/1252#issuecomment-888014859 for more information.

Invisible nodes are skipped in order to ensure that "move forward" moves past the next visible item and "move backward"
moves before the prior visible item. If we did not skip invisible nodes, then a user could press "move forward" and
be confused that the visible order does not change (even though the index changes).

@author Sam Reid (PhET Interactive Simulations)

## Type IndexedNodeIOParent {: #IndexedNodeIOParent }


```js
import type { IndexedNodeIOParent } from 'scenerystack/scenery';
```


- **onIndexedNodeIOChildMoved**: ( node: [Node](../scenery/Node.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>




## Source Code

See the source for [IndexedNodeIO.ts](https://github.com/phetsims/scenery/blob/main/js/nodes/IndexedNodeIO.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
