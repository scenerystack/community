# PushButtonModel

## Overview

Basic model for a push button, including over/down/enabled properties.

@author Sam Reid (PhET Interactive Simulations)
@author John Blanco (PhET Interactive Simulations)
@author Chris Malley (PixelZoom, Inc.)

## Class PushButtonModel {: #PushButtonModel }


```js
import { PushButtonModel } from 'scenerystack/sun';
```
### Constructor

#### new PushButtonModel( providedOptions? : <span style="font-weight: 400; opacity: 80%;">PushButtonModelOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

#### addListener( listener : <span style="font-weight: 400; opacity: 80%;">PushButtonListener</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #addListener data-toc-label='addListener' }

Adds a listener. If already a listener, this is a no-op.
@param listener - function called when the button is pressed, no args

#### removeListener( listener : <span style="font-weight: 400; opacity: 80%;">PushButtonListener</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #removeListener data-toc-label='removeListener' }

Removes a listener. If not a listener, this is a no-op.

#### fire() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #fire data-toc-label='fire' }

Fires all listeners.  Public for phet-io and a11y use.

### Instance Properties

#### isFiringProperty : <span style="font-weight: 400; opacity: 80%;">Property&lt;boolean&gt;</span> {: #isFiringProperty data-toc-label='isFiringProperty' }

(readonly)

used by ResetAllButton to call functions during reset start/end



## Source Code

See the source for [PushButtonModel.ts](https://github.com/phetsims/sun/blob/main/js/buttons/PushButtonModel.ts) in the [sun](https://github.com/phetsims/sun) repository.
