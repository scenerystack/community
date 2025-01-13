# PropertyStatePhase

## Overview

Describes the phases that a Property can go through in its value setting and notification lifecycle.

UNDEFER - the phase when `Property.setDeferred(false)` is called and Property.value becomes accurate
NOTIFY - the phase when notifications are fired for Properties that have had a value change since becoming deferred

@author Michael Kauzmann (PhET Interactive Simulations)

## Class PropertyStatePhase {: #PropertyStatePhase }


```js
import { PropertyStatePhase } from 'scenerystack/axon';
```
### Static Properties

#### UNDEFER : <span style="font-weight: 400; opacity: 80%;">PropertyStatePhase</span> {: #UNDEFER data-toc-label='UNDEFER' }

(readonly)

#### NOTIFY : <span style="font-weight: 400; opacity: 80%;">PropertyStatePhase</span> {: #NOTIFY data-toc-label='NOTIFY' }

(readonly)

#### enumeration : <span style="font-weight: 400; opacity: 80%;">Enumeration</span> {: #enumeration data-toc-label='enumeration' }

(readonly)



## Source Code

See the source for [PropertyStatePhase.ts](https://github.com/phetsims/axon/blob/main/js/PropertyStatePhase.ts) in the [axon](https://github.com/phetsims/axon) repository.
