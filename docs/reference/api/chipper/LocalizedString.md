# LocalizedString

## Overview

Sets up a system of Properties to handle translation fallback and phet-io support for a single translated string.

@author Jonathan Olson &lt;jonathan.olson&gt;

## Class LocalizedString {: #LocalizedString }


```js
import { LocalizedString } from 'scenerystack/chipper';
```
### Constructor

#### new LocalizedString( stringKey : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, localeToTranslationMap : <span style="font-weight: 400;">[LocalizedStringStateDelta](../chipper/LocalizedString.md#LocalizedStringStateDelta)</span>, tandem : <span style="font-weight: 400;">[Tandem](../tandem/Tandem.md)</span>, metadata? : <span style="font-weight: 400;">Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;</span> ) {: #LocalizedString-constructor data-toc-label='new LocalizedString' }

### Instance Methods

#### getStateDelta() : <span style="font-weight: 400;">[LocalizedStringStateDelta](../chipper/LocalizedString.md#LocalizedStringStateDelta)</span> {: #getStateDelta data-toc-label='getStateDelta' }

Returns an object that shows the changes of strings from their initial values. This includes whether strings are
marked as "overridden"

#### setStateDelta( state : <span style="font-weight: 400;">[LocalizedStringStateDelta](../chipper/LocalizedString.md#LocalizedStringStateDelta)</span> ) {: #setStateDelta data-toc-label='setStateDelta' }

Take a state from getStateDelta, and apply it.

#### getLocaleSpecificProperty( locale : <span style="font-weight: 400;">[Locale](../joist/localeProperty.md#Locale)</span> ) : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> {: #getLocaleSpecificProperty data-toc-label='getLocaleSpecificProperty' }

Returns the locale-specific Property for any locale (lazily creating it if necessary)

#### dispose() {: #dispose data-toc-label='dispose' }

#### restoreInitialValue( locale : <span style="font-weight: 400;">[Locale](../joist/localeProperty.md#Locale)</span> ) {: #restoreInitialValue data-toc-label='restoreInitialValue' }

Reset to the initial value for the specified locale, used for testing.

### Instance Properties

#### property : <span style="font-weight: 400;">[LocalizedStringProperty](../chipper/LocalizedStringProperty.md)</span> {: #property data-toc-label='property' }

(readonly)

Public-facing IProperty&lt;string&gt;, used by string modules

### Static Methods

#### getLocaleFallbacks( locale : <span style="font-weight: 400;">[Locale](../joist/localeProperty.md#Locale)</span> ) : <span style="font-weight: 400;">[Locale](../joist/localeProperty.md#Locale)[]</span> {: #getLocaleFallbacks data-toc-label='getLocaleFallbacks' }

#### getNestedStringProperties( stringData : <span style="font-weight: 400;">StringData</span> ) : <span style="font-weight: 400;">ToStringPropertyMap&lt;StringData&gt;</span> {: #getNestedStringProperties data-toc-label='getNestedStringProperties' }

Computes a nested map of LocalizedStringProperties from a nested input structure of strings.
The string Properties will change values based on the current locale
(stored in localeProperty).

For instance, if we have an example StringMap:

const stringMap = {
  en: {
    a: 'a',
    nest: {
      x: 'x',
      y: 'y'
    }
  },
  hi: {
    'a': 'ए',
    'b': 'ब',
    nest: {
      x: 'एक्स',
    }
  }
}

Then the resulting LocalizedString.getNestedStringProperties( stringMap ) would
have the structure:

{
  aStringProperty: LocalizedStringProperty,
  bStringProperty: LocalizedStringProperty,
  nest: {
    xStringProperty: LocalizedStringProperty,
    yStringProperty: LocalizedStringProperty
  }
}

It is recommended to put each translation file into a separate JSON file,
and import them into a single file that will be passed to this function.

@param stringData



## Type LocalizedStringStateDelta {: #LocalizedStringStateDelta }


```js
import type { LocalizedStringStateDelta } from 'scenerystack/chipper';
```


Partial&lt;Record&lt;[Locale](../joist/localeProperty.md#Locale), TranslationString&gt;&gt;



## Type StringMap {: #StringMap }


Has a nested structure (with strings as leaves) for locales.

```js
import type { StringMap } from 'scenerystack/chipper';
```


Partial&lt;Record&lt;[Locale](../joist/localeProperty.md#Locale), [StringMapEntry](../chipper/LocalizedString.md#StringMapEntry)&gt;&gt;



## Type StringMapEntry {: #StringMapEntry }


A nested structure with strings as leaves.

```js
import type { StringMapEntry } from 'scenerystack/chipper';
```


<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | {  }



## Type StringsStateStateObject {: #StringsStateStateObject }


Where "string" is a phetioID

```js
import type { StringsStateStateObject } from 'scenerystack/chipper';
```


- **data**: Record&lt;[PhetioID](../tandem/phet-io-types.md#PhetioID), [LocalizedStringStateDelta](../chipper/LocalizedString.md#LocalizedStringStateDelta)&gt;




## Source Code

See the source for [LocalizedString.ts](https://github.com/phetsims/chipper/blob/main/js/browser/LocalizedString.ts) in the [chipper](https://github.com/phetsims/chipper) repository.
