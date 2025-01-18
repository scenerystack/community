# LightRaysNode

## Overview

Light rays that indicate brightness of a light source such as a bulb.

@author Chris Malley (PixelZoom, Inc.)

## Class LightRaysNode {: #LightRaysNode }


```js
import { LightRaysNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new LightRaysNode( bulbRadius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, provideOptions? : <span style="font-weight: 400;">[LightRaysNodeOptions](../scenery-phet/LightRaysNode.md#LightRaysNodeOptions)</span> ) {: #LightRaysNode-constructor data-toc-label='new LightRaysNode' }

### Instance Methods

#### setBrightness( brightness : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setBrightness data-toc-label='setBrightness' }

Sets the brightness, which updates the number and length of light rays.
@param brightness -a value in the range [0,1]



## Type LightRaysNodeOptions {: #LightRaysNodeOptions }


```js
import type { LightRaysNodeOptions } from 'scenerystack/scenery-phet';
```


- **minRays**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **maxRays**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **minRayLength**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **maxRayLength**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **longRayLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mediumRayLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **shortRayLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; [PathOptions](../scenery/Path.md#PathOptions)




## Source Code

See the source for [LightRaysNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/LightRaysNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
