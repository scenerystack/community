# GridConfigurable

## Overview

Mixin for storing options that can affect each cell.

Handles a lot of conversion from internal Enumeration values (for performance) and external string representations.
This is done primarily for performance and that style of internal enumeration pattern. If string comparisons are
faster, that could be used instead.

NOTE: This is mixed into both the constraint AND the cell, since we have two layers of options. The `null` meaning
"inherit from the default" is mainly used for the cells, so that if it's not specified in the cell, it will be
specified in the constraint (as non-null).

NOTE: This is a mixin meant to be used internally only by Scenery (for the constraint and cell), and should not be
used by outside code.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type ExternalGridConfigurableOptions {: #ExternalGridConfigurableOptions }


We remove the null values for the values that won't actually take null

```js
import type { ExternalGridConfigurableOptions } from 'scenerystack/scenery';
```


[WithoutNull](../phet-core/WithoutNull.md)&lt;[GridConfigurableOptions](../scenery/GridConfigurable.md#GridConfigurableOptions), Exclude&lt;keyof [GridConfigurableOptions](../scenery/GridConfigurable.md#GridConfigurableOptions), "minContentWidth" | "minContentHeight" | "maxContentWidth" | "maxContentHeight"&gt;&gt;



## Type GridConfigurableOptions {: #GridConfigurableOptions }


```js
import type { GridConfigurableOptions } from 'scenerystack/scenery';
```


- **xAlign**?: [HorizontalLayoutAlign](../scenery/LayoutAlign.md#HorizontalLayoutAlign) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Alignments control how the content of a cell is positioned within that cell's available area (thus it only applies
  if there is ADDITIONAL space, e.g. in a row/column with a larger item, or there is a preferred size on the GridBox.
  
  For 'origin', the x=0 or y=0 points of each item content will be aligned (vertically or horizontally). This is
  particularly useful for Text, where the origin (y=0) is the baseline of the text, so that differently-sized texts
  can have their baselines aligned, or other content can be aligned (e.g. a circle whose origin is at its center).
  
  NOTE: 'origin' aligns will only apply to cells that are 1 grid line in that orientation (width/height)
- **yAlign**?: [VerticalLayoutAlign](../scenery/LayoutAlign.md#VerticalLayoutAlign) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **stretch**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Stretch will control whether a resizable component (mixes in WidthSizable/HeightSizable) will expand to fill the
  available space within a cell's available area. Similarly to align, this only applies if there is additional space.
- **xStretch**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **yStretch**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **grow**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Grow will control how additional empty space (above the minimum sizes that the grid could take) will be
  proportioned out to the rows and columns. Unlike stretch, this affects the size of the columns, and does not affect
  the individual cells.
- **xGrow**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **yGrow**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- &amp; [MarginLayoutConfigurableOptions](../scenery/MarginLayoutConfigurable.md#MarginLayoutConfigurableOptions)




## Source Code

See the source for [GridConfigurable.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/GridConfigurable.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
