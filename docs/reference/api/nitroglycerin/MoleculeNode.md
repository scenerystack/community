# MoleculeNode

## Overview

MoleculeNode is the base class for all molecules.

@author Chris Malley (PixelZoom, Inc.)

## Class MoleculeNode {: #MoleculeNode }


```js
import { MoleculeNode } from 'scenerystack/nitroglycerin';
```
### Constructor

#### new MoleculeNode( atomNodes : <span style="font-weight: 400;">[AtomNode](../nitroglycerin/AtomNode.md)[]</span>, providedOptions? : <span style="font-weight: 400;">[MoleculeNodeOptions](../nitroglycerin/MoleculeNode.md#MoleculeNodeOptions)</span> ) {: #MoleculeNode-constructor data-toc-label='new MoleculeNode' }

### Instance Methods





## Type MoleculeNodeOptions {: #MoleculeNodeOptions }


```js
import type { MoleculeNodeOptions } from 'scenerystack/nitroglycerin';
```


- **atomNodeOptions**?: [AtomNodeOptions](../nitroglycerin/AtomNode.md#AtomNodeOptions)
<br>  This is not used in MoleculeNode, but is used in every concrete class that extends MoleculeNode.
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "children"&gt;




## Source Code

See the source for [MoleculeNode.ts](https://github.com/phetsims/nitroglycerin/blob/main/js/nodes/MoleculeNode.ts) in the [nitroglycerin](https://github.com/phetsims/nitroglycerin) repository.
