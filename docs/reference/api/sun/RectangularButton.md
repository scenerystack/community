# RectangularButton

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/sun/blob/main/js/buttons/RectangularButton.ts](https://github.com/phetsims/sun/blob/main/js/buttons/RectangularButton.ts) for the most up-to-date information.

## Overview

RectangularButton is the base class for rectangular buttons.

@author John Blanco (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)

## Class RectangularButton {: #RectangularButton }


```js
import { RectangularButton } from 'scenerystack/sun';
```
### Constructor

#### new RectangularButton( buttonModel : <span style="font-weight: 400;">[ButtonModel](../sun/ButtonModel.md)</span>, interactionStateProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[ButtonInteractionState](../sun/ButtonInteractionState.md)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[RectangularButtonOptions](../sun/RectangularButton.md#RectangularButtonOptions)</span> ) {: #RectangularButton-constructor data-toc-label='new RectangularButton' }

### Instance Methods



### Static Properties

#### ThreeDAppearanceStrategy : <span style="font-weight: 400;">[TButtonAppearanceStrategy](../sun/TButtonAppearanceStrategy.md)</span> {: #ThreeDAppearanceStrategy data-toc-label='ThreeDAppearanceStrategy' }



## Type RectangularButtonOptions {: #RectangularButtonOptions }


```js
import type { RectangularButtonOptions } from 'scenerystack/sun';
```


- **size**?: [Dimension2](../dot/Dimension2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  If specified, this will be the size of the button. minWidth and minHeight will be ignored, and
  content will be scaled down to fit inside, accounting for margins.
  NOTE: This will NOT be the size of the button. It does NOT account for the stroke/lineWidth, so the button will
  ALWAYS be larger than this.
  ADDITIONALLY: The button can be larger, if the content doesn't fit.
- **minWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  If you want complete control of a button's dimensions, use options.size. If you want to specify
  one dimensions while having the other dimension determined by content and margin, then use one of these
  options.
  NOTE: This minWidth/minHeight does NOT include the stroke
- **minHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **touchAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  pointer area dilation
- **touchAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **touchAreaXShift**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  pointer area shift, see https://github.com/phetsims/sun/issues/500
- **touchAreaYShift**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaXShift**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaYShift**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **stroke**?: [TPaint](../scenery/TPaint.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **lineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **cornerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  radius applied to all corners unless a corner-specific value is provided
- **leftTopCornerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  {number|null} corner-specific radii
  If null, the option is ignored.
  If non-null, it overrides cornerRadius for the associated corner of the button.
- **rightTopCornerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **leftBottomCornerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **rightBottomCornerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- &amp; [ButtonNodeOptions](../sun/ButtonNode.md#ButtonNodeOptions)




## Source Code

See the source for [RectangularButton.ts](https://github.com/phetsims/sun/blob/main/js/buttons/RectangularButton.ts) in the [sun](https://github.com/phetsims/sun) repository.
