# RendererSummary

## Overview

Contains information about what renderers (and a few other flags) are supported for an entire subtree.

We effectively do this by tracking bitmask changes from scenery.js (used for rendering properties in general). In particular, we count
how many zeros in the bitmask we have in key places.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RendererSummary {: #RendererSummary }


```js
import { RendererSummary } from 'scenerystack/scenery';
```
### Constructor

#### new RendererSummary( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) {: #RendererSummary-constructor data-toc-label='new RendererSummary' }

### Instance Methods

#### summaryChange( oldBitmask : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, newBitmask : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #summaryChange data-toc-label='summaryChange' }

Use a bitmask of all 1s to represent 'does not exist' since we count zeros

#### selfChange() {: #selfChange data-toc-label='selfChange' }

#### isSubtreeFullyCompatible( renderer : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isSubtreeFullyCompatible data-toc-label='isSubtreeFullyCompatible' }

Is the renderer compatible with every single painted node under this subtree?
(Can this entire sub-tree be rendered with just this renderer)

@param renderer - Single bit preferred. If multiple bits set, requires ALL painted nodes are compatible
                  with ALL of the bits.

#### isSubtreeContainingCompatible( renderer : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isSubtreeContainingCompatible data-toc-label='isSubtreeContainingCompatible' }

Is the renderer compatible with at least one painted node under this subtree?

@param renderer - Single bit preferred. If multiple bits set, will return if a single painted node is
                  compatible with at least one of the bits.

#### isSingleCanvasSupported() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isSingleCanvasSupported data-toc-label='isSingleCanvasSupported' }

#### isSingleSVGSupported() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isSingleSVGSupported data-toc-label='isSingleSVGSupported' }

#### isNotPainted() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isNotPainted data-toc-label='isNotPainted' }

#### hasNoPDOM() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasNoPDOM data-toc-label='hasNoPDOM' }

#### areBoundsValid() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #areBoundsValid data-toc-label='areBoundsValid' }

#### isSubtreeRenderedExclusivelySVG( preferredRenderers : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isSubtreeRenderedExclusivelySVG data-toc-label='isSubtreeRenderedExclusivelySVG' }

Given a bitmask representing a list of ordered preferred renderers, we check to see if all of our nodes can be
displayed in a single SVG block, AND that given the preferred renderers, that it will actually happen in our
rendering process.

#### isSubtreeRenderedExclusivelyCanvas( preferredRenderers : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isSubtreeRenderedExclusivelyCanvas data-toc-label='isSubtreeRenderedExclusivelyCanvas' }

Given a bitmask representing a list of ordered preferred renderers, we check to see if all of our nodes can be
displayed in a single Canvas block, AND that given the preferred renderers, that it will actually happen in our
rendering process.

#### audit() {: #audit data-toc-label='audit' }

For debugging purposes

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

Returns a string form of this object

### Static Methods

#### summaryBitmaskForNodeSelf( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #summaryBitmaskForNodeSelf data-toc-label='summaryBitmaskForNodeSelf' }

Determines which of the summary bits can be set for a specific Node (ignoring children/ancestors).
For instance, for bitmaskSingleSVG, we only don't include the flag if THIS node prevents its usage
(even though child nodes may prevent it in the renderer summary itself).

#### bitToString( bit : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #bitToString data-toc-label='bitToString' }

For debugging purposes

#### bitmaskToString( bitmask : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #bitmaskToString data-toc-label='bitmaskToString' }

For debugging purposes

### Static Properties

#### bitmaskAll {: #bitmaskAll data-toc-label='bitmaskAll' }



## Source Code

See the source for [RendererSummary.ts](https://github.com/phetsims/scenery/blob/main/js/util/RendererSummary.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
