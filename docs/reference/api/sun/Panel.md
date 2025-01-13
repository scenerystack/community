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

#### new Panel( content : <span style="font-weight: 400; opacity: 80%;">Node</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">PanelOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getStroke() : <span style="font-weight: 400; opacity: 80%;">TPaint</span> {: #getStroke data-toc-label='getStroke' }

Get the background rectangle's stroke (can be overridden)

#### setStroke( stroke : <span style="font-weight: 400; opacity: 80%;">TPaint</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setStroke data-toc-label='setStroke' }

Change the background rectangle's stroke (can be overridden)

#### getFill() : <span style="font-weight: 400; opacity: 80%;">TPaint</span> {: #getFill data-toc-label='getFill' }

Get the background rectangle's fill (can be overridden)

#### setFill( fill : <span style="font-weight: 400; opacity: 80%;">TPaint</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setFill data-toc-label='setFill' }

Change the background rectangle's fill (can be overridden)

#### setExcludeInvisibleChildrenFromBounds( excludeInvisibleChildrenFromBounds : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setExcludeInvisibleChildrenFromBounds data-toc-label='setExcludeInvisibleChildrenFromBounds' }

### Static Properties

#### DEFAULT_PANEL_OPTIONS {: #DEFAULT_PANEL_OPTIONS data-toc-label='DEFAULT_PANEL_OPTIONS' }

(readonly)



## Source Code

See the source for [Panel.ts](https://github.com/phetsims/sun/blob/main/js/Panel.ts) in the [sun](https://github.com/phetsims/sun) repository.
