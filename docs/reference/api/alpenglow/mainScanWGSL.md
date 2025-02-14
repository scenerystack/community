# mainScanWGSL

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/mainScanWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/mainScanWGSL.ts) for the most up-to-date information.

## Overview

A raked scan implementation capable of non-commutable cases, where:

1. All threads load state into workgroup memory in a coalesced fashion
2. All threads perform an inclusive sequential scan on their data (of grainSize elements)
3. All threads perform an inclusive scan of the "reuced" values for each thread (Hillis-Steele)
4. The remaining values are filled in with the previous scanned value.workgroup
5. The workgroup memory is written to the main output in a coalesced fashion

Based on the described coarsened scan in "Programming Massively Parallel Processors" by Hwu, Kirk and Hajj, chap11.

Additionally, reductions can be stored in a separate array (for use in multi-level scans), AND/OR
scanned reductions can be added into final results (also for use in multi-level scans).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type mainScanWGSLOptions {: #mainScanWGSLOptions }


```js
import type { mainScanWGSLOptions } from 'scenerystack/alpenglow';
```


- **binaryOp**: [BinaryOp](../alpenglow/ConcreteType.md#BinaryOp)&lt;T&gt;
- **inPlace**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **storeReduction**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **addScannedReduction**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **addScannedDoubleReduction**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **areScannedReductionsExclusive**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **input**?: [BufferSlot](../alpenglow/BufferSlot.md)&lt;T[]&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Iff inPlace:false
- **output**?: [BufferSlot](../alpenglow/BufferSlot.md)&lt;T[]&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **data**?: [BufferSlot](../alpenglow/BufferSlot.md)&lt;T[]&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Iff inPlace:true
- **reduction**?: [BufferSlot](../alpenglow/BufferSlot.md)&lt;T[]&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  iff storeReduction:true
- **scannedReduction**?: [BufferSlot](../alpenglow/BufferSlot.md)&lt;T[]&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  iff addScannedReduction:true
- **scannedDoubleReduction**?: [BufferSlot](../alpenglow/BufferSlot.md)&lt;T[]&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  iff addScannedDoubleReduction:true
- **getAddedValue**?: [scanComprehensiveWGSLOptions](../alpenglow/scanComprehensiveWGSL.md#scanComprehensiveWGSLOptions)&lt;T&gt;[ 'getAddedValue' ]
<br>  only if addScannedReduction:false
- &amp; [RakedSizable](../alpenglow/WGSLUtils.md#RakedSizable) &amp; Pick&lt;[scanComprehensiveWGSLOptions](../alpenglow/scanComprehensiveWGSL.md#scanComprehensiveWGSLOptions)&lt;T&gt;, "exclusive" | "lengthExpression" | "inputOrder" | "inputAccessOrder" | "factorOutSubexpressions" | "stripeReducedOutput"&gt;




## Source Code

See the source for [mainScanWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/mainScanWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
