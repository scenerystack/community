# InfiniteStatusBar

## Overview

InfiniteStatusBar is the status bar for games that have an infinite (open-ended) number of challenges per level.
See specification in https://github.com/phetsims/vegas/issues/59.

@author Andrea Lin
@author Chris Malley (PixelZoom, Inc.)

## Class InfiniteStatusBar {: #InfiniteStatusBar }


```js
import { InfiniteStatusBar } from 'scenerystack/vegas';
```
### Constructor

#### new InfiniteStatusBar( layoutBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, visibleBoundsProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Bounds2](../dot/Bounds2.md)&gt;</span>, messageNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, scoreProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[InfiniteStatusBarOptions](../vegas/InfiniteStatusBar.md#InfiniteStatusBarOptions)</span> ) {: #InfiniteStatusBar-constructor data-toc-label='new InfiniteStatusBar' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type InfiniteStatusBarOptions {: #InfiniteStatusBarOptions }


```js
import type { InfiniteStatusBarOptions } from 'scenerystack/vegas';
```


- **backButtonListener**?: [PushButtonListener](../sun/PushButtonModel.md#PushButtonListener)
- **xMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **yMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **spacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **createScoreDisplay**?: ( scoreProperty: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt; ) =&gt; [Node](../scenery/Node.md)
<br>  score display
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[StatusBarOptions](../scenery-phet/StatusBar.md#StatusBarOptions), "children" | "barHeight"&gt;




## Source Code

See the source for [InfiniteStatusBar.ts](https://github.com/phetsims/vegas/blob/main/js/InfiniteStatusBar.ts) in the [vegas](https://github.com/phetsims/vegas) repository.
