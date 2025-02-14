# OrientationPair

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/phet-core/blob/main/js/OrientationPair.ts](https://github.com/phetsims/phet-core/blob/main/js/OrientationPair.ts) for the most up-to-date information.

## Overview

An object that contains a value for each item in an enumeration.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class OrientationPair {: #OrientationPair }


```js
import { OrientationPair } from 'scenerystack/phet-core';
```
### Constructor

#### new OrientationPair( horizontal : <span style="font-weight: 400;">T</span>, vertical : <span style="font-weight: 400;">T</span> ) {: #OrientationPair-constructor data-toc-label='new OrientationPair' }

### Instance Methods

#### with( orientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span>, value : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;">[OrientationPair](../phet-core/OrientationPair.md)&lt;T&gt;</span> {: #with data-toc-label='with' }

#### map( mapFunction : <span style="font-weight: 400;">( value: T, orientation: [Orientation](../phet-core/Orientation.md) ) =&gt; T</span> ) : <span style="font-weight: 400;">[OrientationPair](../phet-core/OrientationPair.md)&lt;T&gt;</span> {: #map data-toc-label='map' }

Returns a new EnumerationMap with mapped values.

@param mapFunction - function( {*}, {TEnumeration.*} ): {*}
@returns With the mapped values

### Static Methods

#### create( factory : <span style="font-weight: 400;">( o: [Orientation](../phet-core/Orientation.md) ) =&gt; T</span> ) : <span style="font-weight: 400;">[OrientationPair](../phet-core/OrientationPair.md)&lt;T&gt;</span> {: #create data-toc-label='create' }

Creates an orientation pair based on a factory method.

@param factory - called once for each orientation to determine
                            the value.



## Source Code

See the source for [OrientationPair.ts](https://github.com/phetsims/phet-core/blob/main/js/OrientationPair.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
