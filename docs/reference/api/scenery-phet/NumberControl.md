# NumberControl

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/NumberControl.ts](https://github.com/phetsims/scenery-phet/blob/main/js/NumberControl.ts) for the most up-to-date information.

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

#### withMinMaxTicks( label : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, property : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, range : <span style="font-weight: 400;">[Range](../dot/Range.md)</span>, providedOptions? : <span style="font-weight: 400;">[WithMinMaxOptions](../scenery-phet/NumberControl.md#WithMinMaxOptions)</span> ) : <span style="font-weight: 400;">[NumberControl](../scenery-phet/NumberControl.md)</span> {: #withMinMaxTicks data-toc-label='withMinMaxTicks' }

Creates a NumberControl with default tick marks for min and max values.

#### createLayoutFunction1( providedOptions? : <span style="font-weight: 400;">[NumberControlLayoutFunction1Options](../scenery-phet/NumberControl.md#NumberControlLayoutFunction1Options)</span> ) : <span style="font-weight: 400;">[LayoutFunction](../scenery-phet/NumberControl.md#LayoutFunction)</span> {: #createLayoutFunction1 data-toc-label='createLayoutFunction1' }

Creates one of the pre-defined layout functions that can be used for options.layoutFunction.
Arranges subcomponents like this:

 title number
 &lt; ------|------ &gt;


#### createLayoutFunction2( providedOptions? : <span style="font-weight: 400;">[NumberControlLayoutFunction2Options](../scenery-phet/NumberControl.md#NumberControlLayoutFunction2Options)</span> ) : <span style="font-weight: 400;">[LayoutFunction](../scenery-phet/NumberControl.md#LayoutFunction)</span> {: #createLayoutFunction2 data-toc-label='createLayoutFunction2' }

Creates one of the pre-defined layout functions that can be used for options.layoutFunction.
Arranges subcomponents like this:

 title &lt; number &gt;
 ------|------

#### createLayoutFunction3( providedOptions? : <span style="font-weight: 400;">[NumberControlLayoutFunction3Options](../scenery-phet/NumberControl.md#NumberControlLayoutFunction3Options)</span> ) : <span style="font-weight: 400;">[LayoutFunction](../scenery-phet/NumberControl.md#LayoutFunction)</span> {: #createLayoutFunction3 data-toc-label='createLayoutFunction3' }

Creates one of the pre-defined layout functions that can be used for options.layoutFunction.
Arranges subcomponents like this:

 title
 &lt; number &gt;
 -------|-------

#### createLayoutFunction4( providedOptions? : <span style="font-weight: 400;">[NumberControlLayoutFunction4Options](../scenery-phet/NumberControl.md#NumberControlLayoutFunction4Options)</span> ) : <span style="font-weight: 400;">[LayoutFunction](../scenery-phet/NumberControl.md#LayoutFunction)</span> {: #createLayoutFunction4 data-toc-label='createLayoutFunction4' }

Creates one of the pre-defined layout functions that can be used for options.layoutFunction.
Like createLayoutFunction1, but the title and value go all the way to the edges.

### Static Properties

#### NumberControlIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #NumberControlIO data-toc-label='NumberControlIO' }

(readonly)

#### SLIDER_TANDEM_NAME {: #SLIDER_TANDEM_NAME data-toc-label='SLIDER_TANDEM_NAME' }

(readonly)



## Type LayoutFunction {: #LayoutFunction }


```js
import type { LayoutFunction } from 'scenerystack/scenery-phet';
```


( titleNode: [Node](../scenery/Node.md), numberDisplay: [NumberDisplay](../scenery-phet/NumberDisplay.md), slider: [Slider](../sun/Slider.md), decrementButton: [ArrowButton](../sun/ArrowButton.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>, incrementButton: [ArrowButton](../sun/ArrowButton.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> ) =&gt; [Node](../scenery/Node.md)



## Type NumberControlLayoutFunction1Options {: #NumberControlLayoutFunction1Options }


```js
import type { NumberControlLayoutFunction1Options } from 'scenerystack/scenery-phet';
```


- **align**?: "center" | "left" | "right"
<br>  horizontal alignment of rows, 'left'|'right'|'center'
- **titleXSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  horizontal spacing between title and number
- **arrowButtonsXSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  horizontal spacing between arrow buttons and slider
- **ySpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  vertical spacing between rows




## Type NumberControlLayoutFunction2Options {: #NumberControlLayoutFunction2Options }


```js
import type { NumberControlLayoutFunction2Options } from 'scenerystack/scenery-phet';
```


- **align**?: "center" | "left" | "right"
<br>  horizontal alignment of rows, 'left'|'right'|'center'
- **xSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  horizontal spacing in top row
- **ySpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  vertical spacing between rows




## Type NumberControlLayoutFunction3Options {: #NumberControlLayoutFunction3Options }


```js
import type { NumberControlLayoutFunction3Options } from 'scenerystack/scenery-phet';
```


- **alignTitle**?: "center" | "left" | "right"
<br>  horizontal alignment of title, relative to slider, 'left'|'right'|'center'
- **alignNumber**?: "center" | "left" | "right"
<br>  horizontal alignment of number display, relative to slider, 'left'|'right'|'center'
- **titleLeftIndent**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  if provided, indent the title on the left to push the title to the right
- **xSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  horizontal spacing between arrow buttons and slider
- **ySpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  vertical spacing between rows




## Type NumberControlLayoutFunction4Options {: #NumberControlLayoutFunction4Options }


```js
import type { NumberControlLayoutFunction4Options } from 'scenerystack/scenery-phet';
```


- **sliderPadding**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  adds additional horizontal space between title and NumberDisplay
- **verticalSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  vertical spacing between slider and title/NumberDisplay
- **arrowButtonSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  spacing between slider and arrow buttons
- **numberDisplayParentNodeOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "children"&gt;
<br>  Provided to the containing Node of the NumberDisplay
- **createBottomContent**?: ( ( box: [HBox](../scenery/HBox.md) ) =&gt; [Node](../scenery/Node.md) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Supports Pendulum Lab's questionText where a question is substituted for the slider
- **layoutInvisibleButtons**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Whether invisible increment/decrement buttons (or the slider itself) should be laid out as if they were there




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
- **sliderOptions**?: [NumberControlSliderOptions](../scenery-phet/NumberControl.md#NumberControlSliderOptions)
- **arrowButtonOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[ArrowButtonOptions](../sun/ArrowButton.md#ArrowButtonOptions), "fireOnDown"&gt; &amp; { enabledEpsilon?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>; leftStart?: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>; leftEnd?: ( over: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>; rightStart?: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>; rightEnd?: ( over: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span> }
<br>  fireOnDown is buggy, so omit it, see https://github.com/phetsims/scenery-phet/issues/825
- **useRichText**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **titleNodeOptions**?: [TextOptions](../scenery/Text.md#TextOptions) | [RichTextOptions](../scenery/RichText.md#RichTextOptions)
<br>  options passed to Text or RichText (depending on the value of options.useRichText) that displays the value
- **enabledRangeProperty**?: [SliderOptions](../sun/Slider.md#SliderOptions)[ 'enabledRangeProperty' ]
<br>  If provided, this will be provided to the slider and arrow buttons in order to
  constrain the range of actual values to within this range.
- **soundGenerator**?: [ValueChangeSoundPlayer](../tambo/ValueChangeSoundPlayer.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  This is used to generate sounds as the value of the number is changed using the slider or the buttons.  If not
  provided, a default sound generator will be created. If set to null, the number control will generate no sound.
- **valueChangeSoundGeneratorOptions**?: [ValueChangeSoundPlayerOptions](../tambo/ValueChangeSoundPlayer.md#ValueChangeSoundPlayerOptions)
<br>  Options for the default sound generator.  These should only be provided when NOT providing a custom sound player.
- **layoutFunction**?: [LayoutFunction](../scenery-phet/NumberControl.md#LayoutFunction)
<br>  A {function} that handles layout of subcomponents.
  It has signature function( titleNode, numberDisplay, slider, decrementButton, incrementButton )
  and returns a Node. If you want to customize the layout, use one of the predefined creators
  (see createLayoutFunction*) or create your own function. Arrow buttons will be null if `includeArrowButtons:false`
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[TrimParallelDOMOptions](../scenery/ParallelDOM.md#TrimParallelDOMOptions)&lt;[NodeOptions](../scenery/Node.md#NodeOptions)&gt;, "children"&gt;




## Type NumberControlSliderOptions {: #NumberControlSliderOptions }


Other slider options that are specific to NumberControl. Accessibility options should be set on the NumberControl.

```js
import type { NumberControlSliderOptions } from 'scenerystack/scenery-phet';
```


[StrictOmit](../phet-core/StrictOmit.md)&lt;[RemoveParallelDOMOptions](../scenery/ParallelDOM.md#RemoveParallelDOMOptions)&lt;[SliderOptions](../sun/Slider.md#SliderOptions)&gt;, "enabledRangeProperty"&gt; &amp; { majorTicks?: NumberControlMajorTick[]; minorTickSpacing?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> }



## Type WithMinMaxOptions {: #WithMinMaxOptions }


```js
import type { WithMinMaxOptions } from 'scenerystack/scenery-phet';
```


- **tickLabelFont**?: [Font](../scenery/Font.md)
- &amp; [NumberControlOptions](../scenery-phet/NumberControl.md#NumberControlOptions)




## Source Code

See the source for [NumberControl.ts](https://github.com/phetsims/scenery-phet/blob/main/js/NumberControl.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
