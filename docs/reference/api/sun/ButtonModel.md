# ButtonModel

## Overview

Base class for button models, which describe the behavior of buttons when users interact with them.  Property values
are set by an associated listener, see PressListener for details.

@author John Blanco (PhET Interactive Simulations)

## Class ButtonModel {: #ButtonModel }


```js
import { ButtonModel } from 'scenerystack/sun';
```
### Constructor

#### new ButtonModel( providedOptions? : <span style="font-weight: 400; opacity: 80%;">ButtonModelOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

#### createPressListener( options? : <span style="font-weight: 400; opacity: 80%;">PressListenerOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">PressListener</span> {: #createPressListener data-toc-label='createPressListener' }

Creates a PressListener that will handle changes to ButtonModel when the associated button Node is pressed.
The client is responsible for adding this PressListener to the associated button Node.

### Instance Properties

#### overProperty : <span style="font-weight: 400; opacity: 80%;">Property&lt;boolean&gt;</span> {: #overProperty data-toc-label='overProperty' }

(readonly)

Is the pointer over the button? Value is read-only.

#### downProperty : <span style="font-weight: 400; opacity: 80%;">Property&lt;boolean&gt;</span> {: #downProperty data-toc-label='downProperty' }

(readonly)

Is the pointer down?

#### focusedProperty : <span style="font-weight: 400; opacity: 80%;">Property&lt;boolean&gt;</span> {: #focusedProperty data-toc-label='focusedProperty' }

(readonly)

Is the button focused from the PDOM?

#### looksPressedProperty : <span style="font-weight: 400; opacity: 80%;">Property&lt;boolean&gt;</span> {: #looksPressedProperty data-toc-label='looksPressedProperty' }

(readonly)

This Property was added for a11y. It tracks whether or not the button should "look" down. This
will be true if downProperty is true or if an a11y click is in progress. For an a11y click, the listeners
are fired right away but the button will look down for as long as PressListener.a11yLooksPressedInterval.
See PressListener.click for more details.

#### looksOverProperty : <span style="font-weight: 400; opacity: 80%;">Property&lt;boolean&gt;</span> {: #looksOverProperty data-toc-label='looksOverProperty' }

(readonly)

This Property was added for a11y. It tracks whether or not the button should "look" over. This
will be true if and PressListeners' looksOverProperty is true, see PressListener for that definition.

#### pdomClickingProperty : <span style="font-weight: 400; opacity: 80%;">Property&lt;boolean&gt;</span> {: #pdomClickingProperty data-toc-label='pdomClickingProperty' }

(readonly)

True when the button is being clicked via the PDOM. You can use this Property if
custom behavior is needed that is specific to alternative input.

#### produceSoundEmitter : <span style="font-weight: 400; opacity: 80%;">TEmitter</span> {: #produceSoundEmitter data-toc-label='produceSoundEmitter' }

(readonly)

(read-only by users, read-write in subclasses) - emitter that is fired when sound should be produced

#### interrupted : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #interrupted data-toc-label='interrupted' }

indicates that interaction was interrupted during a press. Valid until next press.



## Source Code

See the source for [ButtonModel.ts](https://github.com/phetsims/sun/blob/main/js/buttons/ButtonModel.ts) in the [sun](https://github.com/phetsims/sun) repository.
