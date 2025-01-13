# EventType

## Overview

This characterizes events that may be emitted from PhetioObjects to the PhET-iO data stream.

@author Michael Kauzmann (PhET Interactive Simulations)

## Class EventType {: #EventType }


```js
import { EventType } from 'scenerystack/tandem';
```
### Static Properties

#### USER : <span style="font-weight: 400; opacity: 80%;">EventType</span> {: #USER data-toc-label='USER' }

(readonly)

The user has taken an action, such as pressing a button or moving a mouse

#### [ TandemConstants.EVENT_TYPE_MODEL ] : <span style="font-weight: 400; opacity: 80%;">EventType</span> {: #[ TandemConstants.EVENT_TYPE_MODEL ] data-toc-label='[ TandemConstants.EVENT_TYPE_MODEL ]' }

(readonly)

An event was produced by the simulation model. This could be in response to a user event, or something that happens
during the simulation step. Note the separation is not model vs view, but user-driven vs automatic.

#### WRAPPER : <span style="font-weight: 400; opacity: 80%;">EventType</span> {: #WRAPPER data-toc-label='WRAPPER' }

(readonly)

An event was triggered by the PhET-iO wrapper, via PhetioEngineIO.triggerEvent

#### OPT_OUT : <span style="font-weight: 400; opacity: 80%;">EventType</span> {: #OPT_OUT data-toc-label='OPT_OUT' }

(readonly)

These messages are suppressed, use this to opt a PhetioObject out of the data stream feature.

#### enumeration : <span style="font-weight: 400; opacity: 80%;">Enumeration</span> {: #enumeration data-toc-label='enumeration' }

(readonly)

#### phetioType {: #phetioType data-toc-label='phetioType' }

(readonly)



## Source Code

See the source for [EventType.ts](https://github.com/phetsims/tandem/blob/main/js/EventType.ts) in the [tandem](https://github.com/phetsims/tandem) repository.
