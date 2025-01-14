# LayoutProxy

## Overview

A stand-in for the layout-based fields of a Node, but where everything is done in the coordinate frame of the
"root" of the Trail. It is a pooled object, so it can be reused to avoid memory issues.

NOTE: For layout, these trails usually have the "root" Node equal to the children of the layout constraint's ancestor
Node. Therefore, the coordinate space is typically the local coordinate frame of the ancestorNode of the
LayoutConstraint. This is not the same as the "global" coordinates for a Scenery Node in general (as most of the root
nodes of the trails provided to LayoutProxy will have parents!)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class LayoutProxy {: #LayoutProxy }


```js
import { LayoutProxy } from 'scenerystack/scenery';
```
### Constructor

#### new LayoutProxy( trail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### initialize( trail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #initialize data-toc-label='initialize' }

This is where the logic of a poolable type's "initializer" will go. It will be potentially run MULTIPLE times,
as if it was constructing multiple different objects. It will be put back in the pool with dispose().
It will go through cycles of:
- constructor(...) =&gt; initialize(...) --- only at the start
- dispose()
- initialize(...)
- dispose()
- initialize(...)
- dispose()
and so on.

DO not call it twice without in-between disposals (follow the above pattern).

#### isSizable( orientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isSizable data-toc-label='isSizable' }

#### getMinimum( orientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMinimum data-toc-label='getMinimum' }

#### getMax( orientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getMax data-toc-label='getMax' }

Returns either the maxWidth or maxHeight depending on the orientation

#### attemptPreferredSize( orientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span>, preferredSize : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #attemptPreferredSize data-toc-label='attemptPreferredSize' }

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references, and frees it to the pool.

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### trail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #trail data-toc-label='trail' }

Nulled out when disposed

### Static Properties

#### pool : <span style="font-weight: 400;">[Pool](../phet-core/Pool.md)</span> {: #pool data-toc-label='pool' }

(readonly)



## Type Layoutable {: #Layoutable }


For supporting general cases where you may layout a Node, or use in ManualConstraints.

```js
import type { Layoutable } from 'scenerystack/scenery';
```


[Node](../scenery/Node.md) | [LayoutProxy](../scenery/LayoutProxy.md)



## Source Code

See the source for [LayoutProxy.ts](https://github.com/phetsims/scenery/blob/main/js/layout/LayoutProxy.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
