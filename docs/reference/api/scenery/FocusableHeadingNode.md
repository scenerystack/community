# FocusableHeadingNode

## Overview

A Node represented by a heading in the parallel dom that can receive focus. Typically
headings are not focusable and not interactive. But it may be desirable to put focus
on a heading to orient the user or control where the traversal order starts without
focusing an interactive component.

When a screen reader is focused on a heading it will read the name of the heading and
possibly the content below it.

@author Jesse Greenberg (PhET Interactive Simulations)

## Class FocusableHeadingNode {: #FocusableHeadingNode }


```js
import { FocusableHeadingNode } from 'scenerystack/scenery';
```
### Constructor

#### new FocusableHeadingNode( providedOptions? : <span style="font-weight: 400;">[FocusableHeadingNodeOptions](../scenery/FocusableHeadingNode.md#FocusableHeadingNodeOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### focus() {: #focus data-toc-label='focus' }

Focus this heading in the Parallel DOM. The screen reader will read its name and possibly
content below it. Traversal with alternative input will continue from wherever this element
is located in the PDOM order.

Once the heading loses focus, it is removed from the traversal order until this is called
explicitly again.

#### dispose() {: #dispose data-toc-label='dispose' }



## Type FocusableHeadingNodeOptions {: #FocusableHeadingNodeOptions }


```js
import type { FocusableHeadingNodeOptions } from 'scenerystack/scenery';
```


- **headingLevel**?: HeadingLevelNumber
- &amp; StrictOmit&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "tagName" | "focusHighlight"&gt;




## Source Code

See the source for [FocusableHeadingNode.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/pdom/FocusableHeadingNode.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
