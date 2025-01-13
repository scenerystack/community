# CountMap

## Overview

Data structure that handles creating/destroying related objects that need to exist when something's count is &gt;=1

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class CountMap {: #CountMap }


```js
import { CountMap } from 'scenerystack/scenery';
```
### Constructor

#### new CountMap( create, destroy ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### increment( key, quantity ) {: #increment data-toc-label='increment' }

@public

@param {*} key
@param {number} [quantity]

#### decrement( key, quantity ) {: #decrement data-toc-label='decrement' }

@public

@param {*} key
@param {number} [quantity]

#### get( key ) {: #get data-toc-label='get' }

@public

@param {*} key
@returns {*}

#### clear() {: #clear data-toc-label='clear' }

@public

NOTE: We COULD try to collect all of the CountMapEntries... but that seems like an awful lot of CPU.
If GC is an issue from this, we can add more logic



## Source Code

See the source for [CountMap.js](https://github.com/phetsims/scenery/blob/main/js/util/CountMap.js) in the [scenery](https://github.com/phetsims/scenery) repository.
