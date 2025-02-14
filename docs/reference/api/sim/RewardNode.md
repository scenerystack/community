# RewardNode

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/vegas/blob/main/js/RewardNode.ts](https://github.com/phetsims/vegas/blob/main/js/RewardNode.ts) for the most up-to-date information.

## Overview

Reward node that shows many nodes animating continuously, for fun!  Shown when a perfect score is achieved in a game.
You can also test this by running vegas/vegas_en.html and clicking on the "Reward" screen.
Note that the number of images falling is constant, so if the screen is stretched out vertically (tall thin window)
they will be less dense.

There are two ways to run the animation step function.  The client code can manually call step(dt), or the client
code can pass in an Events instance that triggers events on 'step'. In the latter case, the listener will
automatically be removed when the animation is complete.

For details about the development of the RewardNode, please see https://github.com/phetsims/vegas/issues/4

@author Sam Reid (PhET Interactive Simulations)

## Class RewardNode {: #RewardNode }


```js
import { RewardNode } from 'scenerystack/sim';
```
### Constructor

#### new RewardNode( providedOptions? : <span style="font-weight: 400;">[RewardNodeOptions](../sim/RewardNode.md#RewardNodeOptions)</span> ) {: #RewardNode-constructor data-toc-label='new RewardNode' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

#### paintCanvas( context : <span style="font-weight: 400;">CanvasRenderingContext2D</span> ) {: #paintCanvas data-toc-label='paintCanvas' }

Paint the rewards on the canvas.

#### step( dt : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #step data-toc-label='step' }

Animates the images.

### Static Methods

#### createRandomNodes( nodes : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span>, count : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span> {: #createRandomNodes data-toc-label='createRandomNodes' }

Convenience factory method to create an array of the specified Nodes in an even distribution.



## Type RewardNodeOptions {: #RewardNodeOptions }


```js
import type { RewardNodeOptions } from 'scenerystack/sim';
```


- **nodes**?: [Node](../scenery/Node.md)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Nodes to appear in the reward node. They will be cached as images to improve performance.
  If null, then default Nodes will be created.
- **scaleForResolution**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Scale things up for rasterization, then back down for rendering, so they have nice quality on retina displays.
- **stepEmitter**?: [TReadOnlyEmitter](../axon/TEmitter.md#TReadOnlyEmitter)&lt;[ <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ]&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  If you pass in a stepEmitter {Emitter}, it will drive the animation
- &amp; [CanvasNodeOptions](../scenery/CanvasNode.md#CanvasNodeOptions)




## Source Code

See the source for [RewardNode.ts](https://github.com/phetsims/vegas/blob/main/js/RewardNode.ts) in the [vegas](https://github.com/phetsims/vegas) repository.
