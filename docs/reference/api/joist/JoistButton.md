# JoistButton

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/joist/blob/main/js/JoistButton.ts](https://github.com/phetsims/joist/blob/main/js/JoistButton.ts) for the most up-to-date information.

## Overview

Base class for Joist buttons such as the "home" button and "PhET" button that show custom highlighting on mouseover.

@author Sam Reid (PhET Interactive Simulations)

## Class JoistButton {: #JoistButton }


```js
import { JoistButton } from 'scenerystack/joist';
```
### Constructor

#### new JoistButton( content : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, navigationBarFillProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Color](../scenery/Color.md)&gt;</span>, providedOptions : <span style="font-weight: 400;">[JoistButtonOptions](../joist/JoistButton.md#JoistButtonOptions)</span> ) {: #JoistButton-constructor data-toc-label='new JoistButton' }

### Instance Methods

#### isPDOMClicking() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isPDOMClicking data-toc-label='isPDOMClicking' }

Is the button currently firing because of accessibility input coming from the PDOM?
(pdom)

### Instance Properties

#### buttonModel : <span style="font-weight: 400;">[PushButtonModel](../sun/PushButtonModel.md)</span> {: #buttonModel data-toc-label='buttonModel' }

(protected, readonly)

(phet-io|a11y) - Button model
Note it shares a tandem with "this", so the emitter will be instrumented as a child of the button

#### interactionStateProperty : <span style="font-weight: 400;">[PushButtonInteractionStateProperty](../sun/PushButtonInteractionStateProperty.md)</span> {: #interactionStateProperty data-toc-label='interactionStateProperty' }

(protected, readonly)



## Type JoistButtonOptions {: #JoistButtonOptions }


```js
import type { JoistButtonOptions } from 'scenerystack/joist';
```


- **highlightExtensionWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **highlightExtensionHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **highlightCenterOffsetX**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **highlightCenterOffsetY**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **pointerAreaDilationX**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **pointerAreaDilationY**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **listener**?: ( () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span> ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;ParentOptions, "children"&gt; &amp; [PickRequired](../phet-core/PickRequired.md)&lt;ParentOptions, "tandem"&gt;




## Source Code

See the source for [JoistButton.ts](https://github.com/phetsims/joist/blob/main/js/JoistButton.ts) in the [joist](https://github.com/phetsims/joist) repository.
