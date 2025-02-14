# vibrationManager

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tappi/blob/main/js/vibrationManager.ts](https://github.com/phetsims/tappi/blob/main/js/vibrationManager.ts) for the most up-to-date information.

## Overview

A singleton that manages vibration feedback through the web vibration API. navigator.vibrate is required
to use this file. See https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate for more
information and a list of supported platforms. If not defined, this file will do nothing.

Vibration can be started with vibrationManager.startVibrate() to begin continuous vibration. Stop with
vibrationManager.stopVibrate.

Vibration patterns can also be defined similarly to navigator.vibrate(). vibrationManager.startVibrate()
can take an array of intervals that define the uptime/downtime of the vibration motor. See that function
for more information.

Since the manager works with intervals of time, it must be stepped every animation frame with
vibrationManager.step().

@author Jesse Greenberg

## Class Intensity {: #Intensity }


enum for intensity levels

```js
import { Intensity } from 'scenerystack/tappi';
```
### Static Properties

#### HIGH : <span style="font-weight: 400;">[Intensity](../tappi/vibrationManager.md#Intensity)</span> {: #Intensity-HIGH data-toc-label='Intensity-HIGH' }

(readonly)

#### LOW : <span style="font-weight: 400;">[Intensity](../tappi/vibrationManager.md#Intensity)</span> {: #Intensity-LOW data-toc-label='Intensity-LOW' }

(readonly)

#### enumeration : <span style="font-weight: 400;">[Enumeration](../phet-core/Enumeration.md)</span> {: #Intensity-enumeration data-toc-label='Intensity-enumeration' }

(readonly)

Gets a list of keys, values and mapping between them.  For use in EnumerationProperty and PhET-iO



## Source Code

See the source for [vibrationManager.ts](https://github.com/phetsims/tappi/blob/main/js/vibrationManager.ts) in the [tappi](https://github.com/phetsims/tappi) repository.
