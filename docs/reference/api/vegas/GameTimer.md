# GameTimer

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/vegas/blob/main/js/GameTimer.ts](https://github.com/phetsims/vegas/blob/main/js/GameTimer.ts) for the most up-to-date information.

## Overview

Game timer, keeps track of the elapsed time in the game using "wall clock" time. The frame rate of this clock is
sufficient for displaying a game timer in "seconds", but not for driving smooth animation.

@author Chris Malley (PixelZoom, Inc.)

## Class GameTimer {: #GameTimer }


```js
import { GameTimer } from 'scenerystack/vegas';
```
### Constructor

#### new GameTimer() {: #GameTimer-constructor data-toc-label='new GameTimer' }

### Instance Methods

#### reset() {: #reset data-toc-label='reset' }

#### start() {: #start data-toc-label='start' }

Starts the timer. This is a no-op if the timer is already running.

#### stop() {: #stop data-toc-label='stop' }

Stops the timer. This is a no-op if the timer is already stopped.

#### restart() {: #restart data-toc-label='restart' }

Convenience function for restarting the timer.

### Instance Properties

#### isRunningProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #isRunningProperty data-toc-label='isRunningProperty' }

(readonly)

whether the timer is running

#### elapsedTimeProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> {: #elapsedTimeProperty data-toc-label='elapsedTimeProperty' }

(readonly)

seconds since the timer was started

### Static Methods

#### formatTime( time : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #formatTime data-toc-label='formatTime' }

Formats a value representing seconds into H:MM:SS (localized).



## Source Code

See the source for [GameTimer.ts](https://github.com/phetsims/vegas/blob/main/js/GameTimer.ts) in the [vegas](https://github.com/phetsims/vegas) repository.
