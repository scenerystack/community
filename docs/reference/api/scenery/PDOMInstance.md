# PDOMInstance

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/PDOMInstance.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/PDOMInstance.ts) for the most up-to-date information.

## Overview

An instance that is synchronously created, for handling accessibility needs.

Consider the following example:

We have a node structure:
A
 B ( accessible )
   C (accessible )
     D
       E (accessible)
        G (accessible)
       F
         H (accessible)


Which has an equivalent accessible instance tree:
root
 AB
   ABC
     ABCDE
       ABCDEG
     ABCDFH

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class PDOMInstance {: #PDOMInstance }


```js
import { PDOMInstance } from 'scenerystack/scenery';
```
### Constructor

#### new PDOMInstance( parent : <span style="font-weight: 400;">[PDOMInstance](../scenery/PDOMInstance.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, display : <span style="font-weight: 400;">[Display](../scenery/Display.md)</span>, trail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span>, rootParentHeadingLevel? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #PDOMInstance-constructor data-toc-label='new PDOMInstance' }

### Instance Methods

#### initializePDOMInstance( parent : <span style="font-weight: 400;">[PDOMInstance](../scenery/PDOMInstance.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, display : <span style="font-weight: 400;">[Display](../scenery/Display.md)</span>, trail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span>, rootParentHeadingLevel? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[PDOMInstance](../scenery/PDOMInstance.md)</span> {: #initializePDOMInstance data-toc-label='initializePDOMInstance' }

Initializes a PDOMInstance, implements construction for pooling.

@param parent - null if this PDOMInstance is root of PDOMInstance tree
@param display
@param trail - trail to node for this PDOMInstance
@returns - Returns 'this' reference, for chaining

#### addConsecutiveInstances( pdomInstances : <span style="font-weight: 400;">[PDOMInstance](../scenery/PDOMInstance.md)[]</span> ) {: #addConsecutiveInstances data-toc-label='addConsecutiveInstances' }

Adds a series of (sorted) accessible instances as children.

#### removeInstancesForTrail( trail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> ) {: #removeInstancesForTrail data-toc-label='removeInstancesForTrail' }

Removes any child instances that are based on the provided trail.

#### removeAllChildren() {: #removeAllChildren data-toc-label='removeAllChildren' }

Removes all of the children.

#### findChildWithTrail( trail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> ) : <span style="font-weight: 400;">[PDOMInstance](../scenery/PDOMInstance.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #findChildWithTrail data-toc-label='findChildWithTrail' }

Returns a PDOMInstance child (if one exists with the given Trail), or null otherwise.

#### isGloballyVisible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isGloballyVisible data-toc-label='isGloballyVisible' }

Returns whether the parallel DOM for this instance and its ancestors are not hidden.

#### updateTransformTracker( pdomTransformSourceNode : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #updateTransformTracker data-toc-label='updateTransformTracker' }

Create a new TransformTracker that will observe transforms along the trail of this PDOMInstance OR
the provided pdomTransformSourceNode. See ParallelDOM.setPDOMTransformSourceNode(). The The source Node
must not use DAG so that its trail is unique.

#### getPDOMInstanceUniqueId() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getPDOMInstanceUniqueId data-toc-label='getPDOMInstanceUniqueId' }

Depending on what the unique ID strategy is, formulate the correct id for this PDOM instance.

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

For debugging purposes.

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### parent : <span style="font-weight: 400;">[PDOMInstance](../scenery/PDOMInstance.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #parent data-toc-label='parent' }

#### trail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #trail data-toc-label='trail' }

#### isRootInstance : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isRootInstance data-toc-label='isRootInstance' }

#### node : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #node data-toc-label='node' }

#### children : <span style="font-weight: 400;">[PDOMInstance](../scenery/PDOMInstance.md)[]</span> {: #children data-toc-label='children' }

#### peer : <span style="font-weight: 400;">[PDOMPeer](../scenery/PDOMPeer.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #peer data-toc-label='peer' }

#### parentHeadingLevel : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #parentHeadingLevel data-toc-label='parentHeadingLevel' }

#### pendingHeadingLevel : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #pendingHeadingLevel data-toc-label='pendingHeadingLevel' }

#### headingLevel : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #headingLevel data-toc-label='headingLevel' }

### Static Properties

#### pool : <span style="font-weight: 400;">[Pool](../phet-core/Pool.md)</span> {: #pool data-toc-label='pool' }

(readonly)



## Source Code

See the source for [PDOMInstance.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/PDOMInstance.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
