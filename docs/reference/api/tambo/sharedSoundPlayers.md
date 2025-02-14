# sharedSoundPlayers

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tambo/blob/main/js/sharedSoundPlayers.ts](https://github.com/phetsims/tambo/blob/main/js/sharedSoundPlayers.ts) for the most up-to-date information.

## Overview

This singleton is used to get instances of shared sound players.  The most common use case for shared sound players
is in common UI components that may have multiple instances within a sim, such as checkboxes and buttons. Sharing the
sound players between these instances reduces memory consumption and load time versus creating separate instances.
It also keeps the sound experience consistent.

These shared sound players are automatically added to the soundManager so there is no need for clients to do so.

Because these shared sound players are created on the first `get` for a particular one, instances should be gotten
well before they need to be played, generally during construction of the view or model element that will need it.
Waiting to get an instance until it needs to be played could result in a delayed or muffled first sound being
produced.

@author John Blanco (PhET Interactive Simulations)

## Type SharedSoundPlayerName {: #SharedSoundPlayerName }


A list of all the available shared sound players as a string union type.  Use these values to get a shared player.

```js
import type { SharedSoundPlayerName } from 'scenerystack/tambo';
```


"accordionBoxClosed" | "accordionBoxOpened" | "boundaryReached" | "checkboxChecked" | "checkboxUnchecked" | "generalBoundaryBoop" | "generalClose" | "generalOpen" | "generalSoftClick" | "grab" | "pause" | "play" | "pushButton" | "release" | "resetAll" | "softClick" | "stepBackward" | "stepForward" | "switchToLeft" | "switchToRight" | "toggleOff" | "toggleOn"



## Source Code

See the source for [sharedSoundPlayers.ts](https://github.com/phetsims/tambo/blob/main/js/sharedSoundPlayers.ts) in the [tambo](https://github.com/phetsims/tambo) repository.
