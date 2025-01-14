# TModel

## Overview



## Type TModel {: #TModel }


The model type for Sim.ts must have a reset function and if it has a step function, it must have this signature.
See https://github.com/phetsims/joist/issues/861 for the origins and design history of TModel.

@author Sam Reid (PhET Interactive Simulations)

```js
import type { TModel } from 'scenerystack/joist';
```
- **step**?: ( dt: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **reset**: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>




## Source Code

See the source for [TModel.ts](https://github.com/phetsims/joist/blob/main/js/TModel.ts) in the [joist](https://github.com/phetsims/joist) repository.
