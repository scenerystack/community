# MarginLayoutCell

## Overview

A LayoutCell that has margins, and can be positioned and sized relative to those. Used for Flow/Grid layouts

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class MarginLayoutCell {: #MarginLayoutCell }


NOTE: This would be an abstract class, but that is incompatible with how mixin constraints work in TypeScript

```js
import { MarginLayoutCell } from 'scenerystack/scenery';
```
### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Static Methods

#### createHelperNode( cells : <span style="font-weight: 400;">Cell[]</span>, layoutBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, cellToText : <span style="font-weight: 400;">( cell: Cell ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #createHelperNode data-toc-label='createHelperNode' }



## Type MarginLayout {: #MarginLayout }


Interface expected to be overridden by subtypes (GridCell, FlowCell)

```js
import type { MarginLayout } from 'scenerystack/scenery';
```


- **_leftMargin**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **_rightMargin**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **_topMargin**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **_bottomMargin**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **_minContentWidth**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **_minContentHeight**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **_maxContentWidth**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **_maxContentHeight**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>




## Source Code

See the source for [MarginLayoutCell.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/MarginLayoutCell.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
