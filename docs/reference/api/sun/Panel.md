# Panel

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/sun/blob/main/js/Panel.ts](https://github.com/phetsims/sun/blob/main/js/Panel.ts) for the most up-to-date information.

## Overview

Control panel around a content node.
Dynamically adjusts its size to fit its contents.

@author Sam Reid (PhET Interactive Simulations)
@author Chris Malley (PixelZoom, Inc.)
@author John Blanco (PhET Interactive Simulations)

## Class Panel {: #Panel }


```js
import { Panel } from 'scenerystack/sun';
```
### Constructor

#### new Panel( content : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[PanelOptions](../sun/Panel.md#PanelOptions)</span> ) {: #Panel-constructor data-toc-label='new Panel' }

### Instance Methods

#### getStroke() : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> {: #getStroke data-toc-label='getStroke' }

Get the background rectangle's stroke (can be overridden)

#### setStroke( stroke : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> ) {: #setStroke data-toc-label='setStroke' }

Change the background rectangle's stroke (can be overridden)

#### getFill() : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> {: #getFill data-toc-label='getFill' }

Get the background rectangle's fill (can be overridden)

#### setFill( fill : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> ) {: #setFill data-toc-label='setFill' }

Change the background rectangle's fill (can be overridden)

#### setExcludeInvisibleChildrenFromBounds( excludeInvisibleChildrenFromBounds : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setExcludeInvisibleChildrenFromBounds data-toc-label='setExcludeInvisibleChildrenFromBounds' }

### Static Properties

#### DEFAULT_PANEL_OPTIONS {: #DEFAULT_PANEL_OPTIONS data-toc-label='DEFAULT_PANEL_OPTIONS' }

(readonly)



## Type PanelAlign {: #PanelAlign }


```js
import type { PanelAlign } from 'scenerystack/sun';
```


"left" | "center" | "right"



## Type PanelOptions {: #PanelOptions }


```js
import type { PanelOptions } from 'scenerystack/sun';
```


- **fill**?: [TPaint](../scenery/TPaint.md)
- **stroke**?: [TPaint](../scenery/TPaint.md)
- **lineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  width of the background border
- **lineDash**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **xMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **yMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **cornerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  radius of the rounded corners on the background
- **resize**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  dynamically resize when content bounds change
- **backgroundPickable**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **align**?: [PanelAlign](../sun/Panel.md#PanelAlign)
<br>  horizontal alignment of content in the pane, see ALIGN_VALUES
  All alignments are equal when the content width &gt;= minWidth
  Left is the default alignment so when there are multiple panels, their content will left align, see #252
- **minWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  minimum width of the panel (lineWidth will add to this)
- **minHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; [SizableOptions](../scenery/Sizable.md#SizableOptions) &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [Panel.ts](https://github.com/phetsims/sun/blob/main/js/Panel.ts) in the [sun](https://github.com/phetsims/sun) repository.
