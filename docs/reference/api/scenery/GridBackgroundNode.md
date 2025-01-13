# GridBackgroundNode

## Overview

Displays a background for a given GridConstraint.

NOTE: If there are "holes" in the GridBox/GridConstraint (where there is no cell content for an x/y position), then
there will be no background for where those cells (if added) would have been.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class GridBackgroundNode {: #GridBackgroundNode }


```js
import { GridBackgroundNode } from 'scenerystack/scenery';
```
### Constructor

#### new GridBackgroundNode( constraint : <span style="font-weight: 400; opacity: 80%;">GridConstraint</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">GridBackgroundNodeOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

Releases references



## Source Code

See the source for [GridBackgroundNode.ts](https://github.com/phetsims/scenery/blob/main/js/layout/nodes/GridBackgroundNode.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
