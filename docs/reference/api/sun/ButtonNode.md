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

#### new ButtonNode( buttonModel : <span style="font-weight: 400; opacity: 80%;">ButtonModel</span>, buttonBackground : <span style="font-weight: 400; opacity: 80%;">Path</span>, interactionStateProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;ButtonInteractionState&gt;</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">ButtonNodeOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

#### setBaseColor( baseColor : <span style="font-weight: 400; opacity: 80%;">TColor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setBaseColor data-toc-label='setBaseColor' }

Sets the base color, which is the main background fill color used for the button.

#### getBaseColor() : <span style="font-weight: 400; opacity: 80%;">TColor</span> {: #getBaseColor data-toc-label='getBaseColor' }

Gets the base color for this button.

#### pdomClick() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #pdomClick data-toc-label='pdomClick' }

Manually click the button, as it would be clicked in response to alternative input. Recommended only for
accessibility usages. For the most part, PDOM button functionality should be managed by PressListener, this should
rarely be used.

### Instance Properties

#### buttonModel : <span style="font-weight: 400; opacity: 80%;">ButtonModel</span> {: #buttonModel data-toc-label='buttonModel' }

(protected)

#### content : <span style="font-weight: 400; opacity: 80%;">Node | null</span> {: #content data-toc-label='content' }

(protected, readonly)

#### contentContainer : <span style="font-weight: 400; opacity: 80%;">Node | null</span> {: #contentContainer data-toc-label='contentContainer' }

(readonly)

#### layoutSizeProperty : <span style="font-weight: 400; opacity: 80%;">TinyProperty&lt;Dimension2&gt;</span> {: #layoutSizeProperty data-toc-label='layoutSizeProperty' }

(protected, readonly)

#### maxLineWidth : <span style="font-weight: 400; opacity: 80%;">number</span> {: #maxLineWidth data-toc-label='maxLineWidth' }

(protected, readonly)

The maximum lineWidth our buttonBackground can have. We'll lay things out so that if we adjust our lineWidth below
this, the layout won't change

### Static Properties

#### FlatAppearanceStrategy : <span style="font-weight: 400; opacity: 80%;">TButtonAppearanceStrategy</span> {: #FlatAppearanceStrategy data-toc-label='FlatAppearanceStrategy' }



## Class FlatAppearanceStrategy {: #FlatAppearanceStrategy }


FlatAppearanceStrategy is a value for ButtonNode options.buttonAppearanceStrategy. It makes a
button look flat, i.e. no shading or highlighting, with color changes on mouseover, press, etc.

```js
import { FlatAppearanceStrategy } from 'scenerystack/sun';
```
### Constructor

#### new FlatAppearanceStrategy( buttonBackground : <span style="font-weight: 400; opacity: 80%;">PaintableNode</span>, interactionStateProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;ButtonInteractionState&gt;</span>, baseColorProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;Color&gt;</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">TButtonAppearanceStrategyOptions</span> ) {: #FlatAppearanceStrategy-constructor data-toc-label='FlatAppearanceStrategy-constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #FlatAppearanceStrategy-dispose data-toc-label='FlatAppearanceStrategy-dispose' }

### Instance Properties

#### maxLineWidth : <span style="font-weight: 400; opacity: 80%;">number</span> {: #FlatAppearanceStrategy-maxLineWidth data-toc-label='FlatAppearanceStrategy-maxLineWidth' }

(readonly)



## Source Code

See the source for [ButtonNode.ts](https://github.com/phetsims/sun/blob/main/js/buttons/ButtonNode.ts) in the [sun](https://github.com/phetsims/sun) repository.
