# HomeScreenView

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/joist/blob/main/js/HomeScreenView.ts](https://github.com/phetsims/joist/blob/main/js/HomeScreenView.ts) for the most up-to-date information.

## Overview

Shows the home screen for a multi-screen simulation, which lets the user see all of the screens and select one.

@author Sam Reid (PhET Interactive Simulations)

## Class HomeScreenView {: #HomeScreenView }


```js
import { HomeScreenView } from 'scenerystack/sim';
```
### Constructor

#### new HomeScreenView( simNameProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, model : <span style="font-weight: 400;">[HomeScreenModel](../sim/HomeScreenModel.md)</span>, providedOptions? : <span style="font-weight: 400;">HomeScreenViewOptions</span> ) {: #HomeScreenView-constructor data-toc-label='new HomeScreenView' }

### Instance Methods

#### focusHighlightedScreenButton() {: #focusHighlightedScreenButton data-toc-label='focusHighlightedScreenButton' }

For a11y, highlight the currently selected screen button

#### getVoicingOverviewContent() : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> {: #getVoicingOverviewContent data-toc-label='getVoicingOverviewContent' }

To support voicing.

#### getVoicingDetailsContent() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getVoicingDetailsContent data-toc-label='getVoicingDetailsContent' }

To support voicing.

#### getVoicingHintContent() : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> {: #getVoicingHintContent data-toc-label='getVoicingHintContent' }

To support voicing.

### Instance Properties

#### screenButtons : <span style="font-weight: 400;">[HomeScreenButton](../sim/HomeScreenButton.md)[]</span> {: #screenButtons data-toc-label='screenButtons' }

### Static Properties

#### LAYOUT_BOUNDS : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #LAYOUT_BOUNDS data-toc-label='LAYOUT_BOUNDS' }

(readonly)

NOTE: In https://github.com/phetsims/joist/issues/640, we attempted to use ScreenView.DEFAULT_LAYOUT_BOUNDS here.
Lots of problems were encountered, since both the Home screen and navigation bar are dependent on this value.
If/when joist is cleaned up, this should be ScreenView.DEFAULT_LAYOUT_BOUNDS.

#### TITLE_FONT_FAMILY {: #TITLE_FONT_FAMILY data-toc-label='TITLE_FONT_FAMILY' }

(readonly)

iPad doesn't support Century Gothic, so fall back to Futura, see http://wordpress.org/support/topic/font-not-working-on-ipad-browser



## Source Code

See the source for [HomeScreenView.ts](https://github.com/phetsims/joist/blob/main/js/HomeScreenView.ts) in the [joist](https://github.com/phetsims/joist) repository.
