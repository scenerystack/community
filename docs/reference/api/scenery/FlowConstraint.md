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

#### new FlowConstraint( ancestorNode : <span style="font-weight: 400; opacity: 80%;">Node</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">FlowConstraintOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### layout() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #layout data-toc-label='layout' }

(protected)

#### insertCell( index : <span style="font-weight: 400; opacity: 80%;">number</span>, cell : <span style="font-weight: 400; opacity: 80%;">FlowCell</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #insertCell data-toc-label='insertCell' }

#### removeCell( cell : <span style="font-weight: 400; opacity: 80%;">FlowCell</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #removeCell data-toc-label='removeCell' }

#### reorderCells( cells : <span style="font-weight: 400; opacity: 80%;">FlowCell[]</span>, minChangeIndex : <span style="font-weight: 400; opacity: 80%;">number</span>, maxChangeIndex : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #reorderCells data-toc-label='reorderCells' }

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

Releases references

### Static Methods

#### create( ancestorNode : <span style="font-weight: 400; opacity: 80%;">Node</span>, options? : <span style="font-weight: 400; opacity: 80%;">FlowConstraintOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">FlowConstraint</span> {: #create data-toc-label='create' }



## Source Code

See the source for [FlowConstraint.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/FlowConstraint.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
