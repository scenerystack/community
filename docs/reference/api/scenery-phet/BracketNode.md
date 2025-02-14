# BracketNode

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/BracketNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/BracketNode.ts) for the most up-to-date information.

## Overview

BracketNode draws a bracket with an optional label.

@author Chris Malley (PixelZoom, Inc.)

## Class BracketNode {: #BracketNode }


```js
import { BracketNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new BracketNode( providedOptions? : <span style="font-weight: 400;">[BracketNodeOptions](../scenery-phet/BracketNode.md#BracketNodeOptions)</span> ) {: #BracketNode-constructor data-toc-label='new BracketNode' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type BracketNodeOptions {: #BracketNodeOptions }


```js
import type { BracketNodeOptions } from 'scenerystack/scenery-phet';
```


- **orientation**?: BracketNodeOrientation
<br>  refers to the direction that the tip of the bracket points
- **labelNode**?: [Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  optional label that will be centered below bracket's tip
- **bracketLength**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  length of the bracket
- **bracketTipPosition**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  [0,1] exclusive, determines where along the width of the bracket the tip (and optional label) are placed
- **bracketEndRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  radius of the arcs at the ends of the bracket
- **bracketTipRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  radius of the arcs at the tip (center) of the bracket
- **bracketStroke**?: [TPaint](../scenery/TPaint.md)
<br>  color of the bracket
- **bracketLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  line width (thickness) of the bracket
- **spacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  space between optional label and tip of bracket
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [BracketNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/BracketNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
