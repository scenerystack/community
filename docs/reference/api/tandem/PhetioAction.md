# PhetioAction

## Overview

An instrumented class that wraps a function that does "work" that needs to be interoperable with PhET-iO.
PhetioAction supports the following features:

1. Data stream support: The function will be wrapped in an `executed` event and added to the data stream, nesting
subsequent events the action's "work" cascades to as child events.
2. Interopererability: PhetioActionIO supports the `execute` method so that PhetioAction instances can be executed
from the PhET-iO wrapper.
3. It also has an emitter if you want to listen to when the action is done doing its work, https://github.com/phetsims/phet-io/issues/1543

@author Michael Kauzmann (PhET Interactive Simulations)

## Class PhetioAction {: #PhetioAction }


```js
import { PhetioAction } from 'scenerystack/tandem';
```
### Constructor

#### new PhetioAction( action : <span style="font-weight: 400; opacity: 80%;">( ...args: T ) =&gt; void</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">ActionOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### execute( ...args : <span style="font-weight: 400; opacity: 80%;">T</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #execute data-toc-label='execute' }

Invokes the action.
@params - expected parameters are based on options.parameters, see constructor

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

Note: Be careful about adding disposal logic directly to this function, it is likely preferred to add it to
disposePhetioAction instead, see disposeOnExecuteCompletion for details.

### Instance Properties

#### executedEmitter : <span style="font-weight: 400; opacity: 80%;">Emitter&lt;T&gt;</span> {: #executedEmitter data-toc-label='executedEmitter' }

(readonly)

To listen to when the action has completed.

### Static Properties

#### PhetioActionIO {: #PhetioActionIO data-toc-label='PhetioActionIO' }

(readonly)



## Source Code

See the source for [PhetioAction.ts](https://github.com/phetsims/tandem/blob/main/js/PhetioAction.ts) in the [tandem](https://github.com/phetsims/tandem) repository.
