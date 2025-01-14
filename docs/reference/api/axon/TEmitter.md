# TEmitter

## Overview

Event &amp; listener abstraction for a single "event" type. Unified interface for usage across the concrete implementations:
- Emitter: PhET-iO instrumented Emitter
- TinyEmitter: Lightweight version without phet-io for when performance/memory are critical

@author Sam Reid (PhET Interactive Simulations)

## Type TEmitter {: #TEmitter }


```js
import type { TEmitter } from 'scenerystack/axon';
```


TReadOnlyEmitter&lt;T&gt; &amp; { emit: ( ...args: T ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>; dispose: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span> }



## Type TEmitterListener {: #TEmitterListener }


```js
import type { TEmitterListener } from 'scenerystack/axon';
```


( ...args: T ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>



## Type TEmitterParameter {: #TEmitterParameter }


undefined and never are not allowed as parameters to Emitter

```js
import type { TEmitterParameter } from 'scenerystack/axon';
```


Exclude&lt;IntentionalAny, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">undefined</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">never</span>&gt;



## Source Code

See the source for [TEmitter.ts](https://github.com/phetsims/axon/blob/main/js/TEmitter.ts) in the [axon](https://github.com/phetsims/axon) repository.
