# GrabDragUsageTracker

## Overview

The model of the grab drag cueing logic. This is a separate model in part so that different interaction instances
can share the same info about whether the cues should be shown.

@author Michael Kauzmann (PhET Interactive Simulations)
@author Jesse Greenberg (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)

## Class GrabDragUsageTracker {: #GrabDragUsageTracker }


```js
import { GrabDragUsageTracker } from 'scenerystack/scenery-phet';
```
### Instance Methods

#### reset() {: #reset data-toc-label='reset' }

### Instance Properties

#### numberOfGrabs {: #numberOfGrabs data-toc-label='numberOfGrabs' }

The number of times the component has been picked up for dragging, regardless
of pickup method for things like determining content for "hints" describing the interaction
to the user

#### numberOfKeyboardGrabs {: #numberOfKeyboardGrabs data-toc-label='numberOfKeyboardGrabs' }

The number of times this component has been picked up with a keyboard specifically to provide hints specific
to alternative input.

#### shouldShowDragCue {: #shouldShowDragCue data-toc-label='shouldShowDragCue' }

Clients can provide application-specific logic for when to show the drag cue. Typically, they will want to hide it
after the user has interacted with it in a certain way.



## Source Code

See the source for [GrabDragUsageTracker.ts](https://github.com/phetsims/scenery-phet/blob/main/js/accessibility/grab-drag/GrabDragUsageTracker.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
