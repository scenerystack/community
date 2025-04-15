# LocalizedStringProperty

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/chipper/blob/main/js/browser/LocalizedStringProperty.ts](https://github.com/phetsims/chipper/blob/main/js/browser/LocalizedStringProperty.ts) for the most up-to-date information.

## Overview

The main Property for a translated string (subtyped so we can get the stringKey, or other things in the future).

@author Jonathan Olson &lt;jonathan.olson&gt;

## Class LocalizedStringProperty {: #LocalizedStringProperty }


```js
import { LocalizedStringProperty } from 'scenerystack/chipper';
```
### Constructor

#### new LocalizedStringProperty( localizedString : <span style="font-weight: 400;">[LocalizedString](../chipper/LocalizedString.md)</span>, tandem : <span style="font-weight: 400;">[Tandem](../tandem/Tandem.md)</span>, metadata? : <span style="font-weight: 400;">Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;</span> ) {: #LocalizedStringProperty-constructor data-toc-label='new LocalizedStringProperty' }

### Instance Methods

#### getTranslatedStringProperty( locale : <span style="font-weight: 400;">[Locale](../joist/localeProperty.md#Locale)</span> ) : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> {: #getTranslatedStringProperty data-toc-label='getTranslatedStringProperty' }

Returns a translation-specific Property for the given locale. This Property will not change when the localeProperty
(current locale) changes, but instead will only change during translation updates, stringTests, etc.



## Source Code

See the source for [LocalizedStringProperty.ts](https://github.com/phetsims/chipper/blob/main/js/browser/LocalizedStringProperty.ts) in the [chipper](https://github.com/phetsims/chipper) repository.
