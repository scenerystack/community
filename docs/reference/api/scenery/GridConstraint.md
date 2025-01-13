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

#### new GridConstraint( ancestorNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[GridConstraintOptions](../scenery/GridConstraint.md#GridConstraintOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### layout() {: #layout data-toc-label='layout' }

(protected)

#### addCell( cell : <span style="font-weight: 400;">[GridCell](../scenery/GridCell.md)</span> ) {: #addCell data-toc-label='addCell' }

#### removeCell( cell : <span style="font-weight: 400;">[GridCell](../scenery/GridCell.md)</span> ) {: #removeCell data-toc-label='removeCell' }

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references

#### getIndices( orientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #getIndices data-toc-label='getIndices' }

#### getCell( row : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, column : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[GridCell](../scenery/GridCell.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getCell data-toc-label='getCell' }

#### getCellFromNode( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;">[GridCell](../scenery/GridCell.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getCellFromNode data-toc-label='getCellFromNode' }

#### getCells( orientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span>, index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[GridCell](../scenery/GridCell.md)[]</span> {: #getCells data-toc-label='getCells' }

### Static Methods

#### create( ancestorNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, options? : <span style="font-weight: 400;">[GridConstraintOptions](../scenery/GridConstraint.md#GridConstraintOptions)</span> ) : <span style="font-weight: 400;">[GridConstraint](../scenery/GridConstraint.md)</span> {: #create data-toc-label='create' }



## Source Code

See the source for [GridConstraint.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/GridConstraint.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
