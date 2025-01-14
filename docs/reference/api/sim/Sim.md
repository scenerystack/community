# Sim

## Overview

Main class that represents one simulation.
Provides default initialization, such as polyfills as well.
If the simulation has only one screen, then there is no homescreen, home icon or screen icon in the navigation bar.

The type for the contained Screen instances is Screen&lt;any,any&gt; since we do not want to parameterize Sim&lt;[{M1,V1},{M2,V2}]
etc.

@author Sam Reid (PhET Interactive Simulations)
@author Chris Malley (PixelZoom, Inc.)
@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Sim {: #Sim }


```js
import { Sim } from 'scenerystack/sim';
```
### Constructor

#### new Sim( simNameProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, allSimScreens : <span style="font-weight: 400;">AnyScreen[]</span>, providedOptions? : <span style="font-weight: 400;">[SimOptions](../sim/Sim.md#SimOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### showPopup( popup : <span style="font-weight: 400;">PopupableNode</span>, isModal : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #showPopup data-toc-label='showPopup' }

Adds a popup in the global coordinate frame. If the popup is model, it displays a semi-transparent black input
barrier behind it. A modal popup prevent the user from interacting with the reset of the application until the
popup is hidden. Use hidePopup() to hide the popup.
@param popup - the popup, must implemented node.hide(), called by hidePopup
@param isModal - whether popup is modal

#### hidePopup( popup : <span style="font-weight: 400;">PopupableNode</span>, isModal : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #hidePopup data-toc-label='hidePopup' }

Hides a popup that was previously displayed with showPopup()
@param popup
@param isModal - whether popup is modal

#### start() {: #start data-toc-label='start' }

#### stepOneFrame() {: #stepOneFrame data-toc-label='stepOneFrame' }

Run a single frame including model, view and display updates, used by Legends of Learning

#### stepSimulation( dt : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #stepSimulation data-toc-label='stepSimulation' }

Update the simulation model, view, scenery display with an elapsed time of dt.
@param dt - in seconds
(phet-io)

#### setPDOMViewsVisible( visible : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setPDOMViewsVisible data-toc-label='setPDOMViewsVisible' }

Hide or show all accessible content related to the sim ScreenViews, and navigation bar. This content will
remain visible, but not be tab navigable or readable with a screen reader. This is generally useful when
displaying a pop up or modal dialog.

#### setSimVoicingVisible( visible : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setSimVoicingVisible data-toc-label='setSimVoicingVisible' }

Set the voicingVisible state of simulation components. When false, ONLY the Toolbar
and its buttons will be able to announce Voicing utterances. This is used by the
"Sim Voicing" switch in the toolbar which will disable all Voicing in the sim so that
only Toolbar content is announced.

#### setNonModalVoicingVisible( visible : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setNonModalVoicingVisible data-toc-label='setNonModalVoicingVisible' }

Sets voicingVisible on all elements "behind" the modal node stack. In this case, voicing should not work for those
components when set to false.
@param visible

#### getAssertionDebugInfo() : <span style="font-weight: 400;">object</span> {: #getAssertionDebugInfo data-toc-label='getAssertionDebugInfo' }

Get helpful information for replicating the bug when an assertion occurs.

### Instance Properties

#### isConstructionCompleteProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #isConstructionCompleteProperty data-toc-label='isConstructionCompleteProperty' }

(readonly)

#### dimensionProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Dimension2](../dot/Dimension2.md)&gt;</span> {: #dimensionProperty data-toc-label='dimensionProperty' }

(readonly)

Stores the effective self dimensions that the simulation will be taking up

#### homeScreen : <span style="font-weight: 400;">HomeScreen | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #homeScreen data-toc-label='homeScreen' }

(readonly)

#### frameStartedEmitter : <span style="font-weight: 400;">[Emitter](../axon/Emitter.md)</span> {: #frameStartedEmitter data-toc-label='frameStartedEmitter' }

(readonly)

Sim screens normally update by implementing model.step(dt) or view.step(dt).  When that is impossible or
relatively awkward, it is possible to listen for a callback when a frame begins, when a frame is being processed
or after the frame is complete.  See https://github.com/phetsims/joist/issues/534
Indicates when a frame starts.  Listen to this Emitter if you have an action that must be
performed before the step begins.

#### frameEndedEmitter : <span style="font-weight: 400;">[Emitter](../axon/Emitter.md)</span> {: #frameEndedEmitter data-toc-label='frameEndedEmitter' }

(readonly)

#### stepSimulationAction : <span style="font-weight: 400;">[PhetioAction](../tandem/PhetioAction.md)&lt;[ <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ]&gt;</span> {: #stepSimulationAction data-toc-label='stepSimulationAction' }

(readonly)

Steps the simulation. This Action is implemented so it can be automatically
played back for PhET-iO record/playback.  Listen to this Action if you have an action that happens during the
simulation step.

#### simScreens : <span style="font-weight: 400;">AnyScreen[]</span> {: #simScreens data-toc-label='simScreens' }

(readonly)

the ordered list of sim-specific screens that appear in this runtime of the sim

#### screens : <span style="font-weight: 400;">AnyScreen[]</span> {: #screens data-toc-label='screens' }

(readonly)

all screens that appear in the runtime of this sim, with the homeScreen first if it was created

#### displayedSimNameProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> {: #displayedSimNameProperty data-toc-label='displayedSimNameProperty' }

(readonly)

the displayed name in the sim. This depends on what screens are shown this runtime (effected by query parameters).

#### selectedScreenProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;AnyScreen&gt;</span> {: #selectedScreenProperty data-toc-label='selectedScreenProperty' }

(readonly)

#### activeSimScreensProperty : <span style="font-weight: 400;">[ReadOnlyProperty](../axon/ReadOnlyProperty.md)&lt;AnyScreen[]&gt;</span> {: #activeSimScreensProperty data-toc-label='activeSimScreensProperty' }

#### activeProperty : <span style="font-weight: 400;">[BooleanProperty](../axon/BooleanProperty.md)</span> {: #activeProperty data-toc-label='activeProperty' }

(readonly)

When the sim is active, scenery processes inputs and stepSimulation(dt) runs from the system clock.
Set to false for when the sim will be paused.

#### browserTabVisibleProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #browserTabVisibleProperty data-toc-label='browserTabVisibleProperty' }

(readonly)

indicates whether the browser tab containing the simulation is currently visible

#### lookAndFeel : <span style="font-weight: 400;">LookAndFeel</span> {: #lookAndFeel data-toc-label='lookAndFeel' }

(readonly)

#### hasKeyboardHelpContent : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasKeyboardHelpContent data-toc-label='hasKeyboardHelpContent' }

(readonly)

If any sim screen has keyboard help content, trigger creation of a keyboard help button.

#### frameCounter {: #frameCounter data-toc-label='frameCounter' }

number of animation frames that have occurred

#### locale : <span style="font-weight: 400;">[Locale](../joist/localeProperty.md#Locale)</span> {: #locale data-toc-label='locale' }

(readonly)

Make our locale available

#### display : <span style="font-weight: 400;">SimDisplay</span> {: #display data-toc-label='display' }

(readonly)

#### preferencesModel : <span style="font-weight: 400;">PreferencesModel</span> {: #preferencesModel data-toc-label='preferencesModel' }

(readonly)

Manages state related to preferences. Enabled features for preferences are provided through the
PreferencesModel.

#### topLayer {: #topLayer data-toc-label='topLayer' }

(readonly)

layer for popups, dialogs, and their backgrounds and barriers
TODO: How should we handle the popup for navigation? Can we set this to private? https://github.com/phetsims/joist/issues/841

#### rootNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #rootNode data-toc-label='rootNode' }

(readonly)

root node for the Display

#### credits : <span style="font-weight: 400;">CreditsData</span> {: #credits data-toc-label='credits' }

(readonly)



## Type SimOptions {: #SimOptions }


```js
import type { SimOptions } from 'scenerystack/sim';
```
- **credits**?: CreditsData
- **homeScreenWarningNode**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | [Node](../scenery/Node.md)
- **preferencesModel**?: PreferencesModel | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **webgl**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **detachInactiveScreenViews**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; PickOptional&lt;[PhetioObjectOptions](../tandem/PhetioObject.md#PhetioObjectOptions), "phetioDesigned"&gt;




## Source Code

See the source for [Sim.ts](https://github.com/phetsims/joist/blob/main/js/Sim.ts) in the [joist](https://github.com/phetsims/joist) repository.
