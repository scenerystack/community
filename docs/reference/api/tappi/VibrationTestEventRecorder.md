# VibrationTestEventRecorder

## Overview

A collection of VibrationTestEvents. Has functions that prepare the data to be sent to
a containing Swift app (as is used in the Vibration project) - so that the data
can be saved to the device or sent back to the team for further testing.

@author Jesse Greenberg

## Class VibrationTestEventRecorder {: #VibrationTestEventRecorder }


```js
import { VibrationTestEventRecorder } from 'scenerystack/tappi';
```
### Constructor

#### new VibrationTestEventRecorder( vibrationManager ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### addTestEvent( testEvent ) {: #addTestEvent data-toc-label='addTestEvent' }

Adds a VibrationTestEvent to the collection.
@public

@param {VibrationTestEvent} testEvent

#### dataToString() {: #dataToString data-toc-label='dataToString' }

Convert all saved events to a string that can be sent to the containing Swift app.
@public



## Source Code

See the source for [VibrationTestEventRecorder.js](https://github.com/phetsims/tappi/blob/main/js/tracking/VibrationTestEventRecorder.js) in the [tappi](https://github.com/phetsims/tappi) repository.
