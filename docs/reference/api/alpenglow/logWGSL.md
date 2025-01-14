# logWGSL

## Overview

Provides the ability to log things to a buffer in storage, like console.log would.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type logWGSLOptions {: #logWGSLOptions }


```js
import type { logWGSLOptions } from 'scenerystack/alpenglow';
```
- **name**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **additionalIndex**?: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **type**?: [ConcreteType](../alpenglow/ConcreteType.md)&lt;T&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **writeData**?: ( ( write: ( tIndex: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), tValue: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **dataCount**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | [WGSLString](../alpenglow/WGSLString.md) | ( ( varName: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements) )
- **lineToLog**?: ( ( line: [ConsoleLoggedLine](../alpenglow/ConsoleLogger.md#ConsoleLoggedLine) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span> ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **workgroupId**?: [WGSLExpression](../alpenglow/WGSLString.md#WGSLExpression)
- **localId**?: [WGSLExpression](../alpenglow/WGSLString.md#WGSLExpression)




## Source Code

See the source for [logWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/logWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
