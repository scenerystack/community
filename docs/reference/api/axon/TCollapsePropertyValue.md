# TCollapsePropertyValue

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/axon/blob/main/js/TCollapsePropertyValue.ts](https://github.com/phetsims/axon/blob/main/js/TCollapsePropertyValue.ts) for the most up-to-date information.

## Overview

Provides the value type of either a direct type OR the value of a Property (if it's a Property)

e.g. CollapsePropertyValue&lt;number&gt; is number
e.g. CollapsePropertyValue&lt;Property&lt;number&gt;&gt; is number

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type TCollapsePropertyValue {: #TCollapsePropertyValue }


```js
import type { TCollapsePropertyValue } from 'scenerystack/axon';
```


T extends [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;infer Value&gt; ? Value : T



## Source Code

See the source for [TCollapsePropertyValue.ts](https://github.com/phetsims/axon/blob/main/js/TCollapsePropertyValue.ts) in the [axon](https://github.com/phetsims/axon) repository.
