# DOM

## Overview

Displays a DOM element directly in a node, so that it can be positioned/transformed properly, and bounds are handled properly in Scenery.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
/* global JQuery */

## Class DOM {: #DOM }


```js
import { DOM } from 'scenerystack/scenery';
```
### Constructor

#### new DOM( element : <span style="font-weight: 400;">Element | JQuery</span>, options? : <span style="font-weight: 400;">[DOMOptions](../scenery/DOM.md#DOMOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### calculateDOMBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #calculateDOMBounds data-toc-label='calculateDOMBounds' }

(protected)

Computes the bounds of our current DOM element (using jQuery, as replacing this with other things seems a bit
bug-prone and has caused issues in the past).

The dom element needs to be attached to the DOM tree in order for this to work.

Alternative getBoundingClientRect explored, but did not seem sufficient (possibly due to CSS transforms)?

#### invalidateDOM() {: #invalidateDOM data-toc-label='invalidateDOM' }

Triggers recomputation of our DOM element's bounds.

This should be called after the DOM element's bounds may have changed, to properly update the bounding box
in Scenery.

#### isPainted() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isPainted data-toc-label='isPainted' }

Whether this Node itself is painted (displays something itself).

#### setElement( element : <span style="font-weight: 400;">HTMLElement</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setElement data-toc-label='setElement' }

Changes the DOM element of this DOM node to another element.

#### getElement() : <span style="font-weight: 400;">HTMLElement</span> {: #getElement data-toc-label='getElement' }

Returns the DOM element being displayed by this DOM node.

#### setPreventTransform( preventTransform : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setPreventTransform data-toc-label='setPreventTransform' }

Sets the value of the preventTransform flag.

When the preventTransform flag is set to true, Scenery will not reposition (CSS transform) the DOM element, but
instead it will be at the upper-left (0,0) of the Scenery Display. The client will be responsible for sizing or
positioning this element instead.

#### isTransformPrevented() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isTransformPrevented data-toc-label='isTransformPrevented' }

Returns the value of the preventTransform flag.

See the setPreventTransform documentation for more information on the flag.

#### setAllowInput( allowInput : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setAllowInput data-toc-label='setAllowInput' }

Sets whether input is allowed for the DOM element. If false, we will disable input events with pointerEvents and
the usual preventDefault(). If true, we'll set a flag internally so that we don't preventDefault() on input events.

#### isInputAllowed() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isInputAllowed data-toc-label='isInputAllowed' }

#### mutate( options? : <span style="font-weight: 400;">[DOMOptions](../scenery/DOM.md#DOMOptions)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #mutate data-toc-label='mutate' }



## Type DOMOptions {: #DOMOptions }


```js
import type { DOMOptions } from 'scenerystack/scenery';
```
- **element**?: Element
- **preventTransform**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **allowInput**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [DOM.ts](https://github.com/phetsims/scenery/blob/main/js/nodes/DOM.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
