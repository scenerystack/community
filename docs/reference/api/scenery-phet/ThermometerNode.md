# ThermometerNode

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/ThermometerNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/ThermometerNode.ts) for the most up-to-date information.

## Overview

Thermometer node, see https://github.com/phetsims/scenery-phet/issues/43

@author Aaron Davis
@author Sam Reid (PhET Interactive Simulations)
@author Chris Malley (PixelZoom, Inc.)

## Class ThermometerNode {: #ThermometerNode }


```js
import { ThermometerNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new ThermometerNode( temperatureProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span>, minTemperature : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxTemperature : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, providedOptions? : <span style="font-weight: 400;">[ThermometerNodeOptions](../scenery-phet/ThermometerNode.md#ThermometerNodeOptions)</span> ) {: #ThermometerNode-constructor data-toc-label='new ThermometerNode' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

#### temperatureToYPos( temperature : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #temperatureToYPos data-toc-label='temperatureToYPos' }

Get y position at temperature to allow accurate tick placement
@param temperature - temperature at which to find y position, null is treated as the provided minTemperature

#### yPosToTemperature( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #yPosToTemperature data-toc-label='yPosToTemperature' }

Get temperature at y position to allow temperature thumb mapping
@param y - y position on thermometer node



## Type ThermometerNodeOptions {: #ThermometerNodeOptions }


```js
import type { ThermometerNodeOptions } from 'scenerystack/scenery-phet';
```


- **bulbDiameter**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **tubeWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **tubeHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **lineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **outlineStroke**?: [TColor](../scenery/TColor.md)
- **tickSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **tickSpacingTemperature**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  overrides tickSpacing to space ticks by units of temperature
- **majorTickLength**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **minorTickLength**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **glassThickness**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  space between the thermometer outline and the fluid inside it
- **zeroLevel**?: ZeroLevel
<br>  defines where level is at temperature zero - 'bulbCenter' or 'bulbTop'
- **backgroundFill**?: [TColor](../scenery/TColor.md)
<br>  leave as null to have a transparent background. If a color is given, then an extra Rectangle is created for the background
- **fluidMainColor**?: [TColor](../scenery/TColor.md)
<br>  the main color of the bulb fluid, and the left side of the tube gradient
- **fluidHighlightColor**?: [TColor](../scenery/TColor.md)
<br>  the highlight color of the bulb fluid and the middle of the tube gradient
- **fluidRightSideColor**?: [TColor](../scenery/TColor.md)
<br>  the right side of the tube gradient, not used currently
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [ThermometerNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/ThermometerNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
