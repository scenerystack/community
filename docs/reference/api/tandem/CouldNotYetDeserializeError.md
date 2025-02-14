# CouldNotYetDeserializeError

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tandem/blob/main/js/CouldNotYetDeserializeError.ts](https://github.com/phetsims/tandem/blob/main/js/CouldNotYetDeserializeError.ts) for the most up-to-date information.

## Overview

Error to be thrown if a failure occurs downstream of setting state because another state setting operation needs
to occur before "this" operation can succeed. For example, in reference serialization for dynamic PhetioObjects,
the dynamic instance must be created by the state engine before anything can reference it. By triggering this error,
we say "a failure here is alright, we will try again on the next iteration of setting the state. See
`phetioStateEngine.iterate` for more information.

@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)
@author Chris Klusendorf (PhET Interactive Simulations)

## Class CouldNotYetDeserializeError {: #CouldNotYetDeserializeError }


```js
import { CouldNotYetDeserializeError } from 'scenerystack/tandem';
```
### Constructor

#### new CouldNotYetDeserializeError() {: #CouldNotYetDeserializeError-constructor data-toc-label='new CouldNotYetDeserializeError' }

### Instance Methods





## Source Code

See the source for [CouldNotYetDeserializeError.ts](https://github.com/phetsims/tandem/blob/main/js/CouldNotYetDeserializeError.ts) in the [tandem](https://github.com/phetsims/tandem) repository.
