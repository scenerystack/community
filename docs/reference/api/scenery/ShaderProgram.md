# ShaderProgram

## Overview

Abstraction over the shader program

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ShaderProgram {: #ShaderProgram }


```js
import { ShaderProgram } from 'scenerystack/scenery';
```
### Constructor

#### new ShaderProgram( gl : <span style="font-weight: 400;">WebGLRenderingContext</span>, vertexSource : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, fragmentSource : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, providedOptions? : <span style="font-weight: 400;">[ShaderProgramOptions](../scenery/ShaderProgram.md#ShaderProgramOptions)</span> ) {: #ShaderProgram-constructor data-toc-label='new ShaderProgram' }

### Instance Methods

#### initialize( gl : <span style="font-weight: 400;">WebGLRenderingContext</span> ) {: #initialize data-toc-label='initialize' }

Initializes (or reinitializes) the WebGL state and uniform/attribute references.

#### use() {: #use data-toc-label='use' }

#### activateAttribute( attributeName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #activateAttribute data-toc-label='activateAttribute' }

#### enableVertexAttribArray( attributeName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #enableVertexAttribArray data-toc-label='enableVertexAttribArray' }

#### unuse() {: #unuse data-toc-label='unuse' }

#### disableVertexAttribArray( attributeName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #disableVertexAttribArray data-toc-label='disableVertexAttribArray' }

#### deactivateAttribute( attributeName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #deactivateAttribute data-toc-label='deactivateAttribute' }

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references

### Instance Properties

#### uniformLocations : <span style="font-weight: 400;">Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, WebGLUniformLocation&gt;</span> {: #uniformLocations data-toc-label='uniformLocations' }

#### attributeLocations : <span style="font-weight: 400;">Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> {: #attributeLocations data-toc-label='attributeLocations' }

#### activeAttributes : <span style="font-weight: 400;">Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #activeAttributes data-toc-label='activeAttributes' }



## Type ShaderProgramOptions {: #ShaderProgramOptions }


```js
import type { ShaderProgramOptions } from 'scenerystack/scenery';
```


- **attributes**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]
- **uniforms**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]




## Source Code

See the source for [ShaderProgram.ts](https://github.com/phetsims/scenery/blob/main/js/util/ShaderProgram.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
