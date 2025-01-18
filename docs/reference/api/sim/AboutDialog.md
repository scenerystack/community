# AboutDialog

## Overview

AboutDialog displays information about the simulation -- its title, version number, credits, etc.

@author Sam Reid (PhET Interactive Simulations)

## Class AboutDialog {: #AboutDialog }


```js
import { AboutDialog } from 'scenerystack/sim';
```
### Constructor

#### new AboutDialog( nameStringProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, version : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, credits : <span style="font-weight: 400;">[CreditsData](../joist/CreditsNode.md#CreditsData)</span>, providedOptions? : <span style="font-weight: 400;">[AboutDialogOptions](../sim/AboutDialog.md#AboutDialogOptions)</span> ) {: #AboutDialog-constructor data-toc-label='new AboutDialog' }

### Instance Methods

#### show() {: #show data-toc-label='show' }

When the dialog is shown, add update listeners.

#### hide() {: #hide data-toc-label='hide' }

When the dialog is hidden, remove update listeners.



## Type AboutDialogOptions {: #AboutDialogOptions }


```js
import type { AboutDialogOptions } from 'scenerystack/sim';
```


[DialogOptions](../sim/Dialog.md#DialogOptions)



## Source Code

See the source for [AboutDialog.ts](https://github.com/phetsims/joist/blob/main/js/AboutDialog.ts) in the [joist](https://github.com/phetsims/joist) repository.
