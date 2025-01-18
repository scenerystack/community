# ContextLossFailureDialog

## Overview

Failure message displayed when a WebGL context loss is experienced and we can't recover. Offers a button to reload
the simulation.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ContextLossFailureDialog {: #ContextLossFailureDialog }


```js
import { ContextLossFailureDialog } from 'scenerystack/sim';
```
### Constructor

#### new ContextLossFailureDialog( providedOptions? : <span style="font-weight: 400;">[ContextLossFailureDialogOptions](../sim/ContextLossFailureDialog.md#ContextLossFailureDialogOptions)</span> ) {: #ContextLossFailureDialog-constructor data-toc-label='new ContextLossFailureDialog' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

#### hide() {: #hide data-toc-label='hide' }

Invokes the reload callback when the dialog is hidden.
See https://github.com/phetsims/scenery-phet/issues/373.

#### hideWithoutReload() {: #hideWithoutReload data-toc-label='hideWithoutReload' }

Hides the dialog without invoking the reload callback.



## Type ContextLossFailureDialogOptions {: #ContextLossFailureDialogOptions }


```js
import type { ContextLossFailureDialogOptions } from 'scenerystack/sim';
```


- **reload**?: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
<br>  By default, pressing the Reload button reloads the simulation in the browser.
  Provided as an option so that scenery-phet demo app can test without causing automated-testing failures.
  See https://github.com/phetsims/scenery-phet/issues/375
- &amp; [DialogOptions](../sim/Dialog.md#DialogOptions)




## Source Code

See the source for [ContextLossFailureDialog.ts](https://github.com/phetsims/scenery-phet/blob/main/js/ContextLossFailureDialog.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
