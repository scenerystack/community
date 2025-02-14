# Picker

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/util/Picker.ts](https://github.com/phetsims/scenery/blob/main/js/util/Picker.ts) for the most up-to-date information.

## Overview

Sub-component of a Node that handles pickability and hit testing.

A "listener equivalent" is either the existence of at least one input listener, or pickable:true. Nodes with
listener equivalents will basically try to hit-test ALL descendants that aren't invisible or pickable:false.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Picker {: #Picker }


```js
import { Picker } from 'scenerystack/scenery';
```
### Constructor

#### new Picker( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) {: #Picker-constructor data-toc-label='new Picker' }

### Instance Methods

#### hitTest( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, useMouse : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, useTouch : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;">[Trail](../scenery/Trail.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #hitTest data-toc-label='hitTest' }

Return a trail to the top node (if any, otherwise null) whose self-rendered area contains the
point (in parent coordinates).

@param point
@param useMouse - Whether mouse-specific customizations (and acceleration) applies
@param useTouch - Whether touch-specific customizations (and acceleration) applies

#### isPotentiallyPickable() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isPotentiallyPickable data-toc-label='isPotentiallyPickable' }

Returns whether our node is potentially pickable from its parents (i.e. whether it could be hit-tested and sent
input events, and thus whether its input listeners are relevant and could be interrupted).



## Source Code

See the source for [Picker.ts](https://github.com/phetsims/scenery/blob/main/js/util/Picker.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
