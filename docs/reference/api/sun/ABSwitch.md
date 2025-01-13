# ABSwitch

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

#### new ABSwitch( property : <span style="font-weight: 400; opacity: 80%;">Property&lt;T&gt;</span>, valueA : <span style="font-weight: 400; opacity: 80%;">T</span>, labelA : <span style="font-weight: 400; opacity: 80%;">Node</span>, valueB : <span style="font-weight: 400; opacity: 80%;">T</span>, labelB : <span style="font-weight: 400; opacity: 80%;">Node</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">ABSwitchOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

#### onEnabledPropertyChange( enabled : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #onEnabledPropertyChange data-toc-label='onEnabledPropertyChange' }

(protected)

Provide a custom look for when this switch is disabled. We are overriding the default implementation so that
the unselected label does not appear to be doubly disabled when the ABSwitch is disabled.
See https://github.com/phetsims/sun/issues/853

### Instance Properties

#### onInputEmitter : <span style="font-weight: 400; opacity: 80%;">TEmitter</span> {: #onInputEmitter data-toc-label='onInputEmitter' }

(readonly)

Emits on input that results in a change to the Property value, after the Property has changed.



## Source Code

See the source for [ABSwitch.ts](https://github.com/phetsims/sun/blob/main/js/ABSwitch.ts) in the [sun](https://github.com/phetsims/sun) repository.
