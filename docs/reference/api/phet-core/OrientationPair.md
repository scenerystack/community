# OrientationPair

## Overview

An object that contains a value for each item in an enumeration.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class OrientationPair {: #OrientationPair }


```js
import { OrientationPair } from 'scenerystack/phet-core';
```
### Constructor

#### new OrientationPair( horizontal : <span style="font-weight: 400; opacity: 80%;">T</span>, vertical : <span style="font-weight: 400; opacity: 80%;">T</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### with( orientation : <span style="font-weight: 400; opacity: 80%;">Orientation</span>, value : <span style="font-weight: 400; opacity: 80%;">T</span> ) : <span style="font-weight: 400; opacity: 80%;">OrientationPair&lt;T&gt;</span> {: #with data-toc-label='with' }

#### map( mapFunction : <span style="font-weight: 400; opacity: 80%;">( value: T, orientation: Orientation ) =&gt; T</span> ) : <span style="font-weight: 400; opacity: 80%;">OrientationPair&lt;T&gt;</span> {: #map data-toc-label='map' }

Returns a new EnumerationMap with mapped values.

@param mapFunction - function( {*}, {TEnumeration.*} ): {*}
@returns With the mapped values

### Static Methods

#### create( factory : <span style="font-weight: 400; opacity: 80%;">( o: Orientation ) =&gt; T</span> ) : <span style="font-weight: 400; opacity: 80%;">OrientationPair&lt;T&gt;</span> {: #create data-toc-label='create' }

Creates an orientation pair based on a factory method.

@param factory - called once for each orientation to determine
                            the value.



## Source Code

See the source for [OrientationPair.ts](https://github.com/phetsims/phet-core/blob/main/js/OrientationPair.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
