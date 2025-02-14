# SVGGroup

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/display/SVGGroup.js](https://github.com/phetsims/scenery/blob/main/js/display/SVGGroup.js) for the most up-to-date information.

## Overview

Poolable wrapper for SVG &lt;group&gt; elements. We store state and add listeners directly to the corresponding Node,
so that we can set dirty flags and smartly update only things that have changed. This takes a load off of SVGBlock.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class SVGGroup {: #SVGGroup }


```js
import { SVGGroup } from 'scenerystack/scenery';
```
### Constructor

#### new SVGGroup( block, instance, parent ) {: #SVGGroup-constructor data-toc-label='new SVGGroup' }

### Instance Methods

#### initialize( block, instance, parent ) {: #initialize data-toc-label='initialize' }

@public

@param {SVGBlock} block
@param {Block} instance
@param {SVGGroup|null} parent

#### addSelfDrawable( drawable ) {: #addSelfDrawable data-toc-label='addSelfDrawable' }

@private

@param {SelfDrawable} drawable

#### removeSelfDrawable( drawable ) {: #removeSelfDrawable data-toc-label='removeSelfDrawable' }

@private

@param {SelfDrawable} drawable

#### addChildGroup( group ) {: #addChildGroup data-toc-label='addChildGroup' }

@private

@param {SVGGroup} group

#### removeChildGroup( group ) {: #removeChildGroup data-toc-label='removeChildGroup' }

@private

@param {SVGGroup} group

#### markDirty() {: #markDirty data-toc-label='markDirty' }

@public

#### markOrderDirty() {: #markOrderDirty data-toc-label='markOrderDirty' }

@public

#### markTransformDirty() {: #markTransformDirty data-toc-label='markTransformDirty' }

@public

#### onFilterChange() {: #onFilterChange data-toc-label='onFilterChange' }

@private

#### onVisibleChange() {: #onVisibleChange data-toc-label='onVisibleChange' }

@private

#### onClipChange() {: #onClipChange data-toc-label='onClipChange' }

@private

#### update() {: #update data-toc-label='update' }

@public

#### isReleasable() {: #isReleasable data-toc-label='isReleasable' }

@private

@returns {boolean}

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references
@public

#### toString() {: #toString data-toc-label='toString' }

Returns a string form of this object
@public

@returns {string}

### Static Methods

#### addDrawable( block, drawable ) {: #addDrawable data-toc-label='addDrawable' }

@public

@param {SVGBlock} block
@param {Drawable} drawable

#### removeDrawable( block, drawable ) {: #removeDrawable data-toc-label='removeDrawable' }

@public

@param {SVGBlock} block
@param {Drawable} drawable

#### ensureGroupsToInstance( block, instance ) {: #ensureGroupsToInstance data-toc-label='ensureGroupsToInstance' }

@private

@param {SVGBlock} block
@param {Instance} instance
@returns {SVGGroup}

#### releaseGroupsToInstance( block, instance ) {: #releaseGroupsToInstance data-toc-label='releaseGroupsToInstance' }

@private

@param {SVGBlock} block
@param {Instance} instance



## Source Code

See the source for [SVGGroup.js](https://github.com/phetsims/scenery/blob/main/js/display/SVGGroup.js) in the [scenery](https://github.com/phetsims/scenery) repository.
