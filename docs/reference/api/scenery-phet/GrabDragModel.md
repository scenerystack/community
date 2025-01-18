# GrabDragModel

## Overview

The model of the grab drag interaction. This has the current interaction state, and the cueing state.
Scenery-phet internal, GrabDragInteraction should be the only one to create this.

@author Michael Kauzmann (PhET Interactive Simulations)
@author Jesse Greenberg (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)

## Class GrabDragModel {: #GrabDragModel }


```js
import { GrabDragModel } from 'scenerystack/scenery-phet';
```
### Constructor

#### new GrabDragModel( grabDragUsageTracker : <span style="font-weight: 400;">[GrabDragUsageTracker](../scenery-phet/GrabDragUsageTracker.md)</span>, providedOptions? : <span style="font-weight: 400;">[GrabDragModelOptions](../scenery-phet/GrabDragModel.md#GrabDragModelOptions)</span> ) {: #GrabDragModel-constructor data-toc-label='new GrabDragModel' }

### Instance Methods

#### keyboardGrab( onBeforeEmit : <span style="font-weight: 400;">VoidFunction</span> ) {: #keyboardGrab data-toc-label='keyboardGrab' }

Grab with keyboard usage tracking

#### grab( onBeforeEmit : <span style="font-weight: 400;">VoidFunction</span> ) {: #grab data-toc-label='grab' }

Turn from idle into grabbed interaction state.
This updates accessibility representation in the PDOM and changes input listeners. This function can be called
while already grabbed, because of nuance in how we support multi-input and gestureDescription.

#### release() {: #release data-toc-label='release' }

Release from being grabbed. This function will set the interaction back to the "idle" state and should only be called
when in "grabbed" state. It also behaves as though it was released from user input, for example sound effect
and description will occur may occur.

#### dispose() {: #dispose data-toc-label='dispose' }

#### reset() {: #reset data-toc-label='reset' }

### Instance Properties

#### interactionStateProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)</span> {: #interactionStateProperty data-toc-label='interactionStateProperty' }

(readonly)

#### resetEmitter : <span style="font-weight: 400;">[Emitter](../axon/Emitter.md)</span> {: #resetEmitter data-toc-label='resetEmitter' }

(readonly)

called on reset()



## Type GrabDragInteractionState {: #GrabDragInteractionState }


Interaction states that this component interaction can be in:
"idle": In the default state where you can interact with the node to grab it. It is ready to be
        "picked up" ("grabbed") from this state. This state mostly behaves like a button.
"grabbed": In the state where you can use keyboard to move the object with arrow keys. You are also able to "release"
           back into idle

```js
import type { GrabDragInteractionState } from 'scenerystack/scenery-phet';
```


"idle" | "grabbed"



## Type GrabDragModelOptions {: #GrabDragModelOptions }


```js
import type { GrabDragModelOptions } from 'scenerystack/scenery-phet';
```


[EnabledComponentOptions](../axon/EnabledComponent.md#EnabledComponentOptions)



## Source Code

See the source for [GrabDragModel.ts](https://github.com/phetsims/scenery-phet/blob/main/js/accessibility/grab-drag/GrabDragModel.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
