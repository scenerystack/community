# AncestorNodesProperty

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/util/AncestorNodesProperty.ts](https://github.com/phetsims/scenery/blob/main/js/util/AncestorNodesProperty.ts) for the most up-to-date information.

## Overview

A Property that will contain a set of all ancestor Nodes of a given Node.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class AncestorNodesProperty {: #AncestorNodesProperty }


```js
import { AncestorNodesProperty } from 'scenerystack/scenery';
```
### Constructor

#### new AncestorNodesProperty( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) {: #AncestorNodesProperty-constructor data-toc-label='new AncestorNodesProperty' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### updateEmitter : <span style="font-weight: 400;">[TinyEmitter](../axon/TinyEmitter.md)</span> {: #updateEmitter data-toc-label='updateEmitter' }

(readonly)

Fired whenever we need to update the internal value (i.e. a parent was added or removed somewhere in the chain)



## Source Code

See the source for [AncestorNodesProperty.ts](https://github.com/phetsims/scenery/blob/main/js/util/AncestorNodesProperty.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
