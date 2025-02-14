# WidthSizable

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/layout/WidthSizable.ts](https://github.com/phetsims/scenery/blob/main/js/layout/WidthSizable.ts) for the most up-to-date information.

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
<br>  @mixin-protected - made public for use in the mixin only
- **_minimumSizeChanging**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **_preferredSizeChangeAttemptDuringLock**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **_minimumSizeChangeAttemptDuringLock**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **_updatePreferredWidthListener**: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **_updateLocalPreferredWidthListener**: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **_updateMinimumWidthListener**: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **_updateLocalMinimumWidthListener**: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>




## Type WidthSizableOptions {: #WidthSizableOptions }


```js
import type { WidthSizableOptions } from 'scenerystack/scenery';
```


- **preferredWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Sets the preferred width of the Node in the parent coordinate frame. Nodes that implement this will attempt to keep
  their `node.width` at this value. If null, the node will likely set its configuration to the minimum width.
  NOTE: changing this or localPreferredWidth will adjust the other.
  NOTE: preferredWidth is not guaranteed currently. The component may end up having a smaller or larger size
- **minimumWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Sets the minimum width of the Node in the parent coordinate frame. Usually not directly set by a client.
  Usually a resizable Node will set its localMinimumWidth (and that will get transferred to this value in the
  parent coordinate frame).
  NOTE: changing this or localMinimumWidth will adjust the other.
  NOTE: when the Node's transform is updated, this value is recomputed based on localMinimumWidth
- **localPreferredWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Sets the preferred width of the Node in the local coordinate frame.
  NOTE: changing this or preferredWidth will adjust the other.
  NOTE: when the Node's transform is updated, this value is recomputed based on preferredWidth
  NOTE: localPreferredWidth is not guaranteed currently. The component may end up having a smaller or larger size
- **localMinimumWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Sets the minimum width of the Node in the local coordinate frame. Usually set by the resizable Node itself to
  indicate what preferred sizes are possible.
  NOTE: changing this or minimumWidth will adjust the other.
- **widthSizable**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Whether this component will have its preferred size set by things like layout containers. If this is set to false,
  it's recommended to set some sort of preferred size (so that it won't go to 0)




## Source Code

See the source for [WidthSizable.ts](https://github.com/phetsims/scenery/blob/main/js/layout/WidthSizable.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
