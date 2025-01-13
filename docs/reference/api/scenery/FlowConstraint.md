# FlowConstraint

## Overview

Main flow-layout logic. Usually used indirectly through FlowBox, but can also be used directly (say, if nodes don't
have the same parent, or a FlowBox can't be used).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class FlowConstraint {: #FlowConstraint }


```js
import { FlowConstraint } from 'scenerystack/scenery';
```
### Constructor

#### new FlowConstraint( ancestorNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[FlowConstraintOptions](../scenery/FlowConstraint.md#FlowConstraintOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### layout() {: #layout data-toc-label='layout' }

(protected)

#### insertCell( index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, cell : <span style="font-weight: 400;">[FlowCell](../scenery/FlowCell.md)</span> ) {: #insertCell data-toc-label='insertCell' }

#### removeCell( cell : <span style="font-weight: 400;">[FlowCell](../scenery/FlowCell.md)</span> ) {: #removeCell data-toc-label='removeCell' }

#### reorderCells( cells : <span style="font-weight: 400;">[FlowCell](../scenery/FlowCell.md)[]</span>, minChangeIndex : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxChangeIndex : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #reorderCells data-toc-label='reorderCells' }

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references

### Static Methods

#### create( ancestorNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, options? : <span style="font-weight: 400;">[FlowConstraintOptions](../scenery/FlowConstraint.md#FlowConstraintOptions)</span> ) : <span style="font-weight: 400;">[FlowConstraint](../scenery/FlowConstraint.md)</span> {: #create data-toc-label='create' }



## Source Code

See the source for [FlowConstraint.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/FlowConstraint.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
