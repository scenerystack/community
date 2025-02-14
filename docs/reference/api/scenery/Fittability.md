# Fittability

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/display/Fittability.js](https://github.com/phetsims/scenery/blob/main/js/display/Fittability.js) for the most up-to-date information.

## Overview

A sub-component of an Instance that handles matters relating to whether fitted blocks should not fit if possible.
We mostly mark our own drawables as fittable, and track whether our subtree is all fittable (so that common-ancestor
fits can determine if their bounds will change).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Fittability {: #Fittability }


```js
import { Fittability } from 'scenerystack/scenery';
```
### Constructor

#### new Fittability( instance ) {: #Fittability-constructor data-toc-label='new Fittability' }

### Instance Methods

#### initialize( display, trail ) {: #initialize data-toc-label='initialize' }

Responsible for initialization and cleaning of this. If the parameters are both null, we'll want to clean our
external references (like Instance does).
@public

@param {Display|null} display
@param {Trail|null} trail
@returns {Fittability} - Returns this, to allow chaining.

#### checkSelfFittability() {: #checkSelfFittability data-toc-label='checkSelfFittability' }

Called when the instance is updating its rendering state (as any fittability changes to existing instances will
trigger an update there).
@public

#### isSelfFitSupported() {: #isSelfFitSupported data-toc-label='isSelfFitSupported' }

Whether our node's performance flags allows the subtree to be fitted.
@private

Any updates to flags (for instance, a 'dynamic' flag perhaps?) should be added here.

@returns {boolean}

#### markSubtreeFittable() {: #markSubtreeFittable data-toc-label='markSubtreeFittable' }

Called when our parent just became fittable. Responsible for flagging subtrees with the ancestorsFittable flag,
up to the point where they are fittable.
@private

#### markSubtreeUnfittable() {: #markSubtreeUnfittable data-toc-label='markSubtreeUnfittable' }

Called when our parent just became unfittable and we are fittable. Responsible for flagging subtrees with
the !ancestorsFittable flag, up to the point where they are unfittable.
@private

#### updateSelfFittable() {: #updateSelfFittable data-toc-label='updateSelfFittable' }

Called when our Node's self fit-ability has changed.
@private

#### incrementSubtreeUnfittableCount() {: #incrementSubtreeUnfittableCount data-toc-label='incrementSubtreeUnfittableCount' }

A child instance's subtree became unfittable, OR our 'self' became unfittable. This is responsible for updating
the subtreeFittableCount for this instance AND up to all ancestors that would be affected by the change.
@private

#### decrementSubtreeUnfittableCount() {: #decrementSubtreeUnfittableCount data-toc-label='decrementSubtreeUnfittableCount' }

A child instance's subtree became fittable, OR our 'self' became fittable. This is responsible for updating
the subtreeFittableCount for this instance AND up to all ancestors that would be affected by the change.
@private

#### onInsert( childFittability ) {: #onInsert data-toc-label='onInsert' }

Called when an instance is added as a child to our instance. Updates necessary counts.
@public

@param {Fittability} childFittability - The Fittability of the new child instance.

#### onRemove( childFittability ) {: #onRemove data-toc-label='onRemove' }

Called when a child instance is removed from our instance. Updates necessary counts.
@public

@param {Fittability} childFittability - The Fittability of the old child instance.

#### audit() {: #audit data-toc-label='audit' }

Sanity checks that run when slow assertions are enabled. Enforces the invariants of the Fittability subsystem.
@public



## Source Code

See the source for [Fittability.js](https://github.com/phetsims/scenery/blob/main/js/display/Fittability.js) in the [scenery](https://github.com/phetsims/scenery) repository.
