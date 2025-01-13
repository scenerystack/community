# TextureQuad

## Overview

Creates a quad for a given texture with a specific width and height, in the 3d space
with x: [0,width] and y: [0,height].

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class TextureQuad {: #TextureQuad }


```js
import { TextureQuad } from 'scenerystack/mobius';
```
### Constructor

#### new TextureQuad( texture : <span style="font-weight: 400; opacity: 80%;">THREE.Texture</span>, width : <span style="font-weight: 400; opacity: 80%;">number</span>, height : <span style="font-weight: 400; opacity: 80%;">number</span>, materialOptions? : <span style="font-weight: 400; opacity: 80%;">THREE.MaterialParameters</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### updateTexture( texture : <span style="font-weight: 400; opacity: 80%;">THREE.Texture</span>, width : <span style="font-weight: 400; opacity: 80%;">number</span>, height : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #updateTexture data-toc-label='updateTexture' }

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

Releases references

### Instance Properties

#### disposeEmitter : <span style="font-weight: 400; opacity: 80%;">TReadOnlyEmitter</span> {: #disposeEmitter data-toc-label='disposeEmitter' }



## Source Code

See the source for [TextureQuad.ts](https://github.com/phetsims/mobius/blob/main/js/TextureQuad.ts) in the [mobius](https://github.com/phetsims/mobius) repository.
