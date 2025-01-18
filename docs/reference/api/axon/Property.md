# Property

## Overview



## Class Property {: #Property }


Adds initial value and reset, and a mutable interface.

@author Sam Reid (PhET Interactive Simulations)

```js
import { Property } from 'scenerystack/axon';
```
### Constructor

#### new Property( value : <span style="font-weight: 400;">T</span>, providedOptions? : <span style="font-weight: 400;">[PropertyOptions](../axon/ReadOnlyProperty.md#PropertyOptions)&lt;T&gt;</span> ) {: #Property-constructor data-toc-label='new Property' }

### Instance Methods

#### getInitialValue() : <span style="font-weight: 400;">T</span> {: #getInitialValue data-toc-label='getInitialValue' }

Returns the initial value of this Property.

#### setInitialValue( initialValue : <span style="font-weight: 400;">T</span> ) {: #setInitialValue data-toc-label='setInitialValue' }

Stores the specified value as the initial value, which will be taken on reset. Sims should use this sparingly,
typically only in situations where the initial value is unknowable at instantiation.

#### reset() {: #reset data-toc-label='reset' }

#### set( value : <span style="font-weight: 400;">T</span> ) {: #set data-toc-label='set' }

Overridden to make public

#### isSettable() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isSettable data-toc-label='isSettable' }



## Source Code

See the source for [Property.ts](https://github.com/phetsims/axon/blob/main/js/Property.ts) in the [axon](https://github.com/phetsims/axon) repository.
