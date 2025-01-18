# LightBulbNode

## Overview

Light bulb, made to 'glow' by modulating opacity of the 'on' image.

@author Chris Malley (PixelZoom, Inc.)

## Class LightBulbNode {: #LightBulbNode }


```js
import { LightBulbNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new LightBulbNode( brightnessProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[LightBulbNodeOptions](../scenery-phet/LightBulbNode.md#LightBulbNodeOptions)</span> ) {: #LightBulbNode-constructor data-toc-label='new LightBulbNode' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type LightBulbNodeOptions {: #LightBulbNodeOptions }


```js
import type { LightBulbNodeOptions } from 'scenerystack/scenery-phet';
```


- **bulbImageScale**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **lightRaysNodeOptions**?: [LightRaysNodeOptions](../scenery-phet/LightRaysNode.md#LightRaysNodeOptions)
- **lightBulbOnImage**?: [ImageableImage](../scenery/Imageable.md#ImageableImage)
- **lightBulbOffImage**?: [ImageableImage](../scenery/Imageable.md#ImageableImage)
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "children"&gt;




## Source Code

See the source for [LightBulbNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/LightBulbNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
