# Separator

## Overview

Base type for a line-divider (when put in a layout container, it will be hidden if it is before/after all visible
components, or if it's after another a divider in the visible order).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Separator {: #Separator }


```js
import { Separator } from 'scenerystack/scenery';
```
### Constructor

#### new Separator( providedOptions? : <span style="font-weight: 400;">[SeparatorOptions](../scenery/Separator.md#SeparatorOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods





## Type SeparatorOptions {: #SeparatorOptions }


Separators are automatically shown/hidden and hence should not be instrumented for PhET-iO control.

```js
import type { SeparatorOptions } from 'scenerystack/scenery';
```


StrictOmit&lt;[LineOptions](../scenery/Line.md#LineOptions), "[tandem](../tandem/tandem.md)"&gt;



## Source Code

See the source for [Separator.ts](https://github.com/phetsims/scenery/blob/main/js/layout/nodes/Separator.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
