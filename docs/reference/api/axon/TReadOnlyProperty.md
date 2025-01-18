# TReadOnlyProperty

## Overview

A simple read-only Property/TinyProperty-like interface

@author Sam Reid (PhET Interactive Simulations)
@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type TReadOnlyProperty {: #TReadOnlyProperty }


See comments in Property.ts / TinyProperty.ts

```js
import type { TReadOnlyProperty } from 'scenerystack/axon';
```


- **get**: () =&gt; T
- **valueComparisonStrategy**: [ValueComparisonStrategy](../axon/Validation.md#ValueComparisonStrategy)&lt;T&gt;
- **isDisposed**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Type PropertyLazyLinkListener {: #PropertyLazyLinkListener }


```js
import type { PropertyLazyLinkListener } from 'scenerystack/axon';
```


( value: T, oldValue: T, tinyProperty: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;T&gt; ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>



## Type PropertyLinkListener {: #PropertyLinkListener }


Even though these are the same types used for TProperty, it is vital that the tinyProperty parameter remains
TReadOnlyProperty to avoid contravariance type errors that may not be checked by TypeScript because contravariance
type checking is ignored in "method" types but not in "property" types. See https://github.com/phetsims/axon/issues/428#issuecomment-2033071432

```js
import type { PropertyLinkListener } from 'scenerystack/axon';
```


( value: T, oldValue: T | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>, tinyProperty: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;T&gt; ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>



## Type PropertyListener {: #PropertyListener }


```js
import type { PropertyListener } from 'scenerystack/axon';
```


[PropertyLinkListener](../axon/TReadOnlyProperty.md#PropertyLinkListener)&lt;T&gt; | [PropertyLazyLinkListener](../axon/TReadOnlyProperty.md#PropertyLazyLinkListener)&lt;T&gt;



## Source Code

See the source for [TReadOnlyProperty.ts](https://github.com/phetsims/axon/blob/main/js/TReadOnlyProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.
