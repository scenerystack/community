# MenuItem

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/sun/blob/main/js/MenuItem.ts](https://github.com/phetsims/sun/blob/main/js/MenuItem.ts) for the most up-to-date information.

## Overview

MenuItem is an item in the PhetMenu.

@author Michael Kauzmann (PhET Interactive Simulations)

## Class MenuItem {: #MenuItem }


```js
import { MenuItem } from 'scenerystack/sun';
```
### Constructor

#### new MenuItem( closeCallback : <span style="font-weight: 400;">( event: [SceneryEvent](../scenery/SceneryEvent.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span>, labelStringProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, callback : <span style="font-weight: 400;">( event: [SceneryEvent](../scenery/SceneryEvent.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span>, present : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, shouldBeHiddenWhenLinksAreNotAllowed : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, providedOptions? : <span style="font-weight: 400;">[MenuItemOptions](../sun/MenuItem.md#MenuItemOptions)</span> ) {: #MenuItem-constructor data-toc-label='new MenuItem' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### present : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #present data-toc-label='present' }

(readonly)

if this MenuItem will be shown in the menu. Some items are just created to maintain a
consistent PhET-iO API for all sim runtimes, see https://github.com/phetsims/phet-io/issues/1457

#### separatorBefore : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #separatorBefore data-toc-label='separatorBefore' }

(readonly)

if there should be a horizontal separator between this MenuItem and the one above it



## Type MenuItemOptions {: #MenuItemOptions }


```js
import type { MenuItemOptions } from 'scenerystack/sun';
```


- **separatorBefore**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  if there should be a horizontal separator between this MenuItem and the one immediately previous
- **checkedProperty**?: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  if provided add a checkmark next to the MenuItem text whenever this Property is true.
- **textFill**?: [TPaint](../scenery/TPaint.md)
- &amp; [VoicingOptions](../scenery/Voicing.md#VoicingOptions) &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [MenuItem.ts](https://github.com/phetsims/sun/blob/main/js/MenuItem.ts) in the [sun](https://github.com/phetsims/sun) repository.
