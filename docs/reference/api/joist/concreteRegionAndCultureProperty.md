# concreteRegionAndCultureProperty

## Overview

Like regionAndCultureProperty, but excludes the "random" option, since it doesn't represent a concrete region and culture.
"random" means to randomly select one of the other choices that is supported by the sim.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Chris Malley (PixelZoom, Inc.)

## Type ConcreteRegionAndCulture {: #ConcreteRegionAndCulture }


The complete set of RegionAndCulture values, minus 'random'.

```js
import type { ConcreteRegionAndCulture } from 'scenerystack/joist';
```


Exclude&lt;[RegionAndCulture](../joist/regionAndCultureProperty.md#RegionAndCulture), "random"&gt;



## Source Code

See the source for [concreteRegionAndCultureProperty.ts](https://github.com/phetsims/joist/blob/main/js/i18n/concreteRegionAndCultureProperty.ts) in the [joist](https://github.com/phetsims/joist) repository.
