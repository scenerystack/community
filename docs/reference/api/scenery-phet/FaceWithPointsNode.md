# FaceWithPointsNode

## Overview

A face that either smiles or frowns.  When the face is smiling, it displays points awarded next to it.

@author John Blanco
@author Sam Reid (PhET Interactive Simulations)
@author Chris Malley (PixelZoom, Inc.)

## Class FaceWithPointsNode {: #FaceWithPointsNode }


```js
import { FaceWithPointsNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new FaceWithPointsNode( providedOptions? : <span style="font-weight: 400;">[FaceWithPointsNodeOptions](../scenery-phet/FaceWithPointsNode.md#FaceWithPointsNodeOptions)</span> ) {: #FaceWithPointsNode-constructor data-toc-label='new FaceWithPointsNode' }

### Instance Methods

#### smile() {: #smile data-toc-label='smile' }

#### frown() {: #frown data-toc-label='frown' }

#### setPoints( points : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setPoints data-toc-label='setPoints' }

Sets the number of points displayed.
@param points



## Type FaceWithPointsNodeOptions {: #FaceWithPointsNodeOptions }


```js
import type { FaceWithPointsNodeOptions } from 'scenerystack/scenery-phet';
```


- **spacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **faceDiameter**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  face options
- **faceOpacity**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **pointsAlignment**?: PointsAlignment
<br>  points options
- **pointsFont**?: [Font](../scenery/Font.md)
- **pointsFill**?: [TColor](../scenery/TColor.md)
- **pointsStroke**?: [TColor](../scenery/TColor.md)
- **pointsOpacity**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **showZeroPoints**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **points**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "children"&gt;




## Source Code

See the source for [FaceWithPointsNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/FaceWithPointsNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
