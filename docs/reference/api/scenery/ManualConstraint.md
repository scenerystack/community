# ManualConstraint

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/layout/constraints/ManualConstraint.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/ManualConstraint.ts) for the most up-to-date information.

## Overview

ManualConstraint exists for cases where imperative-based positioning code (e.g. `node.left = otherNode.right + 5`)
is best for a case, and should be rerun whenever one of the nodes changes bounds.

ManualConstraint also can handle cases where the nodes do not live in the same coordinate frame (but instead with
some common ancestor).

For example:

new ManualConstraint( ancestorNode, [ firstNode, secondNode ], ( firstProxy, secondProxy ) =&gt; {
  firstProxy.left = secondProxy.right + 5;
  secondProxy.centerY = firstProxy.centerY;
} );

Notably in the callback, it uses LayoutProxy (which has the positional getters/setters of an object, and handles
coordinate transforms).

See https://scenerystack.org/learn/scenery-layout/#ManualConstraint for details

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ManualConstraint {: #ManualConstraint }


```js
import { ManualConstraint } from 'scenerystack/scenery';
```
### Constructor

#### new ManualConstraint( ancestorNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, nodes : <span style="font-weight: 400;">T</span>, layoutCallback : <span style="font-weight: 400;">LayoutCallback&lt;T&gt;</span> ) {: #ManualConstraint-constructor data-toc-label='new ManualConstraint' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references

### Static Methods

#### create( ancestorNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, nodes : <span style="font-weight: 400;">T</span>, layoutCallback : <span style="font-weight: 400;">LayoutCallback&lt;T&gt;</span> ) : <span style="font-weight: 400;">[ManualConstraint](../scenery/ManualConstraint.md)&lt;T&gt;</span> {: #create data-toc-label='create' }



## Source Code

See the source for [ManualConstraint.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/ManualConstraint.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
