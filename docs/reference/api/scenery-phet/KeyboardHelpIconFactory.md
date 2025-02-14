# KeyboardHelpIconFactory

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/keyboard/help/KeyboardHelpIconFactory.ts](https://github.com/phetsims/scenery-phet/blob/main/js/keyboard/help/KeyboardHelpIconFactory.ts) for the most up-to-date information.

## Overview

Reusable icons to be created for keyboard help shortcuts dialogs.
This type is only a collection of static methods, and should not be instantiated.

@author Michael Kauzmann (PhET Interactive Simulations)

## Class KeyboardHelpIconFactory {: #KeyboardHelpIconFactory }


```js
import { KeyboardHelpIconFactory } from 'scenerystack/scenery-phet';
```
### Constructor

#### new KeyboardHelpIconFactory() {: #KeyboardHelpIconFactory-constructor data-toc-label='new KeyboardHelpIconFactory' }

### Instance Methods



### Static Methods

#### iconRow( icons : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span>, providedOptions? : <span style="font-weight: 400;">KeyboardHelpIconFactoryOptions</span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #iconRow data-toc-label='iconRow' }

Horizontal layout of a set of icons, in left-to-right order.

#### iconOrIcon( leftIcon : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, rightIcon : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">KeyboardHelpIconFactoryOptions</span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #iconOrIcon data-toc-label='iconOrIcon' }

Two icons with horizontal layout, separated by 'or' text.

#### iconToIcon( leftIcon : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, rightIcon : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">KeyboardHelpIconFactoryOptions</span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #iconToIcon data-toc-label='iconToIcon' }

Two icons with horizontal layout, and separated by '-' text. This is useful for a range, like 0-9.

#### iconPlusIcon( leftIcon : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, rightIcon : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">WithPlusIconOptions</span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #iconPlusIcon data-toc-label='iconPlusIcon' }

Two icons with horizontal layout, separated by '+' text.

#### iconPlusIconRow( iconList : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span>, providedOptions? : <span style="font-weight: 400;">WithPlusIconOptions</span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #iconPlusIconRow data-toc-label='iconPlusIconRow' }

Returns a row of icons separated by '+'. Useful when a keyboard shortcut has multiple modifier keys for one
key press listener.

#### shiftPlusIcon( icon : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">WithPlusIconOptions</span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #shiftPlusIcon data-toc-label='shiftPlusIcon' }

An icon with horizontal layout in order: shift, plus, and provided icon.

#### altPlusIcon( icon : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">WithPlusIconOptions</span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #altPlusIcon data-toc-label='altPlusIcon' }

An icon with horizontal layout in order: alt, plus, and provided icon.

#### spaceOrEnter() : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #spaceOrEnter data-toc-label='spaceOrEnter' }

"Space or Enter" icon

#### upOrDown() : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #upOrDown data-toc-label='upOrDown' }

An icon with up and down arrows, separated by 'or', in horizontal layout.

#### wasdRowIcon( providedOptions? : <span style="font-weight: 400;">KeyboardHelpIconFactoryOptions</span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #wasdRowIcon data-toc-label='wasdRowIcon' }

An icon with up and down arrow keys, in a horizontal layout.

#### arrowKeysRowIcon( providedOptions? : <span style="font-weight: 400;">KeyboardHelpIconFactoryOptions</span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #arrowKeysRowIcon data-toc-label='arrowKeysRowIcon' }

An icon with the 4 arrow keys, in a horizontal layout.

#### arrowOrWasdKeysRowIcon( providedOptions? : <span style="font-weight: 400;">KeyboardHelpIconFactoryOptions</span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #arrowOrWasdKeysRowIcon data-toc-label='arrowOrWasdKeysRowIcon' }

An icon with the 4 arrow keys, WASD keys, separated by "or", in horizontal layout.

#### pageUpPageDownRowIcon( providedOptions? : <span style="font-weight: 400;">KeyboardHelpIconFactoryOptions</span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #pageUpPageDownRowIcon data-toc-label='pageUpPageDownRowIcon' }

An icon with page up/down keys, in horizontal layout.

#### upDownArrowKeysRowIcon( providedOptions? : <span style="font-weight: 400;">KeyboardHelpIconFactoryOptions</span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #upDownArrowKeysRowIcon data-toc-label='upDownArrowKeysRowIcon' }

An icon with up and down arrow keys, in horizontal layout.

#### leftRightArrowKeysRowIcon( providedOptions? : <span style="font-weight: 400;">KeyboardHelpIconFactoryOptions</span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #leftRightArrowKeysRowIcon data-toc-label='leftRightArrowKeysRowIcon' }

An icon with left and right arrow keys, in horizontal layout.

#### fromHotkeyData( hotkeyData : <span style="font-weight: 400;">[HotkeyData](../scenery/HotkeyData.md)</span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #fromHotkeyData data-toc-label='fromHotkeyData' }

Create an icon Node for a hotkey, based on the provided HotkeyData. Combines key icons with plus icons.
For example, a HotkeyData with 'shift+r' would produce a row with the shift icon, a plus icon, and the r icon.

### Static Properties

#### DEFAULT_ICON_SPACING {: #DEFAULT_ICON_SPACING data-toc-label='DEFAULT_ICON_SPACING' }

(readonly)

#### ENGLISH_KEY_TO_KEY_NODE : <span style="font-weight: 400;">Map</span> {: #ENGLISH_KEY_TO_KEY_NODE data-toc-label='ENGLISH_KEY_TO_KEY_NODE' }

(readonly)

Maps English key strings to their corresponding icon nodes.



## Source Code

See the source for [KeyboardHelpIconFactory.ts](https://github.com/phetsims/scenery-phet/blob/main/js/keyboard/help/KeyboardHelpIconFactory.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
