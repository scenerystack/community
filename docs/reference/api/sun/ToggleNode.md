# ToggleNode

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/sun/blob/main/js/ToggleNode.ts](https://github.com/phetsims/sun/blob/main/js/ToggleNode.ts) for the most up-to-date information.

## Overview

Display one of N nodes based on a given Property. See the option "unselectedChildrenSceneGraphStrategy" for different
child management strategies and how they impact the overall bounds and performance.
Supports null and undefined as possible values.  Will not work correctly if the children are changed externally
after instantiation (manages its own children and their visibility).

@author Sam Reid (PhET Interactive Simulations)

## Class ToggleNode {: #ToggleNode }


```js
import { ToggleNode } from 'scenerystack/sun';
```
### Constructor

#### new ToggleNode( valueProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;T&gt;</span>, elements : <span style="font-weight: 400;">[ToggleNodeElement](../sun/ToggleNode.md#ToggleNodeElement)&lt;T, N&gt;[]</span>, providedOptions? : <span style="font-weight: 400;">[ToggleNodeOptions](../sun/ToggleNode.md#ToggleNodeOptions)</span> ) {: #ToggleNode-constructor data-toc-label='new ToggleNode' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### nodes : <span style="font-weight: 400;">N[]</span> {: #nodes data-toc-label='nodes' }

(readonly)

### Static Methods

#### CENTER( children : <span style="font-weight: 400;">[Layoutable](../scenery/LayoutProxy.md#Layoutable)[]</span> ) {: #CENTER data-toc-label='CENTER' }

A value for the alignChildren option.
Centers the latter nodes on the x,y center of the first node.

#### CENTER_X( children : <span style="font-weight: 400;">[Layoutable](../scenery/LayoutProxy.md#Layoutable)[]</span> ) {: #CENTER_X data-toc-label='CENTER_X' }

A value for the alignChildren option.
Centers the latter nodes on the x center of the first node.

#### CENTER_Y( children : <span style="font-weight: 400;">[Layoutable](../scenery/LayoutProxy.md#Layoutable)[]</span> ) {: #CENTER_Y data-toc-label='CENTER_Y' }

A value for the alignChildren option.
Centers the latter nodes on the y center of the first node.

#### LEFT( children : <span style="font-weight: 400;">[Layoutable](../scenery/LayoutProxy.md#Layoutable)[]</span> ) {: #LEFT data-toc-label='LEFT' }

A value for the alignChildren option.
Left aligns nodes on the left of the first node.

#### BOTTOM( children : <span style="font-weight: 400;">[Layoutable](../scenery/LayoutProxy.md#Layoutable)[]</span> ) {: #BOTTOM data-toc-label='BOTTOM' }

A value for the alignChildren option.
Aligns nodes on the bottom of the first node.

#### CENTER_BOTTOM( children : <span style="font-weight: 400;">[Layoutable](../scenery/LayoutProxy.md#Layoutable)[]</span> ) {: #CENTER_BOTTOM data-toc-label='CENTER_BOTTOM' }

A value for the alignChildren option.
Aligns nodes on the bottom of the first node.

#### RIGHT( children : <span style="font-weight: 400;">[Layoutable](../scenery/LayoutProxy.md#Layoutable)[]</span> ) {: #RIGHT data-toc-label='RIGHT' }

A value for the alignChildren option.
Right aligns nodes on the right of the first node.

#### NONE( children : <span style="font-weight: 400;">[Layoutable](../scenery/LayoutProxy.md#Layoutable)[]</span> ) {: #NONE data-toc-label='NONE' }

A value for the alignChildren option.
No alignment is performed.



## Type ToggleNodeElement {: #ToggleNodeElement }


```js
import type { ToggleNodeElement } from 'scenerystack/sun';
```


- **value**: T
- &amp; [GroupItemOptions](../sun/GroupItemOptions.md)&lt;N&gt;




## Type ToggleNodeOptions {: #ToggleNodeOptions }


```js
import type { ToggleNodeOptions } from 'scenerystack/sun';
```


- **alignChildren**?: ( children: [Layoutable](../scenery/LayoutProxy.md#Layoutable)[] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
<br>  {function} determines the relative layout of element Nodes. See below for pre-defined layout.
- **unselectedChildrenSceneGraphStrategy**?: "included" | "excluded"
<br>  Determine whether unselected children (the ones not displayed) are in the scene graph.
  - If included (the default), unselected children are in the scene graph and hidden via setVisible(false). In this case
    the layout is the union of the bounds of all children (visible and invisible).
  - If excluded, children are added to the scene graph when selected and removed when not selected. The ToggleNode has
  the bounds of its selected child. This option can sometimes improve performance. Children added to the ToggleNode
  outside the constructor will not be managed correctly.
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "children"&gt;




## Source Code

See the source for [ToggleNode.ts](https://github.com/phetsims/sun/blob/main/js/ToggleNode.ts) in the [sun](https://github.com/phetsims/sun) repository.
