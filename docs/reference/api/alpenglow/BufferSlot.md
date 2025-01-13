# BufferSlot

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class BufferSlot {: #BufferSlot }


```js
import { BufferSlot } from 'scenerystack/alpenglow';
```
### Constructor

#### new BufferSlot( concreteType : <span style="font-weight: 400; opacity: 80%;">ConcreteType&lt;T&gt;</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### hasChildSlot( slot : <span style="font-weight: 400; opacity: 80%;">BufferSlot</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #hasChildSlot data-toc-label='hasChildSlot' }

#### getSubtreeSlots() : <span style="font-weight: 400; opacity: 80%;">BufferSlot[]</span> {: #getSubtreeSlots data-toc-label='getSubtreeSlots' }

#### toDebugString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toDebugString data-toc-label='toDebugString' }

#### castTo( concreteType : <span style="font-weight: 400; opacity: 80%;">ConcreteType&lt;U&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;U&gt;</span> {: #castTo data-toc-label='castTo' }

### Instance Properties

#### bufferSlotSlices : <span style="font-weight: 400; opacity: 80%;">BufferSlotSlice[]</span> {: #bufferSlotSlices data-toc-label='bufferSlotSlices' }

(readonly)

#### size : <span style="font-weight: 400; opacity: 80%;">number</span> {: #size data-toc-label='size' }

(readonly)



## Source Code

See the source for [BufferSlot.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/BufferSlot.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
