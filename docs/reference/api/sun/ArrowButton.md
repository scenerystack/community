# ArrowButton

## Overview

Button with one or more arrows that point up, down, left or right.
Press and release immediately and the button fires on 'up'.
Press and hold for M milliseconds and the button will fire repeatedly every N milliseconds until released.

@author Chris Malley (PixelZoom, Inc.)

## Class ArrowButton {: #ArrowButton }


```js
import { ArrowButton } from 'scenerystack/sun';
```
### Constructor

#### new ArrowButton( direction : <span style="font-weight: 400;">[ArrowButtonDirection](../sun/ArrowButton.md#ArrowButtonDirection)</span>, callback : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span>, providedOptions? : <span style="font-weight: 400;">[ArrowButtonOptions](../sun/ArrowButton.md#ArrowButtonOptions)</span> ) {: #ArrowButton-constructor data-toc-label='new ArrowButton' }

### Instance Methods





## Type ArrowButtonDirection {: #ArrowButtonDirection }


```js
import type { ArrowButtonDirection } from 'scenerystack/sun';
```


"up" | "down" | "left" | "right"



## Type ArrowButtonOptions {: #ArrowButtonOptions }


```js
import type { ArrowButtonOptions } from 'scenerystack/sun';
```


- **arrowHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **arrowWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **arrowFill**?: [TPaint](../scenery/TPaint.md)
- **arrowStroke**?: [TPaint](../scenery/TPaint.md)
- **arrowLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **numberOfArrows**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **arrowSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; StrictOmit&lt;[RectangularPushButtonOptions](../sun/RectangularPushButton.md#RectangularPushButtonOptions), "content" | "listener"&gt;




## Source Code

See the source for [ArrowButton.ts](https://github.com/phetsims/sun/blob/main/js/buttons/ArrowButton.ts) in the [sun](https://github.com/phetsims/sun) repository.
