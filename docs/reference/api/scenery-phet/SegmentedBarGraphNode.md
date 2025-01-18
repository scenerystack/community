# SegmentedBarGraphNode

## Overview

A node that represents a quantity as a segmented bar graph.

@author John Blanco
@author Chris Klusendorf (PhET Interactive Simulations)

## Class SegmentedBarGraphNode {: #SegmentedBarGraphNode }


```js
import { SegmentedBarGraphNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new SegmentedBarGraphNode( numberProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, rangeProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Range](../dot/Range.md)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[SegmentedBarGraphNodeOptions](../scenery-phet/SegmentedBarGraphNode.md#SegmentedBarGraphNodeOptions)</span> ) {: #SegmentedBarGraphNode-constructor data-toc-label='new SegmentedBarGraphNode' }

### Instance Methods





## Type SegmentedBarGraphNodeOptions {: #SegmentedBarGraphNodeOptions }


```js
import type { SegmentedBarGraphNodeOptions } from 'scenerystack/scenery-phet';
```


- **width**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **height**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **numSegments**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **backgroundColor**?: [TColor](../scenery/TColor.md)
- **fullyLitIndicatorColor**?: [TColor](../scenery/TColor.md)
- **indicatorWidthProportion**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  proportion of the width consumed by the indicator in the vertical direction, must be &gt; 0 and &lt;= to 1
- **indicatorHeightProportion**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  proportion of the each segment consumed by the indicator in the vertical direction, must be &gt; 0 and &lt;= to 1
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [SegmentedBarGraphNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/SegmentedBarGraphNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
