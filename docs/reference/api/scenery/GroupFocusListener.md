# GroupFocusListener

## Overview

A listener that helps track focus for groups of Nodes. Properties allow you to observe when focus enters a group or
moves within a group of Nodes.

Scenery (and native DOM) events make this difficult to track because the group receives focusin/focusout events
even when focus moves within the group. This listener handles that for you.

@author Jesse Greenberg (PhET Interactive Simulations)

## Class GroupFocusListener {: #GroupFocusListener }


```js
import { GroupFocusListener } from 'scenerystack/scenery';
```
### Constructor

#### new GroupFocusListener( groupParent : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) {: #GroupFocusListener-constructor data-toc-label='new GroupFocusListener' }

### Instance Methods

#### focusin( event : <span style="font-weight: 400;">[SceneryEvent](../scenery/SceneryEvent.md)</span> ) {: #focusin data-toc-label='focusin' }

#### focusout( event : <span style="font-weight: 400;">[SceneryEvent](../scenery/SceneryEvent.md)</span> ) {: #focusout data-toc-label='focusout' }

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### focusInGroupProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #focusInGroupProperty data-toc-label='focusInGroupProperty' }

(readonly)

True when the focus is somewhere in this group.

#### focusTargetProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #focusTargetProperty data-toc-label='focusTargetProperty' }

(readonly)

The target of the focus, or null if the focus is not in this group.



## Source Code

See the source for [GroupFocusListener.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/GroupFocusListener.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
