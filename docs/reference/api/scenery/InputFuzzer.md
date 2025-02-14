# InputFuzzer

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/input/InputFuzzer.js](https://github.com/phetsims/scenery/blob/main/js/input/InputFuzzer.js) for the most up-to-date information.

## Overview

For generating random mouse/touch input to a Display, to hopefully discover bugs in an automated fashion.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class InputFuzzer {: #InputFuzzer }


```js
import { InputFuzzer } from 'scenerystack/scenery';
```
### Constructor

#### new InputFuzzer( display, seed ) {: #InputFuzzer-constructor data-toc-label='new InputFuzzer' }

### Instance Methods

#### fuzzEvents( averageEventCount, allowMouse, allowTouch, maximumPointerCount ) {: #fuzzEvents data-toc-label='fuzzEvents' }

Sends a certain (expected) number of random events through the input system for the display.
@public

@param {number} averageEventCount
@param {boolean} allowMouse
@param {boolean} allowTouch
@param {number} maximumPointerCount

#### createTouchEvent( type, touches ) {: #createTouchEvent data-toc-label='createTouchEvent' }

Creates a touch event from multiple touch "items".
@private

@param {string} type - The main event type, e.g. 'touchmove'.
@param {Array.&lt;Object&gt;} touches - A subset of touch objects stored on the fuzzer itself.
@returns {Event} - If possible a TouchEvent, but may be a CustomEvent

#### getRandomPosition() {: #getRandomPosition data-toc-label='getRandomPosition' }

Returns a random position somewhere in the display's global coordinates.
@private

@returns {Vector2}

#### createTouch( position ) {: #createTouch data-toc-label='createTouch' }

Creates a touch from a position (and adds it).
@private

@param {Vector2} position
@returns {Object}

#### removeTouch( touch ) {: #removeTouch data-toc-label='removeTouch' }

Removes a touch from our list.
@private

@param {Object} touch

#### touchStart( touch ) {: #touchStart data-toc-label='touchStart' }

Triggers a touchStart for the given touch.
@private

@param {Object} touch

#### touchMove( touch ) {: #touchMove data-toc-label='touchMove' }

Triggers a touchMove for the given touch (to a random position in the display).
@private

@param {Object} touch

#### touchEnd( touch ) {: #touchEnd data-toc-label='touchEnd' }

Triggers a touchEnd for the given touch.
@private

@param {Object} touch

#### touchCancel( touch ) {: #touchCancel data-toc-label='touchCancel' }

Triggers a touchCancel for the given touch.
@private

@param {Object} touch

#### mouseToggle() {: #mouseToggle data-toc-label='mouseToggle' }

Triggers a mouse toggle (switching from down =&gt; up or vice versa).
@private

#### mouseMove() {: #mouseMove data-toc-label='mouseMove' }

Triggers a mouse move (to a random position in the display).
@private



## Source Code

See the source for [InputFuzzer.js](https://github.com/phetsims/scenery/blob/main/js/input/InputFuzzer.js) in the [scenery](https://github.com/phetsims/scenery) repository.
