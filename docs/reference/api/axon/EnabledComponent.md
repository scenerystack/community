# EnabledComponent

## Overview

Base class that defines a settable Property that determines whether the Object is enabled or not. This includes
support for phet-io instrumentation and a variety of options to customize the enabled Property as well as how it is
created.

@author Michael Kauzmann (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)

## Class EnabledComponent {: #EnabledComponent }


```js
import { EnabledComponent } from 'scenerystack/axon';
```
### Constructor

#### new EnabledComponent( providedOptions? : <span style="font-weight: 400;">[EnabledComponentOptions](../axon/EnabledComponent.md#EnabledComponentOptions)</span> ) {: #EnabledComponent-constructor data-toc-label='new EnabledComponent' }

### Instance Methods

#### isEnabled() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isEnabled data-toc-label='isEnabled' }

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### enabledProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #enabledProperty data-toc-label='enabledProperty' }



## Type EnabledComponentOptions {: #EnabledComponentOptions }


```js
import type { EnabledComponentOptions } from 'scenerystack/axon';
```


- **enabledProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **enabled**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **enabledPropertyOptions**?: [EnabledPropertyOptions](../axon/EnabledProperty.md#EnabledPropertyOptions) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **phetioEnabledPropertyInstrumented**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; Pick&lt;[PhetioObjectOptions](../tandem/PhetioObject.md#PhetioObjectOptions), "[tandem](../tandem/tandem.md)"&gt; &amp; [DisposableOptions](../axon/Disposable.md#DisposableOptions)




## Source Code

See the source for [EnabledComponent.ts](https://github.com/phetsims/axon/blob/main/js/EnabledComponent.ts) in the [axon](https://github.com/phetsims/axon) repository.