# PDOMSectionNode

## Overview

A container type for content in the PDOM for screen reader accessibility. The container is a Node
(Scenery display object), so its children will be other Nodes that may or may not have accessible content.
The accessible content is a 'section' element under the an 'H2' label.  Children are contained under a 'div'
element, and labels will come before the accessible content of the children.

@author Jesse Greenberg (PhET Interactive Simulations)

## Class PDOMSectionNode {: #PDOMSectionNode }


```js
import { PDOMSectionNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new PDOMSectionNode( labelStringProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[PDOMSectionNodeOptions](../scenery-phet/PDOMSectionNode.md#PDOMSectionNodeOptions)</span> ) {: #PDOMSectionNode-constructor data-toc-label='new PDOMSectionNode' }

### Instance Methods





## Type PDOMSectionNodeOptions {: #PDOMSectionNodeOptions }


```js
import type { PDOMSectionNodeOptions } from 'scenerystack/scenery-phet';
```


[StrictOmit](../phet-core/StrictOmit.md)&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "containerTagName" | "tagName" | "labelContent" | "labelTagName"&gt;



## Source Code

See the source for [PDOMSectionNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/accessibility/PDOMSectionNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
