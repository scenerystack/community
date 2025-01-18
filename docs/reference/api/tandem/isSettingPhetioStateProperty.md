# isSettingPhetioStateProperty

## Overview

Property that is set to true when the PhET-iO State Engine is setting the state of a simulation. This Property
is valuable for checking is PhET-iO state-setting is occurring in your listeners. It is not advised to listen
to this Property for sim-specific state logic. Instead, use TANDEM/phetioStateSetEmitter.

@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)



## Source Code

See the source for [isSettingPhetioStateProperty.ts](https://github.com/phetsims/tandem/blob/main/js/isSettingPhetioStateProperty.ts) in the [tandem](https://github.com/phetsims/tandem) repository.
