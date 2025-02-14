# HeightSizable

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/layout/HeightSizable.ts](https://github.com/phetsims/scenery/blob/main/js/layout/HeightSizable.ts) for the most up-to-date information.

## Overview

HeightSizable is a trait that provides a minimum and preferred height. The minimum height is set by the component,
so that layout containers could know how "small" the component can be made. The preferred height is set by the
layout container, and the component should adjust its size so that it takes up that height.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type HeightSizableOptions {: #HeightSizableOptions }


```js
import type { HeightSizableOptions } from 'scenerystack/scenery';
```


- **preferredHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Sets the preferred height of the Node in the parent coordinate frame. Nodes that implement this will attempt to keep
  their `node.height` at this value. If null, the node will likely set its configuration to the minimum height.
  NOTE: changing this or localPreferredHeight will adjust the other.
  NOTE: preferredHeight is not guaranteed currently. The component may end up having a smaller or larger size
- **minimumHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Sets the minimum height of the Node in the parent coordinate frame. Usually not directly set by a client.
  Usually a resizable Node will set its localMinimumHeight (and that will get transferred to this value in the
  parent coordinate frame).
  NOTE: changing this or localMinimumHeight will adjust the other.
  NOTE: when the Node's transform is updated, this value is recomputed based on localMinimumHeight
- **localPreferredHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Sets the preferred height of the Node in the local coordinate frame.
  NOTE: changing this or preferredHeight will adjust the other.
  NOTE: when the Node's transform is updated, this value is recomputed based on preferredHeight
  NOTE: localPreferredHeight is not guaranteed currently. The component may end up having a smaller or larger size
- **localMinimumHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Sets the minimum height of the Node in the local coordinate frame. Usually set by the resizable Node itself to
  indicate what preferred sizes are possible.
  NOTE: changing this or minimumHeight will adjust the other.
- **heightSizable**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Whether this component will have its preferred size set by things like layout containers. If this is set to false,
  it's recommended to set some sort of preferred size (so that it won't go to 0)




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
<br>  @mixin-protected - made public for use in the mixin only
- **_minimumSizeChanging**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **_preferredSizeChangeAttemptDuringLock**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **_minimumSizeChangeAttemptDuringLock**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **_updatePreferredHeightListener**: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **_updateLocalPreferredHeightListener**: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **_updateMinimumHeightListener**: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **_updateLocalMinimumHeightListener**: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>




## Source Code

See the source for [HeightSizable.ts](https://github.com/phetsims/scenery/blob/main/js/layout/HeightSizable.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
