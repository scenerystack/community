# VBox

## Overview

VBox is a convenience specialization of FlowBox with vertical orientation.

@author Sam Reid (PhET Interactive Simulations)

## Class VBox {: #VBox }


```js
import { VBox } from 'scenerystack/scenery';
```
### Constructor

#### new VBox( providedOptions? : <span style="font-weight: 400;">[VBoxOptions](../scenery/VBox.md#VBoxOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### onFlowBoxChildInserted( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #onFlowBoxChildInserted data-toc-label='onFlowBoxChildInserted' }

(protected)

#### mutate( options? : <span style="font-weight: 400;">[VBoxOptions](../scenery/VBox.md#VBoxOptions)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #mutate data-toc-label='mutate' }



## Type VBoxOptions {: #VBoxOptions }


```js
import type { VBoxOptions } from 'scenerystack/scenery';
```
StrictOmit&lt;[FlowBoxOptions](../scenery/FlowBox.md#FlowBoxOptions), "orientation"&gt;



## Source Code

See the source for [VBox.ts](https://github.com/phetsims/scenery/blob/main/js/layout/nodes/VBox.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
