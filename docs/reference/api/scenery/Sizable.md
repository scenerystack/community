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
<br>  Sets the preferred size of the Node in the parent coordinate frame. Nodes that implement this will attempt to keep
  their `node.size` at this value. If null, the node will likely set its configuration to the minimum size.
  NOTE: changing this or localPreferredHeight will adjust the other.
  NOTE: preferredSize is not guaranteed currently. The component may end up having a smaller or larger size
- **minimumSize**?: [Dimension2](../dot/Dimension2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Sets the minimum size of the Node in the parent coordinate frame. Usually not directly set by a client.
  Usually a resizable Node will set its localMinimumSize (and that will get transferred to this value in the
  parent coordinate frame).
  NOTE: changing this or localMinimumSize will adjust the other.
  NOTE: when the Node's transform is updated, this value is recomputed based on localMinimumSize
- **localPreferredSize**?: [Dimension2](../dot/Dimension2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Sets the preferred size of the Node in the local coordinate frame.
  NOTE: changing this or preferredSize will adjust the other.
  NOTE: when the Node's transform is updated, this value is recomputed based on preferredSize
- **localMinimumSize**?: [Dimension2](../dot/Dimension2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Sets the minimum size of the Node in the local coordinate frame. Usually set by the resizable Node itself to
  indicate what preferred sizes are possible.
  NOTE: changing this or minimumSize will adjust the other.
- **sizable**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Whether this component will have its preferred size set by things like layout containers. If this is set to false,
  it's recommended to set some sort of preferred size (so that it won't go to 0)
- &amp; [WidthSizableOptions](../scenery/WidthSizable.md#WidthSizableOptions) &amp; [HeightSizableOptions](../scenery/HeightSizable.md#HeightSizableOptions)




## Source Code

See the source for [Sizable.ts](https://github.com/phetsims/scenery/blob/main/js/layout/Sizable.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
