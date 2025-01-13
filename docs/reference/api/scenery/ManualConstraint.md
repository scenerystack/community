# ManualConstraint

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

See https://phetsims.github.io/scenery/doc/layout#ManualConstraint for details

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ManualConstraint {: #ManualConstraint }


```js
import { ManualConstraint } from 'scenerystack/scenery';
```
### Constructor

#### new ManualConstraint( ancestorNode : <span style="font-weight: 400; opacity: 80%;">Node</span>, nodes : <span style="font-weight: 400; opacity: 80%;">T</span>, layoutCallback : <span style="font-weight: 400; opacity: 80%;">LayoutCallback&lt;T&gt;</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

Releases references

### Static Methods

#### create( ancestorNode : <span style="font-weight: 400; opacity: 80%;">Node</span>, nodes : <span style="font-weight: 400; opacity: 80%;">T</span>, layoutCallback : <span style="font-weight: 400; opacity: 80%;">LayoutCallback&lt;T&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">ManualConstraint&lt;T&gt;</span> {: #create data-toc-label='create' }



## Source Code

See the source for [ManualConstraint.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/ManualConstraint.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
