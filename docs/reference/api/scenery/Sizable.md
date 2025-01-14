# Sizable

## Overview

Sizable is a trait that provides a minimum and preferred width/height (both WidthSizable and HeightSizable,
but with added features that allow convenience of working with both dimensions at once).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type SizableNode {: #SizableNode }


```js
import type { SizableNode } from 'scenerystack/scenery';
```
- &amp; [Node](../scenery/Node.md) &amp; [TWidthSizable](../scenery/WidthSizable.md#TWidthSizable) &amp; [THeightSizable](../scenery/HeightSizable.md#THeightSizable)




## Type SizableOptions {: #SizableOptions }


```js
import type { SizableOptions } from 'scenerystack/scenery';
```
- **preferredSize**?: [Dimension2](../dot/Dimension2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **minimumSize**?: [Dimension2](../dot/Dimension2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **localPreferredSize**?: [Dimension2](../dot/Dimension2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **localMinimumSize**?: [Dimension2](../dot/Dimension2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **sizable**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [WidthSizableOptions](../scenery/WidthSizable.md#WidthSizableOptions) &amp; [HeightSizableOptions](../scenery/HeightSizable.md#HeightSizableOptions)




## Source Code

See the source for [Sizable.ts](https://github.com/phetsims/scenery/blob/main/js/layout/Sizable.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
