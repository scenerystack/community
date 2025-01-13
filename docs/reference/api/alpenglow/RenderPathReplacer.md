# RenderPathReplacer

## Overview

A optimized form for constructing RenderPrograms with their RenderPathBooleans simplified.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderPathReplacer {: #RenderPathReplacer }


```js
import { RenderPathReplacer } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderPathReplacer( program : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### replace( includedPaths : <span style="font-weight: 400; opacity: 80%;">Set&lt;RenderPath&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #replace data-toc-label='replace' }

### Static Methods

#### isContainer( program : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">program is ( RenderStack | RenderDepthSort )</span> {: #isContainer data-toc-label='isContainer' }

#### isTransparentOutside( program : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> ) : <span style="font-weight: 400; opacity: 80%;">program is RenderPathBoolean</span> {: #isTransparentOutside data-toc-label='isTransparentOutside' }



## Source Code

See the source for [RenderPathReplacer.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderPathReplacer.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
