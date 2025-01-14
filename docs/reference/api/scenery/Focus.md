# Focus

## Overview

A scenery-internal type for tracking what currently has focus in Display. If a focused Node is shared between
two Displays, it is possible that only one Node may have focus between the two displays. This is especially
true for DOM focus since only one element can have DOM focus at a time.

@author Jesse Greenberg

## Class Focus {: #Focus }


```js
import { Focus } from 'scenerystack/scenery';
```
### Constructor

#### new Focus( display : <span style="font-weight: 400;">[Display](../scenery/Display.md)</span>, trail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> ) {: #Focus-constructor data-toc-label='new Focus' }

### Instance Methods



### Instance Properties

#### trail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> {: #trail data-toc-label='trail' }

(readonly)

The trail to the focused Node.

#### display : <span style="font-weight: 400;">[Display](../scenery/Display.md)</span> {: #display data-toc-label='display' }

(readonly)

The Display containing the Trail to the focused Node.

### Static Properties

#### FocusIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #FocusIO data-toc-label='FocusIO' }

(readonly)



## Source Code

See the source for [Focus.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/Focus.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
