# RichTextElement

## Overview

Represents an element in the RichText hierarchy that has child content (renders nothing on its own, but has its own
scale, positioning, style, etc.). &lt;span&gt; or &lt;b&gt; are examples of something that would create this.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RichTextElement {: #RichTextElement }


```js
import { RichTextElement } from 'scenerystack/scenery';
```
### Constructor

#### new RichTextElement( isLTR : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### initialize( isLTR : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #initialize data-toc-label='initialize' }

#### addElement( element : <span style="font-weight: 400;">[RichTextElement](../scenery/RichTextElement.md) | [RichTextLeaf](../scenery/RichTextLeaf.md) | [RichTextNode](../scenery/RichTextNode.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #addElement data-toc-label='addElement' }

Adds a child element.

@returns- Whether the item was actually added.

#### addExtraBeforeSpacing( amount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #addExtraBeforeSpacing data-toc-label='addExtraBeforeSpacing' }

Adds an amount of spacing to the "before" side.

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### leftSpacing : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #leftSpacing data-toc-label='leftSpacing' }

The amount of local-coordinate spacing to apply on each side

#### rightSpacing : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #rightSpacing data-toc-label='rightSpacing' }

### Static Properties

#### pool : <span style="font-weight: 400;">[Pool](../phet-core/Pool.md)</span> {: #pool data-toc-label='pool' }

(readonly)



## Source Code

See the source for [RichTextElement.ts](https://github.com/phetsims/scenery/blob/main/js/util/rich-text/RichTextElement.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
