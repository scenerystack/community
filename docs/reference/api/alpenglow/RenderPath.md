# RenderPath

## Overview

Represents a path that controls what regions things are drawn in.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderPath {: #RenderPath }


```js
import { RenderPath } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderPath( fillRule : <span style="font-weight: 400; opacity: 80%;">FillRule</span>, subpaths : <span style="font-weight: 400; opacity: 80%;">Vector2[][]</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### transformed( transform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderPath</span> {: #transformed data-toc-label='transformed' }

#### getBounds() : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> {: #getBounds data-toc-label='getBounds' }

#### isTriviallyEmpty() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isTriviallyEmpty data-toc-label='isTriviallyEmpty' }

Without scanning the entire path, returns whether we can guarantee that this path is empty and has zero area.

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedRenderPath</span> {: #serialize data-toc-label='serialize' }

### Instance Properties

#### id {: #id data-toc-label='id' }

(readonly)

### Static Methods

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedRenderPath</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderPath</span> {: #deserialize data-toc-label='deserialize' }

#### fromBounds( bounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderPath</span> {: #fromBounds data-toc-label='fromBounds' }



## Source Code

See the source for [RenderPath.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderPath.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
