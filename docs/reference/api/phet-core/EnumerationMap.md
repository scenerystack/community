# EnumerationMap

## Overview

An object that contains a value for each item in an enumeration.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class EnumerationMap {: #EnumerationMap }


T = enumeration value type
U = mapped value type

```js
import { EnumerationMap } from 'scenerystack/phet-core';
```
### Constructor

#### new EnumerationMap( enumeration : <span style="font-weight: 400; opacity: 80%;">TEnumeration&lt;T&gt;</span>, factory : <span style="font-weight: 400; opacity: 80%;">( t: T ) =&gt; U</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### get( entry : <span style="font-weight: 400; opacity: 80%;">T</span> ) : <span style="font-weight: 400; opacity: 80%;">U</span> {: #get data-toc-label='get' }

Returns the value associated with the given enumeration entry.

#### set( entry : <span style="font-weight: 400; opacity: 80%;">T</span>, value : <span style="font-weight: 400; opacity: 80%;">U</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #set data-toc-label='set' }

Sets the value associated with the given enumeration entry.

#### map( mapFunction : <span style="font-weight: 400; opacity: 80%;">( u: U, t: T ) =&gt; U</span> ) : <span style="font-weight: 400; opacity: 80%;">EnumerationMap&lt;T, U&gt;</span> {: #map data-toc-label='map' }

Returns a new EnumerationMap with mapped values.

@param mapFunction - function( {*}, {TEnumeration.*} ): {*}
@returns With the mapped values

#### forEach( callback : <span style="font-weight: 400; opacity: 80%;">( u: U, t: T ) =&gt; void</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #forEach data-toc-label='forEach' }

Calls the callback on each item of the enumeration map.

@param callback - function(value:*, enumerationValue:*)

#### values() : <span style="font-weight: 400; opacity: 80%;">U[]</span> {: #values data-toc-label='values' }

Returns the values stored in the map, as an array




## Source Code

See the source for [EnumerationMap.ts](https://github.com/phetsims/phet-core/blob/main/js/EnumerationMap.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
