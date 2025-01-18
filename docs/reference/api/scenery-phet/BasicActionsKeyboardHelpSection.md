# BasicActionsKeyboardHelpSection

## Overview

General help information for how to navigation a simulation with a keyboard. In general, this file supports a fair
number of options, like displaying group content, or shortcuts for checkbox interaction. The algorithm this type
implements set all the optional potential rows as null, and then fills them in if the options is provided. Then at the
end anything that is null is filtered out.

@author Jesse Greenberg (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)

## Class BasicActionsKeyboardHelpSection {: #BasicActionsKeyboardHelpSection }


```js
import { BasicActionsKeyboardHelpSection } from 'scenerystack/scenery-phet';
```
### Constructor

#### new BasicActionsKeyboardHelpSection( providedOptions? : <span style="font-weight: 400;">[BasicActionsKeyboardHelpSectionOptions](../scenery-phet/BasicActionsKeyboardHelpSection.md#BasicActionsKeyboardHelpSectionOptions)</span> ) {: #BasicActionsKeyboardHelpSection-constructor data-toc-label='new BasicActionsKeyboardHelpSection' }

### Instance Methods





## Type BasicActionsKeyboardHelpSectionOptions {: #BasicActionsKeyboardHelpSectionOptions }


```js
import type { BasicActionsKeyboardHelpSectionOptions } from 'scenerystack/scenery-phet';
```


- **withCheckboxContent**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  if true, the help content will include information about how to interact with checkboxes
- **withKeypadContent**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  if true, the help content will include information about how to interact with a keypad
- &amp; [KeyboardHelpSectionOptions](../scenery-phet/KeyboardHelpSection.md#KeyboardHelpSectionOptions)




## Source Code

See the source for [BasicActionsKeyboardHelpSection.ts](https://github.com/phetsims/scenery-phet/blob/main/js/keyboard/help/BasicActionsKeyboardHelpSection.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
