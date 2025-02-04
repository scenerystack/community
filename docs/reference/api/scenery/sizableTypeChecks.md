# sizableTypeChecks

## Overview

To avoid circular dependencies, this file contains type checks for the Sizable type hierarchy.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type HeightSizableNode {: #HeightSizableNode }


```js
import type { HeightSizableNode } from 'scenerystack/scenery';
```


[Node](../scenery/Node.md) &amp; [THeightSizable](../scenery/HeightSizable.md#THeightSizable)



## Type SizableNode {: #SizableNode }


```js
import type { SizableNode } from 'scenerystack/scenery';
```


[Node](../scenery/Node.md) &amp; [TSizable](../scenery/Sizable.md#TSizable)



## Type WidthSizableNode {: #WidthSizableNode }


Some typescript gymnastics to provide a user-defined type guard that treats something as widthSizable
We need to define an unused function with a concrete type, so that we can extract the return type of the function
and provide a type for a Node that extends this type.

```js
import type { WidthSizableNode } from 'scenerystack/scenery';
```


[Node](../scenery/Node.md) &amp; [TWidthSizable](../scenery/WidthSizable.md#TWidthSizable)



## Source Code

See the source for [sizableTypeChecks.ts](https://github.com/phetsims/scenery/blob/main/js/layout/sizableTypeChecks.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
