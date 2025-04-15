# IOTypeCache

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tandem/blob/main/js/IOTypeCache.ts](https://github.com/phetsims/tandem/blob/main/js/IOTypeCache.ts) for the most up-to-date information.

## Overview

A cache that helps reuse parametric IOTypes so they aren't dynamic created upon each usage. This also has the feature
of keeping a registry of all caches. This is predominantly used to clear an API and start over in phetioEngine.

@author Michael Kauzmann (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)

## Class IOTypeCache {: #IOTypeCache }


By default, the cache key is an IOType (like for a single parameter like PropertyIO)

```js
import { IOTypeCache } from 'scenerystack/tandem';
```
### Constructor

#### new IOTypeCache( entries? : <span style="font-weight: 400;">readonly ( readonly [ [Key](../scenery-phet/Key.md), Value ] )[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #IOTypeCache-constructor data-toc-label='new IOTypeCache' }

### Instance Methods



### Static Methods

#### clearAll() {: #clearAll data-toc-label='clearAll' }



## Source Code

See the source for [IOTypeCache.ts](https://github.com/phetsims/tandem/blob/main/js/IOTypeCache.ts) in the [tandem](https://github.com/phetsims/tandem) repository.
