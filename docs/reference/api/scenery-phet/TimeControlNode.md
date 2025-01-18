# TimeControlNode

## Overview

TimeControlNode provides a UI for controlling time.  It includes a play/pause button, step-forward button,
optional step-backward button, and optional radio buttons for time speed. Various layouts are supported via options.

@author Denzell Barnett (PhET Interactive Simulations)
@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Chris Malley (PixelZoom, Inc.)
@author Jesse Greenberg (PhET Interactive Simulations)

## Class TimeControlNode {: #TimeControlNode }


```js
import { TimeControlNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new TimeControlNode( isPlayingProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[TimeControlNodeOptions](../scenery-phet/TimeControlNode.md#TimeControlNodeOptions)</span> ) {: #TimeControlNode-constructor data-toc-label='new TimeControlNode' }

### Instance Methods

#### addPushButton( pushButton : <span style="font-weight: 400;">[RoundPushButton](../sun/RoundPushButton.md)</span>, index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #addPushButton data-toc-label='addPushButton' }

Add a push button to the TimeControlNode.

### Instance Properties

#### pushButtonGroup : <span style="font-weight: 400;">[PlayPauseStepButtonGroup](../scenery-phet/PlayPauseStepButtonGroup.md)</span> {: #pushButtonGroup data-toc-label='pushButtonGroup' }

(protected, readonly)

push button for play/pause and (optionally) step forward, step back



## Type TimeControlNodeOptions {: #TimeControlNodeOptions }


```js
import type { TimeControlNodeOptions } from 'scenerystack/scenery-phet';
```


- **timeSpeedProperty**?: [EnumerationProperty](../axon/EnumerationProperty.md)&lt;[TimeSpeed](../scenery-phet/TimeSpeed.md)&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Play speed Property for the radio button group. If null, no radio buttons included in this control.
- **timeSpeeds**?: [TimeSpeed](../scenery-phet/TimeSpeed.md)[]
<br>  Speeds supported by this TimeControlNode. Vertical radio buttons are created for each in the order provided.
- **speedRadioButtonGroupPlacement**?: "left" | "right" | "top" | "bottom"
<br>  speed radio buttons placement relative to the play/pause button group
- **playPauseStepButtonOptions**?: [PlayPauseStepButtonGroupOptions](../scenery-phet/PlayPauseStepButtonGroup.md#PlayPauseStepButtonGroupOptions)
<br>  options passed along to the PlayPauseStepButtons, see the inner class for defaults
- **speedRadioButtonGroupOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[TimeSpeedRadioButtonGroupOptions](../scenery-phet/TimeSpeedRadioButtonGroup.md#TimeSpeedRadioButtonGroupOptions), "tandem"&gt;
<br>  options passed along to the SpeedRadioButtonGroup, if included
- **flowBoxAlign**?: [HorizontalLayoutAlign](../scenery/LayoutAlign.md#HorizontalLayoutAlign) | [VerticalLayoutAlign](../scenery/LayoutAlign.md#VerticalLayoutAlign)
<br>  Alignment of the FlowBox containing the buttons
- **flowBoxSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  horizontal space between PlayPauseStepButtons and SpeedRadioButtonGroup, if SpeedRadioButtonGroup is included
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "children"&gt;




## Source Code

See the source for [TimeControlNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/TimeControlNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
