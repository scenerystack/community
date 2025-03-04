# ArrowButton

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/sun/blob/main/js/buttons/ArrowButton.ts](https://github.com/phetsims/sun/blob/main/js/buttons/ArrowButton.ts) for the most up-to-date information.

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
<br>  from tip to base
- **arrowWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  width of base
- **arrowFill**?: [TPaint](../scenery/TPaint.md)
- **arrowStroke**?: [TPaint](../scenery/TPaint.md)
- **arrowLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **numberOfArrows**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  each arrow will have the same shape and styling
- **arrowSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  spacing for each arrow such that they overlap slightly
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[RectangularPushButtonOptions](../sun/RectangularPushButton.md#RectangularPushButtonOptions), "content" | "listener"&gt;




## Source Code

See the source for [ArrowButton.ts](https://github.com/phetsims/sun/blob/main/js/buttons/ArrowButton.ts) in the [sun](https://github.com/phetsims/sun) repository.
