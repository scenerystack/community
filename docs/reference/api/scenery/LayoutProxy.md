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

#### new LayoutProxy( trail : <span style="font-weight: 400; opacity: 80%;">Trail</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### initialize( trail : <span style="font-weight: 400; opacity: 80%;">Trail</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #initialize data-toc-label='initialize' }

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

#### isSizable( orientation : <span style="font-weight: 400; opacity: 80%;">Orientation</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isSizable data-toc-label='isSizable' }

#### getMinimum( orientation : <span style="font-weight: 400; opacity: 80%;">Orientation</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getMinimum data-toc-label='getMinimum' }

#### getMax( orientation : <span style="font-weight: 400; opacity: 80%;">Orientation</span> ) : <span style="font-weight: 400; opacity: 80%;">number | null</span> {: #getMax data-toc-label='getMax' }

Returns either the maxWidth or maxHeight depending on the orientation

#### attemptPreferredSize( orientation : <span style="font-weight: 400; opacity: 80%;">Orientation</span>, preferredSize : <span style="font-weight: 400; opacity: 80%;">number | null</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #attemptPreferredSize data-toc-label='attemptPreferredSize' }

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

Releases references, and frees it to the pool.

#### freeToPool() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### trail : <span style="font-weight: 400; opacity: 80%;">Trail | null</span> {: #trail data-toc-label='trail' }

Nulled out when disposed

### Static Properties

#### pool : <span style="font-weight: 400; opacity: 80%;">Pool</span> {: #pool data-toc-label='pool' }

(readonly)



## Source Code

See the source for [LayoutProxy.ts](https://github.com/phetsims/scenery/blob/main/js/layout/LayoutProxy.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
