# InstanceRegistry

## Overview

Tracks object allocations for reporting using binder.

@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)

## Class InstanceRegistry {: #InstanceRegistry }


```js
import { InstanceRegistry } from 'scenerystack/phet-core';
```
### Static Methods

#### registerDataURL( repoName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, typeName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, instance : <span style="font-weight: 400;">NodeLike</span> ) {: #registerDataURL data-toc-label='registerDataURL' }

Adds a screenshot of the given scenery Node

#### registerToolbox( instance : <span style="font-weight: 400;">NodeLike</span> ) {: #registerToolbox data-toc-label='registerToolbox' }

Register a toolbox pattern node. There is no strict class for this, so this factored out method can be used by any constructor

#### registerHotkey( hotkeyData : <span style="font-weight: 400;">[HotkeyData](../scenery/HotkeyData.md)</span> ) {: #registerHotkey data-toc-label='registerHotkey' }

Register a Hotkey for binder documentation.

### Static Properties

#### componentMap : <span style="font-weight: 400;">ComponentMap</span> {: #componentMap data-toc-label='componentMap' }

Per named component, store image URIs of what their usages look like

#### hotkeys : <span style="font-weight: 400;">SerializedHotkeyData[]</span> {: #hotkeys data-toc-label='hotkeys' }

An array of all Hotkeys that have been registered.



## Source Code

See the source for [InstanceRegistry.ts](https://github.com/phetsims/phet-core/blob/main/js/documentation/InstanceRegistry.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
