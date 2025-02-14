# ScreenIcon

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/joist/blob/main/js/ScreenIcon.ts](https://github.com/phetsims/joist/blob/main/js/ScreenIcon.ts) for the most up-to-date information.

## Overview

ScreenIcon is an icon that is suitable for one of the screen-selection buttons on the home screen or navigation bar.
By default, the size is optimized for the home screen.
To optimize for the navigation bar, use options.size: Screen.MINIMUM_NAVBAR_ICON_SIZE

@author Chris Malley (PixelZoom, Inc.)

## Class ScreenIcon {: #ScreenIcon }


```js
import { ScreenIcon } from 'scenerystack/sim';
```
### Constructor

#### new ScreenIcon( iconNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[ScreenIconOptions](../sim/ScreenIcon.md#ScreenIconOptions)</span> ) {: #ScreenIcon-constructor data-toc-label='new ScreenIcon' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type ScreenIconOptions {: #ScreenIconOptions }


```js
import type { ScreenIconOptions } from 'scenerystack/sim';
```


- **size**?: [Dimension2](../dot/Dimension2.md)
- **maxIconWidthProportion**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **maxIconHeightProportion**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **fill**?: [TColor](../scenery/TColor.md)
- **stroke**?: [TColor](../scenery/TColor.md)
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "children"&gt;




## Source Code

See the source for [ScreenIcon.ts](https://github.com/phetsims/joist/blob/main/js/ScreenIcon.ts) in the [joist](https://github.com/phetsims/joist) repository.
