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

#### faces : <span style="font-weight: 400;">MeshFace[]</span> {: #faces data-toc-label='faces' }

(readonly)

#### lines : <span style="font-weight: 400;">MeshLine[]</span> {: #lines data-toc-label='lines' }

(readonly)

### Static Methods

#### loadOBJ( str : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;">[Mesh](../alpenglow/Mesh.md)[]</span> {: #loadOBJ data-toc-label='loadOBJ' }



## Source Code

See the source for [Mesh.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/Mesh.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
