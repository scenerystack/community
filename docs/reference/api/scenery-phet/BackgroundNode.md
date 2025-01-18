# BackgroundNode

## Overview

BackgroundNode puts a Node on a rectangular background, dynamically sized to fit the Node.

@author Chris Malley (PixelZoom, Inc.)
@author Michael Kauzmann (PhET Interactive Simulations)

## Class BackgroundNode {: #BackgroundNode }


```js
import { BackgroundNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new BackgroundNode( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[BackgroundNodeOptions](../scenery-phet/BackgroundNode.md#BackgroundNodeOptions)</span> ) {: #BackgroundNode-constructor data-toc-label='new BackgroundNode' }

### Instance Methods



### Instance Properties

#### background : <span style="font-weight: 400;">[Rectangle](../scenery/Rectangle.md)</span> {: #background data-toc-label='background' }

(readonly)



## Type BackgroundNodeOptions {: #BackgroundNodeOptions }


```js
import type { BackgroundNodeOptions } from 'scenerystack/scenery-phet';
```


- **xMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **yMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **rectangleOptions**?: [RectangleOptions](../scenery/Rectangle.md#RectangleOptions)
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "children"&gt;




## Source Code

See the source for [BackgroundNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/BackgroundNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
