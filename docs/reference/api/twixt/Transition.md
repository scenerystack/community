# Transition

## Overview

An animation that will animate one object (usually a Node) out, and another in.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Transition {: #Transition }


```js
import { Transition } from 'scenerystack/twixt';
```
### Constructor

#### new Transition( fromNode : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, toNode : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, config : <span style="font-weight: 400;">[TransitionOptions](../twixt/Transition.md#TransitionOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods



### Static Methods

#### slideLeft( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, fromNode : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, toNode : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, options? : <span style="font-weight: 400;">[SlideTransitionOptions](../twixt/Transition.md#SlideTransitionOptions)</span> ) : <span style="font-weight: 400;">[Transition](../twixt/Transition.md)</span> {: #slideLeft data-toc-label='slideLeft' }

Creates an animation that slides the `fromNode` out to the left (and the `toNode` in from the right).

@param bounds
@param fromNode
@param toNode
@param [options] - Usually specify duration, easing, or other Animation options.

#### slideRight( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, fromNode : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, toNode : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, options? : <span style="font-weight: 400;">[SlideTransitionOptions](../twixt/Transition.md#SlideTransitionOptions)</span> ) : <span style="font-weight: 400;">[Transition](../twixt/Transition.md)</span> {: #slideRight data-toc-label='slideRight' }

Creates an animation that slides the `fromNode` out to the right (and the `toNode` in from the left).

@param bounds
@param fromNode
@param toNode
@param [options] - Usually specify duration, easing, or other Animation options.

#### slideUp( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, fromNode : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, toNode : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, options? : <span style="font-weight: 400;">[SlideTransitionOptions](../twixt/Transition.md#SlideTransitionOptions)</span> ) : <span style="font-weight: 400;">[Transition](../twixt/Transition.md)</span> {: #slideUp data-toc-label='slideUp' }

Creates an animation that slides the `fromNode` out to the top (and the `toNode` in from the bottom).

@param bounds
@param fromNode
@param toNode
@param [options] - Usually specify duration, easing, or other Animation options.

#### slideDown( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, fromNode : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, toNode : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, options? : <span style="font-weight: 400;">[SlideTransitionOptions](../twixt/Transition.md#SlideTransitionOptions)</span> ) : <span style="font-weight: 400;">[Transition](../twixt/Transition.md)</span> {: #slideDown data-toc-label='slideDown' }

Creates an animation that slides the `fromNode` out to the bottom (and the `toNode` in from the top).

@param bounds
@param fromNode
@param toNode
@param [options] - Usually specify duration, easing, or other Animation options.

#### wipeLeft( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, fromNode : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, toNode : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, options? : <span style="font-weight: 400;">[WipeTransitionOptions](../twixt/Transition.md#WipeTransitionOptions)</span> ) : <span style="font-weight: 400;">[Transition](../twixt/Transition.md)</span> {: #wipeLeft data-toc-label='wipeLeft' }

Creates a transition that wipes across the screen, moving to the left.

@param bounds
@param fromNode
@param toNode
@param [options] - Usually specify duration, easing, or other Animation options.

#### wipeRight( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, fromNode : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, toNode : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, options? : <span style="font-weight: 400;">[WipeTransitionOptions](../twixt/Transition.md#WipeTransitionOptions)</span> ) : <span style="font-weight: 400;">[Transition](../twixt/Transition.md)</span> {: #wipeRight data-toc-label='wipeRight' }

Creates a transition that wipes across the screen, moving to the right.

@param bounds
@param fromNode
@param toNode
@param [options] - Usually specify duration, easing, or other Animation options.

#### wipeUp( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, fromNode : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, toNode : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, options? : <span style="font-weight: 400;">[WipeTransitionOptions](../twixt/Transition.md#WipeTransitionOptions)</span> ) : <span style="font-weight: 400;">[Transition](../twixt/Transition.md)</span> {: #wipeUp data-toc-label='wipeUp' }

Creates a transition that wipes across the screen, moving up.

@param bounds
@param fromNode
@param toNode
@param [options] - Usually specify duration, easing, or other Animation options.

#### wipeDown( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, fromNode : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, toNode : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, options? : <span style="font-weight: 400;">[WipeTransitionOptions](../twixt/Transition.md#WipeTransitionOptions)</span> ) : <span style="font-weight: 400;">[Transition](../twixt/Transition.md)</span> {: #wipeDown data-toc-label='wipeDown' }

Creates a transition that wipes across the screen, moving down.

@param bounds
@param fromNode
@param toNode
@param [options] - Usually specify duration, easing, or other Animation options.

#### dissolve( fromNode : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, toNode : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, providedOptions? : <span style="font-weight: 400;">[DissolveTransitionOptions](../twixt/Transition.md#DissolveTransitionOptions)</span> ) : <span style="font-weight: 400;">[Transition](../twixt/Transition.md)</span> {: #dissolve data-toc-label='dissolve' }

Creates a transition that fades from `fromNode` to `toNode` by varying the opacity of both.

@param fromNode
@param toNode
@param [providedOptions] - Usually specify duration, easing, or other Animation options.



## Source Code

See the source for [Transition.ts](https://github.com/phetsims/twixt/blob/main/js/Transition.ts) in the [twixt](https://github.com/phetsims/twixt) repository.
