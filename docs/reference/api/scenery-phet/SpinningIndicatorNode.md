# SpinningIndicatorNode

## Overview

SpinningIndicatorNode is a spinning progress indicator, used to indicate operation is in progress (but with no
indication of how far along it is).  It spins in a circular clockwise pattern.

The actual rectangles/circles/etc. (called elements in the documentation) stay in fixed positions, but their fill is
changed to give the impression of rotation.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Chris Malley (PixelZoom, Inc.)

## Class SpinningIndicatorNode {: #SpinningIndicatorNode }


```js
import { SpinningIndicatorNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new SpinningIndicatorNode( providedOptions? : <span style="font-weight: 400;">[SpinningIndicatorNodeOptions](../scenery-phet/SpinningIndicatorNode.md#SpinningIndicatorNodeOptions)</span> ) {: #SpinningIndicatorNode-constructor data-toc-label='new SpinningIndicatorNode' }

### Instance Methods

#### step( dt : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #step data-toc-label='step' }

#### dispose() {: #dispose data-toc-label='dispose' }

### Static Methods

#### rectangleFactory( diameter : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, numberOfElements : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Rectangle](../scenery/Rectangle.md)</span> {: #rectangleFactory data-toc-label='rectangleFactory' }

Factory method for creating rectangle-shaped elements, sized to fit.

#### circleFactory( diameter : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, numberOfElements : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Circle](../scenery/Circle.md)</span> {: #circleFactory data-toc-label='circleFactory' }

Factory method for creating circle-shaped elements, sized to fit.



## Type SpinningIndicatorNodeOptions {: #SpinningIndicatorNodeOptions }


```js
import type { SpinningIndicatorNodeOptions } from 'scenerystack/scenery-phet';
```


- **diameter**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Diameter of the indicator
- **speed**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  A multiplier for how fast/slow the indicator will spin.
- **numberOfElements**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  The number of elements that make up the indicator
- **elementFactory**?: ( diameter: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, numberOfElements: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; [Path](../scenery/Path.md)
<br>  Creates one of the elements (Path) that make up the indicator
- **activeColor**?: [Color](../scenery/Color.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  The active "mostly visible" color at the lead.
- **inactiveColor**?: [Color](../scenery/Color.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  The inactive "mostly invisible" color at the tail.
- &amp; StrictOmit&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "children"&gt;




## Source Code

See the source for [SpinningIndicatorNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/SpinningIndicatorNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
