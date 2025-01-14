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

#### new NumberControl( title : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, numberProperty : <span style="font-weight: 400;">[PhetioProperty](../axon/PhetioProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, numberRange : <span style="font-weight: 400;">[Range](../dot/Range.md)</span>, providedOptions? : <span style="font-weight: 400;">[NumberControlOptions](../scenery-phet/NumberControl.md#NumberControlOptions)</span> ) {: #NumberControl-constructor data-toc-label='new NumberControl' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### slider : <span style="font-weight: 400;">[HSlider](../sun/HSlider.md)</span> {: #slider data-toc-label='slider' }

(readonly)

### Static Methods

#### withMinMaxTicks( label : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, property : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, range : <span style="font-weight: 400;">[Range](../dot/Range.md)</span>, providedOptions? : <span style="font-weight: 400;">WithMinMaxOptions</span> ) : <span style="font-weight: 400;">[NumberControl](../scenery-phet/NumberControl.md)</span> {: #withMinMaxTicks data-toc-label='withMinMaxTicks' }

Creates a NumberControl with default tick marks for min and max values.

#### createLayoutFunction1( providedOptions? : <span style="font-weight: 400;">NumberControlLayoutFunction1Options</span> ) : <span style="font-weight: 400;">LayoutFunction</span> {: #createLayoutFunction1 data-toc-label='createLayoutFunction1' }

Creates one of the pre-defined layout functions that can be used for options.layoutFunction.
Arranges subcomponents like this:

 title number
 &lt; ------|------ &gt;


#### createLayoutFunction2( providedOptions? : <span style="font-weight: 400;">NumberControlLayoutFunction2Options</span> ) : <span style="font-weight: 400;">LayoutFunction</span> {: #createLayoutFunction2 data-toc-label='createLayoutFunction2' }

Creates one of the pre-defined layout functions that can be used for options.layoutFunction.
Arranges subcomponents like this:

 title &lt; number &gt;
 ------|------

#### createLayoutFunction3( providedOptions? : <span style="font-weight: 400;">NumberControlLayoutFunction3Options</span> ) : <span style="font-weight: 400;">LayoutFunction</span> {: #createLayoutFunction3 data-toc-label='createLayoutFunction3' }

Creates one of the pre-defined layout functions that can be used for options.layoutFunction.
Arranges subcomponents like this:

 title
 &lt; number &gt;
 -------|-------

#### createLayoutFunction4( providedOptions? : <span style="font-weight: 400;">NumberControlLayoutFunction4Options</span> ) : <span style="font-weight: 400;">LayoutFunction</span> {: #createLayoutFunction4 data-toc-label='createLayoutFunction4' }

Creates one of the pre-defined layout functions that can be used for options.layoutFunction.
Like createLayoutFunction1, but the title and value go all the way to the edges.

### Static Properties

#### NumberControlIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #NumberControlIO data-toc-label='NumberControlIO' }

(readonly)

#### SLIDER_TANDEM_NAME {: #SLIDER_TANDEM_NAME data-toc-label='SLIDER_TANDEM_NAME' }

(readonly)



## Type NumberControlOptions {: #NumberControlOptions }


```js
import type { NumberControlOptions } from 'scenerystack/scenery-phet';
```


- **startCallback**?: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
<br>  called when interaction begins, default value set in validateCallbacks()
- **endCallback**?: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
<br>  called when interaction ends, default value set in validateCallbacks()
- **delta**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **disabledOpacity**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  opacity used to make the control look disabled
- **includeArrowButtons**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If set to true, then increment/decrement arrow buttons will be added to the NumberControl
- **numberDisplayOptions**?: [NumberDisplayOptions](../scenery-phet/NumberDisplay.md#NumberDisplayOptions)
<br>  Subcomponent options objects
- **sliderOptions**?: NumberControlSliderOptions
- **arrowButtonOptions**?: StrictOmit&lt;[ArrowButtonOptions](../sun/ArrowButton.md#ArrowButtonOptions), "fireOnDown"&gt; &amp; { enabledEpsilon?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>; leftStart?: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>; leftEnd?: ( over: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>; rightStart?: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>; rightEnd?: ( over: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span> }
<br>  fireOnDown is buggy, so omit it, see https://github.com/phetsims/scenery-phet/issues/825
- **titleNodeOptions**?: [TextOptions](../scenery/Text.md#TextOptions)
- **enabledRangeProperty**?: [SliderOptions](../sun/Slider.md#SliderOptions)[ 'enabledRangeProperty' ]
<br>  If provided, this will be provided to the slider and arrow buttons in order to
  constrain the range of actual values to within this range.
- **soundGenerator**?: ValueChangeSoundPlayer | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  This is used to generate sounds as the value of the number is changed using the slider or the buttons.  If not
  provided, a default sound generator will be created. If set to null, the number control will generate no sound.
- **valueChangeSoundGeneratorOptions**?: ValueChangeSoundPlayerOptions
<br>  Options for the default sound generator.  These should only be provided when NOT providing a custom sound player.
- **layoutFunction**?: LayoutFunction
<br>  A {function} that handles layout of subcomponents.
  It has signature function( titleNode, numberDisplay, slider, decrementButton, incrementButton )
  and returns a Node. If you want to customize the layout, use one of the predefined creators
  (see createLayoutFunction*) or create your own function. Arrow buttons will be null if `includeArrowButtons:false`
- &amp; StrictOmit&lt;[TrimParallelDOMOptions](../scenery/ParallelDOM.md#TrimParallelDOMOptions)&lt;[NodeOptions](../scenery/Node.md#NodeOptions)&gt;, "children"&gt;




## Source Code

See the source for [NumberControl.ts](https://github.com/phetsims/scenery-phet/blob/main/js/NumberControl.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
