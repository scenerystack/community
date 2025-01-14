# WidthSizable

## Overview

WidthSizable is a trait that provides a minimum and preferred width. The minimum width is set by the component,
so that layout containers could know how "small" the component can be made. The preferred width is set by the
layout container, and the component should adjust its size so that it takes up that width.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type TWidthSizable {: #TWidthSizable }


```js
import type { TWidthSizable } from 'scenerystack/scenery';
```
- **preferredWidthProperty**: [TinyProperty](../axon/TinyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;
- **minimumWidthProperty**: [TinyProperty](../axon/TinyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;
- **localPreferredWidthProperty**: [TinyProperty](../axon/TinyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;
- **localMinimumWidthProperty**: [TinyProperty](../axon/TinyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;
- **isWidthResizableProperty**: [TinyProperty](../axon/TinyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;
- **preferredWidth**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **localPreferredWidth**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **minimumWidth**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **localMinimumWidth**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **widthSizable**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **_preferredSizeChanging**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **_minimumSizeChanging**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **_preferredSizeChangeAttemptDuringLock**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **_minimumSizeChangeAttemptDuringLock**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **_updatePreferredWidthListener**: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **_updateLocalPreferredWidthListener**: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **_updateMinimumWidthListener**: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **_updateLocalMinimumWidthListener**: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>




## Type WidthSizableNode {: #WidthSizableNode }


Some typescript gymnastics to provide a user-defined type guard that treats something as widthSizable
We need to define an unused function with a concrete type, so that we can extract the return type of the function
and provide a type for a Node that extends this type.

```js
import type { WidthSizableNode } from 'scenerystack/scenery';
```
[Node](../scenery/Node.md) &amp; [TWidthSizable](../scenery/WidthSizable.md#TWidthSizable)



## Type WidthSizableOptions {: #WidthSizableOptions }


```js
import type { WidthSizableOptions } from 'scenerystack/scenery';
```
- **preferredWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **minimumWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **localPreferredWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **localMinimumWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **widthSizable**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Source Code

See the source for [WidthSizable.ts](https://github.com/phetsims/scenery/blob/main/js/layout/WidthSizable.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
