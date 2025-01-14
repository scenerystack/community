# RichTextNode

## Overview

A leaf node element in the RichText, which will display a Node (e.g. with the `nodes` or `tags` feature)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RichTextNode {: #RichTextNode }


```js
import { RichTextNode } from 'scenerystack/scenery';
```
### Constructor

#### new RichTextNode( content : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) {: #RichTextNode-constructor data-toc-label='new RichTextNode' }

### Instance Methods

#### initialize( content : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #initialize data-toc-label='initialize' }

#### clean() {: #clean data-toc-label='clean' }

Cleans references that could cause memory leaks (as those things may contain other references).

#### fitsIn( widthAvailable : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #fitsIn data-toc-label='fitsIn' }

Whether this leaf will fit in the specified amount of space

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### leftSpacing {: #leftSpacing data-toc-label='leftSpacing' }

(readonly)

#### rightSpacing {: #rightSpacing data-toc-label='rightSpacing' }

(readonly)

### Static Properties

#### pool : <span style="font-weight: 400;">[Pool](../phet-core/Pool.md)</span> {: #pool data-toc-label='pool' }

(readonly)



## Source Code

See the source for [RichTextNode.ts](https://github.com/phetsims/scenery/blob/main/js/util/rich-text/RichTextNode.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
