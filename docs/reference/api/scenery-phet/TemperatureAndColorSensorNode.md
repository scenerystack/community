# TemperatureAndColorSensorNode

## Overview

A Scenery Node that portrays a thermometer and a triangular indicator of the precise position where the temperature
is being sensed. The triangular indicator can be filled with a color to make it more clear what exactly is being
measured.

@author Arnab Purkayastha
@author John Blanco

## Class TemperatureAndColorSensorNode {: #TemperatureAndColorSensorNode }


```js
import { TemperatureAndColorSensorNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new TemperatureAndColorSensorNode( temperatureProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, temperatureRange : <span style="font-weight: 400;">[Range](../dot/Range.md)</span>, colorProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;[TColor](../scenery/TColor.md)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[TemperatureAndColorSensorNodeOptions](../scenery-phet/TemperatureAndColorSensorNode.md#TemperatureAndColorSensorNodeOptions)</span> ) {: #TemperatureAndColorSensorNode-constructor data-toc-label='new TemperatureAndColorSensorNode' }

### Instance Methods

#### getThermometerBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getThermometerBounds data-toc-label='getThermometerBounds' }

#### getColorIndicatorBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getColorIndicatorBounds data-toc-label='getColorIndicatorBounds' }



## Type TemperatureAndColorSensorNodeOptions {: #TemperatureAndColorSensorNodeOptions }


```js
import type { TemperatureAndColorSensorNodeOptions } from 'scenerystack/scenery-phet';
```


- **horizontalSpace**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  horizontal spacing between color indicator and thermometer
- **bottomOffset**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  vertical difference between bottom of color indicator and thermometer
- **thermometerNodeOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[ThermometerNodeOptions](../scenery-phet/ThermometerNode.md#ThermometerNodeOptions), "left" | "bottom"&gt;
- **colorIndicatorOptions**?:
  - **sideLength**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; [PathOptions](../scenery/Path.md#PathOptions)
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [TemperatureAndColorSensorNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/TemperatureAndColorSensorNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
