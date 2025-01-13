# GradientRectangle

## Overview

Mostly like a normal Rectangle (Node), but instead of a hard transition from "in" to "out", it has a defined region
of gradients around the edges.

Has options for controlling the margin amounts for each side. This will control the area that will be covered
by a gradient.

You can control the margin amounts for each side individually with:
- leftMargin
- rightMargin
- topMargin
- bottomMargin

Additionally, the horizontal/vertical margins can also be controlled together with:
- xMargin
- yMargin

And all margins can be controlled together with:
- margin

These options can be provided in the options object, or can be used with setters/getters (like normal Node
options). Note that the getters only work if all equivalent values are the same.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class GradientRectangle {: #GradientRectangle }


```js
import { GradientRectangle } from 'scenerystack/scenery-phet';
```
### Constructor

#### new GradientRectangle( providedOptions? : <span style="font-weight: 400;">[GradientRectangleOptions](../scenery-phet/GradientRectangle.md#GradientRectangleOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### invalidateRectangle() {: #invalidateRectangle data-toc-label='invalidateRectangle' }

(protected)

Custom behavior so we can see when the rectangle dimensions change.

#### dispose() {: #dispose data-toc-label='dispose' }

Overrides disposal to clean up some extra things.

#### setFill( fill : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setFill data-toc-label='setFill' }

We want to be notified of fill changes.

#### setStroke( stroke : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setStroke data-toc-label='setStroke' }

We don't want to allow strokes.

#### mutate( options? : <span style="font-weight: 400;">[GradientRectangleOptions](../scenery-phet/GradientRectangle.md#GradientRectangleOptions)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #mutate data-toc-label='mutate' }



## Source Code

See the source for [GradientRectangle.ts](https://github.com/phetsims/scenery-phet/blob/main/js/GradientRectangle.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
