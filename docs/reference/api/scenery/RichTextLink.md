# RichTextLink

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/util/rich-text/RichTextLink.ts](https://github.com/phetsims/scenery/blob/main/js/util/rich-text/RichTextLink.ts) for the most up-to-date information.

## Overview

A link node in RichText - NOTE: This is NOT embedded for layout. Instead, link content will be added as children to this node,
and this will exist solely for the link functionality.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RichTextLink {: #RichTextLink }


```js
import { RichTextLink } from 'scenerystack/scenery';
```
### Constructor

#### new RichTextLink( innerContent : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, href : <span style="font-weight: 400;">[RichTextHref](../scenery/RichText.md#RichTextHref)</span> ) {: #RichTextLink-constructor data-toc-label='new RichTextLink' }

### Instance Methods

#### initialize( innerContent : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, href : <span style="font-weight: 400;">[RichTextHref](../scenery/RichText.md#RichTextHref)</span>, initializeSuper ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #initialize data-toc-label='initialize' }

Set up this state. First construction does not need to use super.initialize() because the constructor has done
that for us. But repeated initialization with Poolable will need to initialize super again.

#### clean() {: #clean data-toc-label='clean' }

Cleans references that could cause memory leaks (as those things may contain other references).

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

### Static Properties

#### pool : <span style="font-weight: 400;">[Pool](../phet-core/Pool.md)</span> {: #pool data-toc-label='pool' }

(readonly)



## Source Code

See the source for [RichTextLink.ts](https://github.com/phetsims/scenery/blob/main/js/util/rich-text/RichTextLink.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
