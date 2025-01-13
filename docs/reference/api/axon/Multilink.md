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

#### new Multilink( dependencies : <span style="font-weight: 400;">RP1&lt;T1&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span>, lazy? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Static Methods

#### multilink( dependencies : <span style="font-weight: 400;">RP1&lt;T1&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

Registers a listener with multiple properties, then notifies the listener immediately.
@param dependencies
@param callback function that takes values from the properties and returns nothing

#### multilink( dependencies : <span style="font-weight: 400;">RP2&lt;T1, T2&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">RP3&lt;T1, T2, T3&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">RP4&lt;T1, T2, T3, T4&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">RP5&lt;T1, T2, T3, T4, T5&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">RP6&lt;T1, T2, T3, T4, T5, T6&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">RP7&lt;T1, T2, T3, T4, T5, T6, T7&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">RP8&lt;T1, T2, T3, T4, T5, T6, T7, T8&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">RP9&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">RP10&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">RP11&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">RP12&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">RP13&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">RP14&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">RP15&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilink( dependencies : <span style="font-weight: 400;">Dependencies&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #multilink data-toc-label='multilink' }

#### multilinkAny( dependencies : <span style="font-weight: 400;">Readonly&lt;[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;[]&gt;</span>, callback : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[UnknownMultilink](../axon/Multilink.md#UnknownMultilink)</span> {: #multilinkAny data-toc-label='multilinkAny' }

Create a Multilink from a dynamic or unknown number of dependencies.

#### lazyMultilink( dependencies : <span style="font-weight: 400;">RP1&lt;T1&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

Registers a listener with multiple properties *without* an immediate callback with current values.
@param dependencies
@param callback function that takes values from the properties and returns nothing

#### lazyMultilink( dependencies : <span style="font-weight: 400;">RP2&lt;T1, T2&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">RP3&lt;T1, T2, T3&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">RP4&lt;T1, T2, T3, T4&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">RP5&lt;T1, T2, T3, T4, T5&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">RP6&lt;T1, T2, T3, T4, T5, T6&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">RP7&lt;T1, T2, T3, T4, T5, T6, T7&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">RP8&lt;T1, T2, T3, T4, T5, T6, T7, T8&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">RP9&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">RP10&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">RP11&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">RP12&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">RP13&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">RP14&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">RP15&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilink( dependencies : <span style="font-weight: 400;">Dependencies&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span>, callback : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15 ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[Multilink](../axon/Multilink.md)&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span> {: #lazyMultilink data-toc-label='lazyMultilink' }

#### lazyMultilinkAny( dependencies : <span style="font-weight: 400;">Readonly&lt;[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;[]&gt;</span>, callback : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;">[UnknownMultilink](../axon/Multilink.md#UnknownMultilink)</span> {: #lazyMultilinkAny data-toc-label='lazyMultilinkAny' }

Create a lazy Multilink from a dynamic or unknown number of dependencies.

#### unmultilink( multilink : <span style="font-weight: 400;">[UnknownMultilink](../axon/Multilink.md#UnknownMultilink)</span> ) {: #unmultilink data-toc-label='unmultilink' }

Unlinks a listener that was added with multilink or lazyMultilink.



## Source Code

See the source for [Multilink.ts](https://github.com/phetsims/axon/blob/main/js/Multilink.ts) in the [axon](https://github.com/phetsims/axon) repository.
