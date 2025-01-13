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

#### new RendererSummary( node ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### summaryChange( oldBitmask, newBitmask ) {: #summaryChange data-toc-label='summaryChange' }

Use a bitmask of all 1s to represent 'does not exist' since we count zeros
@public

@param {number} oldBitmask
@param {number} newBitmask

#### selfChange() {: #selfChange data-toc-label='selfChange' }

@public

#### computeBitmask() {: #computeBitmask data-toc-label='computeBitmask' }

@private

@returns {number}

#### isSubtreeFullyCompatible( renderer ) {: #isSubtreeFullyCompatible data-toc-label='isSubtreeFullyCompatible' }

@public
Is the renderer compatible with every single painted node under this subtree?
(Can this entire sub-tree be rendered with just this renderer)

@param {number} renderer - Single bit preferred. If multiple bits set, requires ALL painted nodes are compatible
                           with ALL of the bits.

#### isSubtreeContainingCompatible( renderer ) {: #isSubtreeContainingCompatible data-toc-label='isSubtreeContainingCompatible' }

@public
Is the renderer compatible with at least one painted node under this subtree?

@param {number} renderer - Single bit preferred. If multiple bits set, will return if a single painted node is
                           compatible with at least one of the bits.

#### isSingleCanvasSupported() {: #isSingleCanvasSupported data-toc-label='isSingleCanvasSupported' }

@public

@returns {boolean}

#### isSingleSVGSupported() {: #isSingleSVGSupported data-toc-label='isSingleSVGSupported' }

@public

@returns {boolean}

#### isNotPainted() {: #isNotPainted data-toc-label='isNotPainted' }

@public

@returns {boolean}

#### hasNoPDOM() {: #hasNoPDOM data-toc-label='hasNoPDOM' }

@public

@returns {boolean}

#### areBoundsValid() {: #areBoundsValid data-toc-label='areBoundsValid' }

@public

@returns {boolean}

#### isSubtreeRenderedExclusivelySVG( preferredRenderers ) {: #isSubtreeRenderedExclusivelySVG data-toc-label='isSubtreeRenderedExclusivelySVG' }

Given a bitmask representing a list of ordered preferred renderers, we check to see if all of our nodes can be
displayed in a single SVG block, AND that given the preferred renderers, that it will actually happen in our
rendering process.
@public

@param {number} preferredRenderers
@returns {boolean}

#### isSubtreeRenderedExclusivelyCanvas( preferredRenderers ) {: #isSubtreeRenderedExclusivelyCanvas data-toc-label='isSubtreeRenderedExclusivelyCanvas' }

Given a bitmask representing a list of ordered preferred renderers, we check to see if all of our nodes can be
displayed in a single Canvas block, AND that given the preferred renderers, that it will actually happen in our
rendering process.
@public

@param {number} preferredRenderers
@returns {boolean}

#### audit() {: #audit data-toc-label='audit' }

For debugging purposes
@public

#### toString() {: #toString data-toc-label='toString' }

Returns a string form of this object
@public

@returns {string}

### Static Methods

#### summaryBitmaskForNodeSelf( node ) {: #summaryBitmaskForNodeSelf data-toc-label='summaryBitmaskForNodeSelf' }

Determines which of the summary bits can be set for a specific Node (ignoring children/ancestors).
For instance, for bitmaskSingleSVG, we only don't include the flag if THIS node prevents its usage
(even though child nodes may prevent it in the renderer summary itself).
@public

@param {Node} node

#### bitToString( bit ) {: #bitToString data-toc-label='bitToString' }

For debugging purposes
@public

@param {number} bit
@returns {string}

#### bitmaskToString( bitmask ) {: #bitmaskToString data-toc-label='bitmaskToString' }

For debugging purposes
@public

@param {number} bitmask
@returns {string}



## Source Code

See the source for [RendererSummary.js](https://github.com/phetsims/scenery/blob/main/js/util/RendererSummary.js) in the [scenery](https://github.com/phetsims/scenery) repository.
