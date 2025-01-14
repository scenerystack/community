# ScreenView

## Overview

The view portion of a Screen, specifies the layout strategy for the visual view.

For the PDOM view, this type creates  the three organizing elements associated with each screen:
- The `ScreenSummaryNode` is introductory description that outlines the screen and sets the scene for the user.
- The `PlayAreaNode` holds content that is considered the main interaction and pedagogy to be learned from the screen.
- The `ControlAreaNode` houses controls and other content that is secondary to the main interaction. Ideally the user
      would encounter this after exploring the PlayAreaNode.
The screenSummaryNode instance is not available on the ScreenView, instead content can be added to it via a constructor
option or `ScreenView.setScreenSummaryContent`. This is because some accessible descriptions in the screen summary
are the same throughout all simulations. The pdomPlayAreaNode and pdomControlAreaNode instances are protected, read-only Nodes
that are meant to have their pdomOrder and children set to achieve the proper PDOM structure. Do not set
`pdomOrder` directly on the ScreenView, as ScreenView set's its own pdomOrder

@author Sam Reid (PhET Interactive Simulations)

## Class ScreenView {: #ScreenView }


```js
import { ScreenView } from 'scenerystack/sim';
```
### Constructor

#### new ScreenView( providedOptions? : <span style="font-weight: 400;">[ScreenViewOptions](../sim/ScreenView.md#ScreenViewOptions)</span> ) {: #ScreenView-constructor data-toc-label='new ScreenView' }

### Instance Methods

#### setPDOMOrder( pdomOrder : <span style="font-weight: 400;">Array&lt;[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setPDOMOrder data-toc-label='setPDOMOrder' }

This method should not be called because ScreenView defines child Nodes that organize the PDOM structure of a
screen. See this.pdomScreenSummaryNode, this.pdomPlayAreaNode, and this.pdomControlAreaNode and set their accessible
order accordingly when adding accessible content to the PDOM for this screen.

This makes sure that content will be under those Nodes, which are in the same order for all simulations. This
creates a consistent experience for screen reader accessibility.

#### setChildren( children : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setChildren data-toc-label='setChildren' }

Override to make sure that setting children doesn't blow away Nodes set by ScreenView.

#### setScreenSummaryContent( node : <span style="font-weight: 400;">ScreenSummaryContent | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setScreenSummaryContent data-toc-label='setScreenSummaryContent' }

Set the screen summary Node for the PDOM of this Screen View. Prefer passing in a screen summary Node via
constructor options, but this method can be used directly when necessary.

#### getVoicingOverviewContent() : <span style="font-weight: 400;">SpeakableResolvedResponse</span> {: #getVoicingOverviewContent data-toc-label='getVoicingOverviewContent' }

Create the alert content for this ScreenView when the Voicing feature is enabled and the "Overview" button
is pressed.
The default uses content from the ScreenSummaryContent. You can override this function if you require different behavior.

#### getVoicingDetailsContent() : <span style="font-weight: 400;">SpeakableResolvedResponse</span> {: #getVoicingDetailsContent data-toc-label='getVoicingDetailsContent' }

Create the alert content for this ScreenView when the Voicing feature is enabled and the "Details" button is
pressed.
The default uses content from the ScreenSummaryContent. You can override this function if you require different behavior.

#### getVoicingHintContent() : <span style="font-weight: 400;">SpeakableResolvedResponse</span> {: #getVoicingHintContent data-toc-label='getVoicingHintContent' }

Create the alert content for this ScreenView when the Voicing feature is enabled and the "Hint" button is pressed.
The default uses content from the ScreenSummaryContent. You can override this function if you require different behavior.

#### interruptSubtreeInput() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #interruptSubtreeInput data-toc-label='interruptSubtreeInput' }

Interrupts all input listeners that are attached to either this node, or a descendant node.

Overridden here so we can interrupt all of the listeners in the Display, see
https://github.com/phetsims/scenery/issues/1582.

#### step( dt : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #step data-toc-label='step' }

Noops for consistent API

### Instance Properties

#### layoutBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #layoutBounds data-toc-label='layoutBounds' }

(readonly)

#### visibleBoundsProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;[Bounds2](../dot/Bounds2.md)&gt;</span> {: #visibleBoundsProperty data-toc-label='visibleBoundsProperty' }

(readonly)

The visible bounds of the ScreenView in ScreenView coordinates.  This includes top/bottom or left/right margins
depending on the aspect ratio of the screen. Clients should not set this value

#### pdomPlayAreaNode : <span style="font-weight: 400;">PlayAreaNode</span> {: #pdomPlayAreaNode data-toc-label='pdomPlayAreaNode' }

(protected, readonly)

#### pdomControlAreaNode : <span style="font-weight: 400;">ControlAreaNode</span> {: #pdomControlAreaNode data-toc-label='pdomControlAreaNode' }

(protected, readonly)

### Static Methods

#### getLayoutScale( layoutBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, viewBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getLayoutScale data-toc-label='getLayoutScale' }

Get the scale to use for laying out the sim components and the navigation bar, so its size will track
with the sim size

#### getLayoutMatrix( layoutBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, viewBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, providedOptions? : <span style="font-weight: 400;">GetLayoutMatrixOptions</span> ) : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> {: #getLayoutMatrix data-toc-label='getLayoutMatrix' }

### Static Properties

#### DEFAULT_LAYOUT_BOUNDS {: #DEFAULT_LAYOUT_BOUNDS data-toc-label='DEFAULT_LAYOUT_BOUNDS' }

(readonly)



## Type ScreenViewOptions {: #ScreenViewOptions }


```js
import type { ScreenViewOptions } from 'scenerystack/sim';
```


- **layoutBounds**?: [Bounds2](../dot/Bounds2.md)
- **screenSummaryContent**?: ScreenSummaryContent | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **includePDOMNodes**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [ScreenView.ts](https://github.com/phetsims/joist/blob/main/js/ScreenView.ts) in the [joist](https://github.com/phetsims/joist) repository.
