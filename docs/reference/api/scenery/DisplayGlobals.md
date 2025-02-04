# DisplayGlobals

## Overview

Isolated globals for Display, to avoid circular dependencies.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class DisplayGlobals {: #DisplayGlobals }


```js
import { DisplayGlobals } from 'scenerystack/scenery';
```
### Static Properties

#### userGestureEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)</span> {: #userGestureEmitter data-toc-label='userGestureEmitter' }

Fires when we detect an input event that would be considered a "user gesture" by Chrome, so
that we can trigger browser actions that are only allowed as a result.
See https://github.com/phetsims/scenery/issues/802 and https://github.com/phetsims/vibe/issues/32 for more
information.

#### inputListeners : <span style="font-weight: 400;">[TInputListener](../scenery/TInputListener.md)[]</span> {: #inputListeners data-toc-label='inputListeners' }

Listeners that will be called for every event on ANY Display, see
https://github.com/phetsims/scenery/issues/1149. Do not directly modify this!



## Source Code

See the source for [DisplayGlobals.ts](https://github.com/phetsims/scenery/blob/main/js/display/DisplayGlobals.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
