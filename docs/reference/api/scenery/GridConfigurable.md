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


WithoutNull&lt;[GridConfigurableOptions](../scenery/GridConfigurable.md#GridConfigurableOptions), Exclude&lt;keyof [GridConfigurableOptions](../scenery/GridConfigurable.md#GridConfigurableOptions), "minContentWidth" | "minContentHeight" | "maxContentWidth" | "maxContentHeight"&gt;&gt;



## Type GridConfigurableOptions {: #GridConfigurableOptions }


```js
import type { GridConfigurableOptions } from 'scenerystack/scenery';
```


- **xAlign**?: [HorizontalLayoutAlign](../scenery/LayoutAlign.md#HorizontalLayoutAlign) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **yAlign**?: [VerticalLayoutAlign](../scenery/LayoutAlign.md#VerticalLayoutAlign) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **stretch**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **xStretch**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **yStretch**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **grow**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **xGrow**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **yGrow**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- &amp; [MarginLayoutConfigurableOptions](../scenery/MarginLayoutConfigurable.md#MarginLayoutConfigurableOptions)




## Source Code

See the source for [GridConfigurable.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/GridConfigurable.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
