# BatchedDOMEvent

## Overview

Pooled structure to record batched events efficiently. How it calls the callback is based on the type
(pointer/mspointer/touch/mouse). There is one BatchedDOMEvent for each DOM Event (not for each touch).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class BatchedDOMEvent {: #BatchedDOMEvent }


```js
import { BatchedDOMEvent } from 'scenerystack/scenery';
```
### Constructor

#### new BatchedDOMEvent( eventContext : <span style="font-weight: 400; opacity: 80%;">EventContext</span>, type : <span style="font-weight: 400; opacity: 80%;">BatchedDOMEventType</span>, callback : <span style="font-weight: 400; opacity: 80%;">BatchedDOMEventCallback</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### initialize( eventContext : <span style="font-weight: 400; opacity: 80%;">EventContext</span>, type : <span style="font-weight: 400; opacity: 80%;">BatchedDOMEventType</span>, callback : <span style="font-weight: 400; opacity: 80%;">BatchedDOMEventCallback</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #initialize data-toc-label='initialize' }

#### run( input : <span style="font-weight: 400; opacity: 80%;">Input</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #run data-toc-label='run' }

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

Releases references

#### freeToPool() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #freeToPool data-toc-label='freeToPool' }

### Static Properties

#### pool : <span style="font-weight: 400; opacity: 80%;">Pool</span> {: #pool data-toc-label='pool' }

(readonly)



## Class BatchedDOMEventType {: #BatchedDOMEventType }


```js
import { BatchedDOMEventType } from 'scenerystack/scenery';
```
### Static Properties

#### POINTER_TYPE : <span style="font-weight: 400; opacity: 80%;">BatchedDOMEventType</span> {: #BatchedDOMEventType-POINTER_TYPE data-toc-label='BatchedDOMEventType-POINTER_TYPE' }

(readonly)

#### MS_POINTER_TYPE : <span style="font-weight: 400; opacity: 80%;">BatchedDOMEventType</span> {: #BatchedDOMEventType-MS_POINTER_TYPE data-toc-label='BatchedDOMEventType-MS_POINTER_TYPE' }

(readonly)

#### TOUCH_TYPE : <span style="font-weight: 400; opacity: 80%;">BatchedDOMEventType</span> {: #BatchedDOMEventType-TOUCH_TYPE data-toc-label='BatchedDOMEventType-TOUCH_TYPE' }

(readonly)

#### MOUSE_TYPE : <span style="font-weight: 400; opacity: 80%;">BatchedDOMEventType</span> {: #BatchedDOMEventType-MOUSE_TYPE data-toc-label='BatchedDOMEventType-MOUSE_TYPE' }

(readonly)

#### WHEEL_TYPE : <span style="font-weight: 400; opacity: 80%;">BatchedDOMEventType</span> {: #BatchedDOMEventType-WHEEL_TYPE data-toc-label='BatchedDOMEventType-WHEEL_TYPE' }

(readonly)

#### ALT_TYPE : <span style="font-weight: 400; opacity: 80%;">BatchedDOMEventType</span> {: #BatchedDOMEventType-ALT_TYPE data-toc-label='BatchedDOMEventType-ALT_TYPE' }

(readonly)

#### enumeration : <span style="font-weight: 400; opacity: 80%;">Enumeration</span> {: #BatchedDOMEventType-enumeration data-toc-label='BatchedDOMEventType-enumeration' }

(readonly)



## Source Code

See the source for [BatchedDOMEvent.ts](https://github.com/phetsims/scenery/blob/main/js/input/BatchedDOMEvent.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
