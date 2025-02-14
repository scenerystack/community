# PDOMTree

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/PDOMTree.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/PDOMTree.ts) for the most up-to-date information.

## Overview

The main logic for maintaining the PDOM instance tree (see https://github.com/phetsims/scenery-phet/issues/365)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class PDOMTree {: #PDOMTree }


```js
import { PDOMTree } from 'scenerystack/scenery';
```
### Static Methods

#### addChild( parent : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, child : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) {: #addChild data-toc-label='addChild' }

Called when a child node is added to a parent node (and the child is likely to have pdom content).

#### removeChild( parent : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, child : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) {: #removeChild data-toc-label='removeChild' }

Called when a child node is removed from a parent node (and the child is likely to have pdom content).

#### childrenOrderChange( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) {: #childrenOrderChange data-toc-label='childrenOrderChange' }

Called when a node's children are reordered (no additions/removals).

#### pdomOrderChange( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, oldOrder : <span style="font-weight: 400;">( [Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> )[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, newOrder : <span style="font-weight: 400;">( [Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> )[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #pdomOrderChange data-toc-label='pdomOrderChange' }

Called when a node has a pdomOrder change.

#### pdomContentChange( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) {: #pdomContentChange data-toc-label='pdomContentChange' }

Called when a node has a pdomContent change.

#### rebuildInstanceTree( rootInstance : <span style="font-weight: 400;">[PDOMInstance](../scenery/PDOMInstance.md)</span> ) {: #rebuildInstanceTree data-toc-label='rebuildInstanceTree' }

Sets up a root instance with a given root node.

#### auditPDOMDisplays( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) {: #auditPDOMDisplays data-toc-label='auditPDOMDisplays' }

Ensures that the pdomDisplays on the node (and its subtree) are accurate.



## Source Code

See the source for [PDOMTree.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/PDOMTree.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
