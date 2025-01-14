# StarNode

## Overview

Star that fills in from left to right.  This was originally created for score indicators in games, but it may have
other uses.

@author Sam Reid (PhET Interactive Simulations)
@author John Blanco (PhET Interactive Simulations)

## Class StarNode {: #StarNode }


```js
import { StarNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new StarNode( providedOptions? : <span style="font-weight: 400;">[StarNodeOptions](../scenery-phet/StarNode.md#StarNodeOptions)</span> ) {: #StarNode-constructor data-toc-label='new StarNode' }

### Instance Methods





## Type StarNodeOptions {: #StarNodeOptions }


```js
import type { StarNodeOptions } from 'scenerystack/scenery-phet';
```


- **value**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  The value, from 0 to 1, represented by this StarNode.  A value of 0 shows a completely unfilled star, a value of
  1 shows a completely filled star.
- **emptyFill**?: [TPaint](../scenery/TPaint.md)
<br>  Options that control the appearance of the unfilled (background) star.  Should be bland.
- **emptyStroke**?: [TPaint](../scenery/TPaint.md)
- **emptyLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **emptyLineJoin**?: [LineJoin](../kite/LineStyles.md#LineJoin)
- **filledFill**?: [TPaint](../scenery/TPaint.md)
<br>  Options that control the appearance of the filled (foreground) star.  Should be bold and eye catching.
- **filledStroke**?: [TPaint](../scenery/TPaint.md)
- **filledLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **filledLineJoin**?: [LineJoin](../kite/LineStyles.md#LineJoin)
- **starShapeOptions**?: [StarShapeOptions](../scenery-phet/StarShape.md#StarShapeOptions)
<br>  Options that are passed to the star shape to control things like its size and number of points.
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [StarNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/StarNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
