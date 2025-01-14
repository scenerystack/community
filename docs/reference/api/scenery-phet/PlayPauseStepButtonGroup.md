# PlayPauseStepButtonGroup

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
- **includeStepBackwardButton**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **playPauseStepXSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **playPauseButtonOptions**?: StrictOmit&lt;[PlayPauseButtonOptions](../scenery-phet/PlayPauseButton.md#PlayPauseButtonOptions), "[tandem](../tandem/tandem.md)" | "phetioDocumentation"&gt;
- **stepForwardButtonOptions**?: StrictOmit&lt;[StepForwardButtonOptions](../scenery-phet/StepForwardButton.md#StepForwardButtonOptions), "[tandem](../tandem/tandem.md)" | "phetioDocumentation"&gt;
- **stepBackwardButtonOptions**?: StrictOmit&lt;[StepBackwardButtonOptions](../scenery-phet/StepBackwardButton.md#StepBackwardButtonOptions), "[tandem](../tandem/tandem.md)" | "phetioDocumentation"&gt;
- **playingHelpText**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **pausedHelpText**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- &amp; StrictOmit&lt;[RemoveParallelDOMOptions](../scenery/ParallelDOM.md#RemoveParallelDOMOptions)&lt;[HBoxOptions](../scenery/HBox.md#HBoxOptions)&gt;, "spacing" | "children"&gt;




## Source Code

See the source for [PlayPauseStepButtonGroup.ts](https://github.com/phetsims/scenery-phet/blob/main/js/buttons/PlayPauseStepButtonGroup.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
