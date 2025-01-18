# ProtractorNode

## Overview

ProtractorNode is a device for measuring angles.

@author Sam Reid (PhET Interactive Simulations)
@author Chandrashekar Bemagoni (Actual Concepts)
@author Chris Malley (PixelZoom, Inc.)

## Class ProtractorNode {: #ProtractorNode }


```js
import { ProtractorNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new ProtractorNode( providedOptions? : <span style="font-weight: 400;">[ProtractorNodeOptions](../scenery-phet/ProtractorNode.md#ProtractorNodeOptions)</span> ) {: #ProtractorNode-constructor data-toc-label='new ProtractorNode' }

### Instance Methods

#### reset() {: #reset data-toc-label='reset' }

### Instance Properties

#### angleProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> {: #angleProperty data-toc-label='angleProperty' }

(readonly)

angle of the protractor, in radians

### Static Methods

#### createIcon( options : <span style="font-weight: 400;">[NodeOptions](../scenery/Node.md#NodeOptions)</span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #createIcon data-toc-label='createIcon' }

Creates an icon, to be used for toolboxes, checkboxes, etc.



## Type ProtractorNodeOptions {: #ProtractorNodeOptions }


```js
import type { ProtractorNodeOptions } from 'scenerystack/scenery-phet';
```


- **rotatable**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  whether the protractor is rotatable via user interaction
- **angle**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  the initial angle of the protractor, in radians
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "children"&gt;




## Source Code

See the source for [ProtractorNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/ProtractorNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
