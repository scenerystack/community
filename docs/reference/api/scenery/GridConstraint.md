# GridConstraint

## Overview

Main grid-layout logic. Usually used indirectly through GridBox, but can also be used directly (say, if nodes don't
have the same parent, or a GridBox can't be used).

Throughout the documentation for grid-related items, the term "line" refers to either a row or column (depending on
the orientation).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class GridConstraint {: #GridConstraint }


```js
import { GridConstraint } from 'scenerystack/scenery';
```
### Constructor

#### new GridConstraint( ancestorNode : <span style="font-weight: 400; opacity: 80%;">Node</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">GridConstraintOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### layout() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #layout data-toc-label='layout' }

(protected)

#### addCell( cell : <span style="font-weight: 400; opacity: 80%;">GridCell</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #addCell data-toc-label='addCell' }

#### removeCell( cell : <span style="font-weight: 400; opacity: 80%;">GridCell</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #removeCell data-toc-label='removeCell' }

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

Releases references

#### getIndices( orientation : <span style="font-weight: 400; opacity: 80%;">Orientation</span> ) : <span style="font-weight: 400; opacity: 80%;">number[]</span> {: #getIndices data-toc-label='getIndices' }

#### getCell( row : <span style="font-weight: 400; opacity: 80%;">number</span>, column : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">GridCell | null</span> {: #getCell data-toc-label='getCell' }

#### getCellFromNode( node : <span style="font-weight: 400; opacity: 80%;">Node</span> ) : <span style="font-weight: 400; opacity: 80%;">GridCell | null</span> {: #getCellFromNode data-toc-label='getCellFromNode' }

#### getCells( orientation : <span style="font-weight: 400; opacity: 80%;">Orientation</span>, index : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">GridCell[]</span> {: #getCells data-toc-label='getCells' }

### Static Methods

#### create( ancestorNode : <span style="font-weight: 400; opacity: 80%;">Node</span>, options? : <span style="font-weight: 400; opacity: 80%;">GridConstraintOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">GridConstraint</span> {: #create data-toc-label='create' }



## Source Code

See the source for [GridConstraint.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/GridConstraint.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
