# WindingMap

## Overview

Representation of a winding map for a face (or an edge as a delta)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class WindingMap {: #WindingMap }


```js
import { WindingMap } from 'scenerystack/alpenglow';
```
### Constructor

#### new WindingMap( map : <span style="font-weight: 400;">Map&lt;[RenderPath](../alpenglow/RenderPath.md), <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getWindingNumber( renderPath : <span style="font-weight: 400;">[RenderPath](../alpenglow/RenderPath.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getWindingNumber data-toc-label='getWindingNumber' }

#### addWindingNumber( renderPath : <span style="font-weight: 400;">[RenderPath](../alpenglow/RenderPath.md)</span>, amount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #addWindingNumber data-toc-label='addWindingNumber' }

#### addWindingMap( windingMap : <span style="font-weight: 400;">[WindingMap](../alpenglow/WindingMap.md)</span> ) {: #addWindingMap data-toc-label='addWindingMap' }

#### equals( windingMap : <span style="font-weight: 400;">[WindingMap](../alpenglow/WindingMap.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equals data-toc-label='equals' }



## Source Code

See the source for [WindingMap.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/WindingMap.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
