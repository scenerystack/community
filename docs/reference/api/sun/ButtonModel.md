# ButtonModel

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/sun/blob/main/js/buttons/ButtonModel.ts](https://github.com/phetsims/sun/blob/main/js/buttons/ButtonModel.ts) for the most up-to-date information.

## Overview

Base class for button models, which describe the behavior of buttons when users interact with them.  Property values
are set by an associated listener, see PressListener for details.

@author John Blanco (PhET Interactive Simulations)

## Class ButtonModel {: #ButtonModel }


```js
import { ButtonModel } from 'scenerystack/sun';
```
### Constructor

#### new ButtonModel( providedOptions? : <span style="font-weight: 400;">[ButtonModelOptions](../sun/ButtonModel.md#ButtonModelOptions)</span> ) {: #ButtonModel-constructor data-toc-label='new ButtonModel' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

#### createPressListener( options? : <span style="font-weight: 400;">[PressListenerOptions](../scenery/PressListener.md#PressListenerOptions)</span> ) : <span style="font-weight: 400;">[PressListener](../scenery/PressListener.md)</span> {: #createPressListener data-toc-label='createPressListener' }

Creates a PressListener that will handle changes to ButtonModel when the associated button Node is pressed.
The client is responsible for adding this PressListener to the associated button Node.

### Instance Properties

#### overProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #overProperty data-toc-label='overProperty' }

(readonly)

Is the pointer over the button? Value is read-only.

#### downProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #downProperty data-toc-label='downProperty' }

(readonly)

Is the pointer down?

#### focusedProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #focusedProperty data-toc-label='focusedProperty' }

(readonly)

Is the button focused from the PDOM?

#### looksPressedProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #looksPressedProperty data-toc-label='looksPressedProperty' }

(readonly)

This Property was added for a11y. It tracks whether or not the button should "look" down. This
will be true if downProperty is true or if an a11y click is in progress. For an a11y click, the listeners
are fired right away but the button will look down for as long as PressListener.a11yLooksPressedInterval.
See PressListener.click for more details.

#### isOverOrFocusedProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #isOverOrFocusedProperty data-toc-label='isOverOrFocusedProperty' }

(readonly)

This Property was added for a11y. It tracks whether or not the button should "look" over.
This will be true if and PressListeners' isOverOrFocusedProperty is true, see PressListener.
It is true if the pointer is over the button or if the button has focus AND highlights are shown.

#### pdomClickingProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #pdomClickingProperty data-toc-label='pdomClickingProperty' }

(readonly)

True when the button is being clicked via the PDOM. You can use this Property if
custom behavior is needed that is specific to alternative input.

#### produceSoundEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)</span> {: #produceSoundEmitter data-toc-label='produceSoundEmitter' }

(readonly)

(read-only by users, read-write in subclasses) - emitter that is fired when sound should be produced

#### interrupted : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #interrupted data-toc-label='interrupted' }

indicates that interaction was interrupted during a press. Valid until next press.



## Type ButtonModelOptions {: #ButtonModelOptions }


```js
import type { ButtonModelOptions } from 'scenerystack/sun';
```


- **startCallback**?: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
<br>  called on pointer down
- **endCallback**?: ( over: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
<br>  called on pointer up, indicates whether the pointer was released over the button
- **phetioState**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  to support properly passing this to children, see https://github.com/phetsims/tandem/issues/60
- **phetioReadOnly**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  to support properly passing this to children, see https://github.com/phetsims/tandem/issues/60
- **phetioFeatured**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  to support properly passing this to children, see https://github.com/phetsims/tandem/issues/60
- &amp; [EnabledComponentOptions](../axon/EnabledComponent.md#EnabledComponentOptions)




## Source Code

See the source for [ButtonModel.ts](https://github.com/phetsims/sun/blob/main/js/buttons/ButtonModel.ts) in the [sun](https://github.com/phetsims/sun) repository.
