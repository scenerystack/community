# NullableIO

## Overview

Parametric IOType that adds support for null values in toStateObject/fromStateObject. This type is to
prevent the propagation of null handling, mainly in to/fromStateObject, in each type. This also makes null
explicit for phet-io.

Sample usage:

 this.ageProperty = new Property( null, {
   tandem: tandem.createTandem( 'ageProperty' ),
   phetioValueType: NullableIO( NumberIO ) // signifies that the Property can be Number or null
} );

@author Michael Kauzmann (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)



## Source Code

See the source for [NullableIO.ts](https://github.com/phetsims/tandem/blob/main/js/types/NullableIO.ts) in the [tandem](https://github.com/phetsims/tandem) repository.
