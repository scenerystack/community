# AncestorNodesProperty

## Overview

A Property that will contain a set of all ancestor Nodes of a given Node.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class AncestorNodesProperty {: #AncestorNodesProperty }


```js
import { AncestorNodesProperty } from 'scenerystack/scenery';
```
### Constructor

#### new AncestorNodesProperty( node : <span style="font-weight: 400; opacity: 80%;">Node</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

### Instance Properties

#### updateEmitter : <span style="font-weight: 400; opacity: 80%;">TinyEmitter</span> {: #updateEmitter data-toc-label='updateEmitter' }

(readonly)

Fired whenever we need to update the internal value (i.e. a parent was added or removed somewhere in the chain)



## Source Code

See the source for [AncestorNodesProperty.ts](https://github.com/phetsims/scenery/blob/main/js/util/AncestorNodesProperty.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
