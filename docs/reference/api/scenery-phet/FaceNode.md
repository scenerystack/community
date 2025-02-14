# FaceNode

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/FaceNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/FaceNode.ts) for the most up-to-date information.

## Overview

FaceNode is a face that can smile or frown.  This is generally used for indicating success or failure.
This was ported from a version that was originally written in Java.

@author Chris Malley (PixelZoom, Inc.)
@author John Blanco

## Class FaceNode {: #FaceNode }


```js
import { FaceNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new FaceNode( headDiameter : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, providedOptions? : <span style="font-weight: 400;">[FaceNodeOptions](../scenery-phet/FaceNode.md#FaceNodeOptions)</span> ) {: #FaceNode-constructor data-toc-label='new FaceNode' }

### Instance Methods

#### smile() : <span style="font-weight: 400;">[FaceNode](../scenery-phet/FaceNode.md)</span> {: #smile data-toc-label='smile' }

#### frown() : <span style="font-weight: 400;">[FaceNode](../scenery-phet/FaceNode.md)</span> {: #frown data-toc-label='frown' }



## Type FaceNodeOptions {: #FaceNodeOptions }


```js
import type { FaceNodeOptions } from 'scenerystack/scenery-phet';
```


- **headFill**?: [TColor](../scenery/TColor.md)
- **headStroke**?: [TColor](../scenery/TColor.md)
- **eyeFill**?: [TColor](../scenery/TColor.md)
- **mouthStroke**?: [TColor](../scenery/TColor.md)
- **headLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [FaceNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/FaceNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
