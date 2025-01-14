# Paintable

## Overview

Trait for Nodes that support a standard fill and/or stroke (e.g. Text, Path and Path subtypes).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type PaintableNode {: #PaintableNode }


Workaround type since we can't detect mixins in the type system well

```js
import type { PaintableNode } from 'scenerystack/scenery';
```


[Path](../scenery/Path.md) | [Text](../scenery/Text.md)



## Type PaintableOptions {: #PaintableOptions }


```js
import type { PaintableOptions } from 'scenerystack/scenery';
```


- **fill**?: [TPaint](../scenery/TPaint.md)
- **fillPickable**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **stroke**?: [TPaint](../scenery/TPaint.md)
- **strokePickable**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **lineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **lineCap**?: [LineCap](../kite/LineStyles.md#LineCap)
- **lineJoin**?: [LineJoin](../kite/LineStyles.md#LineJoin)
- **miterLimit**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **lineDash**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **lineDashOffset**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **cachedPaints**?: [TPaint](../scenery/TPaint.md)[]




## Source Code

See the source for [Paintable.ts](https://github.com/phetsims/scenery/blob/main/js/nodes/Paintable.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
