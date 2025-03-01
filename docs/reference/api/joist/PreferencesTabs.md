# PreferencesTabs

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/joist/blob/main/js/preferences/PreferencesTabs.ts](https://github.com/phetsims/joist/blob/main/js/preferences/PreferencesTabs.ts) for the most up-to-date information.

## Overview

The tabs for the PreferencesDialog. Activating a tab will select a PreferencesTabPanel to be displayed to the user.
The actual tabs are implemented as radio buttons, styled to look like flat like a set of tabs.

@author Jesse Greenberg (PhET Interactive Simulations)

## Class PreferencesTabs {: #PreferencesTabs }


```js
import { PreferencesTabs } from 'scenerystack/joist';
```
### Constructor

#### new PreferencesTabs( supportedTabs : <span style="font-weight: 400;">[PreferencesType](../joist/PreferencesType.md)[]</span>, selectedPanelProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;[PreferencesType](../joist/PreferencesType.md)&gt;</span>, providedOptions : <span style="font-weight: 400;">[PreferencesTabsOptions](../joist/PreferencesTabs.md#PreferencesTabsOptions)</span> ) {: #PreferencesTabs-constructor data-toc-label='new PreferencesTabs' }

### Instance Methods

#### getTabVisibleProperty( preferencesType : <span style="font-weight: 400;">[PreferencesType](../joist/PreferencesType.md)</span> ) : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #getTabVisibleProperty data-toc-label='getTabVisibleProperty' }

Returns the visibleProperty for the Tab associated with the PreferencesType. PreferencesTabs need to be hidden
if the Tab becomes invisible (mostly needed for PhET-iO).

#### focusSelectedTab() {: #focusSelectedTab data-toc-label='focusSelectedTab' }

Move focus to the selected tab. Useful when the Preferences dialog is opened.



## Type PreferencesTabsOptions {: #PreferencesTabsOptions }


```js
import type { PreferencesTabsOptions } from 'scenerystack/joist';
```


[HBoxOptions](../scenery/HBox.md#HBoxOptions) &amp; [PickRequired](../phet-core/PickRequired.md)&lt;[HBoxOptions](../scenery/HBox.md#HBoxOptions), "tandem"&gt;



## Source Code

See the source for [PreferencesTabs.ts](https://github.com/phetsims/joist/blob/main/js/preferences/PreferencesTabs.ts) in the [joist](https://github.com/phetsims/joist) repository.
