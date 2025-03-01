# PreferencesTab

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/joist/blob/main/js/preferences/PreferencesTab.ts](https://github.com/phetsims/joist/blob/main/js/preferences/PreferencesTab.ts) for the most up-to-date information.

## Overview

A single tab of the PreferencesDialog. Selecting this PreferencesTab makes its associated PreferencesPanel
visible in the dialog.

@author Jesse Greenberg

## Class PreferencesTab {: #PreferencesTab }


```js
import { PreferencesTab } from 'scenerystack/joist';
```
### Constructor

#### new PreferencesTab( labelProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, property : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;[PreferencesType](../joist/PreferencesType.md)&gt;</span>, value : <span style="font-weight: 400;">[PreferencesType](../joist/PreferencesType.md)</span>, providedOptions : <span style="font-weight: 400;">PreferencesTabOptions</span> ) {: #PreferencesTab-constructor data-toc-label='new PreferencesTab' }

### Instance Methods



### Instance Properties

#### value : <span style="font-weight: 400;">[PreferencesType](../joist/PreferencesType.md)</span> {: #value data-toc-label='value' }

(readonly)

The value of this tab, when this tab is Pressed, the panel of this PreferencesType will be displayed.



## Source Code

See the source for [PreferencesTab.ts](https://github.com/phetsims/joist/blob/main/js/preferences/PreferencesTab.ts) in the [joist](https://github.com/phetsims/joist) repository.
