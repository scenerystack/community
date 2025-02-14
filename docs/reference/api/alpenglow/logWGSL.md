# logWGSL

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/logWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/logWGSL.ts) for the most up-to-date information.

## Overview

Provides the ability to log things to a buffer in storage, like console.log would.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type logWGSLOptions {: #logWGSLOptions }


```js
import type { logWGSLOptions } from 'scenerystack/alpenglow';
```


- **name**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  - if null, we will mark it as a barrier BETWEEN shaders
- **additionalIndex**?: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  if provided, will be used as an additional index for the log
- **type**?: [ConcreteType](../alpenglow/ConcreteType.md)&lt;T&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **writeData**?: ( ( write: ( tIndex: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), tValue: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **dataCount**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | [WGSLString](../alpenglow/WGSLString.md) | ( ( varName: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements) )
<br>  (of # elements) - write into pre-existing variable
  IF it is a function, it will be treated as a dynamic length, and will be written into the log.
- **lineToLog**?: ( ( line: [ConsoleLoggedLine](../alpenglow/ConsoleLogger.md#ConsoleLoggedLine) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span> ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  into whatever JS-like format we want to log
- **workgroupId**?: [WGSLExpression](../alpenglow/WGSLString.md#WGSLExpression)
- **localId**?: [WGSLExpression](../alpenglow/WGSLString.md#WGSLExpression)




## Source Code

See the source for [logWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/logWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
