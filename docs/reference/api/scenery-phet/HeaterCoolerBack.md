# HeaterCoolerBack

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/HeaterCoolerBack.ts](https://github.com/phetsims/scenery-phet/blob/main/js/HeaterCoolerBack.ts) for the most up-to-date information.

## Overview

Representation of the back of a HeaterCoolerNode.  It is independent from the front of the HeaterCoolerNode so that
one can easily layer objects between the heater/cooler front and back.  The back contains the elliptical hole and the
fire and ice images.

@author Siddhartha Chinthapally (Actual Concepts) on 20-11-2014.
@author Jesse Greenberg

## Class HeaterCoolerBack {: #HeaterCoolerBack }


```js
import { HeaterCoolerBack } from 'scenerystack/scenery-phet';
```
### Constructor

#### new HeaterCoolerBack( heatCoolAmountProperty : <span style="font-weight: 400;">[NumberProperty](../axon/NumberProperty.md)</span>, providedOptions? : <span style="font-weight: 400;">[HeaterCoolerBackOptions](../scenery-phet/HeaterCoolerBack.md#HeaterCoolerBackOptions)</span> ) {: #HeaterCoolerBack-constructor data-toc-label='new HeaterCoolerBack' }

### Instance Methods

#### getHeaterFrontPosition() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getHeaterFrontPosition data-toc-label='getHeaterFrontPosition' }

Convenience function that returns the correct position for the front of the HeaterCoolerNode.
Specifically, this returns the left center of the stove opening.

### Static Properties

#### OPENING_HEIGHT_SCALE {: #OPENING_HEIGHT_SCALE data-toc-label='OPENING_HEIGHT_SCALE' }

(readonly)

Scale factor that determines the height of the heater opening. Can be made an optional parameter if necessary.

#### DEFAULT_BASE_COLOR {: #DEFAULT_BASE_COLOR data-toc-label='DEFAULT_BASE_COLOR' }

(readonly)



## Type HeaterCoolerBackOptions {: #HeaterCoolerBackOptions }


```js
import type { HeaterCoolerBackOptions } from 'scenerystack/scenery-phet';
```


- **baseColor**?: [Color](../scenery/Color.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [HeaterCoolerBack.ts](https://github.com/phetsims/scenery-phet/blob/main/js/HeaterCoolerBack.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
