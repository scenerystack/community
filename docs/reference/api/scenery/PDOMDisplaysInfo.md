# PDOMDisplaysInfo

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/PDOMDisplaysInfo.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/PDOMDisplaysInfo.ts) for the most up-to-date information.

## Overview

Per-node information required to track what PDOM Displays our Node is visible under. A PDOM display is a Display that
is marked true with the `accessibility` option, and thus creates and manages a ParallelDOM (see ParallelDOM and
general scenery accessibility doc for more details). Acts like a multimap
(duplicates allowed) to indicate how many times we appear in a pdom display.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class PDOMDisplaysInfo {: #PDOMDisplaysInfo }


```js
import { PDOMDisplaysInfo } from 'scenerystack/scenery';
```
### Instance Properties

#### pdomDisplays : <span style="font-weight: 400;">[Display](../scenery/Display.md)[]</span> {: #pdomDisplays data-toc-label='pdomDisplays' }

(readonly)

(duplicates allowed) - There is one copy of each pdom
Display for each trail (from its root node to this node) that is fully visible (assuming this subtree has
pdom content).
Thus, the value of this is:
- If this node is invisible OR the subtree has no pdomContent/pdomOrder: []
- Otherwise, it is the concatenation of our parents' pdomDisplays (AND any pdom displays rooted
  at this node).
This value is synchronously updated, and supports pdomInstances by letting them know when certain
nodes are visible on the display.



## Source Code

See the source for [PDOMDisplaysInfo.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/PDOMDisplaysInfo.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
