# StepButton

## Overview

Generalized button for stepping forward or back.  While this class is not private, clients will generally use the
convenience subclasses: StepForwardButton and StepBackwardButton

@author Sam Reid (PhET Interactive Simulations)
@author Chris Malley (PixelZoom, Inc.)

## Class StepButton {: #StepButton }


```js
import { StepButton } from 'scenerystack/scenery-phet';
```
### Constructor

#### new StepButton( providedOptions? : <span style="font-weight: 400;">[StepButtonOptions](../scenery-phet/StepButton.md#StepButtonOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods





## Type StepButtonOptions {: #StepButtonOptions }


```js
import type { StepButtonOptions } from 'scenerystack/scenery-phet';
```


- **radius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **direction**?: Direction
- **iconFill**?: [TPaint](../scenery/TPaint.md)
- &amp; StrictOmit&lt;[RoundPushButtonOptions](../sun/RoundPushButton.md#RoundPushButtonOptions), "content" | "xContentOffset" | "xMargin" | "yMargin"&gt;




## Source Code

See the source for [StepButton.ts](https://github.com/phetsims/scenery-phet/blob/main/js/buttons/StepButton.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
