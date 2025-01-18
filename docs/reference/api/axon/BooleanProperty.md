# BooleanProperty

## Overview

Property whose value must be true or false. Truthy/falsy values are invalid.

@author Sam Reid (PhET Interactive Simulations)
@author Chris Malley (PixelZoom, Inc.)

## Class BooleanProperty {: #BooleanProperty }


```js
import { BooleanProperty } from 'scenerystack/axon';
```
### Constructor

#### new BooleanProperty( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, providedOptions? : <span style="font-weight: 400;">[BooleanPropertyOptions](../axon/BooleanProperty.md#BooleanPropertyOptions)</span> ) {: #BooleanProperty-constructor data-toc-label='new BooleanProperty' }

### Instance Methods

#### toggle() {: #toggle data-toc-label='toggle' }



## Type BooleanPropertyOptions {: #BooleanPropertyOptions }


client cannot specify superclass options that are controlled by BooleanProperty

```js
import type { BooleanPropertyOptions } from 'scenerystack/axon';
```


[StrictOmit](../phet-core/StrictOmit.md)&lt;[PropertyOptions](../axon/ReadOnlyProperty.md#PropertyOptions)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;, "isValidValue" | "valueType" | "phetioValueType"&gt;



## Source Code

See the source for [BooleanProperty.ts](https://github.com/phetsims/axon/blob/main/js/BooleanProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.
