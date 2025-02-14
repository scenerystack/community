# OrIO

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tandem/blob/main/js/types/OrIO.ts](https://github.com/phetsims/tandem/blob/main/js/types/OrIO.ts) for the most up-to-date information.

## Overview

Parametric IOType that adds support for serializing an element as multiple types, as a composite. Serialization occurs
via a first-come-first-serialize basis, where the first parameterType will be the

Sample usage:

self.numberOrStringProperty = new Property( 'I am currently a string', {
      tandem: Tandem.GENERAL_MODEL.createTandem( 'numberOrStringProperty' ),
      phetioValueType: OrIO( [ StringIO, NumberIO ] )
    } );

@author Michael Kauzmann (PhET Interactive Simulations)



## Source Code

See the source for [OrIO.ts](https://github.com/phetsims/tandem/blob/main/js/types/OrIO.ts) in the [tandem](https://github.com/phetsims/tandem) repository.
