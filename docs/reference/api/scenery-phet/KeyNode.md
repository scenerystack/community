# KeyNode

## Overview

KeyNode looks like a keyboard key. It has a shadow rectangle under the key icon, with a slight offset so that it
has a 3D appearance.  KeyNodes are primarily used for accessibility to provide extra information about keyboard
navigation and functionality, but an icon could be used for any purpose.

Each KeyNode has the same height by default, and icon will be scaled down if it is too large to maintain the proper
key height. The width will expand based on padding and the width of the icon in order to surround content fully.

@author Jesse Greenberg

## Class KeyNode {: #KeyNode }


```js
import { KeyNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new KeyNode( keyIcon : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[KeyNodeOptions](../scenery-phet/KeyNode.md#KeyNodeOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods





## Source Code

See the source for [KeyNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/keyboard/KeyNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
