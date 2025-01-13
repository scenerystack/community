# ButtonListener

## Overview

Basic button handling.

Uses 4 states:
up: mouse not over, not pressed
over: mouse over, not pressed
down: mouse over, pressed
out: mouse not over, pressed

TODO: offscreen handling https://github.com/phetsims/scenery/issues/1581
TODO: fix enter/exit edge cases for moving nodes or add/remove child, and when touches are created

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ButtonListener {: #ButtonListener }


@deprecated - please use FireListener for new code (set up for the `fire` callback to be easy, and has Properties
that can be checked for the other states or complicated cases)

```js
import { ButtonListener } from 'scenerystack/scenery';
```
### Constructor

#### new ButtonListener( options ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### setButtonState( event, state ) {: #setButtonState data-toc-label='setButtonState' }

@public

@param {SceneryEvent} event
@param {string} state

#### focus( event ) {: #focus data-toc-label='focus' }

Called from "focus" events (part of the Scenery listener API). On focus the PDOMPointer is over the node
with the attached listener, so add to the over count.
@private

@param {SceneryEvent} event

#### blur( event ) {: #blur data-toc-label='blur' }

Called from "blur" events (part of the Scenery listener API). On blur, the PDOMPointer leaves the node
with this listener so reduce the over count.
@private

@param {SceneryEvent} event

#### click( event ) {: #click data-toc-label='click' }

Called with "click" events (part of the Scenery listener API). Typically will be called from a keyboard
or assistive device.

There are no `keyup` or `keydown` events when an assistive device is active. So we respond generally
to the single `click` event, which indicates a logical activation of this button.
TODO: This may change after https://github.com/phetsims/scenery/issues/1117 is done, at which point
`click` should likely be replaced by `keydown` and `keyup` listeners.
@private

@param {SceneryEvent} event



## Source Code

See the source for [ButtonListener.js](https://github.com/phetsims/scenery/blob/main/js/input/ButtonListener.js) in the [scenery](https://github.com/phetsims/scenery) repository.
