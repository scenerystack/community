# TrailsBetweenProperty

## Overview

A Property that will synchronously contain all Trails between two nodes (in a root-leaf direction).
Listens from the child to the parent (since we tend to branch much less that way).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class TrailsBetweenProperty {: #TrailsBetweenProperty }


```js
import { TrailsBetweenProperty } from 'scenerystack/scenery';
```
### Constructor

#### new TrailsBetweenProperty( rootNode : <span style="font-weight: 400; opacity: 80%;">Node</span>, leafNode : <span style="font-weight: 400; opacity: 80%;">Node</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

### Instance Properties

#### rootNode : <span style="font-weight: 400; opacity: 80%;">Node</span> {: #rootNode data-toc-label='rootNode' }

(readonly)

#### leafNode : <span style="font-weight: 400; opacity: 80%;">Node</span> {: #leafNode data-toc-label='leafNode' }

(readonly)

#### listenedNodeSet : <span style="font-weight: 400; opacity: 80%;">Set&lt;Node&gt;</span> {: #listenedNodeSet data-toc-label='listenedNodeSet' }

(readonly)



## Source Code

See the source for [TrailsBetweenProperty.ts](https://github.com/phetsims/scenery/blob/main/js/util/TrailsBetweenProperty.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
