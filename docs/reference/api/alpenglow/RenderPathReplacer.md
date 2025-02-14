# RenderPathReplacer

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderPathReplacer.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderPathReplacer.ts) for the most up-to-date information.

## Overview

A optimized form for constructing RenderPrograms with their RenderPathBooleans simplified.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderPathReplacer {: #RenderPathReplacer }


```js
import { RenderPathReplacer } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderPathReplacer( program : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) {: #RenderPathReplacer-constructor data-toc-label='new RenderPathReplacer' }

### Instance Methods

#### replace( includedPaths : <span style="font-weight: 400;">Set&lt;[RenderPath](../alpenglow/RenderPath.md)&gt;</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #replace data-toc-label='replace' }

### Static Methods

#### isContainer( program : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">program is ( [RenderStack](../alpenglow/RenderStack.md) | [RenderDepthSort](../alpenglow/RenderDepthSort.md) )</span> {: #isContainer data-toc-label='isContainer' }

#### isTransparentOutside( program : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> ) : <span style="font-weight: 400;">program is [RenderPathBoolean](../alpenglow/RenderPathBoolean.md)</span> {: #isTransparentOutside data-toc-label='isTransparentOutside' }



## Source Code

See the source for [RenderPathReplacer.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderPathReplacer.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
