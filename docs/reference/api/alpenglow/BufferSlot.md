# BufferSlot

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class BufferSlot {: #BufferSlot }


```js
import { BufferSlot } from 'scenerystack/alpenglow';
```
### Constructor

#### new BufferSlot( concreteType : <span style="font-weight: 400;">[ConcreteType](../alpenglow/ConcreteType.md)&lt;T&gt;</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### hasChildSlot( slot : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasChildSlot data-toc-label='hasChildSlot' }

#### getSubtreeSlots() : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)[]</span> {: #getSubtreeSlots data-toc-label='getSubtreeSlots' }

#### toDebugString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toDebugString data-toc-label='toDebugString' }

#### castTo( concreteType : <span style="font-weight: 400;">[ConcreteType](../alpenglow/ConcreteType.md)&lt;U&gt;</span> ) : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;U&gt;</span> {: #castTo data-toc-label='castTo' }

### Instance Properties

#### bufferSlotSlices : <span style="font-weight: 400;">[BufferSlotSlice](../alpenglow/BufferSlotSlice.md)[]</span> {: #bufferSlotSlices data-toc-label='bufferSlotSlices' }

(readonly)

#### size : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #size data-toc-label='size' }

(readonly)



## Source Code

See the source for [BufferSlot.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/BufferSlot.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
