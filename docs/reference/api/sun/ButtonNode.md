# ButtonNode

## Overview

ButtonNode is the base class for the sun button hierarchy.

@author John Blanco (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)

## Class ButtonNode {: #ButtonNode }


```js
import { ButtonNode } from 'scenerystack/sun';
```
### Constructor

#### new ButtonNode( buttonModel : <span style="font-weight: 400;">[ButtonModel](../sun/ButtonModel.md)</span>, buttonBackground : <span style="font-weight: 400;">[Path](../scenery/Path.md)</span>, interactionStateProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[ButtonInteractionState](../sun/ButtonInteractionState.md)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[ButtonNodeOptions](../sun/ButtonNode.md#ButtonNodeOptions)</span> ) {: #ButtonNode-constructor data-toc-label='new ButtonNode' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

#### setBaseColor( baseColor : <span style="font-weight: 400;">[TColor](../scenery/TColor.md)</span> ) {: #setBaseColor data-toc-label='setBaseColor' }

Sets the base color, which is the main background fill color used for the button.

#### getBaseColor() : <span style="font-weight: 400;">[TColor](../scenery/TColor.md)</span> {: #getBaseColor data-toc-label='getBaseColor' }

Gets the base color for this button.

#### pdomClick() {: #pdomClick data-toc-label='pdomClick' }

Manually click the button, as it would be clicked in response to alternative input. Recommended only for
accessibility usages. For the most part, PDOM button functionality should be managed by PressListener, this should
rarely be used.

### Instance Properties

#### buttonModel : <span style="font-weight: 400;">[ButtonModel](../sun/ButtonModel.md)</span> {: #buttonModel data-toc-label='buttonModel' }

(protected)

#### content : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #content data-toc-label='content' }

(protected, readonly)

#### contentContainer : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #contentContainer data-toc-label='contentContainer' }

(readonly)

#### layoutSizeProperty : <span style="font-weight: 400;">[TinyProperty](../axon/TinyProperty.md)&lt;[Dimension2](../dot/Dimension2.md)&gt;</span> {: #layoutSizeProperty data-toc-label='layoutSizeProperty' }

(protected, readonly)

#### maxLineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #maxLineWidth data-toc-label='maxLineWidth' }

(protected, readonly)

The maximum lineWidth our buttonBackground can have. We'll lay things out so that if we adjust our lineWidth below
this, the layout won't change

### Static Properties

#### FlatAppearanceStrategy : <span style="font-weight: 400;">[TButtonAppearanceStrategy](../sun/TButtonAppearanceStrategy.md)</span> {: #FlatAppearanceStrategy data-toc-label='FlatAppearanceStrategy' }



## Type ButtonNodeOptions {: #ButtonNodeOptions }


Normal options, for use in optionize

```js
import type { ButtonNodeOptions } from 'scenerystack/sun';
```


- **content**?: [Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **xMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **yMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **xAlign**?: [AlignBoxXAlign](../scenery/AlignBox.md#AlignBoxXAlign)
- **yAlign**?: [AlignBoxYAlign](../scenery/AlignBox.md#AlignBoxYAlign)
- **xContentOffset**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **yContentOffset**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **listenerOptions**?: [PressListenerOptions](../scenery/PressListener.md#PressListenerOptions)
- **baseColor**?: [TPaint](../scenery/TPaint.md)
- **disabledColor**?: [TPaint](../scenery/TPaint.md)
- **buttonAppearanceStrategy**?: [TButtonAppearanceStrategy](../sun/TButtonAppearanceStrategy.md)
- **buttonAppearanceStrategyOptions**?: [TButtonAppearanceStrategyOptions](../sun/TButtonAppearanceStrategy.md#TButtonAppearanceStrategyOptions)
- **contentAppearanceStrategy**?: [TContentAppearanceStrategy](../sun/TContentAppearanceStrategy.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **contentAppearanceStrategyOptions**?: [TContentAppearanceStrategyOptions](../sun/TContentAppearanceStrategy.md#TContentAppearanceStrategyOptions)
- **enabledAppearanceStrategy**?: EnabledAppearanceStrategy
- &amp; [SizableOptions](../scenery/Sizable.md#SizableOptions) &amp; [VoicingOptions](../scenery/Voicing.md#VoicingOptions) &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Class FlatAppearanceStrategy {: #FlatAppearanceStrategy }


FlatAppearanceStrategy is a value for ButtonNode options.buttonAppearanceStrategy. It makes a
button look flat, i.e. no shading or highlighting, with color changes on mouseover, press, etc.

```js
import { FlatAppearanceStrategy } from 'scenerystack/sun';
```
### Constructor

#### new FlatAppearanceStrategy( buttonBackground : <span style="font-weight: 400;">[PaintableNode](../scenery/Paintable.md#PaintableNode)</span>, interactionStateProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[ButtonInteractionState](../sun/ButtonInteractionState.md)&gt;</span>, baseColorProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Color](../scenery/Color.md)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[TButtonAppearanceStrategyOptions](../sun/TButtonAppearanceStrategy.md#TButtonAppearanceStrategyOptions)</span> ) {: #FlatAppearanceStrategy-FlatAppearanceStrategy-constructor data-toc-label='new FlatAppearanceStrategy-FlatAppearanceStrategy' }

### Instance Methods

#### dispose() {: #FlatAppearanceStrategy-dispose data-toc-label='FlatAppearanceStrategy-dispose' }

### Instance Properties

#### maxLineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #FlatAppearanceStrategy-maxLineWidth data-toc-label='FlatAppearanceStrategy-maxLineWidth' }

(readonly)



## Source Code

See the source for [ButtonNode.ts](https://github.com/phetsims/sun/blob/main/js/buttons/ButtonNode.ts) in the [sun](https://github.com/phetsims/sun) repository.