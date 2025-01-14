# FireListener

## Overview

A listener for common button usage, providing the fire() method/callback and helpful properties. NOTE that it doesn't
need to be an actual button (or look like a button), this is useful whenever that type of "fire" behavior is helpful.

For example usage, see scenery/examples/input.html. Usually you can just pass a fire callback and things work.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class FireListener {: #FireListener }


```js
import { FireListener } from 'scenerystack/scenery';
```
### Constructor

#### new FireListener( providedOptions? : <span style="font-weight: 400;">[FireListenerOptions](../scenery/FireListener.md#FireListenerOptions)&lt;[FireListener](../scenery/FireListener.md)&gt;</span> ) {: #FireListener-constructor data-toc-label='new FireListener' }

### Instance Methods

#### fire( event : <span style="font-weight: 400;">[SceneryEvent](../scenery/SceneryEvent.md)&lt;MouseEvent | TouchEvent | PointerEvent | FocusEvent | KeyboardEvent&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #fire data-toc-label='fire' }

Fires any associated button fire callback.

NOTE: This is safe to call on the listener externally.

#### press( event : <span style="font-weight: 400;">[SceneryEvent](../scenery/SceneryEvent.md)&lt;MouseEvent | TouchEvent | PointerEvent | FocusEvent | KeyboardEvent&gt;</span>, targetNode? : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, callback? : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #press data-toc-label='press' }

Presses the button.

NOTE: This is safe to call externally in order to attempt to start a press. fireListener.canPress( event ) can
be used to determine whether this will actually start a press.

@param event
@param [targetNode] - If provided, will take the place of the targetNode for this call. Useful for
                             forwarded presses.
@param [callback] - to be run at the end of the function, but only on success
@returns success - Returns whether the press was actually started

#### release( event? : <span style="font-weight: 400;">[SceneryEvent](../scenery/SceneryEvent.md)&lt;MouseEvent | TouchEvent | PointerEvent | FocusEvent | KeyboardEvent&gt;</span>, callback? : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #release data-toc-label='release' }

Releases the button.

NOTE: This can be safely called externally in order to force a release of this button (no actual 'up' event is
needed). If the cancel/interrupt behavior is more preferable (will not fire the button), then call interrupt()
on this listener instead.

@param [event] - scenery event if there was one
@param [callback] - called at the end of the release

#### click( event : <span style="font-weight: 400;">[SceneryEvent](../scenery/SceneryEvent.md)&lt;MouseEvent&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, callback? : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #click data-toc-label='click' }

Clicks the listener, pressing it and releasing it immediately. Part of the scenery input API, triggered from PDOM
events for accessibility.

Click does not involve the FireListener timer because it is a discrete event that
presses and releases the listener immediately. This behavior is a limitation imposed
by screen reader technology. See PressListener.click for more information.

NOTE: This can be safely called externally in order to click the listener, event is not required.
fireListener.canClick() can be used to determine if this will actually trigger a click.

@param [event]
@param [callback] - called at the end of the click

#### interrupt() {: #interrupt data-toc-label='interrupt' }

Interrupts the listener, releasing it (canceling behavior).

This effectively releases/ends the press, and sets the `interrupted` flag to true while firing these events
so that code can determine whether a release/end happened naturally, or was canceled in some way.

This can be called manually, but can also be called through node.interruptSubtreeInput().

#### dispose() {: #dispose data-toc-label='dispose' }



## Type FireListenerOptions {: #FireListenerOptions }


```js
import type { FireListenerOptions } from 'scenerystack/scenery';
```


- **fire**?: ( event: [SceneryEvent](../scenery/SceneryEvent.md)&lt;MouseEvent | TouchEvent | PointerEvent | FocusEvent | KeyboardEvent&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **fireOnDown**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **fireOnHold**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **fireOnHoldDelay**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **fireOnHoldInterval**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; StrictOmit&lt;ParentOptions&lt;Listener&gt;, "phetioPressActionInstrumented" | "phetioReleaseActionInstrumented"&gt;




## Source Code

See the source for [FireListener.ts](https://github.com/phetsims/scenery/blob/main/js/listeners/FireListener.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
