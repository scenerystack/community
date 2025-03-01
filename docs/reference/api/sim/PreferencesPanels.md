# PreferencesPanels

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/joist/blob/main/js/preferences/PreferencesPanels.ts](https://github.com/phetsims/joist/blob/main/js/preferences/PreferencesPanels.ts) for the most up-to-date information.

## Overview

The panels that contain preferences controls. There is one panel for every tab, and it is shown when the
corresponding tab is selected.

Once the dialog is created it is never destroyed so listeners do not need to be disposed.

@author Jesse Greenberg (PhET Interactive Simulations)

## Class PreferencesPanels {: #PreferencesPanels }


```js
import { PreferencesPanels } from 'scenerystack/sim';
```
### Constructor

#### new PreferencesPanels( preferencesModel : <span style="font-weight: 400;">[PreferencesModel](../sim/PreferencesModel.md)</span>, supportedTabs : <span style="font-weight: 400;">[PreferencesType](../joist/PreferencesType.md)[]</span>, selectedTabProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[PreferencesType](../joist/PreferencesType.md)&gt;</span>, preferencesTabs : <span style="font-weight: 400;">[PreferencesTabs](../joist/PreferencesTabs.md)</span>, providedOptions? : <span style="font-weight: 400;">PreferencesPanelsOptions</span> ) {: #PreferencesPanels-constructor data-toc-label='new PreferencesPanels' }

### Instance Methods

#### focusSelectedPanel() {: #focusSelectedPanel data-toc-label='focusSelectedPanel' }

Focus the selected panel. The panel should not be focusable until this is requested, so it is set to be
focusable before the focus() call. When focus is removed from the panel, it should become non-focusable
again. That is handled in PreferencesPanelContainer class.

#### isFocusableSelectedContent( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isFocusableSelectedContent data-toc-label='isFocusableSelectedContent' }

@param node - the potential content for the selected panel that is focusable
@returns true if the provided node is the currently selected panel



## Source Code

See the source for [PreferencesPanels.ts](https://github.com/phetsims/joist/blob/main/js/preferences/PreferencesPanels.ts) in the [joist](https://github.com/phetsims/joist) repository.
