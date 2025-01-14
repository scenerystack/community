# HeightSizable

## Overview

HeightSizable is a trait that provides a minimum and preferred height. The minimum height is set by the component,
so that layout containers could know how "small" the component can be made. The preferred height is set by the
layout container, and the component should adjust its size so that it takes up that height.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type HeightSizableNode {: #HeightSizableNode }


Some typescript gymnastics to provide a user-defined type guard that treats something as HeightSizable.
We need to define an unused function with a concrete type, so that we can extract the return type of the function
and provide a type for a Node that extends this type.

```js
import type { HeightSizableNode } from 'scenerystack/scenery';
```


[Node](../scenery/Node.md) &amp; [THeightSizable](../scenery/HeightSizable.md#THeightSizable)



## Type HeightSizableOptions {: #HeightSizableOptions }


```js
import type { HeightSizableOptions } from 'scenerystack/scenery';
```


- **preferredHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **minimumHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **localPreferredHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **localMinimumHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **heightSizable**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Type THeightSizable {: #THeightSizable }


```js
import type { THeightSizable } from 'scenerystack/scenery';
```


- **preferredHeightProperty**: [TinyProperty](../axon/TinyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;
- **minimumHeightProperty**: [TinyProperty](../axon/TinyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;
- **localPreferredHeightProperty**: [TinyProperty](../axon/TinyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;
- **localMinimumHeightProperty**: [TinyProperty](../axon/TinyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;
- **isHeightResizableProperty**: [TinyProperty](../axon/TinyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;
- **preferredHeight**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **localPreferredHeight**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **minimumHeight**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **localMinimumHeight**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **heightSizable**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **_preferredSizeChanging**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **_minimumSizeChanging**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **_preferredSizeChangeAttemptDuringLock**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **_minimumSizeChangeAttemptDuringLock**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **_updatePreferredHeightListener**: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **_updateLocalPreferredHeightListener**: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **_updateMinimumHeightListener**: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **_updateLocalMinimumHeightListener**: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>




## Source Code

See the source for [HeightSizable.ts](https://github.com/phetsims/scenery/blob/main/js/layout/HeightSizable.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
