# LayoutProxyProperty

## Overview

A Property that takes the value of:
- a LayoutProxy with the single connected Trail (if it exists)
- null if there are zero or 2+ connected Trails between the two Nodes

When defined, this will provide a LayoutProxy for the leafNode within the rootNode's local coordinate frame. This
will allow positioning the leafNode within the rootNode's coordinate frame (which is ONLY well-defined when there
is exactly one trail between the two).

Thus, it will only be defined as a proxy if there is a unique trail between the two Nodes. This is needed for layout
work, where often we'll need to provide a proxy IF this condition is true, and NO proxy if it's not (since layout
would be ambiguous). E.g. for ManualConstraint, if a Node isn't connected to the root, there's nothing the constraint
can do.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class LayoutProxyProperty {: #LayoutProxyProperty }


```js
import { LayoutProxyProperty } from 'scenerystack/scenery';
```
### Constructor

#### new LayoutProxyProperty( rootNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, leafNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[LayoutProxyPropertyOptions](../scenery/LayoutProxyProperty.md#LayoutProxyPropertyOptions)</span> ) {: #LayoutProxyProperty-constructor data-toc-label='new LayoutProxyProperty' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type LayoutProxyPropertyOptions {: #LayoutProxyPropertyOptions }


```js
import type { LayoutProxyPropertyOptions } from 'scenerystack/scenery';
```


- **onTransformChange**?: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>




## Source Code

See the source for [LayoutProxyProperty.ts](https://github.com/phetsims/scenery/blob/main/js/layout/LayoutProxyProperty.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
