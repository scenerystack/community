# PlayPauseStepButtonGroup

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/buttons/PlayPauseStepButtonGroup.ts](https://github.com/phetsims/scenery-phet/blob/main/js/buttons/PlayPauseStepButtonGroup.ts) for the most up-to-date information.

## Overview

PlayPauseStepButtonGroup has a play &amp; pause button, optional step-forward button, and optional step-back button.
It's typically a subcomponent of TimeControlNode, and was originally an inner class of TimeControlNode.

@author Denzell Barnett (PhET Interactive Simulations)
@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Chris Malley (PixelZoom, Inc.)
@author Jesse Greenberg (PhET Interactive Simulations)

## Class PlayPauseStepButtonGroup {: #PlayPauseStepButtonGroup }


```js
import { PlayPauseStepButtonGroup } from 'scenerystack/scenery-phet';
```
### Constructor

#### new PlayPauseStepButtonGroup( isPlayingProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[PlayPauseStepButtonGroupOptions](../scenery-phet/PlayPauseStepButtonGroup.md#PlayPauseStepButtonGroupOptions)</span> ) {: #PlayPauseStepButtonGroup-constructor data-toc-label='new PlayPauseStepButtonGroup' }

### Instance Methods

#### getPlayPauseButtonCenter() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getPlayPauseButtonCenter data-toc-label='getPlayPauseButtonCenter' }

Get the center of the PlayPauseButton, in the local coordinate frame of the PlayPauseStepButtonGroup.

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### playPauseButton : <span style="font-weight: 400;">[PlayPauseButton](../scenery-phet/PlayPauseButton.md)</span> {: #playPauseButton data-toc-label='playPauseButton' }

(readonly)

Public to help with positioning



## Type PlayPauseStepButtonGroupOptions {: #PlayPauseStepButtonGroupOptions }


```js
import type { PlayPauseStepButtonGroupOptions } from 'scenerystack/scenery-phet';
```


- **includeStepForwardButton**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  if true, a StepForwardButton is included in the button group
- **includeStepBackwardButton**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  if true, a StepBackwardButton is included in the button group
- **playPauseStepXSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  horizontal space between Play/Pause and Step buttons
- **playPauseButtonOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[PlayPauseButtonOptions](../scenery-phet/PlayPauseButton.md#PlayPauseButtonOptions), "tandem" | "phetioDocumentation"&gt;
<br>  options for button subcomponents
- **stepForwardButtonOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[StepForwardButtonOptions](../scenery-phet/StepForwardButton.md#StepForwardButtonOptions), "tandem" | "phetioDocumentation"&gt;
- **stepBackwardButtonOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[StepBackwardButtonOptions](../scenery-phet/StepBackwardButton.md#StepBackwardButtonOptions), "tandem" | "phetioDocumentation"&gt;
- **playingHelpText**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  pdom - Strings used for the help text of this button group in the playing and paused states. If not provided,
  default help text will be used when a step button is visible.
- **pausedHelpText**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[RemoveParallelDOMOptions](../scenery/ParallelDOM.md#RemoveParallelDOMOptions)&lt;[HBoxOptions](../scenery/HBox.md#HBoxOptions)&gt;, "spacing" | "children"&gt;




## Source Code

See the source for [PlayPauseStepButtonGroup.ts](https://github.com/phetsims/scenery-phet/blob/main/js/buttons/PlayPauseStepButtonGroup.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
