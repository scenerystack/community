# LocalizedMessageProperty

## Overview

A Property for the Fluent module that will recompute the value when the FluentBundle
changes. The fluent bundle is dependent on the locale, so this Property will also
recompute when the locale changes.

A reference to the bundle is available so that it can be used to format the message with arguments.

@author Jesse Greenberg (PhET Interactive Simulations)

## Class LocalizedMessageProperty {: #LocalizedMessageProperty }


```js
import { LocalizedMessageProperty } from 'scenerystack/chipper';
```
### Constructor

#### new LocalizedMessageProperty( bundleProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[FluentBundle](../chipper/FluentLibrary.md#FluentBundle) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span>, derivation : <span style="font-weight: 400;">( bundle: [FluentBundle](../chipper/FluentLibrary.md#FluentBundle) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> ) =&gt; [FluentPattern](../chipper/FluentLibrary.md#FluentPattern) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #LocalizedMessageProperty-constructor data-toc-label='new LocalizedMessageProperty' }

### Instance Methods



### Instance Properties

#### bundleProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[FluentBundle](../chipper/FluentLibrary.md#FluentBundle) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #bundleProperty data-toc-label='bundleProperty' }

(readonly)



## Source Code

See the source for [LocalizedMessageProperty.ts](https://github.com/phetsims/chipper/blob/main/js/browser/LocalizedMessageProperty.ts) in the [chipper](https://github.com/phetsims/chipper) repository.
