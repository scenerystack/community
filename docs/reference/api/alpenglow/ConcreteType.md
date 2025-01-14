# ConcreteType

## Overview

Represents a data type that can be serialized/deserialized to/from a binary form, both in TypeScript and in WGSL.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type ConcreteType {: #ConcreteType }


```js
import type { ConcreteType } from 'scenerystack/alpenglow';
```
- **name**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **bytesPerElement**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **outOfRangeElement**?: T
- **equals**: ( a: T, b: T ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **equalsWGSL**: ( a: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT), b: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT) ) =&gt; [WGSLExpressionBool](../alpenglow/WGSLString.md#WGSLExpressionBool)
- **valueType**: [WGSLType](../alpenglow/WGSLString.md#WGSLType)
- **wgslAlign**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **wgslSize**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Type BinaryOp {: #BinaryOp }


```js
import type { BinaryOp } from 'scenerystack/alpenglow';
```
- **name**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **type**: [ConcreteType](../alpenglow/ConcreteType.md)&lt;T&gt;
- **isCommutative**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **identity**: T
- **apply**: ( a: T, b: T ) =&gt; T
- **identityWGSL**: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT)
- **combineExpression**?: ( a: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT), b: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT) ) =&gt; [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT)
- **combineStatements**?: ( varName: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName), a: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT), b: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements)
- **atomicName**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>




## Type BitOrder {: #BitOrder }


```js
import type { BitOrder } from 'scenerystack/alpenglow';
```
- **name**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **type**: [ConcreteType](../alpenglow/ConcreteType.md)&lt;T&gt;
- **getBits**: ( value: T, bitOffset: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, bitQuantity: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **getBitsWGSL**: ( value: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT), bitOffset: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, bitQuantity: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)




## Type CompareOrder {: #CompareOrder }


```js
import type { CompareOrder } from 'scenerystack/alpenglow';
```
- **name**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **type**: [ConcreteType](../alpenglow/ConcreteType.md)&lt;T&gt;
- **compare**: ( a: T, b: T ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **compareWGSL**: ( a: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT), b: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT) ) =&gt; [WGSLExpressionI32](../alpenglow/WGSLString.md#WGSLExpressionI32)
- **greaterThanWGSL**: ( a: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT), b: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT) ) =&gt; [WGSLExpressionBool](../alpenglow/WGSLString.md#WGSLExpressionBool)
- **lessThanOrEqualWGSL**: ( a: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT), b: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT) ) =&gt; [WGSLExpressionBool](../alpenglow/WGSLString.md#WGSLExpressionBool)




## Type ConcreteArrayType {: #ConcreteArrayType }


```js
import type { ConcreteArrayType } from 'scenerystack/alpenglow';
```




## Type Order {: #Order }


```js
import type { Order } from 'scenerystack/alpenglow';
```
[BitOrder](../alpenglow/ConcreteType.md#BitOrder)&lt;T&gt; &amp; [CompareOrder](../alpenglow/ConcreteType.md#CompareOrder)&lt;T&gt;



## Type StoreStatementCallback {: #StoreStatementCallback }


```js
import type { StoreStatementCallback } from 'scenerystack/alpenglow';
```
( offset: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), u32expr: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements)



## Type WGSLBinaryStatements {: #WGSLBinaryStatements }


```js
import type { WGSLBinaryStatements } from 'scenerystack/alpenglow';
```
( value: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName), a: [WGSLExpression](../alpenglow/WGSLString.md#WGSLExpression), b: [WGSLExpression](../alpenglow/WGSLString.md#WGSLExpression) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements)



## Source Code

See the source for [ConcreteType.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/ConcreteType.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
