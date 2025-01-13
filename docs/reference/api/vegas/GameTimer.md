# GameTimer

## Overview

Game timer, keeps track of the elapsed time in the game using "wall clock" time. The frame rate of this clock is
sufficient for displaying a game timer in "seconds", but not for driving smooth animation.

@author Chris Malley (PixelZoom, Inc.)

## Class GameTimer {: #GameTimer }


```js
import { GameTimer } from 'scenerystack/vegas';
```
### Constructor

#### new GameTimer() {: #constructor data-toc-label='constructor' }

### Instance Methods

#### reset() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #reset data-toc-label='reset' }

#### start() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #start data-toc-label='start' }

Starts the timer. This is a no-op if the timer is already running.

#### stop() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #stop data-toc-label='stop' }

Stops the timer. This is a no-op if the timer is already stopped.

#### restart() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #restart data-toc-label='restart' }

Convenience function for restarting the timer.

### Instance Properties

#### isRunningProperty : <span style="font-weight: 400; opacity: 80%;">Property&lt;boolean&gt;</span> {: #isRunningProperty data-toc-label='isRunningProperty' }

(readonly)

whether the timer is running

#### elapsedTimeProperty : <span style="font-weight: 400; opacity: 80%;">Property&lt;number&gt;</span> {: #elapsedTimeProperty data-toc-label='elapsedTimeProperty' }

(readonly)

seconds since the timer was started

### Static Methods

#### formatTime( time : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #formatTime data-toc-label='formatTime' }

Formats a value representing seconds into H:MM:SS (localized).



## Source Code

See the source for [GameTimer.ts](https://github.com/phetsims/vegas/blob/main/js/GameTimer.ts) in the [vegas](https://github.com/phetsims/vegas) repository.
