# HorizontalMoleculeNode

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/nitroglycerin/blob/main/js/nodes/HorizontalMoleculeNode.ts](https://github.com/phetsims/nitroglycerin/blob/main/js/nodes/HorizontalMoleculeNode.ts) for the most up-to-date information.

## Overview

Base class for molecules with N atoms aligned on the horizontal axis, for N &gt; 0.
Note that here is technically no such thing as a single-atom molecule,
but allowing N=1 simplifies the Equation model.

Origin is at geometric center of the node's bounding rectangle.

@author Chris Malley (PixelZoom, Inc.)
@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class HorizontalMoleculeNode {: #HorizontalMoleculeNode }


```js
import { HorizontalMoleculeNode } from 'scenerystack/nitroglycerin';
```
### Constructor

#### new HorizontalMoleculeNode( elements : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md)[]</span>, providedOptions? : <span style="font-weight: 400;">[HorizontalMoleculeNodeOptions](../nitroglycerin/HorizontalMoleculeNode.md#HorizontalMoleculeNodeOptions)</span> ) {: #HorizontalMoleculeNode-constructor data-toc-label='new HorizontalMoleculeNode' }

### Instance Methods





## Type HorizontalMoleculeNodeOptions {: #HorizontalMoleculeNodeOptions }


```js
import type { HorizontalMoleculeNodeOptions } from 'scenerystack/nitroglycerin';
```


- **direction**?: "leftToRight" | "rightToLeft"
<br>  direction of overlap, leftToRight or rightToLeft
- **overlapPercent**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  amount of overlap between atoms
- &amp; [MoleculeNodeOptions](../nitroglycerin/MoleculeNode.md#MoleculeNodeOptions)




## Source Code

See the source for [HorizontalMoleculeNode.ts](https://github.com/phetsims/nitroglycerin/blob/main/js/nodes/HorizontalMoleculeNode.ts) in the [nitroglycerin](https://github.com/phetsims/nitroglycerin) repository.
