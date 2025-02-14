# RichTextUtils

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/util/rich-text/RichTextUtils.ts](https://github.com/phetsims/scenery/blob/main/js/util/rich-text/RichTextUtils.ts) for the most up-to-date information.

## Overview

Utilities and globals to support RichText

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type HimalayaAttribute {: #HimalayaAttribute }


Types for Himalaya

```js
import type { HimalayaAttribute } from 'scenerystack/scenery';
```


- **key**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **value**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>




## Type HimalayaElementNode {: #HimalayaElementNode }


```js
import type { HimalayaElementNode } from 'scenerystack/scenery';
```


- **type**: "element"
- **tagName**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **children**: [HimalayaNode](../scenery/RichTextUtils.md#HimalayaNode)[]
- **attributes**: [HimalayaAttribute](../scenery/RichTextUtils.md#HimalayaAttribute)[]
- **innerContent**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- &amp; [HimalayaNode](../scenery/RichTextUtils.md#HimalayaNode)




## Type HimalayaNode {: #HimalayaNode }


```js
import type { HimalayaNode } from 'scenerystack/scenery';
```


- **type**: "element" | "comment" | "text"
- **innerContent**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>




## Type HimalayaTextNode {: #HimalayaTextNode }


```js
import type { HimalayaTextNode } from 'scenerystack/scenery';
```


- **type**: "text"
- **content**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- &amp; [HimalayaNode](../scenery/RichTextUtils.md#HimalayaNode)




## Source Code

See the source for [RichTextUtils.ts](https://github.com/phetsims/scenery/blob/main/js/util/rich-text/RichTextUtils.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
