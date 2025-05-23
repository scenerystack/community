# HighlightFromNode

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/accessibility/HighlightFromNode.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/HighlightFromNode.ts) for the most up-to-date information.

## Overview

A HighlightPath subtype that is based around a Node. The focusHighlight is constructed based on the bounds of
the node. The focusHighlight will update as the Node's bounds changes. Handles transformations so that when the
source node is transformed, the HighlightFromNode will
updated be as well.

@author Michael Kauzmann (PhET Interactive Simulations)
@author Jesse Greenberg (PhET Interactive Simulations)

## Class HighlightFromNode {: #HighlightFromNode }


```js
import { HighlightFromNode } from 'scenerystack/scenery';
```
### Constructor

#### new HighlightFromNode( node : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, providedOptions? : <span style="font-weight: 400;">[HighlightFromNodeOptions](../scenery/HighlightFromNode.md#HighlightFromNodeOptions)</span> ) {: #HighlightFromNode-constructor data-toc-label='new HighlightFromNode' }

### Instance Methods

#### setShapeFromNode( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, trail? : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> ) {: #setShapeFromNode data-toc-label='setShapeFromNode' }

Update the focusHighlight shape on the path given the node passed in. Depending on options supplied to this
HighlightFromNode, the shape will surround the node's bounds or its local bounds, dilated by an amount
that is dependent on whether or not this highlight is for group content or for the node itself. See
ParallelDOM.setGroupFocusHighlight() for more information on group highlights.

node - The Node with a highlight to surround.
[trail] - A Trail to use to describe the Node in the global coordinate frame.
          Provided by the HighlightOverlay, to support DAG.

#### dispose() {: #dispose data-toc-label='dispose' }

Remove the listener from the observedBoundsProperty (which belongs to a provided Node).



## Type HighlightFromNodeOptions {: #HighlightFromNodeOptions }


The transformSourceNode for this highlight will be the provided Node.

```js
import type { HighlightFromNodeOptions } from 'scenerystack/scenery';
```


- **useLocalBounds**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  if true, highlight will surround local bounds instead of parent bounds
- **dilationCoefficient**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  default value is function of node transform (minus translation), but can be set explicitly.
  see HighlightPath.getDilationCoefficient(). A number here refers to the amount in global coordinates to
  dilate the focus highlight.
- **useGroupDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  if true, dilation for bounds around node will increase, see setShapeFromNode()
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[HighlightPathOptions](../scenery/HighlightPath.md#HighlightPathOptions), "transformSourceNode"&gt;




## Source Code

See the source for [HighlightFromNode.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/HighlightFromNode.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
