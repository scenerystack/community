# VibrationTestInputListener

## Overview

@author Jesse Greenberg

## Class VibrationTestInputListener {: #VibrationTestInputListener }


```js
import { VibrationTestInputListener } from 'scenerystack/tappi';
```
### Constructor

#### new VibrationTestInputListener( eventRecorder ) {: #VibrationTestInputListener-constructor data-toc-label='new VibrationTestInputListener' }

### Instance Methods

#### handleRelease( event ) {: #handleRelease data-toc-label='handleRelease' }

@private
@param {SceneryEvent} event

#### interrupt() {: #interrupt data-toc-label='interrupt' }

@public

#### down( event ) {: #down data-toc-label='down' }

@public (scenery-internal) - part of the listener API
@param event

#### click( event ) {: #click data-toc-label='click' }

@public (scenery-internal) - part of the listener API
@param event

#### setElapsedTime( time ) {: #setElapsedTime data-toc-label='setElapsedTime' }

Sets the elapsed time to be saved for events. Rather than stepping/tracking its own elapsed time,
it should be set externally by a simulation because this listener is not the only one to save data
to the event recorder. The simulation updates its elapsed time in one location and sends that
to the places that need it.
@public

@param {number} time - in seconds



## Source Code

See the source for [VibrationTestInputListener.js](https://github.com/phetsims/tappi/blob/main/js/tracking/VibrationTestInputListener.js) in the [tappi](https://github.com/phetsims/tappi) repository.
