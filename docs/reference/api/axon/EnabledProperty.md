# EnabledProperty

## Overview

Property to control if something is enabled. This serves as a consistent class to control
enabled. It also factors out PhET-iO instrumentation. Likely you should use it in cases like so:

const enabledProperty = new BooleanProperty( true, {
  tandem: options.tandem.createTandem( 'enabledProperty' ),
  phetioFeatured: true
} );

@author Michael Kauzmann (PhET Interactive Simulations)

## Class EnabledProperty {: #EnabledProperty }


```js
import { EnabledProperty } from 'scenerystack/axon';
```
### Constructor

#### new EnabledProperty( initialEnabled : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, providedOptions? : <span style="font-weight: 400;">[EnabledPropertyOptions](../axon/EnabledProperty.md#EnabledPropertyOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods





## Type EnabledPropertyOptions {: #EnabledPropertyOptions }


```js
import type { EnabledPropertyOptions } from 'scenerystack/axon';
```
- **checkTandemName**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [BooleanPropertyOptions](../axon/BooleanProperty.md#BooleanPropertyOptions)




## Source Code

See the source for [EnabledProperty.ts](https://github.com/phetsims/axon/blob/main/js/EnabledProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.
