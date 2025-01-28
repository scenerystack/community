--8<-- "api-reference-snippets.md"

<link rel="stylesheet" href="/css/examples.css">

# Scenery Layout

## Introduction {: #introduction }

Here we will cover the layout system in [Scenery](https://phetsims.github.io/scenery/).

### Bounds {: #bounds }

The layout system in Scenery is based on the concept of `bounds`. Each *paintable* Node (that displays something, like
`Text` or `Path`) will define its own `selfBounds` (as a `Bounds2` object that stores a left/top/right/bottom).

The `localBounds` of a Node is the combination of the `selfBounds` along with the `bounds` of each of the child Nodes.
This defines the size of the Node within its *local coordinate frame*.

Each Node has an affine transform that can be used to transform the Node's local coordinate frame into the parent's
coordinate frame. This is used to position and scale the Node within its parent.

This transform is used to calculate the `bounds` of the Node from its `localBounds`. The `bounds` are in what is known
as the *parent coordinate frame* and define the size of the Node to everything else.

Most getters for things like `width` / `height` will return the value of the `bounds`.

### Layout Containers {: #layout-containers }

Some Nodes are called *layout containers* if they will control the position and size of child content. Some, like
`HBox` / `VBox` / `GridBox` (discussed below), will be responsible for all of their children. Some, like `Panel`, will
only control one child (its main content). Layout containers will also usually control the *preferred* bounds of their
children, if they are sizable (discussed later).

When a layout container is given children, it will typically reposition them whenever any of the children change in
size, or have any change in properties that would affect the layout. Sometimes this is done immediately, however, for
performance reasons, many times bounds are not proactively computed and are instead computed lazily (at the next
animation frame) when needed. To force the bounds of a Node to be updated immediately, use `node.validateBounds()`. It
is usually best to write code where this is not needed.

The most important Scenery layout containers are discussed below:

- `FlowBox`, with its `HBox` / `VBox` shortcuts, acts similarly to a CSS flexbox container.
- `GridBox` acts similarly to CSS grid.
- `ManualConstraint` allows writing imperative-style connections between Nodes with different parents.
- `AlignBox` allows positioning a Node within a rectangle, with margins/alignment.

### Sizable Components {: #sizable-components }

Nodes like FlowBox (HBox/VBox), GridBox, and many [sun](https://github.com/phetsims/sun) components (buttons,
AccordionBox, Panel, Slider, Checkbox) are *sizable*: they can be adjusted to different *preferred* sizes/bounds, which
are equal to or larger than their *minimum* sizes. When the preferred size is set, the Node is responsible for adjusting
its own layout so that it takes up that size.

Sizable nodes will either mix in `WidthSizable`, `HeightSizable`, or `Sizable` (indicating that both width and height
can be adjusted). This provides preferred and minimum sizes in BOTH local and parent coordinate frames (e.g.,
`preferredWidth` / `localPreferredWidth`). These separate coordinate frame versions will be kept in sync (and are backed
by Properties).

Typically, Nodes will compute their own minimum width/height. The local version of this (e.g., `localMinimumWidth`) is
considered the "primary" one, since Nodes usually do layout in their local coordinate frame. This means that when a
Node's transform changes, its minimum sizes will be adjusted to match the equivalent `localMinimum` sizes.

Typically, layout containers (but also clients, manually) will set the preferred sizes on a Node, thus the parent
version will be primary (e.g., when a sizable Node is transformed, its `localPreferredWidth` will be adjusted to match
the `preferredWidth` after the transformation).

Some Nodes by default have this "sizability" turned off, and clients can do this manually with
`widthSizable/heightSizable/sizable: false`. Layout containers should not attempt to set preferred sizes when the Node
is not considered "sizable".

For instance, Rectangles mix in Sizable, but are marked as `sizable: false` by default, so it won't take up space even
when a container has a larger preferred size. They can be made resizable with `sizable: true`:

**NOTE**: This is different than the `stretch` layout option. `stretch` will potentially change what preferred size it
will set to a Node. `sizable` on a Node will prevent that setting of preferred size.

### Layout Options {: #layoutOptions }

The section below will show off many layout options that are typically set on the container (and apply to all children).
These can also be set on individual children and will override the container's default for any options included. These
can be mutated after (by setting the entire thing with `node.layoutOptions =` or with `mutateLayoutOptions`).

`mutateLayoutOptions` is recommended when applying additional adjustments to `layoutOptions`, so that it won't by
accident remove any layout options that were set earlier OR some set by the container. For example, GridBox with
`rows/columns/autoRows/autoColumns` will set some layout options, and using `gridBox.layoutOptions =` may wipe out the
positioning information for the child.

<div id="layoutOptionsMutate-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/layoutOptionsMutate-example.js"></script>

### References and Documentation {: #references-and-documentation }

It is recommended to view assorted PhET simulations and libraries for examples to see how layout is used in practice.

There are a [number of examples](../../phet-lib/doc/layout-exemplars.html) that show layout in action with
assorted [sun](https://github.com/phetsims/sun) components.

If you're using a built version of Scenery, you'll need to add the relevant namespaces to objects. Almost everything
here will need a `scenery.` prefix, e.g., `new phet.scenery.Node()` instead of `new Node()`. The built version of
Scenery will include `scenery`, `kite` (for Shape), `dot` (for Vector2), `axon` (for Properties), and `phetCore`. The
code examples here can use either the prefixed versions or non-prefixed.

All of the code examples here are editable. You can change the code and see the results immediately.

Many examples can be resized using drag handles. This adjusts the preferred size of the container.

## FlowBox {: #FlowBox }

A FlowBox is a layout container that lays out its children in a row or column (depending on the orientation). It can
optionally wrap content to the next row/column when there is no more room (e.g., like text).

### orientation {: #FlowBox-orientation }

For horizontal line-based layout, use `HBox`:

<div id="HBox-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/HBox-example.js"></script>

For vertical line-based layout, use `VBox`:

<div id="VBox-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/VBox-example.js"></script>

**NOTE**: For FlowBox, the orientation provided is typically called the *primary* axis. This is the axis along which
each Node in a line is positioned. The *secondary* axis is the opposite one, along which each Node is aligned. For
example, for an HBox, its primary axis is horizontal, and its secondary axis is vertical (so its elements will be
positioned with increasing x values, and its `align` will control the y values).

For cases where the orientation needs to be determined programmatically, use `FlowBox`:

<div id="orientation-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/orientation-example.js"></script>

### Resizing {: #FlowBox-resizing }

The box adjusts to changing cell sizes:

<div id="dynamic-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/dynamic-example.js"></script>

<p id="FlowBox-resize">
Resizing/layout can be disabled with `resize: false`:
</p>

<div id="locked-sizing-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/locked-sizing-example.js"></script>

### Invisible children

Invisible nodes are not included in layout/bounds by default:

<div id="invis-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/invis-example.js"></script>

<p id="FlowBox-excludeInvisibleChildrenFromBounds">
Invisible nodes can be forced into the layout
</p>

<div id="force-vis-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/force-vis-example.js"></script>

### grow {: #FlowBox-grow }

Nodes with preferred sizes can be added, and the `grow` in `layoutOptions` will attempt to put extra space into that
cell. If all nodes have the same `grow`, then all nodes will receive the same share of the extra space. Otherwise, extra
space is distributed proportionally as defined by each node's `grow` value.

<div id="resizable-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/resizable-example.js"></script>

Extra space can be allocated proportionally (a node with 4 times the `grow` value will grow 4 times as fast):

<div id="grow-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/grow-example.js"></script>

### cellAlign {: #FlowBox-cellAlign }

When `grow` is used to expand a cell, but the content does not fill the cell, `cellAlign` can control the relative
positioning of the content within the cell. The default is to the left/top of the cell.

<div id="cellAlign-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/cellAlign-example.js"></script>

### stretch {: #FlowBox-stretch }

`stretch` will have a resizable element take up the entire row/column size:

<div id="stretch-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/stretch-example.js"></script>

### Constraining dimensions

<p id="FlowBox-maxContent">
Maximums can be applied to constrain this growing (it won't grow past the max content dimension):
</p>

<div id="maxContentWidth-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/maxContentWidth-example.js"></script>

<p id="FlowBox-minContent">
Minimums can also force a certain expansion:
</p>

<div id="minContentWidth-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/minContentWidth-example.js"></script>

Minimums and maximums also apply on the secondary axis:

<div id="secondaryAxisContent-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/secondaryAxisContent-example.js"></script>

Content minimums and maximums can be applied to all layout cells in the FlowBox by using
`layoutOptions: { minContentWidth: {{NUMBER}}, minContentHeight: {{NUMBER}} }`. For example, setting `minContentWidth`
in a FlowBox's `layoutOption` constrains all of its layout cells to a certain width (with margin and spacing added to
calculate the total width). This occurs even if the children are smaller and do not occupy the full width. However, this
method still allows the FlowBox to dynamically resize if the children grow.

A common mistake is to use `preferredWidth` / `preferredHeight` to size any content that will end up inside a layout
container. These options will get overwritten by a parent with `resizable: true`, which is the default option value for
all FlowBoxes.

A good thing to note is that the content width/height can multiply the width/height of the parent container when
wrapping occurs.

<div id="dimension-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/dimension-example.js"></script>

### justify {: #FlowBox-justify }

`justify` controls how extra space is allocated around cells (after any possible growing has been done).

This closely models the CSS flexbox [
`justify-content`](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-justify-content) property.

The default is `spaceBetween`, which will only place space between cells, not at the start or end (with an even split of
space between every object). This works very well for common layout cases, especially where two items are placed into a
FlowBox, so they will expand to either side of it.

- `left/top` / `right/bottom` simply puts all of the extra space either at the start or the end of the FlowBox.
- `center` puts an even amount of extra space both at the start AND the end of the FlowBox.
- `spaceEvenly` will place the same amount of space at the start, end, and between each object.
- `spaceAround` is as if each object has margins, such that each object gets evenly-split space before and after it.
  Thus the space at the start would be half that of the space between object A and B (since that space is a combined
  margin for both objects).

<div id="justification-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/justification-example.js"></script>

### wrap {: #FlowBox-wrap }

`wrap` will shift content that doesn't fit the preferred size into new rows/columns (try resizing it to be less wide):

<div id="wrap-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/wrap-example.js"></script>

### align {: #FlowBox-align }

`align` controls how cells are positioned along the secondary axis:

<div id="align-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/align-example.js"></script>

For horizontal boxes, the values are: `'left', 'right', 'center', 'origin'`. For vertical boxes, the values are:
`'top', 'bottom', 'center', 'origin'`.
See [LayoutAlign](https://github.com/phetsims/scenery/blob/main/js/layout/LayoutAlign.ts) for more details.

For the `'origin'` align, it is useful to note that the origin is at the top-left of the rectangles, at the center of
circles, and at the left of the baseline of text. For the above example of an HBox, the align will control the vertical
positioning of Nodes, and thus will only care about the Y component of the origin. It places the origin of all of the
Nodes at the same Y value (top of rectangles, center of circles, baseline of text).

### justifyLines {: #FlowBox-justifyLines }

`justifyLines` controls how lines are positioned along the secondary axis (null will default to a stretch):

<div id="justifyLines-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/justifyLines-example.js"></script>

### spacing {: #FlowBox-spacing }

`spacing` controls extra space that can be added between cells:

<div id="spacing-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/spacing-example.js"></script>

### lineSpacing {: #FlowBox-lineSpacing }

`lineSpacing` adds space between rows/columns, which applies when wrapped:

<div id="lineSpacing-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/lineSpacing-example.js"></script>

### Margins {: #FlowBox-margins }

Margins can also be added to every cell (`margin` affects all 4 sides, `xMargin` affects left/right, `yMargin` affects
top/bottom):

<div id="margin-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/margin-example.js"></script>

### Per-cell layout options

Margins can also be applied to individual cells:

<div id="marginCell-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/marginCell-example.js"></script>

Similarly, alignment can also be customized by individual cells:

<div id="alignCell-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/alignCell-example.js"></script>

These options use the default on the container, but can be overridden by cells:

<div id="override-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/override-example.js"></script>

### Separators {: #FlowBox-separators }

Separators are also available for ease of use (separators at the visible start/end, and duplicates will be marked as
`visible: false`, while all other separators will be marked as `visible: true`):

<div id="separators-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/separators-example.js"></script>

Additionally, arbitrary nodes can be made to act like separators by passing `isSeparator: true` in its `layoutOptions`.

## GridBox {: #GridBox }

A GridBox is a layout container that lays out its children in a grid. It has numbered rows and columns (both starting at
zero), which define cells where nodes can be placed. Most layout options are available in either the horizontal or
vertical direction and can be specified for each cell.

### Cell coordinates {: #GridBox-layoutOptions-location }

Can be constructed with absolute coordinates (which can include gaps):

<div id="absolute-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/absolute-example.js"></script>

The **x** value indicates the column (starting at index 0), and the **y** value indicates the row (starting at index 0).

**NOTE**: Skipped rows/columns will be collapsed and won't apply (except for any spacing added):

<div id="skip-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/skip-example.js"></script>

### rows {: #GridBox-rows }

Grids can be constructed by specifying all the children in rows (`null` for gaps):

<div id="rows-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/rows-example.js"></script>

### columns {: #GridBox-columns }

or with columns:

<div id="columns-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/columns-example.js"></script>

### autoRows/autoColumns {: #GridBox-autoLines }

Additionally, if a certain number of rows/columns are desired, `autoRows` / `autoColumns` can be used to wrap and
position the children based on this (auto-filling all spaces).

<div id="autoColumns-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/autoColumns-example.js"></script>

<div id="autoRows-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/autoRows-example.js"></script>

### addRow/addColumn {: #GridBox-addLine }

Rows and columns can also be added dynamically in a similar way (rows will be below all current content, columns will be to the right of all current content):

<div id="addLines-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/addLines-example.js"></script>

### insertRow/insertColumn {: #GridBox-insertLine }

Rows and columns can also be directly inserted by index:

<div id="insertLines-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/insertLines-example.js"></script>

### removeRow/removeColumn {: #GridBox-removeLine }

Or removed by index:

<div id="deleteLines-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/deleteLines-example.js"></script>

### line/cell getters {: #GridBox-getters }

Assorted operations can get the row/column of a child Node, or get all of the Nodes contained within a specific row or column:

<div id="findCell-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/findCell-example.js"></script>

<div id="getLines-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/getLines-example.js"></script>

### grow {: #GridBox-grow }

Grids by default don't auto-expand all rows/columns in size to the preferred size, but they can with a similar style to FlowBox, where `grow` applies to both the x and y dimensions:

<div id="grow-grid-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/grow-grid-example.js"></script>

This space can be grown in specified rows/columns only (and independently) with `xGrow` or `yGrow`:

<div id="grow-2-grid-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/grow-2-grid-example.js"></script>

### stretch {: #GridBox-stretch }

Use `stretch` (or `xStretch` / `yStretch`) to grow a cell dynamically with the preferred dimensions to match the
row/column. `stretch` must be paired with a `grow` value to be activated.

<div id="preferred-grid-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/preferred-grid-example.js"></script>

### sizable {: #GridBox-sizable }

Additionally, `widthSizable` / `heightSizable` can be used to turn off resizing in a component (particularly useful if
you want to set a `preferredWidth`/`preferredHeight` on it that won't change):

In the example below, the rectangle is made to be sizable only for its height. It will have a fixed width, but the
height will stretch to take up that of its cell.

Additionally, if you do not want a child of a GridBox to grow in size at all, you can set `sizable: false` on it.

<div id="gridResizable-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/gridResizable-example.js"></script>

### align {: #GridBox-align }

Cells can be aligned in a similar way to FlowBox, but in both dimensions:

<div id="align-grid-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/align-grid-example.js"></script>

### horizontalSpan / verticalSpan {: #GridBox-layoutOptions-size }

Cells can take up more than one row/column with the `horizontalSpan` / `verticalSpan` layout options.

Each of these default to 1, meaning:

- `horizontalSpan` of 1 means "this cell takes up one column."
- `verticalSpan` of 1 means "this cell takes up one row."

However, one or both values can be increased, and thus will take up multiple rows or columns, e.g.:

- `horizontalSpan` of 2 means "this cell takes up two columns," thus it will fill two "spots" in the grid, and the
  actual cell will span across both columns. In the example below, the second (blue-green) rectangle (in the upper
  right) does this. It effectively takes up both the `column:1, row:0` and `column:2, row:0` spots.
- `horizontalSpan` *and* `verticalSpan` of 2 means "this cell takes up two columns AND two rows." An example is the
  third rectangle in the below example (blue), which effectively takes up the spots `column:0, row:1`,
  `column:1, row:1`, `column:0, row:2`, and `column:1, row:2`.

The content within these larger cells will use the rectangle that spans all of the rows and columns for layout.

<div id="span-grid-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/span-grid-example.js"></script>

### spacing {: #GridBox-spacing }

Grids can have consistent internal spacing:

<div id="grid-spacing-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/grid-spacing-example.js"></script>

Grids can have different spacing on each dimension:

<div id="grid-2-spacing-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/grid-2-spacing-example.js"></script>

Grids can have custom arrays adjusting the spacing between every single row/column:

<div id="grid-3-spacing-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/grid-3-spacing-example.js"></script>

### Margins {: #GridBox-margins }

Similar to FlowBox, grids can have margins applied to all elements:

<div id="margin-1-spacing-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/margin-1-spacing-example.js"></script>

Or can have margins specified on individual elements:

<div id="margin-2-spacing-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/margin-2-spacing-example.js"></script>

## layoutOrigin {: #layoutOrigin }

FlowBox/GridBox will typically lay out content so that the origin (0,0) of the FlowBox/GridBox is at the upper-left.
There are some exceptions to this.

The default behavior:

<div id="defaultOrigin-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/defaultOrigin-example.js"></script>

When using `align: origin`, the Y-origin of the entire FlowBox will be at the Y-origin of the first wrapped line of
Nodes.

**NOTE**: The origin of the Circle nodes below is at the center of the Circle. The origin of the Text nodes below (
created by `bigText`/`normalText`) is the left end of the baseline of the text (since the word "Text" doesn't have
any [descenders](https://en.wikipedia.org/wiki/Descender), this will be at the bottom).

<div id="flowOrigin-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/flowOrigin-example.js"></script>

When using `align: origin`, the origin of the entire GridBox will be at the origin of the first cell:

<div id="gridOrigin-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/gridOrigin-example.js"></script>

The position of this origin can be shifted by using `layoutOrigin`.

<div id="layoutOrigin-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/layoutOrigin-example.js"></script>

## AlignBox {: #AlignBox }

### alignBounds {: #AlignBox-alignBounds }

AlignBox on its own will position content within a specific bounding box (its `alignBounds`):

<div id="simpleAlignBox-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/simpleAlignBox-example.js"></script>

### Alignment {: #AlignBox-alignment }

Content can be aligned within this:

<div id="alignBoxAlign-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/alignBoxAlign-example.js"></script>

### Margins {: #AlignBox-margins }

And margins can be specified on each side:

<div id="alignBoxMargins-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/alignBoxMargins-example.js"></script>

Margins can also be used on their own (without `alignBounds` / `align`) to just create a Node with larger bounds:

<div id="alignBoxOnlyMargins-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/alignBoxOnlyMargins-example.js"></script>

AlignBox can also be used with preferred dimensions instead of an explicit `alignBounds`:

<div id="alignBoxPreferred-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/alignBoxPreferred-example.js"></script>

and can be dynamically resizable (off by default because it's usually not used for that purpose in legacy code):

<div id="alignBoxSizable-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/alignBoxSizable-example.js"></script>

### AlignGroup {: #AlignGroup }

It is often the case where you want to wrap a bunch of different Nodes in AlignBoxes, such that they all have the same
bounds (e.g., a set of icons for buttons that you want to be the same size, or need to align things on top of each other
and toggle visibility).

AlignGroup handles this with ease. Once you have an AlignGroup, AlignBoxes can be created with
`alignGroup.createBox(content, options)`. This has the full power of the AlignBox API, however, the AlignGroup controls
the bounds of the boxes, so that their widths and heights are all the same.

<div id="alignGroup-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/alignGroup-example.js"></script>

It is possible to create an AlignGroup which only matches the width OR height (not both), by constructing with
`matchHorizontal: false` or `matchVertical: false`. In this case, each AlignBox will use its own Node's width or
height (for the dimension that is not matched). The below example shows this with `matchHorizontal: false`.

<div id="alignGroup-example2" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/alignGroup-example2.js"></script>

## Constraint {: #Constraint }

**NOTE**: Constraints are lower-level, and besides ManualConstraint will likely not be needed in most cases.

Constraints are the foundational layer that handles layout logic for Scenery elements. If you search through the PhET
codebase, you can find constraints such as: `ButtonConstraint`, `CarouselConstraint`, `SliderConstraint`, and many more.
All of these constraints extend `LayoutConstraint`, and importantly, override the method `layout`. It’s important to
understand that the motor of the layout logic is housed in a constraint, not only for debugging, but also to empower
developers to use existing constraints or create their own constraints as needed.

In general, try not to place a Node in multiple layout containers, as this can lead to unexpected behavior (might
trigger infinite loops when the layout constraints fight back-and-forth with where a Node should be placed). It will
generally be detected (in the case of FlowBox/GridBox) and will trigger an eager error.

### ManualConstraint {: #ManualConstraint }

Sometimes more fine-grained control is needed over the layout of Nodes than what is provided by the built-in layout
containers.

ManualConstraint is for hooking up imperative-style layout code (e.g., `someNode.left = otherNode.right`) so that it
correctly auto-updates whenever one of those values may have changed. It also works across different Node parents and
coordinate frames. A good indication that ManualConstraint may be useful is when a developer is linking to multiple
`BoundsProperty`, or connecting view positions for elements in different coordinate frames.

Some layout examples where ManualConstraint is particularly useful:

- Aligning nodes in a single dimension, especially when the nodes are in different coordinate frames.
- Custom layout logic that is not easily expressed with the built-in layout containers.

It will also robustly handle cases where the Nodes are not connected (and will not run the layout), so the constraint
can be created before all of the Node structure is finalized.

Children are dynamically added/removed in this demo, and `child1` is constantly translated.

<div id="manualConstraint-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/manualConstraint-example.js"></script>

### FlowConstraint {: #FlowConstraint }

Want to use a FlowBox (HBox/VBox), but the nodes don't have the same parent? Use FlowConstraint. It is the layout
constraint used by FlowBox.

Example of using FlowBox-like layout with disconnected Nodes that share some ancestor (with qualities similar to
ManualConstraint):

<div id="flowConstraint-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/flowConstraint-example.js"></script>

### GridConstraint {: #GridConstraint }

Want to use a GridBox, but the nodes don't have the same parent? Use GridConstraint. It is the layout constraint used by GridBox.

Example of using GridBox-like layout with disconnected Nodes that share some ancestor (with qualities similar to ManualConstraint):

<div id="gridConstraint-example" class="sandbox-example"></div>
<script type="module" async src="/js/scenery-layout/gridConstraint-example.js"></script>