# PageControl

## Overview

An iOS-style page control. See the 'Navigation' section of the iOS Human Interface Guidelines.
A page control indicates the number of pages and which one is currently visible.

@author Chris Malley (PixelZoom, Inc.)

## Class PageControl {: #PageControl }


```js
import { PageControl } from 'scenerystack/sun';
```
### Constructor

#### new PageControl( pageNumberProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, numberOfPagesProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[PageControlOptions](../sun/PageControl.md#PageControlOptions)</span> ) {: #PageControl-constructor data-toc-label='new PageControl' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type PageControlOptions {: #PageControlOptions }


```js
import type { PageControlOptions } from 'scenerystack/sun';
```


- **interactive**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **orientation**?: [LayoutOrientation](../scenery/LayoutOrientation.md)
- **dotRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **lineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **dotSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **dotTouchAreaDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **dotMouseAreaDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **currentPageFill**?: [TPaint](../scenery/TPaint.md)
<br>  dots representing the current page
- **currentPageStroke**?: [TPaint](../scenery/TPaint.md)
- **pageFill**?: [TPaint](../scenery/TPaint.md)
<br>  dots representing all pages except the current page
- **pageStroke**?: [TPaint](../scenery/TPaint.md)
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "children"&gt;




## Source Code

See the source for [PageControl.ts](https://github.com/phetsims/sun/blob/main/js/PageControl.ts) in the [sun](https://github.com/phetsims/sun) repository.
