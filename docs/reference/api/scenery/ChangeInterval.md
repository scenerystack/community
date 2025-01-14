# ChangeInterval

## Overview

An interval (implicit consecutive sequence of drawables) that has a recorded change in-between the two ends.
We store the closest drawables to the interval that aren't changed, or null itself to indicate "to the end".

isEmpty() should be used before checking the endpoints, since it could have a null-to-null state but be empty,
since we arrived at that state from constriction.

For documentation purposes, an 'internal' drawable is one that is in-between (but not including) our un-changed ends
(drawableBefore and drawableAfter), and 'external' drawables are outside (or including) the un-changed ends.

For stitching purposes, a ChangeInterval effectively represents two linked lists: the "old" one that was displayed
in the previous frame (using oldNextDrawable for iteration across the drawable linked-list), or the "new" one that
will be displayed in the next frame (using nextDrawable for iteration).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ChangeInterval {: #ChangeInterval }


```js
import { ChangeInterval } from 'scenerystack/scenery';
```
### Constructor

#### new ChangeInterval( drawableBefore, drawableAfter ) {: #ChangeInterval-constructor data-toc-label='new ChangeInterval' }

### Instance Methods

#### initialize( drawableBefore, drawableAfter ) {: #initialize data-toc-label='initialize' }

@public

@param {Drawable} drawableBefore
@param {Drawable} drawableAfter

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references
@public

#### constrict() {: #constrict data-toc-label='constrict' }

Make our interval as tight as possible (we may have over-estimated it before)
@public

@returns {boolean} - Whether it was changed

#### isEmpty() {: #isEmpty data-toc-label='isEmpty' }

@public

@returns {boolean}

#### getOldInternalDrawableCount( oldStitchFirstDrawable, oldStitchLastDrawable ) {: #getOldInternalDrawableCount data-toc-label='getOldInternalDrawableCount' }

The quantity of "old" internal drawables. Requires the old first/last drawables for the backbone, since
we need that information for null-before/after boundaries.
@public

@param {Drawable} oldStitchFirstDrawable
@param {Drawable} oldStitchLastDrawable
@returns {number}

#### getNewInternalDrawableCount( newStitchFirstDrawable, newStitchLastDrawable ) {: #getNewInternalDrawableCount data-toc-label='getNewInternalDrawableCount' }

The quantity of "new" internal drawables. Requires the old first/last drawables for the backbone, since
we need that information for null-before/after boundaries.
@public

@param {Drawable} newStitchFirstDrawable
@param {Drawable} newStitchLastDrawable

@returns {number}

### Static Methods

#### newForDisplay( drawableBefore, drawableAfter, display ) {: #newForDisplay data-toc-label='newForDisplay' }

Creates a ChangeInterval that will be disposed after syncTree is complete (see Display phases).
@public

@param {Drawable} drawableBefore
@param {Drawable} drawableAfter
@param {Display} display

@returns {ChangeInterval}



## Source Code

See the source for [ChangeInterval.js](https://github.com/phetsims/scenery/blob/main/js/display/ChangeInterval.js) in the [scenery](https://github.com/phetsims/scenery) repository.
