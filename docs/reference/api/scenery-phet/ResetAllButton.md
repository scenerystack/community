# ResetAllButton

## Overview

Reset All button, typically used to reset everything ('reset all') on a Screen.
Extends ResetButton, adding things that are specific to 'reset all'.

@author John Blanco (PhET Interactive Simulations)
@author Chris Malley (PixelZoom, Inc.)

## Class ResetAllButton {: #ResetAllButton }


```js
import { ResetAllButton } from 'scenerystack/scenery-phet';
```
### Constructor

#### new ResetAllButton( providedOptions? : <span style="font-weight: 400;">[ResetAllButtonOptions](../scenery-phet/ResetAllButton.md#ResetAllButtonOptions)</span> ) {: #ResetAllButton-constructor data-toc-label='new ResetAllButton' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Static Properties

#### RESET_ALL_HOTKEY_DATA : <span style="font-weight: 400;">[HotkeyData](../scenery/HotkeyData.md)</span> {: #RESET_ALL_HOTKEY_DATA data-toc-label='RESET_ALL_HOTKEY_DATA' }

(readonly)



## Type ResetAllButtonOptions {: #ResetAllButtonOptions }


```js
import type { ResetAllButtonOptions } from 'scenerystack/scenery-phet';
```


- **phetioRestoreScreenStateOnReset**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  option specific to ResetAllButton. If true, then the reset all button will reset back to the
  previous PhET-iO state, if applicable.
- **interruptScreenViewInput**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  When reset all is called, search for all ancestor Nodes that are JOIST/ScreenView and call
  Node.interruptSubtreeInput() on each. See https://github.com/phetsims/scenery-phet/issues/861
- &amp; StrictOmit&lt;[ResetButtonOptions](../scenery-phet/ResetButton.md#ResetButtonOptions), "xMargin" | "yMargin"&gt;




## Source Code

See the source for [ResetAllButton.ts](https://github.com/phetsims/scenery-phet/blob/main/js/buttons/ResetAllButton.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
