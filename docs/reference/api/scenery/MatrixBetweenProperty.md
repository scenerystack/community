# MatrixBetweenProperty

## Overview

A Property that, if there is a unique path from one Node to another (A =&gt; root =&gt; B, or A =&gt; B, or B =&gt; A), will
contain the transformation matrix from A to B's coordinate frame (local coordinate frames by default).

If there is no unique path, the value will be null.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class MatrixBetweenProperty {: #MatrixBetweenProperty }


```js
import { MatrixBetweenProperty } from 'scenerystack/scenery';
```
### Constructor

#### new MatrixBetweenProperty( from : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, to : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[MatrixBetweenPropertyOptions](../scenery/MatrixBetweenProperty.md#MatrixBetweenPropertyOptions)</span> ) {: #MatrixBetweenProperty-constructor data-toc-label='new MatrixBetweenProperty' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type MatrixBetweenPropertyOptions {: #MatrixBetweenPropertyOptions }


```js
import type { MatrixBetweenPropertyOptions } from 'scenerystack/scenery';
```


- **fromCoordinateFrame**?: CoordinateFrame
- **toCoordinateFrame**?: CoordinateFrame




## Source Code

See the source for [MatrixBetweenProperty.ts](https://github.com/phetsims/scenery/blob/main/js/util/MatrixBetweenProperty.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
