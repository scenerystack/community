# FiniteStatusBar

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/vegas/blob/main/js/FiniteStatusBar.ts](https://github.com/phetsims/vegas/blob/main/js/FiniteStatusBar.ts) for the most up-to-date information.

## Overview

FiniteStatusBar is the status bar for games that have a finite number of challenges per level.
This was adapted from and replaces ScoreboardBar. See https://github.com/phetsims/vegas/issues/66.

@author Chris Malley (PixelZoom, Inc.)

## Class FiniteStatusBar {: #FiniteStatusBar }


```js
import { FiniteStatusBar } from 'scenerystack/vegas';
```
### Constructor

#### new FiniteStatusBar( layoutBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, visibleBoundsProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Bounds2](../dot/Bounds2.md)&gt;</span>, scoreProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[FiniteStatusBarOptions](../vegas/FiniteStatusBar.md#FiniteStatusBarOptions)</span> ) {: #FiniteStatusBar-constructor data-toc-label='new FiniteStatusBar' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type FiniteStatusBarOptions {: #FiniteStatusBarOptions }


```js
import type { FiniteStatusBarOptions } from 'scenerystack/vegas';
```


- **challengeIndexProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  optional Properties
- **numberOfChallengesProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **levelProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **elapsedTimeProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **timerEnabledProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **levelVisible**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  things that can be hidden
- **challengeNumberVisible**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **font**?: [Font](../scenery/Font.md)
<br>  all text
- **textFill**?: [TColor](../scenery/TColor.md)
- **createScoreDisplay**?: ( scoreProperty: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt; ) =&gt; [Node](../scenery/Node.md)
<br>  score display
- **startOverButtonOptions**?: [TextPushButtonOptions](../sun/TextPushButton.md#TextPushButtonOptions)
<br>  nested options for 'Start Over' button, filled in below
- **startOverButtonText**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;
- **clockIconRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  options for the timer node
- **xSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  spacing and margin for things in the bar
- **xMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **yMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **levelTextOptions**?: [TextOptions](../scenery/Text.md#TextOptions)
- **challengeTextOptions**?: [TextOptions](../scenery/Text.md#TextOptions)
- **barFill**?: [TColor](../scenery/TColor.md)
- **barStroke**?: [TColor](../scenery/TColor.md)
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[StatusBarOptions](../scenery-phet/StatusBar.md#StatusBarOptions), "children" | "barHeight"&gt;




## Source Code

See the source for [FiniteStatusBar.ts](https://github.com/phetsims/vegas/blob/main/js/FiniteStatusBar.ts) in the [vegas](https://github.com/phetsims/vegas) repository.
