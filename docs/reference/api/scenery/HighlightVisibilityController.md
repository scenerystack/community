# HighlightVisibilityController

## Overview

A listener that manages the visibility of different highlights when switching between mouse/touch and alternative
input for a Display.

@author Jesse Greenberg (PhET Interactive Simulations)

## Class HighlightVisibilityController {: #HighlightVisibilityController }


```js
import { HighlightVisibilityController } from 'scenerystack/scenery';
```
### Constructor

#### new HighlightVisibilityController( display : <span style="font-weight: 400;">[Display](../scenery/Display.md)</span>, providedOptions : <span style="font-weight: 400;">[HighlightVisibilityControllerOptions](../scenery/HighlightVisibilityController.md#HighlightVisibilityControllerOptions)</span> ) {: #HighlightVisibilityController-constructor data-toc-label='new HighlightVisibilityController' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type HighlightVisibilityControllerOptions {: #HighlightVisibilityControllerOptions }


```js
import type { HighlightVisibilityControllerOptions } from 'scenerystack/scenery';
```


- **interactiveHighlightsEnabledProperty**?: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;
<br>  If interactive highlights are supported, a Property that controls whether they are enabled (visible).




## Source Code

See the source for [HighlightVisibilityController.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/HighlightVisibilityController.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
