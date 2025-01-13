# RenderableFace

## Overview

Represents a face with a RenderProgram/bounds, that can potentially be split into multiples, or optimized

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderableFace {: #RenderableFace }


```js
import { RenderableFace } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderableFace( face : <span style="font-weight: 400; opacity: 80%;">ClippableFace</span>, renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, bounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### split() : <span style="font-weight: 400; opacity: 80%;">RenderableFace[]</span> {: #split data-toc-label='split' }

TODO: FIND A BETTER STRATEGY rather than multiple full iteration for every RenderProgram that gets split!!!!



## Source Code

See the source for [RenderableFace.ts](https://github.com/phetsims/alpenglow/blob/main/js/raster/RenderableFace.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
