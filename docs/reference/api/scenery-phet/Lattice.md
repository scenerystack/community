# Lattice

## Overview

The lattice is a 2D grid with a value in each cell that represents the wave amplitude at that point.

@author Sam Reid (PhET Interactive Simulations)

## Class Lattice {: #Lattice }


```js
import { Lattice } from 'scenerystack/scenery-phet';
```
### Constructor

#### new Lattice( width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, dampX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, dampY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #Lattice-constructor data-toc-label='new Lattice' }

### Instance Methods

#### getBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getBounds data-toc-label='getBounds' }

Gets a Bounds2 representing the full region of the lattice, including damping regions.

#### visibleBoundsContains( i : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, j : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #visibleBoundsContains data-toc-label='visibleBoundsContains' }

Returns true if the visible bounds contains the lattice coordinate
@param i - integer for the horizontal coordinate
@param j - integer for the vertical coordinate

#### contains( i : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, j : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #contains data-toc-label='contains' }

Returns true if the given coordinate is within the lattice
@param i - integer for the horizontal coordinate
@param j - integer for the vertical coordinate

#### getCenterLineValues( array : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> ) {: #getCenterLineValues data-toc-label='getCenterLineValues' }

Read the values on the center line of the lattice (omits the out-of-bounds damping regions), for display in the
WaveAreaGraphNode
@param array - array to fill with the values for performance/memory, will be resized if necessary

#### getCurrentValue( i : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, j : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getCurrentValue data-toc-label='getCurrentValue' }

Returns the current value in the given cell, masked by the allowedMask.
@param i - horizontal integer coordinate
@param j - vertical integer coordinate

#### getInterpolatedValue( i : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, j : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getInterpolatedValue data-toc-label='getInterpolatedValue' }

Returns the interpolated value of the given cell, masked by the allowedMask.
@param i - horizontal integer coordinate
@param j - vertical integer coordinate

#### setCurrentValue( i : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, j : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setCurrentValue data-toc-label='setCurrentValue' }

Sets the current value in the given cell
@param i - horizontal integer coordinate
@param j - vertical integer coordinate
@param value

#### setLastValue( i : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, j : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setLastValue data-toc-label='setLastValue' }

Sets the previous value in the given cell
@param i - horizontal integer coordinate
@param j - vertical integer coordinate
@param value

#### setAllowed( i : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, j : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, allowed : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setAllowed data-toc-label='setAllowed' }

In order to prevent numerical artifacts in the point source scenes, we use TemporalMask to identify which cells
have a value because of the source oscillation.
@param i
@param j
@param allowed - true if the temporal mask indicates that the value could have been caused by sources

#### hasCellBeenVisited( i : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, j : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasCellBeenVisited data-toc-label='hasCellBeenVisited' }

Determines whether the incoming wave has reached the cell.
@param i - horizontal coordinate to check
@param j - vertical coordinate to check

#### clear() {: #clear data-toc-label='clear' }

Resets all of the wave values to 0.

#### clearRight( column : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #clearRight data-toc-label='clearRight' }

Clear everything at and to the right of the specified column.
@param column - integer index of the column to start clearing at.

#### getOutputColumn() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #getOutputColumn data-toc-label='getOutputColumn' }

Gets the values on the right hand side of the wave (before the damping region), for determining intensity.

#### step() {: #step data-toc-label='step' }

Propagates the wave by one step.  This is a discrete algorithm and cannot use dt.

### Instance Properties

#### changedEmitter : <span style="font-weight: 400;">[Emitter](../axon/Emitter.md)</span> {: #changedEmitter data-toc-label='changedEmitter' }

(readonly)

sends a notification each time the lattice updates.

#### interpolationRatio {: #interpolationRatio data-toc-label='interpolationRatio' }

Determines how far we have animated between the "last" and "current" matrices, so that we
can use getInterpolatedValue to update the view at 60fps even though the model is running at a slower rate.
See EventTimer.getRatio for more about this value.

#### visibleBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #visibleBounds data-toc-label='visibleBounds' }

(readonly)

a Bounds2 representing the visible (non-damping) region of the lattice.

### Static Properties

#### WAVE_SPEED {: #WAVE_SPEED data-toc-label='WAVE_SPEED' }

(readonly)



## Source Code

See the source for [Lattice.ts](https://github.com/phetsims/scenery-phet/blob/main/js/Lattice.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
