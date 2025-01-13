# LocalizedString

## Overview

Sets up a system of Properties to handle translation fallback and phet-io support for a single translated string.

@author Jonathan Olson &lt;jonathan.olson&gt;

## Class LocalizedString {: #LocalizedString }


```js
import { LocalizedString } from 'scenerystack/chipper';
```
### Constructor

#### new LocalizedString( stringKey : <span style="font-weight: 400; opacity: 80%;">string</span>, localeToTranslationMap : <span style="font-weight: 400; opacity: 80%;">LocalizedStringStateDelta</span>, tandem : <span style="font-weight: 400; opacity: 80%;">Tandem</span>, metadata? : <span style="font-weight: 400; opacity: 80%;">Record&lt;string, unknown&gt;</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getStateDelta() : <span style="font-weight: 400; opacity: 80%;">LocalizedStringStateDelta</span> {: #getStateDelta data-toc-label='getStateDelta' }

Returns an object that shows the changes of strings from their initial values. This includes whether strings are
marked as "overridden"

#### setStateDelta( state : <span style="font-weight: 400; opacity: 80%;">LocalizedStringStateDelta</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setStateDelta data-toc-label='setStateDelta' }

Take a state from getStateDelta, and apply it.

#### getLocaleSpecificProperty( locale : <span style="font-weight: 400; opacity: 80%;">Locale</span> ) : <span style="font-weight: 400; opacity: 80%;">TProperty&lt;string&gt;</span> {: #getLocaleSpecificProperty data-toc-label='getLocaleSpecificProperty' }

Returns the locale-specific Property for any locale (lazily creating it if necessary)

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

#### restoreInitialValue( locale : <span style="font-weight: 400; opacity: 80%;">Locale</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #restoreInitialValue data-toc-label='restoreInitialValue' }

Reset to the initial value for the specified locale, used for testing.

### Instance Properties

#### property : <span style="font-weight: 400; opacity: 80%;">LocalizedStringProperty</span> {: #property data-toc-label='property' }

(readonly)

Public-facing IProperty&lt;string&gt;, used by string modules

### Static Methods

#### getLocaleFallbacks( locale : <span style="font-weight: 400; opacity: 80%;">Locale</span> ) : <span style="font-weight: 400; opacity: 80%;">Locale[]</span> {: #getLocaleFallbacks data-toc-label='getLocaleFallbacks' }

#### getNestedStringProperties( stringData : <span style="font-weight: 400; opacity: 80%;">StringData</span> ) : <span style="font-weight: 400; opacity: 80%;">ToStringPropertyMap&lt;StringData&gt;</span> {: #getNestedStringProperties data-toc-label='getNestedStringProperties' }

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



## Source Code

See the source for [LocalizedString.ts](https://github.com/phetsims/chipper/blob/main/js/browser/LocalizedString.ts) in the [chipper](https://github.com/phetsims/chipper) repository.
