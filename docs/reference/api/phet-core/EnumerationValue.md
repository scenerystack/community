# EnumerationValue

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/phet-core/blob/main/js/EnumerationValue.ts](https://github.com/phetsims/phet-core/blob/main/js/EnumerationValue.ts) for the most up-to-date information.

## Overview

EnumerationValue is the base class for enumeration value instances.
See https://github.com/phetsims/phet-info/blob/main/doc/phet-software-design-patterns.md#enumeration

PhET's Enumeration pattern is:

class MyEnumeration extends EnumerationValue {
  public static readonly VALUE_1 = new MyEnumeration();
  public static readonly VALUE_2 = new MyEnumeration();

  // Make sure this is last, once all EnumerationValues have been declared statically.
  public static readonly enumeration = new Enumeration( MyEnumeration );
}

// Usage
console.log( MyEnumeration.VALUE_1 );
const printValue = enumValue =&gt; {
  affirm( enumValue.enumeration.values.includes(enumValue));
  console.log( enumValue );
};
printValue( MyEnumeration.VALUE_2 );

@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)

## Class EnumerationValue {: #EnumerationValue }


```js
import { EnumerationValue } from 'scenerystack/phet-core';
```
### Constructor

#### new EnumerationValue() {: #EnumerationValue-constructor data-toc-label='new EnumerationValue' }

### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

### Static Properties

#### sealedCache : <span style="font-weight: 400;">Set</span> {: #sealedCache data-toc-label='sealedCache' }

After an Enumeration is constructed, no new instances of that exact type can be made (though it is OK to
create subtypes)



## Source Code

See the source for [EnumerationValue.ts](https://github.com/phetsims/phet-core/blob/main/js/EnumerationValue.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
