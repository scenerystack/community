# TransitionNode

## Overview

Holds content, and can transition to other content with a variety of animations. During a transition, there is always
the "from" content that animates out, and the "to" content that animates in.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class TransitionNode {: #TransitionNode }


```js
import { TransitionNode } from 'scenerystack/twixt';
```
### Constructor

#### new TransitionNode( transitionBoundsProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Bounds2](../dot/Bounds2.md)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[TransitionNodeOptions](../twixt/TransitionNode.md#TransitionNodeOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### step( dt : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #step data-toc-label='step' }

Steps forward in time, animating the transition.

#### interrupt() {: #interrupt data-toc-label='interrupt' }

Interrupts the transition, ending it and resetting the animated values.

#### slideLeftTo( content : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, config? : <span style="font-weight: 400;">[SlideTransitionOptions](../twixt/Transition.md#SlideTransitionOptions)</span> ) : <span style="font-weight: 400;">[Transition](../twixt/Transition.md)</span> {: #slideLeftTo data-toc-label='slideLeftTo' }

Start a transition to replace our content with the new content, using Transition.slideLeft.

@param content - If null, the current content will still animate out (with nothing replacing it).
@param config - Passed as config to the Animation. Usually a duration should be included.
@returns - Available to add end listeners, etc.

#### slideRightTo( content : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, config? : <span style="font-weight: 400;">[SlideTransitionOptions](../twixt/Transition.md#SlideTransitionOptions)</span> ) : <span style="font-weight: 400;">[Transition](../twixt/Transition.md)</span> {: #slideRightTo data-toc-label='slideRightTo' }

Start a transition to replace our content with the new content, using Transition.slideRight.

@param content - If null, the current content will still animate out (with nothing replacing it).
@param config - Passed as config to the Animation. Usually a duration should be included.
@returns - Available to add end listeners, etc.

#### slideUpTo( content : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, config? : <span style="font-weight: 400;">[SlideTransitionOptions](../twixt/Transition.md#SlideTransitionOptions)</span> ) : <span style="font-weight: 400;">[Transition](../twixt/Transition.md)</span> {: #slideUpTo data-toc-label='slideUpTo' }

Start a transition to replace our content with the new content, using Transition.slideUp.

@param content - If null, the current content will still animate out (with nothing replacing it).
@param config - Passed as config to the Animation. Usually a duration should be included.
@returns - Available to add end listeners, etc.

#### slideDownTo( content : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, config? : <span style="font-weight: 400;">[SlideTransitionOptions](../twixt/Transition.md#SlideTransitionOptions)</span> ) : <span style="font-weight: 400;">[Transition](../twixt/Transition.md)</span> {: #slideDownTo data-toc-label='slideDownTo' }

Start a transition to replace our content with the new content, using Transition.slideDown.

@param content - If null, the current content will still animate out (with nothing replacing it).
@param config - Passed as config to the Animation. Usually a duration should be included.
@returns - Available to add end listeners, etc.

#### wipeLeftTo( content : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, config? : <span style="font-weight: 400;">[WipeTransitionOptions](../twixt/Transition.md#WipeTransitionOptions)</span> ) : <span style="font-weight: 400;">[Transition](../twixt/Transition.md)</span> {: #wipeLeftTo data-toc-label='wipeLeftTo' }

Start a transition to replace our content with the new content, using Transition.wipeLeft.

@param content - If null, the current content will still animate out (with nothing replacing it).
@param config - Passed as config to the Animation. Usually a duration should be included.
@returns - Available to add end listeners, etc.

#### wipeRightTo( content : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, config? : <span style="font-weight: 400;">[WipeTransitionOptions](../twixt/Transition.md#WipeTransitionOptions)</span> ) : <span style="font-weight: 400;">[Transition](../twixt/Transition.md)</span> {: #wipeRightTo data-toc-label='wipeRightTo' }

Start a transition to replace our content with the new content, using Transition.wipeRight.

@param content - If null, the current content will still animate out (with nothing replacing it).
@param config - Passed as config to the Animation. Usually a duration should be included.
@returns - Available to add end listeners, etc.

#### wipeUpTo( content : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, config? : <span style="font-weight: 400;">[WipeTransitionOptions](../twixt/Transition.md#WipeTransitionOptions)</span> ) : <span style="font-weight: 400;">[Transition](../twixt/Transition.md)</span> {: #wipeUpTo data-toc-label='wipeUpTo' }

Start a transition to replace our content with the new content, using Transition.wipeUp.

@param content - If null, the current content will still animate out (with nothing replacing it).
@param config - Passed as config to the Animation. Usually a duration should be included.
@returns - Available to add end listeners, etc.

#### wipeDownTo( content : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, config? : <span style="font-weight: 400;">[WipeTransitionOptions](../twixt/Transition.md#WipeTransitionOptions)</span> ) : <span style="font-weight: 400;">[Transition](../twixt/Transition.md)</span> {: #wipeDownTo data-toc-label='wipeDownTo' }

Start a transition to replace our content with the new content, using Transition.wipeDown.

@param content - If null, the current content will still animate out (with nothing replacing it).
@param config - Passed as config to the Animation. Usually a duration should be included.
@returns - Available to add end listeners, etc.

#### dissolveTo( content : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, config? : <span style="font-weight: 400;">[DissolveTransitionOptions](../twixt/Transition.md#DissolveTransitionOptions)</span> ) : <span style="font-weight: 400;">[Transition](../twixt/Transition.md)</span> {: #dissolveTo data-toc-label='dissolveTo' }

Start a transition to replace our content with the new content, using Transition.dissolve.

@param content - If null, the current content will still animate out (with nothing replacing it).
@param config - Passed as config to the Animation. Usually a duration should be included.
@returns - Available to add end listeners, etc.

#### dispose() {: #dispose data-toc-label='dispose' }



## Source Code

See the source for [TransitionNode.ts](https://github.com/phetsims/twixt/blob/main/js/TransitionNode.ts) in the [twixt](https://github.com/phetsims/twixt) repository.
