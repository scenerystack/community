# phetioStateSetEmitter

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tandem/blob/main/js/phetioStateSetEmitter.ts](https://github.com/phetsims/tandem/blob/main/js/phetioStateSetEmitter.ts) for the most up-to-date information.

## Overview

emits the state after each time the PhetioStateEngine has set all that it can for the
provided state. The first argument to the emit call is the state object literal that was set.
Use the second argument to check if a client Tandem is in the scope of the current set state.
This is because some state set calls only set partial state (like for a screen/scene).
For example: stateSetEmitter.addListener( ( state, scopeTandem )=&gt; if( myTandem.hasAncestor( scopeTandem ) ){ . . . } )

Note that this emitter emits after all state logic has occurred, but while isSettingPhetioStateProperty is still "true"

@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)



## Source Code

See the source for [phetioStateSetEmitter.ts](https://github.com/phetsims/tandem/blob/main/js/phetioStateSetEmitter.ts) in the [tandem](https://github.com/phetsims/tandem) repository.
