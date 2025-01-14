# Panel

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

#### new Panel( content : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[PanelOptions](../sun/Panel.md#PanelOptions)</span> ) {: #constructor data-toc-label='constructor' }

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
- **lineDash**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **xMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **yMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **cornerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **resize**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **backgroundPickable**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **align**?: [PanelAlign](../sun/Panel.md#PanelAlign)
- **minWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **minHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; [SizableOptions](../scenery/Sizable.md#SizableOptions) &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [Panel.ts](https://github.com/phetsims/sun/blob/main/js/Panel.ts) in the [sun](https://github.com/phetsims/sun) repository.
