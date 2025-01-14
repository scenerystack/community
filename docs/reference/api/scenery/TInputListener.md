# TInputListener

## Overview

The main type interface for input listeners.

Refer to Input.ts for documentation on the event types.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type TInputListener {: #TInputListener }


```js
import type { TInputListener } from 'scenerystack/scenery';
```


- **interrupt**?: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **cursor**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **listener**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>
- **createPanTargetBounds**?: ( () =&gt; [Bounds2](../dot/Bounds2.md) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **hotkeys**?: [Hotkey](../scenery/Hotkey.md)[]
- **focus**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;FocusEvent&gt;
- **blur**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;FocusEvent&gt;
- **focusin**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;FocusEvent&gt;
- **focusout**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;FocusEvent&gt;
- **keydown**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;KeyboardEvent&gt;
- **keyup**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;KeyboardEvent&gt;
- **globalkeydown**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;KeyboardEvent&gt;
- **globalkeyup**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;KeyboardEvent&gt;
- **click**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;MouseEvent&gt;
- **input**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;Event | InputEvent&gt;
- **change**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)
- **down**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;MouseEvent | TouchEvent | PointerEvent&gt;
- **mousedown**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;MouseEvent | PointerEvent&gt;
- **touchdown**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;TouchEvent | PointerEvent&gt;
- **pendown**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;PointerEvent&gt;
- **up**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;MouseEvent | TouchEvent | PointerEvent&gt;
- **mouseup**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;MouseEvent | PointerEvent&gt;
- **touchup**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;TouchEvent | PointerEvent&gt;
- **penup**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;PointerEvent&gt;
- **cancel**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;TouchEvent | PointerEvent&gt;
- **mousecancel**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;PointerEvent&gt;
- **touchcancel**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;TouchEvent | PointerEvent&gt;
- **pencancel**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;PointerEvent&gt;
- **move**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;MouseEvent | TouchEvent | PointerEvent&gt;
- **mousemove**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;MouseEvent | PointerEvent&gt;
- **touchmove**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;TouchEvent | PointerEvent&gt;
- **penmove**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;PointerEvent&gt;
- **wheel**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;WheelEvent&gt;
- **mousewheel**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;WheelEvent&gt;
- **touchwheel**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;WheelEvent&gt;
- **penwheel**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;WheelEvent&gt;
- **enter**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;MouseEvent | TouchEvent | PointerEvent&gt;
- **mouseenter**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;MouseEvent | PointerEvent&gt;
- **touchenter**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;TouchEvent | PointerEvent&gt;
- **penenter**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;PointerEvent&gt;
- **exit**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;MouseEvent | TouchEvent | PointerEvent&gt;
- **mouseexit**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;MouseEvent | PointerEvent&gt;
- **touchexit**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;TouchEvent | PointerEvent&gt;
- **penexit**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;PointerEvent&gt;
- **over**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;MouseEvent | TouchEvent | PointerEvent&gt;
- **mouseover**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;MouseEvent | PointerEvent&gt;
- **touchover**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;TouchEvent | PointerEvent&gt;
- **penover**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;PointerEvent&gt;
- **out**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;MouseEvent | TouchEvent | PointerEvent&gt;
- **mouseout**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;MouseEvent | PointerEvent&gt;
- **touchout**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;TouchEvent | PointerEvent&gt;
- **penout**?: [SceneryListenerFunction](../scenery/TInputListener.md#SceneryListenerFunction)&lt;PointerEvent&gt;




## Type SceneryListenerFunction {: #SceneryListenerFunction }


```js
import type { SceneryListenerFunction } from 'scenerystack/scenery';
```


( event: [SceneryEvent](../scenery/SceneryEvent.md)&lt;T&gt; ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>



## Type SceneryNullableListenerFunction {: #SceneryNullableListenerFunction }


```js
import type { SceneryNullableListenerFunction } from 'scenerystack/scenery';
```


( event: [SceneryEvent](../scenery/SceneryEvent.md)&lt;T&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>



## Type SupportedEventTypes {: #SupportedEventTypes }


Exclude all but the actual browser events

```js
import type { SupportedEventTypes } from 'scenerystack/scenery';
```


keyof StrictOmit&lt;[TInputListener](../scenery/TInputListener.md), 'interrupt' | 'cursor' | 'listener' | 'createPanTargetBounds'&gt;



## Source Code

See the source for [TInputListener.ts](https://github.com/phetsims/scenery/blob/main/js/input/TInputListener.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
