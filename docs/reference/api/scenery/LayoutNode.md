# LayoutNode

## Overview

Supertype for layout Nodes

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class LayoutNode {: #LayoutNode }


```js
import { LayoutNode } from 'scenerystack/scenery';
```
### Constructor

#### new LayoutNode( providedOptions? : <span style="font-weight: 400;">[LayoutNodeOptions](../scenery/LayoutNode.md#LayoutNodeOptions)</span> ) {: #LayoutNode-constructor data-toc-label='new LayoutNode' }

### Instance Methods

#### linkLayoutBounds() {: #linkLayoutBounds data-toc-label='linkLayoutBounds' }

(protected)

#### setExcludeInvisibleChildrenFromBounds( excludeInvisibleChildrenFromBounds : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setExcludeInvisibleChildrenFromBounds data-toc-label='setExcludeInvisibleChildrenFromBounds' }

#### setChildren( children : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setChildren data-toc-label='setChildren' }

#### updateLayout() {: #updateLayout data-toc-label='updateLayout' }

Manually run the layout (for instance, if resize:false is currently set, or if there is other hackery going on).

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references

### Instance Properties

#### layoutOriginProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;[Vector2](../dot/Vector2.md)&gt;</span> {: #layoutOriginProperty data-toc-label='layoutOriginProperty' }

(readonly)



## Type LayoutNodeOptions {: #LayoutNodeOptions }


```js
import type { LayoutNodeOptions } from 'scenerystack/scenery';
```


- **resize**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **layoutOrigin**?: [Vector2](../dot/Vector2.md)
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions) &amp; [SizableOptions](../scenery/Sizable.md#SizableOptions)




## Source Code

See the source for [LayoutNode.ts](https://github.com/phetsims/scenery/blob/main/js/layout/nodes/LayoutNode.ts) in the [scenery](https://github.com/phetsims/scenery) repository.