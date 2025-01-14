# Enumeration

## Overview

This implementation auto-detects the enumeration values by Object.keys and instanceof. Every property that has a
type matching the enumeration type is marked as a value.  See sample usage in Orientation.ts.

For general pattern see https://github.com/phetsims/phet-info/blob/main/doc/phet-software-design-patterns.md#enumeration

This creates 2-way maps (key-to-value and value-to-key) for ease of use and to enable phet-io serialization.

class T extends EnumerationValue {
    static a=new T();
    static b =new T();
    getName(){return 'he';}
    get thing(){return 'text';}
    static get age(){return 77;}
    static enumeration = new Enumeration( T );
}
T.enumeration.keys =&gt; ['a', 'b']
T.enumeration.values =&gt; [T, T]

Note how `keys` only picks up 'a' and 'b'.

@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)

## Class Enumeration {: #Enumeration }


```js
import { Enumeration } from 'scenerystack/phet-core';
```
### Constructor

#### new Enumeration( Enumeration : <span style="font-weight: 400;">Constructor&lt;T&gt;</span>, providedOptions? : <span style="font-weight: 400;">[EnumerationOptions](../phet-core/Enumeration.md#EnumerationOptions)&lt;T&gt;</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getKey( value : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getKey data-toc-label='getKey' }

#### getValue( key : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;">T</span> {: #getValue data-toc-label='getValue' }

#### includes( value : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #includes data-toc-label='includes' }

### Instance Properties

#### values : <span style="font-weight: 400;">T[]</span> {: #values data-toc-label='values' }

(readonly)

#### keys : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]</span> {: #keys data-toc-label='keys' }

(readonly)

#### Enumeration : <span style="font-weight: 400;">Constructor&lt;T&gt; &amp; Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, T&gt;</span> {: #Enumeration data-toc-label='Enumeration' }

(readonly)

#### phetioDocumentation : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #phetioDocumentation data-toc-label='phetioDocumentation' }

(readonly)



## Type EnumerationOptions {: #EnumerationOptions }


```js
import type { EnumerationOptions } from 'scenerystack/phet-core';
```


- **phetioDocumentation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **instanceType**?: Constructor&lt;T&gt;




## Source Code

See the source for [Enumeration.ts](https://github.com/phetsims/phet-core/blob/main/js/Enumeration.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
