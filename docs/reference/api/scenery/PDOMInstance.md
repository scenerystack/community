# PDOMInstance

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

#### new PDOMInstance( parent : <span style="font-weight: 400; opacity: 80%;">PDOMInstance | null</span>, display : <span style="font-weight: 400; opacity: 80%;">Display</span>, trail : <span style="font-weight: 400; opacity: 80%;">Trail</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### initializePDOMInstance( parent : <span style="font-weight: 400; opacity: 80%;">PDOMInstance | null</span>, display : <span style="font-weight: 400; opacity: 80%;">Display</span>, trail : <span style="font-weight: 400; opacity: 80%;">Trail</span> ) : <span style="font-weight: 400; opacity: 80%;">PDOMInstance</span> {: #initializePDOMInstance data-toc-label='initializePDOMInstance' }

Initializes a PDOMInstance, implements construction for pooling.

@param parent - null if this PDOMInstance is root of PDOMInstance tree
@param display
@param trail - trail to node for this PDOMInstance
@returns - Returns 'this' reference, for chaining

#### addConsecutiveInstances( pdomInstances : <span style="font-weight: 400; opacity: 80%;">PDOMInstance[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #addConsecutiveInstances data-toc-label='addConsecutiveInstances' }

Adds a series of (sorted) accessible instances as children.

#### removeInstancesForTrail( trail : <span style="font-weight: 400; opacity: 80%;">Trail</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #removeInstancesForTrail data-toc-label='removeInstancesForTrail' }

Removes any child instances that are based on the provided trail.

#### removeAllChildren() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #removeAllChildren data-toc-label='removeAllChildren' }

Removes all of the children.

#### findChildWithTrail( trail : <span style="font-weight: 400; opacity: 80%;">Trail</span> ) : <span style="font-weight: 400; opacity: 80%;">PDOMInstance | null</span> {: #findChildWithTrail data-toc-label='findChildWithTrail' }

Returns a PDOMInstance child (if one exists with the given Trail), or null otherwise.

#### isGloballyVisible() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isGloballyVisible data-toc-label='isGloballyVisible' }

Returns whether the parallel DOM for this instance and its ancestors are not hidden.

#### updateTransformTracker( pdomTransformSourceNode : <span style="font-weight: 400; opacity: 80%;">Node | null</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #updateTransformTracker data-toc-label='updateTransformTracker' }

Create a new TransformTracker that will observe transforms along the trail of this PDOMInstance OR
the provided pdomTransformSourceNode. See ParallelDOM.setPDOMTransformSourceNode(). The The source Node
must not use DAG so that its trail is unique.

#### getPDOMInstanceUniqueId() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getPDOMInstanceUniqueId data-toc-label='getPDOMInstanceUniqueId' }

Depending on what the unique ID strategy is, formulate the correct id for this PDOM instance.

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toString data-toc-label='toString' }

For debugging purposes.

#### freeToPool() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### parent : <span style="font-weight: 400; opacity: 80%;">PDOMInstance | null</span> {: #parent data-toc-label='parent' }

#### trail : <span style="font-weight: 400; opacity: 80%;">Trail | null</span> {: #trail data-toc-label='trail' }

#### isRootInstance : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isRootInstance data-toc-label='isRootInstance' }

#### node : <span style="font-weight: 400; opacity: 80%;">Node | null</span> {: #node data-toc-label='node' }

#### children : <span style="font-weight: 400; opacity: 80%;">PDOMInstance[]</span> {: #children data-toc-label='children' }

#### peer : <span style="font-weight: 400; opacity: 80%;">PDOMPeer | null</span> {: #peer data-toc-label='peer' }

### Static Methods

#### uniqueIdToTrail( display : <span style="font-weight: 400; opacity: 80%;">Display</span>, uniqueId : <span style="font-weight: 400; opacity: 80%;">string</span> ) : <span style="font-weight: 400; opacity: 80%;">Trail | null</span> {: #uniqueIdToTrail data-toc-label='uniqueIdToTrail' }

@param display
@param uniqueId - value returned from PDOMInstance.getPDOMInstanceUniqueId()
@returns null if there is no path to the unique id provided.

#### guessVisualTrail( trail : <span style="font-weight: 400; opacity: 80%;">Trail</span>, rootNode : <span style="font-weight: 400; opacity: 80%;">Node</span> ) : <span style="font-weight: 400; opacity: 80%;">Trail</span> {: #guessVisualTrail data-toc-label='guessVisualTrail' }

Since a "Trail" on PDOMInstance can have discontinuous jumps (due to pdomOrder), this finds the best
actual visual Trail to use, from the trail of a PDOMInstance to the root of a Display.

@param trail - trail of the PDOMInstance, which can containe "gaps"
@param rootNode - root of a Display

### Static Properties

#### pool : <span style="font-weight: 400; opacity: 80%;">Pool</span> {: #pool data-toc-label='pool' }

(readonly)



## Source Code

See the source for [PDOMInstance.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/PDOMInstance.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
