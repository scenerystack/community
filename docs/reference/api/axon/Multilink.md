# Multilink

## Overview

Multilink is used to link to multiple properties.  It is very similar to a DerivedProperty, but has no value and
does not conform to the Property API because it is intended for use with callbacks that do not compute a value.

For situations where a reference to the Multilink instance is not needed (for calling dispose), use convenience
methods Multilink.multilink or Property.lazyLink to avoid these types of lint errors:

// lint error: Do not use 'new' for side effects (no-new)
new Multilink( ... );

// lint error: 'multilink' is assigned a value but never used (no-unused-vars)
const multilink = new Multilink( ... );

@author Sam Reid (PhET Interactive Simulations)

## Class Multilink {: #Multilink }


```js
import { Multilink } from 'scenerystack/axon';
```
### Constructor

#### new Multilink( dependencies : <span style="font-weight: 400;">[RP1](../axon/Multilink.md#RP1)&lt;T1&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span>, lazy? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #Multilink-constructor data-toc-label='new Multilink' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Static Methods

#### multilink( dependencies : <span style="font-weight: 400;">[RP1](../axon/Multilink.md#RP1)&lt;T1&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

Registers a listener with multiple properties, then notifies the listener immediately.
@param dependencies
@param callback function that takes values from the properties and returns nothing

#### multilink( dependencies : <span style="font-weight: 400;">[RP2](../axon/Multilink.md#RP2)&lt;T1, T2&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">[RP3](../axon/Multilink.md#RP3)&lt;T1, T2, T3&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">[RP4](../axon/Multilink.md#RP4)&lt;T1, T2, T3, T4&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">[RP5](../axon/Multilink.md#RP5)&lt;T1, T2, T3, T4, T5&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">[RP6](../axon/Multilink.md#RP6)&lt;T1, T2, T3, T4, T5, T6&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">[RP7](../axon/Multilink.md#RP7)&lt;T1, T2, T3, T4, T5, T6, T7&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">[RP8](../axon/Multilink.md#RP8)&lt;T1, T2, T3, T4, T5, T6, T7, T8&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">[RP9](../axon/Multilink.md#RP9)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">[RP10](../axon/Multilink.md#RP10)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">[RP11](../axon/Multilink.md#RP11)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">[RP12](../axon/Multilink.md#RP12)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">[RP13](../axon/Multilink.md#RP13)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">[RP14](../axon/Multilink.md#RP14)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">[RP15](../axon/Multilink.md#RP15)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">[DependenciesType](../axon/Multilink.md#DependenciesType)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilinkAny( dependencies : <span style="font-weight: 400;">Readonly&lt;[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;[]&gt;</span>, callback : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[UnknownMultilink](../axon/Multilink.md#UnknownMultilink)</span> {: #multilinkAny data-toc-label='multilinkAny' }

Create a Multilink from a dynamic or unknown number of dependencies.

#### lazyMultilink( dependencies : <span style="font-weight: 400;">[RP1](../axon/Multilink.md#RP1)&lt;T1&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

Registers a listener with multiple properties *without* an immediate callback with current values.
@param dependencies
@param callback function that takes values from the properties and returns nothing

#### lazyMultilink( dependencies : <span style="font-weight: 400;">[RP2](../axon/Multilink.md#RP2)&lt;T1, T2&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">[RP3](../axon/Multilink.md#RP3)&lt;T1, T2, T3&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">[RP4](../axon/Multilink.md#RP4)&lt;T1, T2, T3, T4&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">[RP5](../axon/Multilink.md#RP5)&lt;T1, T2, T3, T4, T5&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">[RP6](../axon/Multilink.md#RP6)&lt;T1, T2, T3, T4, T5, T6&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">[RP7](../axon/Multilink.md#RP7)&lt;T1, T2, T3, T4, T5, T6, T7&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">[RP8](../axon/Multilink.md#RP8)&lt;T1, T2, T3, T4, T5, T6, T7, T8&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">[RP9](../axon/Multilink.md#RP9)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">[RP10](../axon/Multilink.md#RP10)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">[RP11](../axon/Multilink.md#RP11)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">[RP12](../axon/Multilink.md#RP12)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">[RP13](../axon/Multilink.md#RP13)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">[RP14](../axon/Multilink.md#RP14)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">[RP15](../axon/Multilink.md#RP15)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">[DependenciesType](../axon/Multilink.md#DependenciesType)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilinkAny( dependencies : <span style="font-weight: 400;">Readonly&lt;[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;[]&gt;</span>, callback : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[UnknownMultilink](../axon/Multilink.md#UnknownMultilink)</span> {: #lazyMultilinkAny data-toc-label='lazyMultilinkAny' }

