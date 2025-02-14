# PropertyMultiClip

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tambo/blob/main/js/sound-generators/PropertyMultiClip.ts](https://github.com/phetsims/tambo/blob/main/js/sound-generators/PropertyMultiClip.ts) for the most up-to-date information.

## Overview

A sound generator that plays sounds each time a property changes to a new value.

@author John Blanco (PhET Interactive Simulations)

## Class PropertyMultiClip {: #PropertyMultiClip }


```js
import { PropertyMultiClip } from 'scenerystack/tambo';
```
### Constructor

#### new PropertyMultiClip( property : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;T&gt;</span>, valueToSoundMap : <span style="font-weight: 400;">Map&lt;T, [WrappedAudioBuffer](../tambo/WrappedAudioBuffer.md)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[PropertyMultiClipOptions](../tambo/PropertyMultiClip.md#PropertyMultiClipOptions)</span> ) {: #PropertyMultiClip-constructor data-toc-label='new PropertyMultiClip' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

dispose function



## Type PropertyMultiClipOptions {: #PropertyMultiClipOptions }


```js
import type { PropertyMultiClipOptions } from 'scenerystack/tambo';
```


- **linkLazily**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Controls whether the linkage to the property is "lazy", meaning that the first sound isn't played until a
  change of value occurs.  If set to false, this will attempt to play a sound when the link is initially set up.
- &amp; [MultiClipOptions](../tambo/MultiClip.md#MultiClipOptions)




## Source Code

See the source for [PropertyMultiClip.ts](https://github.com/phetsims/tambo/blob/main/js/sound-generators/PropertyMultiClip.ts) in the [tambo](https://github.com/phetsims/tambo) repository.
