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

#### new PhetioAction( action : <span style="font-weight: 400;">( ...args: T ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span>, providedOptions? : <span style="font-weight: 400;">[ActionOptions](../tandem/PhetioAction.md#ActionOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### execute( ...args : <span style="font-weight: 400;">T</span> ) {: #execute data-toc-label='execute' }

Invokes the action.
@params - expected parameters are based on options.parameters, see constructor

#### dispose() {: #dispose data-toc-label='dispose' }

Note: Be careful about adding disposal logic directly to this function, it is likely preferred to add it to
disposePhetioAction instead, see disposeOnExecuteCompletion for details.

### Instance Properties

#### executedEmitter : <span style="font-weight: 400;">[Emitter](../axon/Emitter.md)&lt;T&gt;</span> {: #executedEmitter data-toc-label='executedEmitter' }

(readonly)

To listen to when the action has completed.

### Static Properties

#### PhetioActionIO {: #PhetioActionIO data-toc-label='PhetioActionIO' }

(readonly)



## Source Code

See the source for [PhetioAction.ts](https://github.com/phetsims/tandem/blob/main/js/PhetioAction.ts) in the [tandem](https://github.com/phetsims/tandem) repository.
