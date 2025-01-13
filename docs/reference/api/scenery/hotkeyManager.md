# hotkeyManager

## Overview

Manages hotkeys based on two sources:

1. Global hotkeys (from globalHotkeyRegistry)
2. Hotkeys from the current focus trail (FocusManager.pdomFocusProperty, all hotkeys on all input listeners of
   nodes in the trail)

Manages key press state using EnglishKey from globalKeyStateTracker.

The "available" hotkeys are the union of the above two sources.

The "enabled" hotkeys are the subset of available hotkeys whose enabledProperties are true.

The "active" hotkeys are the subset of enabled hotkeys that are considered pressed. They will have fire-on-hold
behavior active.

The set of enabled hotkeys determines the set of modifier keys that are considered "active" (in addition to
ctrl/alt/meta/shift, which are always included).

@author Jesse Greenberg (PhET Interactive Simulations)
@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [hotkeyManager.ts](https://github.com/phetsims/scenery/blob/main/js/input/hotkeyManager.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
