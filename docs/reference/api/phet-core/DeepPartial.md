# DeepPartial

## Overview



## Type DeepPartial {: #DeepPartial }


The DeepPartial type recursively transforms all properties of a given type `T` into optional properties. This uses
conditional and mapped types:
@see https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
@see https://www.typescriptlang.org/docs/handbook/2/conditional-types.html

It can handle nested objects, arrays, and primitive types.

@template T - The type to be deeply transformed into optional properties.

@author Michael Kauzmann (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)

```js
import type { DeepPartial } from 'scenerystack/phet-core';
```


{
  /**
   * This is a mapped type that iterates over all the keys (properties) of T.
   */
  [P in keyof T]?:
  /**
   * Check if the current property type is an array.
   *
   * `T[P] extends Array&lt;infer U&gt;` checks if T[P] is an array type, and if so,
   * infers its item type as U. This is a conditional type.
   */
  T[P] extends Array&lt;infer U&gt; ?
    /**
     * If the current property type is an array, we want to make its item type
     * optional as well. This means if you have Array&lt;{ name: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> }&gt;, we want
     * to transform it to Array&lt;{ name?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> }&gt;.
     *
     * We achieve <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span> by applying [DeepPartial](../phet-core/DeepPartial.md) to the item type U.
     */
  Array&lt;[DeepPartial](../phet-core/DeepPartial.md)&lt;U&gt;&gt; :
    /**
     * If the current property is not an array, we check if it's an object.
     * This will include most non-primitive types except for arrays.
     */
  T[P] extends object ?
    /**
     * If the current property type is an object, we want to make all its
     * properties optional as well.
     *
     * So, we apply [DeepPartial](../phet-core/DeepPartial.md) recursively to T[P].
     */
  [DeepPartial](../phet-core/DeepPartial.md)&lt;T[P]&gt; :
    /**
     * If the current property is neither an array nor an object, it's a
     * primitive type (like <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, etc.).
     *
     * In <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span> case, we just use the property type itself. We don't need to do
     * anything with primitive types because they can't have nested properties.
     */
  T[P];
}



## Source Code

See the source for [DeepPartial.ts](https://github.com/phetsims/phet-core/blob/main/js/types/DeepPartial.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
