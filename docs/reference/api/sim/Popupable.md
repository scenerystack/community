# Popupable

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/sun/blob/main/js/Popupable.ts](https://github.com/phetsims/sun/blob/main/js/Popupable.ts) for the most up-to-date information.

## Overview

Popupable trait

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Sam Reid (PhET Interactive Simulations)
@author Andrea Lin (PhET Interactive Simulations)
@author Chris Malley (PixelZoom, Inc.)

## Type PopupableNode {: #PopupableNode }


```js
import type { PopupableNode } from 'scenerystack/sim';
```


- **layoutBounds**: [Bounds2](../dot/Bounds2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **popupParent**: [Node](../scenery/Node.md)
- **isShowingProperty**: [Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;
- &amp; [Node](../scenery/Node.md)




## Type PopupableOptions {: #PopupableOptions }


```js
import type { PopupableOptions } from 'scenerystack/sim';
```


- **showPopup**?: ( popup: [Node](../scenery/Node.md), isModal: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
<br>  Don't use PopupableNode here (it creates... a lot of type issues and circularity)
- **hidePopup**?: ( popup: [Node](../scenery/Node.md), isModal: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **isModal**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  modal popups prevent interaction with the rest of the sim while open
- **layoutBounds**?: [Bounds2](../dot/Bounds2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  If desired, the layoutBounds that should be used for layout
- **focusOnShowNode**?: [Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  The Node that receives focus when the Popupable is shown. If null, focus is not set.
- **focusOnHideNode**?: [Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  The Node that receives focus when the Popupable is closed. If null, focus will return
  to the Node that had focus when the Dialog opened.
- **disableModals**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  When true, no modal show/hide feature will be supported. This is a way of opting out of the Popupable feature
  altogether for this runtime.
- &amp; [PickOptional](../phet-core/PickOptional.md)&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "tandem"&gt;




## Source Code

See the source for [Popupable.ts](https://github.com/phetsims/sun/blob/main/js/Popupable.ts) in the [sun](https://github.com/phetsims/sun) repository.
