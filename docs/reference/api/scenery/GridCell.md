# GridCell

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/layout/constraints/GridCell.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/GridCell.ts) for the most up-to-date information.

## Overview

A configurable cell containing a Node used for GridConstraint layout

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class GridCell {: #GridCell }


```js
import { GridCell } from 'scenerystack/scenery';
```
### Instance Methods

#### onLayoutOptionsChange( isInitial ) {: #onLayoutOptionsChange data-toc-label='onLayoutOptionsChange' }

(protected)

### Instance Properties

#### size : <span style="font-weight: 400;">[OrientationPair](../phet-core/OrientationPair.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> {: #size data-toc-label='size' }



## Type GridCellOptions {: #GridCellOptions }


```js
import type { GridCellOptions } from 'scenerystack/scenery';
```


- **row**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Defines the row (or if height&gt;1, the top-most row) index of the cell. row:0 is the top-most row
- **column**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Defines the column (or if width&gt;1, the left-most column) index of the cell. column:0 is the left-most column.
- **horizontalSpan**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  How many columns this one cell spans.
- **verticalSpan**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  How many rows this one cell spans
- &amp; [ExternalGridConfigurableOptions](../scenery/GridConfigurable.md#ExternalGridConfigurableOptions)




## Source Code

See the source for [GridCell.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/GridCell.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
