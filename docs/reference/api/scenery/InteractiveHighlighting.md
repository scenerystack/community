# InteractiveHighlighting

## Overview

A trait for Node that mixes functionality to support visual highlights that appear on hover with a pointer.

@author Jesse Greenberg (PhET Interactive Simulations)

## Type InteractiveHighlightingNodeType {: #InteractiveHighlightingNodeType }


NOTE!!! This used to be called "InteractiveHighlightingNode", which conflicts with (or is confusing) with the actual
InteractiveHighlightingNode.ts type. Renamed here so they can be in the same namespace.

```js
import type { InteractiveHighlightingNodeType } from 'scenerystack/scenery';
```


[Node](../scenery/Node.md) &amp; [TInteractiveHighlighting](../scenery/InteractiveHighlighting.md#TInteractiveHighlighting)



## Type InteractiveHighlightingOptions {: #InteractiveHighlightingOptions }


```js
import type { InteractiveHighlightingOptions } from 'scenerystack/scenery';
```


- **interactiveHighlight**?: [Highlight](../scenery/HighlightOverlay.md#Highlight)
- **interactiveHighlightLayerable**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **interactiveHighlightEnabled**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Source Code

See the source for [InteractiveHighlighting.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/voicing/InteractiveHighlighting.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
