# XNode

## Overview

XNode is a specialized view for displaying a 'x'. It is used throughout the sim to indicate the center of mass
of a system of Balls. Generalized to appear as a icon as well.

XNode's rendering strategy is to sub-type PlusNode and rotate the Node 45 degrees.

@author Brandon Li
@author Alex Schor

## Class XNode {: #XNode }


```js
import { XNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new XNode( providedOptions? : <span style="font-weight: 400;">[XNodeOptions](../scenery-phet/XNode.md#XNodeOptions)</span> ) {: #XNode-constructor data-toc-label='new XNode' }

### Instance Methods





## Type XNodeOptions {: #XNodeOptions }


```js
import type { XNodeOptions } from 'scenerystack/scenery-phet';
```


- **legThickness**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  thickness of the legs of the 'x'
- **length**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  the length of the diagonal of the 'x'.
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[PlusNodeOptions](../scenery-phet/PlusNode.md#PlusNodeOptions), "size" | "rotation"&gt;




## Source Code

See the source for [XNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/XNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
