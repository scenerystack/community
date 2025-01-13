# LayoutCell

## Overview

A configurable cell containing a Node used for more permanent layouts

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class LayoutCell {: #LayoutCell }


NOTE: This would be an abstract class, but that is incompatible with how mixin constraints work in TypeScript

```js
import { LayoutCell } from 'scenerystack/scenery';
```
### Instance Methods

#### onLayoutOptionsChange() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #onLayoutOptionsChange data-toc-label='onLayoutOptionsChange' }

(protected)

Can't be abstract, we're using mixins :(

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

Releases references



## Source Code

See the source for [LayoutCell.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/LayoutCell.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
