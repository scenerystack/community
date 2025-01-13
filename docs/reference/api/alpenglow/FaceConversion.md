# FaceConversion

## Overview

Multiple methods of conversion from RationalFaces to RenderableFaces.

They mostly differ on whether they combine faces with equivalent RenderPrograms, WHICH cases they do so, and
whether they output polygonal or unsorted-edge formats (PolygonalFace/EdgedFace).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class FaceConversion {: #FaceConversion }


```js
import { FaceConversion } from 'scenerystack/alpenglow';
```
### Static Methods

#### toSimpleRenderableFaces( faces : <span style="font-weight: 400; opacity: 80%;">RationalFace[]</span>, fromIntegerMatrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span>, accumulator : <span style="font-weight: 400; opacity: 80%;">ClippableFaceAccumulator</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderableFace[]</span> {: #toSimpleRenderableFaces data-toc-label='toSimpleRenderableFaces' }

#### toFullyCombinedRenderableFaces( faces : <span style="font-weight: 400; opacity: 80%;">RationalFace[]</span>, fromIntegerMatrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span>, accumulator : <span style="font-weight: 400; opacity: 80%;">ClippableFaceAccumulator</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderableFace[]</span> {: #toFullyCombinedRenderableFaces data-toc-label='toFullyCombinedRenderableFaces' }

#### toSimplifyingCombinedRenderableFaces( faces : <span style="font-weight: 400; opacity: 80%;">RationalFace[]</span>, fromIntegerMatrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span>, accumulator : <span style="font-weight: 400; opacity: 80%;">ClippableFaceAccumulator</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderableFace[]</span> {: #toSimplifyingCombinedRenderableFaces data-toc-label='toSimplifyingCombinedRenderableFaces' }

Will combine faces that have equivalent RenderPrograms IFF they border each other (leaving separate programs with
equivalent RenderPrograms separate if they don't border). It will also remove edges that border between faces
that we combine (thus switching to EdgedFaces with unsorted edges).

#### toTracedRenderableFaces( faces : <span style="font-weight: 400; opacity: 80%;">RationalFace[]</span>, fromIntegerMatrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span>, accumulator : <span style="font-weight: 400; opacity: 80%;">ClippableFaceAccumulator</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderableFace[]</span> {: #toTracedRenderableFaces data-toc-label='toTracedRenderableFaces' }

Combines faces that have equivalent RenderPrograms IFF they border each other (leaving separate programs with
equivalent RenderPrograms separate if they don't border). It will also remove edges that border between faces
that we combine, and will connect edges to keep things polygonal!



## Source Code

See the source for [FaceConversion.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/FaceConversion.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
