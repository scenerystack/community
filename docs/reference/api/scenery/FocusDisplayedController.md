# FocusDisplayedController

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/accessibility/FocusDisplayedController.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/FocusDisplayedController.ts) for the most up-to-date information.

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

#### new FocusDisplayedController( focusProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;[Focus](../scenery/Focus.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> ) {: #FocusDisplayedController-constructor data-toc-label='new FocusDisplayedController' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Source Code

See the source for [FocusDisplayedController.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/FocusDisplayedController.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
