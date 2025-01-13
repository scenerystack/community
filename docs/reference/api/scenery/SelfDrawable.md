# SelfDrawable

## Overview

A drawable that will paint a single instance.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class SelfDrawable {: #SelfDrawable }


```js
import { SelfDrawable } from 'scenerystack/scenery';
```
### Constructor

#### new SelfDrawable( renderer, instance ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### initialize( renderer, instance ) {: #initialize data-toc-label='initialize' }

@public

@param {number} renderer
@param {Instance} instance
@returns {SelfDrawable}

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references
@public
@override

#### updateSelfVisibility() {: #updateSelfVisibility data-toc-label='updateSelfVisibility' }

@public

#### toDetailedString() {: #toDetailedString data-toc-label='toDetailedString' }

Returns a more-informative string form of this object.
@public
@override

@returns {string}



## Source Code

See the source for [SelfDrawable.js](https://github.com/phetsims/scenery/blob/main/js/display/SelfDrawable.js) in the [scenery](https://github.com/phetsims/scenery) repository.
