# NumberControl

## Overview

NumberControl is a control for changing a Property&lt;number&gt;, with flexible layout. It consists of a labeled value,
slider, and arrow buttons.

@author Chris Malley (PixelZoom, Inc.)

## Class NumberControl {: #NumberControl }


```js
import { NumberControl } from 'scenerystack/scenery-phet';
```
### Constructor

#### new NumberControl( title : <span style="font-weight: 400; opacity: 80%;">string | TReadOnlyProperty&lt;string&gt;</span>, numberProperty : <span style="font-weight: 400; opacity: 80%;">PhetioProperty&lt;number&gt;</span>, numberRange : <span style="font-weight: 400; opacity: 80%;">Range</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">NumberControlOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

### Instance Properties

#### slider : <span style="font-weight: 400; opacity: 80%;">HSlider</span> {: #slider data-toc-label='slider' }

(readonly)

### Static Methods

#### withMinMaxTicks( label : <span style="font-weight: 400; opacity: 80%;">string</span>, property : <span style="font-weight: 400; opacity: 80%;">Property&lt;number&gt;</span>, range : <span style="font-weight: 400; opacity: 80%;">Range</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">WithMinMaxOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">NumberControl</span> {: #withMinMaxTicks data-toc-label='withMinMaxTicks' }

Creates a NumberControl with default tick marks for min and max values.

#### createLayoutFunction1( providedOptions? : <span style="font-weight: 400; opacity: 80%;">NumberControlLayoutFunction1Options</span> ) : <span style="font-weight: 400; opacity: 80%;">LayoutFunction</span> {: #createLayoutFunction1 data-toc-label='createLayoutFunction1' }

Creates one of the pre-defined layout functions that can be used for options.layoutFunction.
Arranges subcomponents like this:

 title number
 &lt; ------|------ &gt;


#### createLayoutFunction2( providedOptions? : <span style="font-weight: 400; opacity: 80%;">NumberControlLayoutFunction2Options</span> ) : <span style="font-weight: 400; opacity: 80%;">LayoutFunction</span> {: #createLayoutFunction2 data-toc-label='createLayoutFunction2' }

Creates one of the pre-defined layout functions that can be used for options.layoutFunction.
Arranges subcomponents like this:

 title &lt; number &gt;
 ------|------

#### createLayoutFunction3( providedOptions? : <span style="font-weight: 400; opacity: 80%;">NumberControlLayoutFunction3Options</span> ) : <span style="font-weight: 400; opacity: 80%;">LayoutFunction</span> {: #createLayoutFunction3 data-toc-label='createLayoutFunction3' }

Creates one of the pre-defined layout functions that can be used for options.layoutFunction.
Arranges subcomponents like this:

 title
 &lt; number &gt;
 -------|-------

#### createLayoutFunction4( providedOptions? : <span style="font-weight: 400; opacity: 80%;">NumberControlLayoutFunction4Options</span> ) : <span style="font-weight: 400; opacity: 80%;">LayoutFunction</span> {: #createLayoutFunction4 data-toc-label='createLayoutFunction4' }

Creates one of the pre-defined layout functions that can be used for options.layoutFunction.
Like createLayoutFunction1, but the title and value go all the way to the edges.

### Static Properties

#### NumberControlIO : <span style="font-weight: 400; opacity: 80%;">IOType</span> {: #NumberControlIO data-toc-label='NumberControlIO' }

(readonly)

#### SLIDER_TANDEM_NAME {: #SLIDER_TANDEM_NAME data-toc-label='SLIDER_TANDEM_NAME' }

(readonly)



## Source Code

See the source for [NumberControl.ts](https://github.com/phetsims/scenery-phet/blob/main/js/NumberControl.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
