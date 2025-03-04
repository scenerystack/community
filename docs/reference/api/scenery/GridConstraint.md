# GridConstraint

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/layout/constraints/GridConstraint.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/GridConstraint.ts) for the most up-to-date information.

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

#### new GridConstraint( ancestorNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[GridConstraintOptions](../scenery/GridConstraint.md#GridConstraintOptions)</span> ) {: #GridConstraint-constructor data-toc-label='new GridConstraint' }

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



## Type GridConstraintOptions {: #GridConstraintOptions }


```js
import type { GridConstraintOptions } from 'scenerystack/scenery';
```


- **spacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
<br>  Spacings are controlled in each dimension (setting `spacing`) will adjust both. If it's a number, it will be an
  extra gap in-between every row or column. If it's an array, it will specify the gap between successive rows/columns
  e.g. [ 5, 4 ] will have a spacing of 5 between the first and second lines, and 4 between the second and third
  lines. In that case, if there were a third line, it would have zero spacing between the second (any non-specified
  spacings for extra rows/columns will be zero).
  NOTE: If a line (row/column) is invisible (and excludeInvisible is set to true), then the spacing that is directly
  after (to the right/bottom of) that line will be ignored.
- **xSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **ySpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **preferredWidthProperty**?: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;
<br>  The preferred width/height (ideally from a container's localPreferredWidth/localPreferredHeight.
- **preferredHeightProperty**?: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;
- **minimumWidthProperty**?: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;
<br>  The minimum width/height (ideally from a container's localMinimumWidth/localMinimumHeight.
- **minimumHeightProperty**?: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;
- &amp; [ExternalGridConfigurableOptions](../scenery/GridConfigurable.md#ExternalGridConfigurableOptions) &amp; [NodeLayoutAvailableConstraintOptions](../scenery/NodeLayoutConstraint.md#NodeLayoutAvailableConstraintOptions)




## Source Code

See the source for [GridConstraint.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/GridConstraint.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
