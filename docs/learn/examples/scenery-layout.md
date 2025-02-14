--8<-- "api-reference-snippets.md"

# Scenery Layout

These examples demonstrate **common ways** of using **layout containers** in Scenery.  
Before diving into these examples, it is recommended to review the [layout documentation](../scenery-layout.md).  

All code examples here are **editable**—you can modify the code and see the results **immediately**.

---

## Basic Layout

### Panel Alignment

To create a **vertical stack of Panels** that maintain the **same width**, set `stretch: true` either:  
- On the **parent container**, or  
- On the **`layoutOptions`** of each `Panel` individually.

<div class="sandbox-example" data-example="/js/scenery-layout-examples/aligning-panels-example.js"></div>

### Match Button Sizes

`AlignGroup` can be used to **match the sizes** of `Nodes` in a layout.  

To ensure **buttons match the size of the largest button**, use the `align: "stretch"` option on **sizable content** (e.g., buttons).  

<div class="sandbox-example" data-example="/js/scenery-layout-examples/match-button-sizes-example.js"></div>

### Wrap Content

Set `wrap: true` in a `FlowBox` to allow content to **wrap onto the next row or column** when a string or other dynamic element becomes too long.  

This example demonstrates a **legend-style panel** where **label widths dynamically adjust**, causing other entries to wrap accordingly.

<div class="sandbox-example" data-example="/js/scenery-layout-examples/wrap-content-example.js"></div>

### Button Alignment

Buttons can **maintain alignment** even as their content resizes.  

This example uses a `GridBox` with `stretch: true` to align buttons in the **first column**, ensuring that when one button's width changes, the second column remains **unaffected**.

<div class="sandbox-example" data-example="/js/scenery-layout-examples/button-alignment-example.js"></div>

### Resizable Buttons

Buttons can **automatically adjust** to dynamic content width when resized.  

By default, buttons are **`sizable: true`**, allowing them to expand or contract based on their content.

<div class="sandbox-example" data-example="/js/scenery-layout-examples/resizable-buttons-example.js"></div>

## Checkboxes

### Icons

Checkboxes are **`WidthSizable`** and act as containers for their labels.  

For **icons**, you can pass an `HBox` to the label containing two items.  
The **default justification** will expand items to fit the desired bounds.

<div class="sandbox-example" data-example="/js/scenery-layout-examples/checkbox-icon-example.js"></div>

### Indentation

Margins can be used to **indent checkboxes**.

<div class="sandbox-example" data-example="/js/scenery-layout-examples/checkbox-indented-icon-example.js"></div>

## Transforms

Sizable nodes within **layout containers** **can** be transformed in certain ways that are **respected**.  
However, it is generally recommended to **avoid applying transforms** directly to **children of layout containers**, unless necessary.

### Scale

Scale is **maintained and respected** by layout containers.  

- In these cases, the **`preferredWidth`** and **`localPreferredWidth`** of sizable nodes will **differ**, depending on the current transform.  
- In general, **set `preferredWidth` as normal**, regardless of the applied scale.  

<div class="sandbox-example" data-example="/js/scenery-layout-examples/transforms-scale-example.js"></div>

### Reflection

Reflection is **supported** but is **rarely needed**.

<div class="sandbox-example" data-example="/js/scenery-layout-examples/transforms-reflection-example.js"></div>

### Rotation

Rotation is **supported**.

<div class="sandbox-example" data-example="/js/scenery-layout-examples/transforms-rotation-example.js"></div>

## Flow Constraint

### Disconnected Flow

`FlowConstraint` allows a **parent and child** to have **disconnected positions and bounds**.

<div class="sandbox-example" data-example="/js/scenery-layout-examples/disconnected-flow-example.js"></div>

### Flow Stress Test

A **FlowBox** containing **300 rectangles** of random sizes demonstrates **horizontal orientation with wrapping**.  

This stress test shows how the layout **successfully handles various rectangle sizes** while maintaining proper alignment.

<div class="sandbox-example" data-example="/js/scenery-layout-examples/flow-stress-test-example.js"></div>

## Grid Constraint

### Grid Stress Test

A **GridBox** containing **900 rectangles** of random sizes, each placed in its own cell, demonstrates layout performance under stress.  

This test shows how the **grid dynamically adjusts row and column sizes** to accommodate varying rectangle dimensions.

<div class="sandbox-example" data-example="/js/scenery-layout-examples/grid-stress-test-example.js"></div>

## Manual Constraint

### Disconnected Nodes Alignment

A **resizer animation** demonstrates how **Manual Constraint** can link the layout of **two separate nodes**.  

As the `rightText`'s **Y-coordinate changes**, the `leftText` remains **aligned** with its position.

<div class="sandbox-example" data-example="/js/scenery-layout-examples/disconnected-nodes-alignment-example.js"></div>

### Dynamic Centering

This example is inspired by a use case from **Greenhouse Effect**.  

In this simulation, a developer needed a way to **dynamically center a button** within a **play area Observation Window**.  
**Manual Constraint** provided a solution by **triggering a callback** each time the button's bounds changed, ensuring seamless centering based on another node’s layout bounds.

#### Using `ManualConstraint.create`
To set up custom positioning:  
- **First argument** → `ancestorNode` (a common ancestor for all nodes involved).  
- **Second argument** → An **array of nodes** that should trigger or be manipulated by the constraint.  
- **Third argument** → A **callback function** that executes whenever the bounds of the specified nodes change.

<div class="sandbox-example" data-example="/js/scenery-layout-examples/dynamic-centering-example.js"></div>

### Dynamic Labels

This example is based on a use case from **Density**.  

In this simulation, an **arrow** indicates where a cube lands on the **density spectrum**.  
To enhance clarity, a **label** must accompany the arrow, dynamically adjusting based on its position.

Using **`ManualConstraint.create`**, developers can **link two separate nodes**, ensuring that when one node's **X or Y position** changes, the other **updates accordingly**.

<div class="sandbox-example" data-example="/js/scenery-layout-examples/dynamic-labels-example.js"></div>

## Align Group

### Cross Screen Alignment

In **PhET simulations**, it is common for panels to **span multiple screens**.  

While these panels may contain **different content**, a design standard ensures that their **width and height remain consistent** across screens.  

This example demonstrates how `AlignGroup` simplifies this process with minimal effort from the developer.  

💡 *Imagine each panel is located on a different screen, and observe how their widths and heights remain synchronized.*

<div class="sandbox-example" data-example="/js/scenery-layout-examples/cross-screen-alignment-example.js"></div>

## Origin

*(As seen in Fractions LabScreen.)*  

### Origin Orientation

Demonstrates the **orientation feature** for alignment in **Flow** and **Grid** layouts.  

When **`origin`** is used for alignment:
- All nodes are placed so that their **x = 0** or **y = 0** positions align along the same **vertical or horizontal line**.

<div class="sandbox-example" data-example="/js/scenery-layout-examples/origin-example.js"></div>

## Separators

### Disappearing Node

This example demonstrates how **separators dynamically adjust** when content is **added or removed** in a panel.

<div class="sandbox-example" data-example="/js/scenery-layout-examples/disappearing-node-example.js"></div>