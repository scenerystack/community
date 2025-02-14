# PaintObserver

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/display/PaintObserver.js](https://github.com/phetsims/scenery/blob/main/js/display/PaintObserver.js) for the most up-to-date information.

## Overview

Hooks up listeners to a paint (fill or stroke) to determine when its represented value has changed.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class PaintObserver {: #PaintObserver }


```js
import { PaintObserver } from 'scenerystack/scenery';
```
### Constructor

#### new PaintObserver( changeCallback ) {: #PaintObserver-constructor data-toc-label='new PaintObserver' }

### Instance Methods

#### clean() {: #clean data-toc-label='clean' }

Releases references without sending the notifications.
@public

#### updateSecondary( newPaint, oldPaint, property ) {: #updateSecondary data-toc-label='updateSecondary' }

Called when the value of a "primary" Property (contents of one, main or as a Gradient) is potentially changed.
@private

@param {string|Color} newPaint
@param {string|Color} oldPaint
@param {Property} property

#### attachPrimary( paint ) {: #attachPrimary data-toc-label='attachPrimary' }

Attempt to attach listeners to the paint's primary (the paint itself), or something else that acts like the primary
(properties on a gradient).
@private

TODO: Note that this is called for gradient colors also https://github.com/phetsims/scenery/issues/1581

NOTE: If it's a Property, we'll also need to handle the secondary (part inside the Property).

@param {PaintDef} paint

#### detachPrimary( paint ) {: #detachPrimary data-toc-label='detachPrimary' }

Attempt to detach listeners from the paint's primary (the paint itself).
@private

TODO: Note that this is called for gradient colors also https://github.com/phetsims/scenery/issues/1581

NOTE: If it's a Property or Gradient, we'll also need to handle the secondaries (part(s) inside the Property(ies)).

@param {PaintDef} paint

#### attachSecondary( paint ) {: #attachSecondary data-toc-label='attachSecondary' }

Attempt to attach listeners to the paint's secondary (part within the Property).
@private

@param {string|Color} paint

#### notifyChanged() {: #notifyChanged data-toc-label='notifyChanged' }

Calls the change callback, and invalidates the paint itself if it's a gradient.
@private

#### secondaryLazyLinkProperty( property ) {: #secondaryLazyLinkProperty data-toc-label='secondaryLazyLinkProperty' }

Adds our secondary listener to the Property (unless there is already one, in which case we record the counts).
@private

@param {Property.&lt;*&gt;} property

#### secondaryUnlinkProperty( property ) {: #secondaryUnlinkProperty data-toc-label='secondaryUnlinkProperty' }

Removes our secondary listener from the Property (unless there were more than 1 time we needed to listen to it,
in which case we reduce the count).
@private

@param {Property.&lt;*&gt;} property



## Source Code

See the source for [PaintObserver.js](https://github.com/phetsims/scenery/blob/main/js/display/PaintObserver.js) in the [scenery](https://github.com/phetsims/scenery) repository.
