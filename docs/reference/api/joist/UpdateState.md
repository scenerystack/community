# UpdateState

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/joist/blob/main/js/UpdateState.ts](https://github.com/phetsims/joist/blob/main/js/UpdateState.ts) for the most up-to-date information.

## Overview

Enumeration for the various states that can occur during an Update check. See updateCheck.js for main usage.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Michael Kauzmann (PhET Interactive Simulations)

## Class UpdateState {: #UpdateState }


```js
import { UpdateState } from 'scenerystack/joist';
```
### Static Properties

#### UP_TO_DATE : <span style="font-weight: 400;">[UpdateState](../joist/UpdateState.md)</span> {: #UP_TO_DATE data-toc-label='UP_TO_DATE' }

(readonly)

Simulation version is equal to or greater than the currently published version.

#### OUT_OF_DATE : <span style="font-weight: 400;">[UpdateState](../joist/UpdateState.md)</span> {: #OUT_OF_DATE data-toc-label='OUT_OF_DATE' }

(readonly)

Simulation version is less than currently published version (or equal but has a suffix)

#### CHECKING : <span style="font-weight: 400;">[UpdateState](../joist/UpdateState.md)</span> {: #CHECKING data-toc-label='CHECKING' }

(readonly)

Request to server sent out, has not processed reply yet.

#### OFFLINE : <span style="font-weight: 400;">[UpdateState](../joist/UpdateState.md)</span> {: #OFFLINE data-toc-label='OFFLINE' }

(readonly)

Last attempt to check failed, most likely offline

#### UNCHECKED : <span style="font-weight: 400;">[UpdateState](../joist/UpdateState.md)</span> {: #UNCHECKED data-toc-label='UNCHECKED' }

(readonly)

No attempt as been made to check the version against the latest online.

#### enumeration : <span style="font-weight: 400;">[Enumeration](../phet-core/Enumeration.md)</span> {: #enumeration data-toc-label='enumeration' }

(readonly)



## Source Code

See the source for [UpdateState.ts](https://github.com/phetsims/joist/blob/main/js/UpdateState.ts) in the [joist](https://github.com/phetsims/joist) repository.
