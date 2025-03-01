# PreferencesDialog

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/joist/blob/main/js/preferences/PreferencesDialog.ts](https://github.com/phetsims/joist/blob/main/js/preferences/PreferencesDialog.ts) for the most up-to-date information.

## Overview

Dialog with preferences to enable or disable various features for the simulation. Groups of preferences are
organized and displayed in a tab panel.

Once the dialog is created it is never destroyed so listeners and components do not need to be disposed.

@author Jesse Greenberg (PhET Interactive Simulations)

## Class PreferencesDialog {: #PreferencesDialog }


```js
import { PreferencesDialog } from 'scenerystack/sim';
```
### Constructor

#### new PreferencesDialog( preferencesModel : <span style="font-weight: 400;">[PreferencesModel](../sim/PreferencesModel.md)</span>, providedOptions? : <span style="font-weight: 400;">PreferencesDialogOptions</span> ) {: #PreferencesDialog-constructor data-toc-label='new PreferencesDialog' }

### Instance Methods

#### focusSelectedTab() {: #focusSelectedTab data-toc-label='focusSelectedTab' }

Move focus to the selected tab. Generally to be used when opening the dialog.



## Source Code

See the source for [PreferencesDialog.ts](https://github.com/phetsims/joist/blob/main/js/preferences/PreferencesDialog.ts) in the [joist](https://github.com/phetsims/joist) repository.
