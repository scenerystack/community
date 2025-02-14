# Toolbar

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/joist/blob/main/js/toolbar/Toolbar.ts](https://github.com/phetsims/joist/blob/main/js/toolbar/Toolbar.ts) for the most up-to-date information.

## Overview

The Toolbar along the left edge of the screen with controls related to the sim or active screen. Currently, it
only contains controls related to the Voicing feature. It isn't always displayed and the user must request it
from the PreferencesDialog. In order to be used, both voicing AND the Toolbar must be enabled by the user.
Voicing can be used without this shown.

When open, the sim will resize and shift to the right to create space. Screen bounds are adjusted so that
simulation components will never overlap with the Toolbar.

@author Jesse Greenberg

## Class Toolbar {: #Toolbar }


```js
import { Toolbar } from 'scenerystack/sim';
```
### Constructor

#### new Toolbar( enabledProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span>, selectedScreenProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[AnyScreen](../sim/Screen.md#AnyScreen)&gt;</span>, lookAndFeel : <span style="font-weight: 400;">[LookAndFeel](../joist/LookAndFeel.md)</span>, providedOptions? : <span style="font-weight: 400;">ToolbarOptions</span> ) {: #Toolbar-constructor data-toc-label='new Toolbar' }

### Instance Methods

#### getDisplayedWidth() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getDisplayedWidth data-toc-label='getDisplayedWidth' }

Returns the width of the Toolbar that can be seen on screen. This can be any value from the full width of the
Toolbar to zero width, depending on whether it is open, closed, removed entirely, or animating.

#### layout( scale : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #layout data-toc-label='layout' }

Layout for the Toolbar, called whenever position changes or self is resized.

### Instance Properties

#### rightPositionProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> {: #rightPositionProperty data-toc-label='rightPositionProperty' }

(readonly)

The position of the right edge of the backgroundRectangle in local coordinates.
This is what controls the position of the Toolbar as it is open/closed/removed/animating.



## Source Code

See the source for [Toolbar.ts](https://github.com/phetsims/joist/blob/main/js/toolbar/Toolbar.ts) in the [joist](https://github.com/phetsims/joist) repository.
