# TimeControlsKeyboardHelpSection

## Overview

Help section that explains how to use a keyboard to toggle play/pause and time controls.

@author Jesse Greenberg (PhET Interactive Simulations)

## Class TimeControlsKeyboardHelpSection {: #TimeControlsKeyboardHelpSection }


```js
import { TimeControlsKeyboardHelpSection } from 'scenerystack/scenery-phet';
```
### Constructor

#### new TimeControlsKeyboardHelpSection( providedOptions? : <span style="font-weight: 400;">[TimeControlKeyboardHelpSectionOptions](../scenery-phet/TimeControlsKeyboardHelpSection.md#TimeControlKeyboardHelpSectionOptions)</span> ) {: #TimeControlsKeyboardHelpSection-constructor data-toc-label='new TimeControlsKeyboardHelpSection' }

### Instance Methods





## Type TimeControlKeyboardHelpSectionOptions {: #TimeControlKeyboardHelpSectionOptions }


```js
import type { TimeControlKeyboardHelpSectionOptions } from 'scenerystack/scenery-phet';
```


- **headingString**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;
<br>  The heading string for this section of keyboard help content
- **pauseOrPlayActionStringProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;
<br>  Visible string that describes the action of pause/play from a key command. You may want sim-specific terminology
  for this command.
- **pauseOrPlayActionDescriptionString**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;
<br>  String for the PDOM (screen readers) that describes the hotkeys for play/pause.
- &amp; [KeyboardHelpSectionOptions](../scenery-phet/KeyboardHelpSection.md#KeyboardHelpSectionOptions)




## Source Code

See the source for [TimeControlsKeyboardHelpSection.ts](https://github.com/phetsims/scenery-phet/blob/main/js/keyboard/help/TimeControlsKeyboardHelpSection.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
