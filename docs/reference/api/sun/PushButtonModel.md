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

#### new PushButtonModel( providedOptions? : <span style="font-weight: 400;">[PushButtonModelOptions](../sun/PushButtonModel.md#PushButtonModelOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

#### addListener( listener : <span style="font-weight: 400;">[PushButtonListener](../sun/PushButtonModel.md#PushButtonListener)</span> ) {: #addListener data-toc-label='addListener' }

Adds a listener. If already a listener, this is a no-op.
@param listener - function called when the button is pressed, no args

#### removeListener( listener : <span style="font-weight: 400;">[PushButtonListener](../sun/PushButtonModel.md#PushButtonListener)</span> ) {: #removeListener data-toc-label='removeListener' }

Removes a listener. If not a listener, this is a no-op.

#### fire() {: #fire data-toc-label='fire' }

Fires all listeners.  Public for phet-io and a11y use.

### Instance Properties

#### isFiringProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #isFiringProperty data-toc-label='isFiringProperty' }

(readonly)

used by ResetAllButton to call functions during reset start/end



## Type PushButtonListener {: #PushButtonListener }


```js
import type { PushButtonListener } from 'scenerystack/sun';
```


() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>



## Type PushButtonModelOptions {: #PushButtonModelOptions }


```js
import type { PushButtonModelOptions } from 'scenerystack/sun';
```


- **fireOnDown**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **listener**?: [PushButtonListener](../sun/PushButtonModel.md#PushButtonListener) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **interruptListener**?: ( ( event: [SceneryEvent](../scenery/SceneryEvent.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span> ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **fireOnHold**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **fireOnHoldDelay**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **fireOnHoldInterval**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **phetioReadOnly**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [ButtonModelOptions](../sun/ButtonModel.md#ButtonModelOptions)




## Source Code

See the source for [PushButtonModel.ts](https://github.com/phetsims/sun/blob/main/js/buttons/PushButtonModel.ts) in the [sun](https://github.com/phetsims/sun) repository.
