# NavigationBar

## Overview

The navigation bar at the bottom of the screen.
For a single-screen sim, it shows the name of the sim at the far left and the PhET button at the far right.
For a multi-screen sim, it additionally shows buttons for each screen, and a home button.

Layout of NavigationBar adapts to different text widths, icon widths, and numbers of screens, and attempts to
perform an "optimal" layout. The sim title is initially constrained to a max percentage of the bar width,
and that's used to compute how much space is available for screen buttons.  After creation and layout of the
screen buttons, we then compute how much space is actually available for the sim title, and use that to
constrain the title's width.

The bar is composed of a background (always pixel-perfect), and expandable content (that gets scaled as one part).
If we are width-constrained, the navigation bar is in a 'compact' state where the children of the content (e.g.
home button, screen buttons, phet menu, title) do not change positions. If we are height-constrained, the amount
available to the bar expands, so we lay out the children to fit. See https://github.com/phetsims/joist/issues/283
for more details on how this is done.

@author Sam Reid (PhET Interactive Simulations)
@author Chris Malley (PixelZoom, Inc.)
@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Chris Klusendorf (PhET Interactive Simulations)

## Class NavigationBar {: #NavigationBar }


```js
import { NavigationBar } from 'scenerystack/sim';
```
### Constructor

#### new NavigationBar( sim : <span style="font-weight: 400;">[Sim](../sim/Sim.md)</span>, tandem : <span style="font-weight: 400;">[Tandem](../tandem/Tandem.md)</span> ) {: #NavigationBar-constructor data-toc-label='new NavigationBar' }

### Instance Methods

#### layout( scale : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #layout data-toc-label='layout' }

Called when the navigation bar layout needs to be updated, typically when the browser self is resized.

### Static Properties

#### NAVIGATION_BAR_SIZE {: #NAVIGATION_BAR_SIZE data-toc-label='NAVIGATION_BAR_SIZE' }

(readonly)



## Source Code

See the source for [NavigationBar.ts](https://github.com/phetsims/joist/blob/main/js/NavigationBar.ts) in the [joist](https://github.com/phetsims/joist) repository.
