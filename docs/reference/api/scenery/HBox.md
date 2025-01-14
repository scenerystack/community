# HBox

## Overview

HBox is a convenience specialization of FlowBox with horizontal orientation.

@author Sam Reid (PhET Interactive Simulations)

## Class HBox {: #HBox }


```js
import { HBox } from 'scenerystack/scenery';
```
### Constructor

#### new HBox( providedOptions? : <span style="font-weight: 400;">[HBoxOptions](../scenery/HBox.md#HBoxOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### onFlowBoxChildInserted( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #onFlowBoxChildInserted data-toc-label='onFlowBoxChildInserted' }

(protected)

#### mutate( options? : <span style="font-weight: 400;">[HBoxOptions](../scenery/HBox.md#HBoxOptions)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #mutate data-toc-label='mutate' }



## Type HBoxOptions {: #HBoxOptions }


```js
import type { HBoxOptions } from 'scenerystack/scenery';
```


StrictOmit&lt;[FlowBoxOptions](../scenery/FlowBox.md#FlowBoxOptions), "orientation"&gt;



## Source Code

See the source for [HBox.ts](https://github.com/phetsims/scenery/blob/main/js/layout/nodes/HBox.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
