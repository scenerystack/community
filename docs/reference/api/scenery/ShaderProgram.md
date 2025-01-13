# ShaderProgram

## Overview

Abstraction over the shader program

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ShaderProgram {: #ShaderProgram }


```js
import { ShaderProgram } from 'scenerystack/scenery';
```
### Constructor

#### new ShaderProgram( gl : <span style="font-weight: 400; opacity: 80%;">WebGLRenderingContext</span>, vertexSource : <span style="font-weight: 400; opacity: 80%;">string</span>, fragmentSource : <span style="font-weight: 400; opacity: 80%;">string</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">ShaderProgramOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### initialize( gl : <span style="font-weight: 400; opacity: 80%;">WebGLRenderingContext</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #initialize data-toc-label='initialize' }

Initializes (or reinitializes) the WebGL state and uniform/attribute references.

#### use() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #use data-toc-label='use' }

#### activateAttribute( attributeName : <span style="font-weight: 400; opacity: 80%;">string</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #activateAttribute data-toc-label='activateAttribute' }

#### enableVertexAttribArray( attributeName : <span style="font-weight: 400; opacity: 80%;">string</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #enableVertexAttribArray data-toc-label='enableVertexAttribArray' }

#### unuse() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #unuse data-toc-label='unuse' }

#### disableVertexAttribArray( attributeName : <span style="font-weight: 400; opacity: 80%;">string</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #disableVertexAttribArray data-toc-label='disableVertexAttribArray' }

#### deactivateAttribute( attributeName : <span style="font-weight: 400; opacity: 80%;">string</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #deactivateAttribute data-toc-label='deactivateAttribute' }

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

Releases references

### Instance Properties

#### uniformLocations : <span style="font-weight: 400; opacity: 80%;">Record&lt;string, WebGLUniformLocation&gt;</span> {: #uniformLocations data-toc-label='uniformLocations' }

#### attributeLocations : <span style="font-weight: 400; opacity: 80%;">Record&lt;string, number&gt;</span> {: #attributeLocations data-toc-label='attributeLocations' }

#### activeAttributes : <span style="font-weight: 400; opacity: 80%;">Record&lt;string, boolean&gt;</span> {: #activeAttributes data-toc-label='activeAttributes' }



## Source Code

See the source for [ShaderProgram.ts](https://github.com/phetsims/scenery/blob/main/js/util/ShaderProgram.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
