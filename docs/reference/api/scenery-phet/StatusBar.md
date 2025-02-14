# StatusBar

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/StatusBar.ts](https://github.com/phetsims/scenery-phet/blob/main/js/StatusBar.ts) for the most up-to-date information.

## Overview

StatusBar is the base class for the status bar that appears at the top of games. It sizes itself to match the bounds
of the browser self (the visible bounds) and float to either the top of the browser self or the layout bounds.
Subclasses are responsible for adding UI components to the bar.

@author Chris Malley (PixelZoom, Inc.)

## Class StatusBar {: #StatusBar }


```js
import { StatusBar } from 'scenerystack/scenery-phet';
```
### Constructor

#### new StatusBar( layoutBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, visibleBoundsProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Bounds2](../dot/Bounds2.md)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[StatusBarOptions](../scenery-phet/StatusBar.md#StatusBarOptions)</span> ) {: #StatusBar-constructor data-toc-label='new StatusBar' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### positioningBoundsProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Bounds2](../dot/Bounds2.md)&gt;</span> {: #positioningBoundsProperty data-toc-label='positioningBoundsProperty' }

(protected, readonly)

### Static Properties

#### DEFAULT_FONT : <span style="font-weight: 400;">[PhetFont](../scenery-phet/PhetFont.md)</span> {: #DEFAULT_FONT data-toc-label='DEFAULT_FONT' }

(readonly)

#### DEFAULT_TEXT_FILL {: #DEFAULT_TEXT_FILL data-toc-label='DEFAULT_TEXT_FILL' }

(readonly)



## Type StatusBarOptions {: #StatusBarOptions }


```js
import type { StatusBarOptions } from 'scenerystack/scenery-phet';
```


- **barFill**?: [TColor](../scenery/TColor.md)
- **barStroke**?: [TColor](../scenery/TColor.md)
- **barHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **xMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **yMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **floatToTop**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  true: float bar to top of visible bounds
  false: bar at top of layoutBounds
- **dynamicAlignment**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  true: keeps things on the status bar aligned with left and right edges of self bounds (aka visible bounds)
  false: keeps things on the status bar aligned with left and right edges of layoutBounds
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [StatusBar.ts](https://github.com/phetsims/scenery-phet/blob/main/js/StatusBar.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
