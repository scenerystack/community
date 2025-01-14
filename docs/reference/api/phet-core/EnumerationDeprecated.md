# EnumerationDeprecated

## Overview

Creates a simple enumeration, with most of the boilerplate.

An EnumerationDeprecated can be created like this:

  const CardinalDirection = EnumerationDeprecated.byKeys( [ 'NORTH', 'SOUTH', 'EAST', 'WEST' ] );

OR using rich values like so:

  const CardinalDirection = EnumerationDeprecated.byMap( {NORTH: northObject, SOUTH: southObject, EAST: eastObject, WEST: westObject} );

and values are referenced like this:

  CardinalDirection.NORTH;
  CardinalDirection.SOUTH;
  CardinalDirection.EAST;
  CardinalDirection.WEST;

  CardinalDirection.VALUES;
  // returns [ CardinalDirection.NORTH, CardinalDirection.SOUTH, CardinalDirection.EAST, CardinalDirection.WEST ]

And support for checking whether any value is a value of the enumeration:

  CardinalDirection.includes( CardinalDirection.NORTH ); // true
  CardinalDirection.includes( CardinalDirection.SOUTHWEST ); // false
  CardinalDirection.includes( 'NORTH' ); // false, values are not strings

Conventions for using EnumerationDeprecated, from https://github.com/phetsims/phet-core/issues/53:

(1) Enumerations are named like classes/types. Nothing in the name needs to identify that they are Enumerations.
    See the example above: CardinalDirection, not CardinalDirectionEnum or CardinalDirectionEnumeration.

(2) EnumerationDeprecated values are named like constants, using uppercase. See the example above.

(3) If an EnumerationDeprecated is closely related to some class, then make it a static field of that class. If an
    EnumerationDeprecated is specific to a Property, then the EnumerationDeprecated should likely be owned by the class that
    owns that Property.

(4) If an EnumerationDeprecated is not closely related to some class, then put the EnumerationDeprecated in its own .js file.
    Do not combine multiple Enumerations into one file.

(5) If a Property takes an EnumerationDeprecated value, its validation typically looks like this:

    const cardinalDirectionProperty = new Property( CardinalDirection.NORTH, {
      validValues: CardinalDirection.VALUES
    }

(6) Values of the EnumerationDeprecated are considered instances of the EnumerationDeprecated in documentation. For example, a method
    that that takes an EnumerationDeprecated value as an argument would be documented like this:

    // @param {Scene} mode - value from Scene EnumerationDeprecated
    setSceneMode( mode ) {
      affirm( Scene.includes( mode ) );
      //...
    }

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class EnumerationDeprecated {: #EnumerationDeprecated }


@deprecated

```js
import { EnumerationDeprecated } from 'scenerystack/phet-core';
```
### Constructor

#### new EnumerationDeprecated( config ) {: #EnumerationDeprecated-constructor data-toc-label='new EnumerationDeprecated' }

### Instance Methods

#### toString() {: #toString data-toc-label='toString' }

Based solely on the keys in EnumerationDeprecated.
@public

@returns {String}

#### includes( value ) {: #includes data-toc-label='includes' }

Checks whether the given value is a value of this enumeration. Should generally be used for assertions
@public

@param {Object} value
@returns {boolean}

#### getValue( key ) {: #getValue data-toc-label='getValue' }

To support consistent API with Enumeration.
@public
@param {string} key
@returns {*}

#### getKey( enumerationValue ) {: #getKey data-toc-label='getKey' }

To support consistent API with Enumeration.
@public
@param {Object} enumerationValue
@returns {string}

### Static Methods

#### byKeys( keys, options ) {: #byKeys data-toc-label='byKeys' }

Creates an enumeration based on the provided string array
@param {string[]} keys - such as ['RED','BLUE']
@param {Object} [options]
@returns {EnumerationDeprecated}
@public

#### byMap( map, options ) {: #byMap data-toc-label='byMap' }

Creates a "rich" enumeration based on the provided map
@param {Object} map - such as {RED: myRedValue, BLUE: myBlueValue}
@param {Object} [options]
@returns {EnumerationDeprecated}
@public



## Source Code

See the source for [EnumerationDeprecated.js](https://github.com/phetsims/phet-core/blob/main/js/EnumerationDeprecated.js) in the [phet-core](https://github.com/phetsims/phet-core) repository.
