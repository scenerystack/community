# RoundButton

## Overview

RoundButton is the base class for round buttons.

@author John Blanco (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)

## Class RoundButton {: #RoundButton }


```js
import { RoundButton } from 'scenerystack/sun';
```
### Constructor

#### new RoundButton( buttonModel : <span style="font-weight: 400;">[ButtonModel](../sun/ButtonModel.md)</span>, interactionStateProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[ButtonInteractionState](../sun/ButtonInteractionState.md)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[RoundButtonOptions](../sun/RoundButton.md#RoundButtonOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods



### Static Properties

#### ThreeDAppearanceStrategy : <span style="font-weight: 400;">[TButtonAppearanceStrategy](../sun/TButtonAppearanceStrategy.md)</span> {: #ThreeDAppearanceStrategy data-toc-label='ThreeDAppearanceStrategy' }



## Class ThreeDAppearanceStrategy {: #ThreeDAppearanceStrategy }


ThreeDAppearanceStrategy is a value for RoundButton options.buttonAppearanceStrategy. It makes a round button
look 3D-ish by using gradients that create the appearance of highlighted and shaded edges. The gradients are
set up to make the light source appear to be in the upper left.

```js
import { ThreeDAppearanceStrategy } from 'scenerystack/sun';
```
### Constructor

#### new ThreeDAppearanceStrategy( buttonBackground : <span style="font-weight: 400;">[Path](../scenery/Path.md)</span>, interactionStateProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[ButtonInteractionState](../sun/ButtonInteractionState.md) | [RadioButtonInteractionState](../sun/RadioButtonInteractionState.md)&gt;</span>, baseColorProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Color](../scenery/Color.md)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[TButtonAppearanceStrategyOptions](../sun/TButtonAppearanceStrategy.md#TButtonAppearanceStrategyOptions)</span> ) {: #ThreeDAppearanceStrategy-constructor data-toc-label='ThreeDAppearanceStrategy-constructor' }

### Instance Methods

#### dispose() {: #ThreeDAppearanceStrategy-dispose data-toc-label='ThreeDAppearanceStrategy-dispose' }

### Instance Properties

#### maxLineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #ThreeDAppearanceStrategy-maxLineWidth data-toc-label='ThreeDAppearanceStrategy-maxLineWidth' }

(readonly)



## Source Code

See the source for [RoundButton.ts](https://github.com/phetsims/sun/blob/main/js/buttons/RoundButton.ts) in the [sun](https://github.com/phetsims/sun) repository.
