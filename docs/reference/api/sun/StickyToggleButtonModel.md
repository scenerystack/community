# StickyToggleButtonModel

## Overview

Model for a toggle button that sticks when pushed down and pops up when pushed a second time. Unlike other general
sun models, 'sticky' implies a specific type of user-interface component, a button that is either popped up or
pressed down.

@author Sam Reid (PhET Interactive Simulations)
@author John Blanco (PhET Interactive Simulations)

## Class StickyToggleButtonModel {: #StickyToggleButtonModel }


```js
import { StickyToggleButtonModel } from 'scenerystack/sun';
```
### Constructor

#### new StickyToggleButtonModel( valueUp : <span style="font-weight: 400; opacity: 80%;">T</span>, valueDown : <span style="font-weight: 400; opacity: 80%;">T</span>, valueProperty : <span style="font-weight: 400; opacity: 80%;">TProperty&lt;T&gt;</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">StickyToggleButtonModelOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

### Instance Properties

#### valueProperty : <span style="font-weight: 400; opacity: 80%;">TProperty&lt;T&gt;</span> {: #valueProperty data-toc-label='valueProperty' }

(readonly)

#### valueUp : <span style="font-weight: 400; opacity: 80%;">T</span> {: #valueUp data-toc-label='valueUp' }

(readonly)

#### valueDown : <span style="font-weight: 400; opacity: 80%;">T</span> {: #valueDown data-toc-label='valueDown' }

(readonly)



## Source Code

See the source for [StickyToggleButtonModel.ts](https://github.com/phetsims/sun/blob/main/js/buttons/StickyToggleButtonModel.ts) in the [sun](https://github.com/phetsims/sun) repository.
