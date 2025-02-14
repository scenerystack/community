# SliderTick

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/sun/blob/main/js/SliderTick.ts](https://github.com/phetsims/sun/blob/main/js/SliderTick.ts) for the most up-to-date information.

## Overview

Ticks for a slider.

@author Jonathan Olson (PhET Interactive Simulations)


## Class SliderTick {: #SliderTick }


```js
import { SliderTick } from 'scenerystack/sun';
```
### Constructor

#### new SliderTick( parent : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, label : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">undefined</span></span>, length : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stroke : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span>, lineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, tickOptions : <span style="font-weight: 400;">Required&lt;[SliderTickOptions](../sun/SliderTick.md#SliderTickOptions)&gt;</span>, orientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span>, track : <span style="font-weight: 400;">[SliderTrack](../sun/SliderTrack.md)</span> ) {: #SliderTick-constructor data-toc-label='new SliderTick' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### tickNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #tickNode data-toc-label='tickNode' }

(readonly)



## Type SliderTickOptions {: #SliderTickOptions }


```js
import type { SliderTickOptions } from 'scenerystack/sun';
```


- **tickLabelSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **majorTickLength**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **majorTickStroke**?: [TPaint](../scenery/TPaint.md)
- **majorTickLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **minorTickLength**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **minorTickStroke**?: [TPaint](../scenery/TPaint.md)
- **minorTickLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **setTickInitialPoint**?: ( trackBounds: [Bounds2](../dot/Bounds2.md), tickLength: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; [Vector2](../dot/Vector2.md)
- **positionLabel**?: ( label: [Layoutable](../scenery/LayoutProxy.md#Layoutable), tickBounds: [Bounds2](../dot/Bounds2.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>




## Source Code

See the source for [SliderTick.ts](https://github.com/phetsims/sun/blob/main/js/SliderTick.ts) in the [sun](https://github.com/phetsims/sun) repository.
