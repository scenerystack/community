# SwipeListener

## Overview

A prototype listener for accessibility purposes. Intended to be added to the display
with the following behavior when the user interacts anywhere on the screen, unless
the pointer is already attached.

- Swipe right, focus next
- Swipe left, focus previous
- Double tap, activate focusable item (sending click event)
- Press and hold, initiate drag of focused item (forwarding press to item)

We hope that the above input strategies will allow BVI users to interact with the sim
without the use of a screen reader, but in combination with the voicing feature set.

PROTOTYPE. DO NOT USE IN PRODUCTION CODE.

@author Jesse Greenberg

## Class SwipeListener {: #SwipeListener }


```js
import { SwipeListener } from 'scenerystack/scenery';
```
### Constructor

#### new SwipeListener( input ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### up( event ) {: #up data-toc-label='up' }

@public
@param event

#### step( dt ) {: #step data-toc-label='step' }

Step the listener, updating timers used to determine swipe speeds and
double tap gestures.
@param dt
@private

#### endSwipe() {: #endSwipe data-toc-label='endSwipe' }

Ends a swipe gesture, removing listeners and clearing references.
@private

#### detachPointerListener() {: #detachPointerListener data-toc-label='detachPointerListener' }

Detach the Pointer listener that is observing movement after a press-and-hold gesture.
This allows you to forward the down event to another listener if you don't want to
re-implement an interaction with swipeMove. This does not remove the listener from the Pointer,
just detaches it so that another listener can be attached.
@public

#### interrupt() {: #interrupt data-toc-label='interrupt' }

Interrupt this listener.
@public



## Source Code

See the source for [SwipeListener.js](https://github.com/phetsims/scenery/blob/main/js/listeners/SwipeListener.js) in the [scenery](https://github.com/phetsims/scenery) repository.
