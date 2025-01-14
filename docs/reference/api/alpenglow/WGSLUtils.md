# WGSLUtils

## Overview

Represents a compiled shader and associated data.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type GlobalIndexable {: #GlobalIndexable }


```js
import type { GlobalIndexable } from 'scenerystack/alpenglow';
```


- **globalIndex**?: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
<br>  expression: u32 (the global index of the thread) - overrideable so we can run multiple smaller loads in the same
  workgroup if ever desired




## Type GrainSizable {: #GrainSizable }


```js
import type { GrainSizable } from 'scenerystack/alpenglow';
```


- **grainSize**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  the number of elements each thread should process




## Type LocalIndexable {: #LocalIndexable }


```js
import type { LocalIndexable } from 'scenerystack/alpenglow';
```


- **localIndex**?: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
<br>  expression: u32 (the index of the thread within the workgroup) - overrideable so we can run multiple smaller loads
  in the same workgroup if ever desired




## Type OptionalLengthExpressionable {: #OptionalLengthExpressionable }


```js
import type { OptionalLengthExpressionable } from 'scenerystack/alpenglow';
```


- **lengthExpression**?: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  if provided, it will enable range checks (based on whatever input order of the data was given)




## Type RakedSizable {: #RakedSizable }


```js
import type { RakedSizable } from 'scenerystack/alpenglow';
```


[WorkgroupSizable](../alpenglow/WGSLUtils.md#WorkgroupSizable) &amp; [GrainSizable](../alpenglow/WGSLUtils.md#GrainSizable)



## Type WorkgroupIndexable {: #WorkgroupIndexable }


```js
import type { WorkgroupIndexable } from 'scenerystack/alpenglow';
```


- **workgroupIndex**?: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
<br>  expression: u32 (the index of the workgroup) - overrideable so we can run multiple smaller loads in the same
  workgroup if ever desired




## Type WorkgroupSizable {: #WorkgroupSizable }


```js
import type { WorkgroupSizable } from 'scenerystack/alpenglow';
```


- **workgroupSize**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  the number of threads running this command




## Source Code

See the source for [WGSLUtils.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/WGSLUtils.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
