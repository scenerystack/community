# ConcreteType

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/ConcreteType.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/ConcreteType.ts) for the most up-to-date information.

## Overview

Represents a data type that can be serialized/deserialized to/from a binary form, both in TypeScript and in WGSL.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type BinaryOp {: #BinaryOp }


```js
import type { BinaryOp } from 'scenerystack/alpenglow';
```


- **name**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **type**: [ConcreteType](../alpenglow/ConcreteType.md)&lt;T&gt;
- **isCommutative**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **identity**: T
<br>  TS
- **apply**: ( a: T, b: T ) =&gt; T
- **identityWGSL**: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT)
<br>  WGSL
- **combineExpression**?: ( a: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT), b: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT) ) =&gt; [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT)
- **combineStatements**?: ( varName: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName), a: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT), b: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements)
<br>  TODO: Don't have this, if needed just rely on a function placed on the blueprint(!)
  TODO: remove this(!)
- **atomicName**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>




## Type BitOrder {: #BitOrder }


```js
import type { BitOrder } from 'scenerystack/alpenglow';
```


- **name**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **type**: [ConcreteType](../alpenglow/ConcreteType.md)&lt;T&gt;
- **getBits**: ( value: T, bitOffset: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, bitQuantity: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  TS
- **getBitsWGSL**: ( value: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT), bitOffset: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, bitQuantity: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
<br>  WGSL




## Type CompareOrder {: #CompareOrder }


```js
import type { CompareOrder } from 'scenerystack/alpenglow';
```


- **name**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **type**: [ConcreteType](../alpenglow/ConcreteType.md)&lt;T&gt;
- **compare**: ( a: T, b: T ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  TS
- **compareWGSL**: ( a: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT), b: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT) ) =&gt; [WGSLExpressionI32](../alpenglow/WGSLString.md#WGSLExpressionI32)
<br>  WGSL
- **greaterThanWGSL**: ( a: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT), b: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT) ) =&gt; [WGSLExpressionBool](../alpenglow/WGSLString.md#WGSLExpressionBool)
- **lessThanOrEqualWGSL**: ( a: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT), b: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT) ) =&gt; [WGSLExpressionBool](../alpenglow/WGSLString.md#WGSLExpressionBool)




## Type ConcreteArrayType {: #ConcreteArrayType }


```js
import type { ConcreteArrayType } from 'scenerystack/alpenglow';
```


[ConcreteType](../alpenglow/ConcreteType.md)&lt;T[]&gt; &amp; { elementType: [ConcreteType](../alpenglow/ConcreteType.md)&lt;T&gt;; length: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> }



## Type ConcreteType {: #ConcreteType }


```js
import type { ConcreteType } from 'scenerystack/alpenglow';
```


- **name**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **bytesPerElement**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  TODO: deduplicate with wgslSize/wgslAlign. This is the size of the ENTIRE type, drop the "element" bit
- **outOfRangeElement**?: T
- **equals**: ( a: T, b: T ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  TS
- **equalsWGSL**: ( a: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT), b: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT) ) =&gt; [WGSLExpressionBool](../alpenglow/WGSLString.md#WGSLExpressionBool)
<br>  WGSL
- **valueType**: [WGSLType](../alpenglow/WGSLString.md#WGSLType)
<br>  WGSL representation
  TODO: consider rename to valueTypeWGSL?
- **wgslAlign**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  See https://www.w3.org/TR/WGSL/#alignment-and-size
- **wgslSize**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




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
