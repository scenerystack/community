# DisplayClickToDismissListener

## Overview

A listener that can be added to a Display to (typically) dismiss a UI component after we receive a press.
Provide a listener to be called when the Pointer is released. It will be called unless this there is
listener cancel/interruption.

@author Jesse Greenberg (PhET Interactive Simulations)

## Class DisplayClickToDismissListener {: #DisplayClickToDismissListener }


```js
import { DisplayClickToDismissListener } from 'scenerystack/joist';
```
### Constructor

#### new DisplayClickToDismissListener( listener : <span style="font-weight: 400;">[SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)</span>, providedOptions? : <span style="font-weight: 400;">[DisplayClickToDismissListenerOptions](../joist/DisplayClickToDismissListener.md#DisplayClickToDismissListenerOptions)</span> ) {: #DisplayClickToDismissListener-constructor data-toc-label='new DisplayClickToDismissListener' }

### Instance Methods

#### down( event : <span style="font-weight: 400;">[SceneryEvent](../scenery/SceneryEvent.md)</span> ) {: #down data-toc-label='down' }

Part of the scenery Input API.

#### dispose() {: #dispose data-toc-label='dispose' }



## Type DisplayClickToDismissListenerOptions {: #DisplayClickToDismissListenerOptions }


```js
import type { DisplayClickToDismissListenerOptions } from 'scenerystack/joist';
```


- **displayedNode**?: [Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  A Node that should be 'displayed' (visually displayed on a scenery Display) for this listener to be active.
  If this is null, the listener will always be active.




## Source Code

See the source for [DisplayClickToDismissListener.ts](https://github.com/phetsims/joist/blob/main/js/DisplayClickToDismissListener.ts) in the [joist](https://github.com/phetsims/joist) repository.
