# LayoutConstraint

## Overview

Abstract supertype for layout constraints. Provides a lot of assistance to layout handling, including adding/removing
listeners, and reentrancy detection/loop prevention.

We'll also handle reentrancy somewhat specially. If code tries to enter a layout reentrantly (while a layout is
already executing), we'll instead IGNORE this second one (and set a flag). Once our first layout is done, we'll
attempt to run the layout again. In case the subtype needs to lock multiple times (if a layout is FORCED), we have
an integer count of how many "layout" calls we're in (_layoutLockCount). Once this reaches zero, we're effectively
unlocked and not inside any layout calls.

NOTE: This can still trigger infinite loops nominally (if every layout call triggers another layout call), but we
have a practical assertion limit that will stop this and flag it as an error.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class LayoutConstraint {: #LayoutConstraint }


```js
import { LayoutConstraint } from 'scenerystack/scenery';
```
### Instance Methods

#### layout() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #layout data-toc-label='layout' }

(protected)

NOTE: DO NOT call from places other than super.layout() in overridden layout() OR from the existing call in
      updateLayout(). Doing so would break the lock mechanism.
NOTE: Cannot be marked as abstract due to how mixins work

#### updateLayout() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #updateLayout data-toc-label='updateLayout' }

Updates the layout of this constraint. Called automatically during initialization, when children change (if
resize is true), or when client wants to call this public method for any reason.

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

Releases references

### Instance Properties

#### ancestorNode : <span style="font-weight: 400; opacity: 80%;">Node</span> {: #ancestorNode data-toc-label='ancestorNode' }

(readonly)

The Node in whose local coordinate frame our layout computations are done.



## Source Code

See the source for [LayoutConstraint.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/LayoutConstraint.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
