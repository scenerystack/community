# LayoutNode

## Overview

Supertype for layout Nodes

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class LayoutNode {: #LayoutNode }


```js
import { LayoutNode } from 'scenerystack/scenery';
```
### Constructor

#### new LayoutNode( providedOptions? : <span style="font-weight: 400; opacity: 80%;">LayoutNodeOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### linkLayoutBounds() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #linkLayoutBounds data-toc-label='linkLayoutBounds' }

(protected)

#### setExcludeInvisibleChildrenFromBounds( excludeInvisibleChildrenFromBounds : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setExcludeInvisibleChildrenFromBounds data-toc-label='setExcludeInvisibleChildrenFromBounds' }

#### setChildren( children : <span style="font-weight: 400; opacity: 80%;">Node[]</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setChildren data-toc-label='setChildren' }

#### updateLayout() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #updateLayout data-toc-label='updateLayout' }

Manually run the layout (for instance, if resize:false is currently set, or if there is other hackery going on).

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

Releases references

### Instance Properties

#### layoutOriginProperty : <span style="font-weight: 400; opacity: 80%;">TProperty&lt;Vector2&gt;</span> {: #layoutOriginProperty data-toc-label='layoutOriginProperty' }

(readonly)



## Source Code

See the source for [LayoutNode.ts](https://github.com/phetsims/scenery/blob/main/js/layout/nodes/LayoutNode.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
