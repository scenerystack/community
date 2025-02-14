# soundManager

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tambo/blob/main/js/soundManager.ts](https://github.com/phetsims/tambo/blob/main/js/soundManager.ts) for the most up-to-date information.

## Overview

A singleton object that registers sound generators, connects them to the audio output, and provides a number of
related services, such as:
 - main enable/disable
 - main gain control
 - enable/disable of sounds based on visibility of an associated Scenery node
 - enable/disable of sounds based on their assigned sonification level (e.g. "basic" or "extra")
 - gain control for sounds based on their assigned category, e.g. UI versus sim-specific sounds
 - a shared reverb unit to add some spatialization and make all sounds seem to originate with the same space

 The singleton object must be initialized before sound generators can be added.

 @author John Blanco (PhET Interactive Simulations)

## Type SoundGeneratorAddOptions {: #SoundGeneratorAddOptions }


options that can be used when adding a sound generator that can control some aspects of its behavior

```js
import type { SoundGeneratorAddOptions } from 'scenerystack/tambo';
```


- **categoryName**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  category name for this sound




## Source Code

See the source for [soundManager.ts](https://github.com/phetsims/tambo/blob/main/js/soundManager.ts) in the [tambo](https://github.com/phetsims/tambo) repository.
