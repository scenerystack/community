# VibrationTestEvent

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tappi/blob/main/js/tracking/VibrationTestEvent.js](https://github.com/phetsims/tappi/blob/main/js/tracking/VibrationTestEvent.js) for the most up-to-date information.

## Overview

A collection of data related to user input, for the purposes of the Vibration project. While
the simulation is running we will collect the data of this class and save in the
VibrationTestEventRecorder collection. When the user is finished playing with the sim, the data
will be saved and sent to the containing Swift app, eventually to be saved as a file and
emailed to the team for research and presentation purposes.

This is NOT to be used in production code.

@author Jesse Greenberg

## Class VibrationTestEvent {: #VibrationTestEvent }


```js
import { VibrationTestEvent } from 'scenerystack/tappi';
```
### Constructor

#### new VibrationTestEvent( x, y, time, name ) {: #VibrationTestEvent-constructor data-toc-label='new VibrationTestEvent' }

### Instance Methods





## Source Code

See the source for [VibrationTestEvent.js](https://github.com/phetsims/tappi/blob/main/js/tracking/VibrationTestEvent.js) in the [tappi](https://github.com/phetsims/tappi) repository.
