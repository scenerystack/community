# KeyNode

## Overview

KeyNode looks like a keyboard key. It has a shadow rectangle under the key icon, with a slight offset so that it
has a 3D appearance.  KeyNodes are primarily used for accessibility to provide extra information about keyboard
navigation and functionality, but an icon could be used for any purpose.

Each KeyNode has the same height by default, and icon will be scaled down if it is too large to maintain the proper
key height. The width will expand based on padding and the width of the icon in order to surround content fully.

@author Jesse Greenberg

## Class KeyNode {: #KeyNode }


```js
import { KeyNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new KeyNode( keyIcon : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[KeyNodeOptions](../scenery-phet/KeyNode.md#KeyNodeOptions)</span> ) {: #KeyNode-constructor data-toc-label='new KeyNode' }

### Instance Methods





## Type KeyNodeOptions {: #KeyNodeOptions }


```js
import type { KeyNodeOptions } from 'scenerystack/scenery-phet';
```


- **keyFill**?: [TColor](../scenery/TColor.md)
<br>  color and styling
- **keyShadowFill**?: [TColor](../scenery/TColor.md)
- **lineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **cornerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **xShadowOffset**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  offset for the shadow rectangle relative to the top left corner of the key
- **yShadowOffset**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **xMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  margins set by AlignBox
- **yMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **xAlign**?: XAlign
<br>  icon aligned in center of key by default
- **yAlign**?: YAlign
- **xPadding**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  x and y padding around the icon, will increase the size of the key if there is available space,
  or scale down the icon if key is at max width or height
- **yPadding**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **minKeyWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Key will be at least this wide, making it possible to surround the icon with extra space if necessary.
  The minimum width of the KeyNode allowed, if the icon is wider, than it will expand gracefully
- **keyHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  the desired height of the KeyNode; icon will be scaled down if too big
- **forceSquareKey**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Force the width of the KeyNode to be the same width as height, based on the height.
  Will scale down the icon if too wide.
- &amp; StrictOmit&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "children"&gt;




## Source Code

See the source for [KeyNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/keyboard/KeyNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
