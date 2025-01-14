# RectangularButton

## Overview

RectangularButton is the base class for rectangular buttons.

@author John Blanco (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)

## Class RectangularButton {: #RectangularButton }


```js
import { RectangularButton } from 'scenerystack/sun';
```
### Constructor

#### new RectangularButton( buttonModel : <span style="font-weight: 400;">[ButtonModel](../sun/ButtonModel.md)</span>, interactionStateProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[ButtonInteractionState](../sun/ButtonInteractionState.md)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[RectangularButtonOptions](../sun/RectangularButton.md#RectangularButtonOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods



### Static Properties

#### ThreeDAppearanceStrategy : <span style="font-weight: 400;">[TButtonAppearanceStrategy](../sun/TButtonAppearanceStrategy.md)</span> {: #ThreeDAppearanceStrategy data-toc-label='ThreeDAppearanceStrategy' }



## Type RectangularButtonOptions {: #RectangularButtonOptions }


```js
import type { RectangularButtonOptions } from 'scenerystack/sun';
```
- **size**?: [Dimension2](../dot/Dimension2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **minWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **minHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **touchAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **touchAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **touchAreaXShift**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **touchAreaYShift**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaXShift**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaYShift**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **stroke**?: [TPaint](../scenery/TPaint.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **lineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **cornerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **leftTopCornerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **rightTopCornerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **leftBottomCornerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **rightBottomCornerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- &amp; [ButtonNodeOptions](../sun/ButtonNode.md#ButtonNodeOptions)




## Source Code

See the source for [RectangularButton.ts](https://github.com/phetsims/sun/blob/main/js/buttons/RectangularButton.ts) in the [sun](https://github.com/phetsims/sun) repository.
