# ZoomButtonGroup

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/ZoomButtonGroup.ts](https://github.com/phetsims/scenery-phet/blob/main/js/ZoomButtonGroup.ts) for the most up-to-date information.

## Overview

ZoomButtonGroup is the base class for a pair of buttons used to zoom 'in' and 'out'.

@author Chris Malley (PixelZoom, Inc.)

## Class ZoomButtonGroup {: #ZoomButtonGroup }


```js
import { ZoomButtonGroup } from 'scenerystack/scenery-phet';
```
### Constructor

#### new ZoomButtonGroup( zoomLevelProperty : <span style="font-weight: 400;">[TRangedProperty](../axon/TRangedProperty.md)</span>, zoomInIcon : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, zoomOutIcon : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[ZoomButtonGroupOptions](../scenery-phet/ZoomButtonGroup.md#ZoomButtonGroupOptions)</span> ) {: #ZoomButtonGroup-constructor data-toc-label='new ZoomButtonGroup' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### zoomInButton : <span style="font-weight: 400;">[RectangularPushButton](../sun/RectangularPushButton.md)</span> {: #zoomInButton data-toc-label='zoomInButton' }

(readonly)

#### zoomOutButton : <span style="font-weight: 400;">[RectangularPushButton](../sun/RectangularPushButton.md)</span> {: #zoomOutButton data-toc-label='zoomOutButton' }

(readonly)



## Type ZoomButtonGroupOptions {: #ZoomButtonGroupOptions }


```js
import type { ZoomButtonGroupOptions } from 'scenerystack/scenery-phet';
```


- **applyZoomIn**?: ( currentZoom: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  function applied when the '+' button is pressed
- **applyZoomOut**?: ( currentZoom: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  function applied when the '-' button is pressed
- **buttonOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[RectangularPushButtonOptions](../sun/RectangularPushButton.md#RectangularPushButtonOptions), "content" | "listener" | "tandem"&gt;
<br>  propagated to the '+' and '-' push buttons
- **touchAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  pointer area dilation, correct for options.orientation, and overlap will be prevented by shifting
- **touchAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[FlowBoxOptions](../scenery/FlowBox.md#FlowBoxOptions), "children"&gt;




## Source Code

See the source for [ZoomButtonGroup.ts](https://github.com/phetsims/scenery-phet/blob/main/js/ZoomButtonGroup.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
