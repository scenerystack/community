# ABSwitch

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/sun/blob/main/js/ABSwitch.ts](https://github.com/phetsims/sun/blob/main/js/ABSwitch.ts) for the most up-to-date information.

## Overview

ABSwitch is a control for switching between 2 choices, referred to as 'A' &amp; 'B'.
Choice 'A' is to the left of the switch, choice 'B' is to the right.
This decorates ToggleSwitch with labels.

@author Chris Malley (PixelZoom, Inc.)

## Class ABSwitch {: #ABSwitch }


```js
import { ABSwitch } from 'scenerystack/sun';
```
### Constructor

#### new ABSwitch( property : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;T&gt;</span>, valueA : <span style="font-weight: 400;">T</span>, labelA : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, valueB : <span style="font-weight: 400;">T</span>, labelB : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[ABSwitchOptions](../sun/ABSwitch.md#ABSwitchOptions)</span> ) {: #ABSwitch-constructor data-toc-label='new ABSwitch' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

#### onEnabledPropertyChange( enabled : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #onEnabledPropertyChange data-toc-label='onEnabledPropertyChange' }

(protected)

Provide a custom look for when this switch is disabled. We are overriding the default implementation so that
the unselected label does not appear to be doubly disabled when the ABSwitch is disabled.
See https://github.com/phetsims/sun/issues/853

### Instance Properties

#### onInputEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)</span> {: #onInputEmitter data-toc-label='onInputEmitter' }

(readonly)

Emits on input that results in a change to the Property value, after the Property has changed.



## Type ABSwitchOptions {: #ABSwitchOptions }


Accessible name for the ABSwitch is created by combining the accessible names of the labels. See options.

```js
import type { ABSwitchOptions } from 'scenerystack/sun';
```


- **toggleSwitchOptions**?: [ToggleSwitchOptions](../sun/ToggleSwitch.md#ToggleSwitchOptions)
<br>  options passed to ToggleSwitch
- **setLabelEnabled**?: ( labelNode: [Node](../scenery/Node.md), enabled: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
<br>  method of making a label look disabled
- **valueAAccessibleName**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Accessible names for each value. They will be inserted into a pattern string for the accessible name
  of the ABSwitch. If not provided, ABSwitch will try to find default values from the label Nodes. The
  final string will look like:
  "{{valueAAccessibleName}}, Switch to {{valueBAccessibleName}}"
- **valueBAccessibleName**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **centerOnSwitch**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  if true, this.center will be at the center of the ToggleSwitch
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[TrimParallelDOMOptions](../scenery/ParallelDOM.md#TrimParallelDOMOptions)&lt;[HBoxOptions](../scenery/HBox.md#HBoxOptions)&gt;, "accessibleName"&gt;




## Source Code

See the source for [ABSwitch.ts](https://github.com/phetsims/sun/blob/main/js/ABSwitch.ts) in the [sun](https://github.com/phetsims/sun) repository.
