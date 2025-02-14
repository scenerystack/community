# FlowCell

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/layout/constraints/FlowCell.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/FlowCell.ts) for the most up-to-date information.

## Overview

A configurable cell containing a Node used for FlowConstraint layout

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class FlowCell {: #FlowCell }


```js
import { FlowCell } from 'scenerystack/scenery';
```
### Constructor

#### new FlowCell( constraint : <span style="font-weight: 400;">[FlowConstraint](../scenery/FlowConstraint.md)</span>, node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, proxy : <span style="font-weight: 400;">[LayoutProxy](../scenery/LayoutProxy.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #FlowCell-constructor data-toc-label='new FlowCell' }

### Instance Methods

#### onLayoutOptionsChange( isInitial ) {: #onLayoutOptionsChange data-toc-label='onLayoutOptionsChange' }

(protected)



## Type FlowCellOptions {: #FlowCellOptions }


```js
import type { FlowCellOptions } from 'scenerystack/scenery';
```


- **isSeparator**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Allows marking a cell as a "separator", such that multiple adjacent separators (and those at the start/end) get
  collapsed (all but the first are not included in layout AND made invisible)
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[ExternalFlowConfigurableOptions](../scenery/FlowConfigurable.md#ExternalFlowConfigurableOptions), "orientation"&gt;




## Source Code

See the source for [FlowCell.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/FlowCell.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
