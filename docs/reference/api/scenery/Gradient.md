# Gradient

## Overview

Abstract base type for LinearGradient and RadialGradient.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Gradient {: #Gradient }


```js
import { Gradient } from 'scenerystack/scenery';
```
### Constructor

#### new Gradient() {: #constructor data-toc-label='constructor' }

### Instance Methods

#### addColorStop( ratio : <span style="font-weight: 400; opacity: 80%;">number</span>, color : <span style="font-weight: 400; opacity: 80%;">TColor</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #addColorStop data-toc-label='addColorStop' }

Adds a color stop to the gradient.

Color stops should be added in order (monotonically increasing ratio values).

NOTE: Color stops should only be added before using the gradient as a fill/stroke. Adding stops afterwards
      will result in undefined behavior.
TODO: Catch attempts to do the above. https://github.com/phetsims/scenery/issues/1581

@param ratio - Monotonically increasing value in the range of 0 to 1
@param color
@returns - for chaining

#### createCanvasGradient() : <span style="font-weight: 400; opacity: 80%;">CanvasGradient</span> {: #createCanvasGradient data-toc-label='createCanvasGradient' }

Subtypes should return a fresh CanvasGradient type.

#### getSVGStops() : <span style="font-weight: 400; opacity: 80%;">GradientStop[]</span> {: #getSVGStops data-toc-label='getSVGStops' }

Returns stops suitable for direct SVG use.

#### invalidateCanvasGradient() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #invalidateCanvasGradient data-toc-label='invalidateCanvasGradient' }

Forces a re-check of whether colors have changed, so that the Canvas gradient can be regenerated if
necessary.

#### getCanvasStyle() : <span style="font-weight: 400; opacity: 80%;">CanvasGradient</span> {: #getCanvasStyle data-toc-label='getCanvasStyle' }

Returns an object that can be passed to a Canvas context's fillStyle or strokeStyle.

### Instance Properties

#### stops : <span style="font-weight: 400; opacity: 80%;">GradientStop[]</span> {: #stops data-toc-label='stops' }

#### isGradient : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isGradient data-toc-label='isGradient' }

### Static Methods

#### colorToString( color : <span style="font-weight: 400; opacity: 80%;">TColor</span> ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #colorToString data-toc-label='colorToString' }

Returns the current value of the generally-allowed color types for Gradient, as a string.



## Source Code

See the source for [Gradient.ts](https://github.com/phetsims/scenery/blob/main/js/util/Gradient.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
