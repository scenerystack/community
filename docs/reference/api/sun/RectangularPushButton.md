# RectangularPushButton

## Overview

RectangularPushButton is a rectangular push button, used to initiate some action.

@author John Blanco (PhET Interactive Simulations)

## Class RectangularPushButton {: #RectangularPushButton }


```js
import { RectangularPushButton } from 'scenerystack/sun';
```
### Constructor

#### new RectangularPushButton( providedOptions? : <span style="font-weight: 400;">[RectangularPushButtonOptions](../sun/RectangularPushButton.md#RectangularPushButtonOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

#### addListener( listener : <span style="font-weight: 400;">[PushButtonListener](../sun/PushButtonModel.md#PushButtonListener)</span> ) {: #addListener data-toc-label='addListener' }

Adds a listener that will be notified when the button fires.

#### removeListener( listener : <span style="font-weight: 400;">[PushButtonListener](../sun/PushButtonModel.md#PushButtonListener)</span> ) {: #removeListener data-toc-label='removeListener' }

Removes a listener.

### Instance Properties

#### pushButtonModel : <span style="font-weight: 400;">[PushButtonModel](../sun/PushButtonModel.md)</span> {: #pushButtonModel data-toc-label='pushButtonModel' }

(protected, readonly)

RectangularButton has this.buttonModel, but we also need this.pushButtonModel, because it has additional methods



## Type RectangularPushButtonOptions {: #RectangularPushButtonOptions }


```js
import type { RectangularPushButtonOptions } from 'scenerystack/sun';
```


- **soundPlayer**?: TSoundPlayer
- &amp; [RectangularButtonOptions](../sun/RectangularButton.md#RectangularButtonOptions) &amp; [PushButtonModelOptions](../sun/PushButtonModel.md#PushButtonModelOptions)




## Source Code

See the source for [RectangularPushButton.ts](https://github.com/phetsims/sun/blob/main/js/buttons/RectangularPushButton.ts) in the [sun](https://github.com/phetsims/sun) repository.
