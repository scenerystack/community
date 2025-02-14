# HandleDownListener

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/listeners/HandleDownListener.js](https://github.com/phetsims/scenery/blob/main/js/listeners/HandleDownListener.js) for the most up-to-date information.

## Overview

A type of listener that absorbs all 'down' events, not letting it bubble further to ancestor node listeners.

NOTE: This does not call abort(), so listeners that are added to the same Node as this listener will still fire
      normally.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class HandleDownListener {: #HandleDownListener }


```js
import { HandleDownListener } from 'scenerystack/scenery';
```
### Instance Methods

#### down( event ) {: #down data-toc-label='down' }

Scenery input callback to absorb down events.
@public

@param {SceneryEvent} event



## Source Code

See the source for [HandleDownListener.js](https://github.com/phetsims/scenery/blob/main/js/listeners/HandleDownListener.js) in the [scenery](https://github.com/phetsims/scenery) repository.
