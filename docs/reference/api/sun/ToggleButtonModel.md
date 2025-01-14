# ToggleButtonModel

## Overview

Model for a toggle button that changes value on each "up" event when the button is released.

@author Sam Reid (PhET Interactive Simulations)
@author John Blanco (PhET Interactive Simulations)

## Class ToggleButtonModel {: #ToggleButtonModel }


```js
import { ToggleButtonModel } from 'scenerystack/sun';
```
### Constructor

#### new ToggleButtonModel( valueOff : <span style="font-weight: 400;">T</span>, valueOn : <span style="font-weight: 400;">T</span>, property : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;T&gt;</span>, providedOptions? : <span style="font-weight: 400;">[ToggleButtonModelOptions](../sun/ToggleButtonModel.md#ToggleButtonModelOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### valueProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;T&gt;</span> {: #valueProperty data-toc-label='valueProperty' }

(readonly)

#### valueOff : <span style="font-weight: 400;">T</span> {: #valueOff data-toc-label='valueOff' }

(readonly)

#### valueOn : <span style="font-weight: 400;">T</span> {: #valueOn data-toc-label='valueOn' }

(readonly)



## Type ToggleButtonModelOptions {: #ToggleButtonModelOptions }


```js
import type { ToggleButtonModelOptions } from 'scenerystack/sun';
```
[ButtonModelOptions](../sun/ButtonModel.md#ButtonModelOptions)



## Source Code

See the source for [ToggleButtonModel.ts](https://github.com/phetsims/sun/blob/main/js/buttons/ToggleButtonModel.ts) in the [sun](https://github.com/phetsims/sun) repository.
