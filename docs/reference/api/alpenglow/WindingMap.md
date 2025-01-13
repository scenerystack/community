# WindingMap

## Overview

Representation of a winding map for a face (or an edge as a delta)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class WindingMap {: #WindingMap }


```js
import { WindingMap } from 'scenerystack/alpenglow';
```
### Constructor

#### new WindingMap( map : <span style="font-weight: 400; opacity: 80%;">Map&lt;RenderPath, number&gt;</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getWindingNumber( renderPath : <span style="font-weight: 400; opacity: 80%;">RenderPath</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getWindingNumber data-toc-label='getWindingNumber' }

#### addWindingNumber( renderPath : <span style="font-weight: 400; opacity: 80%;">RenderPath</span>, amount : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #addWindingNumber data-toc-label='addWindingNumber' }

#### addWindingMap( windingMap : <span style="font-weight: 400; opacity: 80%;">WindingMap</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #addWindingMap data-toc-label='addWindingMap' }

#### equals( windingMap : <span style="font-weight: 400; opacity: 80%;">WindingMap</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equals data-toc-label='equals' }



## Source Code

See the source for [WindingMap.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/WindingMap.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
