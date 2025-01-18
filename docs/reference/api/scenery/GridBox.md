# GridBox

## Overview

A grid-based layout container.

See https://phetsims.github.io/scenery/doc/layout#GridBox for details

GridBox-only options:
  - rows (see https://phetsims.github.io/scenery/doc/layout#GridBox-rows)
  - columns (see https://phetsims.github.io/scenery/doc/layout#GridBox-columns)
  - autoRows (see https://phetsims.github.io/scenery/doc/layout#GridBox-autoLines)
  - autoColumns (see https://phetsims.github.io/scenery/doc/layout#GridBox-autoLines)
  - resize (see https://phetsims.github.io/scenery/doc/layout#GridBox-resize)
  - spacing (see https://phetsims.github.io/scenery/doc/layout#GridBox-spacing)
  - xSpacing (see https://phetsims.github.io/scenery/doc/layout#GridBox-spacing)
  - ySpacing (see https://phetsims.github.io/scenery/doc/layout#GridBox-spacing)
  - layoutOrigin (see https://phetsims.github.io/scenery/doc/layout#layoutOrigin)

GridBox and layoutOptions options (can be set either in the GridBox itself, or within its child nodes' layoutOptions):
  - xAlign (see https://phetsims.github.io/scenery/doc/layout#GridBox-align)
  - yAlign (see https://phetsims.github.io/scenery/doc/layout#GridBox-align)
  - stretch (see https://phetsims.github.io/scenery/doc/layout#GridBox-stretch)
  - xStretch (see https://phetsims.github.io/scenery/doc/layout#GridBox-stretch)
  - yStretch (see https://phetsims.github.io/scenery/doc/layout#GridBox-stretch)
  - grow (see https://phetsims.github.io/scenery/doc/layout#GridBox-grow)
  - xGrow (see https://phetsims.github.io/scenery/doc/layout#GridBox-grow)
  - yGrow (see https://phetsims.github.io/scenery/doc/layout#GridBox-grow)
  - margin (see https://phetsims.github.io/scenery/doc/layout#GridBox-margins)
  - xMargin (see https://phetsims.github.io/scenery/doc/layout#GridBox-margins)
  - yMargin (see https://phetsims.github.io/scenery/doc/layout#GridBox-margins)
  - leftMargin (see https://phetsims.github.io/scenery/doc/layout#GridBox-margins)
  - rightMargin (see https://phetsims.github.io/scenery/doc/layout#GridBox-margins)
  - topMargin (see https://phetsims.github.io/scenery/doc/layout#GridBox-margins)
  - bottomMargin (see https://phetsims.github.io/scenery/doc/layout#GridBox-margins)
  - minContentWidth (see https://phetsims.github.io/scenery/doc/layout#GridBox-minContent)
  - minContentHeight (see https://phetsims.github.io/scenery/doc/layout#GridBox-minContent)
  - maxContentWidth (see https://phetsims.github.io/scenery/doc/layout#GridBox-maxContent)
  - maxContentHeight (see https://phetsims.github.io/scenery/doc/layout#GridBox-maxContent)

layoutOptions-only options (can only be set within the child nodes' layoutOptions, NOT available on GridBox):
  - x (see https://phetsims.github.io/scenery/doc/layout#GridBox-layoutOptions-location)
  - y (see https://phetsims.github.io/scenery/doc/layout#GridBox-layoutOptions-location)
  - horizontalSpan (see https://phetsims.github.io/scenery/doc/layout#GridBox-layoutOptions-size)
  - verticalSpan (see https://phetsims.github.io/scenery/doc/layout#GridBox-layoutOptions-size)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class GridBox {: #GridBox }


```js
import { GridBox } from 'scenerystack/scenery';
```
### Constructor

#### new GridBox( providedOptions? : <span style="font-weight: 400;">[GridBoxOptions](../scenery/GridBox.md#GridBoxOptions)</span> ) {: #GridBox-constructor data-toc-label='new GridBox' }

### Instance Methods

#### setLines( orientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span>, lineArrays : <span style="font-weight: 400;">LineArrays</span> ) {: #setLines data-toc-label='setLines' }

Sets the children of the GridBox and adjusts them to be positioned in certain cells. It takes a 2-dimensional array
of Node|null (where null is a placeholder that does nothing).

For each cell, the first index into the array will be taken as the cell position in the provided orientation. The
second index into the array will be taken as the cell position in the OPPOSITE orientation.

See GridBox.rows or GridBox.columns for usages and more documentation.

#### getLines( orientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span> ) : <span style="font-weight: 400;">LineArrays</span> {: #getLines data-toc-label='getLines' }

Returns the children of the GridBox in a 2-dimensional array of Node|null (where null is a placeholder that does
nothing).

For each cell, the first index into the array will be taken as the cell position in the provided orientation. The
second index into the array will be taken as the cell position in the OPPOSITE orientation.

See GridBox.rows or GridBox.columns for usages

#### getNodeAt( row : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, column : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getNodeAt data-toc-label='getNodeAt' }

Returns the Node at a specific row/column intersection (or null if there are none)

#### getRowOfNode( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getRowOfNode data-toc-label='getRowOfNode' }

Returns the row index of a child Node (or if it spans multiple rows, the first row)

#### getColumnOfNode( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getColumnOfNode data-toc-label='getColumnOfNode' }

Returns the column index of a child Node (or if it spans multiple columns, the first row)

#### getNodesInRow( index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span> {: #getNodesInRow data-toc-label='getNodesInRow' }

Returns all the Nodes in a given row (by index)

#### getNodesInColumn( index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span> {: #getNodesInColumn data-toc-label='getNodesInColumn' }

Returns all the Nodes in a given column (by index)

#### addRow( row : <span style="font-weight: 400;">LineArray</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #addRow data-toc-label='addRow' }

Adds an array of child Nodes (with null allowed as empty spacers) at the bottom of all existing rows.

#### addColumn( column : <span style="font-weight: 400;">LineArray</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #addColumn data-toc-label='addColumn' }

Adds an array of child Nodes (with null allowed as empty spacers) at the right of all existing columns.

#### insertRow( index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, row : <span style="font-weight: 400;">LineArray</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #insertRow data-toc-label='insertRow' }

Inserts a row of child Nodes at a given row index (see addRow for more information)

#### insertColumn( index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, column : <span style="font-weight: 400;">LineArray</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #insertColumn data-toc-label='insertColumn' }

Inserts a column of child Nodes at a given column index (see addColumn for more information)

#### removeRow( index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #removeRow data-toc-label='removeRow' }

Removes all child Nodes in a given row

#### removeColumn( index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #removeColumn data-toc-label='removeColumn' }

Removes all child Nodes in a given column

#### setChildren( children : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setChildren data-toc-label='setChildren' }

#### mutate( options? : <span style="font-weight: 400;">[GridBoxOptions](../scenery/GridBox.md#GridBoxOptions)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #mutate data-toc-label='mutate' }

#### setExcludeInvisibleChildrenFromBounds( excludeInvisibleChildrenFromBounds : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setExcludeInvisibleChildrenFromBounds data-toc-label='setExcludeInvisibleChildrenFromBounds' }

#### dispose() {: #dispose data-toc-label='dispose' }

#### getHelperNode() : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #getHelperNode data-toc-label='getHelperNode' }



## Type GridBoxOptions {: #GridBoxOptions }


```js
import type { GridBoxOptions } from 'scenerystack/scenery';
```


- **resize**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Controls whether the GridBox will re-trigger layout automatically after the "first" layout during construction.
  The GridBox will layout once after processing the options object, but if resize:false, then after that manual
  layout calls will need to be done (with updateLayout())
- **rows**?: LineArrays
<br>  Sets the children of the GridBox and positions them using a 2-dimensional array of Node|null (null is a placeholder
  and does nothing). The first index is treated as a row, and the second is treated as a column, so that:
  
    rows[ row ][ column ] = Node
    rows[ y ][ x ] = Node
  
  Thus the following will have 2 rows that have 3 columns each:
    rows: [ [ a, b, c ], [ d, e, f ] ]
  
  NOTE: This will mutate the layoutOptions of the Nodes themselves, and will also wipe out any existing children.
  NOTE: Don't use this option with either `children` or `columns` also being set
- **columns**?: LineArrays
<br>  Sets the children of the GridBox and positions them using a 2-dimensional array of Node|null (null is a placeholder
  and does nothing). The first index is treated as a column, and the second is treated as a row, so that:
  
    columns[ column ][ row ] = Node
    columns[ x ][ y ] = Node
  
  Thus the following will have 2 columns that have 3 rows each:
    columns: [ [ a, b, c ], [ d, e, f ] ]
  
  NOTE: This will mutate the layoutOptions of the Nodes themselves, and will also wipe out any existing children.
  NOTE: Don't use this option with either `children` or `rows` also being set
- **autoRows**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  When non-null, the cells of this grid will be positioned/sized to be 1x1 cells, filling rows until a column has
  `autoRows` number of rows, then it will go to the next column. This should generally be used with `children` or
  adding/removing children in normal ways.
  NOTE: This should be used with the `children` option and/or adding children manually (addChild, etc.)
  NOTE: This should NOT be used with autoColumns or rows/columns, as those also specify coordinate information
  NOTE: This will only lay out children with valid bounds, and if excludeInvisibleChildrenFromBounds is true then it
  will ALSO be constrained to only visible children. It won't leave gaps for children that don't meet these
  constraints.
- **autoColumns**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  When non-null, the cells of this grid will be positioned/sized to be 1x1 cells, filling columns until a row has
  `autoColumns` number of columns, then it will go to the next row. This should generally be used with `children` or
  adding/removing children in normal ways.
  NOTE: This should be used with the `children` option and/or adding children manually (addChild, etc.)
  NOTE: This should NOT be used with autoRows or rows/columns, as those also specify coordinate information
  NOTE: This will only lay out children with valid bounds, and if excludeInvisibleChildrenFromBounds is true then it
  will ALSO be constrained to only visible children. It won't leave gaps for children that don't meet these
  constraints.
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[GridConstraintOptions](../scenery/GridConstraint.md#GridConstraintOptions), GridConstraintExcludedOptions&gt; &amp; [LayoutNodeOptions](../scenery/LayoutNode.md#LayoutNodeOptions)




## Source Code

See the source for [GridBox.ts](https://github.com/phetsims/scenery/blob/main/js/layout/nodes/GridBox.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
