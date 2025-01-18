# TriangleNode

## Overview

Draws an equilateral or isosceles triangle pointing up by default.
triangleWidth sets the base, while triangleHeight sets the altitude.
The point of the triangle is drawn to be perpendicular from the halfway point of the base.

@author Marla Schulz (PhET Interactive Simulations)

## Class TriangleNode {: #TriangleNode }


```js
import { TriangleNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new TriangleNode( providedOptions? : <span style="font-weight: 400;">[TriangleNodeOptions](../scenery-phet/TriangleNode.md#TriangleNodeOptions)</span> ) {: #TriangleNode-constructor data-toc-label='new TriangleNode' }

### Instance Methods





## Type TriangleNodeOptions {: #TriangleNodeOptions }


```js
import type { TriangleNodeOptions } from 'scenerystack/scenery-phet';
```


- **pointDirection**?: "up" | "down" | "right" | "left"
- **triangleWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **triangleHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[PathOptions](../scenery/Path.md#PathOptions), "rotation" | "shape" | "shapeProperty"&gt;




## Source Code

See the source for [TriangleNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/TriangleNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
