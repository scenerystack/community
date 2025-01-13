# RichTextNode

## Overview

A leaf node element in the RichText, which will display a Node (e.g. with the `nodes` or `tags` feature)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RichTextNode {: #RichTextNode }


```js
import { RichTextNode } from 'scenerystack/scenery';
```
### Constructor

#### new RichTextNode( content : <span style="font-weight: 400; opacity: 80%;">Node</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### initialize( content : <span style="font-weight: 400; opacity: 80%;">Node</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #initialize data-toc-label='initialize' }

#### clean() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #clean data-toc-label='clean' }

Cleans references that could cause memory leaks (as those things may contain other references).

#### fitsIn( widthAvailable : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #fitsIn data-toc-label='fitsIn' }

Whether this leaf will fit in the specified amount of space

#### freeToPool() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### leftSpacing {: #leftSpacing data-toc-label='leftSpacing' }

(readonly)

#### rightSpacing {: #rightSpacing data-toc-label='rightSpacing' }

(readonly)

### Static Properties

#### pool : <span style="font-weight: 400; opacity: 80%;">Pool</span> {: #pool data-toc-label='pool' }

(readonly)



## Source Code

See the source for [RichTextNode.ts](https://github.com/phetsims/scenery/blob/main/js/util/rich-text/RichTextNode.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
