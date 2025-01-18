# SliderTrack

## Overview

Shows a track on a slider.  Must be supplied a Node for rendering the track.

@author Chris Malley (PixelZoom, Inc.)
@author Sam Reid (PhET Interactive Simulations)
@author Jesse Greenberg (PhET Interactive Simulations)

## Class SliderTrack {: #SliderTrack }


```js
import { SliderTrack } from 'scenerystack/sun';
```
### Constructor

#### new SliderTrack( valueProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, trackNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, range : <span style="font-weight: 400;">[Range](../dot/Range.md) | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Range](../dot/Range.md)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[SliderTrackOptions](../sun/SliderTrack.md#SliderTrackOptions)</span> ) {: #SliderTrack-constructor data-toc-label='new SliderTrack' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### minimumSize : <span style="font-weight: 400;">[Dimension2](../dot/Dimension2.md)</span> {: #minimumSize data-toc-label='minimumSize' }

(protected, readonly)

#### internalWidthProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> {: #internalWidthProperty data-toc-label='internalWidthProperty' }

(protected, readonly)

#### sizeProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Dimension2](../dot/Dimension2.md)&gt;</span> {: #sizeProperty data-toc-label='sizeProperty' }

(protected, readonly)

#### valueToPositionProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[LinearFunction](../dot/LinearFunction.md)&gt;</span> {: #valueToPositionProperty data-toc-label='valueToPositionProperty' }

(readonly)

For use by Slider, maps the value along the range of the track to the position along the width of the track

#### dragListener : <span style="font-weight: 400;">[DragListener](../scenery/DragListener.md)</span> {: #dragListener data-toc-label='dragListener' }

(readonly)

public so that clients can access Properties of the DragListener that tell us about its state
See https://github.com/phetsims/sun/issues/680

#### leftVisualOverflow : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #leftVisualOverflow data-toc-label='leftVisualOverflow' }

(readonly)

#### rightVisualOverflow : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #rightVisualOverflow data-toc-label='rightVisualOverflow' }

(readonly)



## Type SliderTrackOptions {: #SliderTrackOptions }


```js
import type { SliderTrackOptions } from 'scenerystack/sun';
```


- **size**?: [Dimension2](../dot/Dimension2.md)
<br>  NOTE: for backwards-compatibility, the size does NOT include the extent of the stroke, so the track will be larger
  than this size
- **startDrag**?: ( e: [SceneryEvent](../scenery/SceneryEvent.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
<br>  called when a drag sequence starts
- **drag**?: ( e: [SceneryEvent](../scenery/SceneryEvent.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
<br>  called at the beginning of a drag event, before any other drag work happens
- **endDrag**?: ( e: [SceneryEvent](../scenery/SceneryEvent.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
<br>  called when a drag sequence ends
- **constrainValue**?: ( n: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  called before valueProperty is set
- **enabledRangeProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Range](../dot/Range.md)&gt;
<br>  Defaults to a constant range
- **soundGenerator**?: [ValueChangeSoundPlayer](../tambo/ValueChangeSoundPlayer.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  This is used to generate sounds when clicking in the track.  If not provided, the default sound generator
  will be created. If set to null, the slider will generate no sound.
- **valueChangeSoundGeneratorOptions**?: [ValueChangeSoundPlayerOptions](../tambo/ValueChangeSoundPlayer.md#ValueChangeSoundPlayerOptions)
<br>  Options for the default sound generator.  These should only be provided when using the default.
- **voicingOnEndResponse**?: [VoicingOnEndResponse](../sun/AccessibleValueHandler.md#VoicingOnEndResponse)
<br>  Announces the voicing response at the end of an interaction. Used by AccessibleValueHandler, see
  Slider for an example usage.
- **leftVisualOverflow**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Since our historical slider tracks extend PAST the 0,size range (e.g. with strokes), and this information is needed
  so we can control the size based on our preferredWidth. We'll need the size to be somewhat smaller than our
  preferredWidth
- **rightVisualOverflow**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [SliderTrack.ts](https://github.com/phetsims/sun/blob/main/js/SliderTrack.ts) in the [sun](https://github.com/phetsims/sun) repository.
