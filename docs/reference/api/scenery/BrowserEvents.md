# BrowserEvents

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/input/BrowserEvents.ts](https://github.com/phetsims/scenery/blob/main/js/input/BrowserEvents.ts) for the most up-to-date information.

## Overview

Handles attaching/detaching and forwarding browser input events to displays.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class BrowserEvents {: #BrowserEvents }


```js
import { BrowserEvents } from 'scenerystack/scenery';
```
### Static Methods

#### addDisplay( display : <span style="font-weight: 400;">[Display](../scenery/Display.md)</span>, attachToWindow : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, passiveEvents : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #addDisplay data-toc-label='addDisplay' }

Adds a Display to the list of displays that will be notified of input events.

@param display
@param attachToWindow - Whether events should be attached to the self. If false, they will be
                                  attached to the Display's domElement.
@param passiveEvents - The value of the `passive` option for adding/removing DOM event listeners

#### removeDisplay( display : <span style="font-weight: 400;">[Display](../scenery/Display.md)</span>, attachToWindow : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, passiveEvents : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #removeDisplay data-toc-label='removeDisplay' }

Removes a Display to the list of displays that will be notified of input events.

@param display
@param attachToWindow - The value provided to addDisplay
@param passiveEvents - The value of the `passive` option for adding/removing DOM event listeners

#### onfocusin( domEvent : <span style="font-weight: 400;">Event</span> ) {: #onfocusin data-toc-label='onfocusin' }

#### onfocusout( domEvent : <span style="font-weight: 400;">Event</span> ) {: #onfocusout data-toc-label='onfocusout' }

#### oninput( domEvent : <span style="font-weight: 400;">Event</span> ) {: #oninput data-toc-label='oninput' }

#### onchange( domEvent : <span style="font-weight: 400;">Event</span> ) {: #onchange data-toc-label='onchange' }

#### onclick( domEvent : <span style="font-weight: 400;">Event</span> ) {: #onclick data-toc-label='onclick' }

#### onkeydown( domEvent : <span style="font-weight: 400;">Event</span> ) {: #onkeydown data-toc-label='onkeydown' }

#### onkeyup( domEvent : <span style="font-weight: 400;">Event</span> ) {: #onkeyup data-toc-label='onkeyup' }

### Static Properties

#### blockFocusCallbacks {: #blockFocusCallbacks data-toc-label='blockFocusCallbacks' }

Prevents focus related event callbacks from being dispatched - scenery internal operations might change
focus temporarily, we don't want event listeners to be called in this case because they are transient and not
caused by user interaction.

#### dispatchingFocusEvents {: #dispatchingFocusEvents data-toc-label='dispatchingFocusEvents' }

True while Scenery is dispatching focus and blur related events. Scenery (PDOMTree) needs to restore focus
after operations, but that can be very buggy while focus events are already being handled.



## Source Code

See the source for [BrowserEvents.ts](https://github.com/phetsims/scenery/blob/main/js/input/BrowserEvents.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
