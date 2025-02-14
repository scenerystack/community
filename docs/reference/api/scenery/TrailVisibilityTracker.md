# TrailVisibilityTracker

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/util/TrailVisibilityTracker.js](https://github.com/phetsims/scenery/blob/main/js/util/TrailVisibilityTracker.js) for the most up-to-date information.

## Overview

Broadcasts when any Node or its ancestors in a Trail change visibility, effectively
observing changes to Trail.isVisible().

@author Jesse Greenberg

## Class TrailVisibilityTracker {: #TrailVisibilityTracker }


```js
import { TrailVisibilityTracker } from 'scenerystack/scenery';
```
### Constructor

#### new TrailVisibilityTracker( trail, options ) {: #TrailVisibilityTracker-constructor data-toc-label='new TrailVisibilityTracker' }

### Instance Methods

#### addListener( listener ) {: #addListener data-toc-label='addListener' }

Adds a listener function that will be synchronously called whenever the visibility this Trail changes.
@public

@param {Function} listener - Listener will be called with no arguments.

#### removeListener( listener ) {: #removeListener data-toc-label='removeListener' }

Removes a listener that was previously added with addListener().
@public

@param {Function} listener

#### dispose() {: #dispose data-toc-label='dispose' }

@public

#### onVisibilityChange() {: #onVisibilityChange data-toc-label='onVisibilityChange' }

When visibility of the Trail is changed, notify listeners.
@private

#### notifyListeners() {: #notifyListeners data-toc-label='notifyListeners' }

Notify listeners to a change in visibility.
@private



## Source Code

See the source for [TrailVisibilityTracker.js](https://github.com/phetsims/scenery/blob/main/js/util/TrailVisibilityTracker.js) in the [scenery](https://github.com/phetsims/scenery) repository.
