# RelaxedManualConstraint

## Overview

Like ManualConstraint, but permits layout when not all the nodes are connected (null will be passed through).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RelaxedManualConstraint {: #RelaxedManualConstraint }


```js
import { RelaxedManualConstraint } from 'scenerystack/scenery';
```
### Constructor

#### new RelaxedManualConstraint( ancestorNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, nodes : <span style="font-weight: 400;">T</span>, layoutCallback : <span style="font-weight: 400;">LayoutCallback&lt;T&gt;</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references

### Static Methods

#### create( ancestorNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, nodes : <span style="font-weight: 400;">T</span>, layoutCallback : <span style="font-weight: 400;">LayoutCallback&lt;T&gt;</span> ) : <span style="font-weight: 400;">[RelaxedManualConstraint](../scenery/RelaxedManualConstraint.md)&lt;T&gt;</span> {: #create data-toc-label='create' }



## Source Code

See the source for [RelaxedManualConstraint.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/RelaxedManualConstraint.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
