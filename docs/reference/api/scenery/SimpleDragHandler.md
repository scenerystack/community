# SimpleDragHandler

## Overview

Basic dragging for a node.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class SimpleDragHandler {: #SimpleDragHandler }


@deprecated - please use DragListener for new code

```js
import { SimpleDragHandler } from 'scenerystack/scenery';
```
### Constructor

#### new SimpleDragHandler( options ) {: #SimpleDragHandler-constructor data-toc-label='new SimpleDragHandler' }

### Instance Methods

#### startDrag( event ) {: #startDrag data-toc-label='startDrag' }

@public

@param {SceneryEvent} event

#### endDrag( event ) {: #endDrag data-toc-label='endDrag' }

@public

@param {SceneryEvent} event

#### interrupt() {: #interrupt data-toc-label='interrupt' }

Called when input is interrupted on this listener, see https://github.com/phetsims/scenery/issues/218
@public

#### tryToSnag( event ) {: #tryToSnag data-toc-label='tryToSnag' }

@public

@param {SceneryEvent} event

#### tryTouchToSnag( event ) {: #tryTouchToSnag data-toc-label='tryTouchToSnag' }

@public

@param {SceneryEvent} event

#### dispose() {: #dispose data-toc-label='dispose' }

Disposes this listener, releasing any references it may have to a pointer.
@public

### Static Methods

#### createForwardingListener( down, options ) {: #createForwardingListener data-toc-label='createForwardingListener' }

Creates an input listener that forwards events to the specified input listener
@public

See https://github.com/phetsims/scenery/issues/639

@param {function(SceneryEvent)} down - down function to be added to the input listener
@param {Object} [options]
@returns {Object} a scenery input listener



## Source Code

See the source for [SimpleDragHandler.js](https://github.com/phetsims/scenery/blob/main/js/input/SimpleDragHandler.js) in the [scenery](https://github.com/phetsims/scenery) repository.
