# StopwatchNode

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/StopwatchNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/StopwatchNode.ts) for the most up-to-date information.

## Overview

Shows a readout of the elapsed time, with play and pause buttons.  By default there are no units (which could be used
if all of a simulations time units are in 'seconds'), or you can specify a selection of units to choose from.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Sam Reid (PhET Interactive Simulations)
@author Anton Ulyanov (Mlearner)

## Class StopwatchNode {: #StopwatchNode }


```js
import { StopwatchNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new StopwatchNode( stopwatch : <span style="font-weight: 400;">[Stopwatch](../scenery-phet/Stopwatch.md)</span>, providedOptions? : <span style="font-weight: 400;">[StopwatchNodeOptions](../scenery-phet/StopwatchNode.md#StopwatchNodeOptions)</span> ) {: #StopwatchNode-constructor data-toc-label='new StopwatchNode' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### dragListener : <span style="font-weight: 400;">[DragListener](../scenery/DragListener.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #dragListener data-toc-label='dragListener' }

(readonly)

Non-null if draggable. Can be used for forwarding press events when dragging out of a toolbox.

#### keyboardDragListener : <span style="font-weight: 400;">[KeyboardDragListener](../scenery/KeyboardDragListener.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #keyboardDragListener data-toc-label='keyboardDragListener' }

(readonly)

### Static Methods

#### getDecimalPlaces( time : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, numberDecimalPlaces : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getDecimalPlaces data-toc-label='getDecimalPlaces' }

Gets the centiseconds (hundredths-of-a-second) string for a time value.

#### createRichTextNumberFormatter( providedOptions? : <span style="font-weight: 400;">FormatterOptions</span> ) : <span style="font-weight: 400;">( time: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #createRichTextNumberFormatter data-toc-label='createRichTextNumberFormatter' }

Creates a custom value for options.numberDisplayOptions.numberFormatter, passed to NumberDisplay. When using
this method, you will also need to use NumberDisplayOptions.numberFormatterDependencies, to tell NumberDisplay
about the dependencies herein. See https://github.com/phetsims/scenery-phet/issues/781.
This will typically be something like:

numberFormatter: StopwatchNode.createRichTextNumberFormatter( {
  units: unitsProperty,
  ...
} ),
numberFormatterDependencies: [
  string_scenery_phet_stopwatchValueUnitsPattern_StringProperty,
  unitsProperty
],

### Static Properties

#### NUMBER_FONT_FAMILY {: #NUMBER_FONT_FAMILY data-toc-label='NUMBER_FONT_FAMILY' }

(readonly)

We used to use Lucida Console, Arial, but Arial has smaller number width for "11" and hence was causing jitter.
Neither Trebuchet MS and Lucida Grande is a monospace font, but the digits all appear to be monospace.
Use Trebuchet first, since it has broader cross-platform support.
Another advantage of using a non-monospace font (with monospace digits) is that the : and . symbols aren't as
wide as the numerals. @ariel-phet and @samreid tested this combination of families on Mac/Chrome and Windows/Chrome
and it seemed to work nicely, with no jitter.

#### DEFAULT_FONT : <span style="font-weight: 400;">[PhetFont](../scenery-phet/PhetFont.md)</span> {: #DEFAULT_FONT data-toc-label='DEFAULT_FONT' }

(readonly)

#### PLAIN_TEXT_MINUTES_AND_SECONDS {: #PLAIN_TEXT_MINUTES_AND_SECONDS data-toc-label='PLAIN_TEXT_MINUTES_AND_SECONDS' }

(readonly)

A value for options.numberDisplayOptions.numberFormatter where time is interpreted as minutes and seconds.
The format is MM:SS.CC, where M=minutes, S=seconds, C=centiseconds. The returned string is plain text, so all
digits will be the same size, and the client is responsible for setting the font size.

#### RICH_TEXT_MINUTES_AND_SECONDS {: #RICH_TEXT_MINUTES_AND_SECONDS data-toc-label='RICH_TEXT_MINUTES_AND_SECONDS' }

(readonly)

A value for options.numberDisplayOptions.numberFormatter where time is interpreted as minutes and seconds.
The format is format MM:SS.cc, where M=minutes, S=seconds, c=centiseconds. The string returned is in RichText
format, with the 'c' digits in a smaller font.



## Type StopwatchNodeOptions {: #StopwatchNodeOptions }


```js
import type { StopwatchNodeOptions } from 'scenerystack/scenery-phet';
```


- **cursor**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **numberDisplayRange**?: [Range](../dot/Range.md)
- **iconHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **iconFill**?: [TColor](../scenery/TColor.md)
- **iconLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **backgroundBaseColor**?: [TColor](../scenery/TColor.md)
- **buttonBaseColor**?: [TColor](../scenery/TColor.md)
- **resetButtonSoundPlayer**?: [TSoundPlayer](../tambo/TSoundPlayer.md)
- **xSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **ySpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **xMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **yMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **numberDisplayOptions**?: [NumberDisplayOptions](../scenery-phet/NumberDisplay.md#NumberDisplayOptions)
- **dragBoundsProperty**?: [Property](../axon/Property.md)&lt;[Bounds2](../dot/Bounds2.md)&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  If provided, the stopwatch is draggable within the bounds. If null, the stopwatch is not draggable.
- **dragListenerOptions**?: [SoundDragListenerOptions](../scenery-phet/SoundDragListener.md#SoundDragListenerOptions)
<br>  options propagated to the drag listeners
- **keyboardDragListenerOptions**?: [SoundKeyboardDragListenerOptions](../scenery-phet/SoundKeyboardDragListener.md#SoundKeyboardDragListenerOptions)
- **playPauseButtonOptions**?: [BooleanRectangularToggleButtonOptions](../sun/BooleanRectangularToggleButton.md#BooleanRectangularToggleButtonOptions)
<br>  Passed to their respective buttons
- **resetButtonOptions**?: [RectangularPushButtonOptions](../sun/RectangularPushButton.md#RectangularPushButtonOptions)
- **includePlayPauseResetButtons**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  See https://github.com/phetsims/scenery-phet/issues/843
- **otherControls**?: [Node](../scenery/Node.md)[]
<br>  Additional controls to show below the play/pause/rewind buttons in that VBox.
  See https://github.com/phetsims/scenery-phet/issues/843
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;ParentOptions, "children" | "interactiveHighlightEnabled"&gt;




## Source Code

See the source for [StopwatchNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/StopwatchNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
