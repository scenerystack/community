# HandleNode

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/HandleNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/HandleNode.ts) for the most up-to-date information.

## Overview

Scenery node that shows a handle, which is made of two parts: the "grip" which is where you would grab it and the
"attachment" which are elbow-shaped bars that attach the handle to another surface.

@author Chris Klusendorf (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)

## Class HandleNode {: #HandleNode }


```js
import { HandleNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new HandleNode( providedOptions? : <span style="font-weight: 400;">[HandleNodeOptions](../scenery-phet/HandleNode.md#HandleNodeOptions)</span> ) {: #HandleNode-constructor data-toc-label='new HandleNode' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type HandleNodeOptions {: #HandleNodeOptions }


```js
import type { HandleNodeOptions } from 'scenerystack/scenery-phet';
```


- **gripBaseColor**?: [TColor](../scenery/TColor.md)
<br>  options for the grip
- **gripStroke**?: [TColor](../scenery/TColor.md)
- **gripLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **attachmentFill**?: [TColor](../scenery/TColor.md)
<br>  options for the attachment(s)
- **attachmentStroke**?: [TColor](../scenery/TColor.md)
- **attachmentLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **hasLeftAttachment**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **hasRightAttachment**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "children"&gt;




## Source Code

See the source for [HandleNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/HandleNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
