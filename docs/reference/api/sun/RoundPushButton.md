# RoundPushButton

## Overview

RoundPushButton is a round push button, used to initiate some action.

@author John Blanco (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)

## Class RoundPushButton {: #RoundPushButton }


```js
import { RoundPushButton } from 'scenerystack/sun';
```
### Constructor

#### new RoundPushButton( providedOptions? : <span style="font-weight: 400; opacity: 80%;">RoundPushButtonOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

#### addListener( listener : <span style="font-weight: 400; opacity: 80%;">PushButtonListener</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #addListener data-toc-label='addListener' }

Adds a listener that will be notified when the button fires.

#### removeListener( listener : <span style="font-weight: 400; opacity: 80%;">PushButtonListener</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #removeListener data-toc-label='removeListener' }

Removes a listener.

### Instance Properties

#### pushButtonModel : <span style="font-weight: 400; opacity: 80%;">PushButtonModel</span> {: #pushButtonModel data-toc-label='pushButtonModel' }

(protected, readonly)

RoundButton has this.buttonModel, but we also need this.pushButtonModel, because it has additional methods



## Source Code

See the source for [RoundPushButton.ts](https://github.com/phetsims/sun/blob/main/js/buttons/RoundPushButton.ts) in the [sun](https://github.com/phetsims/sun) repository.
