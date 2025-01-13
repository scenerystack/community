# FocusDisplayedController

## Overview

Responsible for setting the provided focusProperty to null when the Focused node either
becomes invisible on the Display or is removed from the scene graph. It uses a
TrailVisibilityTracker to determine if any Node in the Trail has become invisible.

Meant to be scenery-internal and used by FocusManager.

@author Jesse Greenberg

## Class FocusDisplayedController {: #FocusDisplayedController }


```js
import { FocusDisplayedController } from 'scenerystack/scenery';
```
### Constructor

#### new FocusDisplayedController( focusProperty : <span style="font-weight: 400; opacity: 80%;">TProperty&lt;Focus | null&gt;</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }



## Source Code

See the source for [FocusDisplayedController.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/FocusDisplayedController.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
