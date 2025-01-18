# EventContext

## Overview

A collection of information about an event and the environment when it was fired

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class EventContext {: #EventContext }


```js
import { EventContext } from 'scenerystack/scenery';
```
### Constructor

#### new EventContext( domEvent : <span style="font-weight: 400;">DOMEvent</span> ) {: #EventContext-constructor data-toc-label='new EventContext' }

### Instance Methods

#### allowsDOMInput() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #allowsDOMInput data-toc-label='allowsDOMInput' }

DOM (Scenery) nodes set dataset.sceneryAllowInput on their container if they don't want preventDefault to be called,
or other effects that block input (e.g. setPointerCapture). We search up the tree to detect this.

### Instance Properties

#### domEvent : <span style="font-weight: 400;">DOMEvent</span> {: #domEvent data-toc-label='domEvent' }

(readonly)

Raw DOM InputEvent (TouchEvent, PointerEvent, MouseEvent,...)

#### activeElement : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #activeElement data-toc-label='activeElement' }

(readonly)

The document.activeElement when the event was fired

### Static Methods

#### createSynthetic() : <span style="font-weight: 400;">[EventContext](../scenery/EventContext.md)</span> {: #createSynthetic data-toc-label='createSynthetic' }



## Source Code

See the source for [EventContext.ts](https://github.com/phetsims/scenery/blob/main/js/input/EventContext.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
