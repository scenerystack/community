# NodeLayoutConstraint

## Overview

Supertype for LayoutConstraints that are based on an actual Node where the layout takes place. Generally used with
layout containers that are subtypes of LayoutNode.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class NodeLayoutConstraint {: #NodeLayoutConstraint }


```js
import { NodeLayoutConstraint } from 'scenerystack/scenery';
```
### Instance Methods

#### filterLayoutCells( cells : <span style="font-weight: 400;">Cell[]</span> ) : <span style="font-weight: 400;">Cell[]</span> {: #filterLayoutCells data-toc-label='filterLayoutCells' }

(protected)

Filters out cells to only those that will be involved in layout

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references

### Instance Properties

#### preferredHeightProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #preferredHeightProperty data-toc-label='preferredHeightProperty' }

(readonly)

#### minimumWidthProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #minimumWidthProperty data-toc-label='minimumWidthProperty' }

(readonly)

#### minimumHeightProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #minimumHeightProperty data-toc-label='minimumHeightProperty' }

(readonly)

#### layoutOriginProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;[Vector2](../dot/Vector2.md)&gt;</span> {: #layoutOriginProperty data-toc-label='layoutOriginProperty' }

(readonly)



## Type NodeLayoutAvailableConstraintOptions {: #NodeLayoutAvailableConstraintOptions }


Type export designed for use with clients

```js
import type { NodeLayoutAvailableConstraintOptions } from 'scenerystack/scenery';
```


Pick&lt;[NodeLayoutConstraintOptions](../scenery/NodeLayoutConstraint.md#NodeLayoutConstraintOptions), "excludeInvisible" | "layoutOriginProperty"&gt;



## Type NodeLayoutConstraintOptions {: #NodeLayoutConstraintOptions }


```js
import type { NodeLayoutConstraintOptions } from 'scenerystack/scenery';
```


- **excludeInvisible**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **preferredWidthProperty**?: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;
- **preferredHeightProperty**?: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;
- **minimumWidthProperty**?: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;
- **minimumHeightProperty**?: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;
- **layoutOriginProperty**?: [TProperty](../axon/TProperty.md)&lt;[Vector2](../dot/Vector2.md)&gt;




## Source Code

See the source for [NodeLayoutConstraint.ts](https://github.com/phetsims/scenery/blob/main/js/layout/constraints/NodeLayoutConstraint.ts) in the [scenery](https://github.com/phetsims/scenery) repository.