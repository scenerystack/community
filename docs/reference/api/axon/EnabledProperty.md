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

#### new EnabledProperty( initialEnabled : <span style="font-weight: 400; opacity: 80%;">boolean</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">EnabledPropertyOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods





## Source Code

See the source for [EnabledProperty.ts](https://github.com/phetsims/axon/blob/main/js/EnabledProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.