Create a lazy Multilink from a dynamic or unknown number of dependencies.

#### unmultilink( multilink : <span style="font-weight: 400;">[UnknownMultilink](../axon/Multilink.md#UnknownMultilink)</span> ) {: #unmultilink data-toc-label='unmultilink' }

Unlinks a listener that was added with multilink or lazyMultilink.



## Type DependenciesType {: #DependenciesType }


```js
import type { DependenciesType } from 'scenerystack/axon';
```


[RP1](../axon/Multilink.md#RP1)&lt;T1&gt; | [RP2](../axon/Multilink.md#RP2)&lt;T1, T2&gt; | [RP3](../axon/Multilink.md#RP3)&lt;T1, T2, T3&gt; | [RP4](../axon/Multilink.md#RP4)&lt;T1, T2, T3, T4&gt; | [RP5](../axon/Multilink.md#RP5)&lt;T1, T2, T3, T4, T5&gt; | [RP6](../axon/Multilink.md#RP6)&lt;T1, T2, T3, T4, T5, T6&gt; | [RP7](../axon/Multilink.md#RP7)&lt;T1, T2, T3, T4, T5, T6, T7&gt; | [RP8](../axon/Multilink.md#RP8)&lt;T1, T2, T3, T4, T5, T6, T7, T8&gt; | [RP9](../axon/Multilink.md#RP9)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9&gt; | [RP10](../axon/Multilink.md#RP10)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10&gt; | [RP11](../axon/Multilink.md#RP11)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11&gt; | [RP12](../axon/Multilink.md#RP12)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12&gt; | [RP13](../axon/Multilink.md#RP13)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13&gt; | [RP14](../axon/Multilink.md#RP14)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14&gt; | [RP15](../axon/Multilink.md#RP15)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;



## Type RP1 {: #RP1 }


Exported for the convenience usage sites in Multilink.multilink

```js
import type { RP1 } from 'scenerystack/axon';
```


Readonly&lt;[ ROP&lt;T1&gt; ]&gt;



## Type RP10 {: #RP10 }


```js
import type { RP10 } from 'scenerystack/axon';
```


Readonly&lt;[ ROP&lt;T1&gt;, ROP&lt;T2&gt;, ROP&lt;T3&gt;, ROP&lt;T4&gt;, ROP&lt;T5&gt;, ROP&lt;T6&gt;, ROP&lt;T7&gt;, ROP&lt;T8&gt;, ROP&lt;T9&gt;, ROP&lt;T10&gt; ]&gt;



## Type RP11 {: #RP11 }


```js
import type { RP11 } from 'scenerystack/axon';
```


Readonly&lt;[ ROP&lt;T1&gt;, ROP&lt;T2&gt;, ROP&lt;T3&gt;, ROP&lt;T4&gt;, ROP&lt;T5&gt;, ROP&lt;T6&gt;, ROP&lt;T7&gt;, ROP&lt;T8&gt;, ROP&lt;T9&gt;, ROP&lt;T10&gt;, ROP&lt;T11&gt; ]&gt;



## Type RP12 {: #RP12 }


```js
import type { RP12 } from 'scenerystack/axon';
```


Readonly&lt;[ ROP&lt;T1&gt;, ROP&lt;T2&gt;, ROP&lt;T3&gt;, ROP&lt;T4&gt;, ROP&lt;T5&gt;, ROP&lt;T6&gt;, ROP&lt;T7&gt;, ROP&lt;T8&gt;, ROP&lt;T9&gt;, ROP&lt;T10&gt;, ROP&lt;T11&gt;, ROP&lt;T12&gt; ]&gt;



## Type RP13 {: #RP13 }


```js
import type { RP13 } from 'scenerystack/axon';
```


Readonly&lt;[ ROP&lt;T1&gt;, ROP&lt;T2&gt;, ROP&lt;T3&gt;, ROP&lt;T4&gt;, ROP&lt;T5&gt;, ROP&lt;T6&gt;, ROP&lt;T7&gt;, ROP&lt;T8&gt;, ROP&lt;T9&gt;, ROP&lt;T10&gt;, ROP&lt;T11&gt;, ROP&lt;T12&gt;, ROP&lt;T13&gt; ]&gt;



## Type RP14 {: #RP14 }


```js
import type { RP14 } from 'scenerystack/axon';
```


Readonly&lt;[ ROP&lt;T1&gt;, ROP&lt;T2&gt;, ROP&lt;T3&gt;, ROP&lt;T4&gt;, ROP&lt;T5&gt;, ROP&lt;T6&gt;, ROP&lt;T7&gt;, ROP&lt;T8&gt;, ROP&lt;T9&gt;, ROP&lt;T10&gt;, ROP&lt;T11&gt;, ROP&lt;T12&gt;, ROP&lt;T13&gt;, ROP&lt;T14&gt; ]&gt;



## Type RP15 {: #RP15 }


```js
import type { RP15 } from 'scenerystack/axon';
```


Readonly&lt;[ ROP&lt;T1&gt;, ROP&lt;T2&gt;, ROP&lt;T3&gt;, ROP&lt;T4&gt;, ROP&lt;T5&gt;, ROP&lt;T6&gt;, ROP&lt;T7&gt;, ROP&lt;T8&gt;, ROP&lt;T9&gt;, ROP&lt;T10&gt;, ROP&lt;T11&gt;, ROP&lt;T12&gt;, ROP&lt;T13&gt;, ROP&lt;T14&gt;, ROP&lt;T15&gt; ]&gt;



## Type RP2 {: #RP2 }


```js
import type { RP2 } from 'scenerystack/axon';
```


Readonly&lt;[ ROP&lt;T1&gt;, ROP&lt;T2&gt; ]&gt;



## Type RP3 {: #RP3 }


```js
import type { RP3 } from 'scenerystack/axon';
```


Readonly&lt;[ ROP&lt;T1&gt;, ROP&lt;T2&gt;, ROP&lt;T3&gt; ]&gt;



## Type RP4 {: #RP4 }


```js
import type { RP4 } from 'scenerystack/axon';
```


Readonly&lt;[ ROP&lt;T1&gt;, ROP&lt;T2&gt;, ROP&lt;T3&gt;, ROP&lt;T4&gt; ]&gt;



## Type RP5 {: #RP5 }


```js
import type { RP5 } from 'scenerystack/axon';
```


Readonly&lt;[ ROP&lt;T1&gt;, ROP&lt;T2&gt;, ROP&lt;T3&gt;, ROP&lt;T4&gt;, ROP&lt;T5&gt; ]&gt;



## Type RP6 {: #RP6 }


```js
import type { RP6 } from 'scenerystack/axon';
```


Readonly&lt;[ ROP&lt;T1&gt;, ROP&lt;T2&gt;, ROP&lt;T3&gt;, ROP&lt;T4&gt;, ROP&lt;T5&gt;, ROP&lt;T6&gt; ]&gt;



## Type RP7 {: #RP7 }


```js
import type { RP7 } from 'scenerystack/axon';
```


Readonly&lt;[ ROP&lt;T1&gt;, ROP&lt;T2&gt;, ROP&lt;T3&gt;, ROP&lt;T4&gt;, ROP&lt;T5&gt;, ROP&lt;T6&gt;, ROP&lt;T7&gt; ]&gt;



## Type RP8 {: #RP8 }


```js
import type { RP8 } from 'scenerystack/axon';
```


Readonly&lt;[ ROP&lt;T1&gt;, ROP&lt;T2&gt;, ROP&lt;T3&gt;, ROP&lt;T4&gt;, ROP&lt;T5&gt;, ROP&lt;T6&gt;, ROP&lt;T7&gt;, ROP&lt;T8&gt; ]&gt;



## Type RP9 {: #RP9 }


```js
import type { RP9 } from 'scenerystack/axon';
```


Readonly&lt;[ ROP&lt;T1&gt;, ROP&lt;T2&gt;, ROP&lt;T3&gt;, ROP&lt;T4&gt;, ROP&lt;T5&gt;, ROP&lt;T6&gt;, ROP&lt;T7&gt;, ROP&lt;T8&gt;, ROP&lt;T9&gt; ]&gt;



## Type UnknownMultilink {: #UnknownMultilink }


Marker-like interface for use with Multilink.unmultilink.  This provides type safety to make sure unmultilink is called
with a type-safe argument.

```js
import type { UnknownMultilink } from 'scenerystack/axon';
```


[Multilink](../axon/Multilink.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;



## Source Code

See the source for [Multilink.ts](https://github.com/phetsims/axon/blob/main/js/Multilink.ts) in the [axon](https://github.com/phetsims/axon) repository.
