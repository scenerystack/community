# FittedBlock

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/display/FittedBlock.js](https://github.com/phetsims/scenery/blob/main/js/display/FittedBlock.js) for the most up-to-date information.

## Overview

A Block that needs to be fitted to either the screen bounds or other local bounds. This potentially reduces memory
usage and can make graphical operations in the browser faster, yet if the fit is rapidly changing could cause
performance degradation.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class FittedBlock {: #FittedBlock }


```js
import { FittedBlock } from 'scenerystack/scenery';
```
### Instance Methods

#### initialize( display, renderer, transformRootInstance, preferredFit ) {: #initialize data-toc-label='initialize' }

@public

@param {Display} display
@param {number} renderer
@param {Instance} transformRootInstance - All transforms of this instance and its ancestors will already have been
                                          applied. This block will only be responsible for applying transforms of
                                          this instance's descendants.
@param {FittedBlock.Fit} preferredFit
@returns {FittedBlock} - For chaining

#### setFit( fit ) {: #setFit data-toc-label='setFit' }

Changes the current fit, if it's currently different from the argument.
@private

@param {FittedBlock.Fit} fit

#### markDirtyFit() {: #markDirtyFit data-toc-label='markDirtyFit' }

@public

#### updateFit() {: #updateFit data-toc-label='updateFit' }

Should be called from update() whenever this block is dirty
@protected

#### setSizeFullDisplay() {: #setSizeFullDisplay data-toc-label='setSizeFullDisplay' }

@public

#### setSizeFitBounds() {: #setSizeFitBounds data-toc-label='setSizeFitBounds' }

@public

#### addCommonFitInstance( instance ) {: #addCommonFitInstance data-toc-label='addCommonFitInstance' }

@public

@param {Instance|null} instance

#### removeCommonFitInstance() {: #removeCommonFitInstance data-toc-label='removeCommonFitInstance' }

@public

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references
@public
@override

#### addDrawable( drawable ) {: #addDrawable data-toc-label='addDrawable' }

Track the fittability of the added drawable.
@public
@override

@param {Drawable} drawable

#### removeDrawable( drawable ) {: #removeDrawable data-toc-label='removeDrawable' }

Stop tracking the fittability of the removed drawable.
@public
@override

@param {Drawable} drawable

#### onFittabilityChange( fittable ) {: #onFittabilityChange data-toc-label='onFittabilityChange' }

Called from the fittability listener attached to child drawables when their fittability changes.
@private

@param {boolean} fittable - Whether the particular child drawable is fittable

#### incrementUnfittable() {: #incrementUnfittable data-toc-label='incrementUnfittable' }

The number of unfittable child drawables was increased by 1.
@private

#### decrementUnfittable() {: #decrementUnfittable data-toc-label='decrementUnfittable' }

The number of unfittable child drawables was decreased by 1.
@private

#### checkFitConstraints() {: #checkFitConstraints data-toc-label='checkFitConstraints' }

Check to make sure we are using the correct current fit.
@private

#### computeCommonAncestorInstance() {: #computeCommonAncestorInstance data-toc-label='computeCommonAncestorInstance' }

@private

@returns {Instance}

#### onIntervalChange( firstDrawable, lastDrawable ) {: #onIntervalChange data-toc-label='onIntervalChange' }

@public
@override

@param {Drawable} firstDrawable
@param {Drawable} lastDrawable



## Source Code

See the source for [FittedBlock.js](https://github.com/phetsims/scenery/blob/main/js/display/FittedBlock.js) in the [scenery](https://github.com/phetsims/scenery) repository.
