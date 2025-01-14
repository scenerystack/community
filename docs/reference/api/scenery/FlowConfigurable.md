# FlowConfigurable

## Overview

Mixin for storing options that can affect each cell. `null` for values usually means "inherit from the default".

Handles a lot of conversion from internal Enumeration values (for performance) and external string representations.
This is done primarily for performance and that style of internal enumeration pattern. If string comparisons are
faster, that could be used instead.

NOTE: Internal non-string representations are also orientation-agnostic - thus "left" and "top" map to the same
"start" internally, and thus the external value will appear to "switch" depending on the orientation.

NOTE: This is mixed into both the constraint AND the cell, since we have two layers of options. The `null` meaning
"inherit from the default" is mainly used for the cells, so that if it's not specified in the cell, it will be
specified in the constraint (as non-null).

NOTE: This is a mixin meant to be used internally only by Scenery (for the constraint and cell), and should not be
used by outside code.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type ExternalFlowConfigurableOptions {: #ExternalFlowConfigurableOptions }


We remove the null values for the values that won't actually take null

```js
import type { ExternalFlowConfigurableOptions } from 'scenerystack/scenery';
```


WithoutNull&lt;[FlowConfigurableOptions](../scenery/FlowConfigurable.md#FlowConfigurableOptions), Exclude&lt;keyof [FlowConfigurableOptions](../scenery/FlowConfigurable.md#FlowConfigurableOptions), "minContentWidth" | "minContentHeight" | "maxContentWidth" | "maxContentHeight"&gt;&gt;



## Type FlowConfigurableOptions {: #FlowConfigurableOptions }


```js
import type { FlowConfigurableOptions } from 'scenerystack/scenery';
```


- **orientation**?: [LayoutOrientation](../scenery/LayoutOrientation.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **align**?: [HorizontalLayoutAlign](../scenery/LayoutAlign.md#HorizontalLayoutAlign) | [VerticalLayoutAlign](../scenery/LayoutAlign.md#VerticalLayoutAlign) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **cellAlign**?: [RestrictedVerticalLayoutAlign](../scenery/LayoutAlign.md#RestrictedVerticalLayoutAlign) | [RestrictedHorizontalLayoutAlign](../scenery/LayoutAlign.md#RestrictedHorizontalLayoutAlign) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **stretch**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **grow**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- &amp; [MarginLayoutConfigurableOptions](../scenery/MarginLayoutConfigurable.md#MarginLayoutConfigurableOptions)




## Source Code

See the source for [FlowConfigurable.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/FlowConfigurable.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
