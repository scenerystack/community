# Mesh

## Overview

Represents mesh data that can be handled in different ways.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Mesh {: #Mesh }


```js
import { Mesh } from 'scenerystack/alpenglow';
```
### Constructor

#### new Mesh( name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #Mesh-constructor data-toc-label='new Mesh' }

### Instance Methods



### Instance Properties

#### vertices : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)[]</span> {: #vertices data-toc-label='vertices' }

(readonly)

#### uvs : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)[]</span> {: #uvs data-toc-label='uvs' }

(readonly)

#### normals : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)[]</span> {: #normals data-toc-label='normals' }

(readonly)

#### faces : <span style="font-weight: 400;">[MeshFace](../alpenglow/Mesh.md#MeshFace)[]</span> {: #faces data-toc-label='faces' }

(readonly)

#### lines : <span style="font-weight: 400;">[MeshLine](../alpenglow/Mesh.md#MeshLine)[]</span> {: #lines data-toc-label='lines' }

(readonly)

### Static Methods

#### loadOBJ( str : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;">[Mesh](../alpenglow/Mesh.md)[]</span> {: #loadOBJ data-toc-label='loadOBJ' }



## Class MeshFace {: #MeshFace }


```js
import { MeshFace } from 'scenerystack/alpenglow';
```
### Constructor

#### new MeshFace( material : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, group : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, smoothingGroup : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #MeshFace-MeshFace-constructor data-toc-label='new MeshFace-MeshFace' }

### Instance Methods



### Instance Properties

#### vertexIndices : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #MeshFace-vertexIndices data-toc-label='MeshFace-vertexIndices' }

(readonly)

#### uvIndices : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #MeshFace-uvIndices data-toc-label='MeshFace-uvIndices' }

(readonly)

#### normalIndices : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #MeshFace-normalIndices data-toc-label='MeshFace-normalIndices' }

(readonly)



## Class MeshLine {: #MeshLine }


```js
import { MeshLine } from 'scenerystack/alpenglow';
```
### Instance Properties

#### vertexIndices : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #MeshLine-vertexIndices data-toc-label='MeshLine-vertexIndices' }

(readonly)

#### uvIndices : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #MeshLine-uvIndices data-toc-label='MeshLine-uvIndices' }

(readonly)



## Source Code

See the source for [Mesh.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/Mesh.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
