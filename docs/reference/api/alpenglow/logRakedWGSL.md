# logRakedWGSL

## Overview

Specialized logging TODO doc, TODO factor out common parts

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type logRakedWGSLOptions {: #logRakedWGSLOptions }


```js
import type { logRakedWGSLOptions } from 'scenerystack/alpenglow';
```


- **lengthExpression**?: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **relativeLengthExpression**?: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **skipBarriers**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **accessExpression**?: ( ( index: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpression](../alpenglow/WGSLString.md#WGSLExpression) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **relativeAccessExpression**?: ( ( index: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpression](../alpenglow/WGSLString.md#WGSLExpression) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- &amp; [RakedSizable](../alpenglow/WGSLUtils.md#RakedSizable) &amp; StrictOmit&lt;[logWGSLOptions](../alpenglow/logWGSL.md#logWGSLOptions)&lt;T&gt;, "dataCount" | "writeData"&gt; &amp; PickRequired&lt;[logWGSLOptions](../alpenglow/logWGSL.md#logWGSLOptions)&lt;T&gt;, "type"&gt;




## Source Code

See the source for [logRakedWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/logRakedWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.