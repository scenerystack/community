# RichTextLink

## Overview

A link node in RichText - NOTE: This is NOT embedded for layout. Instead, link content will be added as children to this node,
and this will exist solely for the link functionality.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RichTextLink {: #RichTextLink }


```js
import { RichTextLink } from 'scenerystack/scenery';
```
### Constructor

#### new RichTextLink( innerContent : <span style="font-weight: 400; opacity: 80%;">string</span>, href : <span style="font-weight: 400; opacity: 80%;">RichTextHref</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### initialize( innerContent : <span style="font-weight: 400; opacity: 80%;">string</span>, href : <span style="font-weight: 400; opacity: 80%;">RichTextHref</span>, initializeSuper ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #initialize data-toc-label='initialize' }

Set up this state. First construction does not need to use super.initialize() because the constructor has done
that for us. But repeated initialization with Poolable will need to initialize super again.

#### clean() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #clean data-toc-label='clean' }

Cleans references that could cause memory leaks (as those things may contain other references).

#### freeToPool() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #freeToPool data-toc-label='freeToPool' }

### Static Properties

#### pool : <span style="font-weight: 400; opacity: 80%;">Pool</span> {: #pool data-toc-label='pool' }

(readonly)



## Source Code

See the source for [RichTextLink.ts](https://github.com/phetsims/scenery/blob/main/js/util/rich-text/RichTextLink.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
