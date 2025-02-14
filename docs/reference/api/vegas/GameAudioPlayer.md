# GameAudioPlayer

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/vegas/blob/main/js/GameAudioPlayer.ts](https://github.com/phetsims/vegas/blob/main/js/GameAudioPlayer.ts) for the most up-to-date information.

## Overview

audio player for the various sounds that are commonly used in PhET games

@author John Blanco

## Class GameAudioPlayer {: #GameAudioPlayer }


```js
import { GameAudioPlayer } from 'scenerystack/vegas';
```
### Constructor

#### new GameAudioPlayer() {: #GameAudioPlayer-constructor data-toc-label='new GameAudioPlayer' }

### Instance Methods

#### correctAnswer() {: #correctAnswer data-toc-label='correctAnswer' }

play the sound that indicates a correct answer

#### wrongAnswer() {: #wrongAnswer data-toc-label='wrongAnswer' }

play the sound that indicates an incorrect answer

#### challengeComplete() {: #challengeComplete data-toc-label='challengeComplete' }

play the sound that indicates a challenge has been completed

#### gameOverZeroScore() {: #gameOverZeroScore data-toc-label='gameOverZeroScore' }

play the sound that indicates that the user completed the game but didn't earn any points

#### gameOverImperfectScore() {: #gameOverImperfectScore data-toc-label='gameOverImperfectScore' }

play the sound that indicates that the user finished the game and got some correct and some incorrect answers

#### gameOverPerfectScore() {: #gameOverPerfectScore data-toc-label='gameOverPerfectScore' }

play the sound that indicates that the user finished the game and got a perfect score



## Source Code

See the source for [GameAudioPlayer.ts](https://github.com/phetsims/vegas/blob/main/js/GameAudioPlayer.ts) in the [vegas](https://github.com/phetsims/vegas) repository.
